# Section 1.3 — Purpose, scope, research questions, and organization

This file stores the source content that may help define the purpose and boundaries of the MongoDB review. The headings below are retained as they appear in the sources. The source text is not copied at length; only short excerpts are preserved for identification, and the remaining notes are paraphrased for drafting.

## Source 1

### Title

MongoDB: Meeting the Dynamic Needs of Modern Applications

### Study ID

S012

### Authors

Mukesh Rathore and Sikha S. Bagui

### Published

2024

### Venue

Encyclopedia, vol. 4, no. 4, pp. 1433–1453

### DOI and source link

- DOI: https://doi.org/10.3390/encyclopedia4040093
- Source: https://www.mdpi.com/2673-8392/4/4/93

### Source type

Open-access encyclopedia/review entry

### Short source excerpt

“This entry reviews MongoDB’s fundamentals, architectural features, advantages, and limitations.”

### Exact source headings relevant to this review

- `Definition`
- `1. Introduction`
- `2. MongoDB`
- `2.1. Features of MongoDB`
- `2.2. Architecture of MongoDB`
- `2.3. Comparing MongoDB with SQL Databases`
- `2.4. Comparing MongoDB with Other NoSQL Databases`
- `2.5. Use Case Comparison of MongoDB with Other NoSQL Databases`
- `3. Advantages`
- `4. Limitations`
- `5. CRUD Operations in MongoDB`
- `5.1. Create a Database and Collection`
- `5.2. Insert Documents into the Collection`
- `5.3. Update Documents under ‘Student’ Collection`
- `5.4. Querying Documents Using Mongosh`
- `5.5. Deleting Documents in MongoDB`
- `6. Structure of MongoDB`
- `7. Applications of MongoDB`
- `7.1. MongoDB and AI in Financial Services`
- `7.2. MongoDB in IT Services`
- `7.3. MongoDB in Cloud-Based Applications`
- `7.4. MongoDB for Internet of Things (IoT)`
- `7.5. MongoDB in Smart Environments`
- `8. Conclusions`

### Relevant topic labels from the source

- Document-Oriented Data Model
- Horizontal Scalability
- Indexes and Query Optimization
- Aggregation Operations
- Flexible Schema and Ease of Use
- Scalability
- High Performance
- Rich Query Language
- Replication and High Availability
- Document-Level Transactions
- Rich Ecosystem and Community
- Real-Time Analytics
- Memory Consumption
- Transaction Support
- Data Size Limitations
- Schema Design Complexity
- Join Operations
- Indexing Overhead/Unique Indexes
- Maturity of Ecosystem
- Concurrency and locking
- Built-in Reporting
- SQL Query Support
- Data Duplication Problem

### Relevance to Section 1.3

This source can help define the review’s scope. It covers MongoDB fundamentals, architecture, advantages, limitations, and applications. These areas can be used to explain what the present review examines and how the later sections are organized.

### Relevance to later sections

- Section 3: document model, flexible schemas, collections, documents, and structure.
- Section 4: scalability, indexing, aggregation, replication, transactions, and query processing.
- Section 5: data modelling and application domains.
- Section 6: advantages, limitations, relational comparison, joins, consistency, and workload trade-offs.
- Section 7: operational limitations, application trends, and research gaps.


