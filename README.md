# DON Website

This repo contains a simplified version of the original `index.html` split into smaller assets for easier maintenance.

## Structure

- `index.html` – main page referencing external CSS/JS.
- `css/styles.css` – all page styling extracted from the original inline `<style>` block.
- `js/modals.js` – helper functions for opening/closing donate and phone modals.
- `js/floatingButton.js` – controls visibility of the preorder floating button.
- `js/testimonials.js` – testimonial carousel logic with swipe/auto-rotate.
- `js/scrollVideo.js` – synchronizes journey videos with scroll position.
- `js/particles.js` – canvas particle effect shown in the background.
- `js/book.js` – manages scrolling steps in the book section.
- `js/i18n.js` – lightweight client-side translation loader.

Each script starts with a short comment describing its purpose.
