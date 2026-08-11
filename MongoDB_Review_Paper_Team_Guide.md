# MongoDB Review Paper: Team Research and Writing Guide

This guide follows the exact 12-section structure in `MongoDB_Review_Paper_Skeleton.md`. It uses the team's chosen allocation:

| Team member | Assigned sections |
|---|---|
| **Shreesh** | 1. Introduction and 2. Review Methodology |
| **Jahnavi** | 3. Foundations and Evolution of MongoDB |
| **Dwarkesh** | 4. Architecture and Core Capabilities |
| **Harshitha** | 5. Data Modelling and Database Design and 6. Application Domains and Use Cases |
| **Nicky** | 7. Comparative Analysis through 12. Conclusion |

Nicky leads Sections 7–12, but does not develop them in isolation. Every member must supply relevant comparisons, trends, challenges, gaps, implications, and future directions found while reviewing their assigned literature.

## Planning Assumptions

- Minimum main-text target: approximately **33.5 pages**.
- Recommended main-text range: approximately **34–46 pages**.
- Page estimates assume A4 pages, standard margins, 12-point font, and 1.5 line spacing.
- Approximate density: 400–500 words per page, depending on tables and figures.
- Page targets exclude the title page, abstract, keywords, declarations, references, and appendices.
- Quality and evidence take priority over filling pages.
- The paper concerns MongoDB generally. It must not become a review of specific tools or commercial products such as Atlas or Compass.

## Section-by-Section Execution Plan

