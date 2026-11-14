# 15 · Team inbox (WhatsApp)

![Team inbox (WhatsApp)](../_shots/15-inbox-whatsapp-light.png)

> **In one line:** One shared WhatsApp number for the whole firm, where every client chat is assigned, answered and tracked.
>
> **Who uses it:** RM, ops, service staff, branch manager · **Open it:** sidebar → Inbox · **Wireframe file:** `15-inbox-whatsapp.html`

## Why this screen matters
Today most RMs chat with clients on their personal WhatsApp. When an RM leaves, the chats and the client relationship go with them, and the manager cannot see who replied late. This screen puts all chats on one firm number. Every chat has an owner, a response timer and a full history, and the client's MF Box details sit next to it.

## What you see, part by part

### 1. Top strip: module tabs and connection
- Tabs: **Dashboard, Inbox, Templates, Campaigns, Contacts** (same set as Investwell). This page shows Inbox.
- A switch between **WhatsApp** and **Email** (3 unread emails) so both channels live in one place.
- Green dot: **"Connected: +91 22•• ••4410 (WhatsApp Business API)"**. WhatsApp Business API is the official paid WhatsApp channel for businesses, which allows one number to be used by many staff. A gear icon opens the WhatsApp settings.

### 2. Conversation list (left)
- Filters: **Mine (4), Collab, Team, Unassigned (2), All**. "Collab" means chats where you are added as a helper. "Unassigned" is highlighted so no new chat is ignored.
- Search by name, mobile or message, a filter button, and "Open · 11, Newest first".
- Each row shows the person, a label (Client, Lead, Hot lead, Lead · Website), the last message, time, unread count, and the small avatar of the owner (or a dashed icon if nobody owns it yet).
- A **red dot with a timer** (for example "2h 28m") means the client has waited longer than the **SLA** (the promised first reply time, here 2 hours). The footer explains: "Red dot = waiting over 2 h (SLA)".
- A grey **Closed** lock tag on a chat means its 24-hour window has shut (see part 4).

### 3. Chat header and assignment
- Client name with **Client** and **Tier A** tags, masked mobile and family ("Family head: Verma Family").
- Buttons: Call (which also logs a call activity), **Resolve** (closes the chat) and a more menu (snooze, mark unread, block, export chat).
- **Assigned to: Neha Kapoor**. The dropdown lists teammates with how many open chats each has ("Rohan Mehta · 3 open", "Sneha Iyer · 5 open", "Priya Nair · Ops · 2 open"), so you hand a chat to someone who is not overloaded. You can also add a collaborator or unassign.

### 4. The 24-hour window
WhatsApp's rule: after a client last messages you, you have **24 hours** to reply freely. After that you may only send a **template** (a message pre-approved by Meta, WhatsApp's owner).
- A green pill shows **"24-hour window: 22 h left"** (Rahul last wrote at 12:02 today).
- The thread shows when it opened: "Rahul replied · 24-hour service window opened".
- Above the reply box: "Free-form reply allowed". Below it: "Templates only after Sun 15 Nov, 12:02".
So staff always know whether they can type freely or must pick a template.

### 5. The conversation
Reading top to bottom, the sample tells a full story:
- Friday 6:00 PM: Neha sent a **Meeting reminder** template (tagged "Utility · Approved") for the portfolio review on Sat 14 Nov at 11:00 AM at the Andheri office, with three buttons: Confirm, Reschedule, Call me. The footer carries the firm name, ARN number and "Reply STOP to opt out". Rahul tapped **Confirm** and wrote "Yes, see you at 11."
- Saturday 12:02 PM, after the meeting: Rahul thanked Neha, asked to move his ₹10,000 SIP to ₹15,000 from December, and asked for his capital-gains statement for FY 2026-27 so far, for the 15 Dec advance tax.
- A purple **AI detected** card found **2 actions** and says "you approve each one": the statement (marked "Sent 12:20") and an update to the open SIP top-up opportunity (with an **Update** button).
- Neha replied at 12:04 and sent the statement at 12:20 PM as a PDF marked **"from MF Box"** (FY 2026-27, 1 Apr to 13 Nov 2026), with the password hint.

### 6. Internal notes
Yellow, dashed boxes marked **"Internal note: visible to team only"** and "not sent to client". Here Neha @mentions Priya Nair (ops) to check ELSS lock-in units, and Priya answers inside the same chat. The team can discuss a client without leaving the chat and without the client ever seeing it.

