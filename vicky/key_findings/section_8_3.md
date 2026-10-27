# Section 8.3 — Interoperability, edge deployment, and energy efficiency

This file captures material relevant to Section 8.3 from two selected sources. The first addresses SQL/NoSQL interoperability with a MongoDB implementation; the second surveys edge/fog database deployment, including energy constraints and evaluation gaps. Bibliographic information and source section labels are retained. Findings are summarized in my own words for later writing; consult the linked papers for original wording and full context.

## Paper 1

### Title

Uniform data access platform for SQL and NoSQL database systems

### Study ID

S034

### Authors

Ágnes Vathy-Fogarassy and Tamás Hugyák

### Published

September 2017

### Journal

Information Systems, Volume 69, pages 93–105

### DOI and source links

- DOI: https://doi.org/10.1016/j.is.2017.04.002
- Publisher page: https://www.sciencedirect.com/science/article/pii/S0306437916303398
- Full-text PDF: https://dcs.uni-pannon.hu/files/docs/users/vathya/FVA_UniformDataAccessPlatform_2017.pdf

### Source type

Peer-reviewed journal article proposing and demonstrating a data-integration method.

### Relevant content from the paper

#### Interoperability problem (§§1–3)

The paper identifies structural, semantic, and query-syntax differences as obstacles to accessing data across relational and NoSQL systems. It proposes an intermediate JSON-based metamodel and database adapters to present data from heterogeneous sources through a common access method.

#### Proposed platform and MongoDB demonstration (§§4–5)

The authors describe the method and implement it in a web application called HybridDB. The application demonstrates access to relational systems and MongoDB, showing a concrete approach to working across SQL and NoSQL data sources.

#### Scope and limits (§§5–6)

The method retrieves separately filtered data from different database systems but does not support joins or aggregates across the data sources. The demonstration establishes applicability for the described method, not adoption as a general interoperability standard.

### Main relevance to Section 8.3

S034 provides a MongoDB-specific example for future work on common interfaces and cross-model data access. It is an older, bounded implementation; use it to illustrate the problem and one approach, not as evidence of current interoperability support.

---

## Paper 2

### Title

Databases in Edge and Fog Environments: A Survey

### Study ID

S035

### Authors

Luís Manuel Meruje Ferreira, Fabio Coelho, and José Pereira

### Published

8 July 2024

### Journal

ACM Computing Surveys, Volume 56, Issue 11, Article 285, pages 1–40

### DOI and source links

- DOI: https://doi.org/10.1145/3666001
- ACM article: https://dl.acm.org/doi/10.1145/3666001
- Open full text: https://repositorio.inesctec.pt/bitstreams/237b903d-27bf-413a-82e2-0f69113a77cc/download

### Source type

Open-access peer-reviewed survey of database systems deployed with storage at the edge or in fog environments.

### Relevant content from the paper

#### Scope and application domains (§§1–2)

The survey focuses on systems with at least one edge storage node and organizes the literature around points of presence, sensor networks, and autonomous vehicles. It discusses why placing database storage and query processing closer to data sources can affect latency, connectivity, privacy, energy, and scalability.

#### Hardware, energy, and privacy constraints (§3)

The authors compare resource limits and asymmetry across evaluated hardware, examine the energy limits assumed for edge nodes and the energy optimizations used, and review whether privacy mechanisms are considered. They identify that energy constraints for many edge nodes are poorly understood because studies often assume gateways and other infrastructure have mains power.

#### Evaluation and future research (§§5, 7)

The survey finds heterogeneous hardware, workloads, and evaluation methods across the literature. It recommends edge-specific storage benchmarks with realistic workloads and broader measures, including energy, and better comparison of cloud-only, edge-only, and fog deployment. It also identifies a need for simulation and emulation tools designed for edge database systems.

### Main relevance to Section 8.3

S035 supports research priorities for energy-aware, reproducible edge/fog database evaluation. It is not MongoDB-specific adoption or performance evidence; pair its research agenda with MongoDB-focused studies when making product-level claims.
