# 22 · Campaigns

![Campaigns](../_shots/22-campaigns-light.png)

> **In one line:** Shows which campaigns and referrals bring in clients, and what each one costs.
>
> **Who uses it:** owner, branch manager, RM running a campaign · **Open it:** sidebar → CRM → Campaigns · **Wireframe file:** `22-campaigns.html`

## Why this screen matters
Firms spend on seminars, WhatsApp drives, posters and social ads, but rarely know which one brought a client. Campaigns tags every new lead to the campaign that created it, then counts how many became clients and how much business they brought, using MF Box for the final numbers. It also keeps track of **who referred whom**, so referrers can be thanked.

## What you see, part by part

### 1. Header and tiles
**Create campaign** is the blue button. Five tiles for the last 90 days: **2 active campaigns** (1 scheduled, 4 completed), **194 leads**, **31 clients converted (16.0%)**, **₹3.53 Cr business generated**, and **₹1.72 L spend, ₹5,548 per converted client**.

### 2. Campaigns tab
Search, status filter (All, Active, Scheduled, Completed) and a period picker. One row per campaign: name and channel, target segment, status and dates, spend, leads, clients, conversion, business and cost per client. Examples: **Diwali SIP Drive** (WhatsApp + QR, 58 leads, 9 clients, ₹86 L), **Tax-saving ELSS seminar** (₹58,000 spent, 7 clients), **Client referral month** (22.7% conversion), and **NPS awareness** on social media (₹18,000 per client, shown in red). The webinar is Scheduled, so its results are blank. Click a name to open the detail panel.

### 3. Two charts under the table
- **Cost per converted client, by channel:** social media ₹18,000 against WhatsApp ₹3,273. Headline: it costs about 5× more.
- **Lead to client conversion, by channel:** referrals best at 22.7%, then seminars at 17.1%.

### 4. Campaign detail (side panel)
Dates, lead source, target segment and audience; results (leads, clients, business, cost per lead, cost per client, open leads); a funnel from 1,240 messages to 9 clients; **spend against budget** (₹32,000 of ₹40,000) with each expense and an **Add expense** button; and the latest leads, which open in Leads. **End campaign** and **Edit** sit in the footer.

### 5. Create campaign (side panel)
Name, description, **channel** (WhatsApp, Email, Seminar, Webinar, Website, Social, Referral), **lead source** (same list as Leads › Configurations), owner. **Target segment** picks a saved view from Clients, such as "Clients with no SIP · 84", so segments are not defined twice; clients who opted out of marketing are skipped. Then dates, budget and a lead target. Tracking boxes: tag new leads automatically (QR and form links carry the campaign), let staff pick the campaign when creating a lead, and send through approved WhatsApp templates (marketing ₹1.0 per message).

### 6. Referrals tab
Tiles: 11 referrers, 31 referred leads, 8 became clients, ₹1.64 Cr business. The table lists each referrer (client, sub-broker or partner such as a tax consultant), how many they referred, how many became clients, business, last referral and **thank-you status**. **Thank** opens a panel with the referrer's history and a ready WhatsApp message (approved template, opt-in checked). The footer says a referred lead carries its referrer from the first touch to Client 360.

### Where else campaigns show up
- **Create lead** has a **Campaign** field; Lead detail shows it next to Source.
- **Client 360** already shows "Source · Referral · name", which links back here.

## Better than Investwell
| Investwell today | Our version |
|---|---|
| Lead source is a label with no cost | Campaigns have budget, expenses, leads, clients and business |
| No view of which channel pays back | Cost per client and conversion by channel |
| Referrals noted in a free-text field | Referrer, history, business and thank-you tracking |
| Segments rebuilt for each mailing | Target segment uses saved views from Clients |

## How to demo it (2 minutes)
1. Open **Campaigns**; read the five tiles.
2. Click **Diwali SIP Drive** to show results, funnel, expenses and leads.
3. Point at the red **NPS awareness** row and the cost chart.
4. Open **Referrals**, click **Thank** on Suresh Iyer, and send the message.
5. Press **Create campaign** and show the saved-view target.

## Questions the CEO may ask
**Q: How does a lead get tagged to a campaign?**
A: Through the QR code or form link, or by picking the campaign when creating a lead.

**Q: Where do "business generated" numbers come from?**
A: From MF Box, once the new client invests. Expenses are typed by the campaign owner.

**Q: Can we message clients from here?**
A: Only through approved WhatsApp templates, and never to clients who opted out.

## Decisions needed
- **Business generated:** count first-year SIP value, lump sums and insurance premium together, or show them separately?
- **Referral rewards:** does the firm give gifts, and should that spend be tracked per referrer? SEBI/AMFI rules on inducements need a legal check.
- **WhatsApp marketing cost:** who pays Meta's per-message charge for broadcasts?
- **Campaign ownership:** can any RM create a campaign, or only managers?

---
Prev: [Commissions](21_Commissions.md) · [All screens](00_Overview.md) · Next: [Design system](23_Design_System.md)
