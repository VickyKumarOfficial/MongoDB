# Section 4.1 source evaluation

Section: 4.1, Architecture, storage, and query processing

## Purpose of this note

This file records the source-screening decision, verification status, claims the source can support, and limitations that must remain visible during drafting. The companion `key_findings/sec 4.1.md` holds the organized section-level findings. No Study ID is assigned here, per the current instruction.

## Selected source: First Past the Post: Evaluating Query Optimization in MongoDB

- **Authors:** Dawei Tao, Enqi Liu, Sidath Randeni Kadupitige, Michael Cahill, Alan Fekete, and Uwe Röhm
- **Year:** 2024
- **Venue:** 35th Australasian Database Conference (ADC 2024)
- **Source type:** Peer-reviewed conference paper; the copy reviewed is an arXiv preprint
- **arXiv record:** https://arxiv.org/abs/2409.16544
- **Full text:** Accessible from the arXiv PDF
- **Screening decision:** Selected for query-processing and query-optimizer evidence in Section 4.1
- **Venue check:** The paper appears in the ADC 2024 accepted-paper listing: https://adc-conference.github.io/2024/program/accepted-papers
- **DOI:** Not recorded in the arXiv record checked; verify against the final proceedings before formatting the bibliography.

## Claims this source can support

- General context on query optimization and execution plans: Section 2.1.
- MongoDB’s document and query-model context, including BSON queries, indexes, and aggregation: Sections 2.6–2.7.
- The paper’s account of query submission, parsing, query shapes, candidate plans, execution, and caching: Section 2.8 and Figure 1.
- The paper’s explanation of the FPTP plan-selection mechanism: Section 2.9 and Figure 2.
- Experimental observations about index-scan versus collection-scan selection in MongoDB 7.0.1: Section 4, especially 4.1–4.4.
- The authors’ source-code-based discussion of collection-scan candidate generation: Section 5.

## Exact evidence locations

- **Section 2.1, PDF p. 1:** general query-optimization architecture and execution-plan concepts.
- **Sections 2.6–2.7, PDF pp. 2–3:** MongoDB document and query model context.
- **Section 2.8, PDF pp. 3–4; Figure 1, PDF p. 3:** query-processing workflow, candidate execution plans, storage access, and plan caching.
- **Section 2.9, PDF p. 4; Figure 2:** FPTP candidate-plan evaluation and scoring.
- **Section 4.1, PDF p. 7; Sections 4.2–4.4, PDF pp. 8–9:** experimental plan choices and evaluation results.
- **Section 5, PDF pp. 9–11:** source-code investigation and proposed explanation of the observed collection-scan behavior.

## Verification and limitations

- The full paper passages in Sections 2.1, 2.6–2.9, 4.1, and 5 were checked against the arXiv PDF. Detailed source text is now retained in the companion key-findings file, with section and PDF-page locators. Line wrapping and extraction artifacts were cleaned; summaries and interpretation are labeled separately from the source text.
- The venue listing was checked against the ADC 2024 accepted-paper page. Final proceedings metadata and DOI remain to be verified before bibliography entry.
- The study tests MongoDB 7.0.1. Its findings are version-specific and should not be presented as current MongoDB behavior without checking newer documentation or source code.
- The experiments use a single collection, two integer-valued fields, controlled data distributions, and relatively simple conjunctive range queries. The authors explicitly leave more complex query types for future investigation.
- This is strong evidence for query planning and optimizer behavior, but it is not a detailed source on WiredTiger internals or the full MongoDB server architecture.
- The optimizer architecture description draws on developer interviews and examination of MongoDB source code. Distinguish that implementation description from the paper’s controlled experimental results.
- Section 2.9 first uses the simplified phrase “in parallel,” then explains that candidate plans are advanced in round-robin order. Keep that qualification when summarizing the mechanism; do not imply simultaneous parallel execution.
- Do not repeat the paper’s performance percentages without naming the tested version, query shape, indexing setup, and experimental conditions.

## Use in the paper

Use Sections 2.7–2.9 to explain query processing and plan selection, then use Sections 4–5 to illustrate measured behavior and its limitations. Pair this paper with current MongoDB/WiredTiger documentation for implementation definitions and an independent source focused on storage architecture. Avoid using this source as sole evidence for the storage-engine portion of Section 4.1.

## Scope note

The original Harshitha notes also included material about replica sets, oplogs, and replication from a separate source. That material is outside the present subsection’s focus and remains in `Architecture.txt` for a later section assignment; it is not screened or evaluated here.
