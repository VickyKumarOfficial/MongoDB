# Section 7.1 — Emerging research and application trends

This file captures material relevant to Section 7.1 from the two selected sources. Bibliographic information and source section labels are retained. Findings are summarized in my own words; the notes are not a reproduction of the articles.

## Paper 1

### Title

Performance Evaluation of MongoDB and RavenDB in IIoT-Inspired Data-Intensive Mobile and Web Applications

### Study ID

S027

### Authors

Mădălina Ciumac, Cornelia Aurora Győrödi, Robert Ștefan Győrödi, and Felicia Mirabela Costea

### Published

20 January 2026

### Journal

Future Internet, Volume 18, Issue 1, Article 57

### DOI and source links

- DOI: https://doi.org/10.3390/fi18010057
- Publisher full text: https://www.mdpi.com/1999-5903/18/1/57

### Source type

Open-access journal research article; experimental comparison of two document-oriented databases.

### Relevant content from the paper

#### Abstract and study purpose

The study compares MongoDB and RavenDB through a mobile/web product-order application designed around data-intensive, IIoT-inspired characteristics. It tests datasets from 1,000 to 1,000,000 records and examines more than basic CRUD: join-style related-document retrieval, bulk ingestion, aggregation, and full-text search. The authors present application-driven evaluation as useful for examining how a document database behaves under different operations and data sizes.

#### Application, configuration, and dataset (§4)

The application was implemented with .NET MAUI 8.0.40 and both databases on one MacBook Air M3 (10-core CPU, 8 GB unified memory, 512 GB SSD). MongoDB 7.0.x Community Edition with WiredTiger and RavenDB 7.0 were tested. The study uses default storage-engine settings, with query-related indexes defined for the workloads. Data range from 1,000 to 1,000,000 records; simple documents are about 1 KB, while complex documents are 3–8 KB. The million-record dataset is approximately 1 GB.

The test environment is intended to isolate database-engine behavior under a controlled application workload. The authors explicitly describe it as IIoT-inspired rather than a full deployment involving edge nodes, cloud infrastructure, network delays, replication, or sharding.

#### Comparative results (§§5–6)

The study measures CRUD response time and throughput, and separately tests aggregation, related-document retrieval, bulk ingestion, and full-text search. The paper reports MongoDB as generally faster on its CRUD response-time tests and as achieving higher peak throughput in the reported concurrent tests. RavenDB performs better on several specialized operations in this implementation, including its `Include()` related-document retrieval and bulk-ingestion scenario; its built-in full-text search is also an advantage in the tested search task. The reported comparison is workload-specific: the two systems use different mechanisms for joins and aggregation, including MongoDB `$lookup` and on-the-fly aggregation versus RavenDB `Include()` and materialized Map/Reduce indexes.

For the throughput experiment on one million documents, Table 8 reports results at 1, 8, and 32 client threads. At 32 threads, reported MongoDB/RavenDB throughput (operations per second) is: INSERT 48.100/36.600; SELECT 62.200/48.400; UPDATE 46.800/34.200; DELETE 51.500/39.800. Use these as results from this particular test only.

#### Conclusion and limitations (§§6.5, 7)

The authors recommend choosing between the two systems according to the operation mix and requirements, rather than relying on latency alone. MongoDB's results are favorable for high CRUD throughput and flexible on-demand aggregation in this experiment; RavenDB has advantages for related-document retrieval, its bulk-ingestion implementation, and full-text search. These relative results cannot be generalized to other systems, datasets, versions, or distributed installations.

The experiment is single-host and does not simulate a full IIoT system. Network latency, replication overhead, sharding, and cross-node coordination are absent. Hybrid workloads that shift rapidly between concurrent reads and writes are not fully covered. The discussion reports 50 independent iterations and five warm-ups, while the caption for Table 8 labels its throughput results as 35 measured runs; check the applicable table/method description before using the run count. The article reports averages without formal inferential statistics or confidence intervals.

### Main relevance to Section 7.1

S027 is a recent example of research evaluating MongoDB in data-intensive mobile/web applications inspired by IIoT. It demonstrates a move toward application-shaped, operation-specific evaluations beyond simple CRUD tests. It does not establish an industry-wide trend or show performance in a real distributed IIoT deployment.

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

Open-access journal research article proposing and evaluating an automated design method for document stores.

### Relevant content from the paper

#### Motivation and problem (§1)

Document database design involves choices about whether related data should be embedded or referenced, the direction of references, and how relationships are structured. Those choices create many possible designs and affect more than query speed: they also affect storage use, redundancy, and document complexity. The authors describe design as often relying on trial-and-error or ad hoc rules.

In a small example used to illustrate the difficulty of manual design, the authors report that 63% of surveyed experts identified only three possible designs, and 9% selected the experimentally best design for query performance. The example is deliberately limited; it illustrates the difficulty of the design task rather than measuring general developer competence.

#### Proposed automated approach (§§1, 3–5)

The article proposes a canonical representation of alternative document-store designs and transformations for systematically moving between them. A local-search algorithm uses a loss function and a query workload to identify near-optimal designs. It applies multicriteria optimization because design decisions involve competing goals. The four objectives are storage size, query performance, degree of collection heterogeneity, and average document depth.

The objective is to move beyond optimizing query cost alone. For example, adding redundancy may improve access for some queries but require more storage; deep or heterogeneous documents can make data structures harder to manage. The approach leaves user preferences among these objectives visible in the design process.

#### Evaluation (§6)

The authors compare their DocDesign approach with an existing document-store design solution using the RUBiS benchmark. The paper reports that generated designs can improve performance while reducing redundancy and storage size relative to the comparison approach, and that the method scales as entities and relationships increase. Treat these as results for the prototype and tested workload.

#### Conclusion (§7)

The paper contributes a workload-driven automated method that evaluates alternative document structures across multiple objectives. It provides research evidence for algorithmic assistance in document-store design; it does not demonstrate broad industry adoption or establish a single optimal design for MongoDB applications in general.

### Main relevance to Section 7.1

S028 supports a research trend toward automated, workload-aware schema and document design. It is relevant to MongoDB because MongoDB is a document store and is discussed in the article, but the method targets document stores generally. Its prototype benchmark should not be used as evidence of adoption across production systems.
