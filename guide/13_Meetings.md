# 13 · Meetings

![Meetings](../_shots/13-meetings-light-1440x1400.png)

> **In one line:** All client, lead, AMC and team meetings by day, and a check that every meeting gets an outcome.
>
> **Who uses it:** RMs, branch managers, sub-brokers, owner · **Open it:** sidebar → Meetings · **Wireframe file:** `13-meetings.html`

## Why this screen matters
Meetings are where an MFD earns business: reviews lead to top-ups, onboarding leads to new SIPs. But if nobody writes down what was agreed, the follow-up never happens. This screen lists every meeting, chases the host for an outcome soon after it ends, and shows the manager which clients are due a portfolio review under their tier: Tier A every quarter, Tier B every six months, Tier C every year.

## What you see, part by part

### 1. Page header
Title "Meetings" with "Client reviews, onboarding, AMC and team meetings, each with a logged outcome". On the right: "Synced from MF Box · 10:42", **Configurations** and **Schedule meeting**.
The Configurations menu links to: Meeting types & agenda templates, Portfolio review cadence (By tier), Reminders & outcome prompt (15 min), Outcome options, and Calendar & video links (Google).

### 2. Outcome warning banner
An amber strip: "**2 meetings are waiting for an outcome.** Outcomes logged within 24 h: **86%** this week", with a **Log now** button that jumps to the "Outcome pending" tab.

### 3. Tabs
- **Upcoming (6):** your next meetings, from today to Wed 18 Nov (open in the screenshot).
- **Outcome pending (2):** meetings that ended but have no outcome yet.
- **Past:** finished and cancelled meetings ("1–4 of 38 this month").
- **Team meetings (11):** meetings run by your team members (Rohan, Kavya, Aman, Imran) across Andheri, Thane and sub-brokers, with a link to Team Activity.

### 4. Search and filters
Search by subject, client, PAN or host; a **Filters** button; drop-downs for **mode** (Online, Offline, Phone) and **type** (Portfolio review, Onboarding, SIP review, Internal team meeting, AMC meeting). A **List / Calendar** switch opens the Calendar screen.

### 5. The meetings table
Meetings are grouped by day (Today · Sat 14 Nov, Mon 16 Nov, Tue 17 Nov, Wed 18 Nov), with a blue **"Now · 1:10 PM"** line so you see what is past and what is next. Today has the Verma Family portfolio review (11:00–11:45 AM, outcome pending), the onboarding call with Karan Malhotra (3:30 PM, with Sneha Iyer) and the weekly pipeline huddle (every Saturday, 5:00–5:30 PM). Each row shows:
- **Time** with end time and length ("to 4:15 PM · 45 m").
- **Meeting** name, a type label, and helpful notes: **Prep pack**, "In 2 h 20 m" (blue), or "Ended 1 h 25 m ago" (amber).
- **Created for:** who the meeting is about, with a sub-line: a client with AUM (total money invested through the firm, e.g. "Client · ₹2.1 Cr"), a family, a lead ("Lead · Hot · MF-SIP"), an AMC ("Bharat Mutual Fund · Organisation"), or an internal team ("Andheri branch team · 5 members").
- **People:** initials of host and participants.
- **Mode:** Offline with the place (Andheri branch, Bandra W office), Online with the tool (Google Meet, Zoom), or Phone with a masked number.
- **Status:** Scheduled, Outcome pending, Completed or Cancelled.
- **Actions:** **Log outcome**, **Join** (for online meetings) or a "more" button.

The footer says "6 upcoming · today to Wed 18 Nov · Prep packs are built from MF Box 1 h before each client meeting", with **Open in calendar**. A prep pack is a short summary of the client's holdings to read before the meeting.

### 6. Outcome pending tab
Two meetings: today's Verma Family review and Meera Joshi's SIP review from yesterday (ended 4:30 PM), which shows "3 h 20 m left of 24 h". The manager can press a bell to **nudge Sneha**. The footer states the rule: an outcome prompt goes to the host 15 minutes after a meeting ends; if not logged in 24 h, it goes to the branch manager.

### 7. Past tab
Completed meetings show a one-line result, e.g. "Rebalancing agreed · 2 tasks" or "Term quote shared", with **View notes**. A cancelled meeting ("Client asked to reschedule") has a **Reschedule** button.

### 8. Portfolio reviews due (bottom left)
"By tier: A quarterly · B half-yearly · C yearly · from MF Box": **11 clients** whose review is due under their tier. Each row shows the client, AUM, tier, their RM, how long since the last review (Deepak Agarwal, Tier B: **8 months**, in red; Suresh Iyer, Tier B, RM Rohan Mehta: 6 months) and a **Schedule** button. Footer: "WhatsApp review reminders: By tier · On" and **View all 11**.

### 9. This week at a glance (bottom right)
For your own meetings, Mon 9 – Sat 14 Nov: **14** meetings (9 with clients), **11** completed (+3 vs last week), **2** pending (oldest 21 h), **1** cancelled. Two bars: "Outcome logged ≤ 24 h: 86%" and "Tasks from outcomes: 9". A **Reports** link opens Reports & MIS.

