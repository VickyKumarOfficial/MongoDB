# Section 6.2 — MongoDB compared with other NoSQL models

This file records the relevant source content for later drafting. Paper structure and evidence locations are retained, but descriptions paraphrase the published text. Results from different studies should not be treated as directly comparable unless their systems, versions, workloads, and configurations match.

## Paper 1

### Title

Consistency Models of NoSQL Databases

### Study ID

S021

### Authors

Miguel Diogo, Bruno Cabral, and Jorge Bernardino

### Published

14 February 2019

### Journal

Future Internet, 11(2), Article 43 (2019)

### DOI and source link

- DOI: https://doi.org/10.3390/fi11020043
- Publisher full text: https://www.mdpi.com/1999-5903/11/2/43

### Source type

Open-access review article

### Relevant content from the paper

#### Purpose and database-model coverage (§1)

The authors compare how five selected systems implement consistency: Redis (key-value), Cassandra (column-oriented), MongoDB (document), Neo4j (graph), and OrientDB (multi-model). They chose one representative from each NoSQL category. Their comparison concerns consistency options and associated availability, latency, and partition trade-offs, not benchmark performance across the products.

#### Consistency concepts (§3.1–§3.8)

The review describes strong/linearizable, weak, eventual, causal, read-your-writes, session, monotonic-read, and monotonic-write consistency. Eventual consistency allows replicas to return older values while updates propagate; the convergence interval depends on communication delay, system load, and replica count. Session and read-your-writes guarantees constrain what a client sees from its own work without requiring every reader to observe the latest write immediately.

These sections provide vocabulary for comparing product consistency settings. They do not by themselves establish a fixed choice between consistency and availability for all deployments; claims should be tied to the relevant replication and failure assumptions.

#### Data models (§4.1–§4.5)

- Redis stores in-memory data structures and operates as a key-value system.
- Cassandra partitions data by row/partition key across a cluster and organizes it in a column-oriented model.
- MongoDB stores BSON documents in collections. The paper describes nesting related data as a way to reduce joins.
- Neo4j organizes data as nodes and relationships, with a graph model centered on entity relationships.
- OrientDB combines document, graph, and key-value capabilities and supports schema-less, full-schema, and mixed modes.

#### Consistency implementations (§5.1–§5.6; Table 1; Fig. 10)

The paper describes a standalone Redis instance as strongly consistent, while Redis Cluster reads from replicas may be eventual; the paper also discusses replication acknowledgement through `WAIT`. Cassandra exposes read and write consistency levels, so its behavior depends on settings such as ONE, QUORUM, and ALL. The authors use a probabilistic-bounded-staleness simulator to illustrate how selected Cassandra read/write configurations affect the chance that a read returns the latest value. These are modeled results, not a shared empirical benchmark of all five products.

For MongoDB, the review describes replica-set reads from the primary as the stronger consistency path and secondary reads as allowing stale values. It presents the system as having selectable strong, causal, session, and eventual behavior, with the trade-off between stronger reads and availability/latency. The review's system-specific descriptions reflect product documentation and architecture as of the paper's 2019 publication.

The review describes Neo4j's clustered core members as requiring majority acceptance for commits, with asynchronous read replicas potentially lagging. OrientDB is discussed through older master-slave and newer multi-master approaches, with client routing choices affecting what a client reads. Table 1 summarizes the authors' classification of consistency options; Figure 10 places systems according to their default configurations.

#### Conclusions and future work (§6)

The authors distinguish MongoDB's consistency-oriented default from Cassandra's availability-oriented defaults and discuss Neo4j and OrientDB in terms of strong consistency when partitions or distributed operation are not required. They explicitly identify empirical evaluation of the selected systems and additional NoSQL systems as future work.

### Main relevance to Section 6.2

This review offers a useful organizing comparison across key-value, wide-column, document, graph, and multi-model systems. It helps explain how MongoDB's document model and replica-set options differ from Cassandra's tunable consistency levels, Redis replication, and graph or multi-model designs. Use it for historical framing and terminology, not as evidence of present-day product behavior or a measured performance ranking.

---

## Paper 2

### Title

Benchmarking Consistency Levels of Cloud-Distributed NoSQL Databases Using YCSB

### Study ID

S022

### Authors

Saulo Ferreira, Júlio Mendonça, Bruno Nogueira, Willy Tiengo, and Ermeson Andrade

### Published

8 April 2025

### Journal

IEEE Access, 13, 63428–63438 (2025)

### DOI and source links

- DOI: https://doi.org/10.1109/ACCESS.2025.3558923
- IEEE Xplore: https://ieeexplore.ieee.org/abstract/document/10955378
- Open full-text copy: https://research.tilburguniversity.edu/en/publications/benchmarking-consistency-levels-of-cloud-distributed-nosql-databa/

### Source type

Open-access journal research article

### Relevant content from the paper

#### Objective and scope (Abstract; §I)

The authors measure how weak and strong consistency configurations affect throughput and runtime for Cassandra, MongoDB, and Redis in a geographically distributed cloud deployment. YCSB supplies the workload operations. Their main question is the performance cost of consistency settings, rather than which of the three products is universally fastest.

#### Models, configuration, and testbed (§III–§IV; PDF pp. 3–5)

