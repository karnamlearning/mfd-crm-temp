# 05 · Lead detail & create lead

![Lead detail & create lead](../_shots/05-lead-create-light.png)

> **In one line:** One prospect's whole story on one page, plus the side panel used to add a new lead.
>
> **Who uses it:** RM, branch manager, sub-broker · **Open it:** sidebar → Leads → click a lead name (or **Create lead**) · **Wireframe file:** `05-lead-create.html`

## Why this screen matters
When a prospect calls back, the RM needs to know in five seconds what was promised, by whom, and what comes next. This page shows the lead's stage, every call, visit and WhatsApp, the linked tasks and meetings, and the next follow-up. The Create Lead panel makes adding a prospect quick, and it checks for duplicates while you type.

The wireframe opens with the **Create lead** panel already open (picture above). Close it with **×** or Esc to see the lead page for Karan Malhotra underneath.

## What you see, part by part

### 1. Lead header
- **Karan Malhotra** with three tags: **Hot** (nature), **Hot lead** (stage) and "MF-SIP · ₹5,00,000" (main product and expected value).
- Contact line: masked mobile with a **Show** link (showing the number is logged), masked email, **Source: Website form**, **Owner: Neha Kapoor** and a lead number (LD-2611-042).
- Buttons: **Call**, **WhatsApp**, **Log activity**, and the main blue button **Convert to client** (sends the lead to MF Box onboarding). The **⋯** menu has Edit lead, Create task, Schedule meeting, Reassign and Mark as lost.

### 2. Stage path
A row of arrow-shaped steps: **New** (02 Nov) → **Contacted** (04 Nov) → **Follow-up** (09 Nov) → **Hot lead** (current, "Since 12 Nov · 2 days"). Done steps are ticked; the current one is solid blue. At the end, a **Close** box offers **Completed** or **Lost** (Lost asks for a reason).
Under it: **Lead age 12 days**, **Avg. time in Hot lead 4 days**, **Last acted on Today, 11:20**, the **next follow-up (today, 15:30 video call)** in orange, and a note that the stages can be changed in Leads → Configurations.

### 3. Activity & comments (main tab)
- **Log box:** choose Comment, Call, Visit, WhatsApp or Email. For a call, pick the outcome (Interested, Call back later, Not reachable, Not interested), type what happened, @mention a teammate, attach a file, record a voice note or set the **next follow-up**. A note says it is "Visible to owner & collaborators". Button: **Log call**.
- **Timeline**, grouped by day, filterable All / Comments / Activities / Changes. Today it shows:
  - A purple **AI suggestion** ("Next best action"): send the SIP (monthly investment plan) proposal and book a KYC (identity check) before today's 3:30 PM video call. It offers **Review WhatsApp draft** or **Dismiss**, and says "AI drafts, a human approves".
  - Neha's 6-minute call, marked **Interested**, with notes (₹25,000 a month SIP, tax-saving part from December).
  - A comment from Sneha Iyer (the collaborator) that the risk profile is done.
- Earlier days show the stage change (Follow-up → Hot lead, Warm → Hot), a 45-minute office visit with Sneha Iyer, a follow-up date change (old date struck through), a WhatsApp template marked **Read**, and the first entry: "Lead created from Website form · auto-assigned to Neha Kapoor".

### 4. Tasks, Meetings, Attachments tabs
- **Tasks (3):** Collect PAN & cancelled cheque (due today), Share SIP proposal (in progress), Send risk profile form (done). **Add task** button.
- **Meetings (2):** SIP onboarding call (today, 3:30–4:00 PM, video call, scheduled) and Goal planning (completed). **Schedule meeting** button.
- **Attachments (3):** risk profile PDF, SIP proposal draft, website enquiry image. Drop zone for new files (PDF, JPG, PNG up to 10 MB).

### 5. Possible duplicate warning (right side)
An orange box: "a client with this mobile exists in MF Box", Karan Malhotra · Malhotra Family · AUM ₹18.6 L (AUM = total money a client has invested through the firm). Choices: **View →**, **Merge** or **Not a duplicate**. This stops the firm from treating an existing client as a fresh prospect.

### 6. Details card
Interested in (MF-SIP, MF-Lumpsum), Lead value ₹5,00,000 / year, Nature Hot, masked PAN, Primary user (Neha Kapoor), Collaborators (Sneha Iyer, **+** to add), Follow-up date today (video call at 3:30 PM), Source, Created at (by system) and Last acted on. **Edit** opens the same side panel.

