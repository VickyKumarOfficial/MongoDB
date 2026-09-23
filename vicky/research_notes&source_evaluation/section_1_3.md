# Section 1.3 source evaluation

Section: 1.3, Purpose, scope, research questions, and organization

## Purpose of this note

This file records how the two newly screened review sources can inform the framing of Section 1.3 and the organization of later sections. Neither source should determine the research questions by itself. The questions must reflect the approved MongoDB review structure and the evidence collected across the project.

## Screened source: MongoDB: Meeting the Dynamic Needs of Modern Applications

- **Study ID:** S012
- **Authors:** Mukesh Rathore and Sikha S. Bagui
- **Year:** 2024
- **Venue:** *Encyclopedia*, vol. 4, no. 4, pp. 1433–1453
- **Source type:** Open-access encyclopedia/review entry
- **DOI:** https://doi.org/10.3390/encyclopedia4040093
- **Stable URL:** https://www.mdpi.com/2673-8392/4/4/93
- **Access:** Full text available
- **Screening decision:** Selected as a framing and background source

### What it can support

- The review may cover MongoDB fundamentals, architecture, advantages, limitations, and applications.
- The paper can be organized around the document model, core capabilities, data modelling, applications, comparisons, and limitations.
- MongoDB should be assessed in relation to workload requirements rather than described as universally superior.

### Evidence locations

- `Definition`: stated coverage of fundamentals, architectural features, advantages, and limitations.
- `1. Introduction`: document-oriented model, flexible schema, distributed architecture, and changing application requirements.
- `2. MongoDB` and `2.1. Features of MongoDB`: model and capability categories.
- `2.2. Architecture of MongoDB`: architectural material for Section 4.
- `2.3. Comparing MongoDB with SQL Databases`: comparison material for Section 6.
- `2.4. Comparing MongoDB with Other NoSQL Databases`: comparison material for Section 6.
- `2.5. Use Case Comparison of MongoDB with Other NoSQL Databases`: workload and application comparison material for Sections 5 and 6.
- `3. Advantages`: possible benefits to examine, including scalability, query processing, replication, transactions, and analytics.
- `4. Limitations`: memory use, transaction support, document-size limits, schema design, joins, indexing overhead, reporting, SQL support, concurrency, and duplication.
- `7. Applications of MongoDB`: application domains and workload context.
- `8. Conclusions`: broad synthesis and future-facing claims.

### Quality and limitations

This is a recent, accessible review entry with identifiable authors, venue, DOI, and a broad coverage of MongoDB. It is not a primary benchmark or an independent source for market-share, performance, or product-superiority claims. Its technical statements often point to other references, so specific claims should be traced to the cited documentation or research papers before entering the final Evidence Matrix.

### Intended use

Use S012 to help frame Section 1.3 and to identify topics for Sections 3–7. Do not use its `Advantages` or market-oriented statements as standalone evidence for a universal conclusion about MongoDB.

## Screened source: A Review on Various Aspects of MongoDb Databases

- **Study ID:** S013
- **Author:** Anjali Chauhan
- **Year:** 2019
- **Venue:** *International Journal of Engineering Research & Technology*, vol. 8, issue 5, pp. 90–92
- **Source type:** Short review article
- **DOI:** https://doi.org/10.17577/IJERTV8IS050031
- **Stable URL:** https://www.ijert.org/a-review-on-various-aspects-of-mongodb-databases
- **Access:** Full text available
- **Screening decision:** Pending quality verification; useful as a topic map, not a primary authority

### What it can support

- A broad review scope containing MongoDB features, uses, relational comparison, issues, and future scope.
- Topic discovery for performance, availability, horizontal scalability, replica sets, sharding, schema design, and application domains.
- A transition from the general MongoDB introduction to later sections on architecture, modelling, comparisons, and limitations.

### Evidence locations

- `Abstract`: stated review purpose and framed issues.
- `I. INTRODUCTION`: document, collection, database, and general feature claims.
- `A. Key Features of MongoDB`: performance, high availability, and horizontal scalability.
- `B. Overview of MongoDB`: database, collection, and document terminology.
- `C. Advantages of MongoDB`: flexible documents, queries, scale-out, and memory use.
- `D. Uses of MongoDB`: listed application domains.
- `E. Importance of MongoDB`: replica sets, sharding, and distributed operation.
- `II. COMPARATIVE STUDY`: MongoDB and relational terminology.
- `III. ISSUES WITH MONGODB`: reliability and schema-design concerns.
- `IV. CONCLUSION AND FUTURE SCOPE`: limitations and possible future research.

### Quality and limitations

The article is accessible and has identifiable authorship and publication metadata, but it is a short secondary review. Several statements are broad, version-sensitive, or supported through secondary and vendor references. Its benchmark and superiority claims should not be used without checking the underlying study, workload, configuration, and publication details.

### Intended use

Use S013 for topic discovery and for identifying terminology that may appear in Sections 3–7. Use it only cautiously in the final evidence base, and do not rely on it alone for claims about MongoDB performance, reliability, market position, or suitability.

