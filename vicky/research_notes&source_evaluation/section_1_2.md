# Section 1.2 source evaluation

Section: 1.2, Emergence of NoSQL databases

## Purpose of this note

This file records discovery sources, the original sources they point to, and the checks needed before a claim enters the Evidence Matrix.

## Discovery source: ZDNET article

- **Title:** The Emergence of NoSQL and Convergence with Relational Databases
- **Author:** Matt Allen, guest author and Senior Product Marketing Manager at MarkLogic
- **Venue:** ZDNET
- **Source type:** Industry/trade article
- **Study ID:** S004
- **URL:** https://www.zdnet.com/article/the-emergence-of-nosql-and-convergence-with-relational-databases/
- **Decision:** Discovery source only
- **Reason:** The article is a secondary, vendor-affiliated guest post rather than a peer-reviewed research source. It may help locate original references, but its claims should not be treated as final evidence without checking those references.

## Claims that require source tracing

### Gartner multi-model prediction

- Claim found in the article: leading operational DBMSs would support multiple data models, including relational and NoSQL models.
- Original source to locate: Gartner report or publication cited by the article.
- Required check: report title, author or analyst, publication year, page, and stable URL.
- Current status: Pending.

### Data-integration cost figure

- Claim found in the article: a large share of information-system cost is attributed to data-integration problems.
- Referenced work: M. L. Brodie and J. T. Liu, "The power and limits of relational technology in the age of information ecosystems."
- Required check: locate the original publication and confirm the exact wording, population, date, and page.
- Current status: Pending.

### Data-wrangling statistic

- Claim found in the article: data scientists spend a substantial share of their time preparing or cleaning data.
- Original source: Not yet identified.
- Required check: identify the survey or report before using the statistic.
- Current status: Pending.

## Screened source: Emerging Trends and Challenges in Modern Database Technologies

- **Title:** Emerging Trends and Challenges in Modern Database Technologies: A Comprehensive Analysis
- **Author:** Naresh Kumar Miryala
- **Year:** 2024
- **Venue:** International Journal of Science and Research (IJSR), 13(11), pp. 1686–1696
- **Source type:** Review paper
- **Study ID:** S005
- **DOI:** 10.21275/MS241126103744
- **Full text:** https://www.ijsr.net/archive/v13i11/MS241126103744.pdf
- **Decision:** Pending verification; source-screening row currently marked Pending verification

### Why it is useful

The paper gives a compact explanation of why NoSQL emerged: web-scale applications, big-data growth, dynamic or unstructured data, and distributed-computing requirements. It also summarizes the major NoSQL model families and the emphasis on horizontal scaling, availability, fault tolerance, and fast reads and writes. These points can support the short transition from relational databases to NoSQL.

### How to use it

- Use it for a brief overview and transition paragraph, not as the sole authority for NoSQL history.
- Record three findings in the Evidence Matrix: motivation for NoSQL (E005), flexible/multiple data models (E006), and distributed scalability and availability (E007).
- Cite Section 5.2 in the paper notes. Confirm the PDF page number before final manuscript submission.

### Limitations and source pairing

The discussion is broad and does not provide detailed primary experiments or a rigorous comparison of NoSQL systems. Pair it with Chang et al. (Bigtable), DeCandia et al. (Dynamo), Cattell, or a credible NoSQL survey when making specific technical or historical claims. Avoid repeating the paper’s phrase “preferred choice” as a general fact without stronger evidence.

## Better primary-source leads for Section 1.2

## Selected primary source: Bigtable

- **Title:** Bigtable: A Distributed Storage System for Structured Data
- **Authors:** Fay Chang, Jeffrey Dean, Sanjay Ghemawat, Wilson C. Hsieh, Deborah A. Wallach, Mike Burrows, Tushar Chandra, Andrew Fikes, and Robert E. Gruber
- **Year:** 2006
- **Venue:** OSDI ’06, Seventh USENIX Symposium on Operating Systems Design and Implementation, pp. 205–218
- **Source type:** Conference paper
- **Study ID:** S009
- **Official source:** https://research.google.com/archive/bigtable-osdi06.pdf
- **Google Research record:** https://research.google.com/archive/bigtable.html
- **Decision:** Selected as a primary candidate; add to Source Screening before final evidence use

