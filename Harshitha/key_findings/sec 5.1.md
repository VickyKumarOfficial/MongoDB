# Section 5.1 — Document modelling and schema-design choices

## Source 1 — SRank: Guiding schema selection in NoSQL document stores

### Authors and publication

Shelly Sachdeva, Neha Bansal, and Hardik Bansal. *Data & Knowledge Engineering*, vol. 154, article 102360, November 2024. DOI: [10.1016/j.datak.2024.102360](https://doi.org/10.1016/j.datak.2024.102360).

### Source link

- [ScienceDirect article record and abstract](https://www.sciencedirect.com/science/article/abs/pii/S0169023X24000843)

### Accessed

October 20, 2026. The article record and abstract were accessible; full text was not reviewed.

### Abstract — schema selection in document stores

The paper describes schema flexibility as allowing similar information to be organized in different ways. Selecting among these schema alternatives can affect performance, redundancy, the effort needed to navigate and access data, and maintainability. The authors propose SRank, which takes an entity–relationship model and workload queries, evaluates alternative schemas, and ranks them. They report a Hotel Reservation System case study and evaluate the alternatives using query response time, storage efficiency, scalability, throughput, and latency. These details are available here from the abstract; the full article is needed for the evaluation method and results.

## Source 2 — Schema generation for document stores using workload-driven approach

### Authors and publication

Neha Bansal, Shelly Sachdeva, and Lalit Kumar Awasthi. *The Journal of Supercomputing*, vol. 80, no. 3, pp. 4000–4048 (2024; first published online in 2023). DOI: [10.1007/s11227-023-05613-5](https://doi.org/10.1007/s11227-023-05613-5).

### Source links

- [Springer article](https://link.springer.com/article/10.1007/s11227-023-05613-5)
- [DOI record](https://doi.org/10.1007/s11227-023-05613-5)

### Accessed

October 20, 2026.

### Abstract — workload-driven logical schema design

The authors propose a workload-driven method for designing logical schemas for document databases. Its inputs include an enhanced entity–relationship model, application queries, and anticipated data volume. The method transforms the model and workload into a logical document schema. The authors evaluate it in an e-commerce case study and report comparisons involving query performance, storage, aggregation-pipeline efficiency, read/write latency, collection performance, scalability, throughput, and latency.

### §1 — Introduction

The introduction frames document-store schema design as a choice among possible data structures. Since the same information can be organized in different ways, relying on general rules of thumb may fail to produce a suitable schema. The authors motivate using application access patterns and anticipated data volume when mapping a conceptual model to a document database.

### §3 — Workload-driven schema generation

The proposed process converts application queries into query graphs, uses the queries and anticipated data volume to assign labels to elements in a schema graph, and transforms the conceptual model into a logical schema for MongoDB. The method is intended to use both the application model and its expected workload during schema generation.

### §4 — Experimental evaluation

The e-commerce evaluation compares the proposed method with conventional, optimized, and Query Path Graph approaches. The paper reports that the proposed method performs better across several measured aspects in the tested case. The findings apply to the paper’s workloads, data, and experimental setup.

## Source 3 — Automated database design for document stores with multicriteria optimization

### Authors and publication

Moditha Hewasinghage, Sergi Nadal, Alberto Abelló, and Esteban Zimányi. *Knowledge and Information Systems*, vol. 65, pp. 3045–3078, published March 11, 2023. DOI: [10.1007/s10115-023-01828-3](https://doi.org/10.1007/s10115-023-01828-3).

### Source links

- [Springer full text](https://link.springer.com/article/10.1007/s10115-023-01828-3)
- [DOI record](https://doi.org/10.1007/s10115-023-01828-3)

### Accessed

October 20, 2026.

### Abstract — multicriteria design choices

The authors describe document-store design as having many possible arrangements, with choices that can affect query performance, storage use, and document complexity. They propose a workload-driven multicriteria optimization method to generate and assess candidate designs. The method compares alternatives using a weighted objective rather than query cost alone.

### §1 — Introduction

The introduction explains that flexible document structures expand the number of possible designs, making manual selection difficult. The authors report that, in a small MongoDB example considered in their study, database experts often did not identify the best-performing schema alternative. The example is used to illustrate the difficulty of schema selection, not to establish a general rate of design error.

### §3 — Overview of the design method

The method takes an entity–relationship model, a query workload with query frequencies, and weights for the design objectives. Its objective functions cover query performance, storage size, collection heterogeneity, and document depth. A search procedure generates and evaluates candidate designs according to the supplied criteria and user priorities.

### §6.1 — Experimental comparison

The MongoDB experiments compare DocDesign 2.0 with a query-cost-driven design approach using an auction workload. The authors report that the relative results changed with document size and workload conditions. In their larger-document test, the proposed approach had better average performance and lower storage use than the comparison designs. These are results for the reported benchmark and configurations.

### §6.3 — Threats to validity

The authors identify possible bias in how design quality is assessed, state that the method returns a near-optimal design whose distance from the global optimum is unknown, and note that synthetic data are used in some scalability tests. These limits qualify the evaluation results.

## Source 4 — MongoDB Manual: Identify Application Workload

### Publisher and source type

MongoDB, Inc.; current MongoDB Database Manual, version 9.0.

### Source link

- [Identify Application Workload](https://www.mongodb.com/docs/manual/data-modeling/schema-design-process/identify-workload/)

### Accessed

October 20, 2026.

### “Identify Application Workload”

The manual places workload identification at the beginning of its schema-design process. It recommends identifying the operations an application runs frequently and considering both current and possible future scenarios. To identify application data needs, it points to users’ information needs, the business domain, application logs, and frequently run queries.

### “Create a workload table with your application's queries”

The manual suggests recording each user action, whether it triggers a read or write, the information or fields involved, query frequency, and priority. It identifies this workload table as an input for deciding which operations need optimization. Mapping schema relationships follows workload identification in the documented process.
