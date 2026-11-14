# 01 · Home dashboard

![Home dashboard](../_shots/01-dashboard-light.png)

> **In one line:** The first screen after login. It shows your day, your pending work and your team's activity on one page.
>
> **Who uses it:** RM, branch manager, owner, ops, sub-broker · **Open it:** sidebar → Home · **Wireframe file:** `01-dashboard.html`

## Why this screen matters
An MFD (mutual fund distributor) firm's staff start the day asking "What do I have to do, and what is late?". A branch manager also asks "Is my team working today?". This screen answers both in one look. It keeps the Investwell card layout people already know, and adds a live "Team activity today" panel, because tracking daily activity is the main job of the CRM.

## What you see, part by part

### 1. Greeting and "View dashboard as"
"Good afternoon, Neha", today's date, the branch, and a small line "Synced from MF Box · 10:42". MF Box is our back-office software. It shows the client and SIP data was last refreshed at 10:42, so nobody types it again.
- **View dashboard as:** a manager can see the dashboard as one of her RMs (relationship managers, the staff who look after clients), as the whole branch, or as the whole firm. Only people in her reporting line appear, and every switch is recorded in the audit trail (a permanent log of who did what).
- **Log activity:** opens a short side form to record a call, visit, WhatsApp or email ("Takes 10 seconds · shows up in Team Activity"): client or lead, time, duration, outcome, notes, and a tick box to create a follow-up task.

### 2. "Log the outcome" banner
About 15 minutes after a meeting ends, a strip asks how it went: **Completed**, **Follow-up needed** or **No-show**. In the wireframe it asks about "Portfolio review – Verma Family", which ran 11:00–11:45 AM and "ended 1 h 25 min ago". One click saves it. "Follow-up needed" also creates a follow-up task. This stops meetings ending with no record.

### 3. Today's Insights
Your schedule for today as a timeline, with a blue "now" line at 1:10 PM: the 10:00 AM call with Suresh Iyer (Done), the 11:00–11:45 AM Verma Family portfolio review (Outcome pending), a 3:00 PM call with Farhan Qureshi, the 3:30 PM video call with Karan Malhotra, the "KYC update – Meera Joshi" task due at 5:00 PM and the 5:00–5:30 PM weekly pipeline huddle (every Saturday). The strip on top counts 3 meetings, 2 calls and 1 task, and the header says "1 of 6 done". At the bottom: "Next video call in 2 h 20 min" with a **Copy link** button for the video call.

### 4. Tasks
Four clickable boxes for your own work (when viewing as yourself): **Overdue 3** (the same 3 late items shown in My Day and on the Calendar), **Due today 2** (1 done already), **Upcoming 8** (next 7 days) and **Unresolved 14** (oldest 21 days). A ring chart splits the 14 unresolved tasks into Pending, In progress and On hold. A callout names the oldest overdue task, "KYC update – Suresh Iyer" (2 days late), with an **Open** button.

### 5. Opportunities
An opportunity is a chance of new business from an existing client, such as a SIP top-up (a client raising a monthly investment). Boxes show Overdue (with "₹8.4 L at stake"), Due today, Pending (₹48.5 L pipeline) and **AI identified today 3**. A toggle switches the bar chart between **Status** and **AI score** (how likely the AI thinks the deal is). The purple box "3 AI suggestions to review" says "AI drafts, you approve".

### 6. Leads assigned to me
A lead is a possible new client. The header says **13 open**: the same 14 leads as "My Leads" on the Leads screen, minus 1 that is completed. Completed and lost leads never count as open. Bars show the open leads by stage (New 3, Contacted 3, Follow-up 4, Hot lead 3), plus a separate "Completed this month 1" bar. Below are the three hot leads (Karan Malhotra ₹5,00,000, Gaurav Sinha ₹50,00,000, Kunal Shah ₹25,00,000) with their next date. Kunal Shah is shown in red as overdue.

### 7. Today's Events
Client birthdays, wedding anniversaries and investment anniversaries, with filters (All, Birthdays, Anniversaries). Each has a **Send wishes** button that sends a WhatsApp greeting. One already shows "Sent 9:12 AM". A footer says "This week: 6 birthdays, 3 anniversaries".