### 7. Up next
The two next things for this lead: the PAN & cheque task due today, and today's 3:30 PM SIP onboarding video call. Link to **My Day**.

### 8. Create lead side panel
Opens from the right, so the page behind stays in view. Four numbered sections:
1. **Contact:** Name\*, Mobile\* (with a live check: "No client or lead with this mobile"), Email, PAN ("Used to match the investor in MF Box"), Source (Referral, Website form, QR code, WhatsApp, Walk-in, Manual), with "Referred by Rahul Verma" shown for a referral.
2. **Interest:** Interested in\* (pick one or more; quick-add chips for MF-SIP, MF-Lumpsum, NPS, ITR e-filing, Fixed Deposit, PMS; a gear button to manage products), Lead value in ₹ per year ("Expected premium or investment"), Nature Hot / Warm / Cold.
3. **Ownership & follow-up:** Primary user\* (defaults to you), Status (grouped New / In progress / Final, with a gear to manage stages), Follow-up date with "Remind me 1 day before", Collaborators ("They can view, comment and get updates").
4. **Notes & files:** message box and file upload.

Footer: "Ctrl + Enter to create", **Cancel**, **Create & add another** (keeps the panel open for the next one) and **Create lead**.

The form and the Details card also carry a **Campaign** field (None, or a live campaign), so the lead counts toward [Campaigns](22_Campaigns.md).

## Better than Investwell
| Investwell today | Our version |
|---|---|
| Create Lead has Name, Mobile, Email, PAN, Interested in, Lead value, Primary user, Status, Follow-up + reminder, Nature, Collaborators, Attachments, Message | **All the same fields kept**, grouped into 4 short sections, plus **Source and referrer** |
| Full-page form | **Side panel**, with "Create & add another" for entering several leads quickly |
| No duplicate check visible in the demo | **Live mobile check** while typing, and a "Possible duplicate in MF Box" box with Merge |
| The demo video does not show a lead detail page | **Stage path** with days in each stage, lead age and next follow-up |
| Comments & Activities timeline | Timeline plus a **one-box log** for call / visit / WhatsApp with outcome and next follow-up |
| Lead and client data are separate | **Convert to client** sends the lead to MF Box onboarding; PAN matches MF Box |

## How to demo it (2 minutes)
1. Open the page: the **Create lead** panel is open. Click a product chip such as **MF-SIP**: it jumps into the "Interested in" box.
2. Click **Status** to show the stage list, then pick one. Click **Create & add another**: a message confirms, and the Name box clears.
3. Close the panel (**×**). Now you see Karan Malhotra's page.
4. Click **Show** next to the mobile: "Number revealed · access logged".
5. Click a step on the stage path, or **Completed**: a message confirms the stage change.
6. Point at the purple AI suggestion and "AI drafts, a human approves". Then point at the orange duplicate box.
7. Click the **Tasks**, **Meetings** and **Attachments** tabs. Finish with **Convert to client**: "sent to MF Box onboarding".

## Questions the CEO may ask
**Q: What happens when a lead becomes a client?**
A: The RM clicks Convert to client and the lead is sent to MF Box onboarding. The CRM then reads the client from MF Box, so nobody types the data twice.

**Q: Does the AI message the prospect?**
A: No. It suggests the next step and prepares a WhatsApp draft. The RM reviews it and decides whether to send.

**Q: How do we know if this person is already our client?**
A: The mobile number is checked while the lead is typed in, and the lead page shows a "Possible duplicate" box when MF Box has a client with the same mobile.

**Q: Is "Lead value" a one-time amount?**
A: The form counts it per year: the expected premium or investment. How each product counts value (for example SIP × 12) is set in Configurations (screen 06).

## Decisions needed
- **Convert to client:** what exactly happens in MF Box: a new investor record, an onboarding request, or a KYC link to the client?
- **Revealing phone numbers:** which roles may click "Show", and do we report on who revealed what?
- **AI next-best-action and WhatsApp drafts:** a mock-up idea. We need to decide the provider, the cost, and the compliance wording (MFDs may give only incidental advice, so drafts must not read as investment advice).
- **Merge:** who may merge a lead into an existing MF Box client, and can a merge be undone?

---
Prev: [Leads list](04_Leads_List.md) · [All screens](00_Overview.md) · Next: [Leads pipeline & configuration](06_Leads_Pipeline.md)
