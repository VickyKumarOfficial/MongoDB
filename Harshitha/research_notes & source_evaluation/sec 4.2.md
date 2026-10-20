# Section 4.2 source evaluation

Section: 4.2, Indexing, aggregation, and transactions

## Purpose of this note

This file records which sources in `key_findings/sec 4.2.md` can support the subsection, the claims each source can and cannot establish, and the checks needed before drafting. The companion key-findings file retains the detailed source notes and locators. This evaluation follows the source-screening style used in Vicky's `research_notes&source_evaluation` files. No Study IDs are assigned here.

## Sources screened

### Source 1 — MongoDB Manual: “Index Types”

- **Source type:** Current MongoDB vendor documentation (Database Manual 9.0 when recorded).
- **Decision:** Selected for definitions and feature descriptions.
- **Can support:** The documented types of indexes—single-field, compound, multikey, wildcard, geospatial, hashed, text, and clustered—and the general use cases MongoDB assigns to them.
- **Cannot establish:** Independent performance benefits, universal index-selection advice, or that any one index type is preferable for a given workload.
- **Use in the paper:** Define the index families and explain their intended data/query fit. Pair with empirical work for performance claims and detailed manual pages for limitations.
- **Verification note:** The page is version-sensitive and vendor-authored. Check the current manual and detailed type-specific pages before final submission.

### Source 2 — Tao et al., “First Past the Post: Evaluating Query Optimization in MongoDB”

- **Source type:** Refereed ADC conference paper; open arXiv copy used for detailed locators.
- **Decision:** Selected for empirical evidence about index access paths and plan choice; cross-listed with Section 4.1 because query planning is also in that subsection's scope.
- **Can support:** Under the paper's MongoDB 7.0.1 test setup, examples where FPTP selected an index scan even though a collection scan was faster, and how that behavior changed across tested single-index and covering-index scenarios.
- **Cannot establish:** General index performance, current MongoDB planner behavior, aggregation performance, or transaction behavior.
- **Use in the paper:** Report the workload, version, data, and hardware alongside any numbers. Keep the result framed as query-planner evidence, not as an argument against indexing generally.
- **Verification note:** Final Springer metadata and DOI are recorded in the key-findings file. Check the final proceedings version if quoting exact wording or page numbers.

### Source 3 — MongoDB Manual: “Aggregation Pipeline Optimization”

- **Source type:** Current MongoDB vendor documentation.
- **Decision:** Selected for documented optimizer transformations and operational guidance.
- **Can support:** The manual's descriptions of projection and pipeline-sequence rewrites, stage coalescence, eligible slot-based execution optimizations, and index use in aggregation pipelines.
- **Cannot establish:** Comparative or independent benchmark performance, that every rewrite occurs for every pipeline, or that an optimization produces a particular speedup.
- **Use in the paper:** Explain documented mechanisms and examples, labeling them as MongoDB's implementation guidance. Use measured studies for claims about performance impact.
- **Verification note:** Optimizer behavior can change by server version and pipeline shape. Keep applicability conditions with each claim and recheck the live documentation.

### Source 4 — Ivanov, “MongoDB Aggregation Pipeline Performance: Analysis of Query Plan Selection and Optimizer Behavior Across Versions and Collection Scales”

- **Source type:** 2026 *Information* journal article, with an openly accessible preprint used to check detailed sections and page locations.
- **Decision:** Selected provisionally as an empirical aggregation source; retain the preprint/journal-version distinction recorded in the key-findings file.
- **Can support:** Case-based observations from nine synthetic aggregation patterns, one orders schema, and MongoDB 6.0.3 and 8.2.5, including plan choice, optimizer rewrites, selectivity, `$unwind` growth, and measured execution times under the stated configuration.
- **Cannot establish:** Universal MongoDB aggregation performance, behavior across all schemas/operators/workloads, or a single causal explanation for cross-version differences.
- **Use in the paper:** Present each result with the tested pipeline, data distribution, index, MongoDB version, and measurement conditions. Treat isolated observations as hypotheses or examples, not system-wide rules.
- **Verification note:** The journal page was rate-limited during the earlier check, so detailed locators refer to the preprint. Reconcile wording, pagination, tables, and the reported FPTP count inconsistency against the final journal PDF and supplementary material before manuscript citation.

