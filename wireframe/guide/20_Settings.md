# 20 · Settings

![Settings](../_shots/20-settings-light.png)

> **In one line:** Where the owner sets up the firm: people, who sees what, stages, automatic rules, MF Box link and security.
>
> **Who uses it:** owner (everything); branch manager (own branch only) · **Open it:** sidebar → Settings (also Team & Hierarchy and Automations under Admin) · **Wireframe file:** `20-settings.html`

## Why this screen matters
Every other screen depends on what is set here: who reports to whom decides the "My Team" view, roles decide who can see PAN, AUM and commission, and rules decide which tasks get created on their own. For an MFD, it also protects the client book: exports need approval and a leaving employee can be cut off in one step. Most of the people and client data is **imported from MF Box**, so set-up is short.

## What you see, part by part

### 1. Page header and settings menu
- Header: "Sharma Wealth Partners · ARN-104512 · every change is written to the audit trail" (a log of who changed what), a green "Synced from MF Box · 10:42" tag and an **Audit log** button.
- Left menu in five groups: **Organisation** (Firm profile), **People** (Team & hierarchy, Roles & permissions), **Modules** (Module configurations, Automations), **Integrations** (MF Box sync, Lead capture, **WhatsApp Business** with a green "On" dot because it is connected, and **Email inbox** marked **Later**) and **Security** (Security & access, owner only).
- Note at the bottom: "Branch managers can edit their own branch only."

### 2. Team & hierarchy
"Who reports to whom. This drives every My Team tab, approvals and escalations."
- Blue banner: **Imported from MF Box: 14 users**, 3 branches and reporting lines, with a **Re-sync** button.
- Four small tiles: 14 active users (+1 invited), 3 branches, 4 sub-brokers (see own clients only), and **2 ARN / EUIN alerts** (ARN is the distributor's licence code; EUIN is each salesperson's code; here 1 ARN lapsed (Imran Sheikh), 1 due for renewal).
- **Organisation chart:** owner Rajesh Sharma at the top ("Sees all branches"), then one column per branch (Andheri, Thane, Pune) with branch manager, RMs, sub-brokers, ops and service desk. You can drag a person onto a new manager. Each branch shows its people and AUM: Andheri 8 people · ₹218 Cr, Thane 1 person + 1 invited · ₹74 Cr, Pune 4 people · ₹120 Cr. Thane shows "No branch manager yet" and an **Assign branch manager** button. A "My Team depth" choice sets how far down a manager can see (1 level, 2 levels, whole branch). Chart or List view.
- **Solo MFD? Skip branches.** A **Use branches** switch at the bottom. With one user, the CRM hides teams, approvals and hierarchy. So a one-person MFD never has to deal with branches.
- **Departments:** four cards (Sales, Operations, Service desk, Management) with head, headcount and what each department is used for. Departments cut across branches and route work: default owners for task categories, service-request triage and the Team Activity role filter. **Add department** opens a side form.
- **Users table:** name, role and department, branch, reports to, ARN / EUIN with validity (green valid, amber "renew by", red "ARN lapsed 02 Nov 2026"), last active and status (Active, Restricted, Invited). Under Imran Sheikh's row an amber note reads: "ARN lapsed: restricted from new MF transactions, can still log activity" (he was last active today at 11:40). Footer: "EUIN lasts 3 years; renewal opens 6 months early. Lapses go to the Owner."
- **Invite user** opens a side form: name, work email, mobile, role, department, branch, reports to, EUIN and its validity ("we check validity with AMFI"). It advises using Re-sync if the person is already in MF Box.

### 3. Roles & permissions
"What each role can see and do."
- Three cards explain the three tabs seen on every list: **My** (records you own), **Collaborations** (records shared with you), **My Team** (records of people below you).
- A grid of ticks with five roles across the top (Owner, Branch manager, RM, Sub-broker, Ops) and the number of users in each.
- **Visibility rows:** record scope (owner: all branches; branch manager: own branch **+ firm totals**, so Neha can see firm totals and the branch comparison in Reports; RM: own + shared; sub-broker: own only), view team data, see full PAN (otherwise masked), see exact AUM (otherwise shown as a range for sub-brokers), see commissions (branch manager: firm totals, with per-person detail for own branch only; sub-broker: own payout only).
- **Action rows:** export (branch manager needs approval), delete (owner only, restorable for 30 days), reassign, view as another user (read-only and logged), change settings.
- Owner rights are fixed. A **Custom role** button lets the firm add its own role.

