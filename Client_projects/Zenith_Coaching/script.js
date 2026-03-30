/* ═══════════════════════════════════════════
   ZENITH COACHING — Interactive Logic
   ═══════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

    /* ── Navbar Scroll Effect ── */
    const navbar = document.getElementById('navbar');
    const scrollThreshold = 60;

    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > scrollThreshold);
    });

    /* ── Mobile Menu ── */
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('open');
    });

    // Close mobile menu on link click
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('open');
        });
    });

    /* ── Smooth Scroll ── */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                const offset = 80;
                const position = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top: position, behavior: 'smooth' });
            }
        });
    });

    /* ── Scroll Reveal (Intersection Observer) ── */
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    revealElements.forEach(el => revealObserver.observe(el));

    /* ── Counter Animation ── */
    const counters = document.querySelectorAll('.stat-number[data-count]');

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.dataset.count);
                animateCounter(el, target);
                counterObserver.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(c => counterObserver.observe(c));

    function animateCounter(el, target) {
        const duration = 2000;
        const start = performance.now();

        function update(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
            const current = Math.round(eased * target);
            el.textContent = current;
            if (progress < 1) requestAnimationFrame(update);
        }

        requestAnimationFrame(update);
    }


    /* ═══════════════════════════════════════════
       BOOKING CALENDAR SYSTEM
       ═══════════════════════════════════════════ */
    const today = new Date();
    let currentMonth = today.getMonth();
    let currentYear = today.getFullYear();
    let selectedDate = null;
    let selectedSlot = null;

    const MONTHS = ['January','February','March','April','May','June',
                    'July','August','September','October','November','December'];

    const SLOTS = [
        { time: '8:00 AM',  end: '9:00 AM' },
        { time: '9:00 AM',  end: '10:00 AM' },
        { time: '10:00 AM', end: '11:00 AM' },
        { time: '11:00 AM', end: '12:00 PM' },
        { time: '12:00 PM', end: '1:00 PM' },
        { time: '1:00 PM',  end: '2:00 PM' },
        { time: '2:00 PM',  end: '3:00 PM' },
        { time: '3:00 PM',  end: '4:00 PM' },
    ];

    // Elements
    const calTitle = document.getElementById('calTitle');
    const calDays = document.getElementById('calDays');
    const prevBtn = document.getElementById('prevMonth');
    const nextBtn = document.getElementById('nextMonth');
    const slotsPlaceholder = document.getElementById('slotsPlaceholder');
    const slotsContent = document.getElementById('slotsContent');
    const slotsTitle = document.getElementById('slotsTitle');
    const slotsDate = document.getElementById('slotsDate');
    const slotsGrid = document.getElementById('slotsGrid');
    const formOverlay = document.getElementById('formOverlay');
    const formSubtitle = document.getElementById('formSubtitle');
    const sessionForm = document.getElementById('sessionForm');
    const backToSlotsBtn = document.getElementById('backToSlots');
    const successOverlay = document.getElementById('successOverlay');
    const bookAnotherBtn = document.getElementById('bookAnother');

    /* ── Deterministic "booked" check ── */
    function isSlotBooked(year, month, day, slotIndex) {
        // Simple hash to deterministically mark ~30% slots as booked
        const hash = ((day * 7) + (slotIndex * 13) + (month * 3) + (year % 100)) % 10;
        return hash < 3;
    }

    /* ── Render Calendar ── */
    function renderCalendar() {
        calTitle.textContent = `${MONTHS[currentMonth]} ${currentYear}`;

        const firstDay = new Date(currentYear, currentMonth, 1).getDay();
        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
        const todayDate = new Date();
        todayDate.setHours(0, 0, 0, 0);

        let html = '';

        // Empty cells for offset
        for (let i = 0; i < firstDay; i++) {
            html += '<span class="cal-day empty"></span>';
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(currentYear, currentMonth, day);
            const isPast = date < todayDate;
            const isWeekend = date.getDay() === 0 || date.getDay() === 6;
            const isToday = date.getTime() === todayDate.getTime();
            const isSelected = selectedDate &&
                               date.getDate() === selectedDate.getDate() &&
                               date.getMonth() === selectedDate.getMonth() &&
                               date.getFullYear() === selectedDate.getFullYear();

            let classes = 'cal-day';
            if (isPast) classes += ' past';
            else if (isWeekend) classes += ' weekend';
            else classes += ' available';
            if (isToday && !isPast) classes += ' today';
            if (isSelected) classes += ' selected';

            const disabled = isPast || isWeekend;

            html += `<button class="${classes}" data-day="${day}" ${disabled ? 'disabled' : ''}>${day}</button>`;
        }

        calDays.innerHTML = html;

        // Bind day clicks
        calDays.querySelectorAll('.cal-day.available').forEach(btn => {
            btn.addEventListener('click', () => {
                const day = parseInt(btn.dataset.day);
                selectDay(day);
            });
        });

        // Disable prev button if viewing current month
        prevBtn.disabled = (currentYear === today.getFullYear() && currentMonth === today.getMonth());
        prevBtn.style.opacity = prevBtn.disabled ? '0.3' : '1';
    }

    /* ── Select Day ── */
    function selectDay(day) {
        selectedDate = new Date(currentYear, currentMonth, day);
        renderCalendar(); // Re-render to update selected state
        showSlots(day);
    }

    /* ── Show Time Slots ── */
    function showSlots(day) {
        slotsPlaceholder.style.display = 'none';
        slotsContent.style.display = 'block';

        const dateOptions = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
        slotsDate.textContent = selectedDate.toLocaleDateString('en-US', dateOptions);

        let html = '';
        SLOTS.forEach((slot, index) => {
            const booked = isSlotBooked(currentYear, currentMonth, day, index);
            html += `
                <button class="slot ${booked ? 'booked' : 'available'}"
                        ${booked ? 'disabled' : ''}
                        data-index="${index}">
                    <span class="slot-time">${slot.time} — ${slot.end}</span>
                    <span class="slot-status">${booked ? 'Booked' : 'Available'}</span>
                </button>
            `;
        });

        slotsGrid.innerHTML = html;

        // Bind slot clicks
        slotsGrid.querySelectorAll('.slot.available').forEach(btn => {
            btn.addEventListener('click', () => {
                const index = parseInt(btn.dataset.index);
                selectedSlot = SLOTS[index];
                showForm();
            });
        });
    }

    /* ── Show Booking Form ── */
    function showForm() {
        const dateStr = selectedDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
        formSubtitle.textContent = `${dateStr} • ${selectedSlot.time} — ${selectedSlot.end}`;
        formOverlay.style.display = 'flex';
    }

    /* ── Month Navigation ── */
    prevBtn.addEventListener('click', () => {
        if (currentMonth === 0) {
            currentMonth = 11;
            currentYear--;
        } else {
            currentMonth--;
        }
        resetSlots();
        renderCalendar();
    });

    nextBtn.addEventListener('click', () => {
        if (currentMonth === 11) {
            currentMonth = 0;
            currentYear++;
        } else {
            currentMonth++;
        }
        resetSlots();
        renderCalendar();
    });

    function resetSlots() {
        selectedDate = null;
        selectedSlot = null;
        slotsPlaceholder.style.display = 'flex';
        slotsContent.style.display = 'none';
    }

    /* ── Back to Slots ── */
    backToSlotsBtn.addEventListener('click', () => {
        formOverlay.style.display = 'none';
        sessionForm.reset();
    });

    /* ── Form Submit ── */
    sessionForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Mock submission - show success
        formOverlay.style.display = 'none';
        successOverlay.style.display = 'flex';
        sessionForm.reset();
    });

    /* ── Book Another ── */
    bookAnotherBtn.addEventListener('click', () => {
        successOverlay.style.display = 'none';
        resetSlots();
        renderCalendar();
    });

    /* ── Initialize Calendar ── */
    renderCalendar();

});
