# 07 · Clients list

![Clients list](../_shots/07-clients-list-light.png)

> **In one line:** Every client with AUM, SIPs, tier, last contact and a health score, read straight from MF Box.
>
> **Who uses it:** RM, sub-broker, branch manager, owner · **Open it:** sidebar → Clients · **Wireframe file:** `07-clients-list.html`

## Why this screen matters
An MFD firm's biggest risk is the client nobody has called for months. That client quietly stops a SIP or moves money elsewhere. This screen shows all clients with their money facts from MF Box, and next to them how recently someone spoke to them. Big clients who are being ignored stand out at once.

## What you see, part by part

### 1. Title and the MF Box sync line
- Next to the title: **"Synced from MF Box Back Office · today 10:42 · Sync now"**. The line under it says: "Clients, families, AUM and SIPs come from MF Box. Nothing here needs re-typing."
- **What the sync means:** the client list, families, AUM (total money a client has invested through the firm) and SIPs (monthly auto-investments) are copied from MF Box automatically. Staff never type them in again. **Sync now** pulls the latest data on demand. The sample message says "3 clients updated".
- On the right: **Export**, with a lock tag "Needs approval". Client data cannot be downloaded quietly. The request goes to the owner (Rajesh Sharma) first.
- **Columns** lets you choose which columns to show. 11 of 16 are on by default. You can add more, such as email (masked), KYC status, sub-broker and next review due.

### 2. Four summary tiles
- **Total AUM · my team:** ₹218 Cr, up 2.1% vs last month, 712 clients (the whole Andheri branch).
- **Active SIPs:** 1,042, worth ₹1.12 Cr a month. "23 stopped in 30 days" in red.
- **Not contacted in 90+ days:** 38, of which 12 are Tier A.
- **KYC / nomination issues:** 11 (7 KYC on hold, 4 with no nominee), with a **Fix** link.

### 3. Visibility tabs
**My Clients (186) · Collaborations (9) · My Team Clients (712) · All firm (1,284, with a lock).** These are the same tabs as Investwell. "All firm" is only for managers and the owner. On the right: "Andheri team · 8 people · 3 sub-brokers".

