# AATF AI Workshop — Demo Assets

**FICTIONAL DEMO DATA — not real AATF information.**

Everything in this folder is invented dummy content created for a live AI workshop at AATF (African Agricultural Technology Foundation). AATF's real programme *names* are used for realism (TELA Maize, PBR cowpea, Striga control, cassava), but **all numbers, people, donors, quotes, and commitments are fictional**. Placeholder names such as "Dr. A. Example" and "Donor Foundation X" are used deliberately. Do not treat any figure here as real, and do not use this content in real AATF communications.

These files exist so a facilitator can point Claude (Cowork / Chat) at believable material during live demos.

## Files and their demo purpose

| File | What it is | Demo / exercise it powers |
|---|---|---|
| `sample-report.md` | ~900-word TELA Maize scale-up quarterly progress report (background, activities, results, challenges, next steps). | **Summarise & reformat.** Ask Claude to produce an executive summary, a one-page brief, or a slide outline from a long report. |
| `pipeline-data.csv` | 30-row fictional M&E / commercialization pipeline (opportunity, country, crop, stage, value, owner, dates, status). | **Data → insight.** Compute conversion rates, total pipeline value, group by country/crop/stage, flag at-risk deals. |
| `about-aatf-boilerplate.md` | ~250-word reusable "About AATF" description. | **Persistent context / Projects.** Load as standing context and reuse when drafting concept notes and communications. |
| `donor-brief.md` | ~200-word profile of fictional "Donor Foundation X" (themes, grant size, geography, quirks). | **Tailor to a funder.** Draft a concept note that respects the donor's constraints (2-page limit, gender table, plain language). |
| `meeting-transcript.md` | ~500-word messy RMSU planning-call transcript with tangents and buried actions. | **Extract minutes + action table.** Pull decisions and a who/what/when action list from raw conversation. |
| `README.md` | This index. | Orientation for facilitators. |

## Suggested combined demo

Chain the assets: load `about-aatf-boilerplate.md` as project context, pull results from `sample-report.md`, apply the constraints in `donor-brief.md`, and draft a concept note — then turn `meeting-transcript.md` into minutes that assign the follow-up actions.
