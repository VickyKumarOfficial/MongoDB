# MongoDB Review Paper: Team Research and Writing Guide

This guide follows the shortened 9-section structure in `MongoDB_Review_Paper_Skeleton.md`. It uses the team's chosen allocation:

| Team member | Assigned sections |
|---|---|
| **Shreesh** | 1. Introduction and 2. Review Methodology |
| **Jahnavi** | 3. Foundations of MongoDB |
| **Dwarkesh** | 4. Architecture and Core Capabilities |
| **Harshitha** | 5. Data Modelling and Applications |
| **Nicky** | 6. Comparative Analysis through 9. Conclusion |

Nicky leads Sections 6–9, but does not develop them in isolation. Every member must supply relevant comparisons, trends, challenges, gaps, implications, and future directions found while reviewing their assigned literature.

## Planning Assumptions

- Minimum main-text target: approximately **20 pages**.
- Recommended main-text range: approximately **20–27 pages**.
- Page estimates assume A4 pages, standard margins, 12-point font, and 1.5 line spacing.
- Approximate density: 400–500 words per page, depending on tables and figures.
- Page targets exclude the title page, abstract, keywords, declarations, references, and appendices.
- Quality and evidence take priority over filling pages.
- The paper concerns MongoDB generally. It must not become a review of specific tools or commercial products such as Atlas or Compass.

## Section-by-Section Execution Plan

| Order and owner | Minimum length | Exact coverage required by the approved skeleton | What to search for | What must be written or produced | Evidence and quality checks |
|---|---:|---|---|---|---|
| **1. Introduction — Shreesh** | **1.5 pages; 650–900 words** | 1.1 Background and evolution; 1.2 Emergence of NoSQL; 1.3 Purpose, scope, research questions, and organization | Search for database evolution, NoSQL emergence, document databases, and the motivation for studying MongoDB. | Move from database history to NoSQL and then state the review purpose, scope, questions, and organization. Use only the evidence needed for the transition. | Avoid detailed MongoDB features in the introduction. |
| **2. Review Methodology — Shreesh** | **1.5 pages; 600–900 words** | 2.1 Review design and search strategy; 2.2 Selection, quality assessment, synthesis, and limitations | Record the actual databases, queries, dates, screening steps, quality criteria, extraction fields, and limitations. | Describe a reproducible but concise review process. | Do not claim a systematic review unless the recorded process supports that label. |
| **3. Foundations of MongoDB — Jahnavi** | **2.5 pages; 1,050–1,400 words** | 3.1 History and document model; 3.2 BSON, documents, collections, and flexible schemas; 3.3 Embedding, referencing, relational comparison, and NoSQL position | Search for MongoDB history, document models, BSON, schema flexibility, embedding, referencing, and NoSQL classifications. | Explain the core model with one consistent example and a short relational comparison. | Avoid tutorial-style commands and repeated definitions. |
| **4. Architecture and Core Capabilities — Dwarkesh** | **3.5 pages; 1,450–1,900 words** | 4.1 Architecture, storage, and query processing; 4.2 Indexing, aggregation, and transactions; 4.3 Replication, sharding, and consistency; 4.4 Security, recovery, and performance | Search for independent technical studies and authoritative definitions covering the grouped capabilities. | Explain how the grouped capabilities work and their main trade-offs. | Separate architectural facts from benchmark results and keep version details visible. |
| **5. Data Modelling and Applications — Harshitha** | **3.5 pages; 1,450–1,900 words** | 5.1 Document modelling and schema choices; 5.2 Embedding, referencing, validation, and indexing; 5.3 Application domains and unsuitable workloads | Search for modelling trade-offs, migration, schema evolution, and representative empirical application studies. | Link modelling choices to workload requirements, then summarize only the strongest application evidence. | Do not list industries without explaining data characteristics and limitations. |
| **6. Comparative Analysis — Nicky** | **2.5 pages; 1,050–1,400 words** | 6.1 MongoDB compared with relational systems; 6.2 MongoDB compared with other NoSQL models; 6.3 Selection criteria and workload trade-offs | Search for independent comparisons and benchmarks. Record workload, configuration, metrics, and limitations. | Compare systems under defined criteria and explain conflicting results. | Do not combine incompatible benchmark results or declare a universal winner. |
| **7. Trends, Challenges, and Research Gaps — Nicky** | **2.5 pages; 1,050–1,400 words** | 7.1 Emerging trends; 7.2 Technical, operational, and security challenges; 7.3 Evidence gaps | Use the collected literature to identify mature themes, limitations, contradictions, and missing evidence. | Link each challenge or gap to evidence and state when it applies. | Do not call a topic a trend or gap without support from the reviewed literature. |
| **8. Future Research Directions — Nicky** | **1.5 pages; 600–900 words** | 8.1 Benchmarking and intelligent optimisation; 8.2 Distributed consistency, security, and privacy; 8.3 Interoperability, edge deployment, and energy efficiency | Use confirmed gaps and explicit future-work statements from the selected studies. | Give specific, measurable directions linked to the identified gaps. | Do not introduce directions unrelated to Sections 3–7. |
| **9. Conclusion — Nicky** | **1 page; 400–600 words** | 9.1 Major findings and research-question answers; 9.2 Implications and final assessment | Use the completed synthesis; no broad new search is required. | Summarize the balanced assessment without introducing new evidence. | Shreesh checks that every objective and research question is addressed. |

