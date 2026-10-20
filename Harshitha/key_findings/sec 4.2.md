# Section 4.2 — Indexing, aggregation, and transactions

## Source 1

### Title

Index Types

### Publisher and source type

MongoDB, Inc.; current MongoDB Database Manual (version 9.0 documentation).

### Source link

- Main page: https://www.mongodb.com/docs/manual/core/indexes/index-types/
- Related detailed pages are linked under each index type below.

### Accessed

October 9, 2026.

### Scope and relevance

This page is a concise taxonomy of MongoDB index types. It is directly useful for the **indexing** part of Section 4.2, but it does not explain the aggregation pipeline or transactions. The notes below cover every substantive index-type heading on the page, in the order presented. For a paper claim about behavior or restrictions, consult the linked detailed manual page as well as this overview.

### Exact page locations and useful content

#### Page introduction — “Index Types” (page lines 37–41)

The page frames index types as structures that support different data and query needs. This can introduce a brief explanation that MongoDB offers multiple index forms rather than one universal index structure.

#### “Single Field Index” (page lines 43–51)

The section describes an index built on one field in each collection document and illustrates an ascending index on `score`. Use it when explaining the basic single-field case. The page links to [Single Field Indexes](https://www.mongodb.com/docs/manual/core/indexes/index-types/index-single/), which should be consulted for creation, ordering, and behavior details.

#### “Compound Index” (page lines 52–59)

The section describes indexes built over multiple field values. It states that a compound index can support queries on its first field and index prefixes, and emphasizes that field order matters because the B-tree stores keys in the specified order. The page illustrates an index ordered by `userid` ascending and then `scores` descending.

Short exact excerpt: “The order of fields in a compound index is very important.”

For implications and restrictions, see [Compound Indexes](https://www.mongodb.com/docs/manual/core/indexes/index-types/index-compound/). This is a useful source for explaining why a compound index must be matched to the query and sort patterns rather than treated as an unordered set of fields.

#### “Multikey Index” (page lines 60–68)

The section identifies multikey indexes as the index form for values stored in arrays. The example indexes the `addr.zip` field inside an array of address documents. See [Multikey Indexes](https://www.mongodb.com/docs/manual/core/indexes/index-types/index-multikey/) for detailed behavior and limitations, including restrictions on compound multikey indexes, sorting, and covered queries. Those constraints are important when describing the trade-offs of indexing array-valued document fields.

#### “Wildcard Index” (page lines 69–73)

The page presents wildcard indexes as an option for flexible collections where field names may differ, including queries against arbitrary or not-known-in-advance field names. See [Wildcard Indexes](https://www.mongodb.com/docs/manual/core/indexes/index-types/index-wildcard/) for their scope and restrictions. The overview supports describing the use case; it does not establish that wildcard indexing is preferable to targeted indexes for a known workload.

#### “Geospatial Index” (page lines 75–77)

The section links geospatial indexes to queries over coordinate data. See [Geospatial Indexes](https://www.mongodb.com/docs/manual/core/indexes/index-types/index-geospatial/) for the supported geospatial query types and index details. This is relevant if the paper mentions location-based workloads, but a detailed discussion may be outside the short Section 4.2 treatment unless supported by the other sources.

#### “Hashed Index” (page lines 78–82)

The page explains that hashed indexes store a hash of a field value and identifies hashed sharding as their stated use. See [Hashed Indexes](https://www.mongodb.com/docs/manual/core/indexes/index-types/index-hashed/) for additional behavior and limitations. Use this source when discussing index forms connected to sharding; avoid implying that hashed indexing supports every ordinary range-query use case.

#### “Text Index” (page lines 83–97)

The section describes text indexes as supporting `$text` queries over string content. It then points readers to MongoDB Search and MongoDB Vector Search as other text-search options, describing them as offering broader functionality and semantic, hybrid, or generative search capabilities. These comparisons are MongoDB's own product documentation, not an independent evaluation. See [Text Indexes on Self-Managed Deployments](https://www.mongodb.com/docs/manual/core/indexes/index-types/index-text/) for `$text` behavior and limitations. Treat the Search and Vector Search note as scope context only unless the review is also comparing those separate search systems.

#### “Clustered Index” (page lines 98–102)

The section says a clustered index determines the storage order for a clustered collection and links to an example using a date key. See [Clustered Collections](https://www.mongodb.com/docs/manual/core/clustered-collections/) for fuller details. This gives a distinct physical-storage aspect to mention alongside indexes used primarily to support lookup and ordering operations.

### Extracted source text and interpretation

The exact section titles and the short excerpt above are retained as source wording. The descriptions and relevance notes are concise paraphrases of the MongoDB page; they are not presented as verbatim page text. The page is an authoritative source for MongoDB's documented features and current terminology, but it is vendor documentation and should not be treated as independent evidence that a particular index improves performance in every workload.

### How this source can support Section 4.2

Use this page to define and distinguish the principal index families: single-field, compound, multikey, wildcard, geospatial, hashed, text, and clustered. Pair it with query-optimization guidance and empirical studies before making performance claims. A balanced discussion should connect index choice to query shape and data structure and acknowledge design constraints and maintenance costs using sources that address those issues directly.

### Section coverage still needed for 4.2

This source addresses **index types only**. It does not provide the needed source evidence for aggregation mechanics or transactions. Those topics remain to be documented from the next relevant sources under the established one-subsection-at-a-time workflow.

---

## Source 2

### Title

First Past the Post: Evaluating Query Optimization in MongoDB

### Authors

Dawei Tao, Enqi Liu, Sidath Randeni Kadupitige, Michael Cahill, Alan Fekete, and Uwe Röhm.

### Publication

Published as a refereed conference paper in the proceedings of the 35th Australasian Database Conference (ADC 2024), in *Lecture Notes in Computer Science*, vol. 15449, pp. 99–113. Springer lists the chapter as first online on December 13, 2024; the proceedings copyright is 2025.

### Source links

- Final Springer chapter page: https://link.springer.com/chapter/10.1007/978-981-96-1242-0_8
- DOI: https://doi.org/10.1007/978-981-96-1242-0_8
- Open arXiv record: https://arxiv.org/abs/2409.16544
- Open arXiv PDF used to verify the section and figure locators: https://arxiv.org/pdf/2409.16544
- Authors' code repository: https://github.com/michaelcahill/mongodb-fptp-paper

### Relevance to project Section 4.2

This is a strong empirical source for the **indexing and query-plan** part of project Section 4.2. It examines how MongoDB's query planner chooses among index scans and collection scans, and how those choices perform as predicate selectivity changes. It does not study aggregation pipelines or transactions. Although the paper includes “4.2 Single Index Scenario” as one of its own experiment headings, that is the paper's section number, not the project's subsection number.

### Important content by exact paper location

#### Abstract (arXiv PDF p. 1; Springer chapter abstract)

The authors describe MongoDB's First Past the Post (FPTP) optimizer as partially running candidate plans in a round-robin trial, then choosing based on the work performed relative to records returned. Their experiments on MongoDB 7.0.1 identify cases where the optimizer chooses an index scan even though a collection scan would be faster.

Short exact excerpt: “FPTP has a preference bias.”

#### §2.4 — “Optimizer Implementation and Use” (arXiv PDF p. 2)

This background subsection reviews optimizer architecture and points to prior work on using cost-estimation tools to recommend physical structures, including indexes. Use it only as background for the broader problem of index selection. The directly relevant cited studies are listed below under **Follow-up references cited by this paper**.

#### §§2.8–2.9 — Execution-plan generation and MongoDB's FPTP optimizer (arXiv PDF pp. 3–5; see Figure 2 and Table 1)

The paper explains how query shapes lead to candidate plans, including alternatives that access data through a collection scan or available indexes. FPTP tests candidate plans in a round-robin race and scores the trial using results per unit of work, small tie-break bonuses, and an end-of-file bonus. The winning candidate then runs to completion. These implementation details describe the MongoDB 7.0.1 system the authors studied; do not assume that undocumented parameters or defaults remain unchanged in later releases.

#### §3 — “Evaluation Methodology” (arXiv PDF pp. 5–7)

The authors compare the actual plan chosen by MongoDB with the measured fastest plan among the alternatives, varying predicate selectivity and summarizing both plan-choice accuracy and slowdown relative to the best plan. Their workload is a conjunction of two range predicates over fields A and B in one collection.

##### §3.1 — “Testing Setup” and §3.2 — “MongoDB Setup and Database Content” (arXiv PDF pp. 5–6)

The experiments use MongoDB 7.0.1 on one Amazon EC2 m6i.large instance, with 16 GB RAM and gp3 storage. The collection has 100,000 documents with two integer-valued fields, A and B; the main reported data uses uniform distributions without repeated values. The authors use `cursor.explain()` with `allPlansExecution` to inspect candidate plans and statistics, and disable the plan cache for the experimental analysis. The paper states that all tested indexes fit in memory.

#### §4.1 — “Querying Indexed Collections” (arXiv PDF p. 8; Figure 4)

With separate indexes on both queried attributes, the authors compare `IXSCAN_A`, `IXSCAN_B`, and `COLLSCAN`. MongoDB's optimizer tends to choose the index for the more selective predicate, so it can choose effectively between the two index scans. However, in the tested setup it never selects a collection scan, even where a collection scan is the measured fastest plan. The paper reports plan-choice accuracy just under 34%, an average impact factor of 1.7 (about 70% slower than the best plan on average), and some selected plans more than three times slower than a collection scan.

#### Paper §4.2 — “Single Index Scenario” (arXiv PDF pp. 8–9; Figure 5)

With an index only on field B, the optimizer again does not select a collection scan in the reported tests. The authors find that a collection scan is the fastest plan when more than about 20% of records satisfy the B range predicate. In this scenario, the reported plan-choice accuracy is 19%; average slowdown is 140%, and some cases are over 400% slower than the best plan. These results are specific to the paper's query, data, and software configuration.

#### Paper §4.3 — “Covering Index Scenario” (arXiv PDF pp. 9–10; Figure 6)

The experiment adds a covering compound index on `(A,B)` alongside the individual indexes. A covering plan is fastest for many tested selectivity combinations, and the optimizer favors that covering index over a single-field index on A. It still misses cases where a collection scan is fastest. The paper reports about 54% plan-choice accuracy and an average performance impact of about 20% in this scenario.

#### Paper §4.4 — “Evaluation Summary” (arXiv PDF p. 10)

The authors summarize the repeated pattern as a bias toward index scans over full collection scans, even in some cases where the latter is much faster. This is the clearest compact location to cite when stating the study's overall finding.

#### §5 — “Why does MongoDB's FPTP Optimizer Avoid Collection Scans?” (arXiv PDF pp. 10–11; §§5.1–5.2 and Figures 7–9)

By examining MongoDB 7.0.1 planner code, the authors report that a collection-scan candidate is not normally generated when a matching index is available, unless a collection scan is explicitly requested or otherwise required. They then modify the system to include collection scans in the candidate race. Even after adding that candidate, the optimizer sometimes favors an index scan. Their analysis attributes this partly to the trial's logical work-unit accounting, which fails to represent the full cost of fetching documents after index access. This is a version-specific source-code analysis, not a claim about every later MongoDB release.

#### §6 — “Conclusions” (arXiv PDF p. 12)

The authors reiterate the index-scan preference issue and identify broader schemas and more complex queries as future work. They explicitly present the study as an initial evaluation and call for more work on optimizer behavior and scoring.

### Evidence quality and limitations

- **Strength:** refereed database conference paper, with its final citation and DOI verified on the publisher page; the study measures actual runtimes against alternative plans instead of relying only on the optimizer's own scores.
- **Version boundary:** experiments and planner-code explanations concern MongoDB 7.0.1. The MongoDB manual page already recorded above is current version 9.0 documentation, so do not transfer the paper's implementation findings to the current release without checking or reproducing them.
- **Workload boundary:** a single collection, two integer fields, simple two-range conjunctive filters, and uniform distinct values in the main reported experiments. It does not test aggregation pipelines, disjunctions, joins/lookups, or a broad set of document schemas.
- **Hardware/data boundary:** one machine; all indexes fit in RAM. The study does not establish universal performance consequences for production databases, concurrent workloads, or datasets larger than memory.
- **Use in the review:** use the paper to show that an index can be a poor access path for low-selectivity filters and that index availability alone does not guarantee the fastest plan. Do not use it to claim that indexes generally harm MongoDB performance or that current versions retain the same planner behavior.

### Follow-up references cited by this paper

These references are worth screening for a broader account of index selection. They are not MongoDB-specific performance results, and their inclusion here does not mean their full text has been reviewed.

1. S. Chaudhuri, M. Datar, and V. Narasayya, “Index Selection for Databases: A Hardness Study and a Principled Heuristic Solution,” *IEEE Transactions on Knowledge and Data Engineering*, vol. 16, pp. 1313–1323, 2004. DOI: https://doi.org/10.1109/TKDE.2004.75. Cited in the arXiv preprint's §2.4 and reference [22]; listed as reference [7] on Springer.
2. S. Chaudhuri and V. Narasayya, “AutoAdmin ‘What-if’ Index Analysis Utility,” *ACM SIGMOD Record*, vol. 27, pp. 367–378, 1998. DOI: https://doi.org/10.1145/276305.276337. Cited in the arXiv preprint's §2.4 and reference [21]; listed as reference [8] on Springer.

### Reference entry for the shared bibliography

D. Tao, E. Liu, S. Randeni Kadupitige, M. Cahill, A. Fekete, and U. Röhm, “First Past the Post: Evaluating Query Optimization in MongoDB,” in *Databases Theory and Applications: 35th Australasian Database Conference, ADC 2024*, Lecture Notes in Computer Science, vol. 15449, pp. 99–113. Singapore: Springer, 2025. doi: 10.1007/978-981-96-1242-0_8. Available: https://doi.org/10.1007/978-981-96-1242-0_8. Open preprint: https://arxiv.org/abs/2409.16544.

---

## Aggregation

## Source 3

### Title

Aggregation Pipeline Optimization

### Publisher and source type

MongoDB, Inc.; current MongoDB Database Manual, version 9.0 documentation.

### Source link

- Main page: https://www.mongodb.com/docs/manual/core/aggregation-pipeline-optimization/
- Related manual pages are linked in the relevant notes below.

### Accessed

October 9, 2026.

### Scope and relevance

This page explains MongoDB's aggregation-pipeline rewrite and coalescence optimizations, slot-based execution conditions, and the ways indexes can support pipeline stages. It is the primary vendor reference for the aggregation mechanisms discussed in project Section 4.2. It describes documented product behavior; it is not an independent benchmark. The page cautions that optimizer behavior can change between releases.

Short exact excerpt: “Optimizations are subject to change between releases.”

### Exact page locations and useful content

#### Introduction — “Aggregation Pipeline Optimization” (page lines 43–53)

The manual says the pipeline has an optimization phase that can reshape the submitted stages. It recommends `explain` to inspect the transformed pipeline and flags that rewrites may vary by release. This supports a brief explanation that MongoDB can transform pipelines automatically; when reporting current behavior, cite the relevant server version and check the corresponding manual version.

#### “Projection Optimization” and “`$project` Stage Placement” (page lines 54–62)

MongoDB tracks which document fields are needed and can reduce the fields passed through the pipeline automatically. The manual therefore advises that `$project` is generally placed at the end to shape returned results; inserting it early solely to reduce intermediate field traffic is unlikely to help because the server performs that optimization. Use this to discuss projection without repeating a common but potentially ineffective manual-tuning assumption.

#### “Pipeline Sequence Optimization” (page lines 63–193)

The optimizer can reorder stages or portions of their work when doing so preserves the result and dependencies permit it. The exact subsections are:

- **“(`$project` or `$unset` or `$addFields` or `$set`) + `$match` Sequence Optimization” (lines 64–122):** independent `$match` predicates can move before projection/computation stages. Predicates that rely on computed values must remain after the relevant computation. The example shows an independent name filter moved to the start, where it may use an index (lines 96–122).
- **“Computed Field + `$match` Sequence Optimization” (lines 123–147; marked new in version 9.0):** when the computed expression does not depend on earlier stages, MongoDB may move the computation together with its filter ahead of expensive stages such as `$lookup`. The manual notes this rewrite can change output field order (lines 137–147).
- **“`$sort` + `$match` Sequence Optimization” (lines 148–161):** a following `$match` can move before `$sort`, reducing the number of documents to sort.
- **“`$redact` + `$match` Sequence Optimization” (lines 162–177):** MongoDB may add a safe portion of a later filter before `$redact`; if it reaches the pipeline start, an index may help limit input documents.
- **“`$project`/`$unset` + `$skip` Sequence Optimization” (lines 178–193):** `$skip` can move ahead of projection/unset because the projection does not change how many documents are in the stream.

These are examples of dependency-aware rewrites, not a blanket rule that users should manually reorder every stage. The manual's `explain` output is the recommended way to check the actual optimized pipeline.

#### “Pipeline Coalescence Optimization” (page lines 194–319)

Where stage semantics allow, MongoDB can combine adjacent stages to reduce work or intermediate results. The useful subsections are:

- **“`$sort` + `$limit` Coalescence” (lines 197–232):** the limit can be incorporated into the sort when no intervening stage changes the number of documents. This lets the sort retain only the required top results. With `$skip` between sort and limit, the limit is adjusted by the skip amount.
- **“`$limit` + `$limit` Coalescence” (lines 233–245):** consecutive limits reduce to the smaller limit.
- **“`$skip` + `$skip` Coalescence” (lines 246–258):** consecutive skips combine into one skip equal to their sum.
- **“`$match` + `$match` Coalescence” (lines 259–271):** consecutive matches can combine into one filter with both conditions.
- **“`$lookup`, `$unwind`, and `$match` Coalescence” (lines 272–319):** when `$unwind` expands the array produced by `$lookup`, the stages may be combined; a following match on that joined array may also be pushed into the lookup. The manual explains that this avoids materializing large intermediate documents and shows how the optimized form appears in `explain`.

#### “Slot-Based Query Execution Engine Pipeline Optimizations” (page lines 320–360)

The manual documents conditions under which selected pipeline stages can run in the slot-based query execution engine (SBE), and says `explain` can confirm the chosen execution path. It distinguishes two version-sensitive cases:

- **“`$group` Optimization” (lines 330–344; available starting in 5.2):** SBE may execute `$group` when it is first or when all preceding stages are also eligible. The execution plan reports a `GROUP` stage when this path is used.
- **“`$lookup` Optimization” (lines 345–360; available starting in 6.0):** equality lookup may use SBE if preceding stages qualify and listed exclusions do not apply, including a foreign-collection pipeline, numeric path components, or a view/sharded collection. The plan reports `EQ_LOOKUP` when applicable.

These subsections are useful for version-aware descriptions of execution engines, but avoid implying every aggregation runs in SBE.

#### “Improve Performance with Indexes and Document Filters” (page lines 361–410)

This is the central passage for connecting the aggregation topic with the index-type notes earlier in this file:

- **“Indexes” (lines 364–402):** indexes on the input collection can reduce the documents processed and may cover a stage query. The page's `$match`–`$sort`–`$group` example describes how indexes can help identify matching records, provide sort order, and in a specific `$first`/`$last` case supply grouping values. It recommends inspecting `explain` for `IXSCAN` or `DISTINCT_SCAN` (lines 366–378).
- **Stage conditions for index use (lines 380–402):** an initial `$match` may use an index after optimizer rewrites; `$sort` may use an index if it is not preceded by `$project`, `$unwind`, or `$group`; `$group` can use an index for `$first`/`$last` only when sorting and grouping use the same field and those are the only accumulators. `$geoNear` requires a geospatial index. Later `$lookup`, `$graphLookup`, and `$unionWith` stages may use indexes on the other collections they access.
- **“Document Filters” (lines 403–410):** restrict the input early using stages such as `$match`, `$limit`, or `$skip`; when possible, put `$match` first so it can use an index. An initial `$match` followed by `$sort` can use an index as a regular query with sorting would.

This section supports a carefully qualified point: aggregation can benefit from indexes, but index use depends on the stage position, preceding stages, and query plan.

#### “Example — `$sort` + `$skip` + `$limit` Sequence” (page lines 411–437)

The example shows the optimizer coalescing sort and limit while retaining skip, increasing the internal limit by the skipped count. It is a compact illustration of the broader coalescence rule above; cite it when an example would make the mechanism clearer.

### Extracted source text and interpretation

The exact page title and section headings are retained as written, with one short direct excerpt. The explanatory notes are faithful summaries with the manual's subsection names and page line locators; they are not a verbatim copy of MongoDB's examples or prose. MongoDB's documentation is authoritative for its own implementation, but performance implications should be corroborated with empirical studies where the paper makes broader or comparative claims.

### How this source can support project Section 4.2

Use the page to explain (1) automatic, dependency-aware pipeline rewrites; (2) coalescence that limits intermediate work; (3) the conditions under which indexes can assist early pipeline stages or later collection lookups; and (4) how `explain` can verify the selected plan and rewrites. Keep version labels visible for features marked as introduced in MongoDB 5.2, 6.0, or 9.0. Pair these product facts with independent results before claiming a measured speedup or comparing MongoDB with another system.

### Reference entry for the shared bibliography

MongoDB, Inc., “Aggregation Pipeline Optimization,” *MongoDB Database Manual*, version 9.0. Available: https://www.mongodb.com/docs/manual/core/aggregation-pipeline-optimization/ (accessed Oct. 9, 2026).

---

## Source 4

### Title

MongoDB Aggregation Pipeline Performance: Analysis of Query Plan Selection and Optimizer Behavior Across Versions and Collection Scales

### Author

Rosen Ivanov.

### Publication

Peer-reviewed version published in *Information*, vol. 17, no. 5, article 488, 2026. DOI: 10.3390/info17050488. The article page identifies the publication as open access. The full publisher page could not be fetched during this review, so the detailed section and page locators below were checked against the author's openly accessible preprint version, which Preprints.org identifies as having a peer-reviewed version published in *Information*.

### Source links

- Published journal article: https://www.mdpi.com/2078-2489/17/5/488
- DOI: https://doi.org/10.3390/info17050488
- Full-text preprint used to verify locators: https://www.preprints.org/frontend/manuscript/38420657351e2c0e0b176e91f0effa99/download_pub
- Preprint record and publication-version notice: https://www.preprints.org/manuscript/202603.2514
- Supplementary code, data files, and materials: https://www.preprints.org/manuscript/202603.2514 (see “Supplementary Materials”)

### Version and locator note

The journal page was the resource open in the browser. Its indexed article record confirms the title, journal issue, DOI, and main findings, but the page itself returned a rate-limit response when opened. Exact section and page locators below therefore refer to the openly accessible 31 March 2026 preprint PDF. Page numbers mean the numbers printed on the article pages (the PDF has a cover before numbered article page 2). Confirm page numbering and any textual changes against the final journal PDF before using page numbers in a submitted manuscript; section names and table numbers are recorded to make cross-checking straightforward. The preprint states that it is not peer reviewed and that a peer-reviewed version was subsequently published.

### Relevance to project Section 4.2

This is the main empirical source collected so far for the **aggregation** part of project Section 4.2. It examines interactions between (1) First Past the Post (FPTP) physical plan selection and (2) the Pipeline Optimizer's structural rewrites. It is also relevant to indexing because several tests compare single-field and compound indexes, index-provided sorting, Equality–Sort–Range (ESR) index order, and low-selectivity index scans. It extends the earlier Tao et al. study in this file from simple `find()` predicates to selected aggregation pipelines and MongoDB 8.2.5. It does not cover transactions.

Short exact excerpt: “The Pipeline Optimizer applies the same transformations in both versions without exception.”

### Important content by exact paper location

#### Abstract (preprint printed article p. 2; journal abstract)

The study tests nine aggregation patterns using a synthetic e-commerce collection, compares MongoDB 6.0.3 and 8.2.5, repeats runs with the plan cache cleared, and scales the data beyond the 50K-document baseline. The abstract highlights low-selectivity index-scan preference, document-stream multiplication after `$unwind`, and the planner's lack of awareness of `$group` output cardinality. It also reports that most tested workloads improve on 8.2.5, while one unbounded `$match` + `$project` workload regresses. Treat all figures as workload-specific.

#### §1 — “Introduction” (preprint printed article pp. 2–4)

The author distinguishes the trial-based FPTP plan selector from the rule-based Pipeline Optimizer. In the paper's model, early cursor-stage operations such as `$match`, `$sort`, and `$limit` can participate in index access and plan selection; later operators such as `$group`, `$unwind`, and `$lookup` may execute beyond the part of the pipeline considered during the FPTP trial. The introduction also explains the relevance of SBE to trial metrics. These architectural claims are the author's account of the tested MongoDB versions and should be paired with current MongoDB documentation when describing present implementation behavior.

#### §2 — “Related Work” (preprint printed article pp. 4–5)

This section places the study in the literature on MongoDB plan selection, indexing, and learned query optimization. It identifies Tao et al. (already documented as Source 2 above) as the closest prior work, and states that the present paper extends that study to aggregation pipelines, which Tao et al. did not test. It also points to Nuriev et al.'s MongoDB index-optimization study; that article is listed below as a follow-up source to screen rather than as a finding independently verified here.

#### §3.1 — “Database Description” (preprint printed article pp. 5–6; Tables 1–2)

The experiment uses a synthetic orders collection with 50,000 documents and runs MongoDB 6.0.3 and 8.2.5 locally. Table 1 describes order, customer, product, category, status, region, quantity, price, discount, date, and tag fields. Table 2 lists eight indexes: six single-field indexes and two compound indexes, including an ESR-compatible index and an ESR-covering index. The paper defines ESR as equality fields first, sort field next, and range fields last. Its results therefore test a deliberately designed set of indexes and should not be read as a comparison of all possible MongoDB index configurations.

#### §3.2 — “Metrics” (preprint printed article p. 6; Table 3 onward)

The study records `Advanced`, `Works`, and `Score` for candidate plans. It explains that blocking operations such as `$group` and an in-memory `$sort` may return no results during the trial, leaving FPTP without a productivity signal. For SBE-executed pipelines, `Works` may also be unavailable in the tested version. This can leave candidate choice dependent on scores or tie-breaking rather than a clear measured productivity difference. This is useful for explaining why a short trial may not rank blocking aggregation plans reliably.

#### §3.3 — “Experimental Results” (preprint printed article pp. 6–14; Tests 1–9 and Tables 3–10)

The author evaluates nine different pipeline shapes. The most useful findings for Section 4.2 are:

- **Test 2 — `$match` on status and region (Table 3, preprint printed article p. 7):** a compound index covering both predicates is selected over separate single-field indexes in the tested case. This illustrates how one index can serve a multi-field filter more directly than single-field alternatives.
- **Test 3 — `$match` followed by `$group` (Table 4, preprint printed article pp. 7–8):** when candidate scores tie around a blocking `$group`, the study reports that the selected plan may depend on candidate order, despite one compound index covering more of the filter. This is evidence about the limitations of the measured plan-selection signal, not proof that compound indexes are generally ignored.
- **Test 4 — Top-N `$match` + `$sort` + `$limit` (Table 5, preprint printed article p. 8):** a descending index can supply the requested sort and let execution stop after the limit is reached, avoiding a blocking in-memory sort in this workload.
- **Test 5 — `$match` + `$unwind` + `$group` + `$sort` + `$limit` (Table 6, preprint printed article p. 9):** `$unwind` expands the input stream before grouping, becoming the main source of work. The optimizer does not reorder the later blocking stages in this example.
- **Test 6 — ESR compound index (Table 7, preprint printed article pp. 9–10):** the index combining equality fields and the requested sort field supports filtering, index-provided ordering, and early termination in the tested Top-N workload.
- **Test 7 — low-selectivity index-scan case (Table 8, preprint printed article pp. 10–11):** at an Index Filter Ratio of 0.0001, the reported optimizer behavior differs between 6.0.3 and 8.2.5; 8.2.5 chooses an index scan even though it scans nearly the entire collection. This adds a version comparison to the index-scan preference issue in Source 2. Avoid using this isolated result as a universal planner rule.
- **Tests 8–9 (Tables 9–10, preprint printed article pp. 11–12):** a selective compound filter can produce a clear plan-score advantage, while an index-provided sort with early termination can beat alternatives that need to complete a physical sort before returning rows.

#### §3.4 — “Summary of Results” and §3.4.1 — “Execution Time Analysis” (preprint printed article pp. 13–14; Tables 11–12)

Table 11 reports median timings at 50K documents. Table 12 compares 50K, 150K, and 250K document collections, using 20 measurements per version/size combination with warmups and cache clearing. Under this setup, the index-provided-sort and early-termination cases stay near 1–3 ms as collection size increases. The `$unwind` + `$group` case grows slightly faster than the collection-size increase because each input document may expand into multiple documents. The `$match` + `$project` case is slower in 8.2.5 at each tested size despite an apparently unchanged plan; the author says its cause remains unverified without server profiling.

#### §3.5 — “MongoDB Pipeline Optimizer” (preprint printed article pp. 15–16; §§3.5.1–3.5.2 and Table 13)

This section distinguishes the Pipeline Optimizer's rewrite of stage order from FPTP's choice of physical access path. It describes predicate pushdown, index-provided sorting, and limit-based early termination. Table 13 compares original and optimized stage sequences across the nine tests. The examples show that some pipelines collapse into a cursor using an index-provided sort, while `$unwind` and `$group` can constrain subsequent stage movement. The paper uses `explain("queryPlanner")` to inspect rewrites. Its statement that rewrites were identical in the two tested versions applies to this test set, not every pipeline or release.

#### §3.6 — “Effect of Data Distribution on FPTP Behavior” (preprint printed article pp. 16–17)

The author repeats tests with a skewed 50K-document distribution. Plan choices remain stable for several tests, while absolute execution times change substantially for workloads whose stream size depends on value frequencies. This supports reporting both plan behavior and data distribution when comparing results; timings on uniform synthetic data should not be transferred directly to production workloads.

#### §3.7 — “Limitations” (preprint printed article p. 17)

The author identifies three main limitations: only nine patterns on one collection with a fixed schema; no verification across different cardinalities, nested documents, `$lookup`, `$facet`, or window functions; and isolated single-threaded tests on one physical machine. The paper also cautions that uniform-data timings may not represent production data with dominant values.

#### §4 — “Conclusions” (preprint printed article pp. 17–18)

The conclusion synthesizes the distinction between FPTP physical plan choice and rule-based pipeline rewriting. It highlights early selective filtering before expansion, managing `$unwind` growth, and not assuming the optimizer can infer `$group` output cardinality or reorder later Top-N stages. The author proposes future tests of the observed projection regression, unsupported operators, and concurrent workloads.

### Evidence quality and cautions

- **Publication status:** the final journal article is peer reviewed, but the full journal page could not be opened during this check. The detailed locators above refer to the preprint version, so compare the final version before quoting page numbers in the manuscript.
- **Experimental scope:** nine synthetic pipeline patterns, one schema, one physical machine, and MongoDB 6.0.3 and 8.2.5. The results are useful as case-based evidence, not universal performance estimates.
- **Internal count inconsistency:** §3.4 and Table 11 indicate FPTP is active for six of nine tests; §4 states that it activates in five of nine. Do not repeat the overall count without resolving this discrepancy in the final journal text or supplementary data.
- **Interpretation:** keep optimizer behavior distinct from measured runtime. Some version comparisons change both server version and execution engine behavior; they do not isolate a single cause.
- **Claim to avoid:** do not state that index-provided sorts or ESR indexes always yield constant time. The study observes that behavior for selected fixed-limit workloads and its tested data sizes.
- **Reproducibility:** the preprint points to code and raw result files in supplementary materials. Check those materials before relying on individual timing values, especially when a reported summary conflicts with the tables or across versions.

### Follow-up references cited by this article

1. D. Tao, E. Liu, S. Randeni Kadupitige, M. Cahill, A. Fekete, and U. Röhm, “First Past the Post: Evaluating Query Optimization in MongoDB,” already recorded as Source 2 above. This is the directly complementary MongoDB plan-selection study.
2. M. Nuriev, R. Zaripova, O. Yanova, I. Koshkina, and A. Chupaev, “Enhancing MongoDB Query Performance through Index Optimization,” *E3S Web of Conferences*, vol. 531, art. 03022, 2024. DOI: https://doi.org/10.1051/e3sconf/202453103022. The article is relevant to index selection and profiling; screen its experimental method and venue fit before using its performance claims.

### Reference entry for the shared bibliography

R. Ivanov, “MongoDB Aggregation Pipeline Performance: Analysis of Query Plan Selection and Optimizer Behavior Across Versions and Collection Scales,” *Information*, vol. 17, no. 5, art. 488, 2026. doi: 10.3390/info17050488. Available: https://doi.org/10.3390/info17050488. Preprint: https://doi.org/10.20944/preprints202603.2514.v1.

## Transactions

## Source 5 — MongoDB transaction production considerations

### Source details

- **Title:** “Production Considerations”
- **Publisher:** MongoDB, Inc., *MongoDB Database Manual*, version 9.0 (identified by the documentation site as the current manual version when checked)
- **URL:** https://www.mongodb.com/docs/manual/core/transactions-production-consideration/
- **Accessed:** 9 October 2026
- **Scope:** Operational behavior and restrictions for multi-document transactions on replica sets and sharded clusters. This is primary vendor documentation, not an independent benchmark or peer-reviewed evaluation.
- **Locator convention:** The line ranges below refer to the rendered page lines retrieved from the linked manual page. They identify the exact section locations; line numbering may change when MongoDB revises the page. The section headings and examples can be located directly on the page.

### Relevance to project Section 4.2

This source is useful for explaining the operational trade-offs of MongoDB transactions: deployment prerequisites, runtime and lock limits, cache pressure, contention with writes and DDL, snapshot staleness, and interactions with sharding. It complements the indexing and aggregation material above by documenting transaction behavior that can affect workload latency, availability, and operations. Because it is product documentation, use it to describe MongoDB's documented behavior; pair it with independent studies for comparative or measured performance claims.

### Important content by exact manual location

#### “Production Considerations” introduction (web lines 37–41)

The page covers considerations that apply to transactions on replica sets and sharded clusters, and directs readers to a separate page for additional sharded-cluster-specific guidance. For Section 4.2, use this page for shared transaction behavior and consult the linked sharded-cluster page before making claims specific to distributed transactions.

#### “Availability” (web lines 42–53)

The manual says transactions are unsupported on standalone deployments; a multi-node replica set is required. It documents multi-document transactions on replica sets and sharded clusters. The page also treats “distributed transactions” and “multi-document transactions” as synonymous terminology for these deployment contexts. This matters when describing MongoDB transaction support: the topology is a prerequisite, rather than a feature available on every deployment configuration.

#### “Feature Compatibility” (web lines 54–69)

The page gives minimum feature compatibility versions of 4.0 for replica sets and 4.2 for sharded clusters. These are version-specific requirements from the current manual page, not general timeless requirements. Recheck the deployment's server version and FCV before using these numbers as current setup advice.

#### “Runtime Limit” (web lines 70–76)

The documented default transaction lifetime is less than one minute. The manual names `transactionLifetimeLimitSeconds` as the setting for changing this limit and notes that, on sharded clusters, it must be configured on all shard replica-set members. A periodic cleanup process aborts transactions that have exceeded the limit. For sharded deployments, the page also describes `maxTimeMS` on `commitTransaction`. These controls make transaction duration and commit timing operational considerations; avoid presenting the default as a guarantee that every transaction will complete within one minute.

#### “Oplog Size Limit” (web lines 77–79)

The manual explains that a transaction's writes may be represented by multiple oplog entries instead of one entry for the whole transaction. This removes the former single-entry 16 MB aggregate constraint, while the BSON size limit of 16 MB still applies to each individual oplog entry. Keep the distinction between the transaction's combined write set and each oplog record clear.

#### “WiredTiger Cache” (web lines 80–95)

The manual recommends explicitly aborting transactions that are no longer needed and aborting/retrying a transaction after an individual operation errors. The lifetime cleanup also helps release cache pressure from expired transactions. Excessive pressure from an uncommitted transaction can result in an abort with a write-conflict error; a transaction too large to fit in the WiredTiger cache aborts with `TransactionTooLargeForCache`. This section supports a practical point for the paper: long-lived or oversized transactions can consume storage-engine resources and fail, so transaction scope and retry handling matter.

#### “Transactions and Security” (web lines 96–100)

When access control is enabled, the executing identity needs privileges for the operations performed in the transaction. If auditing is enabled, operations from an aborted transaction remain in the audit log, but the page says there is no audit event specifically identifying the abort. This is relevant to authorization and audit interpretation, rather than a performance result.

#### “Shard Configuration Restriction” and “Sharded Clusters and Arbiters” (web lines 101–108)

The manual rules out transactions on a sharded cluster if a shard has `writeConcernMajorityJournalDefault` set to `false`, giving a shard with a voting in-memory-storage-engine member as an example. It also documents restrictions involving arbiters: a transaction cannot change a shard key when the replica set has an arbiter, and a transaction spanning multiple shards aborts if it reads from or writes to a shard containing an arbiter. These are deployment-design constraints to check before relying on transactions in a sharded architecture.

#### “Acquiring Locks” and “Lock Request Timeout” (web lines 109–125)

The page documents a default wait of 5 milliseconds for a transaction to obtain the locks it needs; failure to obtain them within that interval aborts the transaction. It states: “Transactions release all locks upon abort or commit.” When a collection is created or dropped immediately before a transaction and then used inside it, the manual advises issuing that DDL operation with majority write concern so the transaction can acquire its locks.

The child section “Lock Request Timeout” describes `maxTransactionLockRequestTimeoutMillis`. Increasing the wait may prevent aborts caused by short-lived concurrent lock acquisition, but can also delay aborting deadlocked operations. The cited wait values and parameter behavior are documentation defaults/configuration details; verify them against the MongoDB release and deployment being discussed.

#### “Pending DDL Operations and Transactions” (web lines 126–141)

An in-progress multi-document transaction can make a DDL operation on the same database or collection wait. While that DDL request is pending, new transactions needing the affected namespace may wait for locks and then abort after the configured lock-request timeout; non-transaction operations on the same namespace can block until their `maxTimeMS` limit. The examples distinguish collection-level effects (such as `createIndex`) from a database-level lock (such as a cross-database `renameCollection`). The manual notes that unrelated collections can remain unaffected in the collection-lock example. This is useful evidence that DDL contention depends on lock scope and namespace overlap, not simply on a transaction being active anywhere in the deployment.

#### “In-progress Transactions and Write Conflicts” (web lines 151–160)

If an outside write changes a document that an in-progress transaction later tries to modify, the transaction aborts with a write conflict. Conversely, if the transaction has taken a lock to modify that document, an outside write to it waits until the transaction ends. This provides a concise source for explaining how concurrent transactional and non-transactional writes can cause retries or waiting.

#### “In-progress Transactions and Stale Reads” (web lines 163–225)

The page warns that reads within a transaction can use an earlier snapshot and are not guaranteed to reflect writes committed by other transactions or non-transactional operations after that snapshot. Its example shows a transaction reading a document that an outside operation has since deleted. For a single document, the page describes using `findOneAndUpdate()` to obtain a write lock and ensure an up-to-date read. It also states that if any transaction operation fails, the transaction aborts and its changes are discarded without becoming visible. Present this as the documented snapshot/locking behavior and avoid implying that every transaction read is stale.

#### “In-progress Transactions and Chunk Migration” (web lines 226–240)

Chunk migration uses exclusive collection locks during certain stages. If a transaction holds a lock on a collection involved in migration, those migration stages wait; if the migration and transaction interleave in the documented way, the transaction can fail at commit and abort. This is relevant to cross-shard operational planning, especially where migration activity and long-running transactions overlap.

#### “Outside Reads During Commit” (web lines 241–248)

During a transaction commit spanning multiple shards, outside reads using `snapshot` or `linearizable` read concern, and causally consistent reads carrying `afterClusterTime`, wait until the transaction's writes are visible. Reads using other read concerns do not wait for all writes to become visible and may return the pre-transaction versions. This section is useful when discussing the visibility/latency trade-off around multi-shard commits; keep the read-concern conditions explicit.

#### “Additional Information” (web lines 249–257)

The page links to “Production Considerations (Sharded Clusters)” for details specific to sharded deployments. That companion page should be checked before writing a complete account of sharded transaction behavior; this source alone does not exhaust all sharding-specific considerations.

### Evidence quality and cautions

- This is primary documentation from MongoDB and is valuable for the product's documented rules and operational guidance. It is not a controlled comparison or evidence that a given transaction workload performs better than another database.
- Defaults and compatibility requirements can change by release or deployment type. The page was identified as MongoDB Database Manual 9.0; recheck the live manual before using values such as the one-minute lifetime and 5-millisecond lock wait in a present-day recommendation.
- Do not generalize a restriction that applies to sharded clusters to replica sets, or vice versa. Keep topology, read concern, write concern, and lock scope attached to the claim.
- When discussing transaction cost or throughput, add empirical studies or workload measurements; this page documents behavior but does not quantify comparative performance.

### Reference entry for the shared bibliography

MongoDB, Inc., “Production Considerations,” *MongoDB Database Manual*, version 9.0. Available: https://www.mongodb.com/docs/manual/core/transactions-production-consideration/ (accessed 9 October 2026).

## Source 6 — Kamsky: adapting TPC-C to measure MongoDB multi-document transactions

### Source details

- **Title:** “Adapting TPC-C Benchmark to Measure Performance of Multi-Document Transactions in MongoDB”
- **Author:** Asya Kamsky, MongoDB Inc.
- **Publication:** *Proceedings of the VLDB Endowment*, vol. 12, no. 12, pp. 2254–2262, 2019.
- **DOI:** https://doi.org/10.14778/3352063.3352140
- **Paper PDF:** https://www.vldb.org/pvldb/vol12/p2254-kamsky.pdf
- **Implementation:** https://github.com/mongodb-labs/py-tpcc
- **Accessed:** 9 October 2026
- **Locator convention:** Page numbers below are the printed PVLDB page numbers, not browser-extracted line numbers. The paper PDF was open in the browser. The PDF endpoint timed out in text retrieval, so the section locators and full-text details were cross-checked against an indexed copy of the same paper; use the original PVLDB PDF as the authoritative version when checking a quotation or figure. The notes below summarize the paper rather than reproduce its prose.

### Relevance to project Section 4.2

This is an empirical, MongoDB-specific study about transaction performance, schema design, and implementation choices in an adapted OLTP workload. It is directly relevant to the Transactions subsection and also connects to the file's existing material on document modeling and indexes. It offers concrete evidence that transaction throughput depends on how a workload is modeled and implemented, rather than being a fixed property of the database engine.

The evidence is deliberately narrow: the study uses a 2019 MongoDB 4.0 deployment on a single replica set and a modified TPC-C workload. It is not an official TPC-C-certified result, a comparison with relational databases, or an evaluation of sharded transactions. Treat its performance results as case-study findings under the reported setup.

### Important content by exact paper location

#### Abstract and §1 — “INTRODUCTION” (printed pp. 2254–2255)

Kamsky motivates the work as a way to create a repeatable transaction-performance baseline for detecting regressions and improvements during MongoDB development. The paper adapts TPC-C, a commerce OLTP benchmark designed around a normalized relational schema and SQL, because the author found a shortage of suitable general transaction benchmarks for document databases. The adaptation seeks to retain TPC-C's workload and correctness requirements while using MongoDB's query language and document-model practices.

The abstract reports the central result: a document schema designed around MongoDB best practices performed better than the required normalized schema in the tested workload. The paper explicitly did not seek to produce official, certifiable TPC-C results. Short excerpt: “following best practices for document schema design achieves better performance than using required normalized schema.”

The introduction also cautions that benchmark results are workload-specific and can be misapplied when used to judge a different workload. It contrasts the narrow primary-key operations in YCSB with the richer query and transaction behavior being tested here. This supports a useful framing for the review: benchmark choice and workload design affect what a performance result can establish.

#### §2 — “RELATED WORK” (printed p. 2255)

The author discusses the lack of benchmark coverage for multi-document transactions in document stores. The section notes that primary-key-focused workloads such as YCSB do not exercise the broader query patterns required by TPC-C, while previous distributed adaptations of TPC-C often retained SQL and relational assumptions or did not preserve all transactional and durability requirements. The paper builds on PyTPCC, a modular Python framework intended to run TPC-C-like workloads against non-relational stores.

#### §3 — “SYSTEM MODEL” (printed pp. 2255–2256)

The system model describes the capabilities and transaction assumptions relevant to interpreting the experiment:

- **§3.1, “MongoDB Query Language”:** MQL provides CRUD operations analogous to the benchmark's required database actions, and the study uses bulk writes where appropriate.
- **§3.2, “MongoDB Indexes”:** the paper notes primary, secondary, compound, and covered-index capabilities and explains that query plans can be inspected. It says special geospatial, text, and partial indexes were not used in this experiment.
- **§3.3, “MongoDB writeConcern”:** the paper uses majority write concern to require acknowledgment after a majority of replica-set members have committed the writes; this was the durability setting for the principal results.
- **§3.4, “MongoDB readPreference”:** applications can choose which replica-set nodes serve reads. The paper tests primary and secondary-oriented preferences, but transaction reads in its setup are constrained to the primary.
- **§3.5.1, “Read Concern”:** the paper describes majority read concern as a way to read data committed to a majority and avoid reading data that could be rolled back after an election.
- **§3.5.2, “Causal Consistency”:** the paper explains why reads directed to different nodes can otherwise appear to move backward in time, and identifies logical sessions as MongoDB's causal-consistency mechanism.
- **§3.6, “MongoDB Transactions”:** transactions use a single point-in-time snapshot for their duration, based on cluster time. They can see their own later writes, while writes made elsewhere after the snapshot began are not visible in that transaction. Changes remain invisible outside the transaction until commit and are discarded on abort. The study uses snapshot read concern and majority write concern for transaction commits.

The paper characterizes the tested transaction behavior as snapshot isolation. Do not equate that term with full serializability: the paper cites separate work on making snapshot isolation serializable, and this benchmark does not establish serializable isolation.

#### §4 — “METHODOLOGY” (printed pp. 2256–2258)

##### §4.1 — “Code we ran” and §4.2 — “Hardware” (§§4.2.1 “Database Hardware” and 4.2.2 “Client Hardware”; printed p. 2256)

The authors extend PyTPCC, which already had an initial MongoDB driver. The database ran as a three-node MongoDB Atlas replica set in one Google Cloud region. The study began with an M80 cluster (reported as 120 GB RAM and 32 vCPUs per node) and also tested M60 (60 GB, 16 vCPUs) and M50 (30 GB, 8 vCPUs) configurations. A same-region GCE n1-highcpu-16 client machine was selected to reduce network latency; the authors report that the client did not appear to be the bottleneck. These are historical cloud configurations, not current instance specifications or pricing.

##### §4.3 — “Configuration” (printed p. 2256)

The managed Atlas server configuration was left at its supplied defaults; no server parameters were changed. Client-side variables included warehouse count, number of client threads, read preference, read concern, write concern, causal consistency, and PyTPCC execution settings. The reported sweep ranges from 4 to 1,000 warehouses and from 1 to 1,000 client threads, with test durations ranging from at least five minutes to more than an hour for a configuration. This breadth does not remove the study's single-replica-set and single-workload limits.

##### §4.4 — “Collecting Measurements” (printed pp. 2256–2257)

After loading the data, the authors ran the benchmark repeatedly while varying configuration combinations. At intervals of at least five minutes, they recorded Tpm-C (new orders per minute), counts of New-Order transactions, aborted transactions and transaction retries, operation counts from client and server, and latency percentiles from minimum through p99 and maximum. They used correctness checks to compare client and server counts. Measurements collected while verification queries were running were excluded because those queries could be unindexed and distort throughput.

##### §4.5 — “PyTPCC Code Modifications” (printed pp. 2256–2257)

- **§4.5.1, “Transaction Support”:** the original framework lacked transaction support. The authors wrapped benchmark transactions with transaction execution and retry logic, while omitting the wrapper for the read-only Stock-Level check because it needed isolation guarantees but did not write data. They retried failures labeled `TransientTransactionError` and recorded retry counts by transaction type.
- **§4.5.2, “Standard MongoDB Options Support”:** connection/authentication, read and write concerns, and read preference were made configurable in the client settings.
- **§4.5.3, “Schema Design”:** the authors rejected the original option that embedded a customer's orders, order lines, and history indefinitely in the customer document because this could grow without bound. Their alternative retained a largely normalized layout but embedded the bounded order-line array inside each order. The rationale was that order lines are commonly retrieved with their order and the line count is fixed after placement. In this workload the modified design used less storage than the normalized version because order-line records did not repeat details already stored on the parent order. The paper reports a performance improvement, attributing it to fewer database round trips. Because this schema departs from TPC-C's prescribed relational structure, it is not eligible as a strictly compliant TPC-C result.
- **§4.5.4, “Optimal Indexes”:** the authors examined plans for the benchmark operations and replaced indexes to match predicate and returned-field requirements, including compound and covered indexes. The final index definitions are in Appendix B. This is useful evidence for the indexing subsection too, but the index set was tuned to this specific TPC-C implementation.
- **§4.5.5, “Reordering and Replacing Operations”:** the authors removed redundant queries and unnecessary work and limited requested fields. Because a write conflict late in a transaction forces earlier work to be repeated, they reordered operations to expose conflicts earlier and moved writes before reads where possible. They also replaced a separate record-selection and update sequence with `findAndModify`, which can return the pre- or post-update document in the same database round trip. The paper reports that this improved performance in its tests.
- **§4.5.6, “Batching Writes”:** order-line inserts and stock updates were accumulated and sent with bulk writes rather than issued one at a time. The reported benefit from batching and `findAndModify` was more pronounced under `{w:1}` than under `{w:"majority"}`. The authors explain this in terms of round-trip reduction having a greater effect when client-to-cluster latency is larger than intra-cluster latency. The principal reported results use majority durability, so do not transfer the weaker-write-concern result to the main configuration.

##### §4.6 — “Verification of Correctness of Results” (§§4.6.1–4.6.6; printed pp. 2257–2258)

This section matters because the paper reports transaction throughput and therefore needs to demonstrate that the benchmark preserved correctness:

- **§4.6.1, “Asserts in Code”:** the benchmark was run with assertions that stopped execution when an operation returned an unexpected value or record count.
- **§4.6.2, “Verification of Consistency”:** scripted checks represented twelve consistency tests from the TPC-C specification and were run after loading and during/after benchmark runs.
- **§4.6.3, “Verification of Atomicity”:** the authors manually ran the atomicity checks specified by TPC-C.
- **§4.6.4, “Verification of Isolation”:** they ran nine isolation tests from the specification.
- **§4.6.5, “Verification of Durability”:** they tested failover by forcing a primary change. With majority write concern, the acknowledged transactions were present after failover, as checked against expected database records and client output. They also report unexpected failovers during managed-service maintenance and checked their effect on results.
- **§4.6.6, “Verification of Metrics Accuracy”:** scripted and manual checks compared client transaction counts with the resulting records and server metrics.

These checks strengthen confidence in the adapted benchmark's own reported correctness, but they do not make it a certified TPC-C result or independently validate the underlying MongoDB implementation.

##### §4.7 — “Results” (printed pp. 2258–2259; Figures 1–4; Appendix A)

The principal results use an M60 replica set, majority write concern, and snapshot read concern for most transactions. The Stock-Level transaction uses majority reads with causal consistency. The paper's main observations are:

- **Figure 1, client threads, warehouse count, and read preference (p. 2258):** throughput rises as client threads increase until the tested setup approaches saturation. At a given thread/warehouse combination, `primary` and `nearest` read preferences show little difference, which the authors attribute to only the Stock-Level operation being eligible to read from secondaries while transaction reads use the primary. This is specific to this workload and deployment.
- **Figure 2, normalized versus modified embedded schema (pp. 2258–2259):** the bounded embedding of order lines in orders improves the measured workload and reduces database size relative to the normalized layout. The authors attribute the benefit to fewer round trips and less repeated data. The study does not show that arbitrary denormalization is beneficial; it specifically warns against embedding unbounded customer history.
- **Figure 3, `findAndModify` versus separate selection and update (pp. 2258–2259):** combining the two operations into one database request improves the tested implementation. Appendix A.2 reports, for M60 and 100 warehouses, 31,549 Tpm-C at 64 threads and 34,385 at 96 threads when both batching and `findAndModify` are enabled; with both disabled, the corresponding figures are 26,959 and 30,427. Because that appendix comparison changes two settings together, treat those values as a combined configuration comparison rather than an isolated estimate of `findAndModify`'s effect.
- **Figure 4, instance sizes and warehouse count (p. 2258):** the paper compares M50, M60, and M80 throughput. Larger instances increase throughput, but it does not rise in proportion to the reported hourly instance cost. The paper's prices (M50 $1.66/hour, M60 $3.29/hour, M80 $6.13/hour) are 2019 Atlas prices and must not be used as current prices or a present-day cost comparison.
- **Warehouse scaling (Figure 1 and Appendix A.1, pp. 2258, 2261):** at higher warehouse counts, the best reported M60 throughput declines in the listed configurations. For example, at 96 threads, the appendix lists 34,385 Tpm-C for 100 warehouses, 26,666 for 300, 22,668 for 500, and 16,406 for 1,000. This is a single-replica-set workload result, not evidence that adding data always lowers MongoDB throughput; the paper itself identifies multi-document coordination as a likely factor, and sharding was not tested.

#### §4.8 — “Future Work” (printed pp. 2258–2259)

The authors identify the main gaps: measuring transactions after extending the benchmark to sharded clusters, scaling to 10,000 or more warehouses, testing whether secondary reads help when client-to-primary latency is much higher than latency to a nearby secondary, automating more of the atomicity/isolation/failover verification, and evaluating other TPC workloads for MongoDB. These are explicitly future directions; the paper does not report results for them.

#### §5 — “CONCLUSIONS” (printed p. 2259)

The conclusion is that directly porting an RDBMS benchmark with only small changes can produce suboptimal results for a document database. The benchmark must be adapted to the target database's data model and practices to measure performance that reflects its intended use. For this review, the key contribution is both the benchmark method and the concrete finding that a carefully bounded document-model change and fewer database round trips improved this particular transaction workload.

#### Appendix A — “RESULTS OF ALL RUNS”; Appendix B — “INDEXES Tables and Indexes”; Appendix C — Atlas cluster costs; Appendix D — sample run output (printed pp. 2261–2262)

Appendix A provides selected best results and configuration comparisons, while noting that the complete run set is in the project repository. Appendix B lists the tested table/index setup and is the most precise locator for reproducing the paper's index choices. Appendix C gives the 2019 Atlas instance costs; Appendix D shows an example of recorded run output, including per-transaction latencies, aborts, retries, write concern, read preference, and other settings. Consult these appendices before reusing a particular value or claiming the benchmark can be reproduced from the article text alone.

### Evidence quality and cautions

- **Peer-reviewed venue, vendor-affiliated author:** the paper appears in PVLDB and is a useful empirical study, but its author was affiliated with MongoDB. Treat it as a vendor-authored benchmark study, and evaluate its design and limitations alongside independent research.
- **Historical version:** this study evaluates MongoDB 4.0 in 2019. It should not be used to describe current MongoDB transaction implementation details without checking current documentation.
- **Deployment scope:** one three-node replica set; no sharded transaction experiments. The results do not establish performance under distributed transactions across shards.
- **Benchmark scope:** adapted TPC-C on PyTPCC, using a modified schema and implementation. The authors explicitly disclaim official TPC-C certification. The modified results cannot be compared as formal TPC-C scores against certified runs.
- **Workload and setup dependence:** the results depend on schema, indexes, Atlas instance size, thread count, warehouse count, read/write concern, and network placement. Report these conditions with any cited performance number.
- **Causality:** changes such as schema embedding, index tuning, batching, and operation consolidation affect round trips and workload costs. Avoid presenting the results as an isolated transaction-engine speedup.
- **Sharding and current pricing:** sharded performance was future work, and listed Atlas hourly costs are historical. Do not use either as evidence about today's behavior or prices.

### Reference entry for the shared bibliography

A. Kamsky, “Adapting TPC-C Benchmark to Measure Performance of Multi-Document Transactions in MongoDB,” *Proceedings of the VLDB Endowment*, vol. 12, no. 12, pp. 2254–2262, 2019. doi: 10.14778/3352063.3352140. Available: https://www.vldb.org/pvldb/vol12/p2254-kamsky.pdf.
