# AdvisorKhoj Internal CRM — Design System (DESIGN.md)

> Version 1.0 · 14 Nov 2026 · Applies to every wireframe in `07_Wireframes/`.
> Reference product: Investwell CRM as used by DoItNow Financial Services (screens in `../01_Video_Analysis/screenshots/investwell_demo/`).
> Goal: keep DoItNow's layout and workflows the team already knows, but make it **calmer, cleaner and faster**: minimal blue and white, with a full dark theme.

## 0. Product context (stakeholder answers, 13 Nov 2026)

- **What it is:** a **multi-tenant SaaS CRM** for the MFD firms that already use AdvisorKhoj's **MF Box Back Office**. Investwell CRM (shown in the DoItNow recording) is the **competitor and benchmark**. DoItNow is only the reference account for Investwell's layout; it is not our customer.
- **Who uses it:** people inside one MFD firm (the tenant). That can be a one-person MFD or a firm with an **owner/principal, branches, RMs, ops staff and sub-brokers** (independent agents paid a share of commission).
- **MVP centre: daily activity tracking** of RMs, branches and sub-brokers (calls, visits, meetings, tasks, follow-ups), with manager visibility. Logging **all** investor interactions comes later (the "full form").
- **Data comes from MF Box:** clients, families, AUM, SIPs, transactions and commissions are **read from MF Box** (show a small "Synced from MF Box · 10:42" indicator). The CRM does not ask staff to re-type them.
- **Tenant branding:** like Investwell showing the DoItNow logo, the sidebar shows the **tenant's** logo and name (wireframe tenant: *Sharma Wealth Partners*, "CRM · MF Box").

---

## 1. Design principles

1. **Familiar first.** Keep Investwell's mental model: left sidebar modules, top bar, **My / Collaborations / My Team** tabs, list with search + filters + column chooser, Create button top right, and Comments & Activities on every record. Staff should feel at home on day 1.
2. **Quiet UI, loud data.** White surfaces, hairline borders, one accent colour (blue). Colour is kept for **status and meaning** (overdue, done, AI). No solid red blocks, no heavy gradients.
3. **One primary action per view.** Only one filled blue button per screen region. Everything else is secondary, ghost or icon-only.
4. **Work first, activity always visible.** The home screen answers "what do I do now?" (My Day, overdue first). Logging a call or visit takes one tap from anywhere ("Log activity"). Age (days) and Last Acted On are always visible, so stale work stands out.
5. **Never colour-only.** Every status pill has a dot **and** a text label. Overdue has a clock icon **and** colour (WCAG 2.2 AA).
6. **Keyboard-friendly.** Ctrl/⌘ + K command palette, `c` = create, `/` = search, `?` = shortcuts. Every Kanban drag also has a "Move to…" menu.
7. **Indian MFD context.** ₹ with Indian grouping (₹12,45,000 · ₹1.2 Cr · ₹45 L), DD MMM YYYY dates, PAN masked (ABCPK••••F), mobile masked (+91 98••• ••210), and Family Head shown next to the client.

---

## 2. Colour tokens

All colours are CSS custom properties on `:root` in `assets/styles.css`. **Never hard-code a hex value in a page; always use `var(--token)`.**

### 2.1 Light theme (default)

