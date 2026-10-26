# Section 7.3 source evaluation

Section: 7.3, Evidence gaps in current research

This note records source verification, relevance, and limits for `vicky/key_findings/section_7_3.md`. Study IDs match that file. The source is a secondary review and should be triangulated with the primary studies already collected by the team. No tracker or Google Doc was changed.

## Supporting systematic review: Khan et al. (2023)

- **Title:** SQL and NoSQL Database Software Architecture Performance Analysis and Assessments—A Systematic Literature Review
- **Authors:** Wisal Khan, Teerath Kumar, Cheng Zhang, Kislay Raj, Arunabha M. Roy, and Bin Luo
- **Year / venue:** 2023, *Big Data and Cognitive Computing*, 7(2), Article 97; published 12 May 2023
- **Study ID:** S030
- **DOI / publisher full text:** https://doi.org/10.3390/bdcc7020097 ; https://www.mdpi.com/2504-2289/7/2/97
- **Source type:** Open-access systematic literature review
- **Access checked:** User-opened MDPI article; publisher metadata and article text/indexed content were reviewed, including scope, search narrative, comparison themes, portability/interoperability discussion, conclusions, and appendix references.
- **Decision:** Supporting broad review for cloud portability/interoperability themes; use selectively because the review has reporting ambiguities and covers a wide topic range.

### Claims it can support

- The review addresses SQL/NoSQL architecture and performance, especially Oracle RDBMS and MongoDB, alongside cloud DBaaS data portability and interoperability. **Locations:** §§1–2.
- It synthesizes comparison dimensions including scale, performance, availability, consistency, and sharding, and does not conclude that NoSQL universally replaces relational systems. **Locations:** §3 and comparison tables; §5.
- It identifies data portability and interoperability across cloud service providers and database models as a continuing difficulty, connected to differing storage models, APIs, interfaces, and service implementations. **Locations:** §4 discussion of RQ3; §5.
- It can support the need for more consistent cross-platform evaluation and migration mechanisms, but not a MongoDB-specific claim of measured migration failure.

### Scope, quality checks, and limitations

The review describes searches across DBLP, IEEE Xplore, Google Scholar, ACM Digital Library, SpringerLink, Elsevier, and Wiley, plus manual searching and snowballing. The paper reports about 13,000 search records, later screening stages, 142 studies analyzed/considered, and 89 selected through snowballing in different parts of its method narrative. These numbers are not readily reconcilable without checking the selection-flow figure and the authors' precise definition of the final set. Do not cite a final corpus count until that has been checked against the full methods and figure.

The review covers a broad and heterogeneous literature. It combines secondary synthesis with claims drawn from individual earlier comparisons, and its technical descriptions include older systems and studies. Specific performance or product-feature statements should be traced to their primary sources and checked against current documentation. The article's broad research-gap claims are most useful as supporting context, not as the sole basis for declaring a MongoDB-specific gap.

### Recommended use

Use S030 narrowly for the general research problem of portability/interoperability across cloud providers and differing SQL/NoSQL models. Report the ambiguity in sample counts during evidence appraisal, avoid repeating unsupported product-level generalizations, and triangulate with primary studies in the team's evidence set.