### Source 5 — MongoDB Manual: “Production Considerations”

- **Source type:** Current MongoDB vendor documentation (Database Manual 9.0 when checked).
- **Decision:** Selected for documented operational behavior of transactions.
- **Can support:** Deployment prerequisites and restrictions, runtime and lock settings, cache-pressure behavior, DDL and write conflicts, stale reads, chunk migration interactions, and read visibility during multi-shard commit as described by MongoDB.
- **Cannot establish:** Independent transaction benchmarks, cross-database comparisons, or quantified throughput/latency effects.
- **Use in the paper:** State topology, read/write concern, lock scope, and relevant version/configuration with each claim. Pair with empirical or systems papers when discussing cost or performance.
- **Verification note:** Values such as the documented transaction lifetime and lock-wait default are release/configuration-sensitive. Recheck the live manual before using them as current recommendations. The page links to a separate sharded-cluster production page that remains to be screened if 4.2 or 4.3 needs its details.

### Source 6 — Kamsky, “Adapting TPC-C Benchmark to Measure Performance of Multi-Document Transactions in MongoDB”

- **Source type:** PVLDB 2019 research paper; author affiliated with MongoDB Inc.
- **Decision:** Selected as a vendor-authored empirical case study for transaction implementation and performance; also relevant to document modelling and indexing.
- **Can support:** The authors' adaptation of PyTPCC, schema/index/query changes, correctness checks, and workload-specific results on MongoDB 4.0 using one three-node replica set.
- **Cannot establish:** Official TPC-C-certified performance, a comparison with relational databases, current-version behavior, or the performance of sharded transactions. The paper explicitly treats sharded testing as future work.
- **Use in the paper:** Keep the setup and modifications attached to reported results. Distinguish the combined effects of schema, indexes, batching, and operation consolidation from a pure transaction-engine effect.
- **Verification note:** The original PVLDB PDF is the authoritative citation. The key-findings note records that detailed extracted text was cross-checked against an indexed copy when the PDF text endpoint timed out. Reopen the original PDF before using exact quotations or relying on a disputed figure/table value.

## Evidence synthesis and remaining needs

The six sources give coverage across indexing, aggregation, and transactions, but the evidence is uneven by type. The MongoDB manuals are primary sources for documented behavior; Tao et al. and Kamsky provide empirical case studies under restricted configurations; Ivanov provides a small synthetic aggregation evaluation whose final journal version and reported count inconsistency still need reconciliation. None of these sources alone supports broad claims that MongoDB is faster or more scalable than other database systems.

Before drafting Section 4.2, verify version-sensitive documentation claims, resolve the preprint/journal locator issue for Source 4, and ensure empirical statements name their workload and configuration. For general comparative performance, add independent studies using comparable workloads and explicit database/version/hardware parameters. Avoid treating Sources 2 or 6 as independent evidence of vendor-neutral performance because of the study context/author affiliation and their narrow setups.

## Intended use

Use Sources 1 and 3 to establish MongoDB's documented index and aggregation behavior; Source 2 to illustrate how query-plan selection can affect indexed access; Source 4 for carefully bounded aggregation observations; and Sources 5–6 for documented transaction operation and a benchmark case study. Keep feature descriptions, experimental observations, and review interpretation clearly separated in the final draft.

## Validation status

- **Sources 1, 3, and 5:** Their relevant content has been recorded from the MongoDB manuals; recheck live pages and release-specific conditions before final submission.
- **Source 2:** Peer-reviewed venue and final bibliographic metadata are recorded; detailed behavior is based on the arXiv PDF and MongoDB 7.0.1 experiments.
- **Source 4:** Empirical notes are recorded from the preprint; verify against the final journal text and supplementary files.
- **Source 6:** Publication metadata and paper locators are recorded; recheck original PDF for exact quotations and Appendix A values before final citation.
- **Evidence IDs:** None assigned here. Add IDs in the shared Evidence Matrix only for claims retained in the manuscript and verified against the source.
