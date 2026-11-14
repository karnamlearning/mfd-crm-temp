# 04 · Leads list

![Leads list](../_shots/04-leads-list-light.png)

> **In one line:** Every prospect in one table, sorted so overdue follow-ups come first, plus a queue for new unassigned leads.
>
> **Who uses it:** RM, branch manager, sub-broker; owner for the team view · **Open it:** sidebar → Leads · **Wireframe file:** `04-leads-list.html`

## Why this screen matters
A lead (a prospect who might become a client) is lost when nobody calls back in time. This screen puts the follow-up date, the last time someone acted, and the expected value side by side, so the RM sees at once who is slipping. New leads from the website, QR code and WhatsApp land in their own tab and get an owner fast, instead of sitting unread.

## What you see, part by part

### 1. Page header
- Title **Leads** with the line "Prospects from website, QR, WhatsApp, referrals and sub-brokers · Andheri branch".
- Three buttons on the right: **Configurations** (opens the stage and product set-up on the pipeline screen), **Import** (bring in leads from a CSV or Excel file, with a duplicate check on PAN and mobile) and the main blue button **Create lead**.

### 2. Tabs: My Leads, Collaborations, My Team Leads, New Leads
- **My Leads (14):** leads where you are the owner ("primary user").
- **Collaborations (3):** leads owned by a colleague where you were added as a collaborator (a colleague added to help). A blue note explains that you can comment, log activities and add follow-ups, but only the owner can change the status.
- **My Team Leads (62):** everyone under you, across Andheri, Thane, Pune and the sub-brokers. This is the branch manager's view.
- **New Leads (5):** a blue dot marks it. These are leads that came in but have no owner yet (see part 7).

### 3. Toolbar
- **Search** by name, email or mobile.
- **Filters** with a count (2), and **Reset**. Filters open in a side panel: nature (Hot / Warm / Cold), status, follow-up (overdue, today, this week…), "untouched for more than 7 or 30 days", product, value range, source, owner, branch and created dates. The panel has **Save as view** and a button that says how many leads match ("Show 14 leads").
- **Saved views:** one-click filters such as "Hot & warm · this week", "Overdue follow-ups", "Untouched > 7 days", and "High value (> ₹10 L)" shared by the owner, Rajesh Sharma.
- **Table / Kanban** switch (Kanban, cards in columns, one column per stage, is screen 06) and **Columns** to show, hide or reorder columns. Email, masked PAN and Age (days) are hidden by default.

### 4. Filter chips and sort note
Under the toolbar, the active filters show as small removable chips ("Nature: Hot, Warm", "Follow-up: This week") with **+ Add filter**. On the right: "Sorted by follow-up · overdue first".

### 5. Bulk action bar (appears when you tick rows)
In the picture two leads are ticked, so a dark bar shows "2 selected" with **Assign**, **Change status**, **Add follow-up** and **Export**. Export carries an orange **Needs approval** tag, and the bar says "Exports are logged · approver: Rajesh Sharma". This stops staff from quietly downloading the firm's prospect list.

### 6. The leads table
One row per lead. The columns:
- **Lead:** name and masked mobile (+91 98••• ••562).
- **Status:** coloured pill with a dot and text: New, Contacted, Follow-up, Hot lead, Completed, Lost.
- **Primary user:** owner's initials; a second circle means a collaborator.
- **Created at** and **Last acted on.** "Last acted on" turns **red** when nobody has touched the lead for too long (for example "9 days ago").
- **Follow-up:** red clock and "5 days overdue" when late, orange "Today 3:30 PM" when due today, a plain date when later, a grey tick when done.
- **Lead value:** expected ₹ amount. Lost leads show it struck through.
- **Nature:** Hot / Warm / Cold.
- **Interested in:** product tags (MF-SIP, Term Insurance…), with "+2" when there are more.
- **Source:** Website, QR, WhatsApp, Referral, Manual, Sub-broker or Import, with detail underneath (for example "Referral · Farhan Qureshi" or "Sub-broker · Kavya Menon").

When you point at a row, three small buttons float on the right: **Call**, **WhatsApp** and **⋯ more**. The more menu has Open lead, Edit, Log activity, Add follow-up, Move to stage…, **Convert to client** and Mark as lost…

