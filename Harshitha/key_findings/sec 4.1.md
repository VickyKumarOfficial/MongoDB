# Section 4.1 — Architecture, storage, and query processing

## Paper 1

### Title

First Past the Post: Evaluating Query Optimization in MongoDB

### Authors

Dawei Tao, Enqi Liu, Sidath Randeni Kadupitige, Michael Cahill, Alan Fekete, and Uwe Röhm

### Published

2024. Accepted for the 35th Australasian Database Conference (ADC 2024). The copy used for these notes is the arXiv preprint, arXiv:2409.16544.

### Source type

Peer-reviewed database conference paper; arXiv preprint copy.

### Source links

- arXiv record: https://arxiv.org/abs/2409.16544
- PDF: https://arxiv.org/pdf/2409.16544
- ADC 2024 accepted-paper listing: https://adc-conference.github.io/2024/program/accepted-papers

### DOI

No DOI recorded in the arXiv record checked. Confirm the final proceedings record before adding a DOI to the bibliography.

## Detailed source content

The explanatory passages below are paraphrases checked against the paper. A separate section later in this file retains the relevant paper passages for future reference; those passages are transcribed from the PDF with page and section locators. The paper text and the interpretation notes are kept distinct.

### Section 2.1 — Query Optimization Architecture

**Location:** PDF p. 1.

This subsection explains declarative querying: a user specifies the information needed, and the DBMS determines how to retrieve it. One declarative query can have multiple correct execution plans, with performance depending on physical structures such as indexes. The optimizer’s role is to find a correct plan that runs efficiently. The authors describe cost-based optimization as the dominant general DBMS approach: generate candidate plans, estimate their costs, then select the candidate with the lowest estimated cost. This is general database background; MongoDB’s approach is described later in Sections 2.8–2.9.

### Section 2.6 — Document Data Model

**Location:** PDF p. 2.

The authors describe MongoDB as a document-oriented DBMS. A database contains collections of documents, and documents need not all follow a schema fixed in advance. Fields can vary, allowing documents to represent hierarchical relationships and arrays. The subsection identifies database, collection, document, and cursor as key data-model components. This is brief context for the paper’s discussion of the query processor, not a full treatment of MongoDB’s data model.

### Section 2.7 — MongoDB Query Model

**Location:** PDF pp. 2–3; Figure 1, “MongoDB query processing workflow,” appears on PDF p. 3.

At the storage/query interface, MongoDB uses BSON documents; the paper describes BSON as extending JSON with additional data types and efficient encoding/decoding. The authors note that MongoDB supports queries, secondary B+-tree indexes, and aggregations over unstructured, semi-structured, and structured data. They describe `find()` in terms of filtering, projection, sorting, and limiting, and compare the filter/projection operations at a high level with SQL `WHERE` and `SELECT`. The query is represented in BSON, with operators expressed as fields in the query document.

The figure is relevant as a visual overview of query processing. Its presence should not be mistaken for a detailed diagram of the full MongoDB server or WiredTiger storage internals.

### Section 2.8 — Execution Plan Generation and Caching

**Location:** PDF pp. 3–4; includes Figure 2, “Logical flow of MongoDB query optimizer,” and Algorithm 1.

The authors trace how a query is submitted, parsed, and optimized before storage-engine interaction. They say this description is based mainly on interviews with MongoDB developers and examination of MongoDB source code.

The workflow is described in layers. Clients connect using MongoDB Wire Protocol, which the paper characterizes as socket-based and request-response. At the executor layer, queries arrive as operation contexts. Some operations, such as inserts in the paper’s example, do not require query optimization and interact directly with the storage engine. Queries that do require optimization are normalized into canonical queries, or query shapes, with predicate values ignored for cache identity; the actual plan generation and evaluation still use the concrete query values.