### 4. Module configurations
Four tabs:
- **Leads:** lead stages in order (New, Contacted, Follow-up, Hot lead, then final stages Completed and Lost, where Lost asks for a reason), drag to reorder. Products list ("Interested in": MF-SIP, MF-Lumpsum, Health and Term Insurance, ITR e-filing, NPS, Fixed Deposit, PMS) with how many leads use each. Lead defaults: follow-up reminder, Hot / Warm / Cold, and a **stale lead alert** (no activity for 7 days, tell the branch manager).
- **Tasks (7):** task categories, each with a default owner, default due time and checklist, and how often it was used (for example KYC update → Ops, 2 business days, 4 checklist items).
- **Meetings:** meeting types with default length (Portfolio review 45 min, with automatic review reminders by tier: A every 3 months, B every 6, C yearly; client meeting; internal team meeting; AMC / company meeting) and an **Ask for the outcome** switch (prompt 15 minutes after a meeting ends).
- **Opportunity AI rules:** rules read MF Box data each night and create opportunities: inactive client (180 days), insurance renewal (30 days before), FD maturity, SIP maturity, and a new **SIP stopped or bounced** win-back rule (marked "not in Investwell", switched off). "AI writes the why; an RM decides."

### 5. Lead capture
"Collect leads from a QR code and from your website straight into New Leads, with source tagged."
- **QR code** that opens the firm's contact form, with Download and an A5 poster. It shows 126 scans and 23 leads in 30 days, who QR leads go to (round robin among Andheri RMs, meaning turn by turn), the form fields, and a tick to show DPDP consent text (India's data-protection law) and save it with the lead.
- **Website integration** (Connected · sharmawealth.in) in three steps: download the developer guide PDF, copy the **secure key** (shown once; Regenerate switches off the old key), and a simple picture of the flow: visitor → website form → New Leads with an RM assigned.
- **Recently captured:** the last three leads with source (Website or QR), product and assigned RM.

### 6. Automations
"When something happens, if a condition is true, then do an action."
- Tiles: 6 active rules (1 paused), 214 runs in 7 days, **61 tasks created that no one typed**, 1 failed run.
- **Rules (7)**, each with an on/off switch, the When → If → Then chain, run count and last run. Examples: SIP bounces in MF Box → task for the RM in 1 business day; website or QR lead → round robin, call within 2 hours; high-priority task 2 days overdue → tell the manager; KYC on hold with an active SIP → task for ops; meeting ended 15 minutes ago with no outcome → reminder; EUIN / ARN expiring in 6 months → renewal task and tell the owner. "Tier A coverage gap" is paused by Rajesh Sharma.
- **Run log:** every run with its result (Done, Failed, Skipped) and a plain reason, for example "Reminder sent to Neha Kapoor · outcome still pending" for today's Verma Family review, "Sneha Iyer on leave from 16 Nov → given to cover, Rohan Mehta", or the failure "No Ops user in Thane" with a **Fix in Team** link.
- **New automation** opens a side form with When / If / Then dropdowns and a **Test on last 7 days** button: "this would have created 4 tasks (Rohan 2, Sneha 1, Aman 1)".

### 7. MF Box sync
"Clients, AUM, SIPs and commissions are read from MF Box Back Office. Staff never re-type them."
- Connection card: Connected, **read-only**, last sync 10:42, next 11:42, took 48 seconds, frequency (every hour, every 15 minutes, nightly).
- **What is synced:** clients (1,284), families (412), AUM (₹412 Cr, from 13 Nov NAV), SIPs and mandates (3,906), transactions (186 in 24 hours, added to the client timeline), commissions (monthly, role-restricted) and users and hierarchy (14). It says plainly: "MF Box is the source of truth; fixes are made in MF Box."
- **Sync history:** last three runs, including a "Partial" one where 2 clients were skipped because PAN was missing in MF Box.
- **Sync now** button.

### 8. Security & access (owner only)
"Data is hosted in India; logs are kept for at least 1 year."
- **Sign-in:** single sign-on with Google Workspace, two-factor login for everyone (13 of 14 enrolled), session timeout 30 minutes, and OTP again before seeing full PAN, exporting or "view as".
- **Export approvals:** on, approver Rajesh Sharma, files watermarked. A live request waits: "Sneha Iyer · 214 clients, includes mobile and AUM" with **Approve / Reject**. Max 500 rows per export. Masking summary with a link to Roles.
- **Offboarding kill switch:** pick the person leaving and who gets their book, then **Revoke access now**. It ends all sessions on every device, moves clients, leads and open tasks, watches that book for redemptions and transfers for 90 days, and keeps the history.