### 7. Reply box
- A switch: **Reply** or **Internal note**. In note mode the box turns yellow and the button changes to "Add note".
- **Template** menu: approved templates with type and cost, for example "Portfolio review reminder · Utility · ₹0.15/msg", "SIP instalment due", "KYC update request", and "Diwali greetings 2026 · Marketing · ₹1.09/msg" still **In review** with Meta. A "Manage templates" link at the bottom.
- Attach (including statements from MF Box), emoji, **quick replies** (saved answers, typed with "/"), and **AI draft reply**, which writes a suggestion for you to edit before sending.
- Footer: "End-to-end encrypted".

### 8. Client panel (right)
- **AUM** (money the client has invested through the firm) ₹1.24 Cr and **6 active SIPs** (monthly auto-investments) worth ₹45,000 a month, marked "Synced from MF Box · 10:42". RM, family, masked PAN and mobile, branch, and a link to Client 360.
- **Quick actions:** Create task from chat, Create service request, Log activity.
- **Open tasks** (3, two shown: the bank mandate renewal, overdue since 13 Nov, and today's portfolio review, waiting for its outcome), **Recent activity** (statement sent 12:20, portfolio review 11:00, a new SIP auto-logged from MF Box, a call on 08 Nov), **Tags** (HNI, Family head, Tax saver, FD maturing).
- **Consent:** WhatsApp opt-in, Marketing messages, and a **DPDP consent record** (DPDP is India's data-protection law), each with a date, plus the source and the opt-out word STOP.

### 9. Create task from chat (drawer)
Opens from the side, linked to this chat. A purple banner says it was **pre-filled by AI** from Rahul's 12:02 message and to check it before saving ("SIP top-up ₹10,000 → ₹15,000 – Rahul Verma", due 17 Nov). Title, category, due date, assignee, priority and description (quoting the WhatsApp message) are filled in.

## Better than Investwell
| Investwell today | Our version |
|---|---|
| WhatsApp with Dashboard, Inbox, Templates, Campaigns, Contacts and Mine / Collab / Team / Unassigned / All filters | Same tabs and filters kept, plus Email in the same inbox |
| Shows "End-to-end encrypted" | Also shows the **24-hour window timer** and when templates become compulsory |
| No visible reply-time tracking | **Red SLA timer** on chats waiting over 2 hours, and open-chat counts when you assign |
| No team discussion inside the chat | **Internal notes** with @mentions, never sent to the client |
| Chat sits apart from client data | **MF Box AUM and SIPs, open tasks, activity and consent** beside the chat; tasks and service requests made from the chat |
| No AI help in chats | AI spots meetings and opportunities and drafts replies, but a person approves each one |

## How to demo it (2 minutes)
1. Open **Inbox** from the sidebar. Point at the filters, the **Unassigned (2)** count and the red SLA timers on Suresh Iyer and Sameer Khan.
2. In Rahul Verma's chat, point at **"24-hour window: 22 h left"** and explain the rule.
3. Click the **Assigned to** dropdown and show the open-chat counts. Pick Rohan Mehta; a message confirms the reassignment.
4. Scroll the chat: show the reminder template with buttons, the **AI detected** card (click **Update** on the opportunity), and the two yellow internal notes.
5. In the reply box click **Internal note**: the box turns yellow. Switch back to **Reply**.
6. Click **Template** to show the approved list with per-message cost and "In review".
7. Click **AI draft reply**: a draft appears for you to edit. Click **Send**.
8. In the right panel click **Create task from chat** to show the AI pre-filled task, then Cancel.

## Questions the CEO may ask
**Q: Does every RM need a separate WhatsApp number?**
A: No. The firm connects one official WhatsApp Business number and all staff work from it. Chats stay with the firm when an RM leaves.

**Q: What happens after 24 hours?**
A: WhatsApp blocks free typing. You can only send an approved template, which costs a small fee per message. The screen shows exactly when that starts.

**Q: Can the client see internal notes?**
A: No. They are marked "visible to team only" and are never sent.

**Q: How does a manager know if clients are being ignored?**
A: Unassigned chats are counted at the top, and any chat waiting over 2 hours gets a red timer.

**Q: Are we allowed to message clients?**
A: Only clients with recorded opt-in. The consent panel shows the opt-in date, marketing consent, DPDP record and the STOP opt-out.

## Decisions needed
- **WhatsApp cost:** who pays Meta's per-message charges (₹0.15 utility, ₹1.09 marketing shown as examples): the firm directly, or bundled by AdvisorKhoj. Which BSP (the Meta-approved company that provides the API) we partner with.
- **SLA:** is 2 hours the right default first-reply time, and can each firm change it?
- **AI in chats:** whether AI detection and AI draft replies are in the MVP or a later add-on, and the cost.
- **Email channel:** is the shared email inbox in MVP or later?

---
Prev: [Meeting detail & outcome](14_Meeting_Detail.md) · [All screens](00_Overview.md) · Next: [Service requests](16_Service_Requests.md)
