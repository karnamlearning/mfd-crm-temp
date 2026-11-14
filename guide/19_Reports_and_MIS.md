# 19 · Reports & MIS

![Reports & MIS](../_shots/19-reports-light.png)

> **In one line:** One page that shows the owner how the team is working and how the MF Box book is growing.
>
> **Who uses it:** owner, branch manager (RMs see their own numbers) · **Open it:** sidebar → Reports & MIS · **Wireframe file:** `19-reports.html`

## Why this screen matters
An MFD owner today checks activity in one place, the SIP book in the back office and commission in another sheet. This page puts them together: is the team calling and meeting clients, are tasks closed on time, are top clients being covered, and is the book growing. Money figures (AUM, SIP, commission) are **read from MF Box MIS** (the back office's reports), so nobody types them again and they match the back office.

## What you see, part by part

### 1. Header and actions
- Title and sub-line: "Team activity, pipeline and the MF Box book for Sharma Wealth Partners".
- **Export:** PDF snapshot, Excel (PAN and mobile masked), or copy a link. Every export **needs approval from the owner (Rajesh Sharma)** and is watermarked with your name and the time, so client data does not leak.
- **Schedule "Monday owner pack":** sets up a weekly summary (see part 10).

### 2. Report library (left)
- Activity reports: Overview, Team activity, Task SLA & ageing, Lead funnel, Opportunity pipeline, Client coverage.
- Book reports marked **MF Box**: SIP book, Commissions. Plus Sub-broker activity.
- **Saved reports** (3): "Andheri stand-up", "SIP stoppages > ₹5,000", "Overdue A-tier reviews".
- A note: "Teams are compared on service and activity. No MF sales contests (AMFI rule)." AMFI (the mutual fund industry body) does not allow sales contests, so the page compares service, not sales.

### 3. Filter bar
One row controls every chart: date range (Last 30 days, 16 Oct – 14 Nov 2026), branch (All, Andheri, Thane, Pune), and a **Compare to previous period** switch. A green tag shows "Synced from MF Box · 10:42".

### 4. Six KPI tiles
KPI means a key number to watch. Each tile shows the change from last period and a small trend line.
- **Activities 2,184:** calls, meetings, WhatsApp chats and tasks logged by the team; up 8%.
- **Task on-time 87%:** share of tasks closed by their due date (1,126 of 1,294).
- **Coverage compliance 74%:** share of clients contacted as often as their plan says; target 85%, 334 clients still due.
- **Net SIP book +₹3.2 L/month (MF Box):** new monthly SIP money (₹5.9 L) minus SIPs stopped (₹2.7 L).
- **Lead conversion 18%:** 41 of 228 new leads became clients.
- **Trail commission ₹14.6 L (MF Box):** this month's trail (the ongoing commission fund houses pay on invested money), after GST.

### 5. Activity trend (chart)
Weekly bars for the last five weeks, split into calls, meetings, WhatsApp and tasks done, with a line for the previous period. The headline reads it for you: "Calls fell 12% in week 45 (204 → 180) while WhatsApp rose 8%." A button switches the chart to a table.

### 6. Lead funnel (chart)
How many leads reach each stage: New 228 → Contacted 176 → Follow-up 112 → Hot 64 → Won 41. It flags the **biggest drop: Contacted → Follow-up, 64 leads lost**. Below: overall conversion 18%, first response 2.4 hours, 23 days to convert.

### 7. Task ageing (chart)
Open tasks grouped by age: 0–3 days (86), 4–7 days (41), 8–14 days (23, "at risk") and 15+ days (12, "SLA breached", SLA being the promised time to finish). It says 7 of the 12 old tasks sit with Rohan Mehta and lists the three oldest by name.

### 8. Coverage by tier (chart)
Clients are grouped into tiers by MF Box AUM and SIP size. Each bar shows how many were contacted against the target:
- **A (96 clients, monthly touch):** 82% vs 95%, 13 points below; 17 A-tier reviews overdue.
- **B (312, quarterly):** 76% vs 85%, 9 points below.
- **C (876, half-yearly):** 72% vs 70%, on plan.

### 9. AUM & commission by branch (MF Box) and Sub-broker activity
- **By branch:** three side-by-side bars per branch for AUM, net trail this month, and net SIP book change. Andheri ₹218 Cr (8 people · 712 clients), Thane ₹74 Cr (2 people · 231 clients), Pune ₹120 Cr (4 people · 341 clients); firm total ₹412 Cr, ₹14.6 L trail, +₹3.2 L SIP. Headline: "Andheri earns 53% of trail on 53% of AUM; Pune trail is up 9% on October." Footer: "From the MF Box Back Office MIS", plus a note that branch managers see firm totals and this branch comparison, while per-person detail is for their own branch.
- **Sub-broker activity · Andheri:** per-person detail is shown for Neha's own branch only, so the table lists Andheri's three sub-brokers (independent agents paid a share of commission): Imran Sheikh, Kavya Menon and Ravi Pillai. For each: activities, change, calls · visits · WhatsApp, clients, new SIPs, last activity, and commission share in ₹ and %. It flags **Ravi Pillai: 41% fewer activities, nothing since 10 Nov**. Imran Sheikh is marked **ARN lapsed**, and the footer says: "ARN lapsed: restricted from new MF transactions, can still log activity". It is sorted by name, not ranked.

### 10. Schedule "Monday owner pack" (drawer)
A weekly summary sent every Monday at 8:00 AM to the owner and branch managers by email (watermarked PDF), WhatsApp and in-app. You tick the sections: AUM and SIP book, SIPs stopped or bounced, coverage by branch, pipeline, lead funnel, team overdue tasks ("prompts for 1:1s, not a public ranking"), and trail commission by branch (owner only, off by default). It notes that **sub-brokers can never receive this pack** and that the WhatsApp summary carries no client names or PAN. There is a "Send test to me" button.

## Better than Investwell
| Investwell today | Our version |
|---|---|
| The CRM demo shows no reports screen; numbers sit in the back office | One Reports & MIS page in the CRM, joining team activity with the MF Box book |
| Activity and money are in different places | Activity, tasks, coverage, leads **and** AUM, SIP book, trail commission side by side |
| Charts need to be read and interpreted | Every chart has a **one-line headline** that says what matters |
| No coverage-by-tier tracking | Coverage plan per tier with targets and overdue A-tier reviews |
| No sub-broker view | Sub-broker activity with commission share, sorted by name (no sales contests) |
| Exports are open | Exports need owner approval, are watermarked and mask PAN and mobile; weekly owner pack is automatic |

## How to demo it (2 minutes)
1. Open **Reports & MIS**. Point at the six tiles and the two tagged **MF Box**.
2. Change the **date range** or **branch**: a message confirms all charts follow the filter. Turn **Compare to previous period** off and on.
3. Hover over a bar in **Activity trend** to show the detail box; click the list button to switch it to a table.
4. Point at the funnel's red **Contacted → Follow-up** drop and the **15+ days** task bar.
5. Show **Coverage by tier**: A-tier is 13 points below plan.
6. Scroll to **AUM & commission by branch** and the **Sub-broker activity · Andheri** table (Ravi Pillai in red, Imran Sheikh marked ARN lapsed).
7. Click **Export** to show the approval note, then **Schedule "Monday owner pack"** and **Save schedule**.

## Questions the CEO may ask
**Q: Where do AUM, SIP and commission numbers come from?**
A: From MF Box MIS, the same back office the firm already uses. The page shows the last sync time (10:42). The CRM does not calculate commission itself.

**Q: Why not rank RMs and sub-brokers by sales?**
A: AMFI does not allow MF sales contests. The page compares service and activity and sorts sub-brokers by name.

**Q: Can anyone download client data?**
A: Not freely. Exports need the owner's approval, are watermarked, and mask PAN and mobile.

**Q: What does "coverage compliance" mean?**
A: Each client tier has a contact plan (A monthly, B quarterly, C half-yearly). It is the share of clients actually contacted on time.

**Q: Does the owner have to open the CRM to see this?**
A: No. The Monday owner pack arrives on email and WhatsApp before the week starts.

## Decisions needed
- **Who sees money:** the sample rule is that a branch manager sees firm totals and the branch comparison, with per-person detail (such as sub-broker commission share) for their own branch only. Settings → Roles shows the same rule. Is that right, or should trail by branch be for the owner only?
- **Tier rules and targets:** the AUM / SIP cut-offs for A, B, C and the coverage targets (95 / 85 / 70%), set by us or by each firm.
- **Export approval:** always owner approval, or can the owner allow some roles to export freely?
- **MF Box MIS link:** how often the sync runs and which MIS reports (SIP book, trail) we read in MVP.

---
Prev: [Team Activity (MVP core)](18_Team_Activity.md) · [All screens](00_Overview.md) · Next: [Settings](20_Settings.md)
