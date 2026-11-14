# 17 · Documents

![Documents](../_shots/17-documents-light.png)

> **In one line:** All client files in one safe place, linked to clients, with expiry alerts, masking, watermarks and a full access record.
>
> **Who uses it:** ops staff, RM, sub-broker, branch manager, owner · **Open it:** sidebar → Documents · **Wireframe file:** `17-documents.html`

## Why this screen matters
An MFD firm holds sensitive paper: PAN cards, address proofs, cancelled cheques, mandates, nominee forms, policies. Today these sit in email, WhatsApp and personal laptops. Nobody knows who has a copy, and expired KYC is found only when a transaction fails. **Investwell's Documents module only says "Coming soon — Document management is on its way".** This screen fills that gap.

## What you see, part by part

### 1. Title and buttons
"Every file linked to a client, lead or task", plus "Statements synced from MF Box · 10:42". Buttons: **Request from client** and **Upload**.

### 2. Four summary tiles
- **Documents:** 8,412 (+126 this week, 1,284 clients covered).
- **Expiring in 30 days:** 17 (6 KYC, 7 mandates, 4 policies). Click it to list them.
- **Pending client uploads:** 9, "2 waiting over 7 days", with automatic reminders on.
- **Storage:** 12.4 GB of 50 GB used (25%), "Encrypted at rest" (files are stored scrambled, so a stolen disk is useless).

### 3. Folder list (left)
All documents, Recent, Starred (23), Shared with me (41). Then folders: **Clients** (one folder per client or family, e.g. Verma Family 42 files), KYC & identity, Application forms, Mandates, Proposals, **Statements** (green dot: synced from MF Box), Templates, Compliance & SOPs, and Trash.
Below it, a **Waiting on clients** box: Nikhil Shah, address proof, 9 days (in red); Deepak Agarwal, cancelled cheque, 3 days; Meera Joshi, nominee form, 1 day. A **Remind all 9** link sends WhatsApp reminders.

### 4. Search, upload area and quick filters
- A tag at the top says **"You see files for Andheri + your own clients"**. Each person sees only what their role allows.
- Search by name, client, PAN or **text inside scans** (scanned pages are read by the computer, so their words can be searched). There are filters by file type and by what the file is linked to (client, lead, task, opportunity, not linked), and a **Grid / List** switch.
- Drop area: "PDF, JPG, PNG up to 25 MB · virus-scanned and OCR-searchable", with a green tag **"Aadhaar numbers are auto-masked"**.
- Quick filters: Uploaded last 14 days, Expiring in 30 days (17), Shared externally, Not linked to a record.

