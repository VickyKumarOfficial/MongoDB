# Section 6.2 source evaluation

Section: 6.2, MongoDB compared with other NoSQL models

## Purpose

This file records source verification, use, and limits for the 6.2 material in `vicky/key_findings/section_6_2.md`. Study IDs match that file. The shared research tracker was not changed, and no Evidence IDs were added.

## Selected review source: Diogo, Cabral, and Bernardino (2019)

- **Title:** Consistency Models of NoSQL Databases
- **Authors:** Miguel Diogo, Bruno Cabral, and Jorge Bernardino
- **Year / venue:** 2019, *Future Internet*, 11(2), Article 43
- **Study ID:** S021
- **DOI:** https://doi.org/10.3390/fi11020043
- **Publisher page:** https://www.mdpi.com/1999-5903/11/2/43
- **Source type:** Open-access review article, CC BY 4.0
- **Access checked:** Publisher full text, including abstract, model descriptions, consistency sections, summary table, conclusion, and future work.
- **Decision:** Selected for conceptual comparison and historical framing; not a primary benchmark

### What it can support

- A taxonomy comparing Redis/key-value, Cassandra/column-oriented, MongoDB/document, Neo4j/graph, and OrientDB/multi-model databases. **Locations:** §1; §§4.1–4.5.
- A comparison of consistency guarantees, including strong, weak, eventual, causal, session, read-your-writes, monotonic-read, and monotonic-write. **Locations:** §§3.1–3.8.
- The observation that consistency behavior is configurable in several systems and may affect latency, availability, and what values a client can read. **Locations:** §§5.1–5.6; Table 1; Fig. 10.

### Limits and verification needs

The authors state that empirical evaluation of the five selected systems is future work. Cassandra's probability-of-staleness figures use a simulator, not a measured workload shared across five products. The study is a specification- and literature-based review, not an empirical performance comparison.

It was published in 2019 and includes product-specific behavior sourced from then-current documentation. Replication architecture, configuration defaults, editions, and consistency guarantees may have changed. Some broad CAP classifications are configuration-dependent; avoid treating a CAP diagram or one product default as a universal property. Verify current product claims against current official documentation before describing them in present tense.

### Recommended use

Use S021 to structure 6.2 around database model and consistency choices, and as a historical overview of the five products. Do not use it as the sole source for current system behavior or any performance ranking. Cite the relevant model-specific section and label its claims as the 2019 review's description.

## Selected empirical source: Ferreira et al. (2025)

- **Title:** Benchmarking Consistency Levels of Cloud-Distributed NoSQL Databases Using YCSB
- **Authors:** Saulo Ferreira, Júlio Mendonça, Bruno Nogueira, Willy Tiengo, and Ermeson Andrade
- **Year / venue:** 2025, *IEEE Access*, 13, 63428–63438; published 8 April 2025
- **Study ID:** S022
- **DOI:** https://doi.org/10.1109/ACCESS.2025.3558923
- **IEEE Xplore record:** https://ieeexplore.ieee.org/abstract/document/10955378
- **Full-text repository record:** https://research.tilburguniversity.edu/en/publications/benchmarking-consistency-levels-of-cloud-distributed-nosql-databa/
- **Source type:** Open-access empirical journal article
- **Access checked:** IEEE publisher metadata/abstract and open full-text PDF were reviewed, including methods, workload definitions, result tables, threats, and conclusion.
- **Decision:** Selected for consistency-overhead evidence; not a universal product ranking

### What it can support

- Comparing the performance effects of weak and strong consistency configurations in Cassandra, MongoDB, and Redis. **Locations:** §§IV–V; Tables 2–4.
- Showing that the cost varies by YCSB workload. For MongoDB, Table 2 reports throughput drops between about 52% and 96% across the five tested workloads. **Location:** Table 2, PDF p. 5 / journal p. 63432.
- Explaining the configuration mechanisms used in this test: Cassandra ONE vs. ALL, MongoDB write concern `w=1` vs. `w=3`, and Redis `WAIT 0` vs. `WAIT 2`. **Locations:** §IV-A, PDF p. 4; §IV-B, pp. 4–5.

### Limits and internal inconsistencies