## Non-Isolated Contribution Requirements

Nicky retains leadership of Sections 6–9 under the chosen allocation. To keep those sections evidence-based and connected to the entire review, the other members must deliver the following handoff with their draft.

| Contributor | Mandatory handoff to Nicky |
|---|---|
| **Shreesh** | Final objectives and research questions; methodology constraints; review limitations; section-level evidence counts; points that the conclusion must answer |
| **Jahnavi** | Foundational comparisons; changes over time; conceptual limitations; terminology that must remain consistent; at least one supported research gap and future direction |
| **Dwarkesh** | Capability trade-offs; benchmark evidence; architecture and operational challenges; inconsistent findings; at least one technical gap and future direction |
| **Harshitha** | Modelling trade-offs; domain-specific results; unsuitable use cases; application trends; at least one modelling or application gap and future direction |
| **Nicky** | Integrate the handoffs, reconcile duplication or disagreement, retain evidence links, and circulate Sections 6–9 for cross-review |

## Recommended Working Style: Microsoft Word and OneDrive

The simplest suitable setup for this team is **Microsoft Word stored in one shared OneDrive folder**. A software project repository is not required. The team needs only Word for writing, one Excel workbook for research tracking, and one shared location for source PDFs and figures.

### Use Three Main Working Files

| Working item | Purpose | Editing rule |
|---|---|---|
| **MongoDB_Review_Master.docx** | Contains the approved title, all 9 headings and subheadings, combined text, tables, figures, declarations, and final references | Shreesh maintains Sections 1–5 and overall formatting; Nicky integrates Sections 6–9. Other members use comments or Track Changes after their section is merged. |
| **MongoDB_Research_Tracker.xlsx** | Contains the search log, screening decisions, evidence matrix, task status, gaps, and future-direction handoffs | All members update their assigned rows. Use filters and never delete another member's entries. |
| **MongoDB_References** | One shared reference library, preferably in Zotero; if the team cannot use a reference manager, maintain one verified reference table in the Excel workbook | Each member adds and verifies sources when they are selected. One person checks duplicates and citation style before submission. |

Each member may keep one temporary Word section file while drafting. These are working copies, not separate final papers:

- `Shreesh_Sections_01-02.docx`
- `Jahnavi_Section_03.docx`
- `Dwarkesh_Section_04.docx`
- `Harshitha_Section_05.docx`
- `Nicky_Sections_06-09.docx`

### Simple Writing Cycle

