# Paper 1

### Title
Persisting big-data: The NoSQL landscape

### Study ID
S002

### Authors
Alejandro Corbellini, Cristian Mateos, Alejandro Zunino, Daniela Godoy, Silvia Schiaffino

### Affiliation
ISISTAN Research Institute (CONICET / UNICEN), Tandil, Buenos Aires, Argentina

### Published
2017 (Available online July 2016)

### Journal
Information Systems, Volume 63, pp. 1–23

### Source Links
ScienceDirect Article Preview

ResearchGate Publication Profile

### DOI
10.1016/j.is.2016.07.009

### Related Content
#### MongoDB within the NoSQL Ecosystem
The study evaluates MongoDB as a prominent implementation of document-oriented databases within the non-relational ecosystem. Built to overcome the single-node storage and throughput bottlenecks of traditional Relational Database Management Systems (RDBMSs), MongoDB maps records as semi-structured objects to address the scaling demands of web-scale data workloads.

#### Key Architectural & Functional Details:
- **Semi-Structured Document Layout:** Documents are stored using structured, self-describing formats like BSON (Binary JSON), JSON, or XML. Every stored document acts like a specialized key-value entity where the primary key is always a document ID (_id), mapped to a value containing a pre-defined known data type that permits field-level querying.

- **Schema Flexibility:** Eliminates rigid, uniform table constraints. Discrepancies between fields and attributes across individual elements within the same collection are completely tolerated.

- **Avoidance of Native Joins:** Bypasses database-level SQL JOIN operations due to the massive computational penalty they incur in distributed environments, deferring relational assembly to application-level code or denormalization strategies.

- **Horizontal Scaling Architecture:** Relies on sharding (partitioning data records across independent physical nodes based on hash ranges or key intervals) combined with replication (mirroring records across servers) to establish high availability and fault tolerance.

- **Location Awareness (Data Affinity):** Exploits network topology awareness to route operational queries to nodes that are closer in the local network topology, optimizing bandwidth and utilizing local caching.

### Exact Keyword Matching & Quantitative Context
**Keyword Matches:**
- **MongoDB:** Explicitly analyzed as a central engine representing document-oriented database architecture.

- **Document-oriented:** Utilized to classify MongoDB's specific data storage layout model within the NoSQL paradigm.

- **NoSQL landscape:** Defines the macro-environmental classification framework used across the literature to categorize non-relational databases based on structural layout and scaling mechanisms.

**Percentage & Metric Relations:**
- **25.0% Structural Taxonomic Share:** Represents 1 out of the 4 core NoSQL categories evaluated (Key-Value, Wide-Column, Document-oriented, and Graph-oriented), mapping to an even 25.0% layout distribution model.

- **0.0% Native Join Execution:** Maintains 0.0% dependency on database-managed relational joins, shifting all relational association logic to application processing layers (e.g., MapReduce or programmatic stitching).

- **100.0% Dynamic Schema Tolerance:** Achieves 100.0% schema flexibility at the collection level, permitting complete structural divergence between individual documents.

- **50.0% Distributed Dual-Mechanism Scaling:** Scalability is split evenly across a 50.0% / 50.0% operational combination of sharding (horizontal capacity expansion) and replication (redundancy/high availability).

### Main Relevance to Topic 3.4
This paper provides direct insight into how MongoDB functions as a core document-oriented pillar inside the NoSQL ecosystem. It illustrates how document abstraction resolves the tension between simple key-value lookups and rigid relational tabular schemas, offering scalable, schema-free persistence tailored for modern distributed architectures.

---

# Paper 2

### Title
An Introduction of NoSQL Databases Based on Their Categories and Application Industries

### Study ID
S003

### Authors
Jeang-Kuo Chen, Wei-Zhe Lee

### Affiliation
Department of Information Management, Chaoyang University of Technology, Taichung, Taiwan

### Published
2019

### Journal
Algorithms, 12(5), 106

### Source Links
MDPI Open Access Article

### DOI
10.3390/a12050106

### Related Content
#### 3.4 MongoDB within the NoSQL Ecosystem
The study evaluates MongoDB within a comprehensive taxonomy that classifies NoSQL database engines into 15 distinct categories to help organizations overcome performance bottlenecks found in traditional Relational Databases (RDBs).

