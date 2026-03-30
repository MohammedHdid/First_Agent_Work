import { NextResponse } from "next/server";

// Simple in-memory mock store for leads (since we aren't using Supabase yet)
const leads: { email: string; timestamp: Date }[] = [];

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    // Simulate Network Delay (500ms + random jitter up to 500ms)
    await new Promise((resolve) => setTimeout(resolve, 500 + Math.random() * 500));

    // Store in mock DB
    leads.push({ email, timestamp: new Date() });

    console.log(`[API] New Vanguard Lead captured: ${email}`);

    return NextResponse.json({ success: true, message: "Welcome to the Vanguard." }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