| Token | Value | Use |
|---|---|---|
| `--bg` | `#F6F8FB` | App background behind cards |
| `--surface` | `#FFFFFF` | Cards, sidebar, top bar, tables, drawers |
| `--surface-2` | `#F1F4F9` | Table header, input backgrounds on hover, subtle fills |
| `--surface-3` | `#E9EEF5` | Pressed/selected neutral, skeletons |
| `--border` | `#E4E9F0` | Hairline borders (default) |
| `--border-strong` | `#CBD4E1` | Input borders, dividers that must be seen |
| `--text` | `#0E1A2B` | Primary text, headings |
| `--text-2` | `#4A5A70` | Secondary text, labels |
| `--text-3` | `#8593A8` | Placeholder, meta, disabled |
| `--primary` | `#2563EB` | Primary button, links, active nav, focus |
| `--primary-hover` | `#1D4ED8` | Hover on primary |
| `--primary-soft` | `#EBF2FF` | Active nav background, selected row, soft badge |
| `--primary-soft-2` | `#D9E6FF` | Hover on soft areas |
| `--primary-text` | `#1D4ED8` | Text on `--primary-soft` |
| `--on-primary` | `#FFFFFF` | Text on primary |
| `--success` / `--success-soft` | `#15803D` / `#E8F7EE` | Done, Won, Active, Synced |
| `--warning` / `--warning-soft` | `#B45309` / `#FFF4E0` | Pending, Due today, On hold, Warm |
| `--danger` / `--danger-soft` | `#DC2626` / `#FDEDED` | Overdue, Lost, Hot, SLA breached, delete |
| `--info` / `--info-soft` | `#2563EB` / `#EBF2FF` | In progress, New |
| `--ai` / `--ai-soft` | `#6D5BD0` / `#F0EDFF` | AI-generated items, AI score, AI drafts (the only non-blue accent) |
| `--neutral` / `--neutral-soft` | `#5B6B80` / `#EEF2F7` | Cold, Closed, Draft |
| `--focus-ring` | `0 0 0 3px rgba(37,99,235,.25)` | Focus outline |
| `--shadow-sm` | `0 1px 2px rgba(14,26,43,.06)` | Cards |
| `--shadow-md` | `0 4px 16px rgba(14,26,43,.08)` | Dropdowns, popovers |
| `--shadow-lg` | `0 16px 48px rgba(14,26,43,.16)` | Drawers, modals, command palette |
| `--overlay` | `rgba(14,26,43,.40)` | Modal backdrop |

### 2.2 Dark theme

Applied through `[data-theme="dark"]` on `<html>`, and automatically through `prefers-color-scheme: dark` when the user has not chosen a theme. The toggle (moon/sun icon in the top bar) saves the choice in `localStorage` (`ak-theme`).

| Token | Value |
|---|---|
| `--bg` | `#0A111E` |
| `--surface` | `#101A2B` |
| `--surface-2` | `#152137` |
| `--surface-3` | `#1C2A44` |
| `--border` | `#1F2D47` |
| `--border-strong` | `#2C3D5E` |
| `--text` | `#E7EDF6` |
| `--text-2` | `#A6B4C8` |
| `--text-3` | `#6D7D96` |
| `--primary` | `#4F8BFF` |
| `--primary-hover` | `#6E9FFF` |
| `--primary-soft` | `rgba(79,139,255,.14)` |
| `--primary-soft-2` | `rgba(79,139,255,.22)` |
| `--primary-text` | `#8DB4FF` |
| `--on-primary` | `#FFFFFF` |
| `--success` / soft | `#3FCB7E` / `rgba(63,203,126,.14)` |
| `--warning` / soft | `#F2B04A` / `rgba(242,176,74,.14)` |
| `--danger` / soft | `#FF6B6B` / `rgba(255,107,107,.14)` |
| `--ai` / soft | `#A493FF` / `rgba(164,147,255,.15)` |
| `--neutral` / soft | `#94A3B8` / `rgba(148,163,184,.14)` |
| Shadows | Deeper and black-based: `0 1px 2px rgba(0,0,0,.4)` and so on |

Dark-theme rules: no pure black (`#000`) and no pure white text. Card edges come from `--border`, not from shadows. Charts use the same semantic tokens.

### 2.3 Chart palette (in order)
`--chart-1 #2563EB` · `--chart-2 #60A5FA` · `--chart-3 #93C5FD` · `--chart-4 #6D5BD0` · `--chart-5 #94A3B8`. Status charts use the semantic colours (Pending = warning, In progress = primary, On hold = neutral, Done = success).

**Series order for categorical charts:** use `--chart-1`, `--chart-3`, `--chart-4`, `--chart-5` (in that order). This passed the colourblind check in both themes when the Reports screen was built. `--chart-2` is too close to `--chart-3` to sit next to it, so use it only for a single highlight. Always add direct labels or a table view, so colour is never the only cue.

---

## 3. Typography

- **Font:** `Inter` (Google Fonts, weights 400/500/600/700), with `system-ui, -apple-system, "Segoe UI", Roboto, sans-serif` as fallback. Numbers use `font-variant-numeric: tabular-nums` in tables and stat tiles.
- **Base size: 14px.** A CRM is dense, so 14px body text is standard.

