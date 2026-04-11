# Magut Holdings Group — Website

A clean, professional multi-page website for Magut Holdings Group.
Built with pure HTML, CSS, and JavaScript — no frameworks, no installs.

## Project Structure

```
magut-holdings/
├── index.html   ← Page structure and content (HTML)
├── style.css    ← All colours, fonts, and layouts (CSS)
├── script.js    ← Page navigation logic (JavaScript)
└── README.md    ← This file
```

## How to Run in VS Code

1. Open the `magut-holdings` folder in VS Code
2. Install the **Live Server** extension by Ritwick Dey
3. Right-click `index.html` → **Open with Live Server**
4. The site opens in your browser automatically

## Languages Used

| File         | Language   | Purpose                         |
|--------------|------------|---------------------------------|
| index.html   | HTML       | Page structure and all content  |
| style.css    | CSS        | All styling, colours, layouts   |
| script.js    | JavaScript | Navigation between pages        |

## How to Customise

### Change brand colours
Open `style.css` and edit the `:root` section at the top:
```css
:root {
  --dark:  #0a1f0f;   /* Change the dark green */
  --gold:  #c9952a;   /* Change the gold colour */
}
```

### Update contact details
Open `index.html` and search for `REPLACE` — these are the
placeholder phone numbers, emails, and address to update.

### Add a new company
1. In `index.html`, find Page 3 (Portfolio) and copy one `.pcard` block
2. Paste it below the last company card
3. Update the name, description, tags, and initials
4. Add a new company profile page (copy Page 4 or 5 as a template)
5. In `script.js`, add the new page to the `PAGES` and `NAV_LABELS` maps

### Add a new navigation page
See the detailed instructions at the top of `script.js`.

### Make the contact form send real emails
See the instructions in `handleSubmit()` in `script.js`.
The easiest option is **Formspree** (free at https://formspree.io).

## Push to GitHub

```bash
git init
git add .
git commit -m "Magut Holdings website — initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/magut-holdings.git
git push -u origin main
```

## Pages Included

| # | Page             | Description                          |
|---|------------------|--------------------------------------|
| 1 | Home             | Hero, stats, sector overview         |
| 2 | About            | Group story and history              |
| 3 | Portfolio        | All companies at a glance            |
| 4 | Magut Farm       | Farm company profile                 |
| 5 | Karinjo          | Construction company profile         |
| 6 | Vision           | Mission, vision, and 8 core values   |
| 7 | Team             | Leadership profiles                  |
| 8 | News             | Latest announcements                 |
| 9 | Partners         | Sector bars and partner network      |
|10 | Contact          | Contact form and details             |

---
© 2026 Magut Holdings Group · Nairobi, Kenya
