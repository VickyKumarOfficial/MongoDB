# Section 1.1 Source Evaluation: “Importance of Database Systems”

## Decision on the Scribd document

**Do not cite this document in the review paper.**

The [Scribd page](https://www.scribd.com/document/419652270/KKK) presents a 26-page upload titled *Importance of Database Systems*, but the document itself is headed **“DATABASE MANAGEMENT SYSTEM 15CS53 — MODULE 1.”** Scribd identifies only the uploader, **Vignesh Lio**; it does not establish the document’s author, institution, publication year, publisher, bibliography, or peer-review status. Scribd also labels the displayed title and description as AI-enhanced.

The material resembles course notes and includes the shorthand “E&N,” apparently pointing to another source, but the upload does not provide enough provenance to verify or cite it responsibly. It may be used privately to discover concepts such as data independence, concurrency, security, integrity, backup, and recovery. Any claim taken from it must be traced to and cited from an identifiable scholarly or authoritative source.

## Why the exact search produced weak results

“Importance of Database Systems” is a broad paragraph theme, not a standard research-paper title. Scholarly work usually discusses a specific function, architecture, historical transition, or problem. Therefore, sources titled “architecture,” “principles,” “concepts,” or “evolution” may be more useful than a webpage whose title exactly matches the phrase.

Search by the claims that the paragraph needs to support:

- `purpose of database management systems data independence`
- `database systems concurrency recovery integrity`
- `database management systems modern computing infrastructure`
- `evolution hierarchical network relational database models`
- `relational database evolution distributed data management`
- `scalable SQL and NoSQL data stores`
- `NoSQL emergence scalability availability flexible schema`

Use Google Scholar for discovery, then open and record the publisher, conference, journal, university, or author-hosted version. Do not cite the Google Scholar results page.

## Recommended higher-trust sources

| Source | Suitable use in Section 1.1 | Quality and caution |
|---|---|---|
| Hellerstein, Stonebraker, and Hamilton (2007), [*Architecture of a Database System*](https://db.cs.berkeley.edu/papers/fntdb07-architecture.pdf), DOI: 10.1561/1900000002 | Establish that DBMSs are critical infrastructure, support many application domains, and pioneered techniques for scalability and reliability | Scholarly monograph by leading database researchers; strong source for the importance and role of DBMSs |
| Codd (1970), [*A Relational Model of Data for Large Shared Data Banks*](https://research.ibm.com/publications/a-relational-model-of-data-for-large-shared-data-banks), DOI: 10.1145/362384.362685 | Explain the historical move toward the relational model, data independence, and management of redundancy and consistency | Landmark primary paper in *Communications of the ACM* |
| Chang et al. (2006), [*Bigtable: A Distributed Storage System for Structured Data*](https://www.usenix.org/conference/osdi-06/bigtable-distributed-storage-system-structured-data) | Show how large-scale web applications created demands for flexible, distributed storage across many machines | Peer-reviewed systems paper in OSDI; use as an example of changing requirements, not as a direct source about MongoDB |
| DeCandia et al. (2007), [*Dynamo: Amazon’s Highly Available Key-value Store*](https://www.cs.princeton.edu/courses/archive/fall18/cos418/papers/dynamo.pdf) | Show why very large services emphasized availability, fault tolerance, scalability, and explicit consistency trade-offs | Primary industry research paper published at ACM SOSP; the linked copy is university-hosted |
| Cattell (2010/2011), [*Scalable SQL and NoSQL Data Stores*](https://sigmodrecord.org/publications/sigmodRecord/1012/pdfs/04.surveys.cattell.pdf), DOI: 10.1145/1978915.1978919 | Bridge from relational DBMSs to scalable SQL and NoSQL systems; compare motivations and trade-offs | Scholarly survey in *ACM SIGMOD Record*; useful for synthesis, while specific system claims should be checked against primary papers |

An authoritative textbook may support basic definitions and standard DBMS responsibilities: Silberschatz, Korth, and Sudarshan, [*Database System Concepts*, 7th edition](https://www.db-book.com/). Prefer the published book or official chapter material over anonymous lecture-note uploads.

## Suggested use in the tracker

1. Record the Scribd search in **Search Log**, because it documents what was searched.
2. If the Scribd item is entered in **Source Screening**, mark it **Excluded** with the reason: `Unverifiable authorship/venue; course-note upload; not a scholarly source`.
3. Add each credible source separately to **Source Screening** and verify its bibliographic details.
4. Create an **Evidence Matrix** row only after reading the relevant part of a selected source and recording its exact page, section, table, or figure.
5. Do not write a broad claim such as “databases are important” from one source. Combine evidence about their roles—data abstraction, reliable multi-user access, integrity, recovery, and support for modern applications—while preserving each source’s context.

## Practical conclusion

The Google Scholar results on introductions, principles, architectures, and concepts were not failed results; they were closer to scholarly literature than the exact-title webpages found through ordinary Google. Evaluate those papers by relevance and credibility rather than by whether their titles repeat the subsection phrase.
