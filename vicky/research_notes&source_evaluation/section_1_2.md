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
- **Decision:** Selected as a secondary overview for Section 1.2

### Why it is useful

The paper gives a compact explanation of why NoSQL emerged: web-scale applications, big-data growth, dynamic or unstructured data, and distributed-computing requirements. It also summarizes the major NoSQL model families and the emphasis on horizontal scaling, availability, fault tolerance, and fast reads and writes. These points can support the short transition from relational databases to NoSQL.

### How to use it

- Use it for a brief overview and transition paragraph, not as the sole authority for NoSQL history.
- Record three findings in the Evidence Matrix: motivation for NoSQL (Evidence 4), flexible/multiple data models (Evidence 5), and distributed scalability and availability (Evidence 6).
- Cite Section 5.2 in the paper notes. Confirm the PDF page number before final manuscript submission.

### Limitations and source pairing

The discussion is broad and does not provide detailed primary experiments or a rigorous comparison of NoSQL systems. Pair it with Chang et al. (Bigtable), DeCandia et al. (Dynamo), Cattell, or a credible NoSQL survey when making specific technical or historical claims. Avoid repeating the paper’s phrase “preferred choice” as a general fact without stronger evidence.

## Better primary-source leads for Section 1.2

These sources should be screened separately if they are used in the subsection:

- Chang et al. (2006), *Bigtable: A Distributed Storage System for Structured Data* — distributed storage at web scale.
- DeCandia et al. (2007), *Dynamo: Amazon's Highly Available Key-value Store* — availability, fault tolerance, and consistency trade-offs.
- Cattell (2010/2011), *Scalable SQL and NoSQL Data Stores* — motivations and trade-offs across scalable SQL and NoSQL systems.
- A credible NoSQL survey — classification and common characteristics of key-value, document, wide-column, and graph stores.

## Tracker workflow

1. Keep S004 in Source Screening as a discovery or excluded industry source.
2. Create a new Study ID for every original source that is verified.
3. Add an Evidence ID only for a finding supported by the original source.
4. Record the exact page or section and a limitation.
5. Use the article's claims only after the original source has been checked.