At the bottom: rows per page, "1–14 of 14" and **Total lead value ₹1,09,95,500**.

### 7. New Leads tab: the unassigned queue
- A blue banner: **"Round robin across Andheri RMs is ON"**. Round robin means new leads are shared out one by one across RMs. It runs Mon–Fri, 9:30 AM–7 PM, so these 5 came in after hours or need review. It shows who is next (Sneha, then Rohan, then Neha) and offers **Assign all by rule** and **Edit rule**.
- Each row shows the lead, source, the **message they sent** ("Want to start NPS for tax saving…"), product, and **Waiting** time (red at 17 h, orange at 3 h 20 m).
- **Assign to…** is pre-filled with the suggested person ("Sneha Iyer · next"), with an **Assign** button next to it.
- One lead, Anjali V., is flagged **Possible duplicate**, because her mobile matches an existing client.
- Footer: "Duplicates are checked on PAN (block) and mobile (flag for review) before a lead is created."
- Four cards at the bottom count leads captured in the last 30 days by channel: Website form 38, QR code 17, WhatsApp 24, Sub-brokers 11.

## Better than Investwell
| Investwell today | Our version |
|---|---|
| Same four tabs (My / Collaborations / My Team / New Leads), search, filters, columns | Same tabs kept, so RMs feel at home |
| New Leads simply wait in a list | New Leads shows **waiting time**, the visitor's message, a **suggested owner** and one-click Assign, with round robin |
| No clear "who is slipping" signal | **Overdue follow-ups first**, red "Last acted on", and a total pipeline value |
| No saved views | **Saved views**, including views the owner shares with the team |
| Row actions are view/edit/delete | Hover actions to **Call** or **WhatsApp** directly, plus Convert to client |
| No export control | **Export needs approval** and is logged |

## How to demo it (2 minutes)
1. Open Leads. Point at the red overdue follow-ups at the top and the red "9 days ago" in Last acted on.
2. Point at the dark bar ("2 selected"). Click **Export** to show the "sent to Rajesh Sharma for approval" message.
3. Point at Karan Malhotra's row: the Call and WhatsApp buttons. Click **⋯** to show the menu (Convert to client, Mark as lost).
4. Click **Filters** to show the side panel, then close it. Click **Saved views** to show the list.
5. Click the **My Team Leads** tab: leads from Andheri, Thane, Pune and sub-brokers.
6. Click **New Leads**. Point at the waiting times and the duplicate flag. Click **Assign** on one row (the row fades and a message says a follow-up task was created), then click **Assign all by rule**.
7. Click **Kanban** to jump to the pipeline board (screen 06).

## Questions the CEO may ask
**Q: Can an RM see other RMs' leads?**
A: An RM sees their own leads and the ones they collaborate on. A branch manager such as Neha also sees "My Team Leads". The exact rules for each role belong in Settings (screen 20).

**Q: What stops two RMs from chasing the same person?**
A: Every new lead is checked on PAN (blocked if it already exists) and mobile (flagged for review). The New Leads tab shows a "Possible duplicate" warning.

**Q: Why are mobile numbers masked?**
A: To protect client data. Numbers are hidden by default and the Call / WhatsApp buttons still work.

**Q: Can staff download the lead list?**
A: Only with approval. Export sends a request to the owner and every export is logged.

**Q: Do leads from our website come in by themselves?**
A: Yes. Website, QR and WhatsApp leads arrive in New Leads and are shared out by round robin during office hours.

## Decisions needed
- **Export approval:** should every export need the owner's approval, or only exports above a certain number of rows?
- **Duplicate rule:** is "PAN blocks, mobile only flags" right, given that families often share one mobile number?
- **Round robin hours:** Mon–Fri, 9:30 AM–7 PM is a sample. Should each firm set its own hours, and should leads that arrive at night go to the branch manager?
- **Who may see full mobile numbers** (unmasked), and should each reveal be logged?

---
Prev: [Calendar](03_Calendar.md) · [All screens](00_Overview.md) · Next: [Lead detail & create lead](05_Lead_Detail_and_Create.md)
