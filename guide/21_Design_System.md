# 21 · Design system: why it looks the way it does

![Light theme](../_shots/01-dashboard-light.png)
![Dark theme](../_shots/01-dashboard-dark.png)

> **In one line:** one set of colours, fonts and building blocks used by all 20 screens, so the product looks and feels like one thing.
>
> **Full technical spec:** `07_Wireframes/DESIGN.md` (for designers and developers)

## Why a design system matters
- **Faster to build:** developers reuse the same 30 or so building blocks (buttons, tables, cards, side panels) instead of designing each screen from scratch.
- **Easier to learn:** a button, a status label or a filter works the same way on every screen.
- **Easy to rebrand per firm:** each MFD firm's own logo and name appears at the top of the menu, just like DoItNow's logo in Investwell.

## The five choices, in simple words

### 1. Blue and white, kept minimal
- White cards on a very light grey background, with thin borders.
- **One accent colour (blue)** for the main button, links and the selected menu item.
- Investwell uses a heavy red block for the selected menu item. We use a soft blue highlight, which is calmer to look at all day.

### 2. Colour only when it means something
| Colour | Meaning | Examples |
|---|---|---|
| Red | Late or at risk | Overdue task, SLA breached, Hot lead, Lost |
| Amber | Needs attention soon | Due today, Pending, Warm lead |
| Green | Done or good | Done, Won, Synced, Healthy client |
| Blue | In progress or new | In progress, New lead, Scheduled |
| Violet | Suggested by AI | AI-identified opportunity, AI summary draft |
| Grey | Neutral | On hold, Closed, Cold lead |

Every status also has a **text label and a dot**, never colour alone. This helps people with colour blindness and makes printouts readable.

### 3. A full dark theme
- One click on the moon icon switches the whole app to a dark navy theme; the choice is remembered.
- It is easier on the eyes for long sessions and evening work. Many users now expect it.
- It is not a cheap "invert": every colour was picked again for the dark background.

### 4. Easy-to-read numbers
- The font is **Inter**, a modern font that is very clear on screens. Body text is 14px, the usual size for business software.
- Money uses the **Indian style**: ₹12,45,000 · ₹45 L · ₹1.2 Cr. Dates read 14 Nov 2026.
- PAN and mobile numbers are **masked** (ABCPV••••K, +91 98••• ••210) to protect client privacy.

### 5. The same patterns everywhere
- **My / Collaborations / My Team tabs** on every list (same as Investwell).
- **Search + Filters + Columns** above every table.
- **Forms open in a side panel** on the right, so the list stays visible behind.
- **Ctrl+K** opens search and quick actions from any screen. **?** shows keyboard shortcuts.
- **Undo** messages instead of "Are you sure?" pop-ups.

## Questions the CEO may ask
**Q: Can each MFD firm use its own colours?**
A: Their logo and name, yes, from day 1. Full colour themes per firm are possible later, because all colours sit in one place.

**Q: Will it work on mobile?**
A: The layout adapts to smaller screens, and the menu collapses. A proper mobile-first design for RMs in the field is a next step.

**Q: Is it accessible?**
A: It follows the main WCAG 2.2 AA rules (the common accessibility standard): readable contrast, labels as well as colour, and big enough click targets.

---
Prev: [Settings](20_Settings.md) · [All screens](00_Overview.md) · Next: [Glossary](22_Glossary.md)
