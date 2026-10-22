# Section 6.3 — Selection criteria and workload trade-offs

This file records relevant content from the three selected sources for later drafting. The source structure and evidence locations are retained; descriptions paraphrase the published material. Selection frameworks, benchmark-method guidance, and measured results are distinguished because they support different kinds of claims.

## Paper 1

### Title

Selecting databases for Polyglot Persistence applications

### Study ID

S024

### Authors

Noa Roy-Hubara, Peretz Shoval, and Arnon Sturm

### Published

2022

### Journal

Data & Knowledge Engineering, Volume 137, Article 101950

### DOI and source links

- DOI: https://doi.org/10.1016/j.datak.2021.101950
- ScienceDirect record: https://www.sciencedirect.com/science/article/pii/S0169023X21000744

### Source type

Peer-reviewed research article proposing and evaluating a database-model selection method

### Relevant content from the paper

#### Motivation and requirements (§1; Abstract)

The authors argue that selecting a database solely because it is popular, familiar to an organization, or convenient to explore can produce a poor fit for an application's needs. They frame selection around the application's data, functional requirements, and non-functional requirements (NFRs). Because different parts of an application can have different needs, the method can recommend more than one database model, supporting polyglot persistence. The paper treats selection as a requirements-fit problem, not a contest to identify one universally best database.

#### Background and model profiles (§3)

The background reviews database model families and quality dimensions used in selection. The model profiles consider relational, key-value, column-oriented, graph, and document models, and discuss NewSQL in the broader model landscape. NFR dimensions include consistency, integrity, flexibility, volume, velocity, veracity, and query complexity. These dimensions make explicit that trade-offs concern both data/workload fit and system qualities; the method does not reduce the decision to raw throughput.

#### Requirement-based database selection method (§4)

The Requirement-based Database Selection Method (RbDSM) begins with an application's conceptual data model, represented using a UML class diagram, then identifies related data and requirements to recommend suitable database model(s) for data fragments. Its five-step process uses a weighted proximity/distance representation to group classes, DBSCAN clustering, and model profiles. The criteria weights are derived with an Analytic Hierarchy Process (AHP) approach. The method therefore makes the decision inputs visible: the conceptual model, the requirements, the profile scores, and the relative importance assigned to each NFR.

#### Sensitivity analysis (§5)

The authors examine how recommendations can change when NFR weights and DBSCAN parameters change. This is useful for selection decisions because it recognizes that the chosen priorities and clustering choices affect the output. A recommendation should therefore be interpreted in light of the assumptions and weights used, rather than treated as an invariant ranking of database products.

#### Evaluation and case studies (§6)

The method is evaluated through three cases: an RbDSM tool, a knowledge-management platform, and an industry case. The evaluation offers examples of applying the requirements-based method in distinct settings. The authors identify validation in real settings as future work, so these cases do not establish a universal or fully validated product-selection rule.

#### Summary and limitations (§7)

The paper summarizes a process that starts from an application's conceptual data model and requirements and ends with database-model recommendations for its data fragments. Its practical result depends on the quality of the requirements, model profiles, and selected weights. The method supports structured comparison of model fit; it is not a controlled performance benchmark and does not establish MongoDB-specific latency or throughput advantages.

### Main relevance to Section 6.3

S024 supports selecting database models from explicit data, functional, and non-functional requirements, including the possibility that different application components may need different models. It is useful for explaining requirement priorities and sensitivity in database selection. Use it as a decision-framework source, not as evidence that MongoDB or another product performs best on a particular workload.

---

## Paper 2

### Title

Database management system performance comparisons: A systematic literature review

### Study ID

S025

### Author

Toni Taipalus

### Published

February 2024

### Journal

Journal of Systems and Software, Volume 208, Article 111872

### DOI and source links

- DOI: https://doi.org/10.1016/j.jss.2023.111872
- ScienceDirect record: https://www.sciencedirect.com/science/article/pii/S0164121223002674
- Full-text PDF: https://dbs-research.github.io/pdf/2023_performance.pdf

### Source type

Open-access systematic literature review of empirical DBMS performance comparisons

### Relevant content from the paper