| Order and owner | Minimum length | Exact coverage required by the approved skeleton | What to search for | What must be written or produced | Evidence and quality checks |
|---|---:|---|---|---|---|
| **1. Introduction — Shreesh** | **2 pages; 900–1,300 words** | 1.1 Background and evolution of database systems; 1.2 Emergence of NoSQL databases; 1.3 Motivation for studying MongoDB; 1.4 Scope and objectives; 1.5 Research questions; 1.6 Organization of the paper | Search for the evolution of database systems, growth of semi-structured data, origins and categories of NoSQL databases, document-oriented databases, reasons organizations consider MongoDB, and recent scholarly reviews. Useful query patterns include `NoSQL database evolution review`, `document database systematic review`, and `MongoDB literature review`. | Move from the broad database context to MongoDB. Establish why the review is needed, what it covers and excludes, its objectives, research questions, and the sequence of sections. Provide 3–6 research questions that Sections 3–11 can answer. | Support background claims with citations. Do not explain all MongoDB features here. Confirm that the scope excludes product-specific discussion. Make sure every research question can be answered using reviewed literature. |
| **2. Review Methodology — Shreesh** | **2 pages; 800–1,200 words** | 2.1 Review design; 2.2 Literature sources and search strategy; 2.3 Search terms; 2.4 Inclusion and exclusion criteria; 2.5 Study-selection process; 2.6 Quality assessment; 2.7 Data extraction and synthesis; 2.8 Methodological limitations | Search for systematic, scoping, or structured review methods; PRISMA guidance if applicable; quality-assessment checklists; database-review search strategies; and synthesis methods. Decide which scholarly databases the team can actually access. | Record the actual review procedure rather than an idealized procedure. Include databases searched, full search strings, search dates, publication years, languages, study types, duplicate removal, screening stages, quality criteria, extraction fields, and synthesis method. Prepare a selection-flow diagram and criteria table if appropriate. | Keep a search log from day one. Never invent search counts after writing. Every included source must satisfy the stated criteria. Explain methodological limitations honestly. If the team calls it a systematic review, the procedure must be reproducible. |
| **3. Foundations and Evolution of MongoDB — Jahnavi** | **3 pages; 1,300–1,800 words** | 3.1 Historical development; 3.2 Document-oriented model; 3.3 BSON; 3.4 Databases, collections, and documents; 3.5 Flexible-schema design; 3.6 Embedded and referenced relationships; 3.7 Comparison with relational data modelling; 3.8 MongoDB within the NoSQL ecosystem | Search for MongoDB history, document-oriented data models, BSON, flexible schemas, embedding and referencing, relational-to-document modelling, and classifications of NoSQL systems. Use scholarly sources for analysis and authoritative documentation for precise definitions. | Explain concepts in the approved order. Use one small, consistent example document to illustrate BSON, collections, flexible fields, embedding, and references. Finish by positioning MongoDB among key-value, column-family, graph, and other document databases. | Clearly separate definition from evaluation. Do not claim that flexible schema means “no schema.” Avoid turning the section into a tutorial. Send Nicky any historical trends, fundamental limitations, or comparisons discovered. |
| **4. Architecture and Core Capabilities — Dwarkesh** | **5 pages; 2,300–3,200 words** | 4.1 Internal architecture; 4.2 Storage and storage-engine concepts; 4.3 CRUD; 4.4 Query processing; 4.5 Indexing; 4.6 Aggregation; 4.7 Replication; 4.8 Sharding; 4.9 Consistency and read/write behaviour; 4.10 Transactions and concurrency; 4.11 Security; 4.12 Backup, recovery, and fault tolerance; 4.13 Performance monitoring and optimization principles | Search each capability with terms such as `MongoDB architecture`, `MongoDB indexing performance study`, `MongoDB aggregation`, `MongoDB replication availability`, `MongoDB sharding scalability`, `MongoDB consistency transactions`, and `MongoDB security`. Look for empirical and independent studies in addition to authoritative technical definitions. | For each capability, explain what it is, how it works conceptually, why it matters, and its principal trade-offs. Connect replication, sharding, transactions, consistency, and failure behaviour. Prepare a general architecture figure and at least one feature–benefit–trade-off table. | Avoid command-by-command instructions and product interfaces. Distinguish architectural facts from benchmark findings. Check version and date because capabilities change. Send Nicky evidence concerning performance comparisons, operational challenges, technical gaps, and future improvements. |
| **5. Data Modelling and Database Design — Harshitha** | **3 pages; 1,300–1,800 words** | 5.1 Document-modelling principles; 5.2 Schema design patterns; 5.3 Embedding versus referencing; 5.4 Denormalization and duplication; 5.5 Schema validation; 5.6 Index-selection strategies; 5.7 Design for scalability and performance; 5.8 Relational migration; 5.9 Mistakes and anti-patterns | Search for workload-driven MongoDB schema design, embedding versus referencing, denormalization trade-offs, schema validation, indexing strategy, relational migration, schema evolution, and document-model anti-patterns. Prefer studies or substantial technical analyses that explain consequences, not only syntax. | Show that flexible schemas still require careful design. Relate each modelling decision to access patterns, update frequency, consistency needs, document growth, and performance. Include a decision table for embedding versus referencing and short good-versus-poor design examples. | Examples must remain conceptually correct and consistent. Discuss advantages and disadvantages, not only recommended patterns. Send Nicky modelling comparisons, recurring problems, migration challenges, research gaps, and possible optimization directions. |
| **6. Application Domains and Use Cases — Harshitha** | **3 pages; 1,300–1,800 words** | 6.1 Web and mobile; 6.2 Content and document management; 6.3 E-commerce; 6.4 IoT and sensors; 6.5 Real-time analytics; 6.6 Social networks; 6.7 Healthcare and science; 6.8 Finance and enterprise; 6.9 Geospatial applications; 6.10 Unsuitable conditions | Search for peer-reviewed case studies and empirical evaluations involving MongoDB in each listed domain. For every case, identify the data characteristics, workload, study method, findings, and limitations. Search explicitly for cases reporting weak results or unsuitable workloads. | Organize the discussion by the exact domain order. For each domain, explain the data need, why MongoDB was considered, what evidence reports, and what limitations remain. End with conditions in which MongoDB may not be suitable. Create a domain–requirement–benefit–limitation matrix. | Do not use marketing success stories as the main evidence. Do not merely list industries. Separate demonstrated outcomes from proposed use cases. Send Nicky all domain comparisons, emerging applications, failures, unresolved issues, and future needs. |
| **7. Comparative Analysis — Nicky** | **4 pages; 1,800–2,300 words** | 7.1 MongoDB versus relational systems; 7.2 MongoDB versus other NoSQL models; 7.3 Flexibility; 7.4 Query expressiveness; 7.5 Consistency and transactions; 7.6 Scalability and availability; 7.7 Workload performance; 7.8 Security and administration; 7.9 Operational complexity; 7.10 Selection criteria | Search for independent comparative studies, peer-reviewed benchmarks, database-selection frameworks, and evaluations of MongoDB against relational and other NoSQL systems. Record dataset, hardware, database versions, configuration, workload, metrics, and limitations for every benchmark. | Establish comparison criteria before presenting results. Compare like with like and group evidence by workload. Explain conflicting findings rather than selecting only favourable results. Finish with a conditional selection framework describing when MongoDB may or may not fit. | Never combine benchmark numbers from incompatible environments as though directly comparable. Avoid declaring a universal winner. Obtain technical checks from Dwarkesh, modelling context from Harshitha, and conceptual checks from Jahnavi. |
| **8. Research Trends and Emerging Themes — Nicky** | **3 pages; 1,300–1,800 words** | 8.1 Publication trends; 8.2 Distributed architectures; 8.3 Cloud-native and containers; 8.4 Edge and IoT; 8.5 Real-time and large-scale processing; 8.6 AI and machine learning; 8.7 Automated administration; 8.8 Security, privacy, and compliance; 8.9 Sustainability | Search the collected literature by year, topic, application area, and method. Add focused searches only where the corpus lacks evidence for an approved subsection. Look for recent primary studies on distributed, edge, AI-related, automated, security, privacy, and sustainability themes. | Classify the literature into the nine approved themes. Explain how research attention has changed over time and distinguish mature themes from emerging or speculative ones. A timeline or study-theme table is preferable to unsupported statements about popularity. | Publication counts must come from a documented search process. Do not label a topic a “trend” based on a few convenient articles. Harshitha should provide emerging application evidence; all members should flag dated versus recent themes. |
| **9. Challenges and Limitations — Nicky** | **3 pages; 1,300–1,800 words** | 9.1 Schema governance; 9.2 Redundancy; 9.3 Join-intensive workloads; 9.4 Consistency trade-offs; 9.5 Transactional costs; 9.6 Sharding complexity; 9.7 Indexing and degradation; 9.8 Resource consumption; 9.9 Security and misconfiguration; 9.10 Migration, interoperability, and dependence; 9.11 Benchmark reproducibility | Search for negative results, limitations, failures, security analyses, resource-use studies, migration studies, consistency and transaction costs, sharding and indexing problems, and critiques of existing benchmarks. Use evidence supplied by Sections 3–8. | For every challenge, use the sequence: condition, cause, observed or expected impact, supporting evidence, and possible mitigation. State when a limitation applies rather than presenting it as universal. A challenge–cause–impact–mitigation table is recommended. | Every challenge must be evidenced. Do not confuse implementation mistakes with inherent database limitations. Dwarkesh must review technical points; Harshitha must review modelling and application limitations; Shreesh must check alignment with the review questions. |
| **10. Research Gaps — Nicky leads; all members contribute** | **2 pages; 800–1,200 words** | 10.1 Standardized evaluation; 10.2 Reproducible independent benchmarks; 10.3 Longitudinal studies; 10.4 Domain evidence; 10.5 Security and privacy; 10.6 Sustainability; 10.7 Modelling and optimization | Primarily examine the limitations, future-work statements, contradictions, missing contexts, and methodological weaknesses in the already selected studies. Run additional searches only to confirm that an apparent gap is genuinely underexplored. | For each gap, state what is missing, what evidence reveals the absence, why it matters, and what kind of study could close it. Preserve the approved headings, but remove or qualify a proposed gap if the literature does not support it. | A topic is not automatically a research gap because it is interesting. Each member must submit at least one evidence-backed gap from their sections. Nicky synthesizes overlapping contributions and retains citations to the underlying studies. |
| **11. Future Research Directions — Nicky leads; all members contribute** | **2 pages; 800–1,200 words** | 11.1 Workload-specific benchmarking; 11.2 Intelligent schema and index optimization; 11.3 Distributed consistency; 11.4 Security by design; 11.5 Privacy-preserving management; 11.6 Interoperability and portability; 11.7 Edge deployments; 11.8 Energy efficiency; 11.9 Long-term empirical studies | Use the confirmed gaps in Section 10, limitations in Section 9, and explicit future-work proposals from primary studies. Search narrowly when a proposed direction requires validation or a recent technical context. | Map every direction to a documented gap. State the research objective, possible method or experiment, measurable outcome, and expected value. Use specific proposals instead of repeatedly saying “more research is required.” | Section 11 must not introduce directions unrelated to Sections 8–10. Every member supplies at least one feasible direction connected to their evidence. Nicky checks that proposals are distinct, realistic, and measurable. |
| **12. Conclusion — Nicky leads; all members contribute** | **1.5 pages; 600–900 words** | 12.1 Major findings; 12.2 Answers to research questions; 12.3 Theoretical and practical implications; 12.4 Final assessment; 12.5 Closing perspective | No broad new search is required. Use the completed synthesis, research questions, section summaries, gap analysis, and future directions. | Briefly restate the purpose, synthesize rather than repeat the main findings, answer every research question, explain implications, give a balanced assessment, and close with the broader research significance. | Introduce no new major evidence, comparison, feature, or unsupported claim. Shreesh verifies that every objective and research question from Section 1 is addressed. All members approve the final assessment. |

