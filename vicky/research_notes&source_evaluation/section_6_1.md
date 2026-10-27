# Section 6.1 source evaluation

Section: 6.1, MongoDB compared with relational systems

## Purpose

This note records the source checks, evidence scope, and limitations for the three studies collected in `vicky/key_findings/section_6_1.md`. Study IDs match that file. The shared research tracker was not changed, and no Evidence IDs have been assigned here.

## Selected primary study: Makris et al. (2021)

- **Title:** MongoDB Vs PostgreSQL: A comparative study on performance aspects
- **Authors:** Antonios Makris, Konstantinos Tserpes, Giannis Spiliopoulos, Dimitrios Zissis, and Dimosthenis Anagnostopoulos
- **Year / venue:** 2021, *GeoInformatica*, 25, 243–268; published online 5 June 2020
- **Study ID:** S018
- **DOI:** https://doi.org/10.1007/s10707-020-00407-w
- **Publisher full text:** https://link.springer.com/article/10.1007/s10707-020-00407-w
- **Source type:** Journal research article; publisher identifies it as open access
- **Access checked:** Full publisher article text was available in the open browser tab. Metadata, abstract, methods, results, conclusion, and correction notice were reviewed.
- **Decision:** Selected for a narrow, workload-specific comparison

### Claims it can support

- In the tested maritime AIS workload, PostgreSQL/PostGIS returned results faster for most of the eleven spatio-temporal queries; MongoDB performed better on the polygon-intersection case. **Locations:** Abstract; §1; §5, Figs. 6–12; §6.
- The paper reports an average PostgreSQL speedup of about 2.1 over its query set. Use only as this study's aggregate result, not as a general database speed ratio. **Locations:** §1 and §5, Fig. 12.
- Indexing substantially affected response times, with a larger reported benefit for MongoDB in the tested setup. **Locations:** §5, no-index Q4 discussion and Fig. 12; §6.
- A particular PostGIS query implementation affected performance; the authors report the buffer/prepared-geometry alternative outperforming `ST_DWithin` in their test. **Location:** §5, Q5 discussion, Fig. 10.

### Scope, quality checks, and limitations

The publisher page confirms the title, author list, venue, volume, issue pages, DOI, online date, and issue date. It notes a 25 September 2020 correction; the publisher describes the update as a retrospective open-access order, not a change to results. The paper compares MongoDB 3.6.5 with PostgreSQL 9.5.13/PostGIS 2.2.1, uses an 11 GB AIS source dataset and maritime-specific operations, and focuses mainly on mean response time. It does not test a broad mix of writes, transactions, consistency, availability, or general application CRUD.

The five-node clusters are replicated, but not sharded. Read handling differs between systems: MongoDB uses a nearest read preference, while Pgpool-II routes PostgreSQL read-only queries to replicas. The article uses query-specific indexes and warm-up runs; only a small subset is tested without indexes. Several large Q7/Q8 cases are omitted because of very high runtimes. Those design choices limit direct generalization and may affect comparability.

The authors report MongoDB and PostgreSQL data footprints of roughly 116 GB and 32 GB for this dataset. Treat this as a storage-format and implementation result for their experiment. The no-index Q4 times are printed as 66,606.39 seconds for MongoDB and 32,637.99 seconds for PostgreSQL. The magnitudes are surprising, so verify the figure and units before citing the numbers.

### Recommended use

Use S018 as a concrete example that spatial query type, index design, query implementation, replication, and read routing affect comparative performance. Do not present its result as evidence that PostgreSQL generally outperforms MongoDB. Cite section and figure locations instead of relying on the abstract alone.

## Selected primary study: Leung and Zhou (2016)

- **Title:** Performance evaluation of Twitter datasets on SQL and NoSQL DBMS
- **Authors:** Franklin Leung and Bing Zhou
- **Year / venue:** 2016, *Web Intelligence*, 14(4), 275–286; first published online 18 November 2016
- **Study ID:** S019
- **DOI:** https://doi.org/10.3233/WEB-160344
- **Publisher article:** https://journals.sagepub.com/doi/10.3233/WEB-160344
- **Publisher PDF:** https://journals.sagepub.com/doi/pdf/10.3233/WEB-160344
- **Source type:** Journal research article
- **Access checked:** Publisher article and PDF were open in the browser; methods, tables, discussion, and conclusion were reviewed.
- **Decision:** Selected, with explicit methodological cautions

### Claims it can support

- The relative results for SQL Server, PostgreSQL, MongoDB, and Redis differ across read, update, and insert workloads and dataset sizes. **Locations:** §4–§6, Tables 1–15.
- In the reported Twitter-data tests, MongoDB had low times for the described read cases, while SQL Server did better in the update-labeled case and SQL systems differed in the insert test. **Locations:** §6.1–§6.5, Tables 5–15.
- Database selection depends on the specific operation and setup. The source is useful for comparison framing, but not for a general claim that one data model is faster.

### Scope, quality checks, and limitations

Publisher metadata confirms the authors, article, journal, issue, pages, DOI, and 2016 publication information. The study compares SQL Server 2014, PostgreSQL 9.4.1, MongoDB 3.0.1, and Redis 2.8 in virtual machines on one Windows Server host, rather than testing cluster-scale behavior. Its data begins with about 1.17 million filtered tweets; larger collections are made by duplicating the same tweet content and changing IDs. Therefore, the 50-million-record size does not represent 50 million distinct tweets.

