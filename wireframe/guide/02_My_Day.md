# 02 · My Day

![My Day](../_shots/02-my-day-light.png)

> **In one line:** One to-do list for today: every task, call, meeting, chat, approval and alert, overdue items first.
>
> **Who uses it:** RM, branch manager, sub-broker, ops · **Open it:** sidebar → My Day · **Wireframe file:** `02-my-day.html`

## Why this screen matters
Today an RM has to open Tasks, Meetings, Leads and WhatsApp one by one to know what is due. Things fall through the gaps, and follow-ups are missed. My Day pulls all of it into one list, sorted with the late items on top, so the RM can work down it and tick things off. Every tick is also activity that the manager sees in Team Activity.

## What you see, part by part

### 1. Header and progress
"My Day · Sat 14 Nov" with "9 items need you today · 3 overdue". On the right:
- **Synced from MF Box · 10:42** (MF Box is our back-office software that holds client and SIP data).
- A progress bar: **7 of 16 cleared, 44%**.
- A **Mine / My team** switch. A manager can flip to see the whole team's queue (74 items).

### 2. Quick add (type it like you say it)
A single box where you type a plain sentence such as "Call Rahul kal 4pm". Before saving, it shows what it understood as small chips: **Tomorrow, Sun 15 Nov · 4:00 PM**, **Rahul Verma (Verma Family)**, **Type: Call**, **Owner: Neha**. It explains that "kal" (Hindi for both yesterday and tomorrow) was read as tomorrow, with a "Meant yesterday?" link to flip it. Adding "+Rohan" assigns it to Rohan.

### 3. Work queue
The main list, "Overdue first, then by due time · one tap to clear". Filter tabs across the top: **All 16, Tasks 4, Calls 4, Meetings 3, Chats 1, Approvals 1, Service 1, MF Box 2**. Each tab shows exactly the rows it counts, and the tab counts add up to 16. The list has four sections you can fold:
- **Overdue (3)**, shown in red and sorted by due time: "KYC update – Suresh Iyer" (2 days late), "Send SIP proposal – Karan Malhotra" (20 h late) and a SIP bounce for Pooja Bansal (19 h late). The SIP bounce is an auto-task from MF Box (a monthly investment that failed because of insufficient funds). These are the same 3 overdue items shown on Home and the Calendar.
- **Today (6), sorted by due time:** a WhatsApp reply Meera Joshi is waiting for (by 2:00 PM, 50 m left), a ₹4,50,000 redemption to approve (by 2:30 PM, before the 3 PM cut-off), a 3:00 PM call about Farhan Qureshi's FD maturity of ₹25,00,000, the 3:30 PM onboarding video call with Karan Malhotra (with Sneha Iyer), a "KYC update – Meera Joshi" task due at 5:00 PM, and a service request due by 7:00 PM that is close to breaching its SLA (the promised time to finish a request). The section header shows "4 h 50 m of work left". "7 cleared today · Show" reveals what is already done.
- **Upcoming (4)** for the next 7 days, including "SIP ending in 30 days" raised automatically from MF Box.
- **Later (3)** after 21 Nov.

Each row shows the client or lead, a category tag and the due time. Clicking a row opens an action bar: **Done, Snooze, Reschedule, Delegate, Log outcome**, each with a one-key shortcut listed at the bottom of the list.

### 4. "How did the meeting go?"
A card on the right asks for the outcome of the Verma Family portfolio review (11:00–11:45 AM, Andheri office), "asked 15 min after every meeting ends", and notes the same prompt was also sent on WhatsApp. Three buttons: **Went well, Follow-up needed, Didn't happen**. You can also **Record voice note** or **Type note**. A note says voice notes become a summary plus follow-up tasks for you to approve.

### 5. Today's schedule
A timeline of today's fixed-time items, with a red "now" line at 1:10 PM: the 10:00 AM call with Suresh Iyer (done), the 11:00 AM Verma Family review (outcome pending), the 3:00 PM call with Farhan Qureshi, the 3:30 PM video call with Karan Malhotra and the 5:00–5:30 PM weekly pipeline huddle (every Saturday). Phone numbers are shown masked.

### 6. Daily activity goals
Your own daily targets with progress bars: **Calls 6/10, Visits 0/2, Meetings 1/3, Follow-ups 3/6** (they match your row on Team Activity: 6 calls, 1 client meeting, 3 follow-ups done), and a "4-day streak · all outcomes logged" badge. It says "Set by you" and "Your own targets, no leaderboard. Calls and WhatsApp are counted automatically."

### 7. Updates
Mentions and comments from colleagues, kept apart from the to-do list ("Mentions & comments, not to-dos"). Example: Vikram Rao asks "@Neha can we pitch a ₹10,000 top-up before the 18 Nov review?". A **Mark read** button clears the "3 new" badge.

## Better than Investwell
| Investwell today | Our version |
|---|---|
| No "My Day" screen. Work is spread across Tasks, Meetings, Leads and WhatsApp | One list for everything due, overdue first |
| Tasks are created through a full form | Type a sentence ("Call Rahul kal 4pm") and check the preview chips before saving |
| No link to back-office events | Auto-tasks from MF Box, such as a SIP bounce or a SIP about to end |
| No meeting-outcome prompt seen in the demo video | Outcome prompt 15 minutes after a meeting, with voice-note option |
| Task rows offer only view, edit and delete | Tick, snooze, reschedule or delegate in one click or one key, with Undo |
| No daily activity goals seen | Private daily activity goals, no public ranking |

## How to demo it (2 minutes)
1. Open My Day. Read the header: "9 items need you today · 3 overdue" and "7 of 16 cleared".
2. In the quick-add box, click **Meant yesterday?** to show the "kal" handling, then click it again. Click **Add**. The item appears under Upcoming with an Undo.
3. Tick the circle on the first overdue row. It is marked done, the progress bar rises, and Undo is offered.
4. Click the **Calls** filter tab, then **All** again.
5. On the "SR-1042 Bank mandate change" row, click the row and press **h** (snooze). The message says the SLA breach stays visible to your manager.
6. On the right, click **Follow-up needed** in "How did the meeting go?". The badge changes to "Outcome logged".
7. Click **My team** at the top: the progress bar switches to the whole team's total (out of 74 items).

## Questions the CEO may ask
**Q: How is this different from the Tasks screen?**
A: Tasks lists only tasks. My Day also brings in calls, meetings, WhatsApp chats, approvals, service requests and MF Box alerts, and only shows what needs action now.

**Q: Can an RM hide bad news by snoozing?**
A: No. Snoozing a service request shows the message that the SLA breach stays visible to the manager.

**Q: Who sets the daily goals?**
A: In this wireframe the RM sets them ("Set by you"). They are private, with no leaderboard.

**Q: Does it understand Hindi words?**
A: The quick-add reads common words like "kal" and "aaj" and always shows the date it picked before saving.

## Decisions needed
- **Automatic counting of calls and WhatsApp** (as the goals card says) needs a phone and WhatsApp integration. Is that in the MVP (first release)?
- **Voice notes turned into summaries and tasks** uses AI and has a running cost. MVP or later?
- **Daily goals:** set by the RM only, or also by the manager? (Linked to open question Q55 on targets.)
- **Approvals in the queue** (for example "Approve redemption ₹4,50,000"): does the CRM approve transactions, or only track that MF Box approval happened?

---
Prev: [Home dashboard](01_Home_Dashboard.md) · [All screens](00_Overview.md) · Next: [Calendar](03_Calendar.md)