### 9. Firm profile
- Logo, firm name, ARN (read from MF Box, valid till 18 Aug 2028), owner, and the support email shown to clients. The logo and name show in the sidebar, reports and client messages.
- **Branches** table: branch, city, head, people, clients, AUM, with **Add branch**: Andheri 712 clients · ₹218 Cr, Thane 231 · ₹74 Cr, Pune 341 · ₹120 Cr (1,284 clients and ₹412 Cr in all). Thane's head is shown as "Owner (no branch manager)".
- **Working calendar:** working days (Mon–Sat), holiday calendars (NSE/BSE market holidays, Maharashtra bank holidays), language (English or Hindi), office hours 09:30–18:30. Used for "business day" due dates and SLAs (promised finish times).

## Better than Investwell
| Investwell today | Our version |
|---|---|
| Settings sections for Opportunities, Leads, Meetings, WhatsApp | Same areas kept, plus Team & hierarchy, Roles, Automations, MF Box sync, Security and Firm profile |
| Configurable lead stages, products and task categories | Same, plus default owner, due time and checklist per task category, and stale-lead alerts |
| Lead QR code and website integration with developer PDF and one-time key | Same, plus scan and lead counts, auto-assignment and DPDP consent on the form |
| AI opportunities configurable in settings | Same, with clear thresholds per rule and a new SIP bounce win-back rule |
| No visible hierarchy, permission grid or rule builder | Org chart with ARN / EUIN expiry alerts, a role grid with PAN / AUM masking, and a When → If → Then builder with test run and run log |
| No offboarding control | **Kill switch** to cut access and move the book in one step; exports need approval |

## How to demo it (2 minutes)
1. Open **Settings**. It lands on **Team & hierarchy**. Point at "Imported from MF Box: 14 users" and the org chart.
2. Show the **Use branches** switch and say: a one-person MFD turns this off and never sees branches. Flip it to show the message, then back.
3. Point at Imran Sheikh's red **ARN lapsed** date, the "Restricted" status and the note under his row: restricted from new MF transactions, can still log activity.
4. Click **Roles & permissions** to show the tick grid (PAN masked, AUM shown as a range for sub-brokers).
5. Click **Automations**, switch one rule off and on, then click **New automation** to show the dry-run result. Cancel.
6. Click **MF Box sync** and point at "read-only" and "fixes are made in MF Box".
7. Click **Security & access**: approve Sneha's export request, then show the **kill switch**.
8. Finish on **Lead capture** to show the QR code and the website key.

## Questions the CEO may ask
**Q: Does the firm have to set up its team from scratch?**
A: No. Users, branches and reporting lines are imported from MF Box. The owner only fixes gaps, like Thane having no branch manager.

**Q: What about a one-person MFD?**
A: They switch off "Use branches". The CRM then hides teams, approvals and hierarchy and works as a simple personal CRM.

**Q: If an RM leaves, do they take the clients?**
A: The owner uses the kill switch: access ends on every device, the book moves to the manager, and the CRM watches for redemptions from that book for 90 days.

**Q: Can staff change client AUM or SIP data in the CRM?**
A: No. The MF Box link is read-only. Corrections are made in MF Box and flow in on the next sync.

**Q: Who can see commission?**
A: Set in Roles: everyone sees their own share (RMs their mapped commission, sub-brokers their payout); branch managers also see firm totals and detail for their own branch; the owner sees all. Only owner, branch managers and ops reach reconciliation and statements. See [Commissions](21_Commissions.md).

## Decisions needed
- **Email inbox** is marked "Later" (WhatsApp Business is already connected). In which phase should email come in?
- **Default roles and permissions** we ship (especially who sees commission and full PAN), and whether firms may create custom roles in the MVP.
- **MF Box sync frequency** (every hour, every 15 minutes or nightly) and its load on MF Box.
- **Kill switch "90-day watch"** and EUIN validity checks with AMFI: in MVP or later, and the data source.

---
Prev: [Reports & MIS](19_Reports_and_MIS.md) · [All screens](00_Overview.md) · Next: [Commissions](21_Commissions.md)
