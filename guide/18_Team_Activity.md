# 18 · Team Activity (MVP core)

![Team Activity](../_shots/18-team-activity-light.png)

> **In one line:** Shows what every RM, sub-broker and ops person in a branch did today: calls, visits, follow-ups and who has gone quiet.
>
> **Who uses it:** branch manager, owner (all branches) · **Open it:** sidebar → Team Activity · **Wireframe file:** `18-team-activity.html`

## Why this screen matters
On 13 Nov 2026 the stakeholders said: "the primary purpose of the CRM will be to track the daily activity of RMs, branches and sub-brokers". This is that screen. Today a branch manager has to phone people or ask on WhatsApp to know who called whom. Here she sees it on one page: who is active, who is idle, whose follow-ups are late, and how her branch compares with the others on effort.

> **Not a sales leaderboard, on purpose.**
> AMFI (the Association of Mutual Funds in India, the industry body that registers distributors) told MFDs (mutual fund distributors) with employees or sub-brokers in March and July 2024 that they must **not run "any competition related to achievement of business scale or sale"**. They may not give gifts or other rewards for it either. A firm that breaks this can have its ARN (the AMFI registration number it needs to sell mutual funds) suspended. A "top sellers" leaderboard could count as such a contest. So this screen:
> - **measures effort and service only**: calls, visits, WhatsApp, tasks done, overdue items, follow-ups done on time. There is no sales amount, AUM or commission per person;
> - **does not rank people**: the table is "Sorted by role, then name", not by who did most. There are no rank numbers, medals or "top performer" badges;
> - **says so on screen**: "Activity view for coaching, not a ranking (AMFI)", "Effort and service only. No sales contests (AMFI)" and "Prompts for 1:1s, not a public list";
> - **keeps coaching private**: notes on a person are "Visible to you and Rajesh Sharma (the owner) only".
>
> New SIPs from MF Box appear only as a branch total, not as a per-person sales column.

## What you see, part by part

### 1. Header and filters
"Team Activity · Andheri branch · Today, Sat 14 Nov 2026", with "Synced from MF Box · 10:42" (MF Box is our back-office software). Controls:
- **Today / This week / This month / Custom** for the date range.
- **Branch:** Andheri, Thane, Pune, or All branches (for the owner).
- **Role:** All roles, RMs, Sub-brokers (independent agents paid a share of commission) or Ops.
- **Log activity** button (see part 10).

### 2. Six number tiles
- **Activities logged 86**, up 12% on last Saturday (77).
- **Calls 41**: 28 connected, 13 not.
- **Meetings & visits 9**: 6 visits, 3 in office.
- **Follow-ups done 18 of 24**, with a progress bar.
- **New SIPs 7 · ₹1.6 L/month**, tagged "MF BOX": "Auto-logged, no typing". (A SIP is a monthly investment plan.)
- **No activity today 2**: Ravi Pillai and Arjun Desai. Clicking it jumps to the alerts.

### 3. Activity by person (coaching, not a ranking)
The heart of the screen: one row per person, 8 people in Andheri.
- **Person:** name, role tag (RM, Branch Mgr, Sub-broker, Ops, Service desk) and branch.
- **Calls, Visits, WA (WhatsApp), Tasks:** counts for today. A dash means zero.
- **Overdue:** follow-ups past their due time, in red.
- **Follow-ups:** share done on time, with a small bar: green at 80% or more, amber 50–79%, red below 50%.
- **Last activity:** for example "12 min ago · Call · Suresh Iyer" (the screen's time is 1:10 PM). Problems stand out: "Idle since 11:40" (amber) or "No activity today · Last: Fri 4:30 PM" (red).
- **Today by hour:** a strip of 11 small boxes from 9 AM to 7 PM. Darker blue means more activity in that hour; empty outlined boxes are hours still to come.

A grey **Andheri total** row adds it up: 41 calls, 9 visits, 19 WhatsApp, 12 tasks, 8 overdue, 75% on time, plus "5 emails · 7 SIPs (MF Box)". **Export** downloads the table as a spreadsheet file. The footer says "Click a row to open that person's day" and "Sorted by role, then name".

### 4. One person's day (side panel)
Clicking a row opens a side panel for that person:
- name, role and who they report to, with a status badge (Active, Idle since 11:40, or No activity today);
- four boxes: Calls, Visits, WhatsApp, Overdue;
- a larger hour-by-hour strip and **Today's timeline** (for example "Call with Pooja Bansal · No answer · 11:40 AM");
- if nothing is logged, a message such as "Nothing logged yet today. 3 follow-ups are overdue. Send a nudge or check in on a 1:1.";
- a **Coaching note (private to managers)** box;
- buttons **Open in Reports**, **Message** (a WhatsApp nudge) and **Log activity**.

### 5. Follow-up compliance and Activity mix
- **Follow-up compliance** (how many follow-ups were done on time): 75% today, with bars for the last 6 Saturdays (66% rising to 75%) against a dashed **Target 80%** line, and an "Improving" badge.
- **Activity mix · today:** how the 86 activities split: Calls 41 (48%), WhatsApp 19 (22%), Tasks done 12 (14%), Meetings 9 (10%), Email 5 (6%).

### 6. Overdue follow-ups
A list of the 8 late follow-ups (4 shown) with client or lead, owner, due date and age in days. Each row has **Reassign** and **Nudge on WhatsApp** buttons. The header says "Prompts for 1:1s, not a public list", and **View all in Tasks** opens the full list.

### 7. Live activity
A running feed of the latest actions: a WhatsApp sent, calls logged with their result ("Callback requested", "Interested"), sub-broker Kavya Menon checking in at a client's location in Powai, and a new ₹10,000/month SIP from MF Box at 10:42 AM, worded "registered by Meera Joshi (Sneha Iyer's client)". It never says a sale was "credited to" a staff member. It shows "81 more today" and a link to the full activity log.

