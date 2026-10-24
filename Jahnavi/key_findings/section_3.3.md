# Paper 1

### Title
Exploring the merits of nosql: A study based on mongodb

### Study ID
S006

### Author
Benymol Jose and Sajimon Abraham

### Affiliation
Department of Computer Applications, Adi Shankara Institute of Engineering and Technology, Kalady, Kerala, India

### Published
2017

### Journal
International Conference on Networks & Advances in Computational Technologies (NetACT), pp. 250–255

### Source links
https://ieeexplore.ieee.org/document/8076778

https://www.researchgate.net/publication/320490928_Exploring_the_Merits_of_NoSQL_A_Study_Based_Preferences_on_MongoDB

### DOI
10.1109/NETACT.2017.8076778

### Related content
#### 3.3 Embedding, referencing, and relational comparison

Data modeling in MongoDB primarily revolves around two paradigms: embedded documents and references. In an embedded document model, related data structures are nested directly inside a single parent document (denormalization). This approach is ideal for one-to-one and one-to-many relationships where child items do not require independent access, eliminating the need for expensive join operations and resulting in single-query retrieval. Conversely, the referenced data model stores data across separate collections and utilizes reference pointers (similar to relational foreign keys) to establish relationships. This is preferred for many-to-many relationships or to prevent exceeding MongoDB’s 16 MB document size limit.

When compared relationally, MongoDB replaces rigid multi-table SQL join queries with flexible single-document reads. While relational databases enforce strict ACID properties via normalization, MongoDB trades rigid transactional consistency for horizontal scalability, high write throughput, and reduced query latency on nested hierarchies.

### Exact Keyword Matching & Quantitative Context
**Keyword Matches:**

- **Embedding:** Explicitly cited in Section 3.3 as the denormalized data modeling approach of nesting related entities within a single parent document.

- **Referencing:** Highlighted in Section 3.3 as the normalized modeling technique using pointers to connect separate collections.

- **Relational comparison:** Detailed in Section 3.3, evaluating MongoDB's document-oriented model against traditional RDBMS architectures regarding joins, performance, and normalization trade-offs.

**Percentage & Metric Relations:**
- **200% to 500% (2x to 5x) Write Throughput Gain:** MongoDB exhibits up to 2x to 5x faster insertion rates compared to traditional relational databases under heavy write workloads due to schema-less design and lack of multi-table lock overhead.

- **30% to 60% Read Latency Reduction:** Queries fetching nested or embedded structures execute 30% to 60% faster than equivalent relational queries requiring complex multi-table JOIN operations.

- **15% to 30% Redundancy Trade-off:** Embedded data structures introduce an estimated 15% to 30% raw data duplication overhead compared to fully normalized 3NF relational schemas, traded off in favor of significantly faster single-query execution.

### Main relevance to Section 3.3
This paper directly supports the analysis of section 3.3 by detailing the operational and structural differences between embedded documents and referenced collections in MongoDB, while providing quantitative performance metrics comparing their query execution speeds and storage trade-offs against traditional relational database management systems.

---

# Paper 2

### Title
A Comparative Analysis of NoSQL and SQL Databases: Performance, Consistency, and Suitability for Modern Applications with a Focus on IoT

### Study ID
S007

### Author
Sanda Rashid Salim Al Maamari and Mohammad Nasar

### Affiliation
Mazoon College, Oman

### Published
2025

### Journal
East Journal of Computer Science, 1(2), pp. 10–15

### Source links
https://eastpublication.com/index.php/ejcs/article/view/76

https://www.researchgate.net/publication/390609163_A_Comparative_Analysis_of_NoSQL_and_SQL_Databases_Performance_Consistency_and_Suitability_for_Modern_Applications_with_a_Focus_on_IoT

### DOI
10.63496/ejcs.Vol1.Iss2.76

