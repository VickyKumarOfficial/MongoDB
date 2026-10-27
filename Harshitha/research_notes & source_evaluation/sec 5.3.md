# Section 5.3 source evaluation

Section: 5.3, Application domains and unsuitable workloads

## Purpose of this note

This file records screening, verification, claim support, and limitations for the four source groups organized in `Harshitha/key_findings/sec 5.3.md`. The MongoDB Manual entry groups two related pages. No Study IDs are assigned here. Add Evidence IDs in the shared Evidence Matrix only for manuscript claims verified against the original source.

## Sources screened

### Source 1 — Ciumac et al. (2026), “Performance Evaluation of MongoDB and RavenDB in IIoT-Inspired Data-Intensive Mobile and Web Applications”

- **Source type:** Peer-reviewed journal article, *Future Internet*, vol. 18, no. 1, article 57 (2026).
- **DOI:** https://doi.org/10.3390/fi18010057
- **Publisher URL:** https://www.mdpi.com/1999-5903/18/1/57
- **Decision:** Selected as the most recent direct application-driven comparison in this set.
- **Verification:** Full article reviewed for the application model, hardware and software setup, CRUD and advanced workload tests, conclusions, and limitations.
- **Can support:** Description of an IIoT-inspired mobile/web product-order workload; workload dimensions such as high volume, CRUD, ingestion, aggregation, and search; and results of this study’s MongoDB–RavenDB comparison.
- **Cannot establish:** Performance in a real distributed IIoT deployment or universal superiority across e-commerce, mobile, IIoT, or enterprise applications. The experiment ran on a single host and did not include cluster coordination, replication, or sharding; the authors did not conduct formal inferential statistical analysis.
- **Use in the paper:** Present as a bounded case study. State its product-order context and single-host setup alongside any performance claim.
- **Status:** Selected; full text reviewed.

### Source 2 — Ferreira et al. (2025), “Benchmarking Consistency Levels of Cloud-Distributed NoSQL Databases Using YCSB”

- **Source type:** Peer-reviewed journal article, *IEEE Access*, vol. 13, pp. 63428–63438 (2025).
- **DOI:** https://doi.org/10.1109/ACCESS.2025.3558923
- **Publisher URL:** https://ieeexplore.ieee.org/abstract/document/10955378
- **Accessible author manuscript:** https://www.researchgate.net/publication/390598871_Benchmarking_Consistency_Levels_of_Cloud-Distributed_NoSQL_Databases_Using_YCSB
- **Decision:** Selected for multi-region workload and consistency/performance evidence.
- **Verification:** Bibliographic metadata and abstract checked in IEEE and university research-portal records. The author manuscript was reviewed for the cloud setup and MongoDB throughput results. The publisher PDF endpoint returned access denied in this session.
- **Can support:** In the authors’ tested multi-region YCSB setup, changing to strong consistency reduced MongoDB throughput in Workloads A and B by the reported amounts. The findings can support discussion of consistency-related trade-offs under those benchmark conditions.
- **Cannot establish:** A general percentage penalty for MongoDB, behavior across every real application workload, or that MongoDB is unsuitable for consistency-sensitive domains. The study’s YCSB mix, replica layout, regions, and VM configuration constrain generalization.
- **Use in the paper:** Tie numeric figures to the specific YCSB workloads and cloud configuration. Do not generalize the paper’s reported Cassandra or Redis figures to MongoDB.
- **Status:** Selected; author manuscript reviewed, publisher copy unavailable in this session.

### Source 3 — Kamsky (2019), “Adapting TPC-C Benchmark to Measure Performance of Multi-Document Transactions in MongoDB”

- **Source type:** Peer-reviewed *Proceedings of the VLDB Endowment*, vol. 12, no. 12, pp. 2254–2262 (2019).
- **DOI:** https://doi.org/10.14778/3352063.3352140
- **Full-text URL:** https://www.vldb.org/pvldb/vol12/p2254-kamsky.pdf
- **Decision:** Selected for commerce and transaction-oriented workload fit, and for its explicit benchmark limitations.
- **Verification:** Full paper reviewed, including its workload description, implementation, results, and discussion of benchmark generalizability.
- **Can support:** The adaptation of TPC-C’s commerce transactions to MongoDB; the reported difference between document-oriented and normalized designs within that test; and the author’s caution that narrow benchmark results may be misapplied to unrelated workloads.
- **Cannot establish:** That MongoDB is universally faster than relational systems, or that all OLTP workloads should use a document model. The author was affiliated with MongoDB, and the implementation reflects MongoDB 4.0-era behavior.
- **Use in the paper:** Use as a documented example of how modeling choices affect a transaction-heavy workload; disclose the source’s industry affiliation and benchmark-specific scope.
- **Status:** Selected; full text reviewed.

### Source 4 — MongoDB Database Manual 9.0, “Identify Application Workload” and “Time Series”

- **Source type:** Current vendor documentation from MongoDB, Inc.; two related Database Manual pages grouped as one documentation source.
- **URLs:**
  - https://www.mongodb.com/docs/manual/data-modeling/schema-design-process/identify-workload/
  - https://www.mongodb.com/docs/manual/core/timeseries-collections/
- **Decision:** Selected for current MongoDB workload-assessment and time-series feature guidance.
- **Verification:** Current Database Manual version 9.0 pages checked on October 20, 2026, including workload factors, time-series examples, and data patterns not intended for time-series collections.
- **Can support:** MongoDB’s recommended factors for profiling an application’s access patterns; current examples of time-series application domains; and the documented boundary that time-series collections are not intended for unordered or non-time-dependent data.
- **Cannot establish:** Independent comparative performance or that entire industries are inherently suited or unsuited to MongoDB. The time-series limitation applies to that collection type, not to ordinary MongoDB collections generally.
- **Use in the paper:** Attribute implementation guidance and feature examples to MongoDB. Keep the time-series collection boundary explicit and pair vendor statements with empirical research.
- **Status:** Selected; current pages checked October 20, 2026.

## Evidence synthesis and remaining needs

The source set provides recent case-study evidence for an IIoT-inspired product-order application, a multi-region consistency benchmark, and an adapted commerce/OLTP benchmark. It does not provide broad independent evidence ranking MongoDB’s suitability by industry. The MongoDB Manual supplies current feature guidance but is vendor documentation.

Frame unsuitability in terms of workload characteristics and constraints rather than categorical industry labels. The evidence supports discussion of workload mix, consistency configuration, transaction needs, query/analytics patterns, and whether data are time-dependent. Add an independent domain-specific study if the manuscript makes a broad claim about banking, healthcare, social media, or another sector.

## Intended use

Use Source 1 for a recent application-driven case and its limitations. Use Source 2 for workload-specific multi-region consistency results. Use Source 3 for the adapted TPC-C commerce workload and benchmark caveats. Use Source 4 for current MongoDB workload-assessment guidance and time-series collection examples/limits, clearly identified as vendor documentation.

## Validation status

- Source 1: Full article and experiment limitations checked.
- Source 2: Publisher metadata and abstract checked; author manuscript reviewed; publisher PDF unavailable in this session.
- Source 3: Bibliographic details and full text checked.
- Source 4: Current Database Manual 9.0 pages checked October 20, 2026.