### 8. Branch comparison
"Avg activities per person · today", counting everyone in the branch who uses the CRM: **Andheri 10.8** (86 activities ÷ 8 people, follow-ups 75%), **Thane 9.0** (Aman Gupta; Nikhil Sawant is invited but not yet active, 81%), **Pune 7.3** (29 ÷ 4 people, 68%). The note underneath reads "Effort and service only. No sales contests (AMFI)."

### 9. Inactive alerts
Three people who need a check: Ravi Pillai (no activity today, 3 overdue), Arjun Desai (nothing since Fri 6:15 PM), Imran Sheikh (idle since 11:40 AM, 1 h 30 m). Each has a WhatsApp nudge button. The footer says alerts come "after 90 min idle in work hours", and a gear icon opens the alert settings.

### 10. Log activity (side panel)
The quick form behind the **Log activity** button ("Takes 10 seconds"):
- **Type:** Call, Visit, Meeting, WhatsApp, Email, Other.
- **With:** search a client or lead by name, PAN, mobile or folio. The picked person shows as a card (for example Karan Malhotra, Lead, MF-SIP, ₹5,00,000, Hot).
- **Outcome:** Interested, Callback requested, Meeting scheduled, Documents requested, Not interested, No answer. Plus **Duration** and **Notes** (dictation by mic on mobile).
- **Next follow-up:** quick chips Tomorrow, Mon, In 3 days, Next week, No follow-up. A follow-up task is created and shows in My Day.
- **Location check-in:** a switch, on in the example ("Powai, Mumbai · accuracy ±40 m"). When it is off, the panel says "location is not saved".

## Better than Investwell
| Investwell today | Our version |
|---|---|
| No team activity screen. A manager can only "View Dashboard As" one RM at a time and read the Recent Activities feed | One page for the whole branch, with a row per person and a branch total |
| No count of calls, visits or WhatsApp per person | Daily counts, overdue items, on-time follow-up % and an hour-by-hour strip |
| Nothing flags a person who has gone quiet | "No activity today" and "Idle since…" alerts, with a one-click WhatsApp nudge |
| No branch view | Branch filter, role filter and a branch comparison on effort |
| SIPs from the back office are not counted as activity | New SIPs from MF Box are logged automatically, no typing |
| No guard against sales contests | Effort-only measures, no ranking, AMFI notes on screen, private coaching notes |

## How to demo it (2 minutes)
1. Click **Team Activity** in the sidebar. Read the six tiles from left to right.
2. Point to "Activity view for coaching, not a ranking (AMFI)" above the table and "Sorted by role, then name" below it.
3. In the **All roles** menu choose **Sub-brokers**. Only Kavya, Imran and Ravi remain, with their own total. Switch back to **All roles**.
4. Click the **Imran Sheikh** row. Show "Idle since 11:40", the hour strip, the timeline and the private coaching note. Close the panel.
5. Click the **Ravi Pillai** row. Show "Nothing logged yet today" with 3 overdue, then click **Message**: a WhatsApp nudge is sent. Close the panel.
6. Click **Log activity**. Show the type tiles, outcome, the "In 3 days" follow-up chip and the location switch. Click **Save activity**: the message confirms the follow-up date.
7. Click **This week**. The subtitle changes to "This week, 9–14 Nov 2026". (In the wireframe the numbers stay as today's.)

## Questions the CEO may ask
**Q: Isn't this a sales leaderboard? AMFI bans sales contests.**
A: No. It counts effort and service (calls, visits, follow-ups on time), not sales. People are listed by role and name, not ranked. There are no prizes, and the screen itself carries "not a ranking (AMFI)" notes.

**Q: Where do the numbers come from? Do RMs have to fill timesheets?**
A: No timesheets. Numbers come from what staff already do in the CRM (logging a call, ticking a task, recording a meeting outcome) and from MF Box, which adds new SIPs automatically.

**Q: Can the owner see all branches?**
A: Yes. The branch menu has All branches, Andheri, Thane and Pune, and the Branch comparison card shows all three side by side.

**Q: Will staff feel watched?**
A: The screen is framed for coaching: coaching notes are private, the overdue list is "not a public list", and location is saved only when the check-in switch is on. How much RMs see of each other is still to be decided.

**Q: Why include sub-brokers?**
A: The stakeholders named sub-brokers as people whose daily activity must be tracked. The wireframe shows three of them in Andheri.

## Decisions needed
- **AMFI sign-off (open question Q54):** ask a compliance officer to confirm the per-person table and the branch comparison are allowed, and to check the exact AMFI circular wording (our research is based on press reports of the March and July 2024 guidance). Also confirm that the live feed may name the client's RM next to an MF Box SIP ("Meera Joshi (Sneha Iyer's client)").
- **Who sees this screen:** owner and branch managers only? Can an RM see colleagues' rows, or only their own?
- **Sub-brokers and location:** they are independent agents, not employees. Should they get logins (Q3), idle alerts and location check-in like staff? If location is kept, it needs clear consent under India's data-protection law (the DPDP Act).
- **What counts as activity (F5):** confirm the list (calls, visits, WhatsApp, email, tasks, follow-ups, MF Box SIPs), the 90-minute idle rule and work hours. "28 connected · 13 not" assumes automatic call tracking, which needs a phone integration.

---
Prev: [Documents](17_Documents.md) · [All screens](00_Overview.md) · Next: [Reports & MIS](19_Reports_and_MIS.md)
