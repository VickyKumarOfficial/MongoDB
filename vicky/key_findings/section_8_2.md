# Section 8.2 — Distributed consistency, security, and privacy

This file captures material relevant to Section 8.2 from the source specified for this subsection. Bibliographic information and source section labels are retained. Findings are summarized in my own words for later writing; consult the linked paper for original wording and full context.

## Paper 1

### Title

Security Analysis of MongoDB Queryable Encryption

### Study ID

S033

### Authors

Zichen Gui, Kenneth G. Paterson, and Tianxin Tang

### Published

2023

### Conference

32nd USENIX Security Symposium, pages 7445–7462

### Source links

- USENIX conference page: https://www.usenix.org/conference/usenixsecurity23/presentation/gui
- Full-text PDF: https://www.usenix.org/system/files/usenixsecurity23-gui_1.pdf

### Source type

Peer-reviewed, open-access security analysis by researchers at ETH Zurich.

### Relevant content from the paper

#### Problem and threat model (§§1, 3–4)

The paper studies Queryable Encryption (QE), which allows selected equality searches on encrypted MongoDB fields. It analyzes a snapshot adversary that can access a stored server snapshot, including operational log information captured in that snapshot, and assumes access to an auxiliary dataset with a distribution similar to the target data. The analyzed attacks do not require access to server logs that are not part of the snapshot.

#### Privacy findings (§§5–7)

The authors show that statistical information in operational logs can be used in inference attacks to recover information about queries and encrypted data under the paper's stated assumptions. They use the findings to examine how an encrypted-query design can interact with existing database logging and storage behavior, creating leakage channels beyond the encryption scheme considered in isolation.

#### Implications for future work (§7)

The study motivates evaluating encrypted query features together with database components such as logs, metadata, and operational behavior. Security analysis should state what an adversary can observe and what auxiliary information is available.

### Main relevance to Section 8.2

S033 supports a focused future-research discussion of leakage analysis and privacy evaluation for MongoDB Queryable Encryption. The paper does not assess distributed consistency or transactions, and its findings should not be generalized beyond its QE design, snapshot threat model, and auxiliary-data assumptions. Check later product versions and mitigations before making present-day product claims.
