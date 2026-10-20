# Section 4.4 source evaluation

Section: 4.4, Security, recovery, and performance considerations

## Purpose of this note

This file records which sources in `key_findings/sec 4.4.md` can support the subsection, which claims they can and cannot establish, and what should be verified before drafting. The companion key-findings file retains source-organized notes and locators. No Study IDs are assigned.

## Sources screened

### Source 1 — MongoDB Manual: “Security Checklist for Self-Managed Deployments”

- **Source type:** Current MongoDB vendor documentation (Database Manual 9.0 when checked).
- **Decision:** Selected for current, first-party descriptions of MongoDB security controls and operational practices.
- **Can support:** MongoDB's documented recommendations for authentication, least-privilege roles, TLS, encryption at rest and in-use, network restrictions, auditing, dedicated operating-system users, server-side scripting controls, scanner exclusions, and periodic security maintenance.
- **Cannot establish:** That a deployment is secure merely because checklist items are followed; comparative security with other databases; independent attack resistance; or regulatory compliance of an application.
- **Use in the paper:** Present as vendor-documented controls, preserve feature and edition limitations, and distinguish database controls from host/network controls and compliance obligations.
- **Verification note:** The checklist says it is not exhaustive. Authentication support and product availability are version- and edition-sensitive; recheck before final submission.

### Source 2 — MongoDB Manual: “Backup Methods for a Self-Managed Deployment”

- **Source type:** Current MongoDB vendor documentation (Database Manual 9.0 when checked).
- **Decision:** Selected for the self-managed backup and recovery overview and comparison.
- **Can support:** Documented behavior and requirements for oplog-based Cloud Manager/Ops Manager backups, point-in-time recovery, filesystem snapshots, direct file copies, `mongodump`/`mongorestore`, and the need to coordinate snapshots across shards and config servers.
- **Cannot establish:** Actual recovery time or data-loss outcome for a specific deployment; independent comparisons among backup products; or suitability for every scale and workload.
- **Use in the paper:** State the deployment type, product/subscription conditions, topology, and backup method. Treat the RTO/RPO comparison table as MongoDB's qualitative comparison; do not present its entries as universal guarantees.
- **Verification note:** The page distinguishes self-managed from Atlas deployments and includes encryption-mode-specific guidance. Recheck edition, subscription, and version conditions before final citation.

### Source 3 — MongoDB Manual: “MongoDB Performance”

- **Source type:** Current MongoDB vendor documentation (Database Manual 9.0 when checked).
- **Decision:** Selected for current monitoring and diagnosis guidance.
- **Can support:** MongoDB's description of possible performance factors and diagnostic measures related to indexes, schema, query shape, memory, locks, connection counts, profiling, and deployment capacity.
- **Cannot establish:** Benchmark performance, causal contribution sizes, universal tuning outcomes, or superiority over another database.
- **Use in the paper:** Use it to organize diagnostic concerns. Add independent, workload-specific studies for measured performance claims, and report MongoDB version, topology, workload, hardware, and configuration.
- **Verification note:** Some `serverStatus` fields are unavailable on Atlas Free and Flex clusters, and connection limits depend on deployment type or cluster tier. Keep those conditions attached to claims.

## Evidence synthesis and remaining needs

The selected sources cover all three aspects in the 4.4 heading, but the evidence is first-party documentation. The pages are suitable for describing MongoDB's current documented controls and recommendations; they are insufficient for empirical conclusions about security effectiveness, backup/recovery outcomes, or relative performance. Add peer-reviewed security and performance studies if the subsection makes evaluative claims beyond the manual's documented guidance.

## Intended use

Use Source 1 for security controls and operating practices, Source 2 for backup and recovery choices, and Source 3 for performance diagnosis and operational considerations. Clearly label vendor recommendations, preserve scope and version limits, and keep any paper-specific empirical result separate from these feature descriptions.

## Validation status

- **Sources 1–3:** Opened in the in-app browser and checked against the current MongoDB Database Manual 9.0 pages on October 18, 2026.
- **Independent evidence:** Not included in this three-source set; required for broad claims about comparative security or measured performance.