#### Aim and scope (§1)

The review synthesizes how DBMS performance-comparison studies are designed and reported, and what can be concluded from them. It does not run a new MongoDB-versus-relational benchmark. Its core warning is that many existing experiments do not represent real-world use and omit enough methodological detail to make results reproducible or conclusions dependable.

#### Performance measures and benchmark workloads (§3)

The paper distinguishes response time (latency) from throughput. Response time alone may not describe an online transaction-processing system under concurrent use; throughput requires a workload that represents operations arriving and executing together. Application requirements also include consistency: stronger consistency or fresher reads may change performance, so consistency settings should be part of the workload and configuration description.

The review discusses TPC benchmarks for relational transaction and decision-support scenarios and YCSB as an extensible framework for serving systems and multiple data models. YCSB enables different read/write mixes, but many of its standard operations are single-operation transactions and it does not impose strong consistency. A benchmark's name alone therefore does not establish that it models a target application: the operation mix, transaction behavior, consistency assumptions, and data access patterns still need to be stated.

#### Search and study selection (§4.1; Tables 1–2)

The review searched ACM Digital Library, IEEE Xplore, and ScienceDirect, supplemented by Google Scholar and three rounds of backward snowballing. It included English-language, full-text, peer-reviewed empirical studies published from 2000 through March 2022 that objectively compared query execution in at least two distinct DBMSs. It excluded work comparing configurations of one DBMS, studies focused only on replication or join algorithms, and gray literature. The resulting corpus contains 117 studies covering 44 DBMSs. These inclusion criteria define the evidence base and its limits.

#### Results and context dependence (§§4.2–5)

The reviewed studies span different operation types and test designs: 48 are read-only, six write-only, and most of the remainder include both reads and writes. Results across studies do not yield a stable universal ranking. The review gives examples of cyclical outcomes—MongoDB outperforms Cassandra in some read comparisons, Cassandra outperforms Redis in others, and Redis outperforms MongoDB in still others. The point is that relative performance changes with the selected systems, data, workload, and environment.

Benchmark practice is often weakly reported. Only 22 of the 117 studies used established benchmark suites; many relied on ad hoc queries, often without disclosing them. More than 80% of the primary studies used single-user ad hoc query tests, limiting what those results can say about concurrent production workloads. The review notes that missing DBMS settings, execution details, and workload descriptions can prevent reproduction even when hardware is reported.

#### Industry-facing selection considerations (§6.2.1)

For a useful evaluation, the benchmark should match the business domain, data volume and type, read/write ratio, concurrency, hardware and parallel execution, and local or distributed deployment. Consistency and availability settings also need to reflect the intended system behavior. Tests should separate concurrent from sequential execution, include relevant access skew or hotspots, and distinguish bulk loading from row-by-row inserts where those patterns matter. OLTP and OLAP workloads are not interchangeable. A DBMS advantage measured for one workload or deployment can reverse in another.

#### Other selection criteria (§6.2.2)

The review advises considering feature fit and implementation constraints alongside response time and throughput. These include consistency needs, storage cost, existing skills and SQL familiarity, and migration or implementation effort. Some NoSQL performance advantages may rely on redundant data, which can increase storage and create consistency-management costs. Resource use can also trade off against response time. Product selection should therefore account for the cost and feasibility of the design that produces the measured performance.

#### Research recommendations and limitations (§§6.3–6.4; §7)

The author recommends following accepted benchmarking guidance and reporting enough detail for reproduction, including DBMS parameters, query/workload definitions, concurrency, and execution setup. Domain and system expertise should inform fair tuning; an independent party can help reduce bias and investigate why one system is faster. The review also cautions that its search may have missed eligible studies, its classifications and interpretations involve human judgment, and its publication window ends in March 2022.

### Main relevance to Section 6.3

S025 is the strongest source here for methodological caution and practical workload selection. It supports matching benchmark conditions to expected operations, concurrency, data, deployment, and consistency needs, while treating measured rankings as conditional. Its study examples should not be recast as a current universal ranking of MongoDB against relational databases.

---

## Paper 3

### Title

Benchmarking Cloud Serving Systems with YCSB

### Study ID

S026

