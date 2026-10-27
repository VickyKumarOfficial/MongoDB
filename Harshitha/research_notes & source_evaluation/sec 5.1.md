# Section 5.1 source evaluation

Section: 5.1, Document modelling and schema-design choices

## Purpose of this note

This file records screening decisions, verification status, supported claims, and limitations for the four sources organized in `Harshitha/key_findings/sec 5.1.md`. It follows the source-evaluation format used in Harshitha's Section 4 notes. No Study IDs are assigned here; add Evidence IDs in the shared Evidence Matrix only for claims retained in the manuscript and verified against the source.

## Sources screened

### Source 1 — Sachdeva, Bansal & Bansal (2024), “SRank: Guiding schema selection in NoSQL document stores”

- **Source type:** Peer-reviewed journal article, *Data & Knowledge Engineering*, vol. 154, article 102360 (2024).
- **DOI:** https://doi.org/10.1016/j.datak.2024.102360
- **Stable URL:** https://www.sciencedirect.com/science/article/abs/pii/S0169023X24000843
- **Decision:** Selected, with abstract-level limitation.
- **Verification:** Title, authors, journal, year, volume/article number, and DOI were checked against the ScienceDirect article record and DBLP bibliographic record. Abstract content was accessible and checked. Full text/method/results tables were not accessed in this review.
- **Can support:** At abstract level, that schema selection in document stores remains important despite schema flexibility; that the authors propose SRank to rank alternatives from an ER model and workload queries; and that their reported case study considers measures including query response time, storage efficiency, scalability, throughput, and latency.
- **Cannot establish from current access:** Detailed algorithm design, exact benchmark setup, numerical results, statistical significance, dataset characteristics, MongoDB version/configuration, or full threats to validity. Do not cite abstract-level material for those details.
- **Use in the paper:** A recent research example for workload-informed schema evaluation and candidate ranking. Avoid portraying SRank's recommendation as a universal schema rule.
- **Status:** Selected for 5.1; pending full-text verification before any detailed methodological or quantitative claim is used.

### Source 2 — Bansal, Sachdeva & Awasthi (2024), “Schema generation for document stores using workload-driven approach”

- **Source type:** Peer-reviewed journal article, *The Journal of Supercomputing*, vol. 80, no. 3, pp. 4000–4048 (2024; first online in 2023).
- **DOI:** https://doi.org/10.1007/s11227-023-05613-5
- **Stable URL:** https://link.springer.com/article/10.1007/s11227-023-05613-5
- **Decision:** Selected.
- **Verification:** Bibliographic details were checked against the Springer/EBSCO records and DBLP. The abstract and publisher article content were reviewed. The paper describes a workload-driven logical schema process and an e-commerce case study.
- **Can support:** A design workflow that uses an enhanced ER/conceptual model plus application queries and anticipated data volume; conversion of workload queries into query representations for schema generation; and reported evaluation dimensions including query performance, storage, aggregation pipelines, read/write latency, collection performance, scalability, throughput, and latency.
- **Cannot establish:** That the proposed workflow outperforms alternatives for every application, data distribution, workload, hardware setup, or MongoDB version. Do not transfer the case-study results without reporting its setup and comparison baselines.
- **Use in the paper:** Explain how conceptual requirements and workload can guide schema choices, and use the paper's case-study design as evidence that workload-driven modeling is an active research approach. Its detailed embedding/reference decision rules should be saved for 5.2.
- **Status:** Selected; full publisher article is available, but any numerical results should be checked in the article's methods/results tables before manuscript use.

### Source 3 — Hewasinghage et al. (2023), “Automated database design for document stores with multicriteria optimization”

- **Source type:** Peer-reviewed open-access journal article, *Knowledge and Information Systems*, vol. 65, pp. 3045–3078 (published March 11, 2023).
- **DOI:** https://doi.org/10.1007/s10115-023-01828-3
- **Stable URL:** https://link.springer.com/article/10.1007/s10115-023-01828-3
- **Decision:** Selected.
- **Verification:** Springer full text was opened. Title, authors, date, journal, volume/pages, and DOI were checked on the publisher page. The abstract, introduction, evaluation, threats-to-validity section, and conclusion were checked.
- **Can support:** That document-store design alternatives can create a large search space; that schema choices can affect query performance, storage, redundancy, and document complexity; and that multicriteria optimization can make application priorities explicit. The article evaluates MongoDB designs and reports study-specific comparative outcomes.
- **Cannot establish:** A universally best schema, globally optimal solution, or general performance guarantee. The authors explicitly characterize generated designs as near-optimal, identify possible evaluation bias, and use synthetic inputs for some scalability experiments.
- **Use in the paper:** Provide a critical research example for evaluating schema design across competing criteria and discussing why optimization results depend on user priorities. Keep detailed relationship representation recommendations for 5.2.
- **Status:** Selected; full text reviewed. Numerical claims must retain the tested workload, MongoDB configuration, and comparison context.

### Source 4 — MongoDB Manual, “Identify Application Workload”

- **Source type:** Current MongoDB vendor documentation; Database Manual 9.0 when checked.
- **Stable URL:** https://www.mongodb.com/docs/manual/data-modeling/schema-design-process/identify-workload/
- **Decision:** Selected for current first-party design guidance; supporting context only.
- **Verification:** Current manual page opened and checked on October 20, 2026. Page is under Designing Your Schema and identifies workload discovery as the first step in MongoDB's schema-design process.
- **Can support:** MongoDB's current recommendation to identify frequently run operations, use application/business needs, logs, and queries to characterize data needs, and document action, query type, fields, frequency, and priority in a workload table.
- **Cannot establish:** Independent empirical effectiveness, comparative database superiority, or measured performance gains from following the guidance. The page covers workload identification rather than the full schema design process.
- **Use in the paper:** Attribute claims explicitly to MongoDB's manual and use the page to describe the current vendor workflow. Pair with independent academic studies for evaluative statements.
- **Status:** Selected as a vendor source; checked on October 20, 2026.

## Evidence synthesis and remaining needs

The source set is suitable for describing schema design as a workload-informed choice among alternatives and for identifying evaluation dimensions beyond query speed. Two 2024 journal papers provide recent, directly relevant methods; the 2023 open-access study gives fuller methodological and limitation detail; and the current MongoDB manual supplies vendor guidance for workload identification.

The evidence remains bounded. SRank is currently accessible only at abstract level for this review and should not support detailed or quantitative claims until its full text is checked. The other research results are tied to their selected conceptual models, workloads, datasets, cost functions, baselines, and system settings. The vendor manual is not independent performance evidence. Avoid a claim that workload-driven modeling always improves performance or that a proposed algorithm finds a universally optimal schema.

## Intended use

Use Source 1 to introduce recent schema-ranking research, with an abstract-only caveat. Use Source 2 to describe a workload-driven schema-generation process and its study-specific evaluation. Use Source 3 to explain multicriteria design and add critical limitations. Use Source 4 only for MongoDB's current recommended workload-identification procedure, explicitly attributed to vendor documentation. Keep detailed embedding/referencing, validation, and index choices in their designated subsections.

## Validation status

- Source 1: Bibliographic metadata and abstract checked; full text pending.
- Source 2: Bibliographic metadata, abstract, and publisher article content checked; verify exact experimental values in full-text result tables before use.
- Source 3: Publisher full text checked, including evaluation and limitations.
- Source 4: Current MongoDB Manual 9.0 page checked on October 20, 2026.