For a canonical query, the query-solution component can produce multiple execution plans. Each plan is a tree of query stages; its leaves obtain data through a collection or an index. Available indexes can result in alternative plans. The paper also notes alternative plans when stages can be reordered or a stage has multiple implementations, giving `$or` queries and `$lookup` joins as examples. FPTP evaluates the candidate plans, the plan with the best score is executed to completion, and the plan may be cached for subsequent queries with the same shape. The paper reports a default cache-reuse condition in its studied implementation and says its own experiments disabled the plan cache to focus on plan evaluation.

Algorithm 1 describes stopping the trial race when a work limit is reached, enough results have been produced, or a candidate has completed. The algorithm and parameter values are specific to the MongoDB implementation/version examined by the authors; do not present them as current defaults without verification.

### Section 2.9 — MongoDB’s FPTP Query Optimizer

**Location:** PDF p. 4; Table 1 lists plan-scoring metrics.

FPTP means “first past the post.” The paper first gives a simplified explanation that candidate plans are run in a race and the winning plan continues to completion. It then explains the trial more precisely: candidate plans are advanced in round-robin order, one logical work unit at a time. A work unit can involve examining a document and checking predicates. The optimizer collects execution metrics during this process and stops the race when the limits in Algorithm 1 are reached.

Each candidate receives a score. The paper’s Table 1 lists a base score, productivity (query results divided by work units), small tie-break bonuses related to fetches, blocking sorts, and index intersection, and an end-of-file bonus when a plan has returned all possible documents. The plan with the highest score is selected. Preserve the authors’ distinction: the approach evaluates trial execution progress rather than estimating a conventional cost for every complete plan.

### Sections 3.1–3.2 — Experimental setup needed to interpret the findings

**Location:** PDF pp. 5–6.

The experiments use MongoDB 7.0.1 on a single Amazon EC2 `m6i.large` instance with 16 GB RAM and EBS gp3 storage. The client runs on the same instance as the server. The query client uses `cursor.explain()` with `allPlansExecution` to inspect candidate plans and statistics. The main test collection contains 100,000 documents with two integer fields, A and B; the reported base data uses uniform distributions without repeated values. The query workload is simple conjunctive filtering with range predicates. The authors explicitly say more complex aggregation, disjunction, and cross-collection lookup queries are not evaluated in this study.

### Section 4.1 — Querying Indexed Collections

**Location:** PDF p. 7.

In the first experiment, both queried attributes (A and B) have indexes, and the query applies conjunctive filters. The authors consider three reasonable plans: `IXSCAN_A`, `IXSCAN_B`, and `COLLSCAN`. MongoDB 7.0.1 chooses between the two index scans in a way that generally follows which predicate is more selective. However, the optimizer does not choose `COLLSCAN` in this experiment, including cases where the authors’ comparison identifies a collection scan as faster.

For this particular setup, the paper reports optimizer accuracy just under 34%; the average impact factor of the chosen plans is 1.7, which the authors describe as the chosen plan being about 70% slower on average than the optimal plan. Some chosen plans are more than three times slower than a collection scan. These are experiment-specific results, not general MongoDB performance guarantees.

### Section 5 — Why does MongoDB’s FPTP Optimizer Avoid Collection Scans?

**Location:** PDF pp. 9–11.

The authors inspect the MongoDB 7.0.1 query-planner source code to explain the Section 4 results. They report that when a matching index is available, a collection-scan plan is not included among candidates unless the scan is explicitly requested or otherwise required. Their modified experimental version adds `COLLSCAN` as a candidate; they then repeat tests and discuss the effects. Treat this as the authors’ analysis of the studied source-code version, rather than a statement about all later releases.

### Short source excerpt

> “The query optimizer asks each plan for the next document” (Section 2.9).

## Collected paper text for future reference

These passages preserve the relevant source wording transcribed from the PDF. Page breaks, line-wrap hyphenation, and obvious PDF extraction artifacts have been normalized; wording and claims have otherwise been checked against the paper. The notes above are interpretation and scope guidance; the passages below are the paper text.

### Section 2.1 — Query Optimization Architecture (PDF p. 1)

