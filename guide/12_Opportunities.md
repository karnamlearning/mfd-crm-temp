# 12 · Opportunities

![Opportunities](../_shots/12-opportunities-light.png)

> **In one line:** A board of chances to grow existing clients. Some are suggested by AI, but a person accepts each one.
>
> **Who uses it:** RM, branch manager, sub-broker; owner for the team view · **Open it:** sidebar → Opportunities · **Wireframe file:** `12-opportunities.html`

## Why this screen matters
Most new business for an MFD comes from clients the firm already has: an FD that is about to mature, a stopped SIP (monthly auto-investment), an insurance renewal. These moments are already visible in MF Box data, but nobody has time to look for them. This screen lists them as opportunities (a chance to do more business with an existing client) with an expected ₹ value and a follow-up date, so they turn into calls instead of being missed.

## What you see, part by part

### 1. Header
- Title **Opportunities** with a live summary line: "Your pipeline: **10 open · ₹49.3 L expected value · 1 follow-up overdue**". The line changes when you switch tabs.
- Buttons: **Configurations** (goes to Settings) and the main button **Create opportunity**.

### 2. AI banner
A purple strip: "**AI found 3 new opportunities today.** You can configure AI-generated opportunities in Settings." Buttons: **Review 3**, **Settings** and **×** to hide it. Purple is used only for AI items on every screen, so staff always know what came from the machine.

### 3. Tabs and MF Box sync note
- **My Opportunities (10)**, **Collaborations (3)** (ones a colleague owns where you help) and **Team Opportunities (15)**.
- On the right: "AUM & last purchase synced from MF Box · 10:42". AUM (total money a client has invested through the firm) is read from MF Box, not typed.

### 4. Toolbar
Search by opportunity, client or PAN; **Filters** (category, follow-up, AI score bands: 70 and above, 50–69, below 50); an **All / AI / Manual** switch to show only AI-suggested or only manually created items; the **Kanban / Table** switch; and **Columns**.

### 5. The board (Kanban: cards in columns, one column per stage)
Four columns: **New**, **In progress**, **Requirements gathered**, **Documents collected**. Each shows a count and the **expected value** of the column (for example In progress ₹26.8 L). The **+** in each header adds an opportunity straight into that column.

Each card shows:
- A source badge: purple **"AI · 82"** (AI-suggested, with its score) or grey **Manual**, plus a category tag (MF · Inactive client, FD maturity, Insurance · Term…).
- The title, e.g. "Inactive client – Deepak Agarwal", which opens the client's 360 page.
- **Expected value** and the client's **AUM** (₹3 L expected · ₹15.2 L AUM).
- For AI cards only, a purple **"Why:"** line in plain words, e.g. "No transaction for 14 months; SIP of ₹5,000 stopped Sep 2025" or "₹25 L bank FD matures 30 Nov 2026; reinvested last maturity with us".
- Follow-up date (red "1d overdue", orange "Follow-up today", or a date) and the owner's and collaborators' initials.

The **⋯** menu on a card: move to any stage, **Mark as Won**, **Mark as Lost**, **Open client 360** and **Create follow-up task**.

### 6. Won and Lost drop zones
Under the board: "**Drop here to mark Won** · 6 this month · ₹38.4 L" and "**Drop here to mark Lost** · 2 this month". A message with Undo confirms each move.

### 7. Table view
The same opportunities as rows: title (with owner), follow-up date, status, expected value, **AI score** (a small purple bar out of 100 and the number), source (AI generated / Manual), **Created by**, created at, AUM, category and last purchase. For AI items, Created by reads "**AI engine · Accepted by Neha Kapoor**", so you can always see which person approved it.

### 8. AI suggestions to review (side panel)
Opens from **Review 3**. Subtitle: "Generated 14 Nov 2026, 06:00 from MF Box data · rules set in Settings".
- At the top, a grey box with a lock tag **"Internal — not advice"** and the rule: "AI drafts, a human approves. Nothing reaches the board, a task or the client until you accept it. Scores are rule-based and every point is shown below."
- Three suggestion cards. Example: **FD maturity – Lakshmi Narayanan, AI score 79.** AUM ₹67.8 L, expected ₹12 L.
  - **Why AI suggests this**, with points: **+50** ₹12,00,000 FD matures 29 Nov (in 15 days); **+34** reinvested her last FD through us; **−5** already has another open opportunity. The points add up to the score: 50 + 34 − 5 = 79.
  - **Draft next step:** "Call before 20 Nov to discuss reinvestment options".
  - At the bottom: **Assign** to a person, **Dismiss** or **Accept**.
- The other two: SIP maturity – Anjali Verma (71 = +45 +32 −6) and General insurance renewal – Pooja Bansal (58 = +40 +26 −8).

