/**
 * Waitlist Form Handler
 * Simple email capture for the upcoming book release
 */

// Gumroad checkout URL base
const GUMROAD_CHECKOUT_URL = 'https://gumroad.com/checkout?product=fywme&option=ArbuNBmxLE4TtR90oTUedg%3D%3D&quantity=1';

function submitWaitlist() {
    const emailInput = document.getElementById('waitlistEmail');
    const form = document.querySelector('.waitlist-form');
    const btn = document.getElementById('waitlistBtn');
    
    if (!emailInput || !form) return;
    
    const email = emailInput.value.trim();
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        emailInput.style.borderColor = '#ef4444';
        emailInput.placeholder = 'Por favor, introduce un email válido';
        emailInput.value = '';
        setTimeout(() => {
            emailInput.style.borderColor = 'rgba(212, 175, 55, 0.3)';
            emailInput.placeholder = 'tu@email.com';
        }, 2000);
        return;
    }
    
    // Show loading state
    const originalText = btn.textContent;
    btn.textContent = 'Redirigiendo...';
    btn.disabled = true;
    
    // Log for analytics (if available)
    if (typeof gtag !== 'undefined') {
        gtag('event', 'checkout_redirect', {
            'event_category': 'conversion',
            'event_label': 'DON Gumroad Checkout'
        });
    }
    
    // Redirect to Gumroad checkout with email pre-filled
    const encodedEmail = encodeURIComponent(email);
    const checkoutUrl = `${GUMROAD_CHECKOUT_URL}&email=${encodedEmail}`;
    
    // Small delay for visual feedback, then redirect
    setTimeout(() => {
        window.location.href = checkoutUrl;
    }, 300);
}

// Allow form submission with Enter key
document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('waitlistEmail');
    if (emailInput) {
        emailInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                submitWaitlist();
            }
        });
    }
});