> A vital factor in the spread of relational database technology was the support for declarative queries, in which a user expresses a query indicating what information is needed and the system then discovers how to execute the query, that is, what steps to take to retrieve that information from what is stored [2]. Declarative queries have remained important also with other data models, such as object and document data. In general, a given query will have many execution plans (the details will depend on physical structures such as indexes), and these plans will differ greatly in performance. For declarative queries to be workable, the database management system must be able to optimize, that is, find an execution approach which is not only correct in retrieving the specified information, but also runs rapidly.
>
> Although some early commercial systems used pure heuristics to choose the execution plan for a submitted query, the dominant approach is cost-based optimization, invented by Selinger and colleagues for System R [3]. The essential work of a cost-based optimizer is (i) generate a variety of candidates, which are execution plans each of which would calculate the correct results for the given query, (ii) estimate the cost each candidate plan will incur when it runs, and (iii) choose to actually execute the plan, among those considered, whose estimated cost is lowest. Cost-based optimization is now industry standard practice [4]. Research has continued apace, both in industry and academia, to improve the design of query optimizers.

### Section 2.6 — Document Data Model (PDF p. 2)

> MongoDB is a document-oriented database designed for ease of development and scaling. A MongoDB database stores collections of documents. MongoDB documents (the equivalent of records in a relational DBMS) do not need to have a schema defined beforehand [35, 1]. Instead, the fields in each document can be chosen on the fly. This flexible design allows developers to represent hierarchical relationships, to store arrays, and other more complex structures simply.
>
> The key components of the MongoDB data model design are the database, collection, document, and cursor [36].

### Section 2.7 — MongoDB Query Model (PDF pp. 2–3)

> At a low level, MongoDB stores data as BSON documents, which extends the JSON model to offer more data types and efficient encoding and decoding. APIs in a variety of programming languages make it easy for programmers to create those documents. This coupled with the similarity between MongoDB’s JSON-like document model and the data structures used in object-oriented programming, makes integration with applications simple.
>
> MongoDB applications can use complex queries, secondary B+-Tree indexes, and aggregations to retrieve unstructured, semi-structured, and structured data. A vital factor in this flexibility is MongoDB’s support for various query types. Queries can return documents, document projections, or complex aggregations calculated over many documents [1].
>
> Here, we have a closer look at MongoDB’s find() query command and introduce how it relates to SQL SELECT expressions.
>
> The most common operators for a find() command are filter (analogous to the SQL WHERE expression, with an implicit AND between conditions), projection (analogous to the SQL SELECT expression) and sort. MongoDB query is different from SQL in many ways: the query is expressed in BSON format. Each operator in the query language corresponds to a field in a document that can be included or omitted as needed.

**Figure locator:** Figure 1, “MongoDB query processing workflow,” appears within this discussion on PDF p. 3. The paper also gives a `find()` example in Listing 1 on PDF p. 3.

### Section 2.8 — Execution Plan Generation and Caching (PDF pp. 3–4)

> The design of the MongoDB query processor and optimizer is evolving with each release. We provide detailed insight into the state-of-the-art architecture. The overall design of the optimizer is clean and orderly. However, in later sections we demonstrate that there is room for further improvement.
>
> In this section, we explain how a MongoDB query is submitted, parsed, and optimized before it interacts with the MongoDB storage engine. Explanations in this section are mainly gathered from interviews with professional MongoDB developers and from examining MongoDB source code.
>
> Figure 1 provides an overview of the query processing workflow. We break down the whole process into three layers. In the network layer, MongoDB specifies a MongoDB Wire Protocol which is a simple socket-based, request-response-style protocol. Clients connect to the database following the protocol. In the executor layer, queries are received in the form of operation contexts. Some queries such as insert() do not require optimization. Therefore, these queries interact directly with the storage engine.
>
> Queries that require optimization are standardized and simplified to Canonical Queries ignoring values in the predicate, which MongoDB calls the query shape. The query shape is designed for the cache mechanism; generation and evaluation of query plans uses a complete query with concrete values.
>
> For a given Canonical Query, the Query Solution module might yield multiple execution plans. Each execution plan is a tree of query stages, where the leaf stages access data via a collection or index. When there are multiple relevant indexes, execution plans are generated to explore the combinations. Multiple execution plans will also be generated when stages can be reordered or there are multiple implementations of a given stage (e.g., $or queries and joins expressed with $lookup).
>
> All candidate execution plans are evaluated by the FPTP query optimizer. Finally, the candidate plan assigned the best efficiency score by FPTP is executed by the plan executor. The plan is also cached, and if the same query shape is executed soon after, the cached plan will be reused as long as its efficiency remains below 10 times the evaluated efficiency (with default settings).
>
> In this work, we mainly focus on investigating the query optimizer’s query plan evaluation strategy but not the efficiency of its cache mechanism. In the experimental analysis, we programmatically force MongoDB not to use the query plan cache.

