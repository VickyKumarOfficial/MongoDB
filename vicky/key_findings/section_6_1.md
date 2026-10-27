# Section 6.1 — MongoDB compared with relational systems

This file collects source details and relevant findings for later drafting. The descriptions below follow the papers' organization but paraphrase their content; they are not substitute copies of the published text. Check the cited sections, figures, and tables before using numerical results in the manuscript.

## Paper 1

### Title

MongoDB Vs PostgreSQL: A comparative study on performance aspects

### Study ID

S018

### Authors

Antonios Makris, Konstantinos Tserpes, Giannis Spiliopoulos, Dimitrios Zissis, and Dimosthenis Anagnostopoulos

### Published

Online 5 June 2020; issue date April 2021

### Journal

GeoInformatica, 25, 243–268 (2021)

### DOI and source link

- DOI: https://doi.org/10.1007/s10707-020-00407-w
- Publisher full text: https://link.springer.com/article/10.1007/s10707-020-00407-w

### Related content from the paper

#### Abstract and introduction (§1)

The study asks which of MongoDB and PostgreSQL with PostGIS gives shorter response times for industrial spatio-temporal data queries. The authors use real maritime tracking data and queries based on MarineTraffic scenarios. They report PostgreSQL as faster for almost all tested queries, with a polygon-intersection query as the exception. Across the tested queries, the paper reports an average PostgreSQL speedup of about 2.1. It also reports a larger response-time benefit from indexes in MongoDB than in PostgreSQL. These results apply to the study's query set and deployment, not to every relational or document-database workload.

#### Dataset and query design (§4.1–§4.2)

The dataset contains 146,491,511 AIS records for 43,288 vessels, stored as an 11 GB source dataset. The selected Mediterranean region covers 1 May through 31 July 2016. The paper describes eleven queries covering ship and time-window selection, polygon searches, spatio-temporal proximity, port-area searches, distance and speed calculations, and polygon intersection. It varies sample sizes and geographic selections, including busy ports. Query families include point, trajectory, time, and polygon conditions, making this a spatial and temporal workload rather than a general CRUD benchmark.

#### Systems and test setup (§3, §4.3–§4.5)

The comparison uses MongoDB 3.6.5 and PostgreSQL 9.5.13 with PostGIS 2.2.1, each on a five-node AWS cluster with matching r4.xlarge instances. MongoDB uses a primary and four secondaries; PostgreSQL uses a master and four streaming replicas with Pgpool-II routing. The systems do not use identical read-routing mechanisms: MongoDB uses a nearest read preference, while Pgpool-II distributes read-only PostgreSQL queries to replicas. The authors warm up queries, run each experiment five times, and report mean response time. Indexes are query-specific, including B-tree indexes for ship and time fields, MongoDB 2dsphere, and PostgreSQL GiST indexes.

#### Results (§5; Figs. 6–12)

PostgreSQL is faster for most of the tested query families, including several point, time-window, distance, speed, and proximity cases. The reported advantage varies by query and sample size. MongoDB wins the polygon-intersection case, which the authors attribute as a possible effect of their query implementation. The paper also shows that query implementation matters: one PostGIS buffer-based approach is reported as 3.6 times faster than the `ST_DWithin` alternative in their test.

In a small no-index experiment on Q4, the paper reports a very large slowdown for both systems. It gives 66,606.39 seconds for MongoDB and 32,637.99 seconds for PostgreSQL in the tested case. These unusually large values should be checked against the figure and original paper before being quoted. The study reports database storage of about 116 GB for MongoDB and 32 GB for PostgreSQL for this dataset and representation.

#### Conclusion (§6)

The authors conclude that PostgreSQL had lower response times for nearly all the tested spatio-temporal queries, while MongoDB performed better for polygon intersection. Indexing reduced response times, with a larger reported effect for MongoDB. They identify testing additional systems and evaluating sharded or shared-cluster architectures as future work.

### Main relevance to Section 6.1

This is the most directly relevant source for a MongoDB–relational comparison in spatial and temporal workloads. It shows why a review should name the relational engine, extensions, indexes, query type, data, cluster design, and routing strategy when discussing performance. It does not establish a general PostgreSQL-over-MongoDB rule.

