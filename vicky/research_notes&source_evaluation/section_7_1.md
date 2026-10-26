# Section 7.1 source evaluation

Section: 7.1, Emerging research and application trends

This note records source verification, fit, and limits for `vicky/key_findings/section_7_1.md`. Study IDs match that file. The content is paraphrased; source section locations are retained for later checking. No tracker or Google Doc was changed.

## Selected applied study: Ciumac et al. (2026)

- **Title:** Performance Evaluation of MongoDB and RavenDB in IIoT-Inspired Data-Intensive Mobile and Web Applications
- **Authors:** Mădălina Ciumac, Cornelia Aurora Győrödi, Robert Ștefan Győrödi, and Felicia Mirabela Costea
- **Year / venue:** 2026, *Future Internet*, 18(1), Article 57; published 20 January 2026
- **Study ID:** S027
- **DOI / publisher:** https://doi.org/10.3390/fi18010057 ; https://www.mdpi.com/1999-5903/18/1/57
- **Source type:** Open-access empirical journal article, CC BY 4.0
- **Access checked:** User-opened publisher full text in the browser; metadata, abstract, introduction, system/workload description, comparative results, limitations, conclusion, and data availability were reviewed.
- **Decision:** Selected as recent MongoDB-specific applied evidence; use as a bounded example, not proof of an industry-wide trend.

### Claims it can support

- A recent study applies an IIoT-inspired framing to a data-intensive mobile/web product-order application and evaluates MongoDB with RavenDB. **Locations:** Abstract; §1; §4.
- It evaluates varied operations and features rather than only CRUD, including `$lookup` versus `Include()`, bulk ingestion, aggregation, and full-text search. **Locations:** Abstract; §§5–6.
- In the study's one-host setup, MongoDB has generally better reported CRUD response time and peak throughput, while RavenDB performs better in some of the source-specific tasks. The winning system depends on task and implementation. **Locations:** §5; §6.5; Tables 6–8.
- Table 8 gives throughput by operation and concurrency for one million documents. The exact 32-thread results are retained in `key_findings/section_7_1.md`; cite the table and preserve its units/configuration.

### Scope, quality checks, and limitations

The study compares MongoDB 7.0.x Community Edition (WiredTiger) with RavenDB 7.0, using a .NET MAUI application on one MacBook Air M3 host with 8 GB unified memory. Dataset size ranges from 1,000 to 1,000,000 documents. It uses query-specific MongoDB indexes and RavenDB automatic/explicit indexes. It is an application-based controlled database test, not an actual edge/cloud IIoT deployment.

The paper states that each test scenario was run 50 times with five warm-up runs in §6.1, but Table 8's caption describes its throughput results as 35 measured runs. Keep that reporting discrepancy visible and do not cite a run count without checking the exact metric/table. The article reports averages but no inferential analysis or confidence intervals. The single-node arrangement excludes network latency, replication, sharding, and distributed coordination; hybrid transitions between read- and write-intensive operations are not fully evaluated. The results cannot demonstrate real production-scale IIoT behavior.

### Recommended use

Use S027 to illustrate the kinds of MongoDB-specific application evaluations now being reported, and to show why workload and operation matter. Avoid claiming that it proves IIoT adoption is increasing or that its relative performance result generalizes to distributed deployments.

## Selected design-research study: Hewasinghage et al. (2023)

- **Title:** Automated database design for document stores with multicriteria optimization
- **Authors:** Moditha Hewasinghage, Sergi Nadal, Alberto Abelló, and Esteban Zimányi
- **Year / venue:** 2023, *Knowledge and Information Systems*, 65, 3045–3078; published 11 March 2023
- **Study ID:** S028
- **DOI / open full text:** https://doi.org/10.1007/s10115-023-01828-3 ; https://link.springer.com/article/10.1007/s10115-023-01828-3
- **Source type:** Open-access journal research article
- **Access checked:** Full Springer publisher text; abstract, introduction, method, evaluation, and conclusion reviewed.
- **Decision:** Selected for evidence of a research direction in automated, workload-aware document-store design.

### Claims it can support

- Embedding, referencing, and relationship-structure decisions create many candidate document schemas and can affect query performance, storage, redundancy, heterogeneity, and document complexity. **Location:** §1.
- The proposed DocDesign method represents candidate designs and uses transformations and local search to optimize a workload against multiple criteria. **Locations:** §§1, 3–5.
- The objectives include storage size, query performance, degree of heterogeneity, and average document depth. **Locations:** §1; §3.
- The method is tested against a prior design tool using RUBiS. The authors report better performance and more compact designs with less redundancy for their evaluated cases. **Locations:** §1; §6.
- A small expert questionnaire in the motivating example shows the difficulty of manually identifying good alternatives: 63% identified only three candidate designs and 9% selected the experimental query-performance optimum. **Location:** §1. These percentages describe that illustrative exercise only.

### Scope, quality checks, and limitations

This is a document-store method, not a MongoDB-only product study. MongoDB is used as an experimental implementation in the motivating example, and the article discusses MongoDB design patterns. The optimization prototype and RUBiS benchmark support claims about the proposed approach under tested workloads; they do not establish widespread use, production performance across applications, or general superiority over other schema-design methods.

### Recommended use

Use S028 to describe automated and workload-aware schema design as an active line of document-database research. Make clear that it is a design-research direction supported by specific prototypes and workloads, not proof that database design is already broadly automated in industry.
