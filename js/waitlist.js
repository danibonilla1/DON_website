/**
 * Waitlist Form Handler
 * Simple email capture for the upcoming book release
 */

// Gumroad checkout URLs per language
const GUMROAD_URLS = {
    es: 'https://gumroad.com/checkout?product=fywme&option=ArbuNBmxLE4TtR90oTUedg%3D%3D&quantity=1',
    en: 'https://gumroad.com/checkout?product=fywme&option=m0ZZLOhsPLpu7_QvT24TCQ%3D%3D&quantity=1&price=0'
};

function getActiveLanguage() {
    return window.currentLanguage || localStorage.getItem('userLanguage') || 'es';
}

function submitWaitlist(e) {
    // Prevent default form submission
    if (e) e.preventDefault();
    
    const emailInput = document.getElementById('waitlistEmail');
    const form = document.querySelector('.waitlist-form');
    const btn = document.getElementById('waitlistBtn');
    const lang = getActiveLanguage();
    
    if (!emailInput || !form) return;
    
    const email = emailInput.value.trim();
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        emailInput.style.borderColor = '#ef4444';
        emailInput.placeholder = lang === 'en' 
            ? 'Please enter a valid email' 
            : 'Por favor, introduce un email válido';
        emailInput.value = '';
        setTimeout(() => {
            emailInput.style.borderColor = 'rgba(212, 175, 55, 0.3)';
            emailInput.placeholder = lang === 'en' ? 'your@email.com' : 'tu@email.com';
        }, 2000);
        return;
    }
    
    // Show loading state
    const originalText = btn.textContent;
    btn.textContent = lang === 'en' ? 'Redirecting...' : 'Redirigiendo...';
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
    const checkoutBase = GUMROAD_URLS[lang] || GUMROAD_URLS.es;
    let checkoutUrl = `${checkoutBase}&email=${encodedEmail}`;
    
    // Add UTM parameters
    try {
        const utmParams = [];
        const paramsToTrack = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
        
        // 1. Try to get from current URL first
        const urlParams = new URLSearchParams(window.location.search);
        
        // 2. Fallback to stored params if available (from utm-tracking.js)
        const storedParams = (window.getStoredUTMParams && typeof window.getStoredUTMParams === 'function') 
            ? window.getStoredUTMParams() 
            : {};
            
        paramsToTrack.forEach(param => {
            let value = urlParams.get(param);
            
            // If not in URL, check storage
            if (!value && storedParams[param]) {
                value = storedParams[param];
            }
            
            if (value) {
                utmParams.push(`${param}=${encodeURIComponent(value)}`);
            }
        });
        
        // Check for language in utm_content if not present
        const hasUtmContent = utmParams.some(p => p.startsWith('utm_content='));
        if (!hasUtmContent) {
             const currentLang = window.currentLanguage || 
                               localStorage.getItem('userLanguage') || 
                               document.documentElement.lang || 
                               'en';
             utmParams.push(`utm_content=lang-${currentLang}`);
        }

        if (utmParams.length > 0) {
            checkoutUrl += `&${utmParams.join('&')}`;
        }
    } catch (err) {
        console.error('Error adding UTM params:', err);
    }
    
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