### What the AI score means, simply
- It is a number from **0 to 100**. A higher number means the opportunity is **more likely to be worth acting on now**: the money is larger, the date is closer, or the client has done this with us before.
- It is **rule-based**: fixed rules on MF Box data (maturity dates, stopped SIPs, renewals, past behaviour) give or take away points. It is not a black box, and each reason and its points are shown.
- It is **a ranking aid, not a recommendation**. It tells the RM whom to call first, not what to sell.

### A person must accept each one
- An AI suggestion **does not appear on the board** until someone clicks **Accept**. It then lands in **New**, owned by the person chosen in Assign, with a purple outline so it stands out.
- **Dismiss** removes it, and the AI will not suggest it again for 30 days.
- Nothing is sent to the client. The "Draft next step" is a note for the RM only.

### The "Internal — not advice" guardrail
Under AMFI rules, an MFD may give only **incidental advice** (advice that comes along with selling, based on the distributor's own check of the client's risk and suitability). It may not offer "financial planning". So the AI's output is labelled **Internal — not advice**: it helps the RM decide *whom* to call and *why*. Any advice to the client comes from the RM, in the RM's own words, after the RM's own judgement.

### 9. Create opportunity side panel
Fields: Opportunity title\*, Client\* (search by name, PAN, mobile or folio; "AUM, SIPs and last purchase are pulled from MF Box"), Category\*, Status, Expected value, Follow-up date\*, Owner, Collaborators and Notes. **Create opportunity** puts it in New.

## Better than Investwell
| Investwell today | Our version |
|---|---|
| Banner: "You can configure the AI generated opportunities in the settings" | Banner also counts **today's new suggestions** and opens a **review queue** |
| AI-generated opportunities go straight into the list with an AI Score | Each AI item **waits for a person to Accept, Assign or Dismiss**; Created by shows who accepted it |
| AI Score is a bare number | The score comes with a plain **"Why"** on every card and a **points breakdown** in the review panel |
| Kanban with Won / Lost drop zones, plus a Table view | Same, plus ₹ totals per column, a live pipeline summary and a **Move to…** menu with Undo |
| No advice label | Every AI suggestion is marked **"Internal — not advice"** |
| AUM and Last Purchase columns | Same, with a visible **"synced from MF Box · 10:42"** note, plus an All / AI / Manual filter |

## How to demo it (2 minutes)
1. Open Opportunities. Read the summary line (10 open, ₹49.3 L) and point at a purple **"Why:"** line on a card.
2. Click **Review 3**. Point at **"Internal — not advice"**, then walk through the +50 / +34 / −5 points on Lakshmi Narayanan's FD (they add up to 79).
3. Click **Accept** on that card: a message confirms, and the card appears in **New** with a purple outline. Click **Dismiss** on another: "AI will not suggest this again for 30 days". Click **Done**.
4. Click the **AI** button in the toolbar to show only AI items, then **All** again.
5. Click **⋯** on a card and choose **Mark as Won**. Mention Undo.
6. Click **Table**. Point at the AI score bars and "AI engine · Accepted by Neha Kapoor".
7. Click the **Team Opportunities** tab: the count and the summary line change.

## Questions the CEO may ask
**Q: Is the AI giving investment advice?**
A: No. It only flags *which client* to look at and *why* (an FD maturing, a stopped SIP). It is labelled "Internal — not advice" and nothing goes to the client. The RM decides what to say.

**Q: Can the AI add things to an RM's pipeline on its own?**
A: No. Suggestions wait in the review panel until a person clicks Accept. The table then shows who accepted each one.

**Q: Where does the data come from?**
A: From MF Box: AUM, SIPs, maturities and last purchase. Suggestions are made every morning at 06:00.

**Q: How is an opportunity different from a lead?**
A: A lead is a new prospect. An opportunity is more business from someone who is already a client.

**Q: Can a firm switch the AI off?**
A: The banner, Settings and "Configure AI rules" all point to Settings, where the AI rules are set. Whether firms can switch it off completely, or per rule, is still to be decided.

## Decisions needed
- **Which signals may create AI opportunities** (FD maturity, SIP maturity, stopped SIPs, insurance renewals, and later AdvisorKhoj research signals)? Research-based signals need a legal check on the "incidental advice" line.
- **AI cost and plan:** is this part of the base product or a paid add-on? Which AI provider writes the "Why" text, and may client data be sent to it?
- **Score weights:** the points per signal (for example +50 for an FD maturing within 15 days) are sample values. We need to agree the weights for each rule; the points shown always add up to the score.
- **Dismiss rule:** is "don't suggest again for 30 days" right for every type of opportunity?

---
Prev: [Task detail](11_Task_Detail.md) · [All screens](00_Overview.md) · Next: [Meetings](13_Meetings.md)
