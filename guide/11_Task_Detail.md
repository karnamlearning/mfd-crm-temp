# 11 · Task detail

![Task detail](../_shots/11-task-detail-light.png)

> **In one line:** The full story of one task: what to do, steps done, who said what, and proof from MF Box.
>
> **Who uses it:** RMs, branch managers, ops staff, collaborators · **Open it:** sidebar → Tasks → click a task title · **Wireframe file:** `11-task-detail.html`

## Why this screen matters
A task like "SIP top-up proposal" involves an RM, a manager's approval, a WhatsApp message to the client and an ops person registering the SIP. Today that history is scattered across phones and chats. This page keeps it in one timeline. It also shows when the SIP actually appears in MF Box, so the manager knows the work led to business, not just activity.

## What you see, part by part

### 1. Top line
- **← My Tasks** to go back, the task number **TSK-1042** and a copy-link button.
- On the right, "3 / 12" with up and down arrows to move to the previous or next task without going back to the list.

### 2. Title and main buttons
The title "SIP top-up proposal – Suresh Iyer". Buttons: **Mark done**, **Edit**, and a "more" menu with Duplicate, Convert to service request, Copy link and Delete ("Undo available").

### 3. Quick facts row
A row of small labels you can read at a glance:
- **Status** "In progress". Click it to change status.
- **High** priority, category **Transaction Proposal: SIP**, **Due Mon 16 Nov · in 2 days**, and the client **Suresh Iyer** (click to open Client 360).
- A green badge: **Approved by Neha Kapoor**.
- **Collaborators:** Vikram Rao, Rohan Mehta and Priya Nair, with a "+" to add more.

Below it: "Created by Vikram Rao · 9 Nov 2026 · Last acted on 2 h ago · Assigned to Neha Kapoor (you)".

### 4. Description
What the task is about: Suresh's salary went up, his SIPs (₹25,000 a month in 4 funds) are short of his daughter's education goal for 2034, so propose a ₹15,000 a month top-up in a flexi-cap fund that fits his risk profile, taking him to ₹40,000 a month. Suresh's own RM is Rohan Mehta, who is a collaborator here. Three bullets: use the existing bank e-mandate (limit ₹50,000), get Neha's approval before sharing (a "Transaction Proposal rule"), and share the PDF on WhatsApp and record consent. It shows "Edited by Neha Kapoor · 12 Nov".

### 5. Checklist
Five steps with a progress bar: **3 of 5 done**. Each step shows the person's initials and a date. One step, "Confirm SIP registration in MF Box", is highlighted blue with **"Match found today"**: the system has seen the new SIP in MF Box and suggests ticking it. **+ Add item** adds a step.

### 6. Comments & Activities
One timeline (12 entries) with a filter: **All / Comments / Activity**.
- **Comment box:** "Leave a comment… type @ to mention a teammate", with buttons for mention, attach file and emoji, a lock label **Internal only** (team can see it, the client never does), and **Send** (or Ctrl + Enter).
- **Today:** "MF Box · SIP of ₹15,000 registered: auto-linked", with the scheme (Parag Parikh Flexi Cap), masked folio, amount and first debit date 5 Dec 2026, and a **Tick item** button to tick the matching checklist step. Below it, a comment from Vikram Rao tagged **Mentioned you**.
- **Yesterday:** Rohan's WhatsApp message to Suresh, sent from an approved template with the proposal PDF, marked "Read 6:21 PM", and Suresh's reply "YES, looks good". Also: file attached, status changed Pending → In progress, and "Neha Kapoor approved the transaction proposal".
- **Earlier days:** due date changed from 12 Nov to 16 Nov, Neha's comment explaining why, the linked review meeting marked Completed, a risk-profile PDF attached, and the task being created.

### 7. Right panel: Overview
Task age 5 days, status, priority, category, due date, assigned to, and **Approval: Approved 13 Nov**. Under "Created for": a client card for Suresh Iyer with masked PAN and **₹86.5 L AUM** (total money invested through the firm), marked "Synced from MF Box · 10:42".

### 8. Right panel: Linked records, Attachments, Reminders
- **Linked records (2):** the opportunity "SIP top-up – Suresh Iyer" (₹15,000/mo, stage "In progress") and the meeting "Portfolio review – Suresh Iyer" (Completed). A "+" links another record.
- **Attachments (2):** the proposal PDF and risk profile PDF, with size, uploader, date, a download button and a drop area for new files.
- **Reminders (2):** "1 day before due · Sun 15 Nov, 9:00 AM · In-app + WhatsApp" and "On due date · Mon 16 Nov, 10:00 AM · In-app", each with an on/off switch, plus **Add**.

### 9. Edit panel
**Edit** opens a side panel with title, description, created for, assigned to, due date, status, category, priority, collaborators and the reminder tick. The note says "changes are logged in Comments & Activities".

![Edit panel](../_shots/11-task-detail-light-open-drawer-edit.png)

## Better than Investwell
| Investwell today | Our version |
|---|---|
| Status pill, collaborators, created by, last acted on | Same, plus priority, category, due date, client and approval as one row of labels |
| Comments & Activities timeline | Same idea, plus a filter, @mentions, an "Internal only" label and WhatsApp messages with the client's reply |
| No link to real transactions shown in the demo | MF Box SIP registration appears in the timeline and the matching checklist step can be ticked in one click |
| Overview panel and attachments | Also linked opportunity and meeting, reminders with on/off switches, and an approval record |
| No checklist shown in the demo | Checklist with owner, date and a progress bar |
| Go back to the list for the next task | Previous / next arrows ("3 / 12") |

## How to demo it (2 minutes)
1. Open the screen. Read the title and the quick facts row, and point at "Approved by Neha Kapoor".
2. In the timeline, point at the MF Box entry. Click **Tick item**: the checklist moves to "4 of 5 done".
3. Click the **In progress** label at the top and choose **On hold** to show the status change; set it back.
4. Click **Activity** in the filter to hide comments, then **All**.
5. Type a comment, click the @ button, pick Rohan Mehta, then **Send**. The comment appears under Today.
6. Click **Edit** to show the side panel, then **Cancel**.
7. Click **Mark done**. A message says "Task marked Done. Suresh Iyer's timeline updated".

## Questions the CEO may ask
**Q: How does the system know the SIP was registered?**
A: It reads the client's new SIPs from MF Box and matches them to open tasks for that client. It suggests ticking the step; a person confirms.

**Q: Are WhatsApp chats with clients stored here?**
A: The design shows the message sent from the CRM and the client's reply inside the task. This needs our team inbox and WhatsApp setup to work.

**Q: Can the client see internal comments?**
A: No. Comments are marked "Internal only" and are for the firm's team.

**Q: What is the "Transaction Proposal rule"?**
A: A rule that a manager must approve certain proposals before they go to the client. The approval is recorded with name and date.

## Decisions needed
- Which task categories need a manager's approval, and who can approve (branch manager, owner)?
- How strict should MF Box matching be (same client, same amount, within how many days)? Should it ever tick a step without a person?
- Storing client WhatsApp replies as consent: is that enough for the firm's records and compliance?
- WhatsApp reminders to staff cost money per message. Keep them on by default?

---
Prev: [Create task](10_Create_Task.md) · [All screens](00_Overview.md) · Next: [Opportunities](12_Opportunities.md)
