# Section 4.3 — Replication, sharding, and consistency

## Scope of this source set

This file records the important material from three opened sources, grouped by each source's own headings and subheadings. The notes preserve terminology, section titles, and source locations, but explain the findings in original wording rather than reproducing long passages verbatim. Only brief phrases are quoted. The sources below provide substantial coverage of replica-set replication and consistency. They do **not** provide enough evidence for a detailed treatment of sharding; that topic needs a dedicated source before it is written into the review.

---

## Source 1 — MongoDB Database Manual: Replica Set Data Synchronization

### Publisher and source type

MongoDB, Inc.; current MongoDB Database Manual, version 9.0.

### Source link

- [Replica Set Data Synchronization](https://www.mongodb.com/docs/manual/core/replica-set-sync/)

### Accessed

October 18, 2026.

### Scope and relevance

This is the current vendor reference for how MongoDB initializes a new replica-set member and keeps an existing secondary current. It is the best source in this set for current product terminology and operational behavior. It is documentation, not an independent performance study; use research sources for broader evaluation and describe version-sensitive behavior with its documented version context.

### Page introduction — “Replica Set Data Synchronization”

The manual distinguishes two synchronization tasks: **initial sync**, which populates a new member with the dataset, and ongoing **replication**, which applies subsequent changes. Secondary members synchronize from a source member. This distinction is useful when explaining the lifecycle of a replica-set member.

### “Initial Sync”

Initial sync copies the source member’s data to a destination member. The page notes that the destination’s `local` database must have enough space for oplog records needed while the sync runs. Initial sync also truncates the destination member’s oplog, which can affect consumers such as change streams that depend on oplog history. The preferred source can be configured at `mongod` startup through `initialSyncSourceReadPreference`.

The manual says that, starting with MongoDB 5.2, initial sync can use a logical or file-copy-based method. For self-managed deployments, this process is distinct from Atlas cloud-based initial sync, which uses a cloud-provider snapshot and restore mechanism.

### “Logical Initial Sync Process”

The documented logical process has four main steps:

1. Clone databases other than `local` by scanning source collections and copying their documents.
2. Build collection indexes while the documents are copied.
3. Apply oplog records buffered during the copy.
4. Continue applying source oplog changes to bring the destination to the current replica-set state.

During cloning and index construction, newly generated oplog records are temporarily retained on the destination. The destination therefore needs adequate disk space. The sync must also retain a sufficiently long oplog history: if continuity with the source is lost during catch-up, initial sync restarts. MongoDB 9.0 reports the current logical-initial-sync phase through `replSetGetStatus.initialSyncStatus.phase` and records information about completed attempts.

### “Initial Sync Phases”

The manual lists the logical sync phases, in order: `initializing`, `selectingSyncSource`, `preparingStorage`, `checkingSourceRollback`, `determiningStartOpTime`, `fetchingFCV`, `waitingForSyncSourceStableTs`, `cloningData`, `determiningStopTimestamp`, `applyingOplog`, `checkingFinalRollback`, and `complete`. This sequence is useful for describing progress monitoring and the fact that initial sync is a staged operation rather than a single copy step.

### “File Copy Based Initial Sync”

The manual identifies file-copy-based initial sync as an Enterprise-only option. It copies and moves filesystem files and may be faster than logical sync, but it replaces the destination’s `local` database with the source’s. Documented limitations include no backups on source or destination during the sync, no writes to the destination `local` database during the process, and only one sync source at a time. The manual also warns that an unfiltered `count()` can return inaccurate results after this method. Treat these as method-specific constraints, not as properties of logical initial sync.

### “Fault Tolerance” and “Initial Sync Source Selection”

Persistent network errors can cause initial sync to restart. For temporary network errors and certain collection changes, MongoDB attempts to resume; the documented default retry window is 24 hours, and the destination can make up to 10 restart attempts before a fatal error. Source selection is affected by the startup read-preference setting and replica-set configuration. Eligibility checks include member state and reachability, acceptable lag, index-building and voting configuration, delay settings, and comparative source performance. These criteria are useful operational context, but should not be reduced to a single universal source-selection rule.

### “Replication”

The page describes ongoing replication as copying oplog entries from a sync source to a destination member. MongoDB supports chaining: a secondary may synchronize from another secondary instead of always reading from the primary. Chaining can reduce the primary’s workload or make replication paths more flexible, while source-selection conditions and lag limits constrain which member is eligible.

### “Streaming Replication”

The manual says that source members continuously stream oplog entries to destinations. It identifies reduced replication lag in high-load or high-latency networks, fresher secondary reads, lower risk of losing `w: 1` writes during primary failover, and reduced latency for write concerns that wait for replication as benefits. The page documents `oplogFetcherUsesExhaust` as a way to disable this behavior for resource or bandwidth constraints; it advises against disabling it without such a reason.

### “Multithreaded Replication”

MongoDB applies replicated writes in batches using multiple threads. Operations are grouped by document identifier, and distinct groups can be applied concurrently; operations affecting the same document retain their original order. For qualifying secondary reads using `local` or `majority` read concern, WiredTiger snapshots can provide a consistent view while replication batches are applied. This allows reads and replication to proceed concurrently without waiting for a batch to finish.

### “Flow Control”

The manual describes flow control as a mechanism for limiting the primary’s write rate to keep majority-commit lag below a configurable target. It is enabled by default in the documented version. This supports discussion of replication lag as a system-level concern that can affect write throughput, rather than only as a secondary-read freshness issue.

### Short source excerpt

> “MongoDB uses two forms of data synchronization”

### How this source can support Section 4.3

Use this source for current MongoDB behavior: initial synchronization, source selection, oplog streaming, chained replication, parallel application, and flow control. Pair it with the research papers below for protocol rationale, consistency trade-offs, and empirical observations. The manual describes current product behavior, while the papers document earlier versions and specific experiments.

---

## Source 2 — Fault-Tolerant Replication with Pull-Based Consensus in MongoDB

### Authors and publication

Siyuan Zhou and Shuai Mu. *Proceedings of the 18th USENIX Symposium on Networked Systems Design and Implementation (NSDI ’21)*, 2021, pp. 687–703. Zhou was affiliated with MongoDB Inc.; Mu with Stony Brook University.

### Source links

- [USENIX paper page](https://www.usenix.org/conference/nsdi21/presentation/zhou)
- [Full paper PDF](https://www.usenix.org/system/files/nsdi21-zhou.pdf)

### Accessed

October 18, 2026.

### Scope and relevance

This peer-reviewed conference paper explains the design of MongoDB’s Raft-derived replica-set protocol, including pull-based data transfer, oplog replication, elections, rollback, synchronization paths, and evaluation. It is directly relevant to replication and consistency. Its statements and experiments refer to the implementation and MongoDB releases studied by the authors; they should not be treated as a description of every current release without checking current documentation.

### Abstract and §1 — “Introduction” (PDF pp. 1–2)

The paper presents MongoDB replication as a consensus protocol based on Raft, with a distinctive pull-based data-synchronization design. A secondary can obtain entries from a selected peer, not only from the primary. This makes it possible to construct different data-transfer paths, including chains and star-like broadcast arrangements. The authors motivate this flexibility by network topology, cross-datacenter bandwidth, and cost. They describe the system as targeting linearizable replication while tolerating a minority of failures.

The paper explains that the design separates fetching new entries from reporting replication progress: secondaries pull log entries and separately report their positions, enabling the primary to determine when a majority has replicated an entry. The authors report protocol verification and testing that included TLA+ model checking, unit and integration tests, fuzzing, and fault injection.

### §2 — “Background” (PDF pp. 2–3)

#### “MongoDB interfaces and architecture”

The paper places replica sets in MongoDB’s broader architecture: a replica set is a consensus group whose members maintain logical copies of database state. The paper treats sharding as orthogonal and focuses its protocol analysis on one replica set; it is therefore not a detailed source for sharding behavior.

#### “Consistency and fault tolerance”

The study focuses on linearizable replication in an asynchronous setting, where messages can be delayed or lost and no perfect failure detector is assumed. The availability condition discussed is that no more than a minority of replica-set servers fail.

#### “Evolution of MongoDB’s pull-based replication”

The authors describe MongoDB’s earlier primary-backup replication and the later move to a Raft-based protocol. The newer protocol was designed to improve safety and autonomous recovery under asynchronous communication while retaining pull-based data synchronization. This is useful historical context; it describes the evolution reported in the 2021 paper.

### §3 — “Design” (PDF pp. 3–5)

#### §3.1 — “Preliminaries”

The replicated object is the **oplog**, an ordered sequence of database-operation entries. Entries carry a timestamp and primary term; together these identify and order entries across members. The authors explain that a majority must replicate an entry for it to commit under the strong guarantee discussed in the paper. The paper also describes primary, secondary, and candidate roles and the majority-vote election process. Its terminology maps primary/secondary to Raft’s leader/follower roles.

#### §3.2 — “Data Replication”

MongoDB’s pull-based model differs from the familiar arrangement where a leader initiates replication messages to followers. A secondary requests new oplog entries from its chosen source; replication progress is reported separately so that commitment can be determined.

##### §3.2.1 — “PullEntries”

The syncing secondary can request entries from a nearby eligible member, called the **sync source**, rather than always requesting them from the primary. Requests include the syncing member’s latest oplog timestamp. The source returns entries when it has a suitable longer log, or an empty result when it does not. The paper describes a wait before returning an empty response to avoid repeated busy polling. This design enables secondary-to-secondary replication and flexible topologies.

##### §3.2.2 — “UpdatePosition”

The syncing member reports its log position so the primary can track how far replication has progressed and decide when entries are committed on a majority. The authors discuss safety concerns that arise when arbitrary sync paths interact with elections and terms; higher-term information must cause a stale primary to step down before it incorrectly commits an entry.

##### §3.2.3 — “Implementation”

The paper describes implementing log fetching as an oplog query ordered by timestamp, with cursor-based batches and streaming behavior. It also describes batching position updates and using heartbeat messages for liveness, commit-point propagation, and source selection. These are implementation details of the paper’s studied protocol and should be cited as such.

#### §3.3 — “Correctness”

This subsection analyzes safety issues that can arise because replication requests can travel between arbitrary members and old leaders may still be active temporarily. The authors relate their protocol changes to Raft’s leader-completeness invariant and explain how term information, voting, and majority overlap protect committed entries. Cite this section when discussing why flexible replication paths require protocol safeguards, rather than presenting pull-based transfer as a simple transport-only change.

#### §3.4 — “Sync Source Selection”

Members learn other members’ log positions through heartbeats. A member selects a source with newer entries, verifies the source as responses arrive, and continues using it unless it becomes unavailable or a better source appears. The selection design prevents cycles in source relationships. The current manual should be used for present-day eligibility and configuration rules.

### §4 — “Extensions” (PDF pp. 5–7)

#### §4.1 — “Speculative Execution and Rollback”

MongoDB applies oplog entries speculatively rather than waiting for each one to become committed. This supports weaker consistency behaviors and local visibility, but failover can require removal of speculative entries. The paper connects rollback to the interaction between the replication protocol and WiredTiger’s timestamped, multi-version storage. This section provides protocol-level context; the current manual and current version-specific implementation should be consulted for present-day rollback details.

#### §4.2 — “Initial Sync”

The paper describes initial sync as cloning the source database and then applying oplog records to reconcile changes that occurred during the clone. Because database contents can change during the scan, the copied data may initially be inconsistent. The oplog catch-up phase resolves this, and operations must be safe to apply repeatedly. Consult the current MongoDB manual for supported methods and current operational constraints.

#### §4.3 — “Preserving Uncommitted Oplog Entries”

The paper notes that weak write concerns may acknowledge writes before majority commitment. Losing all such writes during a failover could therefore discard acknowledged work. The protocol uses a primary-catch-up phase in which a newly elected primary obtains available newer entries before accepting writes, subject to a timeout. This is a deliberate design trade-off: it attempts to preserve uncommitted work while bounding failover delay.

#### §4.4 — “Additional Replica Roles”

##### §4.4.1 — “Arbiters”

The paper describes arbiters as election participants that do not store replicated data. Their role is to contribute a vote for election tie-breaking while avoiding the storage and data-replication cost of a data-bearing member. The paper also explains an important limitation: an arbiter does not itself provide another copy of data.

##### §4.4.2 — “Non-Voting Members”

Non-voting members can support read offload or lower-latency access to geographically local data without making every member part of the write-commit quorum. The pull model can allow some replication work to be shifted away from the primary. The paper’s examples include analytic workloads and geographically distributed read replicas.

#### §4.5 — “Election Optimizations”

##### §4.5.1 — “Election Handoff”

For a planned stepdown, the primary can wait for an eligible secondary to catch up and then ask that member to run for election, avoiding the ordinary timeout wait in common cases. The authors connect this to reducing planned-maintenance interruption.

##### §4.5.2 — “Member Priority”

Replica-set configuration can express a preference for which eligible member should become primary. The paper discusses how priority affects election timing and notes that aggressive priority takeover can cause disruption when elections fail. Current configuration semantics should be verified in the manual before describing implementation details as current behavior.

### §5 — “Evaluation” (PDF pp. 8–11)

#### §5.1 — “Benchmarks on EC2”

##### §5.1.1 — “Setup”

The main tests use five server virtual machines across two AWS regions, with clients issuing updates to a one-million-document collection. The authors compare a chained arrangement—where a remote secondary synchronizes from a secondary in its region—with a configuration where every secondary synchronizes from the primary. These test conditions matter when interpreting the results.

##### §5.1.2 — “Benchmark Results”

For the reported EC2 experiment, enabling chaining produced broadly similar latency and throughput under the tested conditions, while cross-datacenter traffic was about half that of the non-chained configuration. When the primary’s network bandwidth was artificially constrained, chaining improved throughput. The result is workload- and environment-specific: chaining’s benefit depends on which resource is the bottleneck, so it should not be generalized as a universal throughput improvement.

##### §5.1.3 — “Failover Tests”

The authors test failure recovery by crashing the primary, allowing a new primary to be elected, and then bringing the former primary back to catch up. This supports a discussion of behavior during failover, but the experiment uses the paper’s configuration and release context.

#### §5.2 — “Metrics on MongoDB Atlas”

The production analysis uses Atlas failover data collected in June 2020, when the reported population was running MongoDB 3.6, 4.0, and 4.2 releases. Most recorded failovers were associated with planned maintenance; the rest included priority takeover and election timeout events. Because the dataset is old and drawn from MongoDB’s own hosted service, present it as historical operational evidence, not a current failure-rate estimate for all deployments.

### §7 — “Conclusion” (PDF p. 12)

The authors conclude that the Raft-derived protocol supports fault-tolerant, linearizable replication with flexible data-transfer paths, and report efficient and reliable replication in their EC2 and Atlas analyses. Phrase this as the paper’s conclusion and retain the stated limits of its evaluation.

### Short source excerpt

> “data pulling between any two replicas”

### Evidence quality and limits

- **Strength:** peer-reviewed NSDI systems paper with an open full text, a detailed protocol description, and both controlled benchmarking and production-service measurements.
- **Perspective:** one author was affiliated with MongoDB, and the operational data came from MongoDB Atlas. The detailed design is valuable primary evidence, but independent follow-up or current documentation should corroborate claims about present deployments.
- **Version boundary:** the paper appeared in 2021 and its comparisons include older MongoDB releases. Avoid turning its protocol/evaluation specifics into claims about the current release without verification.
- **Scope boundary:** the paper focuses on replica-set replication and explicitly treats sharding as outside the detailed analysis.

---

## Source 3 — Tunable Consistency in MongoDB

### Authors and publication

William Schultz, Tess Avitabile, and Alyson Cabral. *Proceedings of the VLDB Endowment*, vol. 12, no. 12, pp. 2071–2081, 2019. DOI: 10.14778/3352063.3352125. The authors were affiliated with MongoDB, Inc.

### Source links

- [PVLDB article PDF](https://vldb.org/pvldb/vol12/p2071-schultz.pdf)
- [DOI record](https://doi.org/10.14778/3352063.3352125)

### Accessed

October 18, 2026.

### Scope and relevance

This PVLDB paper explains MongoDB’s operation-level read and write concern choices, their consistency and latency implications, application use cases, and the replication mechanisms that support those choices. It is directly relevant to the **consistency** part of Section 4.3. It is an older, vendor-authored paper; use the current manual for current semantics and do not treat the 2019 usage measurements as present-day adoption data.

### Abstract and §1 — “Introduction” (PDF pp. 1–2)

The authors frame consistency as a choice with performance consequences in distributed databases. MongoDB exposes different consistency options per operation so application developers can select among latency, visibility, and durability guarantees. The paper focuses on read concern, write concern, speculative execution, rollback, and practical application scenarios.

### §2 — “Background” (PDF pp. 2–3)

This section outlines the replica-set context: writes go to the primary, while reads may be directed to a primary or a secondary depending on configuration. It connects replication to the oplog and the progression from local commit to majority commit. The paper also briefly identifies sharding as partitioning across replica sets, but explicitly does not discuss sharding details; it should not be used as the main sharding source.

### §3 — “Consistency Levels in MongoDB” (PDF pp. 3–4)

Every write is represented in the oplog. After it is applied locally on the primary, it can replicate to secondaries; majority commitment occurs after the required replication conditions are met. The authors distinguish **local commit** from **majority commit** and explain that clients’ concerns govern when acknowledgements are returned and which data reads may observe.

#### §3.1 — “Definitions”

The paper describes write concern as a durability/acknowledgement choice. `w:1` is acknowledged after local commit on the primary; `w:N` waits for the specified number of members; `w:"majority"` waits for majority commitment. Stronger write acknowledgement generally involves more replication and can add latency. The paper also discusses journaling and tag-based write concerns, but does not develop them in detail.

Read concern determines which level of data visibility a read requires. The paper contrasts local data, which may include writes not yet majority committed, with majority-committed data. Stronger guarantees can affect latency and the freshness of what a client sees. Exact current guarantees can vary by server version and operation context, so cite current documentation for present-day definitions.

#### §3.3 — “Usage in MongoDB Atlas”

The authors analyze telemetry from 14,820 Atlas instances running MongoDB 4.0.6. They report that the studied clients overwhelmingly used local read concern and `w:1` write concern, and infer that users often retained defaults. The release and dataset are historical; use the result only as evidence about the observed 4.0.6 population, not current usage patterns.

#### §3.4 — “Use Cases”

The examples illustrate that a single application may choose different concerns for different operations:

- **§3.4.1 — “Majority Reads and Writes”:** use stronger read/write guarantees when loss is costly and the workload can tolerate added latency.
- **§3.4.2 — “Local Reads and Writes”:** local reads and `w:1` can suit ephemeral or retryable state where throughput and latency matter more than durability.
- **§3.4.3 — “Multiple Write Concern Values”:** an application can use lower-latency writes for intermediate saves and majority acknowledgement for a final, important submission.
- **§3.4.4 — “Local Reads and Majority Writes”:** applications can combine fresh local reads with stronger write durability when users benefit from seeing recent content but losing submitted content is costly.
- **§3.4.5 — “Majority Reads with Causal Consistency and Local Writes”:** the paper illustrates using causal sessions with majority reads and local writes to manage visibility and duplicate-action concerns.

These are illustrative case studies reported by the authors, not prescriptive configuration guidance for every workload. A review should link a consistency choice to application consequences rather than label one read/write concern as universally best.

### §4 — “Tunable Consistency Offerings in Other Commercial Databases”

The authors compare MongoDB’s operation-level choices with selected commercial systems. The comparison can help frame the design space, but the section reflects the products and versions available in 2019. It is not a current comparative assessment of the database market.

### §5 — “Speculative Majority and Snapshot Isolation for Multi Statement Transactions” (PDF pp. 5–6)

This section explains how majority and snapshot read concerns work inside multi-statement transactions. For writes, reading the freshest document version can reduce conflicts that would arise if the transaction instead waited for the majority-committed view before beginning. The paper describes a speculative approach: transactions read current data and, when committed with majority write concern, wait at commit time for the read data to meet the required majority guarantee. This guarantee depends on committing with the appropriate write concern; applications should not create irreversible external side effects before transaction commit succeeds. The authors motivate this design by observed write-conflict aborts during beta testing and illustrate the difference with Figure 3.

### §6 — “Supporting a Spectrum of Consistency Levels in a Single Deployment” (PDF pp. 6–7)

The authors identify **speculative execution** and **data rollback** as mechanisms that allow the system to expose different consistency levels.

#### §6.1 — “Speculative Execution Model”

Replicas apply oplog entries before they are known to be majority committed. This makes effects visible to local reads earlier, but means that some applied entries may later have to be removed if the replica’s log diverges during failover. The paper contrasts this with a conventional Raft state machine that waits until commitment before applying entries.

#### §6.2 — “Data Rollback”

When a member detects that its log is no longer a prefix of its sync source’s log, it identifies a common point, truncates later oplog entries, and restores a database state consistent with the retained history. The database state itself must be corrected; rollback is therefore more than deleting log records.

##### §6.2.1 — “Recover to Timestamp Algorithm”

The paper describes reverting the storage-engine state to a stable, majority-committed timestamp and then replaying entries through the common point. In the paper’s account, this method was available with WiredTiger from MongoDB 4.0.

##### §6.2.2 — “Refetch Based Rollback”

The authors describe refetch-based rollback as the older approach, replaced as the default by recover-to-timestamp in MongoDB 4.0, while remaining available for scenarios where timestamp recovery could not be used. These are version-specific historical details; consult current documentation before describing current rollback selection.

### §7 — “Operations Minimize the Impact of Their Consistency Level on the System” (PDF pp. 6–7)

#### §7.1 — “Write Operations”

The authors describe write concern as primarily affecting when a particular operation returns success: `w:1` can return after primary durability, while `w:"majority"` waits for durability on a majority of voting nodes. This is the paper’s account of its implementation and version context; confirm current durability semantics in the current manual.

#### §7.2 — “Read Operations”

The paper describes query yielding as a way to avoid keeping long-lived storage-engine transactions open for ordinary local and majority reads. Local reads can observe the latest available data but do not necessarily provide a consistent snapshot across the full duration of a long query. Majority reads use majority-committed data, while a `snapshot` read is described as using a single storage-engine transaction to maintain a consistent view. The discussion includes memory and execution-duration considerations. These details should be treated as 2019 implementation evidence, not current operational guarantees.

### §8 — “Experiments” (PDF pp. 7–9)

#### §8.1 — “Latency Comparison of Different Write Concern Levels”

The paper compares write latencies in three-node replica sets under local, cross-availability-zone, and cross-region layouts. Its experiments use MongoDB 4.0.x, 100 single-document updates per comparison, and journaling. The tables show higher latency for majority acknowledgement than `w:1` in the reported configurations, with the difference becoming especially large for geographically separated members. These are historical, controlled measurements; they support the direction of a latency trade-off, not a current performance estimate.

#### §8.2 — “Quantifying w:1 Write Loss in a Fail-Stop Model”

The authors simulate primary/replica failures during a sustained insert workload and measure which acknowledged `w:1` writes remain durable. In the tested setup, larger imposed network delay was associated with more acknowledged writes missing after failure. The result illustrates the consequence of acknowledging before majority replication; the test configuration and fail-stop model limit generalization.

#### §8.3 — “Failover Data from MongoDB Managed Replica Set Deployments”

This operational analysis examines 17,720 managed three-node replica sets over one week. The authors use observed election terms as an indirect indicator of elections and possible failures, and explicitly acknowledge that terms are only a proxy. The data are historical vendor-managed deployment telemetry and should not be represented as a current failure-rate estimate.

### §9 — “Conclusions and Future Work” (PDF p. 9)

The authors conclude that operation-level consistency settings let applications select safety and performance characteristics, and that the system’s replication mechanisms support this spectrum. Their future-work discussion reflects the state of MongoDB in 2019, so it is useful for historical context rather than as a current roadmap.

### Short source excerpt

> “at a per operation level”

### Evidence quality and limits

- **Strength:** peer-reviewed PVLDB article with explicit protocol explanation and application use cases.
- **Perspective:** all authors were affiliated with MongoDB, so present the design description as a primary vendor-authored account and triangulate with current documentation or independent verification.
- **Version boundary:** the article is from 2019 and discusses MongoDB 4.0-era behavior and Atlas observations. Do not present its telemetry or implementation specifics as current.
- **Scope boundary:** useful for replica-set consistency, read/write concerns, speculative application, and rollback; not a substantive sharding study.

---

## Coverage summary for Section 4.3

| Subtopic | Evidence in this file | Coverage status |
|---|---|---|
| Replica-set synchronization and oplog flow | MongoDB Manual; Zhou and Mu | Strong starting coverage |
| Elections, majority commitment, and failover | Zhou and Mu; Schultz et al.; Manual cross-check needed for current behavior | Covered with version limits |
| Consistency and read/write guarantees | Schultz et al.; Zhou and Mu | Strong conceptual coverage; refresh semantics against current documentation |
| Replication lag, chaining, and flow control | MongoDB Manual; Zhou and Mu | Covered; performance findings are workload-specific |
| Sharding and consistency across shards | Not treated in depth by these three sources | Needs dedicated sharding and distributed-transaction sources |

## Shared bibliography entries

1. MongoDB, Inc., “Replica Set Data Synchronization,” *MongoDB Manual*, version 9.0. Available: https://www.mongodb.com/docs/manual/core/replica-set-sync/ (accessed October 18, 2026).
2. S. Zhou and S. Mu, “Fault-Tolerant Replication with Pull-Based Consensus in MongoDB,” in *Proceedings of the 18th USENIX Symposium on Networked Systems Design and Implementation (NSDI ’21)*, 2021, pp. 687–703. Available: https://www.usenix.org/system/files/nsdi21-zhou.pdf.
3. W. Schultz, T. Avitabile, and A. Cabral, “Tunable Consistency in MongoDB,” *Proceedings of the VLDB Endowment*, vol. 12, no. 12, pp. 2071–2081, 2019. doi: 10.14778/3352063.3352125. Available: https://doi.org/10.14778/3352063.3352125.