---

## Paper 2

### Title

Performance evaluation of Twitter datasets on SQL and NoSQL DBMS

### Study ID

S019

### Authors

Franklin Leung and Bing Zhou

### Published

First published online 18 November 2016

### Journal

Web Intelligence, 14(4), 275–286 (2016)

### DOI and source links

- DOI: https://doi.org/10.3233/WEB-160344
- Publisher article: https://journals.sagepub.com/doi/10.3233/WEB-160344
- Publisher PDF: https://journals.sagepub.com/doi/pdf/10.3233/WEB-160344

### Related content from the paper

#### Abstract and objective

The authors compare four systems for storing and querying Twitter data: Microsoft SQL Server, PostgreSQL, MongoDB, and Redis. They test datasets ranging from one million to fifty million records and aim to help readers choose a system for a local Twitter-data analysis task. The authors present the results as guidance tied to differing requirements.

#### Database versions, data, and test machine (§2.3, §5.1–§5.4; Tables 3–4)

The versions tested are SQL Server 2014 Enterprise 12.0.4100.1, PostgreSQL 9.4.1, MongoDB 3.0.1, and Redis 2.8. The test used Windows Server 2012 with an Intel i7-4790 3.60 GHz CPU and 32 GB RAM. Each database ran in a Windows 7 virtual machine configured with four virtual CPUs and 16 GB RAM; only one database VM ran at a time.

The initial collection had about 1.17 million filtered tweets. To create larger test sizes, the authors duplicated the same tweet content and changed tweet IDs. Thus, the 50-million-row dataset is not 50 million distinct tweets. Redis could not complete the 25-million- and 50-million-record tests because of memory limits.

#### Operations and workload design (§4.1–§4.3; Tables 1–2)

The tests use operations on tweet records, particularly lookup and update by `tweet_id`, as well as a separate insert test. The tested collection sizes are 1M, 5M, 10M, 25M, and 50M. Workload B is 450 reads and 50 updates (95% read); workload C is 500 reads; the insert test adds 1,000 rows/documents to an empty database or collection. Tests use randomly selected existing IDs, and MongoDB has an index on `tweet_id`.

The description of workload A is internally inconsistent: it is labeled 50/50 read/write, but the listed operations are 500 updates. Treat its measured result as an update-only result unless the paper's authors clarify the discrepancy. The paper does not make index parity across all database systems sufficiently clear in the schema description, so avoid assuming identical index configurations.

Each workload runs its core operations repeatedly: 500 operations per run and 100 timed loops are described. Results are reported as average times. The dataset and operations are narrow compared with an application workload involving joins, complex predicates, or distributed scaling.

#### Results (§6.1–§6.5; Tables 5–15)

For workload B, MongoDB's average read-heavy operation times are about 74–78 ms across the tested sizes, while SQL Server and PostgreSQL generally take longer in the reported tables. Redis is faster at some sizes but is not consistently so. In read-only workload C, MongoDB reports about 27–30 ms, below the SQL systems' reported times; Redis results are available only for smaller sizes.

For workload A, SQL Server reports lower times than MongoDB and PostgreSQL, but its result varies and the workload definition is inconsistent. In the 1,000-insert test, the reported averages are about 2,069 ms for SQL Server, 633 ms for PostgreSQL, 466 ms for MongoDB, and 419 ms for Redis.

The authors favor MongoDB overall for their tested Twitter storage and retrieval case, while also describing SQL Server's variability, PostgreSQL's steadier results, and Redis's memory constraints. The evidence supports workload-specific comparison, not a broad conclusion that MongoDB is faster than relational systems.

#### Conclusion and future work (§7)

The authors recommend choosing a database according to the application's needs. They call for tests on stronger hardware and with more complex operations, including joins and resource-intensive queries.

### Main relevance to Section 6.1

This source compares MongoDB directly with two relational systems using multiple dataset sizes and read, update, and insert cases. It is useful as an older, workload-specific example, especially to contrast with the spatio-temporal query study above. Its old versions, duplicated records, single-host virtualized setup, memory-limited Redis runs, and workload-A inconsistency must accompany any reported result.

---

## Paper 3

### Title