| Step | Action | Person responsible |
|---:|---|---|
| **1** | Shreesh creates the Master Word file from the approved Markdown skeleton and applies Word's built-in **Heading 1**, **Heading 2**, and **Heading 3** styles. | Shreesh |
| **2** | Shreesh creates the Research Tracker with separate sheets for search logs, screening, evidence, work status, and handoffs to Sections 6–9. | Shreesh |
| **3** | Each member searches and records sources before drafting. Evidence is tagged with the exact subsection number, such as `4.8` or `9.6`. | All members |
| **4** | Each member writes only in their temporary section file, using the same headings already present in the Master file. | Section owner |
| **5** | The section owner performs a self-check and submits the section file together with evidence records, PDFs or links, and the required handoff to Nicky. | Section owner |
| **6** | One assigned teammate reviews the section using Word comments and Track Changes. The original writer accepts or discusses each change. | Assigned reviewer and section owner |
| **7** | Shreesh or Nicky merges the approved section into the Master file. Regular members should not simultaneously paste or restructure the Master file. | Shreesh or Nicky |
| **8** | Once Sections 3–7 are stable, the team confirms the gaps and future directions. Nicky then completes Sections 8–9 using the team handoffs. | Entire team; Nicky integrates |
| **9** | Shreesh checks structure, methodology, research-question alignment, Word styles, numbering, captions, and document consistency. | Shreesh |
| **10** | The full team reads the combined paper once from beginning to end and approves the submission version. | All members |

### Recommended Cross-Review Pairing

| Draft | Reviewer | Review focus |
|---|---|---|
| Shreesh: Sections 1–2 | Nicky | Whether the objectives, questions, and methodology support Sections 6–9 |
| Jahnavi: Section 3 | Dwarkesh | Technical definitions and transition into architecture |
| Dwarkesh: Section 4 | Jahnavi | Clarity, terminology, and whether explanations are understandable |
| Harshitha: Section 5 | Nicky | Links to comparison, trends, challenges, and gaps |
| Nicky: Sections 6–9 | All members by their area | Evidence accuracy, balance, gap support, and whether the conclusion represents the complete paper |

### Simple Word Rules

- Use Word's built-in heading styles; do not format headings manually with only bold text.
- Use one font, margin setting, spacing rule, spelling convention, and citation style throughout.
- Turn on Track Changes only during review, not during initial drafting.
- Use comments for questions; do not place reviewer notes inside the paper text.
- Insert captions through Word for every table and figure so numbering can update automatically.
- Use cross-references for table and figure numbers where practical.
- Do not manually type the table of contents; generate it from heading styles.
- Do not copy a reference list from each member's draft into the Master file. Maintain one shared library and generate one final list.
- At the end of each working session, leave a short comment in the tracker stating what was completed and what remains.
- Export a dated PDF at major milestones so the team can check the complete layout and retain a stable snapshot.

## Mandatory Workflow for Every Member

| Stage | Must-do action | Required result |
|---:|---|---|
| **1. Confirm scope** | Read the complete 9-section skeleton before searching. Highlight only the subsections assigned to you and note what belongs elsewhere. | A one-page personal checklist containing the exact subsection numbers and titles |
| **2. Prepare search terms** | Create keyword groups for the database, topic, comparison or outcome, and study type. Combine synonyms with `OR` and concepts with `AND`. | Saved search strings that can be reported in Section 2 |
| **3. Search consistently** | Use the scholarly sources agreed by the team. Record the platform, complete query, filters, date searched, and number of results. | Search log; never rely only on ordinary web results |
| **4. Screen sources** | Apply the shared inclusion and exclusion criteria to titles, abstracts, and full texts. Record a reason whenever a full-text source is excluded. | Transparent included-source list and exclusion log |
| **5. Check source quality** | Confirm authorship, venue, publication date, research method, dataset, version or environment, limitations, and possible conflicts of interest. | Quality score or checklist for every included study |
| **6. Extract evidence** | Capture findings in the shared evidence matrix using your own concise summary. Record the exact page, table, or section supporting the note. | Traceable evidence notes, not copied paragraphs |
| **7. Group by subsection** | Tag each evidence record with one primary section and subsection. Add secondary tags only when the same study legitimately informs another section. | Evidence arranged in the same order as the skeleton |
| **8. Synthesize** | Group studies by agreement, disagreement, method, workload, context, or limitation. Compare several sources in each analytical discussion. | Thematic synthesis rather than one-paper-at-a-time summaries |
| **9. Draft** | Write definition or context, evidence, comparison, critical interpretation, implication, and transition. Insert citations while drafting. | Complete section draft within its page range |
| **10. Prepare visuals** | Use a table or figure only when it clarifies architecture, comparison, study selection, applications, gaps, or trends. Add a caption and source note. | Original or properly attributed visuals that are discussed in the text |
| **11. Self-check** | Verify every factual claim and citation; remove repetition; check subsection coverage; confirm scope boundaries; inspect tables and figure references. | Completed personal quality checklist |
| **12. Handoff and cross-review** | Submit the draft, evidence matrix, source files or links, section summary, limitations, gaps, and future directions. Review another member’s section. | Reproducible work package and documented review comments |

