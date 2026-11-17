# CK-12 guide: designer usability review

Reviewed 17 November 2026. Scope: reading specifications, browsing categories, adding/editing properties, references and downloads. This is an expert review with browser checks, not research with human participants and not a fresh audit of the original Word documents.

## Main finding

The guide contains useful material, but its interaction model still reflects document extraction. A designer thinks in objects and styles: axis label, equation ray, hollow point, shaded region. The interface originally required them to assemble these from independent property/value rows. The reader then combined multiple settings into prose, making the same information difficult to inspect and reuse.

## Changes in this pass

- Added Text, Shape, Line/arrow, Spacing/canvas and Custom property groups in both editors. Related fields stay together when a newly grouped spec is saved and reopened.
- Text covers family, size, weight, style, color, opacity, leading, tracking, kerning, alignment, case, decoration, baseline, script position, paragraph spacing and placement. Basic fields appear first; other settings are under More settings.
- Shape covers fill type/color/opacity, gradient or pattern notes, stroke presence/color/width/opacity/alignment/pattern, dash/gap, cap/join/miter, corner radius, dimensions and overall opacity. Explicit no-fill/no-stroke choices suppress contradictory fields.
- Blank fields do not invent default rules. Colors and opacity receive validation. Custom fields remain available for unusual properties.
- Newly grouped properties have section headers in the spec table. Existing arbitrary rows and grade comparisons remain editable without a risky automatic data migration.
- Recognized font strings are presented as labeled family, size, color, opacity and style fields. Hollow-point strings separate fill color, stroke width and stroke color. Other clear size/color/opacity combinations are separated; ambiguous instructions remain intact. Original source values are preserved.
- Hex codes have a swatch, copy icon and keyboard-accessible copy action, including short hex codes. “10 Bold Italic” is preserved as a named style, not interpreted as a size or numeric font weight.
- Added category titles, on-page navigation and section headings for Graphs and several long Biology/Chemistry categories. Other multi-card categories have links to their cards. Bar graph example types have their own jump links.
- Expanded the desktop sidebar from 268 to 304 px, preserving the mobile navigation layout.
- Included image captions and added reference names in search. Searching “histogram” now finds the Bar Graph card.

## Remaining gaps, in priority order

| Priority | Observed gap | Designer impact | Next improvement |
|---|---|---|---|
| High | No automatic draft recovery or navigation guard in the active editors | A mistaken navigation can discard a long entry | Local draft recovery that excludes tokens, with a clear discard action |
| High | No rendered preview or concise before/after comparison before save | A designer cannot inspect the resulting card before publishing | Preview beside the editor and a lightweight change summary; no approval chain |
| High | Grade/case scope is mostly free text, and old rows use inconsistent labels | Similar-looking rules can apply to different grades or representations | Explicit grade/case fields and a consistent comparison model |
| High | Missing, inherited and not-applicable settings are not distinct states | An omitted stroke may mean unknown, inherited or no stroke | Add these states separately; never treat missing as approved |
| High | Legacy specs still contain compound strings and manually structured rows | Rendering improves readability, but editing old entries still requires interpreting source wording | Migrate reviewed entries into semantic fields, preserving stable IDs, exceptions and history |
| High | Graph variants are not fully modeled as independent records | A horizontal/double graph may be represented only by its screenshot | Give each documented variant a record with shared defaults, overrides and its own references |
| Medium | “Add to existing” can append overlapping groups; no reuse or duplicate detection | Slightly different names create near-duplicate rules | Reuse an existing text/shape style; flag matching names and scope before save |
| Medium | No ordered palette editor in the new grouped form | Colors can be entered, but roles and order are easy to lose | Palette rows with role, swatch, hex, move controls and usage notes |
| Medium | Image upload limit is 450 KB and files are embedded in the change registry | Large screenshots are inconvenient; every reader loads attachment data | Store assets separately, resize image previews, retain originals and lazy-load downloads |
| Medium | File links lack file-size/type metadata and Drive availability checks | Designers cannot tell what will download or whether teammates can open it | Show filename, type and size; provide an explicit link-check workflow |
| Medium | Search finds captions but does not highlight the exact image | Search gets the user to a large card, not necessarily the example | Stable example IDs, matched captions and direct example navigation |
| Medium | Many long rules share the same visual weight | Numeric settings compete with exception prose | Separate standard values, applicability and exceptions; keep references beneath their related setting |
| Medium | Change history is a GitHub view, not a card-level explanation | Finding what changed requires leaving the task | Small “History” action per card with date, author and before/after values |
| Medium | Individual GitHub tokens remain part of editor setup | This remains technical for a two-person design team | Evaluate a simple authenticated save service without adding an approval workflow |