## Section 1.3 framing extracted from both sources

The sources support a concise review scope covering MongoDB’s document-oriented foundations, architecture and core capabilities, data modelling, applications, comparisons, limitations, and future research. They do not require a separate literature-search paragraph in Section 1.3; the actual search and screening process belongs in Section 2, Review Methodology.

## Validation status

- **S012:** Full text accessible; metadata verified; suitable for framing and background; specific technical claims require source tracing.
- **S013:** Full text accessible; metadata identified; retained as a secondary topic map; detailed claims require stronger supporting sources.
- **No Evidence IDs assigned yet:** Section 1.3 is a framing subsection. Evidence IDs should be created only if a specific source-based claim is retained in the final manuscript.

## Screened source: A Comparative Analysis of NoSQL and SQL Databases: Performance, Consistency, and Suitability for Modern Applications with a Focus on IoT

- **Study ID:** S014
- **Authors:** Sanda Rashid Salim Al Maamari and Mohammad Nasar
- **Year:** 2025
- **Venue:** *East Journal of Computer Science*, vol. 1, issue 2
- **Source type:** Comparative review and benchmark study
- **DOI:** https://doi.org/10.63496/ejcs.Vol1.Iss2.76
- **Stable URL:** https://eastpublication.com/index.php/ejcs/article/view/76/34
- **Full-text PDF:** https://eastpublication.com/index.php/ejcs/article/download/76/34/296
- **Access:** Full text available
- **Screening decision:** Pending quality verification; potentially useful for framing and comparison criteria

### What it can support

- A review purpose built around performance, consistency models, and suitability for modern applications.
- Research questions about speed, scalability, throughput, consistency effects, and system suitability for IoT and other emerging workloads.
- A workload-sensitive comparison rather than a claim that SQL or NoSQL is universally better.

### Evidence locations

- `Abstract`, pp. 1–2: comparison purpose, IoT workload focus, and stated performance and consistency dimensions.
- `1. Introduction`, pp. 1–2: changing data requirements, SQL and NoSQL motivation, database categories, and IoT needs.
- `3. Methodology`, pp. 2–3: review of 24 studies, YCSB workloads, cluster sizes, consistency models, current-version tests, and measured indicators.
- `4. Result Discussion`, pp. 3–5: performance, consistency, IoT implementation, implications, and gaps.
- `5. Discussion and Conclusion`, pp. 5–6: selection guidance and future work.

### Quality and limitations

The paper identifies its authors, venue, DOI, publication date, methods, workload parameters, and source list. It reports both a literature synthesis and original tests. Its benchmark claims still require careful checking because the paper combines results from different studies with its own tests. Do not transfer its throughput or latency values to MongoDB generally without recording the exact version, hardware, workload, and comparison conditions.

### Intended use

Use S014 to support the final paragraph of Section 1.3 when stating comparison dimensions and application focus. Reserve numerical benchmark findings for Section 6 after verification. It may also contribute to Section 7 through its stated gaps in dynamic benchmarking, security, energy efficiency, spatial-temporal IoT needs, and edge-cloud synchronization.

## Screened source: SQL and NoSQL Database Software Architecture Performance Analysis and Assessments—A Systematic Literature Review

- **Study ID:** S015
- **Authors:** Wisal Khan, Teerath Kumar, Cheng Zhang, Kislay Raj, Arunabha M. Roy, and Bin Luo
- **Year:** 2023
- **Venue:** *Big Data and Cognitive Computing*, vol. 7, no. 2, article 97
- **Source type:** Systematic literature review
- **DOI:** https://doi.org/10.3390/bdcc7020097
- **Stable URL:** https://www.mdpi.com/2504-2289/7/2/97
- **Access:** Full text available
- **Screening decision:** Selected for review-design framing and methodology guidance; not a direct MongoDB performance authority

### What it can support

- A clear review purpose covering SQL and NoSQL architecture, performance, scaling, and cloud data portability.
- Research questions concerning the need for NoSQL, BASE versus ACID, and DBaaS interoperability and portability.
- A review organization that separates objectives and questions, search criteria, selection, data analysis, results, discussion, gaps, and future work.

### Evidence locations

- `Abstract`: review purpose, coverage, and broad SQL/NoSQL comparison dimensions.
- `1.1. State of the Problem`: motivation for NoSQL, data types, distributed systems, cloud portability, and security.
- `1.2. Method`: systematic-review design and distinction from earlier reviews.
- `2. Objectives and Research Questions`: objectives and three explicit research questions.
- `2.1. Search Criteria` and `2.1.2. Search Strategy`: search resources, search strings, and study identification.
- `2.2. Selection Process and Criteria`: title, abstract, full-text, quality, duplicate, and snowballing stages.
- `2.4. Data Analysis and Classification`: grouping and synthesis of extracted findings.

### Quality and limitations