### Why it is useful

Bigtable is a primary system paper showing how a large web company designed a distributed storage system for structured data at very large scale. It directly supports the transition from a full relational model toward flexible, distributed data models and gives concrete evidence for scalability, high performance, high availability, and data distribution across commodity servers.

### Claims it can support

- Bigtable does not provide a full relational data model; it gives clients dynamic control over data layout and format. **Location:** Introduction.
- A simple key-value pair model alone can be too limiting for application developers. **Location:** Related Work.
- Internet-scale storage required wide applicability, scalability, high performance, high availability, and operation across very large numbers of servers. **Location:** Abstract and Introduction.
- Bigtable uses a sparse, distributed, persistent, multidimensional sorted map and supports dynamic partitioning through tablets. **Location:** Data Model and implementation sections.

### Scope and limitation

Use Bigtable to support the motivation for distributed and wide-column data stores, not as a general history of all NoSQL databases. It is a Google system paper, so its production experience is valuable but not a neutral comparison of every database model. Pair it with Dynamo for key-value availability and consistency trade-offs and with a survey for the broader NoSQL taxonomy.

## Screened secondary source: HBase and Hypertable

- **Title:** HBase and Hypertable for Large Scale Distributed Storage Systems: A Performance Evaluation for Open Source BigTable Implementations
- **Authors:** Ankur Khetrapal and Vinay Ganesh
- **Year:** 2008 indicated by the file record; verify before final citation
- **Affiliation:** Department of Computer Science, Purdue University
- **Source type:** Technical/research paper; venue not identified in the accessible PDF
- **Study ID:** S010
- **Stable copy:** https://pubs.dbs.uni-leipzig.de/cloud/sites/cloud.pubs.dbs.uni-leipzig.de/files/Khetrapal2008HBaseandHypertableforlargescaledistributedstorage.pdf
- **User-discovered copy:** The Cloudfront PDF link supplied in the search record
- **Decision:** Candidate source; add to Source Screening and use cautiously

### What it supports

The paper explains how HBase and Hypertable implemented Bigtable-like storage using Hadoop or other distributed file systems. It identifies schema flexibility, data placement, caching, fault tolerance, scalability, and security as practical challenges in large distributed storage systems. Its experiments also illustrate that early open-source implementations could differ substantially in performance and reliability.

### What it cannot support

Do not use it as the main source for the history or definition of NoSQL. The accessible PDF does not clearly establish a peer-reviewed venue, and the evaluation uses early versions, small or single-node configurations, and implementation-specific results. Verify the bibliographic record before entering it as final evidence.

### Recommended use

If retained, use one concise point after Bigtable: Bigtable-inspired open-source systems such as HBase and Hypertable adapted the distributed wide-column approach, but their early implementations involved different architectural and performance trade-offs. Do not generalize the reported benchmark values to current HBase, Hypertable, or MongoDB performance.

## Selected primary source: Dynamo

- **Title:** Dynamo: Amazon’s Highly Available Key-value Store
- **Authors:** Giuseppe DeCandia, Deniz Hastorun, Madan Jampani, Gunavardhan Kakulapati, Avinash Lakshman, Alex Pilchin, Swaminathan Sivasubramanian, Peter Vosshall, and Werner Vogels
- **Year:** 2007
- **Venue:** ACM Symposium on Operating Systems Principles (SOSP ’07), pp. 205–220
- **Source type:** Conference paper
- **Study ID:** S011
- **Source:** https://www.allthingsdistributed.com/files/amazon-dynamo-sosp2007.pdf
- **Decision:** Candidate primary source; add to Source Screening before final evidence use

### What it supports

Dynamo directly supports the argument that many services need only primary-key reads and writes and therefore may not need the full querying and management functionality of an RDBMS. It also provides primary evidence for high availability, partition tolerance, horizontal scale-out, replication, eventual consistency, versioning, and application-assisted conflict resolution.

### Important evidence locations

