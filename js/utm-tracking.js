// utm-tracking.js - Pass UTM parameters to Gumroad checkout links

(function() {
    'use strict';

    // UTM parameters to track
    const UTM_PARAMS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];

    /**
     * Get UTM parameters from current URL
     * Also adds language info if not present in utm_content
     * @returns {Object} Object with UTM parameters
     */
    function getUTMParams() {
        const urlParams = new URLSearchParams(window.location.search);
        const utmParams = {};
        
        UTM_PARAMS.forEach(param => {
            const value = urlParams.get(param);
            if (value) {
                utmParams[param] = value;
            }
        });
        
        // Get current language from the page or localStorage
        const currentLang = window.currentLanguage || 
                           localStorage.getItem('userLanguage') || 
                           document.documentElement.lang || 
                           'en';
        
        // Add language to tracking - append to utm_content or create new
        if (utmParams.utm_content) {
            // Append language if not already present
            if (!utmParams.utm_content.includes('_lang-')) {
                utmParams.utm_content = utmParams.utm_content + '_lang-' + currentLang;
            }
        } else if (Object.keys(utmParams).length > 0) {
            // Only add lang if there are other UTM params
            utmParams.utm_content = 'lang-' + currentLang;
        }
        
        return utmParams;
    }

    /**
     * Append UTM parameters to a URL
     * @param {string} url - Original URL
     * @param {Object} utmParams - UTM parameters to append
     * @returns {string} URL with UTM parameters
     */
    function appendUTMToUrl(url, utmParams) {
        if (Object.keys(utmParams).length === 0) {
            return url;
        }

        try {
            const urlObj = new URL(url);
            
            // Append each UTM parameter
            Object.entries(utmParams).forEach(([key, value]) => {
                urlObj.searchParams.set(key, value);
            });
            
            return urlObj.toString();
        } catch (e) {
            // If URL parsing fails, return original
            console.warn('UTM Tracking: Could not parse URL', url);
            return url;
        }
    }

    /**
     * Update all Gumroad links with UTM parameters
     */
    function updateGumroadLinks() {
        const utmParams = getUTMParams();
        
        // Skip if no UTM params present
        if (Object.keys(utmParams).length === 0) {
            return;
        }

        // Find all links to Gumroad
        const gumroadLinks = document.querySelectorAll('a[href*="gumroad.com"]');
        
        gumroadLinks.forEach(link => {
            const originalHref = link.getAttribute('href');
            const newHref = appendUTMToUrl(originalHref, utmParams);
            link.setAttribute('href', newHref);
        });

        console.log('UTM Tracking: Updated', gumroadLinks.length, 'Gumroad links with UTM params:', utmParams);
    }

    /**
     * Handle dynamically created links or button clicks
     * Intercept clicks on CTA buttons and add UTM to their actions
     */
    function setupClickTracking() {
        const utmParams = getUTMParams();
        
        if (Object.keys(utmParams).length === 0) {
            return;
        }

        // Store UTM params in sessionStorage for dynamic links
        sessionStorage.setItem('utm_params', JSON.stringify(utmParams));

        // Handle tier CTA buttons that might redirect via JavaScript
        document.addEventListener('click', function(e) {
            const target = e.target.closest('.tier-cta');
            if (!target) return;

            // Check if this button has a data attribute for Gumroad URL
            const gumroadUrl = target.dataset.gumroadUrl;
            if (gumroadUrl) {
                e.preventDefault();
                const finalUrl = appendUTMToUrl(gumroadUrl, utmParams);
                window.open(finalUrl, '_blank');
            }
        });
    }

    /**
     * Get stored UTM params (for dynamic link generation)
     * @returns {Object} Stored UTM parameters
     */
    window.getStoredUTMParams = function() {
        try {
            return JSON.parse(sessionStorage.getItem('utm_params')) || {};
        } catch (e) {
            return {};
        }
    };

    /**
     * Build a Gumroad URL with UTM tracking
     * @param {string} baseUrl - Base Gumroad URL
     * @returns {string} URL with UTM parameters
     */
    window.buildGumroadUrl = function(baseUrl) {
        const utmParams = window.getStoredUTMParams();
        return appendUTMToUrl(baseUrl, utmParams);
    };

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            updateGumroadLinks();
            setupClickTracking();
        });
    } else {
        updateGumroadLinks();
        setupClickTracking();
    }

    // Also update links after any dynamic content changes
    // Watch for translations loading which might affect links
    document.addEventListener('translationsLoaded', updateGumroadLinks);

})();