### Section 2.9 — MongoDB’s FPTP Query Optimizer (PDF p. 4)

> We now describe the mechanism of MongoDB’s query optimizer. A simplified explanation of FPTP is that the query optimizer initially executes all potential query plans in parallel and chooses the first one that completes a predefined amount of work. The winner of the race is then run to completion as the execution plan and is also cached for future queries with the same shape.
>
> The FPTP approach consists of two key steps: measuring all candidate plans in a race and then making a decision, that is, choosing the most efficient query plan based on the measurements. During the race phase, all candidate query plans are executed in a round-robin fashion. That is, MongoDB starts all candidate query plans and cycles through them to step through the first parts of the execution of the query using each plan.
>
> During the race, time slices are assigned to each query plan in circular order, handling all potential plans. Each time slice performs one logical unit of work representing one step of a query plan, such as examining the next document and checking the predicates on it. Meanwhile, the query optimizer gathers execution metrics and then provides a score for each plan.
>
> The query optimizer asks each plan for the next document, via a call to a work() function. If the step can provide a document, it responds with ADVANCED. If all documents from the plan have been retrieved, work() returns EOF and working is set to false. However, the given query could be expensive, so MongoDB specifies limits to terminate the race early, as described in Algorithm 1.
>
> The race stops if the maximum allowable amount of work has been reached, or the requested number of documents has been retrieved (as reflected in the counter plan.results), or a plan has completed and returned all its results. The configuration knob internalQueryPlanEvaluationWorks (default 10,000) is the maximum allowed amount of work. However, for very large collections, MongoDB takes a fraction of the number of documents to determine the maximum allowable amount of work. The configuration knob internalQueryPlanEvaluationMaxResults (default 0.3) is the maximum number of documents that can be retrieved during the race.
>
> When the race is terminated, each candidate query plan is assigned a performance score based on the performance metrics shown in Table 1. The query optimizer chooses the query plan that has the highest performance score as the execution plan. Each query plan has a base score of 1. The productivity of a plan is measured as the number of results returned divided by the total amount of work performed. tieBreakers is a very small bonus number that is given when a plan contains no fetch operation (noFetchBonus), no blocking sort (noSortBonus) or avoids index intersection (noIxisectBonus). eofBonus is given if all possible documents are retrieved during the execution of the plan.

**Table 1, “MongoDB Query Plan Performance Metrics,”** lists the base score, productivity, tie-break components, and end-of-file bonus. **Figure 2, “Logical flow of MongoDB query optimizer,”** diagrams the optimizer flow. The paper’s simplified “in parallel” wording is clarified by its detailed round-robin description; avoid describing the trial as simultaneous parallel execution without qualification.

### Section 4.1 — Querying Indexed Collections (PDF p. 7)

