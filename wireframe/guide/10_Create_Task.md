# 10 · Create task

![Create task](../_shots/10-task-create-light.png)

> **In one line:** A side panel to create a task in seconds, by typing one sentence or filling a short form.
>
> **Who uses it:** RMs, branch managers, ops staff, sub-brokers · **Open it:** sidebar → Tasks → **Create task** (or press C anywhere) · **Wireframe file:** `10-task-create.html`

## Why this screen matters
If creating a follow-up takes too long, RMs stop doing it and work lives in their heads or on WhatsApp. This panel slides in from the right over the Tasks list, so you never lose your place. You can type "Send SIP top-up proposal to Suresh by Monday high priority" and the form fills itself. The client's details come from MF Box, so nothing is typed twice.

![Full form](../_shots/10-task-create-dark-tall.png)

## What you see, part by part

### 1. Panel header
"Create task", with the note "Fields marked * are required · Saves to My Tasks". Two small buttons on the right: open the task as a full page, and close (Esc).

### 2. "Describe it" box (plain-language entry)
A shaded box at the top with a sparkle icon. The hint says: "Type in plain English or Hinglish ("kal 4pm"); we fill the form".
- The sample sentence is: *Send SIP top-up proposal to Suresh by Monday high priority*.
- Under it, small chips show what the system understood **before** anything is saved: **Title** SIP top-up proposal · **Client** Suresh Iyer · **Due** Mon 16 Nov · **Priority** High (in red).
- You check the chips, then press **Apply** to copy them into the form. Nothing happens until you press Apply.

### 3. Details
- **Title*** (required), for example "SIP top-up proposal – Suresh Iyer".
- **Description**, with the hint "Type @ to mention · / for templates". The sample text says to raise the SIP from ₹25,000 to ₹40,000 after his bonus and share the proposal on WhatsApp.

### 4. Schedule & status
The section shows "Today: Sat 14 Nov 2026" for reference.
- **Due date*** and a separate **time** (11:00 AM). In the screenshot the date is empty, so the box is red with "Due date is required". This shows how the form warns you before saving.
- Quick picks under the date: **Mon 16 Nov** (dashed, with a sparkle, because it came from your sentence), **Tomorrow**, **Next week**.
- **Status:** Pending, In progress, On hold, Done (the list is shown open).
- **Send a reminder 1 day before due date** (ticked), sent in-app and on WhatsApp to the assignee.
- **Priority:** Low, Medium, High buttons.
- **Repeat:** Does not repeat, Weekly, Monthly, Quarterly (useful for regular review calls).

### 5. People
- **Created for:** first choose Client, Family head or Lead, then search by name or PAN (for a lead, by name or mobile).
- Once chosen, a card shows the client from MF Box: Suresh Iyer · masked PAN · AUM (total money invested through the firm) ₹86.5 L · 4 active SIPs · Family head: Iyer Family · RM: Rohan Mehta, with an "MF Box" tag.
- **Assigned to:** Neha Kapoor (you), with a suggestion underneath: "Suggested: Rohan Mehta (Suresh's RM)". One click hands it to the client's own RM.
- **Collaborators** ("Can view & comment"): Rohan Mehta and Priya Nair, plus an **Add** button.

### 6. Classify & link
- **Category:** a list such as Proposal: Investment Proposal, Transaction Proposal: SIP, Transaction Proposal: Redemption, KYC update, Nomination update, Portfolio review, Bank mandate, Complaint follow-up. Here it is set to **Transaction Proposal: SIP**. A gear button next to it opens Settings to edit the list.
- **Link to** (optional): connect the task to an Opportunity, Meeting or Service request. Here it is linked to the opportunity "SIP top-up – Suresh Iyer".

### 7. Checklist
Small steps inside the task, with "1 of 2 done". Each step shows who does it: "Pull current SIP book from MF Box" (Neha, done) and "Share proposal PDF with Suresh on WhatsApp" (Rohan). Type in the last line and press Enter to add a step.

### 8. Attachments
A drop area: "Drop files here or browse · PDF, JPG, PNG, XLSX · up to 10 MB each". The note "Stored in client's Documents" means the file also appears in that client's document folder. A sample file "SIP_topup_proposal_Iyer_Nov26.pdf" is shown.

### 9. Footer buttons
"Ctrl + Enter to save" hint, then **Cancel**, **Create & add another** (saves and clears the form for the next task) and **Create task**.

## Better than Investwell
| Investwell today | Our version |
|---|---|
| Fill every field by hand | Type one sentence ("Describe it"), check the chips, press Apply |
| Due date only | Date plus time, quick picks (Tomorrow, Next week) and a Repeat option |
| Created for: choose a client, family head or lead | Same, plus a card showing AUM, SIPs, family and RM from MF Box |
| Assigned to: pick a name | Also suggests the client's own RM |
| No checklist, links or files while creating | Checklist with owners, link to an opportunity/meeting/service request, and attachments |
| One task, then start again | **Create & add another**, and Ctrl + Enter to save |

## How to demo it (2 minutes)
1. Open the screen; the panel is already open over the Tasks list.
2. Point at the red "Due date is required". Click **Create task** and show the warning "Add a due date to create this task".
3. Read the "Describe it" sentence aloud and point at the four chips. Click **Apply**: the due date fills with Mon 16 Nov, priority switches to High, and a message says "Applied 4 fields from your description".
4. Click the **Status** box to open or close the status list.
5. Scroll to **People**. Click "Rohan Mehta" in "Suggested" and show the assignee change.
6. Change **Created for** from Client to Lead and show the search hint change to "Search by lead name or mobile".
7. In **Checklist**, type "Call Suresh to confirm" and press Enter.
8. Click **Create task**. The panel closes and a message confirms the task was created.

## Questions the CEO may ask
**Q: Is "Describe it" AI?**
A: It reads a short sentence and fills the form. It can be built with simple rules for dates and names, or with AI for harder sentences. Either way the person sees the chips and must press Apply.

**Q: Does it understand Hindi words?**
A: The design promises Hinglish such as "kal 4pm". How much Hinglish it handles must be decided and tested.

**Q: Do RMs have to type client details?**
A: No. They search by name or PAN and the client card is filled from MF Box.

**Q: Who gets the WhatsApp reminder?**
A: The person the task is assigned to, one day before the due date, if the box is ticked.

## Decisions needed
- "Describe it": simple rules, or paid AI? How much Hinglish must it handle at launch?
- WhatsApp reminders to staff cost money per message. Should they be on by default?
- Should the firm be able to edit task categories freely, or should we ship a fixed starter list?
- Should a new task default to the logged-in user, or to the client's RM from MF Box?

---
Prev: [Tasks list](09_Tasks_List.md) · [All screens](00_Overview.md) · Next: [Task detail](11_Task_Detail.md)
