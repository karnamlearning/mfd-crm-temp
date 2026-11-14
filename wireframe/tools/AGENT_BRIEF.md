# Brief for every wireframe agent (read fully before building)

You are one of 20 agents. Each agent builds **one screen** of the AdvisorKhoj Internal CRM wireframe, as a single HTML file in
`D:\AdvisorKhoj CRM Research\INTERNAL_CRM\07_Wireframes\wireframe\`. The other 19 agents work at the same time on other screens, using the same shared design system, so the result must look like **one product**.

## What "wireframe" means here
A **high-fidelity, clickable HTML/CSS mock-up** with realistic (fictional) data, not grey boxes. It must look like a finished, polished SaaS product: minimal blue and white, with a working dark theme. It should look recognisably like the DoItNow/Investwell CRM layout (same modules, tabs, fields and flows) but **cleaner, calmer and better**.

## Steps
1. Read `07_Wireframes/wireframe/DESIGN.md` fully (tokens, components, status language, sample cast, page contract). **Follow it exactly.**
2. Skim `07_Wireframes/wireframe/assets/styles.css` so you know which classes already exist, and `07_Wireframes/wireframe/_template.html` (a working starter page). Copy the template's `<head>` and shell exactly.
3. Look at your assigned **reference screenshots** with the Read tool (they are images). They show the Investwell CRM (red UI) that DoItNow uses. Match the information and flow; do not copy the red styling. Frames may contain real client PII: **never copy real names, PANs, emails or numbers.** Use the fictional cast in DESIGN.md §8.
4. Skim the research notes listed for your screen (only the parts you need) for "better than Investwell" ideas.
5. Build your page. Rules:
   - **Do not edit** `assets/styles.css`, `assets/app.js`, `DESIGN.md`, `_template.html` or any other agent's file. Page-specific CSS goes in one `<style>` block in your page and uses **tokens only** (`var(--…)`); no raw hex colours except inside SVG data where tokens can't apply (prefer `currentColor`).
   - Use existing classes first (`.card`, `.table`, `.badge-*`, `.btn-*`, `.tabs`, `.drawer`, `.kanban`, `.timeline`, `.stat`, `.form-grid`, etc.).
   - Icons: `<svg class="i"><use href="#i-NAME"/></svg>`, using only the names in the `ICONS` object in `assets/app.js` (see DESIGN.md §9; also available: arrow-left, trending-down, grip, image, whatsapp, cake, activity, key, undo, note, chevron-up). An unknown name renders blank, so check.
   - Body attributes: `data-page="<nav id>"` and `data-crumb="A|B"`. Title: `<Screen> · AdvisorKhoj CRM`.
   - Make interactions work with small inline JS at the end of `<body>`: tab switching (`data-tabs` / `data-tab-panel` / `data-tab-scope`, handled by app.js), `data-open-drawer="id"`, `data-close-drawer`, `data-segmented`, `data-popover="id"`, `AK.toast('…')`. A drawer can open on load with `<body data-open="drawer-id">` or the URL `?open=drawer-id`.
   - Use realistic Indian MFD data: ₹ with Indian grouping, dates around **Sat 14 Nov 2026**, masked PAN/mobile, and the cast from DESIGN.md §8 (tenant Sharma Wealth Partners; logged-in user Neha Kapoor, Branch Manager, Andheri).
   - Every status = dot + text badge. Overdue = clock icon + danger colour. AI items = `badge-ai` with the sparkles icon.
   - Fill the screen properly at 1440×900: no big empty areas, no overflowing or clipped text. Tables scroll inside `.table-wrap`.
   - Responsive: make sure nothing breaks at 1280px wide; at ≤768 px grids collapse (the shared CSS handles most of this).
   - Link to other screens using the file names in DESIGN.md §10 (e.g. a client name links to `08-client-360.html`, a task title to `11-task-detail.html`).
6. **Verify visually** (required). From Bash:
   `cd "/d/AdvisorKhoj CRM Research/INTERNAL_CRM/07_Wireframes/wireframe" && bash tools/shot.sh <your-file>.html light` and again with `dark`. Add the width/height/query arguments for drawer states, e.g. `bash tools/shot.sh 10-task-create.html dark 1440 900 open=drawer-task`. For long pages, use a taller height, e.g. `1440 1600`. Open each PNG in `_shots/` with Read, look at it critically (alignment, spacing, contrast in dark mode, clipped text, empty gaps, icon rendering), fix, and re-shoot. Do at least **two rounds**. Also take one shot at `1280 800`.
7. Finish with a short report (≤150 words): the file you made, what is on the screen, how it improves on Investwell, and anything you think the shared CSS/JS is missing (do not change the shared files yourself).

## Quality bar
Think of Linear, Attio, Height and Stripe Dashboard: generous whitespace, crisp 1px borders, aligned baselines, restrained colour, clear hierarchy (one primary button per region), tabular numbers. The dark theme must be just as good as the light one.
