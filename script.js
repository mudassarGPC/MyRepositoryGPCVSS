// Supabase Configuration - These are public keys meant for client-side use
const SUPABASE_URL = 'https://yavwaoyobafzffoswnpd.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlhdndhb3lvYmFmemZmb3N3bnBkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgwODIwNDcsImV4cCI6MjA5MzY1ODA0N30.GllROm5UCN5kYyCWwS1YOLRqv0PhMfdskO_AlLb_81Y';

document.addEventListener('DOMContentLoaded', () => {
    // Image fallback logic for CSP compliance
    const profilePhotos = document.querySelectorAll('.profile-photo-small, .profile-photo');
    profilePhotos.forEach(img => {
        img.addEventListener('error', function() {
            this.style.display = 'none';
            if (this.nextElementSibling) {
                this.nextElementSibling.style.display = 'flex';
            }
        });
    });

    // Initialize Supabase Client within the listener to ensure CDN script is parsed
    let supabaseClient;
    try {
        if (typeof supabase !== 'undefined') {
            supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
        } else {
            console.error('Supabase library not found');
        }
    } catch (e) {
        console.error('Error initializing Supabase:', e);
    }

    const emailGate = document.getElementById('email-gate');
    const portfolioContent = document.getElementById('portfolio-content');
    const gateForm = document.getElementById('gate-form');
    const emailInput = document.getElementById('visitor-email');
    const emailError = document.getElementById('email-error');
    const gateButton = document.getElementById('gate-button');

    // Check if visitor has already bypassed the gate
    if (localStorage.getItem('portfolio_unlocked') === 'true') {
        showPortfolio(true); // Skip animation if already visited
    }

    // Handle Form Submission
    gateForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        console.log('Form submitted');
        const email = emailInput.value.trim();

        // Basic Email Validation
        if (!validateEmail(email)) {
            console.log('Email validation failed');
            showError('Please enter a valid email');
            return;
        }

        // Visual feedback
        console.log('Valid email entered:', email);
        gateButton.innerText = 'Connecting...';
        gateButton.disabled = true;

        // Safety timeout: if database call takes more than 4 seconds, just let them in
        const safetyTimeout = setTimeout(() => {
            console.log('Safety timeout triggered - forcing transition');
            showPortfolio();
        }, 4000);

        try {
            // Save to Supabase if client exists
            if (supabaseClient) {
                console.log('Attempting to save to Supabase...');
                const { data, error } = await supabaseClient
                    .from('subscribers')
                    .insert([{ email: email }]);

                if (error) {
                    console.error('Supabase Error Details:', {
                        code: error.code,
                        message: error.message,
                        details: error.details,
                        hint: error.hint
                    });
                } else {
                    console.log('Supabase Save Success:', data);
                }
            } else {
                console.warn('Supabase client was not initialized. Check console for init errors.');
            }

            // Clear timeout since we handled it
            clearTimeout(safetyTimeout);

            // Success Transition
            gateButton.innerText = 'Welcome!';
            console.log('Transitioning to portfolio...');
            setTimeout(() => {
                showPortfolio();
            }, 500);

        } catch (err) {
            console.error('CRITICAL ERROR during submission:', err);
            clearTimeout(safetyTimeout);
            showPortfolio();
        }
    });

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function showError(msg) {
        emailError.innerText = msg;
        emailInput.style.borderColor = '#e74c3c';
        setTimeout(() => {
            emailError.innerText = '';
            emailInput.style.borderColor = '#f0f0f0';
        }, 3000);
    }

    function showPortfolio(immediate = false) {
        localStorage.setItem('portfolio_unlocked', 'true');
        
        // Remove hidden class immediately so it's in the DOM for transitions
        portfolioContent.classList.remove('hidden');
        portfolioContent.style.display = 'block'; // Ensure it's visible

        if (immediate) {
            emailGate.style.display = 'none';
        } else {
            emailGate.classList.add('fade-out');
            setTimeout(() => {
                emailGate.style.display = 'none';
            }, 800);
        }
    }
});
