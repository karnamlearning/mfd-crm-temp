# 03 · Calendar

![Calendar](../_shots/03-calendar-light.png)

> **In one line:** All meetings, tasks, follow-ups, client birthdays and market holidays on one calendar, for you or your team.
>
> **Who uses it:** RM, branch manager, owner, sub-broker, ops · **Open it:** sidebar → Calendar · **Wireframe file:** `03-calendar.html`

## Why this screen matters
An RM's week is a mix of client meetings, follow-up calls, paperwork and family occasions. A branch manager also needs to see who in the team is busy before booking a joint visit. This calendar puts everything in one place, syncs with Google Calendar, and adds things an MFD (mutual fund distributor) cares about, such as stock-exchange holidays that shift SIP debit dates.

## What you see, part by part

### 1. Header and top controls
"Calendar" with the line "Google Calendar 2-way sync · MF Box birthdays · synced 10:42". Two-way sync means items added in either the CRM or Google Calendar show in both. Birthdays come from MF Box, our back-office software. On the right:
- **Search by title or client.** Results are counted in a small chip that you can clear.
- **View as:** see the calendar as yourself, the whole Andheri team, or one person (Rohan, Sneha, Aman in Thane, or sub-broker Kavya Menon).
- **Create ▾:** Meeting, Task, Follow-up, Log activity, and **Copy my booking link** (marked "New"), which lets a client pick a free slot from your calendar.

### 2. Left panel: mini calendar and filters
- A small month calendar. Dots under a date mean something is booked; click a date to jump to it.
- **My calendars:** tick boxes with counts for November: Meetings (26), Tasks (14), Follow-ups (13), Birthdays & anniversaries (6), AI suggestions (4), Team members (21) and Market holidays (3). Untick one to hide it.
- **Team · Andheri:** tick team members (Rohan Mehta, Sneha Iyer, Aman Gupta, Priya Nair, Kavya Menon) to lay their items over yours. Their items carry their initials. "Select all" ticks everyone.

### 3. Navigation bar
**Today**, back and forward arrows, and the month name, which opens a date picker with quick jumps (Today, Mon 16 Nov, 30 Nov). A red **3 overdue** pill opens the overdue items. These are your own 3 late items, the same ones shown in My Day and on Home: "KYC update – Suresh Iyer" (12 Nov), "Send SIP proposal – Karan Malhotra" and the SIP bounce for Pooja Bansal (both 13 Nov). On the right, four views: **Month, Week, Day, Agenda**, each with a one-letter keyboard shortcut (M, W, D, A).

### 4. Month view (the default)
A grid of November 2026. Each item is a small coloured chip: blue for meetings, orange for tasks, grey for follow-ups, green for birthdays and anniversaries, purple for AI suggestions. Finished items are struck through. An overdue task has a red clock. Busy days show "+12 more", which opens that day's full list. Today (Sat 14 Nov) has 14 items: five client birthdays and anniversaries (the same ones as "Today's Events" on Home), the 10:00 AM call with Suresh Iyer, the 11:00–11:45 AM Verma Family portfolio review (outcome pending), the 3:00 PM call with Farhan Qureshi, the 3:30 PM onboarding with Karan Malhotra, the "KYC update – Meera Joshi" task and the 5:00–5:30 PM weekly pipeline huddle, plus items of the team members you ticked.
- The **weekly pipeline huddle – Andheri** repeats every Saturday, 5:00–5:30 PM.
- **Market holidays** are tagged on the date: "Muhurat" on Diwali (8 Nov), and "NSE holiday" on 10 Nov and 24 Nov, with that day shaded.

### 5. Week and Day views
An hour-by-hour grid from 9 AM to 8 PM, with a red line for the current time (1:10). All-day items (birthdays, holidays, AI suggestions) sit in a strip at the top. Overlapping items are placed side by side. Clicking an empty slot opens a new meeting for that time.

### 6. Agenda view
A plain list for the next two weeks. **Overdue** items are pinned at the top in red. Each row shows time, title, type, client details (for example "Client · AUM ₹86.5 L"; AUM is the total money a client has invested through us), a status badge and the owner.