Benchmarking SQL and NoSQL Persistence in Microservices Under Variable Workloads

### Study ID

S020

### Authors

Nenad Pantelić, Ljiljana Matić, Lazar Jakovljević, Stefan Eric, Milan Eric, Miladin Stefanović, and Aleksandar Đorđević

### Published

15 January 2026

### Journal

Future Internet, 18(1), Article 53 (2026)

### DOI and source links

- DOI: https://doi.org/10.3390/fi18010053
- Publisher full text: https://www.mdpi.com/1999-5903/18/1/53
- Publisher PDF: https://www.mdpi.com/1999-5903/18/1/53/pdf

### Related content from the paper

#### Abstract and introduction (§1)

The paper compares relational persistence with MongoDB through a containerized microservice application. It distinguishes indexed SQL, non-indexed SQL, and MongoDB, and tests read-heavy (RH), write-heavy (WH), and mixed (MX) workloads at concurrency levels from 1 to 1,000. It reports p95 latency, throughput, CPU use, and RAM use. The authors frame the work as a controlled comparison of trends, rather than an absolute production benchmark.

#### Methodology (§3)

The REST-based application and databases run in Docker containers on one host, without replication or sharding. Workloads use GET requests for reads, POST/PUT requests for writes, and a mixture for MX. The concurrency levels are 1, 10, 50, 100, 500, and 1,000 clients. The relational engine is MySQL 5.7.36. The application uses Spring Boot, Spring Data JPA/Hibernate for SQL, and Spring Data MongoDB for MongoDB. The host is described as an 8-core system with 16 GB RAM and 512 GB local storage. Database instances are restarted and state cleared between experimental cycles. The article says scenarios are repeated but does not clearly state a repetition count in the system and measurement description.

The study also reports supplementary hybrid SQL variants, in addition to the three configurations described as its primary comparison. Treat those hybrid results as secondary to the indexed-SQL, non-indexed-SQL, and MongoDB comparison.

#### Results (§4; Figs. 2–7, Tables 2–5)

The authors report indexed SQL as the strongest configuration for RH workloads. Average throughput is about 472 requests per second for indexed SQL, 313 for MongoDB, and 145 for SQL without an index. MongoDB leads in WH, at about 468 requests per second compared with 278 for indexed SQL and 176 for non-indexed SQL. In MX, indexed SQL and MongoDB are close, at about 373 and 365 requests per second, while non-indexed SQL is about 140.

The reported latency pattern follows the workload: indexed SQL has the best RH results; MongoDB has the best WH results; and indexed SQL and MongoDB are competitive in MX. The paper reports higher CPU and RAM use for MongoDB. For RAM, it reports MongoDB averages of roughly 1,180 MB in WH and 1,255 MB in MX; indexed SQL has the lowest footprint, with averages between about 936 MB and 1,008 MB across workloads. These are the study's reported averages under its particular single-host configuration.

#### Discussion and conclusion (§5–§6)

The authors attribute indexed SQL's RH performance to indexed access paths and MongoDB's WH results to its write behavior under the tested application design. They interpret non-indexed SQL's read results as a consequence of table scans. For MX, they report similar SQL and MongoDB performance, with some higher-concurrency cases favoring indexed SQL. Their conclusion is that no configuration leads in every workload: workload-specific selection matters, and MongoDB's higher resource consumption is part of its trade-off.

### Main relevance to Section 6.1

This recent study adds microservice-style workloads and tail latency, throughput, and resource measurements to the comparison. It reinforces the need to include indexing and workload mix when comparing MongoDB with relational systems. Because it uses one host, no replication or sharding, and application-specific requests, it cannot establish production-cluster performance or universal SQL/NoSQL rankings.

---

## Cross-source comparison note

Across these studies, the winner changes with the question being asked. PostgreSQL leads most maritime spatial/temporal queries in S018; MongoDB does well on some read-heavy Twitter cases in S019, whose workload and data construction have important limitations; and MongoDB leads write-heavy microservice tests while indexed MySQL leads read-heavy tests in S020. Treat these as three bounded case studies. The paper should compare their systems, versions, data, indexing, operations, deployment, and metrics before drawing selection guidance.