This is a peer-reviewed, open-access systematic review with identifiable authors, a clear method, explicit research questions, and a reported study set. Its scope is broader than MongoDB and includes cloud portability, interoperability, SQL, and NoSQL systems. It should guide the structure of our review methodology, but its findings should not be treated as direct evidence about current MongoDB performance.

### Intended use

Use S015 to support the purpose, scope, and research-question paragraph in Section 1.3 and to inform Section 2, Review Methodology. Use its detailed comparative findings only when the original studies have been checked.

## Updated Section 1.3 framing

S014 supports a focused comparison across performance, consistency, and application suitability, especially for IoT and distributed workloads. S015 supports a structured review purpose, explicit research questions, transparent study selection, evidence classification, and research-gap identification. Together, they support a concise final paragraph that states what this MongoDB review examines and how the paper is organized. They do not justify calling our review systematic unless our own recorded search and selection process meets that standard.

## Updated validation status

- **S014:** Full text accessible; metadata and stated purpose verified; benchmark claims require workload-level checking.
- **S015:** Full text accessible; systematic-review metadata, objectives, questions, and method sections verified; useful for review design and methodology framing.
- **No Evidence IDs assigned yet:** Add Evidence IDs only for source-based claims retained in the final manuscript, not for the section’s own purpose statement.

## Screened source: A Comparative Study of NoSQL Databases: MongoDB, HBase, and Phoenix

- **Study ID:** S016
- **Authors:** Er. Shanmukha Eeti, Er. Apoorva Jain, and Prof. (Dr.) Punit Goel
- **Year / venue:** 2023, *International Journal of Novel Trends and Innovation*, vol. 1, issue 12
- **Source type:** Comparative study
- **Stable URL:** https://rjpn.org/ijnti/papers/IJNTI2312013.pdf
- **DOI:** Not shown
- **Access:** Full text available
- **Screening decision:** Pending quality verification; useful comparative and topic-framing source

### What it can support

- The motivation for NoSQL under massive, diverse, dynamic, and distributed workloads.
- MongoDB’s document model, BSON representation, flexible schemas, indexing, aggregation, replication, and sharding.
- A comparison framework using data-model flexibility, scalability, performance, consistency, ease of use, and integration.
- Research-gap themes involving broader benchmarks, relational-to-NoSQL migration, AI/ML effects, and cloud-versus-on-premises cost.

### Evidence locations

- `Abstract` and `Introduction`, pp. 1–2.
- `MongoDB: Document-Oriented Database`, p. 3.
- `Comparative Analysis`, p. 4.
- `Research Gap`, p. 6.
- `Research Methodology`, p. 7.
- `Results`, pp. 7–9.

### Quality and limitations

The paper has identifiable authors, a journal venue, a publication year, and accessible full text. However, no DOI is shown, the experimental detail is limited, and some references appear unrelated to database research. Treat it as a secondary overview and comparison-framework source. Do not use its numerical benchmark table as general MongoDB evidence without checking versions, hardware, workload, and configuration.

### Intended use

Use S016 for the scope and comparison-dimension paragraph in Section 1.3 and for later comparative sections. Use its research-gap discussion to motivate future-work analysis.

## Screened source: MongoDB – a comparison with NoSQL databases

- **Study ID:** S017
- **Authors:** Hema Krishnan, M. Sudheep Elayidom, and T. Santhanakrishnan
- **Year / venue:** 2016, *International Journal of Scientific and Engineering Research*, vol. 7, issue 5, pp. 1035–1037
- **Source type:** Short comparative review
- **Stable URL:** https://www.researchgate.net/publication/327120267_MongoDB_-_a_comparison_with_NoSQL_databases
- **DOI:** Not shown
- **Access:** Full text visible through ResearchGate
- **Screening decision:** Pending quality verification; useful for terminology and historical context

### What it can support

- The relationship between changing web-application requirements and NoSQL adoption.
- The four common NoSQL categories: key-value, column-family, document, and graph databases.
- Introductory descriptions of MongoDB’s BSON documents, indexing, replication, sharding, failover, and reduced schema-migration needs.

### Evidence locations

- `1 INTRODUCTION`, pp. 1035–1036.
- `2. DATA MODELS` and `2.2 No SQL Data Models`, pp. 1035–1036.
- `3 MONGODB`, p. 1036.

### Quality and limitations

This is an older, short secondary article hosted through ResearchGate. No DOI is shown, and its broad comparison claims are not supported by a detailed experimental method. Use it for terminology, model classification, and historical context only; verify current behavior and performance with official documentation or primary studies.

### Intended use

Use S017 for the introductory NoSQL taxonomy and MongoDB terminology in Sections 1.3 and 3. Do not use it as the sole support for claims of MongoDB superiority or measured performance.

## Updated validation status

- **S016:** Full text accessible; metadata, comparison dimensions, MongoDB characteristics, and research-gap sections reviewed; benchmark values require independent validation.
- **S017:** Full text visible; metadata, NoSQL taxonomy, and MongoDB overview reviewed; use limited to background and terminology.
- **No new Evidence IDs assigned:** Add Evidence IDs only for claims retained in the final manuscript.