The paper's workload A is labeled 50/50 read/write, but its described commands are 500 updates. Flag this contradiction and avoid describing its values as a balanced workload. The text explicitly mentions a MongoDB `tweet_id` index but does not establish equivalent index configuration across all tested systems. Redis does not complete the largest tests because of memory limits. These facts weaken cross-system fairness and generalizability.

The tests use old database versions, a single machine, a narrow set of record operations, and average times. The authors themselves identify stronger hardware and more complex queries, including joins, as future work. Do not rely on this study for current release performance, distributed scaling, complex relational query performance, or universal SQL-versus-NoSQL claims.

### Evidence locations

- Versions: §2.3, p. 277.
- Scope/objective: §3, p. 278.
- Operation and timing protocol: §4.1 and Table 1, p. 278.
- Workload definitions, MongoDB index, and Redis size restriction: §§4.2–4.3 and Table 2, p. 279.
- Hardware/VM setup: Tables 3–4, p. 279.
- Data collection, filtering, and duplicated-record expansion: §§5.1–5.4, pp. 279–280.
- Per-workload results: Tables 5–15, pp. 280–283.
- Overall analysis and recommendations: §6.5 and §7, p. 285.

### Recommended use

Use S019 as an older example that comparison results shift with operation, dataset size, and configuration. Pair it with stronger or more recent evidence for any contemporary recommendation. Preserve the workload-A contradiction and data-duplication caveat wherever the corresponding results are discussed.

## Selected primary study: Pantelić et al. (2026)

- **Title:** Benchmarking SQL and NoSQL Persistence in Microservices Under Variable Workloads
- **Authors:** Nenad Pantelić, Ljiljana Matić, Lazar Jakovljević, Stefan Eric, Milan Eric, Miladin Stefanović, and Aleksandar Đorđević
- **Year / venue:** 2026, *Future Internet*, 18(1), Article 53; published 15 January 2026
- **Study ID:** S020
- **DOI:** https://doi.org/10.3390/fi18010053
- **Publisher full text:** https://www.mdpi.com/1999-5903/18/1/53
- **Source type:** Journal research article; publisher marks the article open access
- **Access checked:** Full publisher article was available in the browser and through publisher-indexed text. Metadata, abstract, experimental design, results, discussion, conclusion, and data statement were reviewed.
- **Decision:** Selected as a recent controlled microservice case study; use results within its narrow scope

### Claims it can support

- Indexed SQL leads in the tested read-heavy workload; MongoDB leads in write-heavy throughput; indexed SQL and MongoDB perform similarly in the mixed workload. **Locations:** §4.2, Fig. 4 and Table 3; §§5.1–5.3; §6.
- The paper reports average throughput of roughly 472, 313, and 145 requests/s for indexed SQL, MongoDB, and non-indexed SQL in RH; 278, 468, and 176 requests/s for indexed SQL, MongoDB, and non-indexed SQL in WH; and 373, 365, and 140 requests/s in MX. Verify table values before manuscript citation.
- MongoDB's higher throughput in the write-heavy case comes with higher reported CPU and RAM use. **Locations:** §§4.3–4.4, Figs. 5–6 and Tables 4–5; §5.3.
- The source supports workload-aware comparison in a microservice setting, not a universal performance ranking.

### Scope, quality checks, and limitations

Publisher metadata confirms the article's title, authors, journal, volume, article number, DOI, publication date, and open-access status. The SQL engine is MySQL 5.7.36. The experiment uses Spring Boot services and Docker containers on one host with 8 CPU cores, 16 GB RAM, and 512 GB local storage. It does not use replication or sharding. Workloads are application-level REST GET, POST/PUT, or mixed requests; the tested concurrency levels are 1, 10, 50, 100, 500, and 1,000. Metrics include p95 latency, throughput, CPU, and RAM.

The article describes both three primary configurations (indexed SQL, non-indexed SQL, MongoDB) and two supplementary hybrid SQL configurations. Keep the core three-system comparison separate from hybrid results. The methodology says scenarios were repeated but the reviewed description does not give a clear repetition count. The raw data is available from the authors on request, rather than through a linked public dataset. Results should be treated as relative trends from this specific one-host application setup. They do not establish performance in a replicated, sharded, cloud, or production environment.

### Recommended use

Use S020 for recent workload and resource comparisons and as an example of how indexing changes the SQL baseline. Before citing exact values, confirm each table and identify the corresponding configuration and workload. Pair with sources using other SQL engines and domains; MySQL results are not interchangeable with PostgreSQL results.

## Cross-source assessment for Section 6.1

These three studies do not produce one universal winner. S018 favors PostgreSQL for most maritime spatial/temporal queries, S019 reports MongoDB as competitive or faster in some Twitter read cases under a dated and constrained setup, and S020 finds indexed MySQL strongest for reads but MongoDB strongest for writes in its one-host microservice benchmark. They should be compared by workload, SQL engine, database version, data representation, indexing, deployment, and measured metric.

For the final paper, present these as bounded case studies and state why the results differ. Do not pool their response times or throughput values. No Evidence IDs were added because the shared tracker was intentionally left untouched; assign matrix IDs only when the team updates that record.
