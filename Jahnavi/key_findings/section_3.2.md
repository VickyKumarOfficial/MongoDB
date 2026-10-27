# Paper 1

### Title
MongoDB: Meeting the Dynamic Needs of Modern Applications

### Study ID
S006

### Author
Mukesh Rathore and Sikha S. Bagui

### Affiliation
Department of Computer Science, University of West Florida, Pensacola, FL 32514, USA

### Published
2024

### Journal
Encyclopedia, MDPI, 4(4), pp. 1433–1453

### Source links
MDPI Official Entry

ResearchGate Publication

### DOI
10.3390/encyclopedia4040093

### Related content
#### Introduction

MongoDB stands as a pioneering NoSQL database management system, offering a modern alternative to traditional relational databases. At its core, MongoDB operates on a document-oriented model, where data are stored as flexible JSON-like documents within collections. These collections act as containers for related documents, providing scalability and ease of management. A standout feature of MongoDB is its support for Binary JSON (BSON), a binary-encoded serialization of JSON-like documents, enhancing efficiency and performance.

MongoDB is favored for its flexible schema design, which enables developers to iterate quickly and accommodate changing data requirements without the need for costly schema migrations. Its document-oriented data model aligns well with the JSON-like data structures commonly used in web and mobile applications, simplifying data storage and retrieval. Additionally, MongoDB's distributed architecture facilitates horizontal scalability, making it well-suited for handling large volumes of data and high-throughput workloads.

#### 2.1 Features of MongoDB

Document-Oriented Data Model: MongoDB employs a document-oriented data model, storing data in flexible JSON-like documents instead of fixed schemas, enabling easier handling of unstructured data. This model supports nested fields and arrays, facilitating the storage of complex data and making it suitable for applications such as content management systems and real-time data analysis.

#### 2.2 Architecture of MongoDB

The Document Model component represents MongoDB's signature approach to data storage and retrieval. Unlike traditional relational databases, which rely on rigid schemas, MongoDB embraces a schema-less, document-oriented model, allowing users to store and query data more flexibly and naturally. From arrays and nested documents to custom data types and user-defined objects, this component provides the flexibility to accommodate a wide variety of data structures.

### Exact Keyword Matching & Quantitative Context
**Keyword Matches:**

- **BSON / Binary JSON:** Explicitly cited in Section 1 as the binary-encoded serialization format of JSON-like documents that improves efficiency, storage compactness, and parsing performance.

- **Documents:** Detail-mapped in Section 1 and Section 2.1 as flexible units supporting nested fields, sub-documents, and arrays.

- **Collections:** Defined in Section 1 as organizational containers that group related documents together for ease of management and horizontal scaling.

- **Flexible Schemas:** Detailed in Section 1 and Section 2.2 as the dynamic schema-less design that permits schema iteration without costly database migrations.

- **MongoDB:** Explicitly analyzed throughout the paper as the core document-oriented NoSQL database system.

**Percentage & Metric Relations:**
- **6.21% – 6.7% Market Share:** MongoDB commands between 6.21% to 6.7% of the total global DBMS market share.

- **7.08% NoSQL Total Market Share:** The total combined share of all NoSQL databases globally is 7.08%, positioning MongoDB as the dominant NoSQL solution holding over 87% to 94% of the entire NoSQL database sector.

- **16 MB BSON Document Size Threshold:** Standard documents are stored efficiently, while files exceeding the 16 MB BSON size limit are automatically chunked using MongoDB's GridFS framework.

**Industry Sector Usage Percentages:**

- **Information Technology & Services:** 26%

- **Computer Software:** 16%

- **Internet Applications:** 5%

### Main relevance to Section 3.2
This paper serves as a comprehensive primary reference for Topic 3.2 (BSON, documents, collections, and flexible schemas) by providing structural definitions, architectural breakdown, and precise market metrics for MongoDB's document-oriented serialization engine, schema flexibility, and containerized collection model.

---

# Paper 2

### Title
A Review on Various Aspects of MongoDb Databases

### Study ID
S007

### Author
Anjali Chauhan

### Affiliation
Rawal Institute of Engineering and Technology, Faridabad, Haryana, India

### Published
2019