## Shared Evidence Matrix

Maintain one shared spreadsheet or table. Use one row per study, adding rows if a study contains several materially different findings.

| Field | What to record |
|---|---|
| Study ID | Short stable label, such as `S001` |
| Full reference | Complete reference in the agreed citation style |
| DOI or stable URL | Direct identifier or publisher link |
| Source type | Journal article, conference paper, book, thesis, standard, or authoritative documentation |
| Year and venue | Publication year and journal, conference, or publisher |
| Section tag | Exact number, such as `4.8` or `9.6` |
| Research purpose | What the study tried to determine |
| Method and setting | Experiment, benchmark, case study, survey, review, dataset, workload, hardware, database version, and configuration where relevant |
| Main finding | Concise paraphrase of the result |
| Limitation | Limitation reported by the authors or identified cautiously by the team |
| Useful comparison | What system, method, workload, or context was compared |
| Gap or future direction | Evidence-backed unresolved issue |
| Exact evidence location | Page, section, table, or figure number |
| Quality decision | Include, exclude, or retain with caution, with reason |
| Assigned member | Person responsible for verifying and using the evidence |

## Simple Shared Folder

Create one folder in OneDrive and share it with all five members. Keep only these folders:

```text
MongoDB Review Paper/
├── 01_Master/
├── 02_Section_Drafts/
├── 03_Research_Tracker/
├── 04_Sources/
├── 05_Figures/
└── 06_Old_Versions/
```

- Keep `MongoDB_Review_Master.docx` in `01_Master`.
- Keep the five temporary member drafts in `02_Section_Drafts`.
- Keep the shared Excel workbook in `03_Research_Tracker`.
- Store PDFs in `04_Sources`, preferably named with the first author and year.
- Keep only final or actively edited visuals in `05_Figures`.
- Move replaced files into `06_Old_Versions`; do not delete them during active work.
- Use dates for major snapshots, for example `MongoDB_Review_Master_2026-08-20.docx`.
- Avoid confusing names such as `final2`, `new-final`, or `latest-final-corrected`.

## Source Selection Rules

| Prefer | Use carefully | Avoid as evidence |
|---|---|---|
| Peer-reviewed journal articles; strong conference papers; academic books; standards; theses where valuable; authoritative technical documentation for definitions | Preprints; industry reports; vendor benchmarks; technical blogs written by identifiable experts; older studies using obsolete versions | Anonymous blogs; copied tutorials; promotional claims; unsourced statistics; search-result snippets; AI-generated citations; discussion posts presented as established evidence |

- Use recent work for current capabilities and emerging trends, while retaining older foundational studies where historically necessary.
- Use documentation to establish how a capability is defined, but use independent studies to evaluate performance, limitations, or superiority.
- Record the software version and experimental environment whenever a study reports technical results.
- Do not impose an arbitrary citation quota on every paragraph. Each substantive claim must have adequate, relevant support.

## Draft Integration Checklist

Before combining the sections, the team must check:

- Heading numbers and wording match the approved skeleton exactly.
- Terminology is consistent, particularly for document, collection, BSON, embedding, referencing, replication, sharding, consistency, transaction, and schema.
- Sections do not repeat long explanations already presented earlier.
- Section 3 defines concepts, Section 4 explains capabilities, Section 5 addresses design and applications, and Section 6 performs comparison.
- Section 7 reports trends, challenges, and gaps; Section 8 responds with future directions.
- Every table and figure is introduced, interpreted, captioned, numbered, and sourced.
- Citation style, spelling convention, abbreviations, tense, and formatting are uniform.
- Strong claims are qualified according to workload, version, dataset, or context.
- No section drifts into a review of Atlas, Compass, or another individual MongoDB tool.
- The conclusion answers the questions from the introduction without adding major new material.