## Non-Isolated Contribution Requirements

Nicky retains leadership of Sections 7–12 under the chosen allocation. To keep those sections evidence-based and connected to the entire review, the other members must deliver the following handoff with their draft.

| Contributor | Mandatory handoff to Nicky |
|---|---|
| **Shreesh** | Final objectives and research questions; methodology constraints; review limitations; section-level evidence counts; points that the conclusion must answer |
| **Jahnavi** | Foundational comparisons; changes over time; conceptual limitations; terminology that must remain consistent; at least one supported research gap and future direction |
| **Dwarkesh** | Capability trade-offs; benchmark evidence; architecture and operational challenges; inconsistent findings; at least one technical gap and future direction |
| **Harshitha** | Modelling trade-offs; domain-specific results; unsuitable use cases; application trends; at least one modelling or application gap and future direction |
| **Nicky** | Integrate the handoffs, reconcile duplication or disagreement, retain evidence links, and circulate Sections 7–12 for cross-review |

## Recommended Working Style: Microsoft Word and OneDrive

The simplest suitable setup for this team is **Microsoft Word stored in one shared OneDrive folder**. A software project repository is not required. The team needs only Word for writing, one Excel workbook for research tracking, and one shared location for source PDFs and figures.

### Use Three Main Working Files

| Working item | Purpose | Editing rule |
|---|---|---|
| **MongoDB_Review_Master.docx** | Contains the approved title, all 12 headings and subheadings, combined text, tables, figures, declarations, and final references | Shreesh maintains Sections 1–6 and overall formatting; Nicky integrates Sections 7–12. Other members use comments or Track Changes after their section is merged. |
| **MongoDB_Research_Tracker.xlsx** | Contains the search log, screening decisions, evidence matrix, task status, gaps, and future-direction handoffs | All members update their assigned rows. Use filters and never delete another member's entries. |
| **MongoDB_References** | One shared reference library, preferably in Zotero; if the team cannot use a reference manager, maintain one verified reference table in the Excel workbook | Each member adds and verifies sources when they are selected. One person checks duplicates and citation style before submission. |