| Token | Size / line height / weight | Use |
|---|---|---|
| `--fs-xs` | 11px / 16 / 500, uppercase, +0.04em | Overline labels, table group headers |
| `--fs-sm` | 12px / 16 / 400–500 | Meta, badges, helper text |
| `--fs-base` | 14px / 20 / 400 | Body, table cells, inputs |
| `--fs-md` | 16px / 24 / 600 | Card titles, drawer titles |
| `--fs-lg` | 20px / 28 / 600 | Page titles |
| `--fs-xl` | 24px / 32 / 700 | Greeting ("Good afternoon, Neha") |
| `--fs-2xl` | 30px / 36 / 700 | Big stat numbers |

---

## 4. Spacing, radius, elevation

- **Spacing scale (4px base):** `--sp-1 4` · `--sp-2 8` · `--sp-3 12` · `--sp-4 16` · `--sp-5 20` · `--sp-6 24` · `--sp-8 32` · `--sp-10 40`.
- **Radius:** `--r-sm 6px` (inputs, badges), `--r-md 8px` (buttons), `--r-lg 12px` (cards, drawers), `--r-xl 16px` (modals), `--r-full 999px` (pills, avatars).
- **Elevation:** cards are flat (border + `--shadow-sm`). Only floating layers (dropdown, popover, drawer, modal, palette) get `--shadow-md`/`--shadow-lg`.
- **Control heights:** 32px (sm), **36px (default)**, 40px (lg). Minimum touch target is 24×24 (WCAG 2.5.8); icon buttons are 32×32.

---

## 5. Layout (app shell)

```
┌────────────┬───────────────────────────────────────────────────────────────┐
│  SIDEBAR   │ TOP BAR 56px: [≡] Breadcrumb   [ Search… Ctrl K ]   [+ New] ▶ 🔔 ☾ (NK) │
│  240px     ├───────────────────────────────────────────────────────────────┤
│  (64px     │ PAGE HEADER: Title + subtitle            [Secondary] [Primary] │
│  collapsed)│ TABS: My · Collaborations · My Team · New                     │
│            │ TOOLBAR: [Search] [Filters 2] [Reset]       [Saved views] [Columns] │
│            │ CONTENT: table / kanban / cards (padding 24px)               │
└────────────┴───────────────────────────────────────────────────────────────┘
```

- **Sidebar** (`--surface`, right border): tenant logo mark "SW" + "Sharma Wealth" with the product label "CRM · MF Box". Nav groups with overline labels:
  - **Work:** Home, My Day, Team Activity, Calendar, Inbox (WhatsApp + email)
  - **CRM:** Leads, Clients, Opportunities, Tasks, Meetings, Service Requests
  - **Library:** Documents, Reports & MIS
  - **Admin:** Team & Hierarchy, Automations, Settings (the last two open tabs of `20-settings.html`)
  - Footer: the user card (avatar, name, role) and a collapse button.
  - **Active item:** `--primary-soft` background, `--primary-text` text and icon, weight 600, radius 8. *This replaces Investwell's solid red block.* Hover: `--surface-2`. Counts sit on the right as small neutral pills (e.g. Tasks 12); overdue counts use the danger pill.
- **Top bar** (`--surface`, bottom border, 56px): sidebar toggle · breadcrumb · centred global search (opens the palette) · `+ New` quick-add (secondary) · "Tutorial" (ghost, play icon; replaces "Watch X Tutorial") · notifications bell with count · theme toggle · avatar.
- **Content:** `--bg` background, padding 24px, max width 1600px. Grid gaps of 16px between cards.
- **Responsive:** at ≤1024px the sidebar collapses to icons (64px); at ≤768px it becomes an off-canvas drawer, tables scroll horizontally inside their card, and drawers go full width.

---

## 6. Components (class names in `assets/styles.css`)