## Content as per the sections 
2. MongoDB
MongoDB, a popular NoSQL database, is highly relevant in today’s data-driven world due to its performance, scalability, and versatility [5,6]. Its document-oriented model allows for high read- and write-throughput, making it ideal for big data applications [5,6]. A comparative study of MongoDB and document-based MySQL demonstrated MongoDB’s efficiency in handling Create, Read, Write, and Delete (CRUD) operations, especially query operations, which are crucial for data access and processing [6]. Furthermore, MongoDB’s ability to fully utilize the “sharding-nothing cluster architecture” makes it a great tool for building high-performance data warehouses [5]. These features make MongoDB an excellent choice for managing large amounts of data originating from diverse sources like social media, cloud computing services, and the Internet of Things [6].
2.1. Features of MongoDB
Document-Oriented Data Model [7]: MongoDB employs a document-oriented data model, storing data in flexible JSON-like documents instead of fixed schemas, enabling easier handling of unstructured data. This model supports nested fields and arrays, facilitating the storage of complex data and making it suitable for applications such as content management systems and real-time data analysis.
Horizontal Scalability [8]: MongoDB achieves horizontal scalability through sharding and distributing data across multiple servers to handle large volumes of data effectively. Additional nodes can be added to the cluster as data volumes increase, ensuring scalability to meet application demands, which is crucial for managing big data [9].
Indexes and Query Optimization [10]: MongoDB supports various types of indexes, including single-field, multi-field, and geospatial indexes, enhancing query performance by quickly locating the required data. Text search indexes enable users to search for specific keywords within documents, facilitating fast and efficient data retrieval, especially in large databases.
Aggregation Operations [11]: MongoDB’s aggregation framework allows complex queries on stored data, providing a set of powerful operators for filtering, grouping, and transforming data in real-time analysis and reporting scenarios. This framework handles large data volumes efficiently, enabling intricate data analysis tasks and report generation.
Replication [12]: MongoDB’s replication feature ensures high availability and data redundancy by automatically replicating data across multiple nodes. In case of node failure, MongoDB promotes a secondary node to maintain database availability, ensuring data durability and preventing data loss through a clocking mechanism known as heartbeat.
MapReduce [13]: MapReduce in MongoDB is a flexible but complex feature. It processes large datasets in parallel across multiple nodes, enabling complex data analytical tasks, statistical analysis, and report generation. It is utilized for the batch processing of extensive datasets, providing flexibility and power in data processing.
GridFS [14,15]: MongoDB’s GridFS allows storage and retrieval of large files of the size 16 MB or more, like images, videos, and audio files, by breaking them into smaller chunks distributed across multiple nodes. This efficient storage and retrieval mechanism is beneficial for applications requiring the handling of large multimedia files or content management systems.
Automatic Sharding [16]: MongoDB’s sharding feature distributes data across multiple servers to enhance database performance by balancing the load. Automatic sharding distributes data based on specified shard keys, with MongoDB’s balancer ensuring even distribution across shards, thereby optimizing database performance [14]. MongoDB includes ranged sharding, hashed sharding, and zoned sharding.
Security [17]: MongoDB’s security features include authentication, authorization, encryption, and network security. It supports various authentication mechanisms and encryption at rest, injection prevention [18], as well as TLS/SSL for secure connections. MongoDB also provides a security checklist for protecting deployments and a process for reporting security bugs [19].
2.2. Architecture of MongoDB
The MongoDB application data platform depicted in the MongoDB Architecture Guide [19] embodies a sophisticated architecture designed to accommodate diverse data management needs. The components include the Document Model, key-value pairs, relationships, objects, graphs, geospatial, unified interface, transactional, search, mobile, real-time analytics, security, multi-cloud, and distributed architecture.
Each layer has its constituent component as follows:
The Bottom Layer: This foundational layer of the platform signifies the core infrastructure and security measures essential for robust data management.
Security is the cornerstone of this layer, encompassing robust protocols and mechanisms designed to safeguard sensitive data from unauthorized access and breaches. With data security being a top priority in today’s digital landscape, this component ensures that MongoDB users can trust their data to be protected against potential threats.
Multi-cloud capabilities extend the reach of MongoDB’s platform across multiple cloud environments, enabling organizations to leverage the benefits of different cloud providers while maintaining consistency and flexibility in their data management strategies. This component empowers users to seamlessly deploy and manage their MongoDB instances across diverse cloud infrastructures, enhancing resilience and scalability.
Distributed Architecture is a fundamental principle of MongoDB’s architecture that enables the platform to handle large volumes of data across geographically distributed locations. By distributing data and processing tasks across multiple nodes, this component ensures high availability, fault tolerance, and performance scalability, even in the face of network failures or hardware issues.
The Middle Layer: The middle layer occupies a pivotal position within MongoDB’s application data platform, acting as a bridge between the foundational infrastructure and the advanced data processing capabilities. This layer encompasses a diverse range of functionalities aimed at facilitating dynamic data interactions and analyses.
Transactional capabilities enable MongoDB users to perform data transactions with efficiency and reliability. Whether it is ensuring data integrity, supporting concurrency control, or managing complex transactional workflows, this component provides the necessary tools and mechanisms to maintain consistency and reliability across various operations.
Search functionality is another key aspect of the middle layer, empowering users to efficiently retrieve and query information within their MongoDB datasets. By facilitating comprehensive search capabilities, this component enhances the discoverability and accessibility of data, enabling users to extract valuable insights and information from their databases with ease.
The mobile component plays a crucial role in enabling seamless integration and synchronization of data across different devices and platforms. Whether it is ensuring offline access, supporting real-time data synchronization, or optimizing performance for mobile environments, this component enables MongoDB users to deliver responsive and connected experiences to their mobile users.
The unified interface component serves as a central access point for interacting with MongoDB’s data platform, providing users with a cohesive and intuitive user experience across different functionalities and interfaces. By streamlining access to MongoDB’s diverse set of capabilities, this component enhances usability and accessibility, empowering users to leverage the full potential of the platform without unnecessary complexity or friction.
The real-time analytics component leverages MongoDB’s real-time data processing and analysis capabilities to deliver timely insights and decision-making based on up-to-date information. Whether monitoring key performance indicators, detecting anomalies, or generating actionable insights, this component enables users to derive value from their data in real time, driving informed decision-making and business outcomes.
The top layer: This crowns MongoDB’s application data platform with advanced data modeling and processing capabilities, enabling users to unlock the full potential of their data. As the uppermost tier of the architecture, this layer embodies MongoDB’s commitment to flexibility, versatility, and innovation in data management.
The Document Model component represents MongoDB’s signature approach to data storage and retrieval. Unlike traditional relational databases, which rely on rigid schemas, MongoDB embraces a schema-less, document-oriented model, allowing users to store and query data more flexibly and naturally. This component empowers users to represent complex data structures as rich, hierarchical documents, facilitating agile development and iteration.
Key-value pairs offer a lightweight yet powerful data structure for storing and retrieving simple data pairs consisting of keys and corresponding values. Ideal for scenarios such as caching, configuration management, and session storage, this component provides a straightforward and efficient solution for managing key-value datasets within MongoDB.
Relationships play a crucial role in modeling complex data interactions and dependencies, enabling users to establish connections between different data entities and navigate relationships with ease. Whether it is representing one-to-one, one-to-many, or many-to-many relationships, this component provides the tools and mechanisms to model and manage data relationships effectively within MongoDB’s flexible document model.
Objects encompass a diverse range of data types and structures, allowing users to represent and manipulate complex data objects within MongoDB. From arrays and nested documents to custom data types and user-defined objects, this component provides the flexibility to accommodate a wide variety of data structures, empowering users to express their data in the most natural and meaningful way possible.
Graphs represent interconnected data entities and relationships in a visually intuitive manner, enabling users to analyze and traverse complex networks of data with ease. Whether it is representing social networks, recommendation systems, or network infrastructure, this component provides the tools and algorithms to model and analyze graph-based data structures within MongoDB, facilitating powerful graph-based analytics and insights.
Geospatial capabilities enable users to store, query, and analyze geographic information within MongoDB, supporting spatial data types, indexing, and querying capabilities. Whether it is representing points, lines, polygons, or multi-dimensional shapes, this component empowers users to build location-aware applications and perform spatial analysis within MongoDB’s versatile data platform.
The interplay between these layers and components forms the bedrock of MongoDB’s application data platform, enabling organizations to build robust, scalable, and versatile data solutions to meet their evolving business needs [19]. Apart from these essential components, MongoDB’s architecture encompasses other components like drivers and storage engines. MongoDB’s features enable developers to build flexible, scalable, and high-performance applications capable of handling large volumes of data efficiently using tools like the document-oriented data model, horizontal scalability, indexing, aggregation, replication, MapReduce, sharding, and GridFS. These features cater to the requirements of modern businesses, ensuring robust and efficient application development [19].
2.3. Comparing MongoDB with SQL Databases
Table 1 compares MongoDB and document-based SQL databases [6,20]. MongoDB and SQL databases diverge notably in their data models and scalability options. MongoDB’s document-oriented approach facilitates the flexible storage of unstructured data, with documents akin to rows in SQL databases but offering nested fields, favoring complex data structures and aggregation. On the other hand, SQL databases adhere to a rigid table-based schema, enabling efficient joins across tables and precise control over data consistency [20,21]. While MongoDB excels in horizontal scalability through sharding, SQL databases typically offer vertical scalability, ensuring robust transactional capabilities but potentially limiting scalability for massive datasets [22].
Table 1. Comparing MongoDB vs. SQL databases.

