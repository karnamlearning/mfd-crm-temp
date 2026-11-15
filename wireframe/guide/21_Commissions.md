# 21 · Commissions

![Commissions](../_shots/21-commissions-light.png)

> **In one line:** Shows what the firm earned from fund houses, what each person's share is, and whether the AMC statements match.
>
> **Who uses it:** everyone sees their own share; branch manager, owner and ops see more · **Open it:** sidebar → Library → Commissions · **Wireframe file:** `21-commissions.html`

## Why this screen matters
An MFD earns trail (ongoing commission on money that stays invested) and some upfront brokerage. Today the owner checks this in an Excel sheet and trusts that each AMC paid the right amount. This page reads the expected commission from **MF Box MIS**, compares it with the AMC statements, and shows what is short. Every user also sees **their own share**, so nobody has to ask the owner.

## What you see, part by part

### 1. Header, filters and tabs
- **Export** (PDF, Excel, discrepancy report): every export needs the owner's approval and is watermarked, same as Reports.
- **Upload statement** (blue button): opens the upload panel (part 7).
- **Filters:** period (Nov 2026 accrued, Oct 2026, FY 2026-27 and so on) and branch (firm totals, or Andheri in detail). A green tag shows "Synced from MF Box MIS · 10:42".
- **Four tabs:** Overview · Breakdown · Reconciliation (4 open) · Statements & history.

### 2. Overview: "Your share"
The blue card at the top is personal. For Neha Kapoor: **₹1,95,000** for Nov (accrued), +7% on October, mapped to her 186 clients (trail ₹1,84,000 + upfront ₹11,000), with six small bars for the last six months. It says only she, her reporting line and the owner can see it. A sub-broker sees their payout here, for example "₹41,250 · 45%". An RM sees their mapped commission. Ops see "own share, if mapped".

A grey note explains who sees what: everyone their own share, branch managers their branch plus firm totals, the owner everything. Shares are never ranked (AMFI).

### 3. Overview: firm tiles, chart and "Needs attention"
- **Earned, Nov (accrued) ₹15.4 L:** trail ₹14.6 L plus upfront ₹0.8 L, up 4%. This ties to the Reports tile.
- **Received, Oct ₹14.0 L:** what the AMC statements actually paid. Expected was ₹14.3 L; 24 of 28 AMCs match.
- **Pending, Oct ₹0.30 L:** 1 statement awaited and 3 differences.
- **Trail share of earned 95%.**
- **Chart:** six months of trail and upfront, with the headline "Trail has grown 12% since June".
- **Needs attention:** Zenith statement awaited (₹0.09 L), and three short payments: Orchid (rate change not applied), Kaveri (2 SIP folios mapped to a lapsed ARN), Sagar (exit-load share reversed). Link to the Reconciliation tab.

### 4. Breakdown tab (one table, four ways to group)
A **Group by** switch: **AMC**, **Scheme**, **Investor**, **Employee**.
- **AMC and Scheme:** firm totals for the month: AUM, trail, upfront, total and share. Total ₹15.40 L.
- **Investor:** Andheri clients only (branch managers see their own branch): who they are mapped to, AUM and what they earned. Client names open Client 360.
- **Employee:** Andheri people sorted by name: clients, AUM, commission mapped to their clients, and payout share for sub-brokers (Imran Sheikh ₹28,900 · 40%, Kavya Menon ₹41,250 · 45%, Ravi Pillai ₹16,700 · 35%). Imran's row says ARN lapsed. "House accounts" shows clients with no RM, so the manager can reassign them. Footer: sorted by name, not ranked; "mapped" is for reporting, not a sales credit.

### 5. Reconciliation tab
Compares what MF Box expected with what each AMC paid for October: expected ₹14.30 L, received ₹14.00 L, **difference −₹0.30 L (2.1%)**, 24 of 28 AMCs matched. Rows needing attention come first, each with a reason: Zenith **Awaited**, Orchid, Kaveri and Sagar **Difference**. **Review** opens a panel with the folio lines (for Kaveri, two SIP folios mapped to Imran Sheikh, whose ARN lapsed on 02 Nov) and an action: raise a query with the AMC, re-map to a new ARN, or write off. **Save and create task** gives Priya Nair a follow-up. The **Discrepancy report** button needs approval like any export.

### 6. Statements & history tab
- A drop zone: 22 of 28 AMCs arrive automatically through MF Box MIS; the rest are uploaded by hand.
- **Stored statements:** file name, when and by whom it was added, and status (Matched, Needs review, Awaited). Files are kept in Documents › Commission statements, so there is no second file store.
- **Month history, FY 2026-27:** expected, received and difference for each month. Closed months show a green badge; October shows "4 open"; November is "Accruing". A year picker reaches earlier years.

### 7. Upload statement (side panel)
Pick the month and AMC (or detect from the file), drop a PDF or Excel, then tick: match lines to MF Box, save a copy in Documents (ops and owner only), tell the owner if a difference is found.

## Better than Investwell
| Investwell today | Our version |
|---|---|
| Commission lives in the back office or an Excel sheet | One page next to clients, with the same numbers as Reports |
| Nobody sees their own share without asking | Every user sees their own share on the first card |
| Differences found by hand each month | Expected vs received per AMC, with a reason and a task |
| Statements sit in email | Stored in Documents, linked to the month and AMC |
| Commission by AMC, scheme, client and person in separate reports | One table with a Group by switch |

## How to demo it (2 minutes)
1. Open **Commissions**. Point at **Your share** and read the grey "who sees what" note.
2. Show the chart and the **Needs attention** list.
3. Click **Breakdown**, then switch **Group by** through AMC, Scheme, Investor and Employee.
4. Click **Reconciliation**, press **Review** on Kaveri, and **Save and create task**.
5. Open **Statements & history** and press **Upload statement**.

## Questions the CEO may ask
**Q: Does the CRM calculate commission?**
A: No. Expected commission comes from MF Box MIS. The CRM only compares it with the AMC statements and shows differences.

**Q: Can a sub-broker see other people's commission?**
A: No. They see only their own payout. Branch managers see their own branch; the owner sees all.

**Q: Is this a sales ranking?**
A: No. People are sorted by name, and "mapped" only says which client owner the money belongs to.

## Decisions needed
- **Payout share rules:** are percentages (40 / 45 / 35%) set in MF Box or in the CRM?
- **Statement upload vs auto-fetch:** which AMCs can MF Box fetch, and who uploads the rest (ops or the owner)?
- **Write-offs:** who may write off a difference, and up to what amount?
- **RM visibility:** is "commission mapped to my clients" right for RMs, or only their payout where one exists?

---
Prev: [Settings](20_Settings.md) · [All screens](00_Overview.md) · Next: [Campaigns](22_Campaigns.md)
