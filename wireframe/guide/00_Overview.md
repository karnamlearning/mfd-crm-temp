# 00 · Overview: the Internal CRM wireframes in plain English

![Wireframe hub](../_shots/index-light-1440x1500.png)

> **In one line:** a clickable picture of the CRM we plan to build for MFD firms that use MF Box Back Office. It has 20 screens, in light and dark themes.
>
> **Open it:** double-click `wireframe/index.html`. It opens in any browser; nothing needs to be installed.

## What this CRM is (the 30-second version)

- **Who buys it:** MFD (mutual fund distributor) firms that already use our **MF Box Back Office**. It is a SaaS product: each firm gets its own private space.
- **Who uses it every day:** the people inside that firm. That means the **owner**, **branch managers**, **RMs** (relationship managers), **ops staff** and **sub-brokers** (independent agents who work for a share of commission). A one-person MFD can use it too.
- **Main job (the MVP):** see **what every person did today**: calls, visits, meetings, follow-ups and tasks. It then makes sure nothing slips.
- **Later ("full form"):** every interaction with every investor in one place.
- **Data we do not re-type:** clients, families, AUM, SIPs, transactions and commissions already live in MF Box. The CRM **reads** them. Staff never enter them twice.

## The benchmark

Investwell's CRM (shown in the DoItNow demo video) does the same job for Investwell's MFD clients. Our wireframes:
1. **Keep what users already know:** the same menu, the "My / Collaborations / My Team" tabs, the list-with-filters screens and the same form fields. An RM who has used Investwell feels at home on day 1.
2. **Make it calmer and faster:** a white and blue design instead of heavy red blocks. Forms open in a side panel, so you never lose your place. Ctrl+K search works from anywhere.
3. **Add what Investwell lacks:** My Day, Team Activity, Service Requests, Client 360, real Documents, Reports & MIS, plus the MF Box link everywhere.

## The 20 screens, grouped

| # | Screen | What it is, in one line |
|---|---|---|
| **Daily work** | | |
| 01 | [Home dashboard](01_Home_Dashboard.md) | Morning summary: today's schedule, tasks, opportunities, leads, birthdays, team snapshot. |
| 02 | [My Day](02_My_Day.md) | One to-do list for everything due today, cleared with one click per item. |
| 18 | [Team Activity](18_Team_Activity.md) | **The MVP core.** What each RM, sub-broker and ops person did today, hour by hour. |
| 03 | [Calendar](03_Calendar.md) | Meetings, tasks, follow-ups, birthdays and market holidays in one calendar. |
| 15 | [Team inbox (WhatsApp)](15_Team_Inbox_WhatsApp.md) | The firm's WhatsApp number shared by the team, with each chat assigned to a person. |
| **Pipeline** | | |
| 04 | [Leads list](04_Leads_List.md) | All prospects in a table, with follow-up dates and auto-assignment of new leads. |
| 05 | [Lead detail & create](05_Lead_Detail_and_Create.md) | One prospect's full story, and the form to add a new one. |
| 06 | [Leads pipeline](06_Leads_Pipeline.md) | Prospects as cards moving across stages; set up stages and products. |
| 12 | [Opportunities](12_Opportunities.md) | Chances to grow existing clients, some suggested by AI, all approved by a person. |
| **Clients & service** | | |
| 07 | [Clients list](07_Clients_List.md) | Every client with AUM, SIPs, tier, last contact and health, read from MF Box. |
| 08 | [Client 360](08_Client_360.md) | Everything about one client and family on one page. |
| 16 | [Service requests](16_Service_Requests.md) | Client requests (nomination, mandate, KYC…) with a promised finish time. |
| 17 | [Documents](17_Documents.md) | All files, linked to clients, with expiry alerts and safe sharing. |
| **Tasks & meetings** | | |
| 09 | [Tasks list](09_Tasks_List.md) | All tasks for you and your team, overdue first. |
| 10 | [Create task](10_Create_Task.md) | The new-task form, with a "describe it in plain English" shortcut. |
| 11 | [Task detail](11_Task_Detail.md) | One task: checklist, comments, history and linked client. |
| 13 | [Meetings](13_Meetings.md) | Upcoming and past meetings, and the form to schedule one. |
| 14 | [Meeting detail](14_Meeting_Detail.md) | Log the meeting outcome; AI drafts the summary and follow-up tasks. |
| **Management** | | |
| 19 | [Reports & MIS](19_Reports_and_MIS.md) | Charts for the owner: activity, pipeline, coverage, SIP book, commissions. |
| 20 | [Settings](20_Settings.md) | Team and hierarchy, permissions, configurations, automations, MF Box link. |
| — | [Design system](21_Design_System.md) | Why it looks the way it does: colours, dark theme, status colours. |
| — | [Glossary](22_Glossary.md) | Simple meanings of every term used in these guides. |

## Suggested 10-minute CEO walkthrough

1. **Hub page (30 s):** "20 screens, one design, light and dark." Click the moon icon to show dark mode.
2. **Team Activity (2 min):** "This is the main purpose of the CRM, as you told us on 13 Nov." Show the hourly strip, the idle and no-activity alerts, and the Log activity panel.
3. **My Day (1.5 min):** the RM's view. Tick an item off, then type "Call Rahul kal 4pm" in the quick-add box.
4. **Home dashboard (1 min):** "Same layout as Investwell, but calmer."
5. **Client 360 (1.5 min):** "All client data comes from MF Box; nobody re-types it."
6. **Opportunities (1 min):** "AI suggests; a person always approves."
7. **Service requests (1 min):** "Investwell has nothing like this."
8. **Reports & MIS and Settings (1.5 min):** the owner's view, and how branches and sub-brokers are set up.

## Things to say up front

- **All names and numbers are made up.** The sample firm is "Sharma Wealth Partners". No real client data from the videos is used.
- **It is a clickable mock-up, not the product.** Buttons, tabs and side panels work, but nothing is saved.
- **Some features are ideas that need a yes or no:** AI features, WhatsApp Business costs, how often MF Box syncs, and sub-broker logins. Each screen guide lists its "Decisions needed".

## Decisions the wireframes raise (summary)

1. **MF Box link:** will MF Box share clients, families, AUM, SIPs, users and commissions with the CRM (an API or a shared database), and how often?
2. **Sub-brokers:** do they get their own login, and what is hidden from them?
3. **AI features:** which ones go into the first release (opportunity suggestions, meeting summaries, draft replies), and the monthly cost per RM.
4. **WhatsApp:** shared team inbox in the first release or later; who pays Meta's message charges.
5. **First release scope:** the wireframes show the full vision. Team Activity, My Day, Tasks, Leads, Clients and Meetings are the natural MVP.
