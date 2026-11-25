# MF Box CRM: Internal CRM Wireframes

Clickable, high-fidelity **HTML/CSS wireframes** for the AdvisorKhoj **Internal CRM**: a multi-tenant SaaS CRM for mutual fund distributor (MFD) firms that already use **MF Box Back Office**.

The wireframes keep the layout MFD teams know from Investwell's CRM (the benchmark) and redraw it in a minimal **blue and white** design with a full **dark theme**. The MVP centre is **daily activity tracking** of RMs, branches and sub-brokers.

> All people, firms and numbers are **fictional sample data**. The sample tenant is *Sharma Wealth Partners*, and the logged-in user is *Neha Kapoor, Branch Manager, Andheri*.

---

## Contents
- [Quick start](#quick-start)
- [Project structure](#project-structure)
- [Screens](#screens)
- [Design system](#design-system)
- [Plain-English guides](#plain-english-guides)
- [How the wireframes are built](#how-the-wireframes-are-built)
- [Screenshots](#screenshots)
- [Adding a new screen](#adding-a-new-screen)
- [Keyboard shortcuts](#keyboard-shortcuts)
- [Status and open decisions](#status-and-open-decisions)

---

## Quick start

There is **no build step, no install and no server**: it is plain HTML, CSS and JavaScript.

1. Clone the repo.
2. Open **`wireframe/index.html`** in Chrome, Edge, Firefox or Safari.
3. Click **Open the prototype**, or any screen card.

Optional local server (handy for sharing on a LAN):
```bash
cd wireframe
python -m http.server 8080      # then open http://localhost:8080
```

Fonts (Inter) load from Google Fonts. Offline, the pages fall back to the system font.

---

## Project structure

```
MFBOX_CRM_Wireframe/
├── README.md                      ← you are here
├── .gitignore                     ← ignores wireframe/_shots/ (generated screenshots)
├── .gitattributes                 ← keeps tools/shot.sh on LF line endings
└── wireframe/
    ├── index.html                 ← hub: links every screen, theme preview, design-system preview
    │
    ├── 01-dashboard.html          ← Home dashboard
    ├── 02-my-day.html             ← My Day: one work queue
    ├── 03-calendar.html           ← Calendar (Month / Week / Day / Agenda)
    ├── 04-leads-list.html         ← Leads table
    ├── 05-lead-create.html        ← Lead detail + Create Lead drawer
    ├── 06-leads-pipeline.html     ← Leads Kanban + stage/product configuration
    ├── 07-clients-list.html       ← Clients (synced from MF Box)
    ├── 08-client-360.html         ← Client 360 profile
    ├── 09-tasks-list.html         ← Tasks table
    ├── 10-task-create.html        ← Create Task drawer
    ├── 11-task-detail.html        ← Task detail (comments & activities)
    ├── 12-opportunities.html      ← Opportunities Kanban/Table with AI score
    ├── 13-meetings.html           ← Meetings list + Schedule Meeting drawer
    ├── 14-meeting-detail.html     ← Meeting detail + outcome logging
    ├── 15-inbox-whatsapp.html     ← Team inbox (WhatsApp)
    ├── 16-service-requests.html   ← Service requests with SLA clocks
    ├── 17-documents.html          ← Documents
    ├── 18-team-activity.html      ← Team Activity tracker (MVP core)
    ├── 19-reports.html            ← Reports & MIS
    ├── 20-settings.html           ← Settings (team & hierarchy, roles, automations, MF Box sync…)
    ├── 21-commissions.html        ← Commissions (own share, breakdown, reconciliation, statements)
    ├── 22-campaigns.html          ← Campaigns and referrals
    ├── 23-events.html             ← Events list, calendar, Create Event drawer
    ├── 24-event-detail.html       ← Event detail: guests, invitations, check-in, tasks, budget
    ├── 25-event-checkin.html      ← QR check-in scanner (phone view)
    ├── 26-event-register.html     ← Guest registration page and QR pass
    │
    ├── _template.html             ← working starter page for new screens
    ├── DESIGN.md                  ← design system spec (tokens, components, sample cast, page contract)
    │
    ├── assets/
    │   ├── styles.css             ← all shared styles: light + dark tokens, layout, components
    │   └── app.js                 ← shared shell: icon sprite, sidebar, top bar, Ctrl+K palette,
    │                                 theme toggle, drawers, tabs, toasts, shortcuts overlay
    │
    ├── guide/                     ← plain-English explainers (for CEO / stakeholders)
    │   ├── 00_Overview.md         ← start here: product summary, screen list, 10-min demo script
    │   ├── 01_Home_Dashboard.md … 22_Campaigns.md   ← one guide per screen
    │   ├── 23_Design_System.md    ← why it looks the way it does
    │   ├── 24_Glossary.md         ← simple meanings of MF and CRM terms
    │   └── _GUIDE_BRIEF.md        ← the template the guides follow
    │
    ├── tools/
    │   ├── shot.sh                ← headless-Chrome screenshot script → wireframe/_shots/
    │   ├── SAMPLE_DATA_FACTS.md   ← canonical sample data shared by every screen
    │   └── AGENT_BRIEF.md         ← build brief used to create the screens
    │
    └── _shots/                    ← generated screenshots (git-ignored, create locally)
```

---

## Screens

| # | Screen | What it does | Guide |
|---|---|---|---|
| **Daily work** ||||
| 01 | [Home dashboard](wireframe/01-dashboard.html) | Morning summary: schedule, tasks, opportunities, leads, birthdays, team snapshot | [guide](wireframe/guide/01_Home_Dashboard.md) |
| 02 | [My Day](wireframe/02-my-day.html) | One queue for everything due (overdue → today → upcoming), one-click Done / Snooze / Delegate | [guide](wireframe/guide/02_My_Day.md) |
| 18 | [Team Activity](wireframe/18-team-activity.html) | **MVP core**: calls, visits, follow-ups and an hourly strip per RM / sub-broker / ops | [guide](wireframe/guide/18_Team_Activity.md) |
| 03 | [Calendar](wireframe/03-calendar.html) | Meetings, tasks, follow-ups, birthdays, market holidays; view as any team member | [guide](wireframe/guide/03_Calendar.md) |
| 15 | [Team inbox](wireframe/15-inbox-whatsapp.html) | Shared WhatsApp Business inbox, assignment, 24-hour window, internal notes | [guide](wireframe/guide/15_Team_Inbox_WhatsApp.md) |
| **Pipeline** ||||
| 04 | [Leads list](wireframe/04-leads-list.html) | My / Collaborations / Team / New leads, filters, bulk actions, round-robin assignment | [guide](wireframe/guide/04_Leads_List.md) |
| 05 | [Lead detail & create](wireframe/05-lead-create.html) | Stage stepper, timeline, Create Lead drawer with MF Box duplicate check | [guide](wireframe/guide/05_Lead_Detail_and_Create.md) |
| 06 | [Leads pipeline](wireframe/06-leads-pipeline.html) | Kanban with Won/Lost drop zones; stages, products, sources, auto-assignment config | [guide](wireframe/guide/06_Leads_Pipeline.md) |
| 12 | [Opportunities](wireframe/12-opportunities.html) | Kanban ⇄ table; AI-identified opportunities with explained score, human approval | [guide](wireframe/guide/12_Opportunities.md) |
| 22 | [Campaigns](wireframe/22-campaigns.html) | Campaign spend, leads, clients and business by channel; referral and thank-you tracking | [guide](wireframe/guide/22_Campaigns.md) |
| 23 | [Events](wireframe/23-events.html) | Plan investor meets and webinars, automated WhatsApp/email invitations, QR registration and check-in, attendees become leads and follow-up tasks | |
| 24 | [Event detail](wireframe/24-event-detail.html) | Funnel, guest list, invitation sequence, live check-in, planning and follow-up tasks, budget and ROI | |
| 25 | [Check-in scanner](wireframe/25-event-checkin.html) | Phone view for desk volunteers: scan, duplicate and invalid results, walk-ins | |
| 26 | [Guest pages](wireframe/26-event-register.html) | Public registration page and QR entry pass | |
| **Clients & service** ||||
| 07 | [Clients list](wireframe/07-clients-list.html) | AUM, SIP book, tier, last contact, health score, from MF Box | [guide](wireframe/guide/07_Clients_List.md) |
| 08 | [Client 360](wireframe/08-client-360.html) | Family, portfolio snapshot, coverage, health, AI suggestions, full timeline | [guide](wireframe/guide/08_Client_360.md) |
| 16 | [Service requests](wireframe/16-service-requests.html) | Cases with reference numbers, checklists, pausable SLA clocks, escalation | [guide](wireframe/guide/16_Service_Requests.md) |
| 17 | [Documents](wireframe/17-documents.html) | Folders, expiry alerts, masking, watermarked downloads, versions, access log | [guide](wireframe/guide/17_Documents.md) |
| **Tasks & meetings** ||||
| 09 | [Tasks list](wireframe/09-tasks-list.html) | Investwell's columns plus saved views, inline status, bulk actions, grouping | [guide](wireframe/guide/09_Tasks_List.md) |
| 10 | [Create task](wireframe/10-task-create.html) | Drawer form with "Describe it" natural-language quick-add | [guide](wireframe/guide/10_Create_Task.md) |
| 11 | [Task detail](wireframe/11-task-detail.html) | Checklist, comments & activities, linked records, attachments | [guide](wireframe/guide/11_Task_Detail.md) |
| 13 | [Meetings](wireframe/13-meetings.html) | Agenda by day, outcome-pending queue, Schedule Meeting drawer | [guide](wireframe/guide/13_Meetings.md) |
| 14 | [Meeting detail](wireframe/14-meeting-detail.html) | Log outcome, voice note, AI summary → tasks (human approves), MF Box prep pack | [guide](wireframe/guide/14_Meeting_Detail.md) |
| **Management** ||||
| 19 | [Reports & MIS](wireframe/19-reports.html) | Activity, funnel, task ageing, coverage, SIP book, commissions (MF Box MIS) | [guide](wireframe/guide/19_Reports_and_MIS.md) |
| 20 | [Settings](wireframe/20-settings.html) | Team & hierarchy, departments, roles, module config, lead capture, automations, MF Box sync, security | [guide](wireframe/guide/20_Settings.md) |
| 21 | [Commissions](wireframe/21-commissions.html) | Everyone's own share, breakdown by AMC / scheme / client / person, AMC statement reconciliation | [guide](wireframe/guide/21_Commissions.md) |

> On GitHub the `.html` links open the source. To use the screens, open them in a browser from a local clone.

---

## Design system

Full spec: **[`wireframe/DESIGN.md`](wireframe/DESIGN.md)**. Plain-English version: [`guide/23_Design_System.md`](wireframe/guide/23_Design_System.md).

| Area | Choice |
|---|---|
| **Palette** | Minimal blue (`--primary #2563EB`) on white surfaces with hairline borders. Colour is used only for meaning |
| **Status colours** | Red = overdue / at risk · Amber = due soon / pending · Green = done / won · Blue = in progress / new · Violet = AI · Grey = neutral. Always dot **+ text**, never colour alone |
| **Dark theme** | Navy palette (`--bg #0A111E`), every token redefined; follows the OS setting, with a manual toggle saved per user |
| **Type** | Inter, 14px base, tabular numbers; ₹ in Indian grouping (₹12,45,000 · ₹45 L · ₹1.2 Cr) |
| **Layout** | 240px sidebar (collapses to 64px), 56px top bar, cards with 12px radius |
| **Components** | Buttons, inputs, segmented controls, tabs, badges, stat tiles, tables, Kanban, timeline, drawers, modals, menus, toasts, donut, progress, empty states |
| **Patterns** | My / Collaborations / My Team tabs · search + filters + columns toolbar · forms in right-side drawers · undo toasts · Ctrl+K palette |
| **Accessibility** | WCAG 2.2 AA basics: contrast, labels as well as colour, 24px+ targets, keyboard access |

---

## Plain-English guides

`wireframe/guide/` explains each screen for a non-technical reader (built for presenting to the CEO). Each guide has:

- **In one line** · **Why it matters**
- **What you see, part by part**
- **Better than Investwell** (comparison table)
- **How to demo it** (2-minute click path)
- **Questions the CEO may ask** · **Decisions needed**

Start with **[`guide/00_Overview.md`](wireframe/guide/00_Overview.md)**, which includes a 10-minute walkthrough script. **[`guide/24_Glossary.md`](wireframe/guide/24_Glossary.md)** explains terms like SLA, AUM, ARN/EUIN and the WhatsApp 24-hour window.

> The guides embed screenshots from `_shots/`, which is not committed. Generate them locally to see the pictures (see [Screenshots](#screenshots)).

---

## How the wireframes are built

Every screen follows the same **page contract** (see `DESIGN.md` §11):

```html
<link rel="stylesheet" href="assets/styles.css">
<script src="assets/app.js"></script>          <!-- sets theme before paint, injects the shell -->
...
<body data-page="tasks" data-crumb="Tasks|Create task">
  <div class="app">
    <aside class="sidebar" id="sidebar"></aside>   <!-- rendered by app.js -->
    <div class="main">
      <header class="topbar" id="topbar"></header> <!-- rendered by app.js -->
      <main class="content"> … screen content … </main>
    </div>
  </div>
</body>
```

- **`assets/app.js`** renders the sidebar (tenant logo, nav, counts), top bar (breadcrumb, search, quick-add, notifications, theme toggle) and the **Ctrl+K command palette**, and injects the **SVG icon sprite** (`<svg class="i"><use href="#i-name"/></svg>`).
- Shared helpers: `AK.toast(msg, {onUndo})`, `AK.openDrawer(id)` / `AK.closeDrawer(id)`, `data-tabs` / `data-tab-panel` tab switching, `data-segmented`, `data-popover`, `data-open-drawer` / `data-close-drawer`.
- **Colours are tokens only.** Pages use `var(--…)` and never raw hex, so the dark theme works everywhere.
- **Useful URL parameters:**
  - `?theme=dark` / `?theme=light` forces a theme.
  - `?open=<drawer-id>` opens a drawer on load (e.g. `10-task-create.html?open=drawer-task`).
  - Some pages accept `?tab=` / `?view=` / `?panel=`. Settings also uses hashes such as `20-settings.html#automations`.
- **Sample data** is consistent across all screens. The single source of truth is [`tools/SAMPLE_DATA_FACTS.md`](wireframe/tools/SAMPLE_DATA_FACTS.md).

---

## Screenshots

Screenshots are generated with headless Chrome (or Edge) and are **git-ignored**.

```bash
cd wireframe
bash tools/shot.sh 01-dashboard.html light                 # → _shots/01-dashboard-light.png
bash tools/shot.sh 01-dashboard.html dark                  # → _shots/01-dashboard-dark.png
bash tools/shot.sh 18-team-activity.html dark 1280 800     # custom size → …-dark-1280x800.png
bash tools/shot.sh 10-task-create.html light 1440 900 open=drawer-task   # with a drawer open

# all screens, both themes
for f in [0-2][0-9]-*.html; do for t in light dark; do bash tools/shot.sh "$f" $t; done; done
```

Requirements: Git Bash (or any bash), and Google Chrome or Microsoft Edge in the default install location. The hub (`index.html`) and the guides pick up `_shots/<page>-light.png` / `-dark.png` automatically.

---

## Adding a new screen

1. Copy `wireframe/_template.html` to `NN-name.html`.
2. Set `<title>`, `data-page` (the sidebar item to highlight) and `data-crumb`.
3. Build with existing classes from `assets/styles.css`. Put page-only CSS in one `<style>` block using tokens only.
4. If it needs a sidebar entry, add it to the `NAV` list in `assets/app.js`.
5. Use the cast and numbers from `tools/SAMPLE_DATA_FACTS.md`.
6. Check it in both themes: `bash tools/shot.sh NN-name.html light` and `dark`.
7. Add a card to `index.html` and a guide in `guide/`.

---

## Keyboard shortcuts

| Key | Action |
|---|---|
| `Ctrl` / `⌘` + `K` or `/` | Command palette: search clients, PAN, mobile, folio; run actions |
| `?` | Show all shortcuts |
| `Esc` | Close drawer, menu or palette |
| `Ctrl` + `Enter` | Save the open form (on create drawers) |
| `c` | Create (on Tasks, My Day, Calendar) |
| `e` / `h` | Mark done / snooze (on My Day) |
| `M` `W` `D` `A` | Month / Week / Day / Agenda (on Calendar) |

---

## Status and open decisions

**Status:** wireframes v1 (14 Nov 2026). This is a clickable mock-up: interactions work, but nothing is saved and there is no backend.

Open business decisions raised by the wireframes (details in each guide's *Decisions needed*):
1. **MF Box integration:** how clients, families, AUM, SIPs, users and commissions are shared with the CRM (API or shared database), and how often they sync.
2. **Sub-brokers:** own login or not, and what is hidden from them.
3. **AI features in release 1:** opportunity suggestions, meeting summaries, draft replies, and the cost per RM.
4. **WhatsApp Business:** in the MVP or later, and who pays Meta's per-message charges.
5. **MVP scope:** suggested core is Team Activity, My Day, Tasks, Leads, Clients and Meetings.