In SQL databases, a primary key is a field or combination of fields that uniquely identifies each record in a table [6,20]. A primary key serves two crucial functions: ensuring uniqueness and maintaining referential integrity. It uniquely identifies each record in a table, preventing duplicate entries, and acts as a reference point for foreign keys in related tables, facilitating the establishment of relationships between them [20]. In MongoDB, the equivalent of a primary key is the _id field [23] for each document (row in SQL) in the collection (table in SQL). The _id field in MongoDB, which is immutable and generated automatically, guarantees that each document is unique and constant. If an ObjectId is not specifically given, MongoDB will assign one to ensure this uniqueness.
While both SQL and MongoDB employ unique identifiers, they diverge in several aspects. In SQL, the primary key can be any chosen field [20], while MongoDB mandates _id as the unique identifier. SQL’s primary key can be altered, albeit not recommended, whereas MongoDB’s _id remains immutable. Additionally, MongoDB auto-generates a unique _id if absent, whereas, in SQL, the primary key must be set manually or through auto-increment mechanisms [6,21].
2.4. Comparing MongoDB with Other NoSQL Databases
Other popular NoSQL databases besides MongoDB include Apache Cassandra [24], Redis [25], Apache CouchDB [26], Apache Hbase [27], and Amazon DynamoDB [28]. MongoDB’s simplicity in data representation and querying can reduce development time and complexity compared to databases like Cassandra [24] and Hbase [27], which may require more effort to manage and query data. Databases like Redis and CouchDB offer scalability features, and MongoDB’s sharding capabilities are particularly robust and well-suited for high-volume applications. While Redis offers excellent performance for specific use cases like caching, MongoDB’s versatility and ability to handle complex data structures contribute to its overall performance superiority [29].
In the NoSQL databases category, MongoDB reportedly leads with an estimated market share of approximately 44.29% [30]. Following MongoDB, DynamoDB holds a share of 10.17%, while Cassandra and HBase hold 5.16% and 4.06%, respectively. Amazon ElastiCache rounds out the list with a share of 2.32% [2].
MongoDB introduced multi-document transactions in version 4.0, allowing developers to perform atomic operations across multiple documents within a single transaction. This feature enhances data consistency and integrity, making MongoDB more suitable for transactional applications compared to databases like Redis and Cassandra, which may have limitations in this area.
While each NoSQL database has its strengths and uses cases, MongoDB’s combination of ease of use, scalability, performance, transaction support, and ecosystem make it a compelling choice for a wide range of applications and industries.
MongoDB’s native sharding capability allows seamless scaling across multiple nodes to handle write-intensive workloads and growing data sizes without adding complexity to applications. Sharding enables the easy adjustment of shards and shard keys, ensuring system availability while automatically rebalancing data across the shards as needed. Unlike other distributed databases that randomly distribute data, MongoDB offers multiple sharding policies tailored to specific query patterns or data placement needs, including ranged, hashed, and zoned sharding [19].
Additionally, MongoDB offers tiered scaling through the MongoDB Atlas Online Archive, enabling economical storage scaling by automatically moving aged data to lower-cost storage tiers while maintaining accessibility through federated queries [19].
2.5. Use Case Comparison of MongoDB with Other NoSQL Databases
Table 2 compares MongoDB with other document-based NoSQL databases like CouchDB and Amazon DynamoDB.
Table 2. Comparing use cases of MongoDB to other NoSQL databases.


