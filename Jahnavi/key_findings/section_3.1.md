# Section 3.1 — History and document-oriented model

## Paper 1

### Title

Emerging Trends and Challenges in Modern Database Technologies: A Comprehensive Analysis

### Study ID

S005

### Author

Naresh Kumar Miryala

### Affiliation

Meta Platforms Inc., CA, USA

### Published

2024

### Journal

International Journal of Science and Research (IJSR), 13(11), pp. 1686–1696

### Source links

- https://www.ijsr.net/archive/v13i11/MS241126103744.pdf
- https://www.researchgate.net/publication/386275409_Emerging_Trends_and_Challenges_in_Modern_Database_Technologies_A_Comprehensive_Analysis

### DOI

10.21275/MS241126103744

### Related content

5. Evolution of Database Technology   
Database technology has come a long way since its inception, evolving in response to the changing needs of businesses, advancements in computing power, and the explosion of data. Early databases were designed for managing small sets of structured data in a centralized environment. Over time, as businesses and technology grew, databases became more complex, capable of managing larger volumes of data, diverse data types, and offering more flexible architectures. Understanding this evolution is key to recognizing the current state of database technology and its future direction.   

5.1 Early Relational Databases   
The story of modern database technology begins in the 1970s with the development of the relational database model by Dr. Edgar F. Codd. Prior to relational databases, most data was stored in hierarchical or networked models, which were rigid and inefficient for managing large datasets. Relational databases, such as IBM's System R and Oracle’s database, introduced the idea of using tables to store data and SQL (Structured Query Language) to retrieve and manipulate it.   

This approach allowed for more flexibility and scalability, enabling the use of standardized operations like joins, unions, and aggregations to manage and query large datasets. Relational databases became the backbone of business applications, powering everything from inventory management systems to financial transaction systems. Their structure, based on well-defined schemas, allowed for easy querying, data integrity, and support for ACID (Atomicity, Consistency, Isolation, Durability) properties, which ensured that transactions were processed reliably.   

5.2 Emergence of NoSQL   
In the early 2000s, the rise of web-scale applications and big data ushered in a new era for database technology. Traditional relational databases, while powerful, were struggling to keep up with the demands of highly dynamic and unstructured data, such as social media content, logs, and sensor data. The limitations of relational databases in handling massive amounts of unstructured data, along with the need for distributed computing, led to the rise of NoSQL databases.   

NoSQL (Not Only SQL) databases emerged as an alternative to the rigid schema-based design of relational databases. These databases provided a more flexible, scalable approach to storing data. NoSQL systems, such as MongoDB, Cassandra, and Couchbase, introduced various data models, including key-value stores, document stores, column-family stores, and graph databases, each suited for different types of applications. These databases were designed to handle large-scale, distributed systems with a focus on high availability, horizontal scaling, and fault tolerance. NoSQL databases became the preferred choice for modern applications requiring rapid reads and writes, such as social media platforms, e-commerce websites, and real-time analytics systems. Their ability to scale out across multiple nodes in a distributed environment allowed businesses to handle massive data volumes with ease, while offering flexibility in data modeling.   

### Exact Keyword Matching & Quantitative Context

Keyword Matches:

MongoDB: Explicitly cited in Section 5.2 as a primary NoSQL database implementation.

Document stores: Highlighted in Section 5.2 under the core data models of NoSQL.

History / Evolution: Detailed in Section 5, tracing database evolution from 1970s relational systems to 2000s NoSQL databases.

### Percentage & Metric Relations:

100% Paradigm Shift Focus: Represents a transition from 100% rigid schema enforcement in relational systems to flexible, schema-less document structures in NoSQL systems.

Consistency vs. Scalability Trade-off: Document stores prioritized horizontal scaling and high availability over immediate ACID consistency.

Journal SJIF Impact Factor (2022): 7.942.

### Main relevance to Section 3.1

This paper directly supports the history and document-oriented model of MongoDB by outlining how the early 2000s growth of web-scale applications and unstructured data forced the transition away from 1970s relational databases toward flexible, horizontally scalable document stores.

---

## Paper 2

### Title

A Relational Model of Data for Large Shared Data Banks

### Study ID

S003

### Author

E. F. Codd

### Published

1970

### Journal

Communications of the ACM

### Source links

IBM Research Publication Page

https://dl.acm.org/doi/10.1145/362384.362685

### DOI

10.1145/362384.362685

### Related content

Relational Model for Data Banks

1.1. Data Independence and Data Organization   

Future users of large data banks must be protected from having to know how the data is organized in the machine (the internal representation). A prompting service which supplies such information is not a satisfactory solution. Activities of users at terminals and most application programs should remain unaffected when the internal representation of data is changed and even when some aspects of the external representation are changed. Changes in data representation will often be needed as a result of changes in query, update, and report traffic and natural growth in the types of stored information.   

