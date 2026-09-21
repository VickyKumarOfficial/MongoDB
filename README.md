# MongoDB Review Paper — Research Workflow

This project uses two complementary note collections. They must remain linked by the same Study IDs, but they have different owners and purposes.

## Files maintained manually by the team

### `vicky/key_findings/`

Team members maintain the content archive for each section here.

For every source, record:

- Study ID
- Title, author, year, venue, DOI, and source link
- Relevant abstract, introduction, conclusion, or section content
- Short source excerpts when needed for checking
- The source's relevance to the assigned subsection

Keep the wording and collected source material available for later drafting. Do not replace useful source content with only a one-line summary. Team members remain responsible for deciding what content belongs in their section.

## Files maintained by AI

### `vicky/research_notes&source_evaluation/`

AI maintains the evaluation and verification record here.

For every searched or screened source, AI should track:

- Whether the source is a discovery source, selected source, pending source, or excluded source
- Author, year, venue, source type, DOI, and stable URL
- Authorship, publisher, venue, and publication-quality checks
- Whether the abstract or full text was accessible
- Which claims the source can support
- Exact page, section, table, or abstract location
- Limitations, possible bias, and missing information
- Whether a finding is ready for evidence use
- Study-ID and Evidence-ID consistency
- Primary sources that must be located when a secondary source makes an unsupported claim

AI must not promote a source to final evidence when only an unverified summary, search result, vendor claim, or inaccessible abstract is available. Such sources should remain marked as pending or limited.

## Standard workflow

1. A team member searches for a source and records its basic details in the project tracking record.
2. The team member adds the useful source content to the appropriate `key_findings/section_*.md` file.
3. The team member shares the source link, Study ID, and access status with AI.
4. AI checks the source, updates the matching `research_notes&source_evaluation/section_*.md` file, and records limitations or verification needs.
5. The team member and AI use the same Study ID when connecting source content with evaluated evidence.
6. Only verified, relevant findings should be used in the final paper draft.

## Rules for all contributors and AI tools

- Do not invent authors, dates, venues, DOIs, pages, results, or quotations.
- Distinguish clearly between full-text evidence and abstract-only evidence.
- Treat vendor articles, search snippets, repositories, and secondary summaries as limited sources unless their original claims are verified.
- Preserve source links and exact evidence locations.
- Do not delete earlier source content merely because a newer source is found.
- Keep discovery, screening, evidence extraction, and manuscript writing as separate stages.
