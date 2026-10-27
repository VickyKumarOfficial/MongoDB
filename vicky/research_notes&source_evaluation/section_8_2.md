# Section 8.2 source evaluation

Section: 8.2, Distributed consistency, security, and privacy

This note records source verification, fit, and limits for `vicky/key_findings/section_8_2.md`. Study IDs match that file. The source specified for this subsection concerns privacy of Queryable Encryption; it does not cover distributed consistency.

## Selected security analysis: Gui, Paterson, and Tang (2023)

- **Title:** Security Analysis of MongoDB Queryable Encryption
- **Authors:** Zichen Gui, Kenneth G. Paterson, and Tianxin Tang
- **Year / venue:** 2023, 32nd USENIX Security Symposium, pp. 7445–7462
- **Study ID:** S033
- **USENIX page / full text:** https://www.usenix.org/conference/usenixsecurity23/presentation/gui ; https://www.usenix.org/system/files/usenixsecurity23-gui_1.pdf
- **Source type:** Peer-reviewed, open-access security analysis; authors are affiliated with ETH Zurich
- **Access checked:** User-opened USENIX PDF and conference metadata; abstract, threat model, design background, attack sections, evaluation, discussion, and conclusion reviewed.
- **Decision:** Selected for MongoDB-specific research on encrypted-query leakage and privacy; not a general database security review.

### Claims it can support

- The analysis studies MongoDB Queryable Encryption and the privacy of encrypted equality queries. **Locations:** §§1–3.
- Under a snapshot-adversary model with access to a server snapshot and an auxiliary dataset with a similar distribution, the authors show that information in operational logs can support inference attacks on queries and data. **Locations:** Abstract; §§4–7.
- Privacy analysis should account for interactions between an encryption mechanism and surrounding database components such as logs and metadata. **Locations:** §§5–7.

### Scope, quality checks, and limitations

The article analyzes a specific QE design and formalizes its assumptions about snapshot access and auxiliary data. It is not evidence that all encrypted MongoDB data, all MongoDB releases, or every deployment is exposed in the same way. The work does not evaluate distributed consistency, transaction isolation, or replication behavior. Product implementations and mitigations may change after the studied design; verify the version relevant to any current product claim.

### Recommended use

Use S033 to motivate further threat-model-aware evaluation of encrypted query features, especially leakage through database operations and metadata. Keep the claim tied to the source's adversary assumptions and QE design. The distributed consistency part of subsection 8.2 needs a separate source before making technical claims about it.
