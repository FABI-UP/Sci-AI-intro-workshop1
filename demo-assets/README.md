# Working with AI as a Research Assistant — Demo Assets

**FICTIONAL DEMO DATA — not real research.**

Everything in this folder is invented dummy content created for a live AI workshop for biologists. "Sorghum leaf blight" is a fictional/composite disease system used purely for realism — **all numbers, people, sites, quotes, and findings are fictional**. Placeholder names such as "Dr. A. Example" and clearly-tagged "(fictional)" studies in the reading list are deliberate. Do not treat any figure here as real, and do not cite anything from `reading-list-summary.md` as if it were a real paper.

These files exist so a facilitator can point Claude (Cowork / Chat) at believable material during live demos.

## Files and their demo purpose

| File | What it is | Demo / exercise it powers |
|---|---|---|
| `sample-report.md` | ~800-word sorghum leaf blight trial quarterly progress report (background, activities, results, challenges, next steps). | **Summarise & reformat.** Ask Claude to produce a supervisor summary, a chart, or a plain-language brief from a long report. |
| `sample-results.csv` | 29-row fictional trial dataset (site, treatment, replicate, disease severity, yield). | **Data → insight.** Compute means, standard errors, percent difference from control — with visible working. |
| `about-the-lab-boilerplate.md` | ~200-word reusable "About the lab" description. | **Persistent context / Projects.** Load as standing context for the Literature Assistant Project. |
| `reading-list-summary.md` | Five clearly-fictional "papers" with an established/contested/missing synthesis. | **Literature synthesis.** Draft a synthesis paragraph that correctly keeps every caveat, not just the headline findings. |
| `meeting-transcript.md` | ~550-word messy lab-meeting transcript with tangents and buried actions. | **Extract minutes + action table.** Pull decisions and a who/what/when list from raw conversation — while keeping the caveats participants raised. |
| `README.md` | This index. | Orientation for facilitators. |

## Suggested combined demo

Chain the assets: load `about-the-lab-boilerplate.md` and `reading-list-summary.md` as Project context, pull results from `sample-report.md` and `sample-results.csv`, and draft a manuscript-section paragraph — then turn `meeting-transcript.md` into minutes that assign the follow-up actions. One story, all four rungs of the ladder.

## A note on the reading list

`reading-list-summary.md` is deliberately the riskiest file in this pack to hand to an AI carelessly: it's built to test whether a summary preserves caveats (an underpowered trial, an unvalidated scoring scale) or quietly drops them into confident-sounding claims. If a participant's synthesis loses "Study C's trial was underpowered," that's a live example of exactly the failure mode the afternoon's rigor session is about.