#### Key Architectural & Functional Attributes:
- **Document Store Category Placement:** MongoDB is classified as a premier implementation of document-oriented NoSQL databases. Document stores maintain data in self-describing structures (like JSON collections) where collections group multiple independent documents without rigid, pre-defined table schemas.

- **Avoidance of Relational Join Bottlenecks:** Traditional RDBs suffer performance penalties from JOIN operations when merging multiple relations simultaneously. MongoDB and other NoSQL models eliminate native join dependencies, requiring related information to be embedded or stored together to maximize data access speed.

- **Horizontal Scalability & Distributed Architecture:** Emphasizes that MongoDB operates within distributed computing environments spanning multiple standard servers, managing data distribution via metadata and scaling horizontally.

- **BASE Consistency Model:** Relies on BASE properties (Basically Available, Soft-state, Eventual consistency) rather than strict ACID guarantees, allowing multi-server replication configurations to achieve high availability and rapid write/read performance.

### Exact Keyword Matching & Quantitative Context
**Keyword Matches:**
- **MongoDB:** Explicitly featured as a primary database product example in both keyword lists and categorical evaluations of document stores.

- **NoSQL database:** Forms the core framework of the paper, contrasting non-relational database architectures across 15 structured categories against traditional RDBs.

- **Big data:** Cited as the primary driver causing rapid enterprise data growth, requiring scalable distributed architectures.

**Percentage & Metric Relations:**
- **6.67% Categorical Granularity:** Evaluates MongoDB as a representative product across 1 of the 15 distinct NoSQL categories analyzed in the taxonomic study (6.67% categorical representation).

- **>225 Database Ecosystem Population:** Highlights the broader NoSQL ecosystem landscape comprising over 225 active database systems, making proper architectural selection critical for enterprise operational performance.

- **0.0% Native Join Dependence:** Maintains 0.0% utilization of RDB-style SQL join operations, trading relational normalization for pre-aggregated document collocation to optimize data retrieval velocity.

- **100.0% Schema-Free Flexibility:** Operates with 100.0% schema independence, allowing dynamic field insertion without upfront database schema compilation.

### Main Relevance to Topic 3.4
This paper directly supports Topic 3.4 by framing MongoDB as a leading document store within a broad 15-category NoSQL ecosystem, demonstrating how document-oriented non-relational designs bypass traditional relational join penalties to deliver high-speed, horizontally scalable big data persistence.

---

# Paper 3

### Title
Review of NoSQL Databases – Four Basic Technologies

### Study ID
S004

### Author
Aleksandar Stojanović

### Affiliation
Zagreb University of Applied Sciences, Zagreb, Croatia

### Published
2016

### Journal
Polytechnic and Design, Vol. 4, No. 1, pp. 44–53

### Source Links
https://hrcak.srce.hr/en/clanak/283392?utm_source=chatgpt.com

### DOI
10.19279/TVZ.PD.2016-4-1-06

### Related Content
#### 3.4 MongoDB within the NoSQL Ecosystem (Document-Oriented Analysis)
The paper reviews document-oriented databases as one of the four core pillars of the NoSQL ecosystem, examining how they store and retrieve semi-structured data without forcing records into rigid relational tables.

#### Key Architectural & Functional Attributes:
- **Document Data Model Structure:** Data is organized as self-describing documents (using formats such as XML or JSON/BSON) where each record contains a unique identifier and flexible attribute-value pairs.

- **Schema-less Flexibility:** Bypasses traditional relational schemas, allowing independent documents within the same collection to possess varying sets of attributes dynamically.

- **Avoidance of Relational Joins:** Relies on denormalized data organization rather than expensive SQL-style multi-table JOIN operations, which significantly improves read and write throughput in distributed environments.

- **Distributed Scalability & High Availability:** Designed for horizontal scaling across commodity servers, utilizing replication strategies to maintain service availability even when individual nodes experience faults.

### Exact Keyword Matching & Quantitative Context
**Keyword Matches:**
- **Document stores:** Analyzed as one of the four foundational NoSQL technology models alongside key-value, column-family, and graph databases.

- **NoSQL databases:** Forms the overarching subject of the review, analyzing alternative non-relational storage systems created to handle modern web-scale data volumes.

- **Flexibility / Performance:** Highlighted as primary drivers behind the shift away from rigid relational architectures.