Each member may keep one temporary Word section file while drafting. These are working copies, not separate final papers:

- `Shreesh_Sections_01-02.docx`
- `Jahnavi_Section_03.docx`
- `Dwarkesh_Section_04.docx`
- `Harshitha_Sections_05-06.docx`
- `Nicky_Sections_07-12.docx`

### Simple Writing Cycle

| Step | Action | Person responsible |
|---:|---|---|
| **1** | Shreesh creates the Master Word file from the approved Markdown skeleton and applies Word's built-in **Heading 1**, **Heading 2**, and **Heading 3** styles. | Shreesh |
| **2** | Shreesh creates the Research Tracker with separate sheets for search logs, screening, evidence, work status, and handoffs to Sections 7–12. | Shreesh |
| **3** | Each member searches and records sources before drafting. Evidence is tagged with the exact subsection number, such as `4.8` or `9.6`. | All members |
| **4** | Each member writes only in their temporary section file, using the same headings already present in the Master file. | Section owner |
| **5** | The section owner performs a self-check and submits the section file together with evidence records, PDFs or links, and the required handoff to Nicky. | Section owner |
| **6** | One assigned teammate reviews the section using Word comments and Track Changes. The original writer accepts or discusses each change. | Assigned reviewer and section owner |
| **7** | Shreesh or Nicky merges the approved section into the Master file. Regular members should not simultaneously paste or restructure the Master file. | Shreesh or Nicky |
| **8** | Once Sections 3–9 are stable, the team confirms the gaps and future directions. Nicky then completes Sections 10–12 using the team handoffs. | Entire team; Nicky integrates |
| **9** | Shreesh checks structure, methodology, research-question alignment, Word styles, numbering, captions, and document consistency. | Shreesh |
| **10** | The full team reads the combined paper once from beginning to end and approves the submission version. | All members |