### 4. Search, filters and saved views
- Search by **name, PAN, mobile or folio** (a folio is a client's account number at a fund house).
- **Filters** opens a side panel in three groups: **Who** (family head, RM or sub-broker, branch), **Portfolio from MF Box** (AUM range in lakh/crore, tier, SIP status: active, stopped, bounced, no SIP) and **Engagement** (last contacted more than 30, 60 or 90 days ago, or never; health band). The footer shows how many clients match before you apply.
- One-click **saved views**: "Tier A not reviewed (7)", "SIP stopped (23)". The Saved views menu also has "Birthdays this week". Two views are shared by the owner: "KYC / nominee pending" and "Redemptions > ₹5 L (30 d)". You can save the current filters as a new view.
- Active filters show as small removable chips (Family head, AUM ₹10 L – ₹5 Cr, Branch Andheri).

### 5. Service coverage (right of the chips)
Three small bars: **A 82% · B 64% · C 38%**.
- **Client tiers** (A, B, C) sort clients by how much attention they get. The filter panel shows the promise for each: **A = monthly contact, quarterly review · B = quarterly contact, half-yearly review · C = half-yearly contact, yearly review**. You can also see "Untiered" clients.
- **Service coverage** is the share of clients in each tier who were contacted within that promise. "A 82%" means 18% of the most important clients are already overdue for a contact. Managers can see at a glance whether the team keeps its promises.

### 6. The client table
Columns: **Client** (with family head below), **PAN · Mobile** (both masked, e.g. ABCPV••••K), **Primary RM · Branch** (sub-brokers are labelled), **Tier**, **AUM**, **SIP book / month**, **Last purchase**, **Last contacted**, **Health**.
- Overdue contact shows in red with a clock, e.g. Farhan Qureshi (Tier A, ₹2.10 Cr): "96 days".
- Rahul Verma (Tier A, ₹1.24 Cr, RM Neha Kapoor, SIPs ₹45,000 a month, health 82) shows **"Today"**, because his portfolio review meeting was this morning at 11:00. His wife Anjali Verma (Tier B, ₹48.6 L, same RM, since a family shares one RM) was at the same meeting.
- A stopped SIP shows as "Stopped Oct" instead of an amount.
- Small flags next to names: **KYC** (red) for Suresh Iyer, **Nominee** (amber) for Meera Joshi and Anjali Verma.
- Under the table: "Health score refreshes nightly after the MF Box sync".

### 7. Health score
Each client gets a number out of 100 and a word: **Healthy** (green), **Watch** (amber) or **At risk** (red).
- In simple words, it is a **warning light** for each client. Running SIPs and recent contact push the score up. A stopped SIP, a long silence, a big redemption, bounced debits or a KYC hold pull it down.
- Hover over the score and it shows the reasons with their points. Example: Arvind Menon, 34 At risk: "SIP stopped −25 · No contact 124 d −25 · Redemption ₹4 L −10". Nobody has to guess why a client is red.

### 8. Row actions and bulk actions
- Hover over a row: **Call** (the call is logged on the client's timeline), **WhatsApp** (opens the chat in the Inbox), **Create task** (due tomorrow) and **Open Client 360**.
- Tick several rows and a bar appears: **Reassign RM, Create task, Send WhatsApp, Set tier**.

## Better than Investwell
| Investwell today | Our version |
|---|---|
| Client list with PAN, email, mobile, primary user, AUM, last purchase | Same list, plus tier, SIP book, last contacted and health score; PAN and mobile are masked |
| Filters: family head, primary user, AUM range | Adds tier, SIP status, branch, last contacted and health, plus saved views shared by the owner |
| ~712 team clients synced from the back office, no sync time shown | "Synced from MF Box · 10:42" with a **Sync now** button |
| No way to see who is being neglected | "Not contacted in 90+ days" tile and **service coverage by tier** |
| Export not shown | Export of client data **needs the owner's approval** |
| No bulk actions shown | Bulk reassign RM, create tasks, send WhatsApp, set tier |

## How to demo it (2 minutes)
1. Open **Clients**. Point at "Synced from MF Box" and click **Sync now**. It spins, then says "MF Box sync complete · 3 clients updated".
2. Point at the four tiles, especially **38 not contacted in 90+ days, 12 Tier A**.
3. Point at **Service coverage A 82% · B 64% · C 38%** and explain the tier promise.
4. Hover over Arvind Menon's red **34 At risk** to show the reasons.
5. Click **Filters** to show the side panel (tier, SIP status, last contacted, health), then close it.
6. Tick two rows to show the bulk bar (Reassign RM, Set tier…).
7. Click **Export**. A message says the request went to Rajesh Sharma for approval.
8. Click **Rahul Verma** to open the Client 360 page.

## Questions the CEO may ask
**Q: Does the RM type in AUM or SIP amounts?**
A: No. They come from MF Box and refresh with each sync. The CRM only adds what MF Box does not know, such as last contact, tier and health.

**Q: How is the health score calculated?**
A: From simple facts: SIPs running or stopped, days since last contact, KYC/nominee status, redemptions and bounces. Each fact adds or removes points, and the reasons are shown on hover. The exact points still need to be agreed.

**Q: Who decides a client's tier?**
A: The screen lets a manager set it (the "Set tier" bulk action), and some clients can stay "Untiered". The rule for setting tiers is not fixed yet (see below).

**Q: Can an RM see other RMs' clients?**
A: Only through the tabs their role allows. "My Clients" and "Collaborations" (clients shared with you) are personal. A branch manager like Neha also sees "My Team Clients". "All firm" has a lock and is only for managers and the principal.

## Decisions needed
- **Tier rules:** set tiers by AUM, by hand, or both? Are the defaults right (A: monthly contact, quarterly review · B: quarterly contact, half-yearly review · C: half-yearly contact, yearly review), and can each firm change them?
- **Health score:** agree the factors and points, and whether clients' scores are shown to sub-brokers.
- **Export approval:** who approves (owner only, or branch managers too) and whether every export is logged.

---
Prev: [Leads pipeline & configuration](06_Leads_Pipeline.md) · [All screens](00_Overview.md) · Next: [Client 360](08_Client_360.md)
