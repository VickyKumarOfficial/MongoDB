# Section 1.1 Source Evaluation: “Importance of Database Systems”

## Importance of DBS

### Title | Authors
1. Architecture of a Database System | 
Joseph M. Hellerstein, Michael Stonebraker
and James Hamilton

### Insiti:
- University of California, Berkeley, USA, hellerstein@cs.berkeley.edu
- Massachusetts Institute of Technology, USA
- Microsoft Research, USA

**Link:** https://dsf.berkeley.edu/papers/fntdb07-architecture.pdf

**DOI:** 10.1561/1900000002

### Abstract 
```
Database Management Systems (DBMSs) are a ubiquitous and critical
component of modern computing, and the result of decades of research
and development in both academia and industry. Historically, DBMSs
were among the earliest multi-user server systems to be developed, and
thus pioneered many systems design techniques for scalability and reliability now in use in many other contexts. While many of the algorithms
and abstractions used by a DBMS are textbook material, there has been
relatively sparse coverage in the literature of the systems design issues
that make a DBMS work. This paper presents an architectural discussion of DBMS design principles, including process models, parallel
architecture, storage system design, transaction system implementation, query processor and optimizer architectures, and typical shared
components and utilities. Successful commercial and open-source systems are used as points of reference, particularly when multiple alternative designs have been adopted by different groups.
```

### Introduction
```
Database Management Systems (DBMSs) are complex, mission-critical software systems. Today’s DBMSs embody decades of academic and industrial research and intense corporate software development. Database systems were among the earliest widely deployed online server systems and, as such, have pioneered design solutions spanning not only data management, but also applications, operating systems, and networked services. The early DBMSs are among the most influential software systems in computer science, and the ideas and implementation issues pioneered for DBMSs are widely copied and reinvented. For a number of reasons, the lessons of database systems architecture are not as broadly known as they should be. First, the applied database systems community is fairly small. Since market forces only support a few competitors at the high end, only a handful of successful DBMS implementations exist. The community of people involved in
designing and implementing database systems is tight: many attended the same schools, worked on the same influential research projects, and collaborated on the same commercial products. Second, academic treatment of database systems often ignores architectural issues.  Textbook presentations of database systems traditionally focus on algorithmic and theoretical issues — which are natural to teach, study, and test — without a holistic discussion of system architecture in full implementations. In sum, much conventional wisdom about how to build database systems is available, but little of it has been written down or communicated broadly. In this paper, we attempt to capture the main architectural aspects of modern database systems, with a discussion of advanced topics. Some of these appear in the literature, and we provide references where appropriate. Other issues are buried in product manuals, and some are simply part of the oral tradition of the community. Where applicable, we use
commercial and open-source systems as examples of the various architectural forms discussed. Space prevents, however, the enumeration of the exceptions and finer nuances that have found their way into these multi-million line code bases, most of which are well over a decade old. Our goal here is to focus on overall system design and stress issues not typically discussed in textbooks, providing useful context for more widely known algorithms and concepts. We assume that the reader is familiar with textbook database systems material (e.g., [72] or [83]) and with the basic facilities of modern operating systems such as UNIX, Linux, or Windows. After introducing the high-level architecture of a DBMS in the next section, we provide a number of references to background reading on each of the components in Section 1.2.
```

### Conclusion
```
As should be clear from this paper, modern commercial database systems are grounded both in academic research and in the experiences of developing industrial-strength products for high-end customers. The task of writing and maintaining a high-performance, fully functional relational DBMS from scratch is an enormous investment in time and energy. Many of the lessons of relational DBMSs, however, translate over to new domains. Web services, network-attached storage, text and e-mail repositories, notification services, and network monitors can all benefit from DBMS research and experience. Data-intensive services are at the core of computing today, and knowledge of database system design is a skill that is broadly applicable, both inside and outside the halls of the main database shops. These new directions raise a number of research problems in database management as well, and point the way to new interactions between the database community and other areas of computing.
```



### Title | Authors
Relational Model of DataLarge Shared Data Banks | F. CODDI B M Research Laboratory, San Jose, California

### INTRODUCTION
```
Relational Model and Normal Form
This paper is concerned with the application of ele-mentary relation theory to systems which provide sharedaccess to large banks of formatted data. Except for a paperby Childs [1], the principal application of relations to datasystems has been to deductive question-answering systems.Levein and Maron [2] provide numerous references to workin this area.In contrast, the problems treated here are those of dataindependence--the independence of application programsand terminal activities from growth in data types andchanges in data representation--and certain kinds of datainconsistency which are expected to become troublesomeeven in nondeductive system
```