### Related content
#### 4.3 IoT Implementation Evaluation:
NoSQL databases prove highly suitable for modern applications, particularly Internet of Things (IoT), due to their ability to handle scalability, real-time processing, and time-series data. Cassandra meets requirements by scaling across over 100 nodes and processing 14,000 to 15,000 operations per second in write-heavy tasks. MongoDB supports IoT analytics with real-time processing and flexible schema, managing up to 12,000 operations per second and integrating with big data tools like Hadoop. Its document-based structure handles IoT's unstructured data, such as JSON sensor outputs. InfluxDB excels in IoT time-series applications, processing 500,000 points per second. Redis, with its 0.4 ms read latency, addresses IoT's real-time demands. Conversely, SQL databases like MySQL struggle with IoT's demands due to vertical scaling limits and inflexible schemas. However, MySQL's document-based variant provides utility for structured IoT tasks, such as inventory management, with 20% lower latency than MongoDB in such cases. Adoption barriers remain, including NoSQL's steep learning curve, 30% to 40% higher infrastructure costs at scale, and integration challenges with legacy systems.

### Exact Keyword Matching & Quantitative Context
**Keyword Matches:**

- **NoSql / NoSQL:** Widely used throughout the study to contrast distributed document, column-family, and key-value stores against rigid relational systems.

- **Performance:** Evaluated across throughput, read latencies, and scaling benchmarks using tools like the Yahoo! Cloud Serving Benchmark (YCSB).

- **Consistency:** Analyzed via eventual consistency models in NoSQL systems versus strict ACID transactional reliability in traditional SQL databases.

- **Internet of Things (IoT):** Serves as the core modern application domain evaluating unstructured sensor outputs, streaming telemetry, and high-velocity device data.

**Percentage & Metric Relations:**
- **14,000 to 15,000 Ops/Sec Write Throughput:** Cassandra's distributed capability across over 100 nodes under heavy write workloads.

- **12,000 Ops/Sec Processing Rate:** MongoDB's real-time throughput capacity handling unstructured JSON sensor telemetry.

- **500,000 Points Per Second:** InfluxDB's high-speed ingestion performance for time-series IoT data streams.

- **0.4 ms Read Latency:** Redis's high-speed response metric for real-time control systems.

- **20% Lower Latency Advantage:** MySQL's document-based variant performance benefit over MongoDB specifically when handling structured inventory tasks.

- **30% to 40% Higher Infrastructure Costs:** Economic overhead introduced by NoSQL architectures at scale compared to traditional relational database deployments.

### Main relevance to Section 4.3
This paper provides a modern evaluation of database suitability for IoT and big data ecosystems, demonstrating how NoSQL databases (MongoDB, Cassandra, InfluxDB, Redis) achieve superior throughput and low latency for unstructured sensor streams, while identifying trade-offs such as eventual consistency and higher infrastructure costs.

---

# Paper 3

### Title
Data Modeling and NoSQL Databases - A Systematic Mapping Review

### Study ID
S009

### Author
Harley Vera-Olivera, Ruizhe Guo, Ruben Cruz Huacarpuma, Ana Paula Bernardi Da Silva, Ari Melo Mariano, and Maristela Holanda

### Affiliation
Department of Computer Science, University of Brasília, Brasília, Brazil

### Published
2021

### Journal
ACM Computing Surveys (CSUR), 54(6), Article 116, pp. 1–26

### Source links
https://dl.acm.org/doi/10.1145/3457608

https://doi.org/10.1145/3457608

### DOI
10.1145/3457608

### Related content
#### Systematic Analysis of Data Modeling:

Through a rigorous mapping of 54 primary studies, this review analyzes how NoSQL databases bridge conceptual, logical, and physical levels of representation. The study highlights that conventional modeling languages—such as Unified Modeling Language (UML) and Entity-Relationship (ER) diagrams—are frequently adapted or extended to accommodate non-relational structures. Rather than relying on rigid table normalizations, NoSQL schema generation leverages intermediate formats like JSON, XML, and XMI to establish document hierarchies, object aggregations, and reference links.

The review emphasizes that NoSQL data modeling is heavily workload-driven, requiring developers to factor in specific metrics such as entity record counts, execution paths for CRUD operations, and system-level non-functional requirements (availability, partition tolerance, and eventual consistency). This contrasts directly with traditional relational modeling paradigms, which prioritize schema normalization and ACID transactional guarantees over horizontal scalability.

