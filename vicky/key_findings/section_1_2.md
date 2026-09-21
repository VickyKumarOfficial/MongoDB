# Section 1.2 — Emergence of NoSQL databases

## Paper 1

### Title

The Emergence of NoSQL and Convergence with Relational Databases

### Study ID

S004

### Author

Matt Allen, guest author and Senior Product Marketing Manager at MarkLogic

### Published

Not stated on the page

### Source type

Industry/trade article

### Source link

https://www.zdnet.com/article/the-emergence-of-nosql-and-convergence-with-relational-databases/

### Related content

The article discusses the emergence of NoSQL, the growth of web-scale applications, flexible data models, data integration, and the possible convergence of relational and NoSQL capabilities. Because it is a vendor-affiliated guest article, use it mainly to identify topics and original sources rather than as final scholarly evidence.

### Main relevance to Section 1.2

It helps introduce changing data-management requirements and the movement toward systems that combine relational and NoSQL models. Claims attributed to Gartner, Brodie and Liu, or other sources should be checked in the original publications before citation.

---

## Paper 2

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

#### 5. Evolution of Database Technology

Database technology has come a long way since its inception, evolving in response to the changing needs of businesses, advancements in computing power, and the explosion of data. Early databases were designed for managing small sets of structured data in a centralized environment. Over time, as businesses and technology grew, databases became more complex, capable of managing larger volumes of data, diverse data types, and offering more flexible architectures. Understanding this evolution is key to recognizing the current state of database technology and its future direction.

#### 5.1 Early Relational Databases

The story of modern database technology begins in the 1970s with the development of the relational database model by Dr. Edgar F. Codd. Prior to relational databases, most data was stored in hierarchical or networked models, which were rigid and inefficient for managing large datasets. Relational databases, such as IBM's System R and Oracle’s database, introduced the idea of using tables to store data and SQL (Structured Query Language) to retrieve and manipulate it.

This approach allowed for more flexibility and scalability, enabling the use of standardized operations like joins, unions, and aggregations to manage and query large datasets. Relational databases became the backbone of business applications, powering everything from inventory management systems to financial transaction systems. Their structure, based on well-defined schemas, allowed for easy querying, data integrity, and support for ACID (Atomicity, Consistency, Isolation, Durability) properties, which ensured that transactions were processed reliably.

#### 5.2 Emergence of NoSQL

In the early 2000s, the rise of web-scale applications and big data ushered in a new era for database technology. Traditional relational databases, while powerful, were struggling to keep up with the demands of highly dynamic and unstructured data, such as social media content, logs, and sensor data. The limitations of relational databases in handling massive amounts of unstructured data, along with the need for distributed computing, led to the rise of NoSQL databases.

NoSQL (Not Only SQL) databases emerged as an alternative to the rigid schema-based design of relational databases. These databases provided a more flexible, scalable approach to storing data. NoSQL systems, such as MongoDB, Cassandra, and Couchbase, introduced various data models, including key-value stores, document stores, column-family stores, and graph databases, each suited for different types of applications. These databases were designed to handle large-scale, distributed systems with a focus on high availability, horizontal scaling, and fault tolerance. NoSQL databases became the preferred choice for modern applications requiring rapid reads and writes, such as social media platforms, e-commerce websites, and real-time analytics systems. Their ability to scale out across multiple nodes in a distributed environment allowed businesses to handle massive data volumes with ease, while offering flexibility in data modeling


### Main relevance to Section 1.2

This paper supports the transition from relational databases to NoSQL by explaining the effects of web-scale applications, big-data growth, unstructured data, flexible schemas, distributed systems, and horizontal scaling.

---

## Paper 3

### Title

Bigtable: A Distributed Storage System for Structured Data

### Study ID

S009

### Authors

Fay Chang, Jeffrey Dean, Sanjay Ghemawat, Wilson C. Hsieh, Deborah A. Wallach, Mike Burrows, Tushar Chandra, Andrew Fikes, and Robert E. Gruber

