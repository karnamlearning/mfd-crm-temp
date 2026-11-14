# 16 · Service requests

![Service requests](../_shots/16-service-requests-light.png)

> **In one line:** Every client request or complaint, each with a promised finish time that the system counts down.
>
> **Who uses it:** ops staff, service desk, RM, branch manager, owner · **Open it:** sidebar → Service Requests · **Wireframe file:** `16-service-requests.html`

## Why this screen matters
Clients ask for many small changes: new bank mandate, nominee, address, KYC correction, stopping a SIP, a redemption that did not arrive. Today these live in WhatsApp chats and memory, and the client chases the firm. This screen gives each request a reference number, an owner and an **SLA** (the promised time to finish it). Managers see what is about to be late before the client complains. **Investwell has no such module**; at best a request becomes an ordinary task.

## What you see, part by part

### 1. Title and buttons
Subtitle: "Client requests and complaints with SLA clocks that pause while you wait on the RTA, bank or client", plus "Synced from MF Box · 10:42". Buttons: **SLA policies** (set in Settings › Automations) and **New request**.

### 2. Six summary tiles (click one to filter the list)
**Open 23** (across 3 branches) · **Breaching in < 24 h: 4** (next: SR-0144 in 9 h) · **Breached 2** (escalated to you) · **Waiting on RTA/client 6** (SLA clock paused) · **Resolved this week 31** (94% within SLA) · **Median resolution 2.4 days** (0.4 days faster than last week).

### 3. Queues
**My queue (3) · Team queue (23) · Unassigned (triage) (3) · Resolved (31).** On the right: "Triage duty today: Arjun Desai".
- **Triage** means sorting new requests and handing each one to the right person. New requests wait in the **Unassigned** queue. One person is on triage duty each day. The AI suggests the request type, and that person approves it and assigns it.

### 4. Search and filters
Search by reference number, client or PAN. **Type** lists each request type with its SLA (BD = business days, WD = working days, CD = calendar days). **Channel** shows how the request came in: WhatsApp, Email, Walk-in, Phone. There are also Saved views and Columns. A note says "Sorted by SLA, most urgent first".

### 5. The request table
Columns: **Ref** (e.g. SR-2026-0147), **Type** (complaints have a warning icon), **Client** and family, **Channel** icon, **Assignee**, **SLA**, **Status**, **Age** (days; 7 or more is highlighted), **Last update**.
- The **SLA** column is the heart of it. Each request type has its own promised time, e.g. bank mandate change = 5 business days, address change = 2 business days, complaint = 21 calendar days. Redemption and SIP cancellation are marked "(SEBI)" because the market regulator sets those limits.
- How it looks: red "Breached 6 h" (deadline missed) · amber "9 h left" with a bar · blue "2 days left" · grey "Paused: waiting on CAMS · 1 d 6 h left when resumed".
- Statuses: Breached, Breaching, In progress, Open, Waiting on RTA, Waiting on bank, Waiting on client.
- In the **Unassigned (triage)** queue, each row shows the AI's guess ("AI: 96% confident") and an **Assign** button. The SLA "starts on assignment".
- The Verma family's requests match the Service requests tab on Client 360: **SR-2026-0149** Address change for Rahul (new, in triage, from email), **SR-2026-0140** Nomination update for Anjali ("Waiting on client", clock paused; she agreed in today's meeting to sign the form this week) and **SR-2026-0128** Address change for Anjali (resolved).

