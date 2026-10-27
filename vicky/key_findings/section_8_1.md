# Section 8.1 — Workload-specific benchmarking and intelligent optimization

This file captures material relevant to Section 8.1 from three selected sources. Bibliographic information and source section labels are retained. Findings are summarized in my own words for later writing; consult the linked papers for the original wording and full context.

## Paper 1

### Title

Database management system performance comparisons: A systematic literature review

### Study ID

S025

### Author

Toni Taipalus

### Published

2024

### Journal

Journal of Systems and Software, Volume 208, Article 111872

### DOI and source links

- DOI: https://doi.org/10.1016/j.jss.2023.111872
- Full-text PDF: https://dbs-research.github.io/pdf/2023_performance.pdf

### Source type

Open-access systematic literature review of empirical DBMS performance comparisons.

### Relevant content from the paper

#### Review scope and findings (§§1, 4.1–4.2, 6.1, 7)

The review synthesizes 117 empirical studies comparing 44 DBMSs. It finds that many comparisons use workloads that do not reflect real application use and do not report enough methodological detail to reproduce the test or confidently interpret the result. Its corpus and conclusions cover DBMS comparisons generally; the review is not a new MongoDB benchmark.

#### Workload and reporting choices (§§3, 6.2.1, 6.3.1)

The review recommends defining a workload from the expected application and deployment. Relevant dimensions include domain, data volume and type, read/write mix, concurrency, hardware, local or distributed setup, consistency and availability settings, and feature requirements. A benchmark suite alone does not guarantee representativeness; the paper emphasizes explaining the operations and settings being tested and disclosing enough setup detail for replication.

#### Other selection criteria (§6.2.2)

Performance should be assessed alongside storage cost, consistency, feature fit, required skills, and implementation or migration effort. A design that speeds queries through redundant data may also increase storage needs and risk inconsistency.

### Main relevance to Section 8.1

S025 supports future work on representative, reproducible, workload-specific MongoDB evaluation. It also supports treating intelligent optimization as workload- and configuration-dependent rather than relying on universal system rankings.

---

## Paper 2

### Title

Automated database design for document stores with multicriteria optimization

### Study ID

S028

### Authors

Moditha Hewasinghage, Sergi Nadal, Alberto Abelló, and Esteban Zimányi

### Published

11 March 2023

### Journal

Knowledge and Information Systems, Volume 65, pages 3045–3078

### DOI and source links

- DOI: https://doi.org/10.1007/s10115-023-01828-3
- Publisher full text: https://link.springer.com/article/10.1007/s10115-023-01828-3

### Source type

Open-access peer-reviewed journal article proposing and evaluating a document-store design method.

### Relevant content from the paper

#### Design problem (§1)

Document-store schema design includes choices about nesting, embedding, references, and reference direction. These alternatives affect query cost, storage, redundancy, and document complexity, and the authors describe existing design practice as often relying on trial and error or ad hoc rules.

#### Proposed method (§§3–5)

DocDesign represents alternative document structures and uses transformations with a local-search procedure driven by a query workload. Its multicriteria objective includes query performance, storage size, collection heterogeneity, and average document depth. This offers a way to search among competing design trade-offs instead of optimizing query cost alone.

#### Evaluation and conclusion (§§6–7)

The authors evaluate their prototype with the RUBiS benchmark against a design solution driven by query cost. They report better performance and more compact designs with less redundancy in the tested cases. These findings apply to the evaluated method and workloads, not to every MongoDB application.

### Main relevance to Section 8.1

S028 supports research into intelligent, workload-aware document design that considers multiple operational objectives. It is a document-store method rather than evidence that such optimization is broadly deployed in MongoDB production systems.

---

## Paper 3

### Title

First Past the Post: Evaluating Query Optimization in MongoDB

### Study ID

S031

### Authors

Dawei Tao, Enqi Liu, Sidath Randeni Kadupitige, Michael Cahill, Alan Fekete, and Uwe Röhm

### Published

2024

### Venue

Asia-Pacific Web and Web-Age Information Management Joint Conference (APWeb-WAIM 2024), in Databases Theory and Applications, pages 99–113

### DOI and source links

- DOI: https://doi.org/10.1007/978-981-96-1242-0_8
- arXiv HTML full text: https://arxiv.org/html/2409.16544v1
- arXiv record: https://arxiv.org/abs/2409.16544

### Source type

Peer-reviewed empirical study of MongoDB query-plan selection; an accessible preprint is available. One author notes prior employment at MongoDB.

### Relevant content from the paper

#### Query-planning approach and evaluation method (§§2.8–2.9, 3)

The paper describes MongoDB's first-past-the-post (FPTP) optimizer, which runs candidate query plans in a round-robin race, scores their early work, and chooses a plan to complete. The authors propose an evaluation and visualization method that compares the selected plan with the fastest candidate plan. Their experiments disable plan caching so the optimizer makes a fresh choice for each query.

#### Findings (§4)

In experiments with MongoDB 7.0.1 and controlled two-range-predicate queries, the optimizer showed a bias against collection scans, including cases where scanning the collection was faster. In one tested physical design, the chosen plan was optimal for just under 34% of the examined queries, and some chosen plans were more than three times slower than a collection scan. These figures belong to that specific experiment.

#### Explanation and future evaluation (§5; §1)

The paper investigates why the optimizer avoids collection scans and proposes that the visualization method could support automated regression testing of optimizer decisions over time.

### Main relevance to Section 8.1

S031 is direct MongoDB evidence for continued query-optimizer evaluation and regression testing. Its synthetic query shape, single-client EC2 setup, MongoDB version, disabled plan cache, and chosen index configurations limit generalization to other queries and deployments.