### Published

2006

### Venue

7th USENIX Symposium on Operating Systems Design and Implementation (OSDI), pp. 205–218

### Source links

- https://research.google/pubs/bigtable-a-distributed-storage-system-for-structured-data/
- https://research.google.com/archive/bigtable-osdi06.pdf

### DOI

10.1145/1365815.1365816

### Related content

The abstract describes Bigtable as a distributed storage system designed to scale to “petabytes of data across thousands of commodity servers.” It presents a flexible data model that gives clients dynamic control over data layout and format.

The introduction explains that Bigtable “does not support a full relational data model.” Instead, it provides a simpler model with dynamic control over data layout and data locality. The data model is a sparse, distributed, persistent, multidimensional sorted map indexed by row, column, and timestamp.

### Main relevance to Section 1.2

This is a primary source for the practical motivation behind distributed and wide-column-style data stores: internet-scale volume, flexible schemas, high performance, high availability, and distributed processing. It should support specific technical claims rather than a general history of all NoSQL databases.

---

## Paper 4

### Title

HBase and Hypertable for Large Scale Distributed Storage Systems: A Performance Evaluation for Open Source BigTable Implementations

### Study ID

S010

### Authors

Ankur Khetrapal and Vinay Ganesh

### Published

2008 indicated by the file record; confirm the publication venue and year before final citation

### Affiliation

Department of Computer Science, Purdue University

### Source link

https://pubs.dbs.uni-leipzig.de/cloud/sites/cloud.pubs.dbs.uni-leipzig.de/files/Khetrapal2008HBaseandHypertableforlargescaledistributedstorage.pdf

### Related content

The paper explains that HBase and Hypertable were open-source implementations inspired by Google’s Bigtable. It describes HBase as running on Hadoop and Hypertable as compatible with multiple distributed file systems. The authors identify data placement, cache management, fault tolerance, scalability, and security as challenges in large distributed storage systems.

The introduction connects schema flexibility with application evolution: storing structured data without defining a schema in advance can reduce the need to refactor a database as applications change. The paper also reports implementation differences and performance limitations in its tested HBase and Hypertable versions.

### Main relevance to Section 1.2

This paper is useful as a secondary source showing how Bigtable-inspired ideas were implemented in open-source systems. It can support a short point about the spread of distributed wide-column designs, but it should not be used as the main historical or empirical authority because the venue is not clearly identified and the experiments use early software versions and limited test configurations.

---

## Paper 5

### Title

Dynamo: Amazon’s Highly Available Key-value Store

### Study ID

S011

### Authors

Giuseppe DeCandia, Deniz Hastorun, Madan Jampani, Gunavardhan Kakulapati, Avinash Lakshman, Alex Pilchin, Swaminathan Sivasubramanian, Peter Vosshall, and Werner Vogels

### Published

2007

### Venue

ACM SOSP ’07, pp. 205–220

### Source link

https://www.allthingsdistributed.com/files/amazon-dynamo-sosp2007.pdf

### Related content

#### Section 2 — Background

Traditionally production systems store their state in relational databases. For many of the more common usage patterns of state persistence, however, a relational database is a solution that is far from ideal. Most of these services only store and retrieve data by primary key and do not require the complex querying and management functionality offered by an RDBMS. This excess functionality requires expensive hardware and highly skilled personnel for its operation, making it a very inefficient solution.

The paper continues by explaining that replication technologies commonly choose consistency over availability and that scale-out and smart partitioning remain difficult. Dynamo addresses these requirements with a simple key/value interface, high availability, a defined consistency window, efficient resource use, and a simple scale-out scheme.

#### Abstract and introduction

Dynamo is presented as a highly available key-value storage system for Amazon services. It is designed for very large-scale infrastructure where failures are continuous and availability is critical. The system sacrifices consistency under some failure conditions and uses object versioning and application-assisted conflict resolution.