### Journal
International Journal of Engineering Research & Technology (IJERT), 8(5)

### Source links
IJERT Official Publication

### DOI
10.17577/IJERTV8IS050031

### Related content
#### INTRODUCTION

MongoDB is an open-source document database that provides high performance, high availability, and automatic scaling. A record in MongoDB is a document, which is a data structure composed of field and value pairs. MongoDB documents are similar to JSON objects. The values of fields may include other documents, arrays and arrays of documents. The advantages of using documents are:

Documents (i.e. objects) correspond to native data types in many programming languages.

Embedded documents and arrays reduce need for expensive joins.

Dynamic schema supports fluent polymorphism.

#### Overview of MongoDB

MongoDB is an open-source document database and leading NoSQL database. MongoDB works on concept of collection and document.

Database – Database is a physical container for collections. Each database gets its own set of files on the file system.

Collection – Collection is a group of MongoDB documents. It is the equivalent of a RDBMS table. Collections do not enforce a schema. Documents within a collection can have different fields. Typically, all documents in a collection are of similar or related purpose.

Document – A document is a set of key-value pairs. Documents have dynamic schema. Dynamic schema means that documents in the same collection do not need to have the same set of fields or structure, and common fields in a collections documents may hold different types of data.

#### COMPARATIVE STUDY

As shown in Table 1, in MongoDB, some MySQL terms, such as table or row, get another name, namely collection, respectively BSON document. In other words, we can say that MongoDB contains collections, collections contain documents and a document contains multiple fields.

### Exact Keyword Matching & Quantitative Context
**Keyword Matches:**

- **BSON / BSON Document:** Explicitly mapped in Section 5 (Comparative Study) and Table I as the NoSQL structural equivalent to a relational database row, containing multiple BSON fields.

- **Documents:** Highlighted in Section 1 and Overview as key-value pairs corresponding to native programming types, featuring embedded sub-documents and arrays that eliminate expensive joins.

- **Collections:** Defined in Overview as the non-relational container equivalent to an RDBMS table that groups related documents without enforcing a strict tabular schema.

- **Flexible Schemas:** Detailed via "Dynamic schema" in Section 1 and Overview, allowing documents within the same collection to have entirely different fields, structures, or data types.

- **MongoDB:** Evaluated as the leading open-source document database system utilizing a shared-nothing cluster architecture.

**Percentage & Metric Relations:**
- **3,103 Article Views & 89 Total Downloads:** Demonstrates high academic reach and peer interest for this review paper within engineering research literature.

- **100% Dynamic Schema Accommodation:** Complete flexibility over rigid schema structures, enabling conditional field presence (e.g., administrator or moderator privileges appearing only when relevant, thereby minimizing storage bloat).

- **Lower Execution Times:** MongoDB consistently provided lower execution times across all four basic CRUD operations (Insert, Select/Query, Update, Delete) compared to MySQL under high-concurrency testing.

### Main relevance to Section 3.2
This paper directly supports Topic 3.2 (BSON, documents, collections, and flexible schemas) by providing a direct mapping table between MySQL and MongoDB terms, detailing how BSON documents replace table rows, collections replace tables, and dynamic schemas eliminate rigid relational constraints.

---

# Paper 3

### Title
Data Modeling and NoSQL Databases - A Systematic Mapping Review

### Study ID
S008

### Author
Harley Vera-Olivera, Ruizhe Guo, Ruben Cruz Huacarpuma, Ana Paula Bernardi Da Silva, Ari Melo Mariano, and Maristela Holanda

### Affiliation
University of Brasília, Brazil; and related institutions

### Published
2021

### Journal
ACM Computing Surveys (CSUR), 54(6), Article 116, pp. 1–26

### Source links
ACM Digital Library Official Entry

Semantic Scholar Record

### DOI
10.1145/3457608

### Related content
#### Abstract & Core Findings:

Modeling is one of the most critical steps in developing any database architecture. While traditional relational databases heavily rely on Entity-Relationship (ER) and Unified Modeling Language (UML) models, NoSQL systems introduce dynamic data structures like documents, key-values, and column-families. This systematic mapping review analyzed 54 primary studies to identify levels of representation, modeling notations, and context-specific requirements. The study found that conceptual and logical levels receive significantly more attention than physical layouts. Furthermore, formats such as JSON, XML, and XMI are widely utilized to generate flexible schemas across various levels of representation. New modeling considerations emerged, including entity record counts, CRUD operation patterns, and core system requirements (availability, consistency, or scalability).