> In our first experiment, we investigate the case of conjunctive filter queries on two attributes where both of the queried attributes are indexed. The physical data design is, as described in Section 3, a collection with two integer-valued fields (A and B). In this experiment, each field has a uniform data distribution and each field has an index. Therefore, there are three reasonable query execution plans: IXSCAN_A, IXSCAN_B and COLLSCAN.
>
> Figure 4a plots the execution plans picked in this case by the MongoDB 7.0.1 query optimizer. We observe that both IXSCAN_A and IXSCAN_B are picked by the optimizer with equal chance, and as expected, the field where the query selectivity is lower (that is, fewer documents satisfy this predicate), has the index used. This phenomenon suggests that the FPTP approach is capable of making efficient choices between index scans. The boundary between the two index scans is clear and forms a diagonal across the grid. The query optimizer is quite robust: away from the boundary, the chosen plan does not change with small perturbations in the query.
>
> However, in this experiment, we see that COLLSCAN was never the chosen plan. To see that this is surprising, we present the diagram showing which plan is actually the best for queries in this physical design (in Figure 4b, which is the same as Figure 3) and what the ratio is between the cost of running the chosen plan compared to the true best plan (Figure 4c).
>
> As one would expect, the performance of an index scan is significantly worse than a collection scan for a query that has high selectivity on both fields (that is, each predicate is satisfied by many of the documents). At the extreme, if the query retrieves all documents in the collection, an index scan would first retrieve index documents and then use those index information to locate and fetch all documents. In contrast, a collection scan does not have index-access overhead; it directly retrieves all documents without using any index.
>
> In summary, for this experiment, MongoDB’s FPTP query optimizer shows an overall accuracy of just shy of 34% in this scenario, so about two thirds of the time there would be a better plan than one of the chosen index scan plans. The average impact factor of all those optimizer decisions is 1.7 (on average, the chosen query plan is 70% slower than the optimal plan), with some chosen plans more than three times slower than a collection scan.

**Interpretation boundary:** these are results for the paper’s stated MongoDB 7.0.1 configuration and workload. Do not treat the percentages as general performance claims.

### Section 5 — Source-code explanation of collection-scan behavior (PDF pp. 9–10)

The authors inspect MongoDB 7.0.1’s query-planner code. Their explanation is that, when a matching index exists, a collection scan is not included among candidate plans unless it is explicitly requested or otherwise required. They show a source-code condition involving `possibleToCollscan`, `collscanRequested`, and `collScanRequired`, then test a modified version that always adds a collection-scan candidate. This is the authors’ account of the studied version and should be checked against current source before describing present behavior.

### Main relevance to Section 4.1

This paper is directly useful for the query-processing portion of Section 4.1: query workflow, query representation, execution-plan generation, plan caching, FPTP selection, and a controlled evaluation of plan choices. It offers only limited storage-engine context and does not explain WiredTiger’s internal architecture. Use a separate authoritative or independent source for the storage-engine discussion.

### Limitations and drafting boundary

- The experimental results concern MongoDB 7.0.1, a single collection, two indexed integer attributes, and simple range-filter queries.
- Section 4.1 in this paper is titled “Querying Indexed Collections”; it is not the same as this project’s Section 4.1.
- The paper’s plan-selection description and internal parameter values are version-specific. Verify present-day behavior before writing them as current facts.
- Separate what the paper describes from its experiments: the architecture discussion draws on developer interviews and source-code examination, while the performance results come from the stated test setup.
- The paper is not evidence for the complete MongoDB server architecture or detailed WiredTiger internals.

---

## Paper 2

### Title

Enabling schema-independent data retrieval queries in MongoDB

### Authors

João Vitor Lopes Cabral, Viviana Elizabeth Romero Noguera, Ricardo Rodrigues Ciferri, and Daniel Lucrédio

### Published

March 2023, *Information Systems*, Volume 114, Article 102165.

### Source type

Research article.

### Source links

- ScienceDirect article page: https://www.sciencedirect.com/science/article/abs/pii/S0306437923000017
- DOI: https://doi.org/10.1016/j.is.2023.102165

### Access status

The ScienceDirect page was inspected in the browser. It states that the user's institution does not subscribe to this content. The material below is limited to the accessible abstract, introduction, and section snippets. The full text and PDF page numbers were not available; this is not a complete extraction of the article.

### Relevant content from the accessible paper preview