The study uses Cassandra 4.0, MongoDB 4.4.18, and Redis 7.2 in a three-node, three-region Google Cloud Platform setup. Nodes use 2 vCPU and 4 GB RAM. Cassandra uses ONE versus ALL consistency; MongoDB uses write concern `w=1` versus `w=3`; Redis uses `WAIT 0` versus `WAIT 2`. The paper routes client traffic through a primary node for all three systems to align its setup, although the products' replication and consistency mechanisms are not semantically identical.

YCSB 0.17.0 runs workloads A (50/50 reads and writes), B (95/5 reads and writes), D (read-most-recent), E (short-range reads with writes), and F (read-modify-write). Workload C is omitted because it is read-only and the study varies write consistency. Each run is single-threaded and uses operation counts of 10,000, 25,000, 50,000, 75,000, and 100,000. The paper reports throughput and total workload runtime.

#### Results (§V; Tables 2–4; PDF pp. 5–7)

Stronger settings reduce throughput and increase runtime, with the size of the effect depending on product and workload. For MongoDB, Table 2 reports weak-to-strong throughput falling from 867.31 to 38.41 operations/s in workload A, from 927.10 to 307.78 in B, from 840.33 to 301.59 in D, from 513.03 to 244.36 in E, and from 577.05 to 36.46 in F. Table 3 reports corresponding runtime increases. These values describe this particular setup, not an intrinsic MongoDB performance rate.

Table 4 reports MongoDB's average throughput change as −75.07% and runtime increase as +823.53%. The discussion prose later gives different average changes for MongoDB (−60.49% throughput and +719.8% runtime). The article also says its design contains 180 scenarios, although the listed factors (3 products × 2 consistency settings × 5 workloads × 5 operation counts) multiply to 150. These inconsistencies should be resolved against the original figures/tables before citing aggregates.

#### Conclusion and validity limits (§V–§VI; PDF pp. 8–9)

The authors conclude that consistency settings can cause substantial performance changes and that system responses vary by workload. They state that Cassandra may suit cases using weaker consistency, while MongoDB's consistency configuration can be useful where stronger settings are needed; Redis is described as less flexible for strong consistency in this setup.

The test uses only GCP, three nodes, single-threaded workloads, and limited hardware. The authors note that resource limits prevented larger Redis Cluster or higher-concurrency tests. It does not model broad cloud heterogeneity, network changes, node failures, or multi-threaded load. Since each product's consistency options differ, weak and strong settings are approximations for comparison rather than perfectly equivalent semantics.

### Main relevance to Section 6.2

This is direct empirical evidence that consistency choices can change performance for MongoDB, Cassandra, and Redis. It can support a comparison of MongoDB's write concern with Cassandra consistency levels and Redis replica acknowledgements, provided the differences in semantics and test setup are stated. Do not use it to rank all three engines by raw speed.

---

## Paper 3

### Title

Multi-Database NoSQL Performance Analysis: Empirical Selection Framework for Cloud-Native Applications

### Study ID

S023

### Authors

Maryam Abbasi, Paulo Váz, José Silva, Filipe Cardoso, Filipe Sá, and Pedro Martins

### Published

2026

### Proceedings

Procedia Computer Science, 280, 745–752 (2026). Presented at the 9th International Conference on Emerging Data and Industry (EDI40), Istanbul, Türkiye, 14–16 April 2026.

### DOI and source link

- DOI: https://doi.org/10.1016/j.procs.2026.04.094
- ScienceDirect article: https://www.sciencedirect.com/science/article/pii/S1877050926011075

### Source type

Open-access conference proceedings article, CC BY-NC-ND 4.0

### Relevant content available from the paper

#### Abstract (publisher page and PDF p. 1)

The abstract reports a YCSB comparison of five NoSQL systems: Redis, MongoDB, Cassandra, DynamoDB Local, and Couchbase. Dataset sizes range from 100,000 to 10 million records. The stated objective is to compare throughput, latency, scaling, resource use, and tail latency to inform cloud-native database selection.

The abstract reports Redis at 18,450 operations/s and 95 µs for small datasets, with 34% degradation as data size increases. It gives MongoDB throughput of 8,740–11,200 operations/s and latency of 320–441 µs, describing its scaling as predictable. It says Cassandra improves 21% with larger datasets while remaining write-oriented. It reports DynamoDB Local at 6,200–6,800 operations/s and Couchbase at 5,400–8,900 operations/s. The abstract calls the environment containerized and says the study includes concurrent workloads, resource profiling, and tail-latency evaluation.

The phrase “inverse scaling” used for Cassandra in the abstract is not fully clear without the methods and result tables. Do not interpret it more specifically until the full article is checked.

### Main relevance to Section 6.2

The abstract supplies a recent, broad benchmark comparison across key-value (Redis), document (MongoDB), wide-column (Cassandra), and additional NoSQL products. It suggests workload- and scale-specific performance profiles, but the full methodology and tables were not independently extracted in this review pass.

---

## Cross-source comparison note

S021 compares consistency designs across five NoSQL data-model families but does not run a common performance benchmark. S022 empirically tests consistency overhead across Cassandra, MongoDB, and Redis. S023's abstract compares five products using YCSB but its full methods and tables still need review. Together, they can organize the comparison around data model, consistency options, workload, scale, and performance cost. Keep the evidence type and access depth clear for each source.
