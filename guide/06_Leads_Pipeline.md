# 06 · Leads pipeline & configuration

![Leads pipeline & configuration](../_shots/06-leads-pipeline-light.png)

> **In one line:** Leads as cards moving across stage columns, plus one panel to set up stages, products, sources and auto-assignment.
>
> **Who uses it:** RM and sub-broker (the board); branch manager and owner (the board and the set-up) · **Open it:** sidebar → Leads → **Kanban** · **Wireframe file:** `06-leads-pipeline.html`

## Why this screen matters
A table tells you *who* to call. A board tells you *where the money is stuck*. Here every lead is a card in a stage column with its ₹ value, so a manager sees at a glance that ₹80 L is waiting in Hot lead. The Configurations panel lets each firm use its own stage names and products and decide how new leads are shared out, without calling us.

## What you see, part by part

### 1. Header, tabs and toolbar
- Title **Leads** with the hint "Drag a card or use ⋯ Move to…". Buttons: **Configurations** and **Create lead**.
- The same four tabs as the list: My Leads (14), Collaborations (3), My Team Leads (62), New Leads (5).
- Search by name, mobile or product; **Filters** with an active chip "Follow-up: Next 30 days"; **Reset**; a **Show Completed & Lost** tick box; a saved-views star; and the **Table / Kanban** switch (Table goes back to screen 04).

### 2. Pipeline summary strip
Five boxes across the top:
- **Total open value ₹1.33 Cr** (₹1.10 Cr on this board; the rest is the 3 collaborations).
- **Open leads 16** (13 mine · 3 collaborations). The My Leads tab says 14 because it also counts 1 completed lead, which the board hides unless you tick Show Completed & Lost.
- **Conversion this month 18%**, up 4 points vs October, 4 of 22 won.
- **Avg. days to convert 12 days**, 3 days faster than October.
- **Value by stage:** a coloured bar with New ₹16.9 L, Contacted ₹2.8 L, Follow-up ₹9.8 L, Hot lead ₹80 L.

### 3. The board (Kanban: cards in columns, one column per stage)
Four columns: **New (3)**, **Contacted (3)**, **Follow-up (4)** and **Hot lead (3)**: the 13 open leads from My Leads on the list (screen 04), with the same product, value, nature, stage and follow-up date. Each column header shows the count, a red clock badge for overdue follow-ups (for example "4" in Follow-up) and the **total value** of the column. Each column ends with **+ Add lead**.

Each card shows:
- Name and a **Hot / Warm / Cold** tag.
- ₹ value and product tags (MF-Lumpsum, NPS…).
- Follow-up: red date when overdue, orange "Today", or "Tomorrow" / a date.
- A small **source icon** (globe = website, QR, WhatsApp, people = referral, briefcase = sub-broker). AI-suggested leads get a purple sparkle icon.
- **Days since last action** ("today", "1d", "6d"); 5 days or more turns red.
- The owner's initials (all NK here, because this is Neha's My Leads tab).

The **⋯** on each card opens **Move to…**: the other stages, Completed (won), Lost…, Open lead and Log activity. This does the same as dragging, for people who do not use a mouse or are on a phone.

### 4. Drop zones: Completed and Lost
Below the board, a green box "**Drop here: Completed (won)** · 4 this month · ₹9.2 L" and a red box "**Drop here: Lost** · 3 this month · reason asked". Drop a card there to close the lead. A message with **Undo** appears, so a wrong drop is easy to fix.

### 5. Configurations panel: Status stages
Opens from the right; the subtitle says it "applies to everyone at Sharma Wealth Partners".
- **New stage** (fixed): every new lead starts here (3 open leads).
- **Initial stage:** "After the first call, visit or WhatsApp, move the lead to **Contacted**". This saves a manual step; staff can still change it.
- **Additional stages:** Contacted, Follow-up, Hot lead. Each has a colour, a count of open leads, rename and delete, and a drag handle to reorder. Add a new stage with a name and colour (example: "Documents pending").
- **Final stages** (fixed): **Completed** ("Counts as a conversion · offers Create client in MF Box") and **Lost**, with a switch to ask for a reason and editable reasons: Not interested now, Went with another advisor, Not reachable, Budget / timing.
- Footer: "Last changed by Rajesh Sharma · 02 Nov 2026", **Cancel**, **Save changes**.

### 6. Configurations panel: Products
Eight products in a list: Health Insurance, ITR e-filing, MF-SIP, MF-Lumpsum, Term Insurance, NPS, Fixed Deposit and PMS. For each: a **category** (Insurance, Tax services, Mutual funds, Retirement, Fixed income, Portfolio mgmt), **how the ₹ value is counted** (annual premium, fee, monthly SIP × 12, investment amount, annual contribution, deposit amount; SIP = a fixed monthly investment), the number of open leads, an on/off switch, edit and delete. A note: turning a product off hides it from new leads; old leads keep their tag.