The following is a detailed paraphrase of the content visible in the ScienceDirect preview, organized under the article's own headings and section outline. It is not a verbatim transcription of the full paper.

#### Abstract

The article addresses the effort required to write MongoDB data-access queries when developers must know the logical and physical schema, and the need to revise queries when that schema changes. The authors propose a method combining conceptual data modeling and code generation: developers write data-retrieval queries using an Entity–Relationship algebra, then a model mapping conceptual entities and relationships to document collections enables generation of MongoDB-native query code. The abstract reports consistent test results, a stable result structure across schema mappings, and improvements of up to 500% in throughput and response time after changing the schema without rewriting the conceptual query. It notes that designers must create and maintain the mapping.

#### Introduction — schema mappings and the garage example

The introduction explains that document databases often combine logical and physical structure, so query developers may need to understand how data is physically stored. The article uses a garage example with `Person` and `Car` entities and a one-to-many `Drives` relationship to illustrate how different document mappings affect query implementation.

- **Mapping 1:** Store people and cars in separate collections. A person document contains a list of car references. To retrieve people and their cars, the example query traverses the list, looks up car documents in the other collection, and groups the retrieved car data back into the result.
- **Mapping 2:** Duplicate car data into person documents while retaining separate car documents for cars without drivers. The same retrieval is simpler in the example because it avoids the extra unwind and lookup work.
- The two mappings produce different query code and result shapes. The example is used to show that a schema change can require changes to queries and application code that consumes their results.

The authors use this example to motivate schema-independent query expression: query writers should describe retrieval against a conceptual model, while the database designer can change the physical mapping as workload knowledge develops.

#### Introduction — proposed approach

The visible introduction describes two components:

1. **Query specification:** Use a classic Entity–Relationship algebra with a concrete syntax so that complex retrieval operations can be stated using a conceptual ER model rather than a particular document layout.
2. **Query generation:** Formally record the mapping from the ER model to the document-database schema. A generator then translates an ER query into MongoDB-native code for that mapping. When the schema mapping changes, the mapping artifact is updated and the native query can be regenerated.

The paper says the implementation extends earlier work by adding nested joins, Cartesian product, projection, and selection, and by evaluating results automatically. The authors also note that different native implementations may be possible for the same query and mapping, especially where data are duplicated; their implementation chooses one path intended to use fewer operations, but that choice was not extensively tested.

#### Introduction — stated limitations

The accessible introduction identifies these limitations of the authors’ implementation:

- It does not support relationship inheritance from the ER algebra.
- It supports data-retrieval query writing only; it does not generate create, update, or delete operations.
- It does not migrate data when moving from one physical schema to another.
- The amount of developer effort saved by code generation was observed qualitatively, not measured.
- Choosing among multiple valid data-access paths in duplicated schemas was not extensively tested.

#### Section 2 — proposed solution and main components

The article's introduction says Section 2 presents the proposed solution and its components. The accessible section snippet is headed **“Approach description.”** It begins by stating four goals. The visible preview shows the goals of schema-independent query specification and automatic transformation into native database code; the evaluation snippet also identifies consistent output structure and improved data retrieval as goals. Because the full section is not accessible in the browser, its detailed subsections and implementation text are not transcribed here.

#### Section 3 — evaluation

The article's introduction says Section 3 presents evaluation results. The accessible section snippet is headed **“Evaluation.”** It says the evaluation follows the GQM (Goal–Question–Metric) approach and evaluates four goals: schema-independent retrieval queries, automatic generation of native code, consistent result structure, and improved data retrieval. The abstract reports up to 500% gains in throughput and response time from changing the schema without rewriting the conceptual queries. The full experimental setup, datasets, baselines, measurements, and result tables are not available in the preview, so the percentage should not be used as a fully assessed benchmark claim until the full article can be consulted.

#### Section 4 — related work

The article's introduction says Section 4 discusses related work and the contribution relative to prior literature. The visible **“Related work”** snippet names SOS, ODBAPI, and BQL as prior approaches to schema-independent querying in NoSQL, and notes their use of generative techniques. Only a short excerpt is available; do not treat this as a complete comparison of those systems.

