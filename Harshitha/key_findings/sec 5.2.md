# Section 5.2 — Embedding, referencing, validation, and indexing

## Source 1 — Schema generation for document stores using workload-driven approach

### Authors and publication

Neha Bansal, Shelly Sachdeva, and Lalit K. Awasthi. *The Journal of Supercomputing*, vol. 80, pp. 4000–4048 (2024; published online September 8, 2023). DOI: [10.1007/s11227-023-05613-5](https://doi.org/10.1007/s11227-023-05613-5).

### Source links

- [Springer article and abstract](https://link.springer.com/article/10.1007/s11227-023-05613-5)
- [DOI record](https://doi.org/10.1007/s11227-023-05613-5)

### Accessed

October 20, 2026. The publisher page provides the abstract; full text requires subscription or institutional access.

### Abstract — workload-driven schema generation

The authors propose a workload-driven method for generating logical schemas for document databases. It takes a conceptual EER schema, application queries, and anticipated data volume as inputs, then transforms them into a logical document-store model. The authors report an e-commerce case study and compare their method with conventional, optimized, and query-path-graph approaches across query performance, storage, aggregation-pipeline efficiency, read/write latency, collection performance, scalability, throughput, and latency.

## Source 2 — Designing NoSQL databases based on multiple requirement views

### Authors and publication

Noa Roy-Hubara, Arnon Sturm, and Peretz Shoval. *Data & Knowledge Engineering*, vol. 145, article 102149, May 2023. DOI: [10.1016/j.datak.2023.102149](https://doi.org/10.1016/j.datak.2023.102149).

### Source links

- [ScienceDirect article page](https://www.sciencedirect.com/science/article/pii/S0169023X23000095)
- [Full-text PDF copy](https://personales.unican.es/crespoj/informacion/nosql/1-s2.0-S0169023X23000095-main.pdf)
- [DOI record](https://doi.org/10.1016/j.datak.2023.102149)

### Accessed

October 20, 2026. The full paper was reviewed from the linked PDF copy.

### Abstract and §1 — functional requirements in document-database design

The paper presents a design method for document and graph databases that considers both data-related requirements and functional requirements: the information to store and what users need to do with it. Its empirical evaluation compares the resulting designs with designs that do not incorporate those functional requirements. The authors report better execution time and fewer database I/O operations in their tested applications.

### §5.3 — Transforming the adjusted class diagram to a document database schema

The paper maps classes to document collections or embeds them within documents. The choice between references and embedded documents is guided by the relationship type and cardinality. The authors explain that schema decisions should account for how the application queries related classes.

### §5.3.1 — Mapping one-to-one relationships

The authors base mapping rules on relationship cardinality. If either class may exist without the other, the embedding direction must preserve those instances; embedding in the wrong direction could omit entities with no related instance. Where both directions are possible, the authors use query frequency to guide which class to place inside the more frequently queried class.

### §5.3.2 — Mapping one-to-many relationships

The discussion distinguishes relationships with few related documents from those with many. It cites earlier experiments reporting better results for embedding some small one-to-many relationships and referencing larger ones. The paper notes that performance differences depend on whether reads or writes are measured, then presents its own rules using query frequency, relationship cardinality, and the entities’ other query uses.

### §5.3.3 — Mapping many-to-many relationships

For many-to-many relationships, the authors recommend reference relationships rather than embedding, referring to prior experiments in which reads and writes were reduced with references. This is a literature-based recommendation in the paper; it should not be presented as a universal benchmark result established by the paper's own experiment.

### §5.5 — Experimental evaluation of the document database

The MongoDB evaluation compares a baseline using reference relationships with a database designed by the proposed method. For the IMDb case, eight queries were run against each design. The paper reports fewer aggregation-pipeline stages and lower execution time for the method design; however, its reported statistical test for the total execution-time difference was not significant (p = 0.118). The authors also caution that the experiments used a small set of queries. Treat the reported gains as specific to the cases and query sets tested.

## Source 3 — MongoDB Manual: Best Practices for Data Modeling in MongoDB

### Publisher and source type

MongoDB, Inc.; current MongoDB Database Manual, version 9.0.

### Source link

- [Best Practices for Data Modeling in MongoDB](https://www.mongodb.com/docs/manual/data-modeling/best-practices/)

### Accessed

October 20, 2026.

### “Plan Your Schema Early and Iterate”

The manual recommends planning a schema early and revisiting it as application needs change. It notes that changing a schema remains possible, but large production schemas can be difficult to modify, so an initial design may be kept simple and optimized as needs become clear.

### “Link Related Data”

The manual describes embedding related data in one document and referencing related data in separate collections as two ways to represent relationships. It associates embedding with data that is commonly queried, updated, or archived together. It associates references with high-cardinality or independently existing child data, unbounded growth, write-heavy data updated at different times, and cases where duplication or document size is difficult to manage.

### “Duplicate Data”

The manual notes that duplicated data can let an application retrieve information about multiple entities in one query and may improve read performance. The design also needs to account for how often duplicated values change and how consistency will be maintained. Frequently updated duplicates may add workload and maintenance cost.

### “Enforce Data Consistency” and “Atomicity”

The manual explains that embedding related data can keep values together and allow atomic changes within one document. When references are used, applications generally need separate operations to retrieve and modify related records; multi-document transactions are available where atomicity across documents is required. The guidance describes MongoDB behavior and is not an independent comparison with other databases.

## Source 4 — MongoDB Manual: Schema Validation

### Publisher and source type

MongoDB, Inc.; current MongoDB Database Manual, version 9.0.

### Source link

- [Schema Validation](https://www.mongodb.com/docs/manual/core/schema-validation/)

### Accessed

October 20, 2026.

### “Schema Validation” and “When to Use Schema Validation”

The manual describes validation rules for allowed field types and value ranges. MongoDB collections can contain varying fields and data types by default; validation can be added after an application schema is established to prevent unintended structure changes and type errors. Rules may cover only selected fields when the application does not require every field to be constrained.

### “When MongoDB Checks Validation”

After validation rules are added, inserts must match them. The validation level determines how rules apply to updates and existing documents.

### “What Happens When a Document Fails Validation”

By default, MongoDB rejects an insert or update that would produce an invalid document. The validation action can instead be configured to allow the write and log a warning. These controls should be described with the validation level and action that apply.

## Source 5 — MongoDB Manual: Indexing Strategies

### Publisher and source type

MongoDB, Inc.; current MongoDB Database Manual, version 9.0.

### Source link

- [Indexing Strategies](https://www.mongodb.com/docs/manual/applications/indexes/)

### Accessed

October 20, 2026.

### “Indexing Strategies”

The manual says index choices depend on expected query types, the read/write ratio, and available memory. It recommends mapping queries and accessed fields before creating indexes, considering query frequency, and profiling alternative index configurations against production-representative data. The page notes that indexes have performance costs and should be reviewed as query needs change.

### “Use the ESR (Equality, Sort, Range) Guideline” and “Create Selective Indexes to Answer Queries Efficiently”

The manual links compound-index field order to equality, sort, and range operations, and recommends considering selectivity when designing indexes. It also directs readers to query-support and sort-specific index guidance. Detailed index types and behavior are covered in Section 4.2; here, the source supports the connection between schema access patterns and index selection.