### 8. Recent Activities
A running feed of changes across the team, newest first and all before the current time (1:10 PM): calls logged, the capital-gains statement you sent Rahul Verma on WhatsApp at 12:20 PM, a document uploaded, the Verma Family meeting ending at 11:45 AM, a service request resolved, a follow-up date moved, and a SIP auto-logged from MF Box at 10:42 AM ("registered by Meera Joshi (Sneha Iyer's client)"). Old and new values are shown, for example "12 Nov → 18 Nov". A filter picks one module. The footer reminds you that every change is kept in the audit trail.

### 9. Team activity today
The panel that ties Home to the main purpose of the CRM. It shows the same numbers as the Team Activity screen for the Andheri branch (8 people): **Activities 86** (+9 on last Saturday), **Calls 41**, **Meetings & visits 9**, **Follow-ups done 18 of 24 (75%)** and **New SIPs 7 · ₹1.6 L/month** from MF Box (a SIP is a monthly investment plan). Below, one row per person shows calls, visits, WhatsApp messages, tasks done, a small colour bar of their activity mix with a total, and when they last logged something. The person totals add up to 81; the other 5 of the 86 activities are emails. Two people show **"No activity yet"**: Ravi Pillai (sub-broker, an independent agent paid a share of commission) and Arjun Desai (service desk), each with a **Nudge** button that sends a reminder. The arrow opens the full Team Activity screen.

## Better than Investwell
| Investwell today | Our version |
|---|---|
| Same card layout (Today's Insights, Tasks, Opportunities, Leads, Events, Recent Activities) | Same layout, so staff feel at home, but every number is clickable and opens the matching list |
| No team activity panel on the dashboard | "Team activity today" with per-person counts, a "No activity yet" flag and a one-click Nudge |
| "View Dashboard As" any RM | Limited to your reporting line, and every switch is logged in the audit trail |
| No meeting-outcome prompt seen in the demo video | A banner asks for the meeting outcome 15 minutes after it ends |
| Birthday and anniversary list (dropdown) | One-click WhatsApp wishes, with "Sent" shown so two people don't both send |
| No sync time shown on the dashboard | "Synced from MF Box · 10:42" so people trust the numbers |

## How to demo it (2 minutes)
1. Open the Home screen. Point to "Synced from MF Box · 10:42": client data comes from MF Box, not typing.
2. In the "Log the outcome" banner, click **Follow-up needed**. The banner turns green and says a follow-up task was created for Tue, 17 Nov.
3. In Opportunities, click **AI score** to switch the chart, then back to **Status**.
4. In Today's Events, click **Send wishes** next to Anjali Verma. It changes to "Sent just now".
5. Scroll to "Team activity today". Show the per-person rows, then click **Nudge** next to Ravi Pillai.
6. Change "View dashboard as" to Rohan Mehta. A message confirms the switch is logged. (In the wireframe the numbers don't change.)
7. Click **Log activity**, show the short form, click **Save activity**.
8. Click the arrow on "Team activity today" to jump to the Team Activity screen.

## Questions the CEO may ask
**Q: Do RMs have to type client, AUM or SIP data here?**
A: No. AUM (total money a client has invested through us), SIPs and transactions are read from MF Box. The sync time is shown at the top.

**Q: Can an RM spy on colleagues with "View dashboard as"?**
A: No. You only see people who report to you, and every switch is logged.

**Q: Will a solo MFD with no team see an empty team panel?**
A: The wireframe shows a branch manager. For a one-person firm the team panel would simply not be needed; this still has to be designed.

**Q: Is the AI deciding anything on its own?**
A: No. AI items are labelled in purple and say "AI drafts, you approve". A person must review them.

## Decisions needed
- **AI opportunities in the MVP (first release)?** The AI cards and AI score need data from MF Box and an AI service, which has a running cost.
- **WhatsApp greetings:** which WhatsApp provider we use and who pays the per-message charge for "Send wishes" and "Nudge".
- **Who may "view as" whom** (owner sees everyone, branch manager sees own branch, RM sees only self) needs sign-off.

---
Prev: [Overview](00_Overview.md) · [All screens](00_Overview.md) · Next: [My Day](02_My_Day.md)
