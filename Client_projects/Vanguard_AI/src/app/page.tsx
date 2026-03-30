"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Stagger variant for 'Fluid Motion' unfold effect
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 100, damping: 15 } 
  },
};

export default function Home() {
  const [shimmer, setShimmer] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  // 5s Shimmer effect trigger for the 'Join Waitlist' button
  useEffect(() => {
    const interval = setInterval(() => {
      setShimmer(true);
      setTimeout(() => setShimmer(false), 1500); // Shimmer duration
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // Mock API Network Delay
    setTimeout(() => {
      setStatus("success");
    }, 1200);
  };

  return (
    <main className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center p-6 sm:p-24 selection:bg-purple-500/30">
      
      {/* Background Light Leaks */}
      <div className="light-leak top-[-10%] left-[-10%] w-[500px] h-[500px]" />
      <div className="light-leak bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(59,130,246,0.8)_0%,rgba(0,0,0,0)_70%)]" style={{ animationDelay: '-5s' }} />

      <motion.div
        className="z-10 w-full max-w-5xl flex flex-col items-center text-center space-y-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* HERO SECTION / PAS FRAMEWORK */}
        <motion.div variants={itemVariants} className="space-y-6">
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-3 py-1 text-sm font-medium text-purple-200">
            <span className="flex h-2 w-2 rounded-full bg-purple-500 mr-2 animate-pulse"></span>
            Agentic Orchestration Protocol v2.0
          </div>
          
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-white/50">
            The era of generic <br /> AI wrappers is over.
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Stop losing 15+ hours a week trying to sequence disjointed APIs. 
            Welcome to the bespoke, autonomous B2B engine that scales with your ambition.
          </p>
        </motion.div>

        {/* CTA SECTION */}
        <motion.div variants={itemVariants} className="w-full max-w-md space-y-4">
          {status === "success" ? (
             <motion.div 
              initial={{ scale: 0.9, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1 }} 
              className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md"
             >
                <h3 className="text-xl font-bold text-white mb-2">Welcome to the Vanguard.</h3>
                <p className="text-sm text-purple-200">Your spot is secured. We'll be in touch soon.</p>
             </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                placeholder="Enter your work email..."
                className="flex-1 rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent backdrop-blur-sm transition-all"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="relative overflow-hidden group rounded-xl bg-white text-black font-semibold px-8 py-3 transition-transform active:scale-95 disabled:opacity-70 disabled:active:scale-100"
              >
                {/* Shimmer Effect */}
                {shimmer && (
                  <motion.div
                    className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent"
                    initial={{ x: "-100%" }}
                    animate={{ x: "200%" }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                  />
                )}
                {status === "loading" ? "Securing..." : "Join Waitlist"}
              </button>
            </form>
          )}
          <p className="text-xs text-white/40 font-medium">Join 1,200+ leading pioneers.</p>
        </motion.div>

        {/* BENTO GRID ABSTRACT VISUALIZATION */}
        <motion.div variants={itemVariants} className="w-full mt-16 pt-16 border-t border-white/10 border-dashed">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-span-1 md:col-span-2 rounded-3xl bg-white/5 border border-white/10 p-8 backdrop-blur-md relative overflow-hidden group hover:bg-white/10 transition-colors duration-500 text-left h-64 flex flex-col justify-end">
               <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 transition-opacity">
                 {/* Abstract visual */}
                 <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
               </div>
               <h3 className="text-2xl font-bold text-white mb-2">Global State Synchronization</h3>
               <p className="text-muted-foreground text-sm">Real-time edge replication across 35 regions.</p>
            </div>
            
            <div className="col-span-1 rounded-3xl bg-white/5 border border-white/10 p-8 backdrop-blur-md relative overflow-hidden group hover:bg-white/10 transition-colors duration-500 text-left h-64 flex flex-col justify-end">
               <div className="absolute top-6 right-6 p-3 rounded-full bg-purple-500/20 text-purple-300">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
               </div>
               <h3 className="text-xl font-bold text-white mb-2">Zero-Friction Billing</h3>
               <p className="text-muted-foreground text-sm">Automated reconciliation.</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
}