### Exact Keyword Matching & Quantitative Context
**Keyword Matches:**

- **Documents / Document Stores:** Analyzed as a major category of NoSQL data models, mapping hierarchical records, embedded sub-documents, and arrays.

- **Collections & Structures:** Addressed through schema-generation techniques that organize datasets into flexible physical containers rather than strict tabular relations.

- **Flexible / Dynamic Schemas:** Highlighted throughout the mapping study as an essential characteristic permitting schema evolution, data representation adaptability, and automated schema derivation from JSON/XML sources.

- **BSON / JSON Formats:** Explicitly cited as foundational serialization and format structures used to bridge conceptual models (like UML/ER) to document databases.

**Percentage & Metric Relations:**
- **54 Primary Studies Analyzed:** A comprehensive systematic review filtering across hundreds of initial candidates to evaluate 54 distinct research contributions in NoSQL data modeling.

- **31 Total Citations:** Reflects substantial ongoing academic and technical impact within database architecture research.

- **2,498 Total Downloads:** Demonstrates wide community readership and usage across software engineering and data management literature.

### Main relevance to Section 3.2
This paper strongly supports Topic 3.2 (BSON, documents, collections, and flexible schemas) by providing a systematic analysis of how NoSQL document models handle schema flexibility, utilize JSON-based hierarchical structures, and translate conceptual representations into practical document-oriented collections.

---

# Paper 4

### Title
Schema Extraction in NoSQL Databases: A Systematic Literature Review

### Study ID
S009

### Author
Saad Belefqih, Ahmed Zellou, and Mouna Berquedich

### Affiliation
Mohammed V University in Rabat, Morocco

### Published
2024 (Available Online: November 2024 / Volume 17, Issue 8)

### Journal
Recent Advances in Computer Science and Communications, 17(8), pp. 92–104

### Source links
Bentham Science Official Entry

ResearchGate Publication Record

### DOI
10.2174/0126662558273437231204061106

### Related content
#### Abstract & Core Findings:

Nowadays, NoSQL databases have taken on an increasingly important role in the storage of massive data within companies. Due to a common property called schema-less, NoSQL databases offer great flexibility, particularly for the storage of data in different formats (such as JSON and BSON document documents). However, despite their success in data storage, schema-less databases are a major obstacle in areas requiring precise knowledge of this schema, especially in the field of data integration. This study presents a Systematic Literature Review (SLR) to explore, evaluate, and discuss relevant existing research and endeavors using novel schema extraction, inference, and versioning approaches to deduce structural definitions from dynamic collections and documents.

### Exact Keyword Matching & Quantitative Context
**Keyword Matches:**

- **Schema-less / Flexible Schemas:** Highlighted as the foundational property of document stores that grants storage flexibility while introducing complexity in metadata interpretation and schema reconstruction.

- **Documents & Formats:** Addressed through the storage of disparate structural formats (JSON/BSON documents) within non-relational collections.

- **Collections:** Implicitly managed through schema extraction frameworks that scan unstructured document collections to discover underlying structural schemas.

- **BSON / JSON Data Representation:** Form the core document instances analyzed during automated schema inference and extraction tasks.

**Percentage & Metric Relations:**
- **13 Pages:** A detailed review analyzing schema extraction architectures, algorithms, and limitations across document-oriented NoSQL environments.

- **100% Implicit Schema Flexibility:** Highlights the operational challenge where documents inside collections can evolve completely independently without centralized constraint enforcement, necessitating automated extraction algorithms.

- **Article Metrics:** Achieved multiple total citations and high field index performance ratios within data integration and database systems literature.

### Main relevance to Section 3.2
This paper directly supports Topic 3.2 (BSON, documents, collections, and flexible schemas) by addressing the exact structural challenge of flexible schemas in document-oriented databases—explaining how the lack of upfront schema enforcement in document collections necessitates advanced schema extraction and inference techniques to bridge raw JSON/BSON data stores with structured data integration needs.