#### Section 5 — Conclusion, limitations, and open challenges

The article's introduction says Section 5 presents current limitations and open challenges; the accessible ScienceDirect section snippet is headed “Conclusion.” Its visible summary reiterates that NoSQL query writing can be difficult and that earlier solutions have often been limited to simple queries or fixed schemas. It summarizes the proposed ER-based query-generation approach and says the experiments provide evidence that the authors' goals were met. The complete Section 5 text is inaccessible in the preview, so the implementation limitations listed above are not a substitute for that full section.

### Main relevance to project Section 4.1

This source is supplementary for the **query-processing and data-model/query-interface** discussion: it shows how document-schema mappings can change the generated MongoDB query, how a conceptual query can be translated into native operations, and how query shape may affect response time. It does not describe MongoDB's internal query planner, server architecture, or storage-engine implementation. Use it for schema-aware query construction and the authors' evaluated approach, not as a source on WiredTiger internals or general MongoDB query execution architecture.

### Evidence and quality cautions

- The authors' performance claim is “up to” 500% and is specific to their approach and experiments. The accessible preview does not expose enough evaluation detail to assess the comparison conditions.
- Distinguish the paper's generated-query approach from MongoDB's own internal query optimizer.
- The source was peer-reviewed as a research article in *Information Systems*, but the full methods and results were not checked because the institution does not subscribe to the article.
- No full-text page numbers or exact subsection numbering beyond the article's Section 2–5 outline could be verified from the preview.

---

## Paper 3

### Title

MongoDB Architecture Guide: The foundational concepts that underpin the architecture of MongoDB

### Publisher and publication date

MongoDB, Inc.; published November 2021. This is a vendor white paper, not a peer-reviewed journal article.

### Source links

- MongoDB resource page: https://www.mongodb.com/resources/products/fundamentals/mongodb-architecture-guide
- Full 18-page PDF: https://s3.amazonaws.com/info-mongodb-com/MongoDB_Architecture_Guide.pdf

### Access status and scope

The resource page and the linked PDF were reviewed. The notes below follow the PDF's own headings and page numbers. The guide is a MongoDB-published overview, not an independent evaluation; product and performance statements are the publisher's claims. It was published in November 2021 and frequently describes MongoDB 5.0-era functionality, so version-specific details and Atlas service descriptions must be checked against current documentation before being presented as current.

### Relevant content from the guide

The following is a structured paraphrase of the guide's relevant content, not a verbatim transcription.

#### Introduction (PDF pp. 1–2)

The guide frames modern data workloads as requiring adaptable data models, the ability to handle growing and varied application data, distributed deployment, and support for transactional, analytical, search, and mobile workloads. It presents MongoDB's architecture as combining a document model, distributed-systems capabilities, and a common data platform. This is the publisher's rationale for the product, rather than a comparative study demonstrating that MongoDB outperforms alternatives.

#### The Document Model (PDF pp. 2–4)

The guide presents the document model through three benefits:

1. **Intuitive mapping to application objects:** Documents can group related values, nested objects, and arrays in a structure resembling application data. The guide's customer example uses one document with embedded address and phone information, in place of several relational parent-child tables. It argues that grouping data commonly accessed together can reduce application-side assembly and joins.
2. **Flexible schema:** Documents can have different fields, and the stored structure can evolve over time. The guide says this allows older and newer application versions to coexist during gradual change. It also notes that schema validation can enforce structural rules, so flexibility does not mean validation is unavailable.
3. **Broad data representation:** The guide says the model can represent objects, key-value structures, relationships, graph-like data, geospatial values, and time-series data. It distinguishes JSON as the developer-facing representation from BSON, MongoDB's binary document encoding, which supports additional types such as dates and decimal values.

The guide also discusses time-series collections and related functionality introduced around MongoDB 5.0. Those statements are historical product descriptions; consult current MongoDB documentation for present behavior and supported optimization details.

#### Working With Document Data (PDF pp. 5–6)