## Source 2

### Title

A Review on Various Aspects of MongoDb Databases

### Study ID

S013

### Author

Anjali Chauhan

### Published

2019

### Venue

International Journal of Engineering Research & Technology, vol. 8, issue 5, pp. 90–92

### DOI and source link

- DOI: https://doi.org/10.17577/IJERTV8IS050031
- Source: https://www.ijert.org/a-review-on-various-aspects-of-mongodb-databases

### Source type

Short review article

### Short source excerpt

“In this paper, a review of various aspects of MongoDB is discussed and some key issues are framed.”

### Exact source headings relevant to this review

- `Abstract`
- `I. INTRODUCTION`
- `A. Key Features of MongoDB`
- `B. Overview of MongoDB`
- `C. Advantages of MongoDB`
- `D. Uses of MongoDB`
- `E. Importance of MongoDB`
- `II. COMPARATIVE STUDY`
- `III. ISSUES WITH MONGODB`
- `IV. CONCLUSION AND FUTURE SCOPE`

### Relevant topic labels from the source

- High Performance
- High Availability
- Horizontal Scalability
- Replica Sets
- Sharding
- Big Data
- Content Management and Delivery
- Mobile and Social Infrastructure
- User Data Management
- Data Hub
- Relational databases and MongoDB
- NewSQL
- Problems with Reliability
- Problems with Schema-less Design

