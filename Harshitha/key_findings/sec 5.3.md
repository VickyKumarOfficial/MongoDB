# Section 5.3 — Application domains and unsuitable workloads

## Scope of this source set

This file organizes four selected source groups by their own headings and subheadings. The research findings are summarized in original wording; short excerpts are included only where useful. The studies illustrate particular applications and tested workloads, so they should not be generalized into claims that MongoDB is always suitable or unsuitable for an entire industry.

---

## Source 1 — Performance Evaluation of MongoDB and RavenDB in IIoT-Inspired Data-Intensive Mobile and Web Applications

### Authors and publication

Mădălina Ciumac, Cornelia Aurora Győrödi, Robert Ștefan Győrödi, and Felicia Mirabela Costea. *Future Internet*, vol. 18, no. 1, article 57, 2026. DOI: [10.3390/fi18010057](https://doi.org/10.3390/fi18010057).

### Source links

- [Full article](https://www.mdpi.com/1999-5903/18/1/57)
- [DOI record](https://doi.org/10.3390/fi18010057)

### Accessed

October 20, 2026. Full article reviewed.

### Scope and relevance

This recent application-driven comparison evaluates MongoDB and RavenDB in a mobile/web product-order application designed around data-intensive patterns inspired by IIoT. It is useful as a concrete example of a document-database workload, with findings compared across database systems rather than presented as a general ranking of application domains.

### §1 — Introduction

The authors identify e-commerce, customer relationship management, recommendation systems, and social-media analytics as examples of domains where document-oriented systems may be considered because their data can be heterogeneous and application requirements can change. These examples are background context in the paper; the experiment itself is limited to its product-order application.

### §4 — System Architecture and Application Overview

The case-study application manages users and their product orders. The authors describe its data as reflecting IIoT-inspired conditions, including high data volume, frequent CRUD activity, ingestion bursts, and mixed transactional and analytical queries. The tests ran on one computer, so the setup represents an IIoT-inspired application workload rather than a distributed edge–cloud deployment.

### §5 — Performance Analysis: MongoDB vs. RavenDB

The experiment compares read, insert, update, and delete operations over datasets from 1,000 to 1,000,000 records. Its results apply to the tested application, data model, database versions, hardware, and operations. They do not establish that MongoDB will outperform other databases in every IIoT, mobile, or e-commerce deployment.

### §6 — Advanced Performance Tests

The authors additionally evaluate join processing, bulk ingestion, aggregation, and full-text search. In the tested setup, RavenDB bulk ingestion completed in 62 seconds compared with 85 seconds for MongoDB insertMany; the full-text-search test took 45 milliseconds in RavenDB and 310 milliseconds in MongoDB. The paper also reports MongoDB advantages on other measured tasks. These results illustrate that a system’s fit can vary by operation and feature, such as sustained ingestion or integrated full-text search; they are not universal performance rankings.

### Limitations stated by the authors

The experiments use a single-host environment and do not include network latency, replication, sharding, or distributed coordination. The authors also report that they did not perform formal inferential statistical analysis. Avoid using its measurements as production-scale or cluster-scale performance guarantees.

### Short source excerpt

> “IIoT-inspired workload model”

---

## Source 2 — Benchmarking Consistency Levels of Cloud-Distributed NoSQL Databases Using YCSB

### Authors and publication

Saulo Ferreira, Júlio Mendonça, Bruno Nogueira, Willy Tiengo, and Ermeson Andrade. *IEEE Access*, vol. 13, pp. 63428–63438, 2025. DOI: [10.1109/ACCESS.2025.3558923](https://doi.org/10.1109/ACCESS.2025.3558923).

### Source links

- [IEEE article record](https://ieeexplore.ieee.org/abstract/document/10955378)
- [Author manuscript in the ResearchGate record](https://www.researchgate.net/publication/390598871_Benchmarking_Consistency_Levels_of_Cloud-Distributed_NoSQL_Databases_Using_YCSB)
- [DOI record](https://doi.org/10.1109/ACCESS.2025.3558923)

### Accessed

October 20, 2026. Bibliographic details were checked against the IEEE and university research-portal records. The accessible author manuscript was reviewed; the publisher full-text endpoint was not accessible in this session.

### Abstract and §I — Introduction

The study compares MongoDB, Cassandra, and Redis across weak and strong consistency settings in a cloud deployment with geographically distributed replicas. It uses YCSB workloads and measures throughput and runtime. This source is relevant to applications whose suitability decisions depend on the cost of consistency settings across regions, rather than only on single-node CRUD speed.

### §IV — Experimental Setup

The authors describe a multi-node cloud setup with a primary and two replicas deployed across separate Google Cloud regions. The database nodes use specified virtual-machine configurations, and a separate client runs YCSB. Results should therefore be interpreted in relation to this topology, hardware, selected database configurations, and synthetic benchmark workloads.

### §V.A — Impact of Different Workloads

The paper evaluates different YCSB operation mixes. For MongoDB, the authors report that strong consistency lowered throughput by about 95.6% in Workload A and 66.8% in Workload B in their setup. These percentages are specific to those workloads and consistency configurations; they should not be presented as general MongoDB performance penalties.

### §VI — Conclusion

The authors conclude that stronger consistency settings can substantially affect throughput and runtime in multi-region deployments. This supports discussing high consistency requirements as a workload and deployment consideration. The paper does not show that MongoDB is categorically unsuitable for banking, financial, or other consistency-sensitive applications; it measures a specific configuration and benchmark.

### Short source excerpt

> “multi-region cloud environment”

---

## Source 3 — Adapting TPC-C Benchmark to Measure Performance of Multi-Document Transactions in MongoDB

### Authors and publication

Asya Kamsky. *Proceedings of the VLDB Endowment*, vol. 12, no. 12, pp. 2254–2262, 2019. DOI: [10.14778/3352063.3352140](https://doi.org/10.14778/3352063.3352140). The author was affiliated with MongoDB Inc.

### Source links

- [Full paper PDF](https://www.vldb.org/pvldb/vol12/p2254-kamsky.pdf)
- [DOI record](https://doi.org/10.14778/3352063.3352140)

### Accessed

October 20, 2026. Full paper reviewed.

### Abstract and §1 — Introduction

The paper adapts TPC-C, a commerce-oriented OLTP benchmark built around orders, customers, warehouses, stock, and multiple transaction types, to MongoDB. The paper explains that TPC-C assumes a normalized relational schema and SQL, so adapting it required changes to use MongoDB’s data model and transaction semantics. This makes it relevant to transaction-heavy commerce workloads and the effort required to represent them in a document database.

### §2 — Related Work

The author cautions that benchmark results often represent a limited set of operations and may be misused to infer suitability for unrelated workloads. The paper also notes that simple primary-key read/write benchmarks do not represent all MongoDB user access patterns. Use this discussion to qualify cross-study comparisons and to motivate workload-specific evaluation.

### §4 — Implementation and §4.7 — Results

The paper compares MongoDB designs that follow document-schema practices with a required normalized schema in its adapted TPC-C tests. It reports better performance for the document-oriented design in the tested benchmark. This result supports the importance of schema and workload fit; it does not establish that MongoDB is generally faster than relational databases for all OLTP or commerce applications.

### Evidence limitations

This is a peer-reviewed proceedings paper, but it is authored by a MongoDB employee and describes MongoDB testing. Attribute its results and design rationale to the paper, and avoid treating the findings as independent evidence of universal database superiority. It is also based on MongoDB 4.0-era transaction capabilities.

### Short source excerpt

> “results can easily be misused”

---

## Source 4 — MongoDB Database Manual: Application Workload and Time Series

### Publisher and source type

MongoDB, Inc.; current MongoDB Database Manual, version 9.0. This source group contains two related manual pages.

### Source links

- [Identify Application Workload](https://www.mongodb.com/docs/manual/data-modeling/schema-design-process/identify-workload/)
- [Time Series](https://www.mongodb.com/docs/manual/core/timeseries-collections/)

### Accessed

October 20, 2026.

### “Identify Application Workload”

The manual recommends examining the application’s business domain, users’ data needs, application logs, and frequent queries. It proposes recording each operation’s read/write type, fields, frequency, and priority. This is useful as a practical framework for assessing a specific application before selecting or shaping its database workload. It is vendor documentation, not an independent comparative study.

### “Time Series” — “Example Use Cases”

The manual lists IoT sensor data, financial measurements, retail and e-commerce analysis, application logs, and infrastructure monitoring as examples for MongoDB time-series collections. These are examples of the feature’s intended use, not independent evidence that MongoDB is the best database for each industry.

### “Time Series” — unsuitable data patterns

The manual says time-series collections are not intended for unordered data or data that is not time-dependent. Keep this limitation specific to MongoDB time-series collections; it does not mean that MongoDB generally cannot store such data in ordinary collections.

### “Time Series” — behavior and version context

The manual describes time-series collections as storing measurements in time order and identifies version-specific behavior and constraints. When using implementation details in the review, cite the current manual version and distinguish those product rules from independent evidence about database suitability.

### Source-use boundary

Use this source for current MongoDB terminology, feature examples, and documented constraints. Pair it with the research papers for empirical discussion, and attribute recommendations to MongoDB documentation.

---

## Coverage summary for Section 5.3

| Subtopic | Evidence in this file | Coverage status |
|---|---|---|
| Mobile, web, product-order, and IIoT-inspired applications | Ciumac et al. (2026) | Recent case study; limited to a single-host experiment |
| Multi-region, consistency-sensitive workloads | Ferreira et al. (2025) | Empirical YCSB results; specific benchmark and cloud setup |
| Commerce and multi-document OLTP transactions | Kamsky (2019) | Workload adaptation and schema-fit findings; MongoDB-authored |
| Time-series domains and workload assessment | MongoDB Database Manual 9.0 | Current product guidance; vendor documentation |
| Broad claims about “best” industries or categorically unsuitable domains | Not established by these sources | Avoid; explain suitability using workload characteristics and source limitations |

## Shared bibliography entries

1. M. Ciumac, C. A. Győrödi, R. Ș. Győrödi, and F. M. Costea, “Performance Evaluation of MongoDB and RavenDB in IIoT-Inspired Data-Intensive Mobile and Web Applications,” *Future Internet*, vol. 18, no. 1, art. 57, 2026. doi: [10.3390/fi18010057](https://doi.org/10.3390/fi18010057).
2. S. Ferreira, J. Mendonça, B. Nogueira, W. Tiengo, and E. Andrade, “Benchmarking Consistency Levels of Cloud-Distributed NoSQL Databases Using YCSB,” *IEEE Access*, vol. 13, pp. 63428–63438, 2025. doi: [10.1109/ACCESS.2025.3558923](https://doi.org/10.1109/ACCESS.2025.3558923).
3. A. Kamsky, “Adapting TPC-C Benchmark to Measure Performance of Multi-Document Transactions in MongoDB,” *Proceedings of the VLDB Endowment*, vol. 12, no. 12, pp. 2254–2262, 2019. doi: [10.14778/3352063.3352140](https://doi.org/10.14778/3352063.3352140).
4. MongoDB, Inc., “Identify Application Workload” and “Time Series,” *MongoDB Database Manual*, version 9.0. Available: [Identify Application Workload](https://www.mongodb.com/docs/manual/data-modeling/schema-design-process/identify-workload/) and [Time Series](https://www.mongodb.com/docs/manual/core/timeseries-collections/) (accessed October 20, 2026).

.