#### Section 3.2 — Distributed file systems and databases

The paper explains that traditional replicated relational systems prioritize strong consistency, which limits scalability and availability and makes network partitions difficult to handle. Dynamo instead allows reads and writes to continue during network partitions and uses conflict-resolution mechanisms with eventual consistency.

### Main relevance to Section 1.2

This is a primary source for explaining why some web-scale workloads moved away from general-purpose relational databases toward specialized key-value systems. It supports the requirements of high availability, partition tolerance, simple primary-key access, horizontal scaling, and consistency trade-offs.

### Limitation

Dynamo addresses Amazon’s internal, trusted, application-specific workloads. Its design should not be presented as evidence that relational databases are generally unsuitable, or that eventual consistency is always preferable.

---

## Paper 6

### Title

What is a Document Database?

### Study ID

S006

### Author / publisher

MongoDB

### Source type

Vendor educational article

### Source link

https://www.mongodb.com/resources/basics/databases/document-databases

### Related content

The article defines a document database as a database that stores information in documents. It explains that documents use field–value pairs and may contain strings, numbers, dates, arrays, and nested objects. It also describes JSON, BSON, and XML as document formats.

The article explains collections, flexible schemas, CRUD operations, indexing, replication, distribution, and horizontal scaling. It contrasts document databases with relational tables by emphasizing object-like documents, embedded related data, fewer joins, and schema evolution.

It also discusses embedded documents and references, the relationship between document databases and other data models, and MongoDB’s use of BSON documents.

### Main relevance to Section 1.2

This source is useful for defining the document-oriented category and preparing the transition from general NoSQL systems to MongoDB. Because it is published by MongoDB, use it for terminology and product context, not as independent evidence for broad comparative or performance claims.

---

## Paper 7

### Title

Exploring the Merits of NoSQL: A Study Based on MongoDB

### Study ID

S007

### Authors

Benymol Jose and Sajimon Abraham

### Published

2017

### Venue

2017 International Conference on Networks & Advances in Computational Technologies (NetACT), pp. 266–271

### Source link

https://doi.org/10.1109/NETACT.2017.8076778

### Related content

The abstract explains that structural, semi-structural, and unstructured data challenge the scalability, flexibility, and processing ability of conventional RDBMSs. It links modern frameworks with the need for horizontal database scaling and distributed processing of varied data formats.

It presents NoSQL as a response to these requirements and discusses MongoDB as a document-based NoSQL database that commonly uses JSON data to support unstructured-data processing.

### Main relevance to Section 1.2

This paper supports the motivation for NoSQL and the transition from broad NoSQL requirements to MongoDB as a document-oriented system.

### Access limitation

Only the IEEE abstract was accessible. Do not claim that its detailed methods or results were verified until the full paper is obtained.

---

## Paper 8

### Title

A Performance Comparison of Document-Oriented NoSQL Databases

### Study ID

S008

### Authors

K. B. Sundhara Kumar, Srividya, and S. Mohanavalli

### Published

2017

### Venue

2017 International Conference on Computer, Communication and Signal Processing (ICCCSP)

### Source link

https://doi.org/10.1109/ICCCSP.2017.7944071

### Related content

The abstract links exponential data growth and varied data formats with the need for schema-less database approaches. It states that existing RDBMSs are not well suited to storing and processing such data and presents NoSQL as a response.

The paper compares MongoDB and CouchDB as document-oriented NoSQL databases using qualitative and quantitative features for streaming applications.

### Main relevance to Section 1.2

This paper supports the classification of document-oriented NoSQL databases and positions MongoDB within that category. It may also support a later comparison section if the full experimental details and benchmark conditions are obtained.

### Access limitation

The full IEEE paper was not accessible. Treat the abstract as provisional evidence and do not use specific performance conclusions without the complete paper.