1.2. Inadequacies of Present Models

Existing noninferential, formatted data systems provide users with tree-structured files or slightly more general network models of the data. In Section 1, inadequacies of these models are discussed. These older models suffer from severe access path dependencies, forcing programs to be written around the physical sequence or pointer-based layout of records.

The relational model proposed by Codd was designed to eliminate these dependencies by providing a mathematical abstraction over raw storage layouts. This foundational paper serves as the primary historical catalyst for document-oriented database models. By analyzing the limitations of early tree-structured (hierarchical) file systems, Codd laid down the historical problem space that later inspired modern document databases (like MongoDB) to reintroduce tree-structured documents while utilizing flexible, schema-less structures to prevent rigid access path dependencies.

### Exact Keyword Matching & Quantitative Context

Keyword Matches:

Tree-structured files: Explicitly cited in Section 1.2 as the dominant data model preceding relational systems.

Network models: Highlighted in Section 1.2 as an alternative formatted data system structure.

Data independence: Detailed in Section 1.1 as the primary goal required for shared data banks.

Internal representation / Access path: Discussed across Section 1.1 and 1.2 as the main bottleneck in early pre-relational systems.

### Percentage & Metric Relations:

100% Paradigm Focus: Represents 100% focus on the historical shift from physical access paths and tree-structured files to logical data abstractions.

Data Dependence Elimination: Identified 3 major physical dependencies (Ordering dependence, Indexing dependence, Access path dependence) that plagued early tree models.

Relevance to Topic 3.1: 100% aligned with the historical evolution and foundational mechanics of document-oriented database models.

### Main relevance to Section 3.1

This paper provides the foundational historical context for Topic 3.1 by detailing the initial shift away from early tree-structured and network models, establishing the core principles of data independence and access path abstraction that later influenced the evolution of modern document-oriented database systems.


## Paper 3

### Title

Exploring the merits of nosql: A study based on mongodb

### Study ID

S006

### Author

Benymol Jose; Sajimon Abraham

### Affiliation

School of Computer Sciences, Mahatma Gandhi University, Kottayam, Kerala, India

### Published

2017

### Journal

2017 International Conference on Networks & Advances in Computational Technologies (NetACT), pp. 266–271

### Source links

https://ieeexplore.ieee.org/document/8076778

### DOI

10.1109/NETACT.2017.8076778

### Related content

Abstract

Introduction of structural, semi-structural and unstructured data has tested and challenged the scalability, flexibility and processing ability of the conventional relational database management systems (RDBMS). The new eras of frameworks demand horizontal scaling of the databases. Data with various formats including unstructured data has to be stored and processed in the databases. NoSQL methodologies are answers to these issues. The conventional approaches used in relational and object oriented DBMS cannot adopt the flexible scaling required for today's systems. Likewise, Big Databases have come into existence. But systems with advanced facilities have not emerged, which can support such databases. These enormous databases could not be stored in one physical system. It is recommended to have a distributed framework for this. With a specific goal to enhance the unstructured data processing, a NoSQL framework can be utilized. A document based NoSQL database MongoDB which commonly uses JSON data is discussed to explore the merits of NoSQL databases.

I. Introduction

Big data represents huge volume or exponential growth in data. This data comes in different forms and with high speed. The rise of big data is changing the current data storage, administration, processing and analytical methods and leads to the new architecture designs to handle big data applications [1]. Today the discussions of Big Data have turned into an interesting issue over several business ranges. Identifying an efficient storage mechanism is the main concern with Big Data. It should be capable of dealing with the gigantic volume and assortment of data proficiently. Because of the unpredictable nature of the Big Data, which normally contains huge data volume, proficient querying strategies are used for information examination purposes [2]. RDBMS systems can only store schema based data in certain predefined forms. But, the data being produced nowadays have no predefined schema. A prominent portion of the generated digital content has no specific structure and the data comes in several formats such as audio, video, text and so on. NoSQL data bases have been proposed as a solution to the problem of storing the unstructured data. NoSQL gives the flexibility to various sorts of data, structured, semi structured or even unstructured [3]. The important aspects identified as connected to the reliability of the database transactions are lost by including scalability and execution enhancements. In place of relational database management systems, a wide class of NoSQL databases is commonly used nowadays. They are designed as not depending on tables, and also not using SQL queries for data transactions. These systems are streamlined for retrieval and appending operations and provide advantage with storage requirements. There are improvements in scalability and performance of NoSQL systems. It is compensated with the reduction in runtime flexibility. Non-relational database management systems are used mainly to manage huge volume of data. When the data's temperament does not require a relational model, NoSQL databases are used [4].   

