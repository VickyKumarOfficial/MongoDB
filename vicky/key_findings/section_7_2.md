# Section 7.2 — Technical, operational, and security challenges

This file records material relevant to Section 7.2 from the selected source. Bibliographic information and source section labels are retained; findings are summarized rather than copied at length.

## Paper 1

### Title

A systematic literature review of authorization and access control requirements and current state of the art for different database models

### Study ID

S029

### Authors

Aya Khaled Youssef Sayed Mohamed, Dagmar Auer, Daniel Hofer, and Josef Küng

### Published

Online 9 October 2023; Volume 20, Issue 1 (2024)

### Journal

International Journal of Web Information Systems, Volume 20, Issue 1, pages 1–23

### DOI and source links

- DOI: https://doi.org/10.1108/IJWIS-04-2023-0072
- Emerald full text: https://www.emerald.com/ijwis/article/20/1/1/1232858/A-systematic-literature-review-of-authorization

### Source type

Open-access systematic literature review; published under CC BY 4.0. The review covers relational, key-value, column-oriented, document, and graph database models.

### Relevant content from the paper

#### Purpose and research questions (§§1–2)

The review studies authorization and access control across database models rather than comparing database products by performance. Its questions ask what prior security reviews have found, what general requirements apply to fine-grained dynamic authorization, and whether the models meet those requirements.

The review identifies five requirements: varying/fine-grained granularity; content-based authorization; context-based authorization; custom authorization; and separation of concerns, including external or policy-based enforcement. It searches literature for 2010–2023 across Google Scholar, Web of Science, IEEE Xplore, ACM Digital Library, and SpringerLink, then supplements this with references and product information.

#### Document databases and MongoDB (§8)

The authors describe document systems as supporting role-based access control (RBAC). For MongoDB, they report built-in and user-defined roles that grant actions on resources such as a database, collection, set of collections, or cluster. This is an important qualification: the paper does not claim that MongoDB lacks access control.

The review distinguishes ordinary product roles from more advanced research proposals. It discusses studies that extended MongoDB-related authorization toward document-level purpose-based policies and field-level content/context rules, as well as approaches using XACML, SQL++ query rewriting, or a proxy to enforce fine-grained permissions. These are separate research mechanisms, not necessarily built-in MongoDB features.

#### Findings and remaining limitations (§§8.3, 10–11)

The authors find that document databases have received substantial research attention among NoSQL models, but that currently available approaches still have limitations. They characterize product support as predominantly coarse-grained RBAC and note gaps in fine-grained, content-based, and context-based authorization. Proposals may be specific to one datastore, require additional implementation, or have limited evidence of practical deployment. The review also identifies lack of a general policy language/framework across NoSQL models as a continuing problem.

These are the review authors' synthesis of the products and research they examined. Because product capabilities evolve, they should not be treated as a complete description of current MongoDB security controls. Check the current MongoDB manual before stating what the product supports today.

### Main relevance to Section 7.2

S029 supports a careful security-challenge discussion: MongoDB has role-based controls, while the broader challenge is meeting fine-grained, dynamic authorization requirements consistently and portably across NoSQL systems. Distinguish current product features from research proposals, and avoid suggesting that the review shows MongoDB to be insecure in general.
