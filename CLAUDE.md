# CLAUDE.md — copilariadigitala.github.io

The public site of Copilăria Digitală. Romanian at `/`, English at `/en/`.

## Stack

Hand-written HTML/CSS/JS at the repository root, served by GitHub Pages from `main`.
**There is no build step, no framework, no bundler and no `package.json`.** Do not add one.
Do not introduce a CSS framework, a JS framework, or a CDN link.

## The rule that matters most: no invented facts

This site exists because a previous draft of its content model was audited and found to
contain eight fabrications. Every figure published here traces to the conference source
material in `~/Downloads/copilariadigitala/` (two decks, the paper
`COPILĂRIA DIGITALĂ - impactul...docx`, and `ANGAJAMENTUL PĂRINȚILOR CURAJOȘI.docx`).

**Structural enforcement:** numbers live inside a `.fact` block, and `.fact` renders a
citation slot it cannot do without. An unconfirmed figure gets `.fact--unsourced` and a
visible "sursă neconfirmată" label. Do not print a number outside a `.fact`.

**Figures deliberately held back.** These appear in the source material but carry no study
title, year or authors anywhere in it. They must appear **nowhere** on the site until a
traceable source exists:

| Figure | Why it is off the site |
|--------|------------------------|
| Romania 1st of 40 states, WHO problematic-social-media study | No study title, year or authors in the corpus |
| 22% of Romanian children aged 11–15 with withdrawal symptoms | Same |
| 22,000 children registered with mental disorders (INSP) | Cited to INSP but no publication is named |
| 95% rise in neurodevelopmental disorders | No source of any kind |

The UNICEF link in the bibliography is a footnote to one paragraph. It is **not** a source
for the WHO ranking or the INSP number, and must never be positioned as if it were.

Two further standing corrections:

- Haidt's percentages are always introduced as **"din 2010 până în 2024, potrivit lui
  Haidt"** — never "până în prezent", which silently stretches his window every year.
- Cite **only** the Romanian editions that appear in the bibliography. On `/en/`, keep the
  Romanian title and add a plain-language gloss. Never invent an English edition.

## Other standing rules

- **No third-party requests.** Fonts are self-hosted `woff2`. The YouTube recording sits
  behind a click-to-load facade.
- **Works without JavaScript.** Nav, pledge form and print layout must all still work.
- **Comma-below diacritics only** — `ș` U+0219, `ț` U+021B. Never `ş` U+015F, `ţ` U+0163.
  Check with `rg -c 'ş|ţ' *.html **/*.html` — it must return nothing.
- **No identifiable children in photographs.** Event photos `-62` and `-73` are excluded for
  this reason and must not be added.
- **The pledge is a personal commitment, not a research finding.** The commitment to withhold
  a smartphone until 16 has no study attached in the source material and must never be
  presented as if it did.
- **The pledge form stays in the browser.** `localStorage` only. Nothing is transmitted,
  nothing is collected. If that ever changes, the privacy note must change with it.

## Budget

The homepage's first view must stay under **150 KB** including CSS, JS, fonts and the hero
image. Check it, do not estimate it:

```sh
curl -so /dev/null -w '%{size_download}\n' https://copilariadigitala.github.io/
```

## Workflow

Umbrella rules apply (`~/Documents/CLAUDE.md`): work in a worktree under `.worktrees/`,
branch as `<type>/<description>`, conventional commits, prefer `git merge main` over rebase.

## Open items for the owner

Marked as placeholders on the site, not blockers: contact e-mail/phone/address, the legal
entity behind "noi", a logo, a high-resolution key visual, the confirmed partner list, the
conference date (25 March 2026 comes from photo EXIF, not a document), GDPR sign-off for the
photographs, which pledge wording is canonical (the `.docx` is used; deck slide 11 differs),
and the YouTube URL for the recording.