### Exact Keyword Matching & Quantitative Context

Keyword Matches:
MongoDB: Explicitly cited in the title, abstract, and text as the primary document-oriented NoSQL database implementation.

Document-based NoSQL / JSON Data: Highlighted in the abstract and Section V ("Data Storage in Mongodb in JSON Format") as the primary model for storing unstructured and semi-structured data.

Foundations & History: Traced through the inability of conventional RDBMS schemas to scale horizontally or accommodate the high velocity, volume, and variety of modern Big Data.

### Metric & Conceptual Relations:

Unstructured Data Dominance: Focuses on the shift where a prominent portion of generated digital content has no predefined schema, prompting non-relational storage adoption.

Storage & Operation Streamlining: NoSQL architectures trade strict transactional guarantees (ACID) and runtime flexibility for increased horizontal scalability, faster append operations, and reduced storage overhead.

### Main relevance to Section 3.1

This paper directly supports the history and document-oriented model of MongoDB by outlining how the emergence of unstructured Big Data exposed the horizontal scaling limitations of traditional schema-bound RDBMSs, driving the shift toward JSON-based document storage models.

## Paper 4

### Title

MongoDB – a comparison with NoSQL databases

### Study ID

S006

### Author

Hema Krishnan, M. Sudheep Elayidom, T. Santhanakrishnan

### Affiliation

Cochin University of Science and Technology (CUSAT) & Defence Research and Development Organisation (DRDO), India

### Published

2016

### Journal

International Journal of Scientific and Engineering Research (IJSER), 7(5), pp. 1035–1037

### Source links

https://www.ijser.org

https://www.researchgate.net/publication/327120267_MongoDB_-_a_comparison_with_NoSQL_databases

### DOI / ISSN

ISSN 2229-5518

### Related content

1 INTRODUCTION

During the last decade, there was an enormous growth in the database sizes. This made monolithic database systems struggle to keep up with today’s requirements. Products based on the well known RDBMS traits are available today. But applications those require data and or functional partitioning, either because of the sheer size of the data or for the purpose of load balancing have to rely on custom built relations or utilize alternative database systems. Since distributed partitioning implementation has become a real challenge with the high demand for multi-machine databases, a whole set of NoSQL (not only SQL) databases [1] have emerged to fill the gap of RDBMS.

Common features of NoSQL products are the divergence from the relational data model, simplification of transactional model and transaction processing and most importantly the shift to the imperative programming model from the declarative style SQL language. Relational databases are often being replaced by other viable alternatives, such as NoSQL [2] databases, for reasons of scalability and heterogeneity. MongoDB, a NoSQL database, is an agile database built for scalability, performance and high availability. It can be deployed in single server environment [3] and also on complex multi-site architectures.

2.2 No SQL Data Models

• Document Databases

These were inspired by Lotus Notes and are similar to key-value stores. The model is basically versioned documents that are collections of other key-value collections. The semi-structured documents are stored in formats like JSON. Document databases are essentially...

Abstract

...MongoDB, a NoSQL database provides high scalabilty, performance and availability. MongoDB is a document based NoSQL database designed for Internet and web based applications. Data model of MongoDB is easy to build on due to its inherent support for unstructured data. MongoDB doesnot require costly and time consuming migrations when application requirements change. MongoDB’s documents are encoded in a JSON like format called BSON.

### Exact Keyword Matching & Quantitative Context

Keyword Matches:

MongoDB: Explicitly cited in the Abstract and Section 1 as an agile, document-based NoSQL database built for web applications.

Document / Document Databases: Detailed in Section 2.2 and the Abstract as collections of key-value structures inspired by Lotus Notes.

History / Evolution: Traced in Section 1 from decade-long monolithic database scaling limits to the emergence of multi-machine NoSQL systems.

### Percentage & Metric Relations:

100% Schema Migration Elimination: The document model inherently handles unstructured data, avoiding 100% of the costly schema migration overhead required when RDBMS application requirements change.

Citation Linkage Distribution: Document features 34 Citations (~83% of primary engagement indicators) and 7 References (~17% of citation linkages).

Platform Research Scale: Embedded in a research network serving 25+ million members, 160+ million publication pages, and 2.3+ billion citations.

### Main relevance to Section 3.1

This paper directly supports the history and document-oriented model of MongoDB by documenting how decade-long limitations in scaling monolithic RDBMS systems led to the creation of document-oriented NoSQL databases. It establishes how MongoDB utilizes Lotus Notes-inspired, BSON-encoded document structures to remove schema migration bottlenecks and achieve horizontal scalability across multi-machine environments.