The test uses Cassandra 4.0, MongoDB 4.4.18, and Redis 7.2 in a three-node, three-region GCP deployment with 2-vCPU/4-GB nodes. YCSB 0.17.0 runs workloads A, B, D, E, and F with 10K–100K operations in single-threaded runs. The authors exclude read-only workload C because they focus on write consistency. They route requests through a primary for all three systems, but the settings being compared are not equivalent product semantics.

The test is limited to one cloud provider, three nodes, one thread, and constrained resources. It does not test larger Redis Cluster deployments, higher concurrency, or diverse failures and network conditions. More importantly, the paper contains numerical inconsistencies: it reports 180 scenarios although the enumerated factors yield 150; Table 4's average MongoDB differences disagree with averages in the discussion. Check the individual tables before using any aggregate or percentage.

### Evidence locations

- Product models: §III-A and §§III-C–D, PDF p. 3.
- Testbed and consistency settings: §IV-A, PDF p. 4.
- Workloads and parameters: §IV-B, PDF pp. 4–5.
- Per-workload throughput/runtime: Tables 2–3, PDF p. 5.
- Product average impact: Table 4 and §V-B/§V-C, PDF pp. 6–7.
- Threats and limitations: §V-D, PDF p. 8.
- Conclusion: §VI, PDF p. 9.

### Recommended use

Use S022 to show that consistency configuration changes the performance profile of each product and that the effect depends on workload. Avoid comparing its raw numbers directly against S023, whose dataset, environment, products, and accessible reporting differ. State that “strong” is implemented differently across the three products in this test.

## Abstract-only source: Abbasi et al. (2026)

- **Title:** Multi-Database NoSQL Performance Analysis: Empirical Selection Framework for Cloud-Native Applications
- **Authors:** Maryam Abbasi, Paulo Váz, José Silva, Filipe Cardoso, Filipe Sá, and Pedro Martins
- **Year / venue:** 2026, *Procedia Computer Science*, 280, 745–752; EDI40 2026 proceedings
- **Study ID:** S023
- **DOI:** https://doi.org/10.1016/j.procs.2026.04.094
- **Publisher page:** https://www.sciencedirect.com/science/article/pii/S1877050926011075
- **Source type:** Open-access conference proceedings article, CC BY-NC-ND 4.0
- **Access checked:** Publisher abstract and PDF title/abstract page were reviewed. The PDF was open in the browser, but body pages, detailed methods, and result tables were not independently extracted.
- **Decision:** Pending full-text verification; use the abstract only for preliminary leads

### Claims available from the abstract

The abstract reports a YCSB comparison of Redis, MongoDB, Cassandra, DynamoDB Local, and Couchbase over datasets from 100K to 10M records. It reports small-dataset Redis throughput of 18,450 operations/s and latency of 95 µs, with 34% performance degradation at larger scale. It reports MongoDB throughput of 8,740–11,200 operations/s and latency of 320–441 µs; Cassandra improvement of 21% with larger datasets; DynamoDB Local throughput of 6,200–6,800 operations/s; and Couchbase throughput of 5,400–8,900 operations/s. The abstract says the study includes concurrent workloads, resource profiling, and tail latency.

### Limits and verification needs

The reviewed abstract does not identify exact workload mixes, database versions, hardware, topology, repetition counts, or uncertainty measures. It also uses the phrase “inverse scaling” for Cassandra without enough context to interpret that description. The publisher's reference list has apparent title/DOI mismatches, including a reference whose DOI resolves to a plant-disease paper. Verify the full article, methods, tables, and bibliography before treating the abstract figures as established evidence.

### Recommended use

Keep S023 marked pending. It may be a useful lead for a broad five-product NoSQL comparison, but do not include its numerical results in a final synthesis until the body and reference integrity have been checked.

## Cross-source assessment for Section 6.2

S021 offers a historical, conceptual comparison across five NoSQL model families. S022 measures the cost of consistency settings across three systems but does not intend to rank products directly. S023's abstract reports a broad YCSB comparison but remains unverified beyond the first page. Keep these evidence types separate and compare MongoDB with each model through the specific dimensions they measure: data model, consistency, workload, scale, latency, throughput, and resource cost.