### 7. Event details pop-up
Clicking any item opens a card with the right actions for its type:
- **Meeting:** time, "in 2 h 20 min" (for the 3:30 PM onboarding with Karan Malhotra), Google Meet link ("link sent to client on WhatsApp"), client, host and attendees, "15 min before · WhatsApp + push" reminder, the linked opportunity and notes. Buttons: **Join**, **Reschedule**, **Log outcome**.
- **Task:** due date, "Overdue · 2d", priority, client, owner. Buttons: **Mark done**, **Reschedule**, **Open task**.
- **Birthday:** **Send wishes** (an AI-drafted WhatsApp message, reviewed in Inbox before sending).
- **AI suggestion:** why the AI flagged it (for example "No transaction in 14 months"), with "AI drafts, a human approves". Buttons: **Review opportunity**, **Dismiss**.
- **Market holiday:** what is closed and how many client SIPs move to the next working day, with **See affected SIPs**.

**Reschedule** shows ready-made time chips. Picking one moves the item, and the note says the client gets the new time on WhatsApp and Google Calendar updates.

### 8. Create panel
A side panel to create a Meeting, Task, Follow-up or Log activity. Fields: title, client or lead (search by name, PAN, mobile or folio; for Suresh Iyer it shows "AUM ₹86.5 L · RM Rohan Mehta (from MF Box)"), date, time, mode (In person, Google Meet, Phone), assign to, reminder, link to an opportunity or task, and agenda. A yellow **Heads-up** warns of a clash: "Sneha Iyer has a 14:00 task that day. You are free 12:00 PM – 1:00 PM."

## Better than Investwell
| Investwell today | Our version |
|---|---|
| Month / Week / Day / Agenda with M/W/D/A keys, View as, Create menu | Same, so it feels familiar |
| No Google Calendar sync seen | Two-way Google Calendar sync |
| Team calendar only through "View as", one person at a time | Tick several team members and see them laid over your own calendar |
| No market holidays seen in the demo | NSE holidays shown, with how many client SIP debits move |
| Quick actions on an item not seen in the demo video | Pop-up with one-click Join, Call, Directions, Mark done, Log outcome, and Reschedule by picking a suggested slot (client told on WhatsApp) |
| No clash check seen in the demo | Warns when a colleague is busy at the chosen time |

## How to demo it (2 minutes)
1. Open Calendar (Month view). Point to the colour key on the left and the "NSE holiday" tags on 10 and 24 Nov.
2. On 14 Nov click **+12 more** to see the whole day, then click **Open day**.
3. Click **Week** (or press W). Click the blue "Onboarding – Karan Malhotra" meeting at 3:30 PM ("in 2 h 20 min"). Show Join and the WhatsApp reminder.
4. Click **Reschedule**, then the "Mon 16 Nov, 12:00 PM" chip. The meeting moves and a message says the client was notified.
5. Click the red **3 overdue** pill. Agenda view opens with overdue tasks at the top.
6. In the left panel tick **Kavya Menon** to add a sub-broker's items.
7. Click **Create ▾ → Meeting**. Show the client details pulled from MF Box and the clash warning. Click **Cancel**.

## Questions the CEO may ask
**Q: Do staff have to stop using Google Calendar?**
A: No. The wireframe shows two-way sync, so either calendar works.

**Q: Can a manager see a sub-broker's calendar?**
A: Yes. Kavya Menon (sub-broker) is in the "View as" list and the team panel. Whether sub-brokers have logins at all is still open.

**Q: Why show market holidays?**
A: On an NSE holiday SIP debits move to the next working day. The calendar shows how many clients are affected, so RMs can warn them.

**Q: Does the client see my calendar through the booking link?**
A: The menu item only says clients "can pick a free slot from your calendar". They would see free times, not your meetings. This needs a design.

## Decisions needed
- **Google Calendar sync in the MVP (first release)?** And do we need Outlook as well?
- **WhatsApp invites, reminders and reschedule messages** to clients have a per-message cost. Who pays, and which provider?
- **Client booking link:** this faces clients, so it may belong to the external (blue) CRM. Keep it here or move it?
- **Market holiday and affected-SIP data:** confirm MF Box can supply the SIP dates (open question Q42).

---
Prev: [My Day](02_My_Day.md) · [All screens](00_Overview.md) · Next: [Leads list](04_Leads_List.md)