### 5. The document table
Columns: **Name**, **Linked to**, **Category**, **Uploaded** (date and by whom), **Expiry**, **Access**.
- **Masking** (hiding most of a number, e.g. ABCPV••••K): KYC files show a green **"PAN masked"** or **"Aadhaar masked"** tag. Aadhaar rules restrict who may keep the full number. The CRM blanks out the Aadhaar number automatically when a file is uploaded, before it is stored.
- **Expiry:** many documents stop being valid on a date. The column shows it in plain words, in colour: "KYC expires 02 Dec" (amber), "KYC expired 10 Nov" (red, on Nikhil Shah's KYC file; his new address proof is still awaited), "Verified · valid" (Pooja Bansal's address proof, uploaded 11 Nov), "Renews 28 Nov", "Valid till 2036", "Link expires 20 Nov", "Quote valid to 05 Dec", "No expiry". Ops can act before a transaction fails.
- **Access:** who can open it. "RM + Ops" (only the client's RM and ops), "Team" (the Andheri team) or "All staff" (e.g. a firm-wide SOP).
- Hover over a row: **Preview**, **Download (watermarked)**, **Share secure link**, More.
- Footer: "1–11 of 214 (filtered from 8,412)".

### 6. Grid view
The same files as cards with a small thumbnail. Expiry shows as a badge on the card ("Expires 02 Dec", "Expired", "Due 28 Nov").

### 7. Preview panel (opens on the right)
The sample is the Verma Family portfolio statement (v3, 4 pages, synced from MF Box).
- **Watermark:** the page preview has faint diagonal text "Neha Kapoor · 14 Nov 2026 10:12 · Confidential". A note says: "PAN and mobile are masked in previews and shared links. **Downloads carry a watermark with your name and time.**" In simple words, if a copy leaks, it shows exactly who downloaded it and when.
- **Details:** category, uploaded by, access ("RM + Ops only", with **Change**), expiry, **retention 8 years (firm policy) · until Nov 2034** (how long the firm must keep it), and tags.
- **Linked records:** Rahul Verma, Anjali Verma, the "Portfolio review – Verma Family" task and today's review meeting (14 Nov, 11:00).
- **Version history:** v3 current, v2 and v1 with **Restore**. Restoring never deletes; the old version comes back as a new version (v4).
- **Access log** (a record of everyone who touched the file): viewed by Priya Nair, Rahul Verma opened the shared link, downloaded (watermarked) by Neha Kapoor, link sent on WhatsApp (expires 21 Nov), viewed by Rohan Mehta. It can be exported for an audit.
- Footer: "Every view and download is logged", **Share secure link**, **Download**.

### 8. Request documents from client (side panel)
- "The client gets a secure upload link. No login needed."
- Pick the client and tick the documents needed (PAN card, address proof, cancelled cheque, nominee form, bank statement, FATCA declaration).
- Help text: files land in the client's KYC & identity folder, and a task is created for you when they arrive.
- Send by WhatsApp or Email. Link expires in 7 days (21 Nov). The message is shown before sending ("Hi Suresh, your KYC is due for renewal on 02 Dec…"). It uses an approved WhatsApp template with an auto-reminder after 3 days.
- Blue note: **"We never ask for Aadhaar. If a client uploads one, the number is masked automatically before it is stored."**

## Better than Investwell
| Investwell today | Our version |
|---|---|
| **Documents is "Coming soon"; nothing usable** | A full document library with folders, search and grid/list views |
| Files sit as attachments on single tasks or leads | Every file is linked to client, lead, task or opportunity, and can be found from either side |
| No expiry tracking | KYC, mandate, policy and link expiry with 30-day alerts |
| No control over copies | Masked PAN and Aadhaar, watermarked downloads, secure links that expire |
| No audit trail | Access log of every view, download and link opened, plus version history |
| Staff chase clients for papers on WhatsApp | "Request from client" link with auto-reminders and a "Waiting on clients" list |

## How to demo it (2 minutes)
1. Open **Documents**. Read the four tiles, especially **17 expiring in 30 days** and **"Encrypted at rest"**.
2. Point at the **Aadhaar numbers are auto-masked** tag and the "PAN masked" tag on Suresh Iyer's KYC file, then at the red "KYC expired 10 Nov" on Nikhil Shah's KYC file.
3. Click the **Verma Family portfolio statement**. In the panel, point at the diagonal watermark, then scroll to **Version history** and **Access log**.
4. Click **Download**. A message says "Downloading with watermark 'Neha Kapoor · 14 Nov 2026'". Click **Share secure link**: "expires in 7 days · PAN masked". Close the panel.
5. Click **Grid** to show the card view, then **List** again.
6. Click **Request from client**. Show the ticked documents and the WhatsApp preview, then **Send request**: "Upload link sent to Suresh Iyer on WhatsApp".
7. Click **Remind all 9** in the Waiting on clients box.

## Questions the CEO may ask
**Q: Are we allowed to store Aadhaar?**
A: The design avoids it. We never ask for Aadhaar, and if one is uploaded the number is masked before it is stored. Compliance should confirm the exact rule.

**Q: What stops an RM from downloading client files and leaving?**
A: Files are visible only by role (RM + Ops, Team, All staff). Every download carries the person's name and time, and every view and download is in the access log.

**Q: Does the client need a login to upload?**
A: No. They get a secure link that expires (7 days by default). Files go straight into their folder and create a task for the RM.

**Q: Where do statements come from?**
A: From MF Box. The Statements folder is synced, so nobody uploads them by hand.

## Decisions needed
- **Storage limit and price:** is 50 GB per firm the right plan size, and what does extra storage cost?
- **Retention period:** the sample uses "8 years (firm policy)". Confirm the legal minimum, and whether each firm can set its own.
- **Scanning and OCR** (reading text in scans) and **Aadhaar auto-masking:** which provider, how accurate it is, and the cost per file.
- **WhatsApp upload requests and reminders:** template approval and per-message cost.

---
Prev: [Service requests](16_Service_Requests.md) · [All screens](00_Overview.md) · Next: [Team Activity (MVP core)](18_Team_Activity.md)