### 6. Request detail panel (opens on the right)
The sample is **SR-2026-0142, Bank mandate change – Pooja Bansal**, which came in on WhatsApp.
- **SLA clock card:** "2 days left of 5 business days, due Tue 17 Nov, 6:00 PM · 3 of 5 days used · 0 h paused", with a progress bar and a mark at 75%.
- **Pause clock:** often the delay is not the firm's fault. The RTA (the registrar that keeps fund records, such as CAMS or KFin), the bank, the exchange or the client has to act first. Staff press **Pause clock** and pick a reason: Waiting on RTA (CAMS), bank (NPCI), client, or exchange (BSE). The deadline moves out while paused, so the team is not blamed for someone else's delay, and the reason stays on record.
- **Escalation ladder** (automatic alerts that go up the chain when a deadline is at risk): (1) at 75% of the time used, a reminder to Priya Nair, who is handling it, on WhatsApp and in the app; (2) at breach, escalate to Neha Kapoor, Branch Manager; (3) one business day after breach, notify Rajesh Sharma, the principal.
- **Dependent banner:** a SIP top-up (₹5,000 → ₹8,000 a month) stays on hold until the new mandate is registered.
- **Checklist (2/4):** collect cancelled cheque (bank verified by a ₹1 test credit), signed mandate form, submit to BSE StAR MF (the exchange platform), confirm registration.
- **Request details from MF Box:** old and new bank, mandate limit, platform and client code, "2 SIPs · ₹5,000/month affected" (today's amount; ₹8,000 is the planned figure once the new mandate is live).
- **Child tasks (3)** with owners and due dates, and **Documents (2)** marked Verified or To check.
- **Client-visible note:** the exact WhatsApp text the client sees ("…expect it to be active by 17 Nov"), with a **Send update** button. Internal notes are kept separate and are "not visible to the client".
- **Comments & activities:** the full history, from the client's WhatsApp message, through "Classified as Bank mandate change (94% confident)… AI · approved by Arjun", to the 50% SLA alert and the latest comment.
- Footer: **Reassign**, **Change status**, "2 checklist items left" and **Mark resolved**. It will not resolve until the checklist is done.

### 7. New request panel
Client, request type (it shows "SLA 5 business days · 4-step checklist"), channel, assignee ("Auto (triage rota)" by default), priority and description. A tick box sends the client a reference number on the same channel.

## Better than Investwell
| Investwell today | Our version |
|---|---|
| **No service-request module** | A dedicated queue with reference numbers and owners |
| Requests tracked, if at all, as ordinary tasks with a due date | Each type has its own SLA, checklist and SEBI timelines |
| No way to show delays caused by the RTA, bank or client | **Pause clock** with a recorded reason; the due date moves out |
| No automatic escalation | 75% reminder → branch manager at breach → principal a day later |
| Client chases for status | Client-visible updates on WhatsApp with the reference number |
| No intake sorting | Triage queue, daily duty person, AI suggests the type and a person approves |

## How to demo it (2 minutes)
1. Open **Service Requests**. The detail panel for Pooja Bansal opens on the right. Point at the SLA card and the escalation ladder.
2. Click **Pause clock**. The status changes to "Waiting on RTA (CAMS)" and the text says the due date moves out. Click **Resume clock**.
3. Click **Mark resolved**. A message says to finish the checklist first. Tick the two open checklist items, then click **Mark resolved** again. It closes and says "client notified on WhatsApp".
4. On the list, click the **Breached** tile. The table shows only the 2 breached requests. Click it again to clear.
5. Click the **Unassigned (triage)** tab. Point at "AI: 91% confident" and click **Assign**: "assigned to Arjun Desai · SLA clock started".
6. Click **New request** to show the form, then Cancel.
(In the wireframe, clicking other rows changes the panel's title, but the body always shows the Pooja Bansal sample.)

## Questions the CEO may ask
**Q: Can't staff just pause the clock to hide delays?**
A: Every pause needs a reason from a fixed list, and it is shown on the request and in the history. The "Waiting on RTA/client" tile shows managers how many are paused.

**Q: Where do the SLA numbers come from?**
A: Each request type has a default, set under SLA policies. Redemption, SIP cancellation and complaints follow regulator timelines. The numbers should be checked by compliance before launch.

**Q: Does the CRM submit the mandate to BSE or the RTA?**
A: No. It shows a checklist and a link to open BSE StAR MF. The actual submission is done on that platform, and the CRM tracks it.

**Q: Does the AI assign work on its own?**
A: It suggests the type and confidence. The triage person approves ("AI · approved by Arjun").

## Decisions needed
- **Default SLAs and escalation chain:** confirm the times for each type with compliance, and decide if each firm can change them.
- **Client updates on WhatsApp:** reference numbers and status messages need approved WhatsApp templates; who pays the per-message cost?
- **AI classification** of WhatsApp messages, emails and voicemails: provider, cost and whether it is in the base plan.
- **Is this module in the MVP?** The MVP centre is activity tracking. Service requests could come in a later phase.

---
Prev: [Team inbox (WhatsApp)](15_Team_Inbox_WhatsApp.md) · [All screens](00_Overview.md) · Next: [Documents](17_Documents.md)