### Exact Keyword Matching & Quantitative Context
**Keyword Matches:**

- **Data modeling:** Evaluated as the critical foundational step in designing non-relational database systems, mapping conceptual blueprints to physical schema representations.

- **NoSQL databases:** Analyzed comprehensively across document, column-family, key-value, and graph paradigms to identify common structural patterns.

- **Systematic mapping:** Serves as the primary research methodology used to evaluate 54 primary literature studies, categorizing representation levels, modeling notations, and operational application contexts.

**Percentage & Metric Relations:**
- **54 Primary Studies:** The extensive corpus of peer-reviewed research systematically analyzed to map out current NoSQL modeling practices, challenges, and design notations.

- **3 Levels of Representation:** The structural breakdown utilized to evaluate database design processes across conceptual, logical, and physical tiers.

- **2,498 Total Downloads:** High readership metrics reflecting the paper's broad impact within the database research community.

- **31 Total Citations:** Documented academic influence tracking its application in subsequent schema design and database migration studies.

### Main relevance to Section 3.3
This paper provides a rigorous systematic review of how NoSQL data models are structured across conceptual and logical tiers, supporting the analysis of embedding and referencing by demonstrating how workload-driven requirements dictate whether entities should be denormalized into nested structures or linked via references.

---

# Paper 4

### Title
An Evaluation of Data Model for NoSQL Document-Based Databases

### Study ID
S010

### Author
Debora G. Reis, Fabio S. Gasparoni, Maristela Holanda, Marcio Victorino, Marcelo Ladeira, and Edward O. Ribeiro

### Affiliation
University of Brasília (UnB), Brasília, Brazil

### Published
2018

### Journal
Trends and Advances in Information Systems and Technologies (WorldCIST'18), Advances in Intelligent Systems and Computing, vol. 745, pp. 616–625

### Source links
https://link.springer.com/chapter/10.1007/978-3-319-77703-0_61

https://doi.org/10.1007/978-3-319-77703-0_61

### DOI
10.1007/978-3-319-77703-0_61

### Related content
#### An Evaluation of Data Models and Performance:

This study explores the architectural challenge of structuring data in document-based NoSQL systems by designing and evaluating three distinct data models within a MongoDB cluster: embedded, referenced, and hybrid. The authors executed performance benchmarks assessing the response times of three specific query types across each model, evaluated how different index types impact search efficiency for targeted fields, and analyzed the trade-offs regarding storage disk space consumed by both data records and their corresponding indexes. The findings demonstrate that the choice between embedding and referencing creates a direct disparity in query performance and storage overhead, proving that model selection must be carefully aligned with access patterns.

### Exact Keyword Matching & Quantitative Context
**Keyword Matches:**

- **Data modeling:** Evaluated as the core design mechanism used to structure non-relational document databases through embedded, referenced, or hybrid paradigms.

- **Embedding:** Analyzed as a model configuration where related documents are nested within a parent document to optimize specific query paths.

- **Referencing:** Investigated as a model configuration utilizing separate collections linked via reference pointers.

- **Indexes:** Evaluated across various index types to determine how field-level indexing alters query search performance in NoSQL document stores.

- **Performance:** Measured via query response times across embedded, referenced, and hybrid configurations in a MongoDB cluster.

- **MongoDB:** Utilized as the target NoSQL document-based database platform for implementing and benchmarking the experimental data models.

**Percentage & Metric Relations:**
- **3 Distinct Data Models:** Comprehensive experimental comparison framework spanning embedded, referenced, and hybrid architectural configurations.

- **3 Query Types:** Evaluated across each model configuration to measure execution response time variances.

- **10 Academic Citations:** Documented scholarly impact tracking its contribution to NoSQL data modeling research.

- **9,731 Total Accesses:** High readership metrics reflecting broad interest in document-based database performance evaluations.

### Main relevance to Section 3.3
This paper directly supports the analysis of section 3.3 by empirically testing the performance, index behavior, and disk storage trade-offs between embedded, referenced, and hybrid data models within a MongoDB cluster.