## Intended information hierarchy

Subject → category → diagram variant → object/role → property group → individual value.

Example: Mathematics → Graphs → Grouped bar graph → Category labels → Typography → Font family, size, style, color. Keep applicable grades and exceptions next to this group. Place screenshots with the rule they demonstrate; use downloads for reusable source artwork.

Use comparison tables for repeated variants or grade differences. Use grouped labeled fields for a single object with several settings. Keep prose for exceptions and rationale, not as the container for multiple numeric settings.

## Verification and limits

- Browser preview rendered all 35 categories and 84 cards with matching card counts and no JavaScript errors during that sweep.
- Verified graph section links, the wider sidebar, inline group controls and no horizontal page overflow in the tested 390 px layouts.
- Simulated the full add/save/reopen/edit flow. Group settings and Grade 8 scope survived; a Drive URL and the exact uploaded .ai bytes were preserved. No test records were published.
- Actual clipboard reads confirmed copying #999999, #fff and #000; the last also used keyboard activation.
- Syntax checks cover contributor scripts and the reader's inline JavaScript. Presentation checks cover combined typography, hollow points and opacity.
- These checks do not establish full WCAG compliance, validate every external Drive permission, prove complete document coverage, or substitute for testing with the two designers.

## Suggested two-designer session

Ask each designer to find a Grade 7 hollow-point rule, copy its stroke color, find a horizontal bar example, download a font without leaving the guide, and draft a new graph type with text, shape, image and Illustrator references. Observe without instructions; record wrong turns, lost work and uncertainty. Review the resulting spec together before any real publication. Prioritize observed failures over decorative changes.

## First follow-up implementation

- Moved category subsection links into the active sidebar category, removed duplicate top-of-page navigation, and added a current-section indicator that follows scrolling.
- Added browser-local text drafts and restore/discard controls to both editors. Tokens and uploaded files are excluded. Drafts from an older published-data baseline cannot auto-restore over newer edits.
- Added exit warnings for reload/close and clicked navigation away from dirty editors. Draft recovery remains the fallback for browser history navigation.
- Added optional previews in both editors, without requiring a token or publishing. This is a content preview; a before/after diff remains future work.
- Browser checks verified restored name/font size, empty token after reload, draft discard, both previews, and sidebar scroll tracking. File reattachment is required after restoring a draft.

## Spec-table redesign following visual feedback

The nested value lists made parent-child relationships ambiguous. Recognized compound typography now uses one row per element with fixed Element / Font family / Style / Size / Color columns. Other settings use a separate bordered table with top-aligned row headers. Compound non-text fields use a consistent display order. Grade tables retain their comparison layout. Source values and search row keys are preserved. Missing cells mean not stated in that particular source row; they do not override related rules.

References: [IBM Carbon data-table guidance](https://www.carbondesignsystem.com/building-blocks/core/components/data-table/guidelines), emphasizing consistent table structure and sizing; [Google Material typography](https://m3.material.io/styles/typography/applying-type), organizing typography by purpose. These informed the presentation, not CK-12 artwork values.

Verification: all 416 standard property rows accounted for across 84 cards; clipboard copy verified; 390 px viewport has no page overflow and permits horizontal table scrolling.
