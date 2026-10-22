# Section 6.3 source evaluation

Section: 6.3, Selection criteria and workload trade-offs

## Purpose

This file records source verification, fit, and limits for the material in `vicky/key_findings/section_6_3.md`. Study IDs match that file. The shared research tracker was not changed, and no Evidence IDs were added.

## Selected database-selection framework: Roy-Hubara, Shoval, and Sturm (2022)

- **Title:** Selecting databases for Polyglot Persistence applications
- **Authors:** Noa Roy-Hubara, Peretz Shoval, and Arnon Sturm
- **Year / venue:** 2022, *Data & Knowledge Engineering*, 137, Article 101950
- **Study ID:** S024
- **DOI:** https://doi.org/10.1016/j.datak.2021.101950
- **Publisher record:** https://www.sciencedirect.com/science/article/pii/S0169023X21000744
- **Source type:** Peer-reviewed research article proposing a database-model selection method
- **Access checked:** Publisher record, abstract, and indexed section summaries were reviewed. The publisher requires institutional access for the full text; detailed tables and complete case-study outcomes could not be independently inspected.
- **Decision:** Selected for requirements-based model selection and polyglot-persistence framing; not an empirical product-performance comparison

### What it can support

- The argument that model selection should follow data, functional, and non-functional requirements rather than popularity or familiarity. **Locations:** Abstract; §1.
- A structured method connecting a conceptual data model and requirements to database model recommendations for data fragments. **Locations:** §4.
- The use of model profiles and weighted criteria, including consistency, integrity, flexibility, volume, velocity, veracity, and query complexity. **Locations:** §§3–4.
- The need to examine recommendation sensitivity to NFR weights and DBSCAN parameters. **Location:** §5.
- The possibility that different application parts may benefit from different database models. **Locations:** §4; §6.

### Limits and verification needs

The publisher-accessible material does not expose the full method tables or enough detailed case outcomes to independently assess recommendation accuracy. The method depends on analyst-defined requirements, profiles, weights, and clustering settings. It classifies model families rather than current database products or configurations, and it does not measure workload-specific latency or throughput. The authors identify evaluation in real settings as future work. The source should not support a statement that MongoDB is faster or otherwise superior for a particular workload.

### Recommended use

Use S024 to introduce a structured, requirement-driven way to select database models, explain how priorities affect recommendations, and motivate polyglot persistence where components have different needs. Attribute the method to the authors and be clear that full case results were not available in the reviewed publisher record.

## Selected systematic review: Taipalus (2024)

- **Title:** Database management system performance comparisons: A systematic literature review
- **Author:** Toni Taipalus
- **Year / venue:** 2024, *Journal of Systems and Software*, 208, Article 111872
- **Study ID:** S025
- **DOI:** https://doi.org/10.1016/j.jss.2023.111872
- **Publisher record:** https://www.sciencedirect.com/science/article/pii/S0164121223002674
- **Full-text PDF:** https://dbs-research.github.io/pdf/2023_performance.pdf
- **Source type:** Open-access systematic literature review
- **Access checked:** Publisher record and full 16-page article PDF, including search method, selection criteria, results, discussion, limitations, and conclusion.
- **Decision:** Selected as the principal source for workload-aware selection and benchmarking quality; not a new product benchmark

### What it can support

- A synthesis of 117 empirical comparison studies covering 44 DBMSs, selected using stated search and inclusion criteria. **Locations:** §4.1, pp. 5–6; §4.2, pp. 6–7.
- The conclusion that cross-study DBMS rankings are context-dependent and do not establish a universal winner. **Location:** §6.1, p. 9.
- Practical workload criteria: domain, data volume/type, read/write mix, concurrency, hardware and parallelism, local/distributed deployment, and consistency/availability settings. **Location:** §6.2.1, pp. 9–10.
- The need to consider feature fit, storage cost, consistency, SQL familiarity, skills, implementation and migration effort, and resource use alongside performance. **Location:** §6.2.2, p. 10.
- The distinction between response time and throughput and the need to match a benchmark suite and its consistency semantics to the target use case. **Locations:** §§3.1–3.3, pp. 3–5.
- The importance of reporting enough workload and configuration detail for replication and fair comparisons. **Locations:** §§6.1, 6.3, pp. 9–10; §7, pp. 10–11.

