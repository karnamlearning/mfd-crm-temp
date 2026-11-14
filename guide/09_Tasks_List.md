# 09 · Tasks list

![Tasks list](../_shots/09-tasks-list-light.png)

> **In one line:** One table of every follow-up for clients, families and leads, with overdue work shown first.
>
> **Who uses it:** RMs, branch managers, ops staff, sub-brokers · **Open it:** sidebar → Tasks · **Wireframe file:** `09-tasks-list.html`

## Why this screen matters
In an MFD firm, small jobs slip: a KYC update, a nomination form, a bank mandate renewal, a call back to a hot lead. Each one missed is a client complaint or a lost SIP. This screen puts every open job in one place, shows which ones are late and for how long, and lets a branch manager see the whole team's work, not only their own.

## What you see, part by part

### 1. Page header
The title "Tasks" with a short line: "Follow-ups for clients, families and leads · **5 overdue**" (the overdue count is in red). A small green dot says "Synced from MF Box · 10:42", so you know the client data is fresh. On the right: **Configurations** (opens Settings) and **Create task** (also opens if you press the C key).

### 2. Three tabs: who the tasks belong to
- **My Tasks (12):** tasks assigned to you or created by you.
- **Collaborations (3):** tasks owned by someone else where you were added to help.
- **My Team Tasks (48):** everything your team is working on. This is the branch manager's view and is open in the screenshot.

### 3. Saved views
One-click pills above the table: **All open**, **Overdue (5)**, **Due this week**, **High priority**, **Waiting on client**, and **+ Save view** to keep your own filter set for next time.

### 4. Search, filters and display controls
- A search box ("Search by title, client, PAN or mobile"), a **Filters** button (showing "2" active), and **Reset**.
- Filters cover assignee, due date, status, category and **source** (who or what created the task: a person, AI, MF Box or an automatic workflow).
- Active filters show as removable chips: "Assignee: My team (8)" and "Due date: on or before 30 Nov 2026", with **Clear all**.
- On the right: a **Show done tasks** switch, **Group by** (None, Status, Assignee, Due date) and **Columns** (choose which columns to show).

### 5. Bulk action bar
When you tick tasks, a dark bar appears: "2 selected · Mark done · Reassign · Change due date · Delete", plus **Select all 48**. A manager can move ten tasks from an absent RM to a colleague in one go.

### 6. The task table
Each row is one task. The columns are:
- **Title** with its category under it (for example "KYC update – Suresh Iyer", category KYC update).
- **Status:** Pending, In progress, On hold or Done. Click the status to change it on the spot (the screenshot shows this menu open).
- **Priority:** Low, Medium or High.
- **Due date:** late tasks are in red with "4 days overdue"; today's tasks show the time, such as "Today, 11:00 AM".
- **Age (days):** how long the task has been open; above 7 days the number turns red.
- **Last acted on:** date and what was last done ("Call · no answer", "WhatsApp · today", "Not acted yet").
- **Created by, Created for** (tagged Client, Family head or Lead), **Family head, Source** (Manual, AI, MF Box auto, Workflow), **Category, Assignee.**

The title column stays fixed while you scroll sideways for more columns. When you point at a row, view, edit and "more" buttons appear (more = open, log activity, duplicate, reassign, copy link, delete).

### 7. Group by due date
With **Group by → Due date**, the table splits into bands: Overdue (5), Due today (2), Due this week, Later. This is the quickest way to plan the day.

![Grouped by due date](../_shots/09-tasks-list-light-group-due.png)

### 8. Collaborations tab (empty state)
When you have no open collaborations, the tab explains the idea in three steps: **Create a task → Assign & collaborate → Track progress**. It says collaborators get an in-app and WhatsApp nudge. It offers **Create task**, **Show done tasks**, a link to a 60-second tutorial and the C-key shortcut.

![Collaborations tab](../_shots/09-tasks-list-dark-tab-collab.png)

### 9. Page footer
Rows per page (12, 25, 50), "1–12 of 48" and page buttons, plus a hint that the title and actions stay pinned when you scroll sideways.

## Better than Investwell
| Investwell today | Our version |
|---|---|
| Same three tabs (My / Collaborations / My Team) and similar columns | Kept, so Investwell users feel at home |
| Status changes need opening the task | Click the status in the row to change it; the change is logged |
| No saved views | One-click views: Overdue, Due this week, High priority, Waiting on client, plus your own |
| One task at a time | Tick many tasks, then mark done, reassign, change due date or delete together |
| Has a Source column | Source clearly says Manual, AI, MF Box auto or Workflow, so a manager sees what the system created |
| Age and Last acted on columns | Same columns, plus what was last done ("Call · no answer"), red age after 7 days, and Group by due date |

## How to demo it (2 minutes)
1. Open the screen. Point at "5 overdue" in the header and the red overdue dates in the table.
2. Point at the open status menu on "Quarterly portfolio review – Verma Family". Pick **Pending** and show the "Status changed… logged in activity" message.
3. Click the **Overdue** view pill: only the 5 late tasks remain. Click **All open** to go back.
4. Click **Group by → Due date** to show the Overdue / Due today / This week bands.
5. Point at the bulk bar (2 tasks already ticked). Click **Reassign** and show the confirmation.
6. Scroll the table sideways to show Source (AI, MF Box auto, Workflow) and Assignee.
7. Click the **Collaborations** tab to show the three-step explainer.
8. Click any task title to open the Task detail screen.

## Questions the CEO may ask
**Q: Can an RM see other RMs' tasks?**
A: In this design, "My Team Tasks" is for a manager and shows their team. An RM would mainly use "My Tasks". The exact rule depends on the role permissions we agree.

**Q: What does "MF Box auto" mean in the Source column?**
A: A task the system created from MF Box data, for example a bank mandate about to expire or a KYC update. Nobody had to type it.

**Q: What is "AI" as a source?**
A: A task suggested by the system, for example "Inactive client check-in". It is labelled so people know a human did not create it.

**Q: Will managers know which tasks are being ignored?**
A: Yes. Age turns red after 7 days and "Last acted on" shows "Not acted yet" for untouched tasks.

## Decisions needed
- Which events in MF Box should create tasks automatically (mandate expiry, KYC, nomination missing), and who gets them by default?
- Should AI-suggested tasks go straight onto the list, or wait for a person to accept them?
- Who may bulk delete or reassign: only branch managers and the owner, or RMs too?

---
Prev: [Client 360](08_Client_360.md) · [All screens](00_Overview.md) · Next: [Create task](10_Create_Task.md)
