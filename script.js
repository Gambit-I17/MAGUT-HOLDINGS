/*
  ================================================================
  MAGUT HOLDINGS GROUP — script.js
  ================================================================
  This file handles ALL interactivity on the website.
  Currently it does two things:

    1. PAGE NAVIGATION — switching between the 10 pages
    2. FORM SUBMISSION — demo alert when the form is submitted

  HOW THE PAGE SYSTEM WORKS:
  All 10 pages are in the HTML at the same time.
  Each page has an ID like "pg-home", "pg-about", etc.
  By default, every page is hidden with CSS: display: none
  Only one page has class="active" (which makes it visible).

  When you click a nav button, the go() function:
    1. Hides all pages (removes .active from all)
    2. Shows the requested page (adds .active to it)
    3. Highlights the correct nav link
    4. Scrolls back to the top

  HOW TO ADD A NEW PAGE:
    1. In index.html, add a new page div:
         <div class="page" id="pg-mypage">
           ... your content here ...
         </div>

    2. Add a nav button in the nav-links section:
         <button class="nav-link" onclick="go('mypage')">My Page</button>

    3. In this file, add an entry to the PAGES map:
         mypage: 'pg-mypage'

    4. Add an entry to the NAV_LABELS map:
         mypage: 'My Page'

    That's it! The navigation will work automatically.
  ================================================================
*/


/* ----------------------------------------------------------------
   PAGES MAP
   Maps a short page ID (used in onclick="go('...')") to the
   actual HTML element ID of that page's div.

   Format: shortId: 'html-element-id'
   ---------------------------------------------------------------- */
const PAGES = {
  home:      'pg-home',
  about:     'pg-about',
  portfolio: 'pg-portfolio',
  farm:      'pg-farm',
  karinjo:   'pg-karinjo',
  vision:    'pg-vision',
  team:      'pg-team',
  news:      'pg-news',
  partners:  'pg-partners',
  contact:   'pg-contact'
};


/* ----------------------------------------------------------------
   NAV LABELS MAP
   Maps each short page ID to the exact text on its nav button.
   This is used to highlight the correct button when a page is shown.

   The text here MUST match the button text in index.html exactly.
   ---------------------------------------------------------------- */
const NAV_LABELS = {
  home:      'Home',
  about:     'About',
  portfolio: 'Portfolio',
  farm:      'Magut Farm',
  karinjo:   'Karinjo',
  vision:    'Vision',
  team:      'Team',
  news:      'News',
  partners:  'Partners',
  contact:   'Contact'
};


/* ----------------------------------------------------------------
   go(id) — Navigate to a page

   This is the main function called by all onclick="go('...')"
   buttons throughout the website.

   @param {string} id - The short page ID (e.g. 'home', 'contact')
                        Must match a key in the PAGES map above.

   Example usage in HTML:
     <button onclick="go('contact')">Contact Us</button>
   ---------------------------------------------------------------- */
function go(id) {

  /* Step 1: Hide ALL pages by removing the 'active' class */
  Object.values(PAGES).forEach(function(pageElementId) {
    var pageElement = document.getElementById(pageElementId);
    if (pageElement) {
      pageElement.classList.remove('active');
    }
  });

  /* Step 2: Remove the 'active' highlight from ALL nav links */
  document.querySelectorAll('.nav-link').forEach(function(link) {
    link.classList.remove('active');
  });

  /* Step 3: Show the requested page by adding 'active' to it */
  var targetPage = document.getElementById(PAGES[id]);
  if (targetPage) {
    targetPage.classList.add('active');
  } else {
    /* Safety check: if the page ID doesn't exist, log a warning */
    console.warn('go(): Page not found for id "' + id + '". Check the PAGES map in script.js.');
    return;
  }

  /* Step 4: Highlight the matching nav button */
  document.querySelectorAll('.nav-link').forEach(function(link) {
    if (link.textContent.trim() === NAV_LABELS[id]) {
      link.classList.add('active');
    }
  });

  /* Step 5: Scroll to the top of the page smoothly */
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


/* ----------------------------------------------------------------
   handleSubmit() — Contact form submission handler

   Currently shows a simple browser alert as a demo.

   HOW TO MAKE THE FORM ACTUALLY SEND EMAILS:
   Option A — Formspree (free, no backend needed):
     1. Go to https://formspree.io and sign up for free
     2. Create a new form — you get a URL like:
        https://formspree.io/f/yourformid
     3. In index.html, change the form-wrap div to:
          <form class="form-wrap"
                action="https://formspree.io/f/yourformid"
                method="POST">
     4. Change the submit button to:
          <button type="submit" class="btn-submit">Send Message →</button>
     5. Remove the onclick="handleSubmit()" from the button

   Option B — EmailJS (sends email using JavaScript):
     1. Go to https://www.emailjs.com and sign up
     2. Follow their setup guide to connect your email account
     3. Replace the alert() in this function with their send code
   ---------------------------------------------------------------- */
function handleSubmit() {
  alert(
    'Thank you for your message!\n\n' +
    'A member of the Magut Holdings team will be in touch within 24 hours.'
  );
}


/* ----------------------------------------------------------------
   PAGE LOAD — Run when the browser has finished loading the page

   This sets the initial state: makes sure the Home page is active
   when the site first opens, in case any CSS issue hides it.
   ---------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', function() {
  /* Make sure Home is shown on first load */
  go('home');
});
