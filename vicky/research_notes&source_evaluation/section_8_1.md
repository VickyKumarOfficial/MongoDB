# Section 8.1 source evaluation

Section: 8.1, Workload-specific benchmarking and intelligent optimization

This note records source verification, fit, and limits for `vicky/key_findings/section_8_1.md`. Study IDs match that file. Findings are paraphrased; source section and page locations are retained for checking.

## Selected systematic review: Taipalus (2024)

- **Title:** Database management system performance comparisons: A systematic literature review
- **Author:** Toni Taipalus
- **Year / venue:** 2024, *Journal of Systems and Software*, 208, Article 111872
- **Study ID:** S025
- **DOI / full text:** https://doi.org/10.1016/j.jss.2023.111872 ; https://dbs-research.github.io/pdf/2023_performance.pdf
- **Source type:** Open-access systematic literature review
- **Access checked:** User-opened PDF; article metadata, abstract, review corpus, findings, industry considerations, research recommendations, and conclusion reviewed. Existing Section 6.3 notes also contain an earlier full-text evaluation of this source.
- **Decision:** Reused as the principal source for representative and reproducible DBMS benchmarking; it is a methods review, not a MongoDB-specific performance study.

### Claims it can support

- The review corpus contains 117 empirical comparison studies covering 44 DBMSs. **Locations:** §§4.1–4.2.
- Many reviewed studies use workloads or reporting practices that limit real-world relevance and reproducibility. **Locations:** Abstract; §§4.2, 6.1, 7.
- Useful workload descriptions account for application domain, data volume and type, operation mix, concurrency, hardware, deployment topology, consistency, and availability. **Location:** §6.2.1.
- Evaluation should consider storage, consistency, system features, skills, implementation, and migration costs alongside response time and throughput. **Location:** §6.2.2.
- Existing benchmarking guidance and complete reporting should be used to make evaluations interpretable and reproducible. **Locations:** §§6.3.1–6.3.2.

### Scope, quality checks, and limitations

The search and inclusion window ends in March 2022. The paper synthesizes heterogeneous studies rather than testing one controlled workload, so primary-study rankings cannot be merged into a current universal result. Its recommendations are appropriate for benchmarking method, not evidence that MongoDB performs better or worse for an unspecified application.

### Recommended use

Use S025 to justify future workload-specific benchmark design and transparent reporting. Tie the workload and metrics to the target application, and avoid claiming that this review itself determines the best DBMS.

## Selected document-design method: Hewasinghage et al. (2023)

- **Title:** Automated database design for document stores with multicriteria optimization
- **Authors:** Moditha Hewasinghage, Sergi Nadal, Alberto Abelló, and Esteban Zimányi
- **Year / venue:** 2023, *Knowledge and Information Systems*, 65, 3045–3078
- **Study ID:** S028
- **DOI / publisher full text:** https://doi.org/10.1007/s10115-023-01828-3 ; https://link.springer.com/article/10.1007/s10115-023-01828-3
- **Source type:** Open-access peer-reviewed journal article proposing and evaluating an automated document-store design method
- **Access checked:** User-opened Springer full text; publisher metadata, abstract, introduction, design method, evaluation, and conclusion reviewed.
- **Decision:** Selected for evidence of automated and workload-aware document design.

### Claims it can support

- Nesting, embedding, and reference choices produce many possible structures and affect performance, storage, redundancy, and document complexity. **Location:** §1.
- DocDesign represents candidate structures and uses transformations plus local search, driven by a workload and a multicriteria loss function. **Locations:** §§3–5.
- Objectives include query performance, storage size, collection heterogeneity, and average document depth. **Locations:** Abstract; §§1, 3.
- The prototype is compared with a query-cost-oriented design approach using RUBiS; the reported gains apply to the tested cases. **Location:** §6.

### Scope, quality checks, and limitations

This is a document-store design method, not a MongoDB product study. The method is evaluated on particular workloads and a prototype; it does not establish industry adoption or a universal optimum for MongoDB schemas.

### Recommended use

Use S028 to motivate future intelligent schema-design support that makes workload and trade-offs explicit. Attribute performance and storage improvements only to the authors' evaluation.

## Selected MongoDB query-optimizer study: Tao et al. (2024)

- **Title:** First Past the Post: Evaluating Query Optimization in MongoDB
- **Authors:** Dawei Tao, Enqi Liu, Sidath Randeni Kadupitige, Michael Cahill, Alan Fekete, and Uwe Röhm
- **Year / venue:** 2024, APWeb-WAIM 2024, *Databases Theory and Applications*, pp. 99–113
- **Study ID:** S031
- **DOI / publisher record:** https://doi.org/10.1007/978-981-96-1242-0_8
- **Preprint:** https://arxiv.org/abs/2409.16544 ; https://arxiv.org/html/2409.16544v1
- **Source type:** Peer-reviewed empirical study with an open preprint
- **Access checked:** User-opened arXiv HTML; abstract, optimizer description, evaluation method, results, discussion, and conclusion reviewed. The paper notes one author had prior employment at MongoDB.
- **Decision:** Selected as MongoDB-specific evidence for query-optimizer evaluation and automated regression testing.

### Claims it can support

- The MongoDB FPTP optimizer races candidate plans, scores early execution, and chooses a plan to complete. **Locations:** §§2.8–2.9.
- The study compares chosen plans with the empirically fastest candidate and visualizes plan choice across query selectivities. It disables the plan cache during experiments. **Locations:** §§3.3–3.5.
- On MongoDB 7.0.1, the tested range queries revealed a bias against collection scans. In one physical design, the optimizer selected the optimal plan for just under 34% of tested queries; some selected plans were over three times slower than a collection scan. **Location:** §4.1.
- The proposed visualization can inform automated regression checks of optimizer behavior. **Location:** §1.

### Scope, quality checks, and limitations

The evaluation uses a single client and EC2 instance, MongoDB 7.0.1, controlled two-field range queries, selected index configurations, and no query-plan cache. Numerical results are scenario-specific. The authors' interpretation of optimizer bias should not be generalized to every query shape, index design, version, or deployment. One author reports prior employment at MongoDB; this is disclosed as context, not by itself a reason to exclude the study.

### Recommended use

Use S031 to give the subsection concrete MongoDB evidence for continued optimizer testing, while stating the tested query and version limits. Do not present the paper's measured optimizer behavior as universal.

## Cross-source assessment for Section 8.1

S025 provides review-level guidance on workload representation and reporting. S028 provides a prototype method for optimizing document structure across competing objectives. S031 supplies MongoDB-specific evidence that a query optimizer can make workload-dependent plan choices worth testing. Together they support future work that combines representative workloads, automated document design, and regression evaluation of query plans without implying that one method or configuration is best for all applications.