The guide describes the MongoDB Query API as covering ad hoc queries, indexes, aggregations, and access to data across workloads. It presents the aggregation pipeline as a sequence of stages that can filter, reshape, group, sort, process arrays, and calculate derived values. The guide positions aggregation as an in-database way to transform and analyze data.

It also mentions multi-document ACID transactions, tunable consistency, and change streams for notifying applications about database changes. These are feature-level descriptions; the guide does not explain the internal query-planning algorithms, execution engine, or storage-engine implementation behind them.

#### Distributed Architecture: Scalable, Resilient, and Mission Critical (PDF pp. 6–9)

This section focuses on replica sets, sharding, and deployment/data-placement choices:

- **Availability and data protection with replica sets (PDF pp. 6–7):** A replica set maintains copies of data across members. The guide describes automatic primary election after a failure, configurable write concern for durability, and read routing options. It also describes majority write concern as the MongoDB 5.0 default, which is version-specific context and should be checked against current server documentation.
- **Scale up, out, and across storage tiers (PDF pp. 7–9):** Vertical scaling changes the resources of a node; sharding distributes data across nodes for larger or write-intensive workloads. The guide discusses ranged, hashed, and zoned sharding as ways to distribute data according to key ranges, write distribution, or placement rules. It also describes Atlas Online Archive and federated querying as cloud product capabilities in the edition covered.
- **Locality and workload effects:** The guide connects placement and replica routing with latency, data residency, and workload behavior. This is useful context for architecture, but it does not provide controlled measurements or workload-specific guarantees.

#### Privacy and Security (PDF pp. 9–10)

The guide surveys authentication, role-based authorization, auditing, network isolation, encryption in transit and at rest, and client-side field-level encryption. It describes client-side encryption as keeping encrypted values opaque to the server. These are high-level product claims; detailed configuration, supported query behavior, limitations, and current product naming should be verified in the current security documentation.

#### One Platform for All Your Workloads (PDF pp. 10–17)

This section shifts from database architecture to the broader MongoDB Atlas application data platform. The guide describes the Atlas database service, global distribution, automated provisioning and scaling, backups, monitoring, search, data lake/federation, mobile, connectors, and management tools. These parts help explain MongoDB's product ecosystem but are less directly useful for describing the core server query path. Availability, region counts, service-level agreements, service names, and included features in this section are time-sensitive and should not be reused as current facts without checking current vendor documentation.

#### Getting Started and closing discussion (PDF pp. 17–18)

The closing pages restate the guide's thesis that the document model, distributed architecture, and related services form a platform for modern applications, then direct readers to further MongoDB resources and products. This is a product-oriented conclusion, not a summary of independently measured results.

### Main relevance to project Section 4.1

This guide is useful as a vendor overview for explaining how MongoDB's document data model and Query API relate to application data access, and how replica sets and sharding affect availability, data placement, and query locality. Its aggregation-pipeline description can support a high-level account of query-facing functionality. It does **not** document MongoDB's internal query planner or execution stages in technical depth, nor does it explain WiredTiger internals. For those points, use MongoDB server documentation/source code and independent technical research. The guide's performance and ease-of-use advantages should be attributed to MongoDB rather than stated as neutral findings.

### Evidence and drafting cautions

- This is vendor-authored product literature; use it for MongoDB's stated architecture and feature overview, not as independent comparative evidence.
- The guide is dated November 2021 and includes MongoDB 5.0-era defaults and product descriptions. Verify version-dependent claims against current documentation before describing current behavior.
- Distinguish core server concepts (documents, Query API, replica sets, sharding) from Atlas-only managed services and surrounding products.
- The guide describes architecture and product capabilities but does not supply a reproducible benchmark or detailed internal account of query optimization and execution.

---

## Material retained for later section assignment

The existing notes also contain replica-set, oplog, and replication material from a separate VLDB paper. Those topics are not incorporated into this Section 4.1 record. They remain in `Architecture.txt` for assignment to the appropriate later subsection.