### Recommended Cross-Review Pairing

| Draft | Reviewer | Review focus |
|---|---|---|
| Shreesh: Sections 1–2 | Nicky | Whether the objectives, questions, and methodology support Sections 7–12 |
| Jahnavi: Section 3 | Dwarkesh | Technical definitions and transition into architecture |
| Dwarkesh: Section 4 | Jahnavi | Clarity, terminology, and whether explanations are understandable |
| Harshitha: Sections 5–6 | Nicky | Links to comparison, trends, challenges, and gaps |
| Nicky: Sections 7–12 | All members by their area | Evidence accuracy, balance, gap support, and whether the conclusion represents the complete paper |

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
| **1. Confirm scope** | Read the complete 12-section skeleton before searching. Highlight only the subsections assigned to you and note what belongs elsewhere. | A one-page personal checklist containing the exact subsection numbers and titles |
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
- Section 3 defines concepts, Section 4 explains capabilities, Section 5 addresses design, and Section 7 performs comparison.
- Section 8 reports trends, Section 9 evaluates challenges, Section 10 establishes gaps, and Section 11 responds to those gaps.
- Every table and figure is introduced, interpreted, captioned, numbered, and sourced.
- Citation style, spelling convention, abbreviations, tense, and formatting are uniform.
- Strong claims are qualified according to workload, version, dataset, or context.
- No section drifts into a review of Atlas, Compass, or another individual MongoDB tool.
- The conclusion answers the questions from the introduction without adding major new material.

## Short Plan for Responsible Use of LLMs and AI Research Platforms

AI platforms may assist the workflow, but they must not replace reading, verification, synthesis, or authorship. Follow institutional and target-journal policies regarding AI use and disclosure.

| Step | Appropriate use of AI | Mandatory human control |
|---:|---|---|
| **1. Scope prompts** | Give the AI the full 12-heading skeleton and ask it to identify whether a proposed idea belongs within a specific subsection. | Reject suggestions outside the approved scope. Never allow the AI to silently create new main sections. |
| **2. Search preparation** | Ask for synonyms, Boolean query variants, and possible academic terminology for one subsection at a time. | Run and document the searches yourselves. Do not report an AI-generated search process as the actual methodology. |
| **3. Source discovery** | Use tools such as Perplexity to locate possible primary studies or DOI links. | Open the original source, verify the authors, title, year, DOI, venue, and claim. Cite the original source, never the AI answer. |
| **4. Difficult concepts** | Ask GPT or another model to explain an unfamiliar concept or suggest questions to consider while reading. | Confirm the explanation against credible sources before including it. |
| **5. Evidence organization** | Provide your own verified notes and ask the AI to group them under the exact approved subsection numbers. | Check every placement and preserve links to the original evidence. Do not upload confidential or restricted material. |
| **6. Synthesis support** | Ask the AI to identify agreements, contradictions, missing variables, or possible comparison dimensions within supplied notes. | Read the cited studies and decide whether the synthesis is justified. AI output is a suggestion, not evidence. |
| **7. Draft review** | Ask for feedback on clarity, repetition, transitions, logical flow, or whether a subsection answers its stated purpose. | Write and revise the final prose yourselves. Retain technical meaning and citations. |
| **8. Boundary check** | Ask the AI to map every paragraph to one of the 12 headings and flag paragraphs that do not fit. | Move, rewrite, or remove material only after team review. |
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
