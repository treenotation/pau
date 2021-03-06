# Pau + OMOP CDM

The OHDSI/OMOP Project has built a common language for medical records. It is currently on version 5.0.1.

The Pau project intends to do something similar, with the one novel feature that Pau is written entirely in Tree Notation.

This folder will aims to explore what it would look like to combine the OMOP CDM with Pau. Let's convert the OMOP CDM to Tree Languages and see what happens.

## Strengths of OHDSI/OMOP Project

1. [Fantastic, clear description of the problems](https://www.ohdsi.org/web/wiki/doku.php?id=documentation:vocabulary:background).
2. [Active community](https://forums.ohdsi.org/)
3. Great semantics. Already have 81 vocabularies.

## Strengths of Pau (or any Tree Notation MR system in general)

1. Git backed grammars with many advantages from that around auditing and collaboration
2. Documentation + code combined
3. Grammar file concatentation and mix and match
4. Universal syntax for grammar and data
5. Every character is strongly typed
6. Simpler
7. Network effects across domains other than healthcare

## Example use cases that would be easier with OMOP on Tree Notation

1. "I'd like to have the entire grammar in one file please."
2. "I'd like to use only a few of the OMOP components and also add my own."
3. "I'd like to import my data from CSV files and export to Apache Arrow."
4. "I'd like to contribute a new option for 'smokingStatus'."

We can replace "The [OHDSI] Standardized Vocabularies contain all of the code sets, terminologies, vocabularies, nomenclatures, lexicons, thesauri, ontologies, taxonomies, classifications, abstractions, and other such data that are required for" with "the [OHDSI] gram files contains all of the grammar files that describe all of medical records."

### Todo

Domains:

- Demographics: Gender, Ethnicity, Race
- Condition
- Drug
- Procedure
- Measurement
- Observation
- Note
- Device
- Specimen
- Unit
- Visit
- Death
- Provider
- Cost

Currently, 81 vocabularies are part of the Standardized Vocabularies.

Many of them are adopted from 3rd party sources, which develop and maintain them for specific purposes, such as ICD9CM, ICD10 or SNOMEDCT.


### Concept Count

https://ohdsi.github.io/TheBookOfOhdsi/CommonDataModel.html

Concept Count Domain ID Concept Count Domain ID
1731378 Drug  183 Route
477597  Device  180 Currency
257000  Procedure 158 Payer
163807  Condition 123 Visit
145898  Observation 51  Cost
89645 Measurement 50  Race
33759 Spec Anatomic Site  13  Plan Stop Reason
17302 Meas Value  11  Plan
1799  Specimen  6 Episode
1215  Provider Specialty  6 Sponsor
1046  Unit  5 Meas Value Operator
944 Metadata  3 Spec Disease Status
538 Revenue Code  2 Gender
336 Type Concept  2 Ethnicity
194 Relationship  1 Observation Type