| Component | Class(es) | Notes |
|---|---|---|
| Button | `.btn` + `.btn-primary` / `.btn-secondary` / `.btn-ghost` / `.btn-danger` / `.btn-sm` / `.btn-lg` / `.btn-icon` | Primary = blue fill. Secondary = white with `--border-strong`. Icon + label gap 8px. |
| Icon | `<svg class="i"><use href="#i-NAME"/></svg>` | 16px default, `.i-sm` 14, `.i-lg` 20. Lucide-style 1.75 stroke. Sprite injected by `app.js`. See the icon list in §9. |
| Input | `.input`, `.select`, `.textarea`, `.input-group` (with `.input-icon`) | 36px, `--border-strong`, radius 6, focus ring. Required: `.label .req` (blue asterisk). Errors: `.input.is-error` + `.help.is-error`. |
| Field | `.field` > `.label` + control + `.help` | Forms use `.form-grid` (2 columns; `.span-2` for full width). |
| Segmented | `.segmented` > `button[aria-pressed]` | Priority Low/Med/High, Kanban/Table, Status/AI score. |
| Checkbox / switch | `.check`, `.switch` | |
| Tabs | `.tabs` > `.tab` (`.is-active`) + `.tab .count` | Underline style. Used for My / Collaborations / My Team. |
| Badge / pill | `.badge` + `.badge-success/-warning/-danger/-info/-ai/-neutral`; `.badge-dot` adds a leading dot | Status pills always have a dot + text. |
| Priority | `.prio .prio-high/-med/-low` | Signal-bar icon + text |
| Avatar | `.avatar` (`.avatar-sm/-lg`), `.avatar-group` | Initials on `--primary-soft`. |
| Card | `.card` > `.card-header` (`.card-title` + actions) + `.card-body` | Radius 12, border, `--shadow-sm`. |
| Stat tile | `.stat` (`.stat-label`, `.stat-value`, `.stat-meta`) + `.stat-danger/-warning/-success` | Mirrors Investwell's Overdue/Due Today tiles, but with a tinted left accent instead of a full pink fill. |
| Table | `.table-wrap` > `table.table` | Sticky header on `--surface-2`, row height 48, hover `--surface-2`, selected `--primary-soft`. Sortable header: `.th-sort` with chevrons. Numbers right-aligned `.num`. Row actions appear on hover (`.row-actions`). |
| Toolbar | `.toolbar` (`.toolbar-left`, `.toolbar-right`) | Search + Filters(count) + Reset · Saved views + Columns |
| Filter chip | `.chip` (`.chip-remove`) | Active filters shown as removable chips |
| Pagination | `.pagination` | "20 ▾ rows · 1–20 of 712" + page buttons |
| Empty state | `.empty` (`.empty-icon`, `.empty-title`, `.empty-text`, actions) and `.empty-steps` for 3-step onboarding | Keeps Investwell's friendly 3-step empty states (Create → Assign → Track). |
| Kanban | `.kanban` > `.kcol` (`.kcol-head`, `.kcol-body`) > `.kcard` | Column width 288px, count in header, value total, "+ Add". Drop zones `.kdrop-won` / `.kdrop-lost`. |
| Timeline | `.timeline` > `.tl-item` (`.tl-dot`, `.tl-body`, `.tl-meta`) | Comments & Activities |
| Drawer | `.drawer` (`.is-open`) + `.drawer-header/-body/-footer`, `.backdrop` | Right side, 520px. **Create/Edit forms open in drawers**, so the list stays in context (an improvement over Investwell's full-page forms). |
| Modal | `.modal` + `.backdrop` | Confirmations, short dialogs |
| Dropdown menu | `.menu` > `.menu-item` (`.menu-sep`) | |
| Toast | `.toast` (with "Undo") | Bottom-left; undo instead of "Are you sure?" dialogs |
| Progress | `.progress` > `span[style=width]` | |
| Donut | `.donut` (CSS `conic-gradient`, centre label) | Task status breakup |
| Kbd | `.kbd` | Shortcut hints |
| Banner | `.banner` + `.banner-info/-ai/-warning` | e.g. "AI opportunities can be configured in Settings" |
| Skeleton | `.skeleton` | Loading placeholders |
| Utilities | `.row`, `.col`, `.gap-*`, `.grid-2/3/4`, `.muted`, `.text-sm`, `.mono`, `.truncate`, `.ml-auto`, `.hidden` | See the bottom of styles.css |

### Status language (fixed across all modules)

| Entity | Statuses → badge variant |
|---|---|
| Task | Pending → warning · In progress → info · On hold → neutral · Done → success · Overdue (computed) → danger with clock icon |
| Lead | New → info · Contacted → neutral · Follow-up → warning · Hot lead → danger · Completed → success · Lost → neutral (strikethrough value) |
| Lead nature | Hot → danger · Warm → warning · Cold → info |
| Opportunity | New → info · In progress → info · Requirements gathered → neutral · Documents collected → warning · Won → success · Lost → danger |
| Meeting | Scheduled → info · Completed → success · Outcome pending → warning · Cancelled → neutral |
| Service request | Open → info · Waiting on RTA/client (SLA paused) → neutral · Breaching (<24h) → warning · Breached → danger · Resolved → success |
| Source | AI generated → ai badge with sparkle icon · Website / QR / WhatsApp / Manual / Referral → neutral |

---

## 7. Interaction patterns (better than the reference)

1. **Create/Edit in a right drawer** instead of a full page; Esc closes, Ctrl+Enter saves.
2. **Row hover actions** (view, edit, more) instead of always-visible icon columns.
3. **Inline status change:** clicking a status pill opens a small menu.
4. **Undo toasts** instead of confirmation dialogs for reversible actions.
5. **Saved views** next to filters ("Overdue > 7 days", "My hot leads").
6. **Kanban ⇄ Table** toggle on Leads and Opportunities, plus a "Move to…" menu on every card.
7. **Ctrl/⌘ K palette**: search clients by name/PAN/mobile/folio, jump to modules, run actions ("Create task", "Log meeting outcome").
8. **Quick-add** (`+ New`): natural-language task, e.g. "Call Rahul kal 4pm" → chip preview "Tomorrow, 4:00 PM · Rahul Verma", with the date shown before saving.
9. **Tutorial** opens a 60–90 second in-context video popover instead of sending people to YouTube.
10. **Meeting-outcome prompt** 15 minutes after a meeting ends (banner on Home and My Day).
11. **AI items** are always labelled (violet sparkle) and need human approval: "AI drafts, a human approves".

---

## 8. Sample data (use the same cast everywhere, all fictional)

- **Tenant (MFD firm):** Sharma Wealth Partners · ARN-104512 · owner/principal **Rajesh Sharma** · 3 branches: **Andheri (Mumbai)**, **Thane**, **Pune** · 1,284 clients · AUM ₹412 Cr (from MF Box)
- **Logged-in user:** **Neha Kapoor (NK) · Branch Manager · Andheri.** She manages a team *and* handles her own clients, so she sees both "My …" and "My Team …" tabs.
- **Team (Andheri unless noted):** Rohan Mehta (RM) · Sneha Iyer (RM) · Aman Gupta (RM, Thane) · Vikram Rao (Branch Manager, Pune) · Priya Nair (Ops Executive) · Arjun Desai (Service Desk) · **Sub-brokers:** Kavya Menon, Imran Sheikh, Ravi Pillai
- **Activity types (MVP):** Call · Visit / meeting · WhatsApp · Email · Task done · Follow-up · New SIP / transaction (auto-logged from MF Box)
- **Clients / families:** Rahul Verma (Family Head: Verma Family, AUM ₹1.24 Cr) · Anjali Verma · Suresh Iyer (₹86.5 L) · Meera Joshi (₹42.3 L) · Farhan Qureshi (₹2.1 Cr) · Lakshmi Narayanan (₹67.8 L) · Deepak Agarwal (₹15.2 L) · Pooja Bansal (₹9.8 L) · Harish Patel Family (₹3.4 Cr)
- **Leads:** Karan Malhotra (MF-SIP, Hot, ₹5,00,000) · Ritu Saxena (Term Insurance, Warm) · Amit Kulkarni (Health Insurance, Cold) · Nisha Reddy (ITR e-filing) · Sameer Khan (MF-SIP, Website lead)
- **Products:** MF-SIP, MF-Lumpsum, Health Insurance, Term Insurance, ITR e-filing, NPS, Fixed Deposit, PMS
- **Task categories:** Proposal: Investment Proposal · Transaction Proposal: SIP / Redemption · KYC update · Nomination update · Portfolio review · Bank mandate · Complaint follow-up
- **Example opportunities:** "Inactive client – Deepak Agarwal" (AI, score 82) · "Life insurance renewal – Meera Joshi" (AI, 74) · "SIP top-up – Suresh Iyer" · "Lumpsum from FD maturity – Farhan Qureshi" (₹25,00,000)
- **Dates:** today is **Sat 14 Nov 2026**. Use dates around it.
- PAN is always masked as `ABCPV••••K`, mobile as `+91 98••• ••210`. **No real PII from the screenshots.**

---

## 9. Icons (sprite IDs available via `#i-…`)

`home, sun, calendar, inbox, message, mail, phone, video, users, user, user-plus, target, check-square, briefcase, life-buoy, file, folder, bar-chart, pie, workflow, shield, settings, search, plus, filter, columns, sliders, x, check, chevron-down, chevron-right, chevron-left, chevrons-left, chevrons-right, chevron-up-down, more-h, more-v, edit, trash, eye, clock, alert, bell, moon, play, sparkles, star, flag, paperclip, upload, download, link, refresh, arrow-up, arrow-down, arrow-right, trending-up, rupee, menu, sidebar, grid, list, kanban, map-pin, gift, send, smile, mic, lock, log-out, command, zap, at, hash, copy, external, info, help, qr, globe, building, tag, layers, repeat, pause, archive, inbox-in`

---

## 10. Wireframe file map

| # | File | Screen |
|---|---|---|
| 01 | `01-dashboard.html` | Home dashboard (Investwell layout, improved) |
| 02 | `02-my-day.html` | My Day / My Work queue |
| 03 | `03-calendar.html` | Calendar (Month/Week/Day/Agenda) |
| 04 | `04-leads-list.html` | Leads table (My / Collab / Team / New) |
| 05 | `05-lead-create.html` | Create lead drawer + lead detail |
| 06 | `06-leads-pipeline.html` | Leads Kanban + stage/product configuration |
| 07 | `07-clients-list.html` | Clients table (AUM, family head) |
| 08 | `08-client-360.html` | Client 360 profile |
| 09 | `09-tasks-list.html` | Tasks table |
| 10 | `10-task-create.html` | Create task drawer |
| 11 | `11-task-detail.html` | Task detail (comments & activities) |
| 12 | `12-opportunities.html` | Opportunities Kanban/Table with AI score |
| 13 | `13-meetings.html` | Meetings list + create meeting |
| 14 | `14-meeting-detail.html` | Meeting detail + outcome logging |
| 15 | `15-inbox-whatsapp.html` | Team inbox (WhatsApp) |
| 16 | `16-service-requests.html` | Service requests / cases with SLA |
| 17 | `17-documents.html` | Documents (Investwell says "Coming soon"; we fill it) |
| 18 | `18-team-activity.html` | **Team Activity tracker (MVP core):** daily activity of RMs, branches and sub-brokers |
| 19 | `19-reports.html` | Reports & MIS (activity, pipeline, SIP book, commissions from MF Box) |
| 20 | `20-settings.html` | Settings: team & hierarchy, roles, configurations, automations, lead capture, MF Box sync |
| — | `index.html` | Hub linking all screens, with a theme preview |

## 11. Page contract (tools: `_template.html` is a working starter; `bash tools/shot.sh <page>.html [light|dark] [w] [h] [open=drawer-id]` renders a screenshot into `_shots/`) (for every wireframe file)

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Tasks · AdvisorKhoj CRM</title>   <!-- "<Screen> · AdvisorKhoj CRM" -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="assets/styles.css">
  <script src="assets/app.js"></script>   <!-- sets the theme before paint and injects the shell -->
  <style>/* page-specific styles only, using tokens */</style>
</head>
<body data-page="tasks" data-crumb="Tasks|Create task">
  <div class="app">
    <aside class="sidebar" id="sidebar"></aside>    <!-- filled by app.js -->
    <div class="main">
      <header class="topbar" id="topbar"></header>  <!-- filled by app.js -->
      <main class="content"> … page content … </main>
    </div>
  </div>
</body>
</html>
```

- `data-page` sets the active nav item: `home, my-day, activity, calendar, inbox, leads, clients, opportunities, tasks, meetings, service, documents, reports, team, workflows, settings`.
- `data-crumb` takes breadcrumb parts separated by `|`.
- Page-specific CSS goes in one `<style>` block and uses tokens only. Small page JavaScript (tab switching, opening a drawer) goes in one inline `<script>` at the end of the body.
- Shared helpers in `app.js`: `AK.toast(msg)`, `AK.openDrawer(id)` / `AK.closeDrawer(id)`, `[data-tabs]` auto tab switching, `[data-segmented]` toggling, `.choice-group[data-single]` single-select, `AK.toast(msg, {onUndo})`, `?` shortcuts overlay, `[data-open-drawer="id"]` / `[data-close-drawer]` attributes, and the Ctrl+K palette.