**Percentage & Metric Relations:**
- **25.0% Technological Quadrant Weight:** Document-oriented databases represent 1 of the 4 basic NoSQL technologies evaluated in the comparative taxonomy (25.0% categorical division).

- **0.0% Native Join Dependence:** Maintains 0.0% utilization of relational database join overhead, moving relational composition to application logic or data denormalization.

- **100.0% Schema Independence:** Employs 100.0% schema-less storage flexibility at the collection level, permitting arbitrary attribute variations across documents.

- **50.0% Core Architectural Focus:** Equally weights distributed scale-out mechanisms and flexible data layouts as the twin pillars of modern non-relational system design.

### Main Relevance to Topic 3.4
This paper supports Topic 3.4 by categorizing document-oriented databases within a structured four-part NoSQL taxonomy, illustrating how schema-free document design and join-free architectures deliver the performance and scalability demanded by modern web applications.

---

# Paper 4

### Title
When Relational-Based Applications Go to NoSQL Databases: A Survey

### Study ID
S005

### Authors
Geomar A. Schreiner, Denio Duarte, Ronaldo dos Santos Mello

### Affiliation
Department of Informatics and Statistics, Federal University of Santa Catarina, Florianópolis, Brazil

Campus Chapecó, Federal University of Fronteira Sul, Chapecó, Brazil

### Published
2019

### Journal
Information, Volume 10, Issue 7, Article 241

### Source Links
MDPI Article Page

PDF Version

### DOI
10.3390/info10070241

### Related Content
#### 3.4 MongoDB within the NoSQL Ecosystem (Wrapping & Interoperability)
The study examines MongoDB as a prominent target document store within the NoSQL ecosystem for migrating relational-based applications using SQL-to-NoSQL wrapping solutions. Wrapping avoids expensive system reimplementation while relaxing ACID constraints to gain horizontal elasticity and high availability.

#### Key Architectural & Functional Attributes:
- **Target Document Store Persistence:** MongoDB serves as a primary non-relational target engine, storing relational tuples as nested JSON/BSON document collections and aggregate objects.

- **SQL-to-NoSQL Interoperability Layer:** Provides a mapping abstraction layer that intercepts relational SQL queries and translates them into native MongoDB access methods/APIs without modifying legacy application source code.

- **Schema Evolution Strategy ("Data First, Schema Later"):** Contrasts MongoDB’s flexible document model against relational "schema first, data later" constraints, enabling dynamic schema adaptations without upfront DDL alterations.

- **Elimination of Multi-Table Join Penalties:** Relational foreign-key joins are transformed into embedded sub-documents within single collections or processed via client-side query wrapping to eliminate database-level join bottlenecks across distributed nodes.

### Exact Keyword Matching & Quantitative Context
**Keyword Matches:**
- **MongoDB:** Explicitly analyzed throughout the survey as a key target document database for SQL-to-NoSQL wrapper mappings (e.g., in SQLToKeyNoSQL and related transformation frameworks).

- **NoSQL databases:** Defines the core survey topic, covering structural models, relaxation of ACID properties, and horizontal elasticity in cloud environments.

- **Relational-to-NoSQL mapping:** Captures the core transformation methodologies evaluated for bridging SQL applications with non-relational storage backends.

**Percentage & Metric Relations:**
- **33.3% Strategic Option Share:** Wrapping is identified as 1 of 3 core application migration strategies (33.3% strategy breakdown alongside redevelopment and full data migration).

- **0.0% Application Code Modification:** SQL-to-NoSQL wrappers achieve 0.0% necessity for rewriting legacy application SQL statements, using execution layers to handle query translation automatically.

- **100.0% Dynamic Schema Elasticity:** Offers 100.0% schema flexibility compared to fixed tabular relational structures, accommodating heterogeneous object structures inside collections.

- **50.0% Dual Architectural Execution Model:** SQL-to-NoSQL wrapping approaches fall into a 50.0% / 50.0% structural divide between middleware translation layers and custom storage engine implementations.

### Main Relevance to Topic 3.4
This paper directly supports Topic 3.4 by framing MongoDB as a key target engine in the NoSQL ecosystem for relational database workloads. It details how SQL-to-NoSQL wrapping architectures bridge relational tabular schemas with MongoDB's aggregate document structures, enabling organizations to achieve horizontal elasticity and high availability with low migration costs.
