# Section 7.2 source evaluation

Section: 7.2, Technical, operational, and security challenges

This note records source verification, fit, and limits for `vicky/key_findings/section_7_2.md`. Study IDs match that file. No tracker or Google Doc was changed.

## Selected systematic review: Mohamed et al. (2024)

- **Title:** A systematic literature review of authorization and access control requirements and current state of the art for different database models
- **Authors:** Aya Khaled Youssef Sayed Mohamed, Dagmar Auer, Daniel Hofer, and Josef Küng
- **Year / venue:** 2024, *International Journal of Web Information Systems*, 20(1), 1–23; Emerald records online publication on 9 October 2023
- **Study ID:** S029
- **DOI / publisher full text:** https://doi.org/10.1108/IJWIS-04-2023-0072 ; https://www.emerald.com/ijwis/article/20/1/1/1232858/A-systematic-literature-review-of-authorization
- **Source type:** Open-access systematic literature review, CC BY 4.0
- **Access checked:** User-opened Emerald full-text page; metadata, research questions, method, requirements, document-database discussion, overall comparison, and conclusion reviewed.
- **Decision:** Selected as the main academic source for authorization and access-control challenges; not a security audit or an assessment of MongoDB vulnerability prevalence.

### Claims it can support

- The review defines five requirements for fine-grained, dynamic access control: granularity, content-based rules, context-based rules, custom authorization, and separation of concerns. **Locations:** §§4, 11.
- MongoDB has built-in and user-defined RBAC roles granting actions on resources such as databases, collections, sets of collections, or clusters. **Location:** §8.1.
- The review discusses research proposals for finer document- or field-level policies, including purpose-, content-, and context-based approaches. These research mechanisms must be separated from standard product features. **Location:** §8.2.
- The paper's synthesis identifies limits in generalizing these advanced policies across document databases, and notes that several approaches are datastore-specific or need further practical evaluation. **Locations:** §§8.3, 10–11.
- The broader challenge includes a lack of a common authorization framework across non-relational models and inconsistent support across products. **Locations:** §§10–11.

### Scope, quality checks, and limitations

The authors explicitly focus on database models, not on a deep audit of one specific product. They combine research papers with product resources and search several literature databases for review and model-specific evidence. The review discusses MongoDB and Couchbase within the document-model section. Its claims reflect the features and literature it examined; security features, defaults, and versions can change. Before stating present-day MongoDB feature support, verify the current MongoDB Manual.

The paper identifies challenges in meeting advanced authorization requirements. It does not establish that MongoDB is insecure overall, measure attack rates, or compare incident prevalence across database products. RBAC support is explicitly reported, so the paper must not be summarized as claiming that MongoDB lacks access control.

### Recommended use

Use S029 to discuss the distinction between baseline role-based controls and finer-grained authorization needs in document databases. Attribute its assessment to the review and date the evidence; verify current product facts separately.
