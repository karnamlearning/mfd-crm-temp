# Brief for screen-guide writers

You write **plain-English explainers** of wireframe screens for the AdvisorKhoj Internal CRM. The reader is **Aditya**, who will use your file to explain the screen to the **CEO** and senior stakeholders. The CEO is a business person who knows mutual-fund distribution well, but does **not** want technical detail.

## Background (read once)
- Wireframes: `D:\AdvisorKhoj CRM Research\INTERNAL_CRM\07_Wireframes\wireframe\` (one HTML file per screen; screenshots in `_shots\`).
- Context: `07_Wireframes\wireframe\DESIGN.md` §0 and §8 (product context and the fictional sample cast).
- The CRM is a **SaaS product for MFD firms that already use AdvisorKhoj's MF Box Back Office**. Its MVP centre is **tracking the daily activity of RMs, branches and sub-brokers**. Client, AUM, SIP and commission data are **read from MF Box**, not typed in again.
- **Investwell CRM** (shown in the DoItNow demo video) is the competitor and benchmark. Our screens keep its familiar layout but are cleaner and add more.
- All names and numbers on the screens are **fictional sample data** (tenant "Sharma Wealth Partners", logged-in user Neha Kapoor, Branch Manager, Andheri).

## How to research each screen
1. Read the screen's HTML file fully, so you describe what is **actually on the screen**. Never invent features that are not there.
2. Look at its screenshots in `_shots\` with the Read tool (`<file>-light.png`, `<file>-dark.png`, plus any drawer/tab variants listed by `ls _shots | grep <prefix>`).
3. For the "Investwell vs ours" part, use `INTERNAL_CRM\01_Video_Analysis\01_Internal_CRM_Demo_Walkthrough.md` (what Investwell has) and what you saw in the HTML.

## Writing rules
- **Simple words, short sentences.** Aim for something a busy CEO can read in 3–4 minutes.
- **Explain every jargon word the first time** in brackets, e.g. "SLA (the promised time to finish a request)", "Kanban (cards in columns, one column per stage)", "AUM (total money a client has invested through us)".
- No CSS, HTML, JavaScript, file or class names in the body text (the screenshot path and file name in the header are fine).
- Use **"you"** for the user of the screen, and name roles (RM, branch manager, owner, ops, sub-broker).
- Use British/Indian English spelling (colour, organisation). Use ₹ and Indian number style as on the screens.
- Be honest: if something is a mock-up idea that needs a decision (e.g. AI, WhatsApp cost), say so under "Decisions needed".

## File format (follow exactly)

File name: `guide/NN_Screen_Name.md` (e.g. `guide/01_Home_Dashboard.md`).

```markdown
# NN · <Screen name>

![<Screen name>](../_shots/<file>-light.png)

> **In one line:** <what this screen is, in ≤ 20 words>
>
> **Who uses it:** <roles> · **Open it:** sidebar → <menu item> · **Wireframe file:** `<file>.html`

## Why this screen matters
<2–4 short sentences: the business problem it solves for an MFD firm.>

## What you see, part by part
<Walk top to bottom / left to right. One `###` heading per part, matching the visible section names. For each part: 1–3 sentences on what it shows and why it is useful. Use small bullet lists where it helps. Typically 5–10 parts.>

### 1. <Part name>
...

## Better than Investwell
| Investwell today | Our version |
|---|---|
| ... | ... |
<3–6 rows. If Investwell has no such screen, say so in the first row.>

## How to demo it (2 minutes)
1. <click-by-click steps that work in the wireframe>
2. ...

## Questions the CEO may ask
**Q: ...**
A: ...
<3–5 Q&As, short answers.>

## Decisions needed
- <open business decisions this screen raises; 1–4 bullets. Write "None for now" if none.>

---
Prev: [<NN-1 name>](<file>.md) · [All screens](00_Overview.md) · Next: [<NN+1 name>](<file>.md)
```

Screen list and guide file names (for the Prev/Next links):

| NN | Guide file | Screen | Wireframe |
|---|---|---|---|
| 01 | 01_Home_Dashboard.md | Home dashboard | 01-dashboard.html |
| 02 | 02_My_Day.md | My Day | 02-my-day.html |
| 03 | 03_Calendar.md | Calendar | 03-calendar.html |
| 04 | 04_Leads_List.md | Leads list | 04-leads-list.html |
| 05 | 05_Lead_Detail_and_Create.md | Lead detail & create lead | 05-lead-create.html |
| 06 | 06_Leads_Pipeline.md | Leads pipeline & configuration | 06-leads-pipeline.html |
| 07 | 07_Clients_List.md | Clients list | 07-clients-list.html |
| 08 | 08_Client_360.md | Client 360 | 08-client-360.html |
| 09 | 09_Tasks_List.md | Tasks list | 09-tasks-list.html |
| 10 | 10_Create_Task.md | Create task | 10-task-create.html |
| 11 | 11_Task_Detail.md | Task detail | 11-task-detail.html |
| 12 | 12_Opportunities.md | Opportunities | 12-opportunities.html |
| 13 | 13_Meetings.md | Meetings | 13-meetings.html |
| 14 | 14_Meeting_Detail.md | Meeting detail & outcome | 14-meeting-detail.html |
| 15 | 15_Team_Inbox_WhatsApp.md | Team inbox (WhatsApp) | 15-inbox-whatsapp.html |
| 16 | 16_Service_Requests.md | Service requests | 16-service-requests.html |
| 17 | 17_Documents.md | Documents | 17-documents.html |
| 18 | 18_Team_Activity.md | Team Activity (MVP core) | 18-team-activity.html |
| 19 | 19_Reports_and_MIS.md | Reports & MIS | 19-reports.html |
| 20 | 20_Settings.md | Settings | 20-settings.html |

For 01 the Prev link goes to `00_Overview.md`; for 20 the Next link goes to `21_Commissions.md`, and 22 goes on to `23_Design_System.md`.

When done, reply with ≤ 60 words: the files you wrote and anything on the screens that looked inconsistent.
