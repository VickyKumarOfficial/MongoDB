# Section 5.2 source evaluation

Section: 5.2, Embedding, referencing, validation, and indexing

## Purpose of this note

This file records screening, verification, claim support, and limitations for the sources organized in `Harshitha/key_findings/sec 5.2.md`. No Study IDs are assigned here. Add Evidence IDs in the shared Evidence Matrix only for manuscript claims verified against the original source.

## Sources screened

### Source 1 — Bansal, Sachdeva & Awasthi (2024), “Schema generation for document stores using workload-driven approach”

- **Source type:** Peer-reviewed journal article, *The Journal of Supercomputing*, vol. 80, pp. 4000–4048 (2024 issue; published online September 8, 2023).
- **DOI:** https://doi.org/10.1007/s11227-023-05613-5
- **Stable URL:** https://link.springer.com/article/10.1007/s11227-023-05613-5
- **Decision:** Selected, with abstract-level limitation.
- **Verification:** Publisher page checked for title, authors, publication dates, volume/pages, and abstract. Springer marks the full text as subscription content; detailed methods and result tables were not available in the reviewed page.
- **Can support:** At abstract level, that the proposed method uses a conceptual EER model, application queries, and anticipated data volume to generate a logical document schema; and that the authors report an e-commerce case study evaluated on several performance and storage dimensions.
- **Cannot establish from current access:** Detailed embedding/reference rules, experimental configuration, exact numerical comparisons, or threats to validity. Do not rely on the 5.1 file's earlier claim that full publisher text was reviewed; the currently checked Springer page exposes only a preview and abstract.
- **Use in the paper:** Introduce workload-driven schema generation relevant to relationship decisions. Use only abstract-level claims until the full text is obtained and checked.
- **Status:** Selected; full-text verification pending.

### Source 2 — Roy-Hubara, Sturm & Shoval (2023), “Designing NoSQL databases based on multiple requirement views”

- **Source type:** Peer-reviewed journal article, *Data & Knowledge Engineering*, vol. 145, article 102149 (May 2023).
- **DOI:** https://doi.org/10.1016/j.datak.2023.102149
- **Publisher URL:** https://www.sciencedirect.com/science/article/pii/S0169023X23000095
- **Full text reviewed:** https://personales.unican.es/crespoj/informacion/nosql/1-s2.0-S0169023X23000095-main.pdf
- **Decision:** Selected.
- **Verification:** Publisher metadata and abstract checked; full paper PDF reviewed, including §5.3 relationship mapping and §5.5 evaluation. The PDF is hosted by a university repository rather than the publisher.
- **Can support:** Documented design rules relating relationship cardinality and query frequency to embedding or referencing choices; the authors' design method using functional as well as data requirements; and its MongoDB evaluation against a reference-only baseline.
- **Cannot establish:** Universal performance superiority of embedding or referencing. Some one-to-many recommendations in §5.3 cite earlier studies; distinguish those cited results from this paper's own MongoDB experiment. The experiments involve two applications and small query sets.
- **Use in the paper:** Main academic source for describing how relationship cardinality and functional/query requirements can inform embedding and referencing. Report its own experiment only with its application, setup, and statistical limitations attached.
- **Status:** Selected; full text reviewed.

### Source 3 — MongoDB Manual, “Best Practices for Data Modeling in MongoDB”

- **Source type:** Current MongoDB vendor documentation, Database Manual 9.0.
- **Stable URL:** https://www.mongodb.com/docs/manual/data-modeling/best-practices/
- **Decision:** Selected for current MongoDB guidance.
- **Verification:** Current manual page opened and checked on October 20, 2026, including “Plan Your Schema Early and Iterate,” “Link Related Data,” “Duplicate Data,” “Enforce Data Consistency,” and atomicity discussion.
- **Can support:** MongoDB's documented recommendations and considerations for embedding versus referencing, duplication, growth, independent access, updates, consistency, and single-document atomicity.
- **Cannot establish:** Independent empirical performance claims or that one relationship pattern is best for all applications.
- **Use in the paper:** Attribute rules explicitly to MongoDB documentation; pair with Source 2 for independent research evidence.
- **Status:** Selected; current page checked October 20, 2026.

### Source 4 — MongoDB Manual, “Schema Validation”

- **Source type:** Current MongoDB vendor documentation, Database Manual 9.0.
- **Stable URL:** https://www.mongodb.com/docs/manual/core/schema-validation/
- **Decision:** Selected for current technical behavior.
- **Verification:** Current manual page opened and checked on October 20, 2026, including when validation is useful, when MongoDB checks rules, and how invalid writes are handled.
- **Can support:** The purpose and documented behavior of collection validation rules for field types and values; the role of validation levels; default rejection of writes that would create invalid documents; and the alternative warning action.
- **Cannot establish:** That validation alone guarantees application correctness, or that every application should enforce a fully strict schema.
- **Use in the paper:** Explain validation as an optional mechanism for imposing defined constraints within a flexible document model. Attribute implementation details to MongoDB.
- **Status:** Selected; current page checked October 20, 2026.

### Source 5 — MongoDB Manual, “Indexing Strategies”

- **Source type:** Current MongoDB vendor documentation, Database Manual 9.0.
- **Stable URL:** https://www.mongodb.com/docs/manual/applications/indexes/
- **Decision:** Selected for index-design guidance related to schema choices.
- **Verification:** Current manual page opened and checked on October 20, 2026; the page identifies itself as Database Manual 9.0.
- **Can support:** MongoDB's recommendations to base indexes on expected queries, read/write balance, memory, query frequency, and production-representative profiling; the documented ESR and selectivity guidance.
- **Cannot establish:** That indexes always improve overall workload performance or that one index configuration is universally suitable. Indexes have costs and must be evaluated against actual workloads.
- **Use in the paper:** Keep Section 5.2 focused on how query/access patterns inform index selection. Place detailed index types, mechanics, and broader index capabilities in Section 4.2.
- **Status:** Selected; current page checked October 20, 2026.

## Evidence synthesis and remaining needs

The peer-reviewed evidence in this set consists of one full-text study that directly discusses relationship mapping and one recent schema-generation study whose full text is not currently accessible through the publisher page. The MongoDB manuals provide current implementation guidance for relationship patterns, validation, and indexing, but are vendor sources and cannot serve as independent performance evidence.

Avoid universal statements such as “embedding is faster” or “referencing is better for large relationships.” Relationship choices depend on cardinality, query and update patterns, and the study's measurement conditions. The Roy-Hubara et al. paper also distinguishes its own limited MongoDB evaluation from recommendations it draws from earlier studies. Add more independent empirical comparisons if the final subsection makes broad quantitative or performance claims.

## Intended use

Use Source 2 for academic discussion of relationship cardinality, functional requirements, and the measured MongoDB example. Use Source 1 only for its accessible abstract until its full text is checked. Use Sources 3–5 for current MongoDB guidance on relationship modeling, validation, and query-driven indexes, explicitly labeling them as vendor documentation. Avoid duplicating the detailed indexing taxonomy already assigned to Section 4.2.

## Validation status

- Source 1: Bibliographic metadata and abstract checked; full text pending.
- Source 2: Bibliographic record, abstract, relevant full-text sections, experiment, and limitations checked.
- Source 3: Current Database Manual 9.0 page checked October 20, 2026.
- Source 4: Current Database Manual 9.0 page checked October 20, 2026.
- Source 5: Current Database Manual 9.0 page checked October 20, 2026.