### 10. Schedule meeting side panel
Opens from **Schedule meeting** or any **Schedule** button. It is filled with a sample: the Verma Family's next quarterly review (they are Tier A and were reviewed today), on Mon 15 Feb 2027.

![Schedule meeting panel](../_shots/13-meetings-dark-1440x1900-open-drawer-meeting.png)

- **Top:** Subject*, Description, and **Note (+ Add)**: internal notes for the team only, never the client.
- **People:** **Created for*** (Family, Client, Lead, or Organisation such as an AMC or insurer), searched by name or PAN from MF Box. The chosen card shows "Verma Family · Head: Rahul Verma · masked PAN · ₹1.24 Cr · Last review 14 Nov". Then **Host*** (you), **Remind me before** (5, 15, 30 mins, 1 hour, 1 day) and **Participants**: team members, the client and family members, or any email. External people also get the invite.
- **When:** Date*, start and end time*, and a green check: "**No clashes.** Neha, Rohan and meeting room 2 are free at this time."
- **Where & type:** **Mode*** Online / Offline / Phone. The next field changes with it: a Google Meet link with **New Meet link**; or a location ("Andheri branch · Meeting room 2") with **Use client address**; or a phone number. **Type*** (Portfolio review, Onboarding, SIP review, Internal team meeting, AMC meeting, Insurance review) with a gear to manage types.
- **Agenda & automation:** an agenda filled from the "Portfolio review" template (asset mix vs risk profile, SIP top-up, education goal, nominee update), which you can reorder, tick, remove or add to. Three on/off switches:
  - **Auto-generate prep pack from MF Box:** AUM, XIRR (the yearly return on the client's money, counting when each amount went in), SIPs, recent transactions and open tasks, ready 1 h before.
  - **Ask for outcome 15 min after end:** prompts the host on Home and My Day; goes to the branch manager after 24 h.
  - **Send WhatsApp confirmation to client:** approved message with date, time and link; reminder 2 h before.
- **Footer:** "Ctrl + Enter to schedule", **Cancel**, **Schedule**.

## Better than Investwell
| Investwell today | Our version |
|---|---|
| Create Meeting form: subject, description, note, created for (client), host, date, time, reminder, mode | All of these kept, plus participants, type, agenda and clash check |
| Created for a client | Client, family, lead, or an organisation such as an AMC or insurer |
| The demo shows no outcome tracking | Outcome prompt 15 min after the end, a pending tab, nudges, and escalation to the manager after 24 h |
| No meeting prep shown in the demo | Prep pack from MF Box 1 h before each client meeting |
| No overdue-review list shown in the demo | "Portfolio reviews due" lists clients whose review is due under their tier (A quarterly, B half-yearly, C yearly), with one-click Schedule |
| My / Team tabs on every module | Team meetings tab, plus weekly numbers (completed, pending, outcome logged within 24 h) |

## How to demo it (2 minutes)
1. Open the screen. Point at the amber banner, then the "Now · 1:10 PM" line in Today's list.
2. Point at the Verma Family row ("Ended 1 h 25 m ago", Outcome pending) and the **Join** button on Karan Malhotra's online onboarding. Click **Join**.
3. Click **Log now** in the banner: the Outcome pending tab opens. Click the bell on Meera Joshi's row to nudge Sneha.
4. Click the **Past** tab, then **Team meetings**.
5. Scroll down to **Portfolio reviews due** and click **Schedule** next to Deepak Agarwal. The side panel opens.
6. In the panel, click **Offline** and then **Phone** to show the location field change. Point at "No clashes".
7. Add an agenda item and press Enter. Point at the three automation switches.
8. Click **Schedule**. A message says "Meeting scheduled for Mon 15 Feb 2027, 11:00 AM · invites sent to 3 people".

## Questions the CEO may ask
**Q: Does this sync with Google Calendar or Outlook?**
A: Settings shows a "Calendar & video links" option set to Google, and the panel creates a Google Meet link. Which calendars we support is still a decision.

**Q: What happens if an RM never logs the outcome?**
A: The host is prompted 15 minutes after the meeting. After 24 hours it goes to the branch manager, and the manager can nudge the RM.

**Q: Where does the "Portfolio reviews due" list come from?**
A: From MF Box clients, their tier and the date of their last logged review. A client appears when the tier's review gap has passed: 3 months for Tier A, 6 months for Tier B, 12 months for Tier C.

**Q: Can AMC staff be invited?**
A: Yes. Meetings can be for an organisation, and external people can be added by email.

## Decisions needed
- Calendar and video tools: Google only at launch, or also Outlook and Zoom? (Zoom appears in the sample list.)
- WhatsApp confirmations and 2 h reminders to clients cost money per message and need approved templates. On by default?
- Review cadence by tier (A quarterly, B half-yearly, C yearly): confirm these are the right defaults, and whether a firm can change them.
- Is 24 hours the right time before an unlogged outcome goes to the branch manager?

---
Prev: [Opportunities](12_Opportunities.md) · [All screens](00_Overview.md) · Next: [Meeting detail & outcome](14_Meeting_Detail.md)