## Short Plan for Responsible Use of LLMs and AI Research Platforms

AI platforms may assist the workflow, but they must not replace reading, verification, synthesis, or authorship. Follow institutional and target-journal policies regarding AI use and disclosure.

| Step | Appropriate use of AI | Mandatory human control |
|---:|---|---|
| **1. Scope prompts** | Give the AI the full 9-heading skeleton and ask it to identify whether a proposed idea belongs within a specific subsection. | Reject suggestions outside the approved scope. Never allow the AI to silently create new main sections. |
| **2. Search preparation** | Ask for synonyms, Boolean query variants, and possible academic terminology for one subsection at a time. | Run and document the searches yourselves. Do not report an AI-generated search process as the actual methodology. |
| **3. Source discovery** | Use tools such as Perplexity to locate possible primary studies or DOI links. | Open the original source, verify the authors, title, year, DOI, venue, and claim. Cite the original source, never the AI answer. |
| **4. Difficult concepts** | Ask GPT or another model to explain an unfamiliar concept or suggest questions to consider while reading. | Confirm the explanation against credible sources before including it. |
| **5. Evidence organization** | Provide your own verified notes and ask the AI to group them under the exact approved subsection numbers. | Check every placement and preserve links to the original evidence. Do not upload confidential or restricted material. |
| **6. Synthesis support** | Ask the AI to identify agreements, contradictions, missing variables, or possible comparison dimensions within supplied notes. | Read the cited studies and decide whether the synthesis is justified. AI output is a suggestion, not evidence. |
| **7. Draft review** | Ask for feedback on clarity, repetition, transitions, logical flow, or whether a subsection answers its stated purpose. | Write and revise the final prose yourselves. Retain technical meaning and citations. |
| **8. Boundary check** | Ask the AI to map every paragraph to one of the 9 headings and flag paragraphs that do not fit. | Move, rewrite, or remove material only after team review. |
| **9. Citation audit** | Ask the AI to flag claims that appear to need citations or entries that have inconsistent formatting. | Verify every reference manually or with a reference manager. Never accept invented citations, quotations, page numbers, or DOIs. |
| **10. Final integrity check** | Ask for a checklist-based review of structure, tone, duplication, and unanswered research questions. | Perform the final factual, originality, authorship, and policy review as a team. Disclose AI use if required. |

### Reusable AI Prompt Pattern

Use one subsection at a time and provide verified material rather than requesting an unsupported finished section.

```text
We are preparing a review paper titled “[working title]”.

Approved subsection: [number and exact heading]
Purpose of this subsection: [one or two sentences]
Scope boundary: Discuss MongoDB generally; do not focus on Atlas, Compass, or another individual tool.
Verified evidence notes: [paste notes with Study IDs]
Research questions connected to this subsection: [list]

Task: Organize these notes into a logical synthesis outline. Identify agreements,
contradictions, limitations, and missing evidence. Keep every point within the
approved subsection. Do not invent facts or references, and mark any claim that
cannot be supported by the supplied evidence.
```

### Non-Negotiable AI Rules

- Never submit unverified AI-generated prose as the paper. 
- AI generated content is allowed but it must be verified with the Human twice and modify if needed.
- Never cite GPT, Perplexity, or an AI summary in place of the original scholarly source unless the research specifically studies that AI system.
- Never assume that a quotation, statistic, DOI, author name, or page number generated by AI is correct.
- Keep the approved headings visible in every AI-assisted task.
- Work subsection by subsection; do not request the entire paper in one prompt.
- Use AI to question and organize the team's reasoning, not to hide the absence of reading.
- Preserve a brief record of material AI assistance if institutional or journal disclosure is required.
- Ensure the final prose reflects the team's own understanding, judgment, and consistent scholarly voice.