### 7. Configurations panel: Lead sources
Seven sources, each with this month's count and an on/off switch: **Website form** (with "copy embed code", the snippet that puts the form on the firm's website), **QR code** (with "download QR"), **WhatsApp** (click-to-chat on the firm's WhatsApp Business number +91 22•• ••4410; the first message creates a lead), **Referral** (the referring client is credited), **Manual entry** (always on), **AI generated** (purple; "suggested from MF Box signals, e.g. FD maturity; a human approves first") and **Walk-in** (switched off). You can add your own, e.g. "Seminar · Diwali 2026".

### 8. Configurations panel: Auto-assignment
- Master switch **Auto-assign new leads**: website, QR and WhatsApp leads get an owner within seconds.
- **Rules run in order, first match wins:** 1 By product → 2 By branch → 3 Round robin → otherwise Neha Kapoor (Branch Manager).
- **By product:** Health / Term Insurance → Sneha Iyer; ITR e-filing → Priya Nair (Ops); MF-Lumpsum of ₹10,00,000 or more → Neha Kapoor; NPS → Kavya Menon (sub-broker), switched off.
- **By branch:** match the lead's city or PIN code: Mumbai → Andheri (round robin), Thane → Aman Gupta, Pune → Vikram Rao.
- **Round robin** (share leads one by one): Neha, Rohan, Sneha, next up **Sneha Iyer**. Options: skip people on leave; cap at 15 open leads per person.
- **After assignment:** notify the owner on WhatsApp and in the app; **re-assign if not contacted within 24 hours**, and tell the branch manager.

## Better than Investwell
| Investwell today | Our version |
|---|---|
| The demo video shows leads only as a table (Kanban appears only for Opportunities) | A **leads Kanban** with ₹ totals per column, overdue badges and a summary strip |
| Configurations → Status: New, Initial, Additional (drag, colour, add, edit, delete), Final (Completed, Lost) | Same structure kept, plus open-lead counts, **lost reasons**, and an automatic "move to Contacted after the first call" |
| Configurations → Products: add, edit, delete | Adds **category**, **how value is counted** and an on/off switch |
| Website form and QR set up in Settings | A **Lead sources** list with monthly counts and on/off switches, including AI-generated leads |
| No auto-assignment seen in the demo | **Rules by product, branch and round robin**, a leave skip, a cap per person and re-assignment after 24 h |
| Drag only | Drag **or** "Move to…" menu, with **Undo** |

## How to demo it (2 minutes)
1. From Leads, click **Kanban**. Read the summary strip: ₹1.33 Cr open, 18% conversion.
2. Drag a card (e.g. Ritu Saxena) from Follow-up to Hot lead. The column totals update and a message offers **Undo**.
3. Click **⋯** on another card and choose **Completed (won)**: the card leaves the board.
4. Type a name in the search box to filter the cards.
5. Click **Configurations**. On **Status stages**, type a name such as "Documents pending", pick a colour and click **Add stage**.
6. Click the **Products**, **Lead sources** and **Auto-assignment** tabs. On Auto-assignment, switch off **By branch** to show it greys out.
7. Click **Cancel** to close.

## Questions the CEO may ask
**Q: Can each MFD firm use its own stage names?**
A: Yes. Only "New", "Completed" and "Lost" are fixed. Firms can add, rename, colour and reorder the stages in between.

**Q: Who can change these settings?**
A: The panel says the changes apply to everyone in the firm, and it shows who changed them last (Rajesh Sharma, the owner). Which roles may edit is still to be decided.

**Q: What if an RM ignores a lead given to them?**
A: If nobody contacts the lead within 24 hours, it is re-assigned and the branch manager is told.

**Q: Why is an SIP lead's value so much bigger than the monthly SIP?**
A: For MF-SIP, the value is counted as monthly SIP × 12 (a ₹10,000 SIP counts as ₹1,20,000), so leads of different products can be compared. Each firm can change this rule per product.

**Q: Can sub-brokers receive leads automatically?**
A: Yes. A product rule can send leads to a sub-broker (NPS → Kavya Menon in the sample, currently switched off).

## Decisions needed
- **Who may edit Configurations:** owner only, or branch managers too? Should a branch have its own rules?
- **Re-assignment timer:** is 24 hours right, and should it count business hours only?
- **WhatsApp alerts to staff** when a lead is assigned: what each message costs, and whether staff may get them on personal WhatsApp.
- **AI-generated leads** as a lead source is a mock-up idea. We need to decide which MF Box signals may create them, and confirm that a person always approves first.

---
Prev: [Lead detail & create lead](05_Lead_Detail_and_Create.md) · [All screens](00_Overview.md) · Next: [Clients list](07_Clients_List.md)
