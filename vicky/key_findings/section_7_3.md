# Section 7.3 — Evidence gaps in current research

This file records the selected review's relevant findings for Section 7.3. The paper's structure and evidence locations are retained; the content is summarized for later synthesis.

## Paper 1

### Title

SQL and NoSQL Database Software Architecture Performance Analysis and Assessments—A Systematic Literature Review

### Study ID

S030

### Authors

Wisal Khan, Teerath Kumar, Cheng Zhang, Kislay Raj, Arunabha M. Roy, and Bin Luo

### Published

12 May 2023

### Journal

Big Data and Cognitive Computing, Volume 7, Issue 2, Article 97

### DOI and source links

- DOI: https://doi.org/10.3390/bdcc7020097
- Publisher full text: https://www.mdpi.com/2504-2289/7/2/97

### Source type

Open-access systematic literature review.

### Relevant content from the paper

#### Scope and research questions (§§1–2)

The review covers SQL and NoSQL architecture and performance, including MongoDB and relational databases, and discusses data portability and interoperability across cloud platforms. Its research questions address why NoSQL is used for large structured/unstructured data, differences between BASE- and ACID-oriented systems, and whether Database-as-a-Service supports data portability and interoperability across NoSQL databases.

#### Search and selection (§2)

The authors describe searching DBLP, IEEE Xplore, Google Scholar, ACM Digital Library, SpringerLink, Elsevier, and Wiley, with manual searching and backward snowballing. The paper reports searching about 13,000 records, then applying screening and inclusion criteria. Its counts are not easy to reconcile from the narrative: it refers to 142 studies analyzed, 142 full-text studies considered, and 89 selected through snowballing at different points. Check the selection-flow figure and exact final corpus before citing a study count.

#### Review synthesis and comparison themes (§3)

The review compares database architectures and examples of SQL and NoSQL systems across scale, performance, availability, consistency, and sharding. It does not find that NoSQL universally replaces relational systems. The authors frame system choice around organizational and workload requirements, contrasting transaction-oriented SQL use with NoSQL's fit for large or diverse datasets. These are broad review-level themes, not new controlled results from the review authors.

#### Cloud portability and interoperability gap (§4; RQ3)

The review identifies the transfer and portability of data between cloud service providers and database services as an ongoing challenge. It attributes this in part to differences among data models, storage formats, APIs, interfaces, and cloud service layers. A unified DBaaS approach or standard interfaces could reduce the need for system-specific migration and re-engineering, but the reviewed approaches and standards do not resolve interoperability across all providers and database models.

The paper also discusses security and privacy in cloud data movement as concerns. The review's interoperability gap is especially relevant to MongoDB when considering migration between document stores or between cloud providers, but its evidence is broader than MongoDB alone.

#### Conclusions and limits (§5)

The review presents portability/interoperability as an unresolved research area and argues for better ways to move and manage data across differing SQL and NoSQL platforms. It is a secondary synthesis, not a test of current cloud services or a MongoDB migration experiment.

### Main relevance to Section 7.3

S030 may support a broad gap around limited portability/interoperability evidence and the need for more consistent cross-platform evaluation. Because it covers a wide literature, includes older studies, and reports selection numbers unclearly, use only specific gap statements that can be verified in the paper. Do not present its review as a MongoDB-only evidence map.
