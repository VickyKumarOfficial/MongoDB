# Section 8.3 source evaluation

Section: 8.3, Interoperability, edge deployment, and energy efficiency

This note records source verification, fit, and limits for `vicky/key_findings/section_8_3.md`. Study IDs match that file. Findings are paraphrased; source section locations are retained for later checking.

## Selected interoperability study: Vathy-Fogarassy and Hugyák (2017)

- **Title:** Uniform data access platform for SQL and NoSQL database systems
- **Authors:** Ágnes Vathy-Fogarassy and Tamás Hugyák
- **Year / venue:** 2017, *Information Systems*, 69, pp. 93–105
- **Study ID:** S034
- **DOI / publisher page / full text:** https://doi.org/10.1016/j.is.2017.04.002 ; https://www.sciencedirect.com/science/article/pii/S0306437916303398 ; https://dcs.uni-pannon.hu/files/docs/users/vathya/FVA_UniformDataAccessPlatform_2017.pdf
- **Source type:** Peer-reviewed journal research article with a proposed method and implementation demonstration
- **Access checked:** Publisher abstract and full-text PDF reviewed; metadata, motivation, integration challenges, method, HybridDB application, evaluation description, and conclusion consulted.
- **Decision:** Selected for a concrete interoperability example involving MongoDB and relational systems.

### Claims it can support

- Heterogeneous access must address differences in structure, semantics, and query syntax. **Locations:** §§1–3.
- The proposed method maps source metadata to generalized JSON schemas and uses adapters to provide a shared access method. **Location:** §4.
- A web application called HybridDB demonstrates the method using relational systems and MongoDB. **Location:** §5.
- The method does not support joins or aggregation across sources; it retrieves separately filtered data and supports migration. **Locations:** Abstract; §§5–6.

### Scope, quality checks, and limitations

The paper is a 2017 method and prototype demonstration, not evidence of a standard or current product capability. Its cross-source query limitations are material. It establishes a concrete SQL/NoSQL integration example, but present-day interoperability claims require current system-specific evidence.

### Recommended use

Use S034 to illustrate the structural, semantic, and syntactic problems of heterogeneous data access and one MongoDB-connected approach. Pair it with newer work if discussing current integration architectures.

## Selected edge/fog database survey: Ferreira, Coelho, and Pereira (2024)

- **Title:** Databases in Edge and Fog Environments: A Survey
- **Authors:** Luís Manuel Meruje Ferreira, Fabio Coelho, and José Pereira
- **Year / venue:** 2024, *ACM Computing Surveys*, 56(11), Article 285, pp. 1–40; published 8 July 2024
- **Study ID:** S035
- **DOI / ACM article / open full text:** https://doi.org/10.1145/3666001 ; https://dl.acm.org/doi/10.1145/3666001 ; https://repositorio.inesctec.pt/bitstreams/237b903d-27bf-413a-82e2-0f69113a77cc/download
- **Source type:** Open-access peer-reviewed survey of edge/fog database systems
- **Access checked:** ACM metadata and open institutional full text/search-indexed article text; scope, application domains, hardware constraints, energy and privacy discussion, evaluation practices, and future directions reviewed.
- **Decision:** Selected for high-quality research context on edge deployment and energy efficiency; it is not MongoDB-specific evidence.

### Claims it can support

- The survey covers database systems with at least one edge storage node and categorizes work in points of presence, sensor networks, and autonomous vehicles. **Locations:** §§1–2.
- It examines latency, resource constraints, energy limits, privacy, workloads, and the evaluation practices used in edge/fog database research. **Locations:** §§3, 5.
- It identifies that the energy constraints of many edge database nodes are not well understood, partly because studies often assume some infrastructure is mains-powered. **Location:** §3.3.
- It recommends edge-specific storage benchmarks with realistic workloads and energy measures, comparisons across cloud/edge/fog deployments, and better simulation/emulation support. **Locations:** §3.3; §7.

### Scope, quality checks, and limitations

This is a secondary survey of edge/fog databases, not a MongoDB product evaluation. Its findings support deployment context and research gaps across the surveyed literature; they do not show that MongoDB is widely deployed at the edge or establish MongoDB-specific energy performance. The survey also describes a heterogeneous corpus that does not support universal performance rankings.

### Recommended use

Use S035 to frame edge/fog research priorities, especially representative benchmarks and energy-aware evaluation. Pair its broad survey evidence with MongoDB-specific experiments before making product-level claims.

## Cross-source assessment for Section 8.3

S034 gives a MongoDB-connected example of SQL/NoSQL interoperability and shows how limited cross-source operations can be. S035 surveys edge/fog databases and identifies research gaps in realistic workloads, deployment comparisons, and energy measurement. Together they cover interoperability and edge/fog energy research priorities. Neither establishes present-day MongoDB edge adoption or a universal deployment choice. Future evaluation should use current database versions, representative application workloads, explicit data-integration operations, realistic edge resources, and clear energy boundaries.