### Limits and verification needs

The search window ends in March 2022, so the review cannot describe newer releases or later benchmarking practice. The author notes that eligible studies may have been missed and that DBMS classification and result interpretation involve judgment. Primary studies are heterogeneous; their results should not be combined as if they were one controlled comparison. The review is strong support for methodological and selection claims but does not itself determine which DBMS is best for this paper's target workload.

### Recommended use

Use S025 to support the need for workload-specific evaluation and reproducible reporting. When discussing performance criteria, connect each metric to the intended workload and operating conditions. Do not lift individual primary-study rankings from the review as current, general MongoDB-versus-relational conclusions.

## Selected benchmark framework: Cooper et al. (2010)

- **Title:** Benchmarking Cloud Serving Systems with YCSB
- **Authors:** Brian F. Cooper, Adam Silberstein, Erwin Tam, Raghu Ramakrishnan, and Russell Sears
- **Year / venue:** 2010, Proceedings of the 1st ACM Symposium on Cloud Computing (SoCC ’10), pp. 143–154
- **Study ID:** S026
- **DOI / ACM record:** https://doi.org/10.1145/1807128.1807152
- **Full-text PDF consulted:** https://pages.cs.wisc.edu/~akella/CS838/F12/838-CloudPapers/ycsb.pdf
- **Source type:** Peer-reviewed conference paper introducing YCSB and its benchmark framework
- **Access checked:** ACM metadata and full 12-page paper PDF; workload definitions, methodology, results, related work, and proposed extensions were reviewed.
- **Decision:** Selected for workload construction and performance/scalability measurement concepts; historical and not MongoDB-specific

### What it can support

- Benchmark-design criteria of application-domain relevance, portability, scalability, and simplicity. **Location:** §8, pp. 10–11.
- Representing workload differences through read/write ratios, updates versus inserts, point reads versus scans, key skew, and recency. **Locations:** §§4.1–4.2, pp. 3–5; Table 2, p. 5.
- Measuring latency as throughput approaches saturation, and examining scale-up and elastic expansion. **Location:** §3, pp. 2–3.
- The general point that system rankings and scaling behavior vary by workload and deployment conditions. **Locations:** §§6.1–6.6, pp. 6–10.
- Additional evaluation dimensions proposed for replication, availability, freshness, and wide-area operation. **Location:** §7.2, pp. 10–11; these are proposed dimensions rather than measured findings in the main experiments.

### Limits and verification needs

The systems tested were Cassandra, HBase, PNUTS, and a basic sharded MySQL implementation; MongoDB was not included. The study dates from 2010 and uses product versions and hardware that are no longer representative. Replication was disabled in the main experiments, average latency was reported without p95/p99, and the paper itself notes that product performance changes with versions. Workload examples are illustrative patterns rather than exact application replays. Its numerical rankings must not be presented as current product comparisons.

### Recommended use

Use S026 to explain how benchmark workloads can cover different operational patterns and why selection should test latency, throughput, scale, and expansion effects. Cite it as a benchmark-method source, not as evidence for MongoDB-specific performance.

## Cross-source assessment for Section 6.3

S024 contributes a requirements-based model-selection method, but full case details were not accessible in the publisher record. S025 provides the broadest methodological synthesis and practical criteria for choosing representative and reproducible comparisons. S026 gives concrete workload dimensions and measurement approaches, but is dated and does not include MongoDB. Together they support a careful selection argument: define requirements first, test representative mixes under the expected configuration and deployment, and weigh performance against consistency, storage, scalability, skills, and migration costs. Keep framework recommendations, review findings, and historical benchmark measurements distinct.