### Relevance to Section 1.3

The article can help identify a compact scope for the review: MongoDB’s features, uses, comparison with relational systems, problems, and future research. Its `IV. CONCLUSION AND FUTURE SCOPE` heading is also relevant when stating that the review considers limitations and open research questions.

### Relevance to later sections

- Section 3: document, collection, database, and document-oriented structure.
- Section 4: performance, availability, replication, sharding, and querying.
- Section 5: uses, data modelling, and application domains.
- Section 6: comparative study and relational terminology.
- Section 7: reliability, schema design, and future research.

## Drafting boundary

Use these sources to identify the review’s coverage and terminology. Do not copy their claims about popularity, market share, universal performance, or superiority without checking the original evidence. Do not place CRUD commands in Section 1.3; those belong in a later technical section if the team decides to retain them.

## Contents as per the sections

I. INTRODUCTION
MongoDB is an open-source document database that
provides high performance, high availability, and automatic
scaling. A record in MongoDB is a document, which is a data
structure composed of field and value pairs. MongoDB
documents are similar to JSON objects. The values of fields
may include other documents, arrays and arrays of documents.
The advantages of using documents are:
• Documents (i.e. objects) correspond to native data types in
many programming languages.
• Embedded documents and arrays reduce need for
expensive joins.
• Dynamic schema supports fluent polymorphism.
A. Key Features of MongoDB
• High Performance – MongoDB provides high
performance data persistence. In particular, it supports for
embedded data models reduces I/O activity on database
system, indexes support faster queries and can include
keys from embedded documents and arrays.
• Rich Query Language - MongoDB supports a rich query
language to support read and write operations (CRUD) as
well as Data aggregation, Text Search.
• High Availability – MongoDb’s replication facility, called
replica set, provides automatic failover and data
redundancy. A replica set is a group of MongoDB servers
that maintain the same data set, providing redundancy and
increasing data availability.
• Horizontal Scalability – MongoDB provides horizontal
scalability as part of its core functionality. Sharding
distributes data across a cluster of machines. 

E. Importance of MongoDB
MongoDB is a document-oriented database. This is “as
opposed to” other types of DBs: Relational, Graph,
Key/Value, Queue, FTS, Map/Reduce, etc. The leads to
lessons like: data organization relative to query patterns,
indexing options, handling polymorphic objects in code,
performing manual joins on the client.
MongoDB is also a DB that highlights the use of multiple
servers in two ways: Replica Sets and Sharding
 Replica Sets:
•Redundancy and failover
•Zero downtime for upgrades and maintenance
•Master-slave replication
•Strong consistency
•Delayed consistency
•Geospatial features
 Sharding:
• Distributes a single logical database system across a
cluster of machines
• Uses range-based partitioning to distribute documents
based on a specific shard key
• Automatically balances the data associated with each
shard
• Can be turned on and off per collection(table)
This leads to lessons around things like “write safety”,
handling master fail-over, shard keys and shard balancing.
MongoDB also provides a simple framework for performing
map/reduce or aggregation operation across multiple
computers. This leads to lessons around projection of objects
and basic aggregation primitives. 

