# MF Box CRM: Internal CRM wireframes

Clickable HTML/CSS wireframes for the AdvisorKhoj **Internal CRM**, a SaaS CRM for MFD firms that use MF Box Back Office. There are 20 screens with light and dark themes. All people and numbers are fictional sample data.

## Open it
Open `index.html` in any browser. It is plain HTML, CSS and JS: no build step and no server. Fonts load from Google Fonts.

## What's here
| Path | What it is |
|---|---|
| `index.html` | Hub page linking all 20 screens |
| `01-dashboard.html` … `20-settings.html` | The screens |
| `DESIGN.md` | Design system: colours, light/dark tokens, type, components, sample data |
| `assets/styles.css`, `assets/app.js` | Shared styles, icons, sidebar/top bar, command palette (Ctrl+K), theme toggle |
| `guide/` | Plain-English guide per screen (start with `guide/00_Overview.md`), plus a glossary |
| `tools/SAMPLE_DATA_FACTS.md` | Canonical sample data shared by all screens |
| `tools/shot.sh` | Renders screenshots with headless Chrome into `_shots/` (git-ignored) |
| `_template.html` | Starter page for new screens |

## Screenshots
`_shots/` is not committed. To regenerate one, run `bash tools/shot.sh 01-dashboard.html light` (or `dark`). The guides and the hub thumbnails use these images, so generate them locally to see the pictures.
