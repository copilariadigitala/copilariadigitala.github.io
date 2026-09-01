# copilariadigitala.github.io

The public site of **Copilăria Digitală** — a Romanian awareness initiative in Oradea that
helps parents and teachers understand how screens affect children's cognitive, emotional and
language development. It grew out of a conference at the University of Oradea, organised by
prof. Ana-Felicia Codoban-Luca (CJRAE Bihor).

Live at <https://copilariadigitala.github.io/> — Romanian at `/`, English at `/en/`.

## Stack

Hand-written HTML, CSS and a little JavaScript, served straight from the repository root by
GitHub Pages. **No build step, no framework, no bundler, no package manager.** Edit a file,
commit, push — that is the whole deploy pipeline.

```
index.html                 angajament/       impactul-ecranelor/
conferinta/                resurse/          contact/
en/…                       same six pages in English
assets/site.css            one stylesheet, shared by all 12 pages
assets/site.js             one deferred script; every page works without it
assets/fonts/              self-hosted woff2 (no CDN, no third-party requests)
assets/img/                AVIF + JPEG, three widths each
```

## Working on it

Open the HTML file and edit it. To preview locally:

```sh
python3 -m http.server 8000    # then visit http://localhost:8000/
```

The header, nav and footer are duplicated by hand in each page. That is the honest cost of
having no build step, and at twelve pages it is cheaper than the alternative. If you change
the nav, change it in all twelve.

## Rules that are not negotiable

1. **No invented facts.** Every figure on the site traces to the conference source material
   or it does not get published. Numbers live inside a `.fact` block, which cannot render
   without a citation slot. Three figures from the source material are deliberately *absent*
   because no traceable study backs them — see `CLAUDE.md`.
2. **No third-party requests.** No CDN fonts, no analytics, no embeds on the critical path.
   The YouTube recording loads only after the visitor taps it.
3. **Works without JavaScript.** Navigation, the pledge form and the print layout must all
   function with scripting disabled.
4. **Romanian diacritics use comma-below** — `ș` (U+0219) and `ț` (U+021B), never the
   cedilla forms `ş`/`ţ`.
5. **No identifiable children in photographs.**

## Licence

The **code** in this repository is MIT-licensed — see [LICENSE](LICENSE).

The **text and photographs are not.** The conference paper, the pledge and the presentation
material are © prof. Ana-Felicia Codoban-Luca; the event photographs are © their
photographer. Quotations from Haidt, Cloud & Townsend, Chapman & Pellicane, Dobson, Siegel &
Payne Bryson and Ducanda are reproduced under quotation for the purpose of comment, with
their sources named. None of it is covered by the MIT licence, and none of it may be reused
without permission from its author.