- **Abstract and Introduction:** Amazon’s massive infrastructure, continuous component failures, high availability, and the consistency trade-off.
- **Section 2, Background:** Relational systems as inefficient for primary-key-only workloads; limitations of replication, scale-out, and partitioning; Dynamo’s simple key/value interface.
- **Section 2.1, System Assumptions and Requirements:** Simple key-based query model, no need for relational schema, weaker consistency when it improves availability.
- **Section 3.2, Distributed File Systems and Databases:** Strong consistency can limit scalability and availability; Dynamo continues reads and writes during network partitions.

### Scope and limitation

Use Dynamo as evidence about Amazon’s application-specific workload and its design trade-offs, not as proof that relational databases are generally unsuitable. The system was designed for a trusted internal environment and relatively small objects, with application-level conflict resolution. Record the exact PDF page when entering the final Evidence Matrix.

## Screened vendor source: MongoDB document database overview

- **Title:** What is a Document Database?
- **Author/publisher:** MongoDB
- **Source type:** Vendor educational article
- **Study ID:** S006
- **URL:** https://www.mongodb.com/resources/basics/databases/document-databases
- **Decision:** Useful for definitions and MongoDB context; not independent scholarly evidence

### What it supports

The article explains document databases, field–value documents, nested objects and arrays, JSON/BSON/XML formats, collections, flexible schemas, CRUD operations, indexing, replication, horizontal scaling, embedding, and references. It also provides a document-versus-relational comparison and identifies MongoDB as a document database using BSON.

### Limitation

Because MongoDB publishes the article, it may present benefits in a product-favourable way. Use it for terminology and a short transition into MongoDB, not for neutral claims about performance, market position, or the superiority of document databases.

## Screened conference source: Exploring the Merits of NoSQL

- **Title:** Exploring the Merits of NoSQL: A Study Based on MongoDB
- **Authors:** Benymol Jose and Sajimon Abraham
- **Year:** 2017
- **Venue:** 2017 International Conference on Networks & Advances in Computational Technologies (NetACT), pp. 266–271
- **Source type:** Conference paper
- **Study ID:** S007
- **DOI:** 10.1109/NETACT.2017.8076778
- **URL:** https://doi.org/10.1109/NETACT.2017.8076778
- **Decision:** Provisionally useful from the abstract

### What it supports

The abstract links structural, semi-structural, and unstructured data with limitations in conventional RDBMS scalability, flexibility, and processing. It connects modern frameworks with horizontal scaling and distributed processing, and identifies MongoDB as a document-based NoSQL database commonly using JSON data.

### Limitation

The IEEE full text was not accessible. Record only abstract-level evidence until the complete paper, methods, and results can be checked.

## Screened conference source: Performance Comparison of Document-Oriented NoSQL Databases

- **Title:** A Performance Comparison of Document-Oriented NoSQL Databases
- **Authors:** K. B. Sundhara Kumar, Srividya, and S. Mohanavalli
- **Year:** 2017
- **Venue:** 2017 International Conference on Computer, Communication and Signal Processing (ICCCSP)
- **Source type:** Conference paper
- **Study ID:** S008
- **DOI:** 10.1109/ICCCSP.2017.7944071
- **URL:** https://doi.org/10.1109/ICCCSP.2017.7944071
- **Decision:** Provisionally useful from the abstract

### What it supports

The abstract links data growth and varied formats with schema-less database requirements, presents NoSQL as a response to RDBMS limitations, and compares MongoDB and CouchDB as document-oriented NoSQL databases for streaming applications.

### Limitation

The IEEE full text was not accessible. Do not record benchmark values or conclusions about which system performs better until the complete experimental setup and results are available.

These sources should be screened separately if they are used in the subsection:

- DeCandia et al. (2007), *Dynamo: Amazon's Highly Available Key-value Store* — availability, fault tolerance, and consistency trade-offs.
- Cattell (2010/2011), *Scalable SQL and NoSQL Data Stores* — motivations and trade-offs across scalable SQL and NoSQL systems.
- A credible NoSQL survey — classification and common characteristics of key-value, document, wide-column, and graph stores.

## Tracker workflow

1. Keep S004 in Source Screening as a discovery or excluded industry source.
2. Create a new Study ID for every original source that is verified.
3. Add an Evidence ID only for a finding supported by the original source.
4. Record the exact page or section and a limitation.
5. Use the article's claims only after the original source has been checked.