### Authors

Brian F. Cooper, Adam Silberstein, Erwin Tam, Raghu Ramakrishnan, and Russell Sears

### Published

10 June 2010

### Proceedings

Proceedings of the 1st ACM Symposium on Cloud Computing (SoCC ’10), pp. 143–154

### DOI and source links

- DOI and ACM record: https://doi.org/10.1145/1807128.1807152
- Full-text PDF consulted: https://pages.cs.wisc.edu/~akella/CS838/F12/838-CloudPapers/ycsb.pdf

### Source type

Peer-reviewed conference paper introducing the Yahoo! Cloud Serving Benchmark (YCSB) and framework

### Relevant content from the paper

#### Benchmark design and evaluation criteria (§§1, 3, and 8)

YCSB was designed to compare cloud serving systems across a range of workload characteristics rather than produce a single score for one application. The authors discuss four benchmark-design criteria: relevance to the application domain, portability across systems, scalability, and simplicity. They focus on CRUD-style serving operations because the systems under study do not all expose the same relational query capabilities. A benchmark should therefore make clear what kind of application it represents and allow systems to be compared using comparable operations.

The paper separates performance testing into latency as offered throughput increases toward saturation, and scalability testing as data, workload, and server count grow. It also studies elastic expansion, where servers are added while the workload is running. These dimensions help distinguish a system's capacity under a fixed setup from its behavior as demand and deployment size change.

#### Workload characteristics (§4; Table 2)

The core workload operations include record reads, updates, inserts, and short range scans. Five workloads vary the operation mix and access pattern:

- Workload A: 50% reads and 50% updates, representing an update-heavy session-store pattern.
- Workload B: 95% reads and 5% updates, representing a read-mostly profile-tag pattern.
- Workload C: 100% reads, representing a profile cache.
- Workload D: 95% reads and 5% inserts, with access to the latest items, representing status updates.
- Workload E: 95% short scans and 5% inserts, representing threaded conversations.

The framework also varies key-selection distributions. Uniform selection spreads requests evenly; Zipfian selection concentrates requests on popular records; latest-item selection emphasizes recent records. These choices make skew and recency explicit workload dimensions. The examples are representative patterns, not exact replays of particular production applications.

#### Measured trade-offs (§§6.1–6.6)

The paper's tested systems were Cassandra, HBase, PNUTS, and a basic client-hash-sharded MySQL implementation, not MongoDB. Results differ by workload: systems with stronger write performance may have higher read latency, and range-scan performance differs from point-read performance. In the reported write-mix experiment, Cassandra reached higher throughput than the other tested configurations, while read-heavy workloads favored different systems. HBase and PNUTS behaved differently on short versus longer scans. These results illustrate workload-specific trade-offs, not current product rankings.

Scale-up tests showed that Cassandra and PNUTS could maintain nearly constant latency as servers, data, and load increased proportionally in the tested setup. Elastic expansion introduced additional effects: repartitioning could cause latency variation, with the behavior differing between systems. A system's response to growing capacity therefore needs to be measured as part of the intended operating model.

#### Replication and additional dimensions (§7.2)

The authors propose replication-related measures such as performance impact, availability, data freshness, and wide-area behavior as additional benchmark dimensions. These are proposed extensions, not results measured in the paper's main experiments.

### Main relevance to Section 6.3

S026 supplies a concrete framework for choosing representative workload mixes and measuring latency, throughput, scale-up, and elastic expansion. It supports evaluating read/write proportions, update versus insert behavior, point reads versus scans, skew, and recency. The paper is old and does not test MongoDB, so cite it for benchmark design and workload-driven trade-offs, not for present-day product performance.

---

## Cross-source comparison note

S024 offers a requirements-based database-model selection method and highlights sensitivity to requirement weights. S025 synthesizes weaknesses in published DBMS comparisons and gives practical criteria for representative, reproducible testing. S026 shows how to express workload differences as benchmark mixes and scaling tests. Together, these sources support a selection discussion that starts from application requirements, tests representative workloads using suitable measures, and includes operational constraints such as consistency, scale, storage, skills, and migration effort. None establishes a universal MongoDB ranking.