II. COMPARATIVE STUDY
As shown in Table 1, in MongoDB, some MySQL terms,
such as table or row, get another name, namely collection,
respectively BSON document. In other words, we can say that
MongoDB contains collections, collections contain documents
and a document contains multiple fields.
In the classical RDBMS model, the data is organized in
the form of relations and is represented in a table consisting of
rows and columns. Relational databases employ the usage of a
parameter known as key. There are several types of keys 
available albeit primary key is one of the most important key
of the table; it is used to identify each row of the table
uniquely. There are four main operations used to access the
database they are known as CRUD namely, Create, Read,
Update and Delete associated with the data. These operations
use the Structured Query Language –SQL. ACID properties
are one of the most significant and important attributes of a
SQL database. This is the key difference between SQL and
NoSQL database systems. The NewSQL approach on the
other hand, conserves and supports the properties of relational
model, at the same time incorporating the features of NoSQL
model.
TABLE I. MYSQL VS MONGODB TERMS
Unlike MySQL, where the database is presented
graphically in the form of a table, in MongoDB, a database
has the following graphic structure:
{
“_id”: “d4acaf3a76e4378b853eb15fde21672”,
“username”: “andra”,
“email”: andra@gmail.com,
}
{
“_id”: “d4rvgf3a76e4378b853eb15fde21672”,
“username”: “iona”,
“email”: iona@gmail.com,
}
The example above shows a database for users, each user
having an id that is unique and automatically generated, a
username and an email address.
The application will have 3 classes of users, namely the
administrators, the moderators and the regular users. Each
user has the right to create a private forum/subforum. Within a
subforum, the moderators have the right to edit/delete the
subforum and they can also moderate other users’ discussions,
while regular users are only allowed to post discussions and
leave comments. If a relational database has been used, the
columns for forums and subforums should have appeared at
all forum users, although normal users will never have the
right to create, modify or delete them, unless of course, they
are the administrators of that particular forum. Using
MongoDB, these fields regarding the forum and subforum
will appear only to users who have that right (moderators and
administrators), thus significantly reducing storage space,
which is much higher using MySQL.
As in relational databases, MongoDB also has one-tomany relationships, but in this case the concept of foreign key
is not used; instead, the concept of annotations is used. Thus,
MySQL MongoDB
Database Database
Table Collection
Index Index
Row BSON document
Column BSON field
Join Embedded docu
in this case, regarding a forum, the connection between the
forum and its subforums is as follows: in the forum document,
the subforums are referenced using the annotation.
MongoDB provided lower execution times than MySQL
in all four basic operations (Insert, Select (query), Update,
Delete), which is essential when an application should provide
support to thousands of users simultaneously.
III. ISSUES WITH MONGODB
MongoDB is a popular option for database storage. It’s
easy to learn and faster than competing RDBMs, but still there
are some potential pitfalls in it. It’s denormalised, meaning
data is stored in a nested document structure rather than
relational tables. This makes for faster lookups as Mongo
doesn’t rely on expensive join operations seen with MySQL
and other database engines. Despite such strengths, there are
several problems with MongoDB that one should consider
using it as a database engine.
• Problems with Reliability – MongoDB writes are
asynchronous by default. The main advantage of this is
you don’t have to wait for confirmations for every insert
or update operation before the next one starts. This makes
updates faster but less reliable. Even if some of the
updates are unsuccessful, the write operation will still
partially succeed.With this engine, it’s all or nothing.
While this may be slower, it’s a more consistent and
reliable way to perform writes operations. When things
only partially work you can end up with data
inconsistencies and buggy data.
• Problems with Schema-less Design – Since MongoDB is
denormalised, it doesn’t adhere to a relational schema.
Everything is stored in nested JSON objects called
documents. While this allows for greater flexibility with
your data models, it forces more schema based design
decisions on the app logic than the db. Without the
schema in place, the rules and regulations of your data
models are dictated by your app logic rather than the db
itself. 