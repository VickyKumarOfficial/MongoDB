# Section 1.1 source evaluation

Section: 1.1, Background and evolution of database systems

## Purpose of this note

This file records why sources were selected or excluded, what each source can support, and what still needs verification. The Evidence Matrix should contain only verified findings from selected sources.

## Excluded source: Scribd course material

- **Title shown:** Importance of Database Systems / DATABASE MANAGEMENT SYSTEM 15CS53 — MODULE 1
- **Platform:** Scribd
- **Uploader:** Vignesh Lio
- **Study ID:** S002
- **Decision:** Excluded
- **Reason:** The upload does not establish an identifiable author, institution, publication year, publisher, bibliography, or peer-review status. It appears to be course material.
- **Permitted use:** Private reading only. Use it to identify concepts, then trace every claim to a verifiable scholarly or authoritative source.

## Selected source: Architecture of a Database System

- **Authors:** Joseph M. Hellerstein, Michael Stonebraker, and James Hamilton
- **Year:** 2007
- **Venue:** Foundations and Trends in Databases
- **Source type:** Review paper
- **DOI:** 10.1561/1900000002
- **URL:** https://dsf.berkeley.edu/papers/fntdb07-architecture.pdf
- **Study ID:** S001
- **Decision:** Selected
- **Use:** Establish the role of DBMSs, their architectural responsibilities, and their contribution to scalability and reliability.
- **Evidence recorded:** E001–E002
- **Limitation:** Broad architectural coverage from 2007; not specific to MongoDB.

## Selected source: A Relational Model of Data for Large Shared Data Banks

- **Author:** E. F. Codd
- **Year:** 1970
- **Venue:** Communications of the ACM
- **Source type:** Journal article
- **DOI:** 10.1145/362384.362685
- **URL:** https://research.ibm.com/publications/a-relational-model-of-data-for-large-shared-data-banks
- **Study ID:** S003
- **Decision:** Selected
- **Use:** Explain the relational model, data independence, redundancy, and consistency in the historical development of database systems.
- **Evidence recorded:** E003
- **Limitation:** Foundational historical source; it does not cover NoSQL or modern distributed systems.

## Search guidance

The phrase "importance of database systems" is broad and often returns lecture notes or webpages. Search by the claim needed for the paragraph instead:

- `database management systems modern computing infrastructure`
- `database systems scalability reliability architecture`
- `purpose of database management systems data independence`
- `evolution hierarchical network relational database models`

Use Google or Google Scholar for discovery, then verify the publisher, venue, author, DOI, and original text before selecting a source.

## Tracker workflow

1. Record each search variation in Search Log as a Q ID.
2. Give every seriously considered source an S ID in Source Screening, including excluded sources.
3. Add an E ID only for a useful finding from a selected source.
4. Record the exact page or section for every E ID.
5. Mark the finding as verified only after checking the original source.
