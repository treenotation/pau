# pau Readme

A Tree Language for Electronic Medical Records.

![Slides](slides.gif)

- [PauDB - Database of Electronic Medical Records Systems](http://pau.treenotation.org/paudb/)
- [Pau on GitHub](https://github.com/treenotation/pau)
- [PauSynth](https://pau.treenotation.org/synth/)
- [Try it now](https://jtree.treenotation.org/designer/#grammar%0A%20emailCell%0A%20phoneTypeCell%0A%20%20enum%20mobile%20home%20office%0A%20nameCell%0A%20%20extends%20locationCell%0A%20%20examples%20Thomas%20John%20Earl%20Kai%20Lorne%20Ashley%20Kasey%20Sam%20Joe%0A%20sexCell%0A%20%20enum%20Male%20Female%0A%20ethnicityCell%0A%20%20highlightScope%20string%0A%20%20enum%20Hawaiian%20Chinese%20Filipino%20Mexican%20Caucasian%20Portuguese%20Japanese%20Spanish%20Filipino%20Unknown%20Okinawan%20Marshallese%20PuertoRican%20Irish%20AmericanIndian%20Albanian%20Venezuela%20TrinidadandTobago%20German%20Scottish%20English%20Samoan%0A%20raceCell%0A%20%20highlightScope%20keyword%0A%20%20enum%20PacificIslander%20Asian%20Filipino%20Caucasian%20African%20NativeAmerican%20Unknown%0A%20locationCell%0A%20%20extends%20stringCell%0A%20locationKeywordCell%0A%20%20enum%20location%0A%20cityCell%0A%20%20extends%20locationCell%0A%20%20examples%20Tokyo%20Boston%20London%20Beijing%20Seattle%0A%20zipCell%0A%20%20extends%20locationCell%0A%20%20examples%2090210%2094110%2002301%0A%20stateCell%0A%20%20extends%20locationCell%0A%20%20examples%20Hawaii%20Maine%20Montana%20California%20Florida%20Georgia%0A%20streetAddressCell%0A%20%20extends%20locationCell%0A%20countryCell%0A%20%20enum%20Canada%20USA%20China%20India%20Bolivia%20Egypt%20Japan%20Lebanon%0A%20smokingStatusCell%0A%20%20enum%20yes%20never%20previousSmoker%0A%20%20highlightScope%20constant.numeric%0A%20packsPerDayCell%0A%20%20description%20How%20many%20packs%20per%20day%20do%20they%20currently%20smoke%3F%0A%20%20extends%20floatCell%0A%20cigarettesPerDayCell%0A%20%20description%20How%20many%20cigarettes%20per%20day%20do%20they%20currently%20smoke%3F%0A%20%20extends%20intCell%0A%20keywordCell%0A%20floatCell%0A%20intCell%0A%20stringCell%0A%20%20highlightScope%20string%0A%20yearCell%0A%20%20extends%20intCell%0A%20dayCell%0A%20%20extends%20intCell%0A%20monthCell%0A%20%20extends%20intCell%0A%20timeCell%0A%20%20highlightScope%20constant.numeric%0A%20%20examples%202%3A41am%2012%3A19pm%208%3A42pm%203%3A33am%0A%20abstractAddressNode%0A%20%20abstract%0A%20%20inScope%20abstractNameNode%20emailNode%20phoneNode%0A%20emergencyContactNode%0A%20%20extends%20abstractAddressNode%0A%20%20crux%20emergencyContact%0A%20contactInfoNode%0A%20%20extends%20abstractAddressNode%0A%20%20crux%20contactInfo%0A%20emailNode%0A%20%20cells%20keywordCell%20emailCell%0A%20phoneNode%0A%20%20crux%20phone%0A%20%20inScope%20phoneNumberNode%20phoneTypeNode%0A%20phoneNumberNode%0A%20%20crux%20number%0A%20phoneTypeNode%0A%20%20cells%20keywordCell%20phoneTypeCell%0A%20%20crux%20type%0A%20abstractNameNode%0A%20%20abstract%0A%20%20cells%20keywordCell%20nameCell%0A%20firstNameNode%0A%20%20extends%20abstractNameNode%0A%20%20crux%20firstName%0A%20lastNameNode%0A%20%20extends%20abstractNameNode%0A%20%20crux%20lastName%0A%20middleNameNode%0A%20%20extends%20abstractNameNode%0A%20%20crux%20middleName%0A%20nickNameNode%0A%20%20extends%20abstractNameNode%0A%20%20crux%20nickName%0A%20patientIdNode%0A%20%20cells%20keywordCell%0A%20%20crux%20patientId%0A%20abstractDemographicConceptNode%0A%20%20cells%20keywordCell%0A%20ethnicityNode%0A%20%20crux%20ethnicity%0A%20%20description%20A%20foreign%20key%20that%20refers%20to%20the%20standard%20concept%20identifier%20in%20the%20Standardized%20Vocabularies%20for%20the%20ethnicity%20of%20the%20person%2C%20belonging%20to%20the%20'Ethnicity'%20vocabulary.%0A%20%20extends%20abstractDemographicConceptNode%0A%20%20catchAllCellType%20ethnicityCell%0A%20raceNode%0A%20%20crux%20race%0A%20%20extends%20abstractDemographicConceptNode%0A%20%20catchAllCellType%20raceCell%0A%20%20description%20A%20foreign%20key%20that%20refers%20to%20an%20identifier%20in%20the%20CONCEPT%20table%20for%20the%20unique%20race%20of%20the%20person%2C%20belonging%20to%20the%20'Race'%20vocabulary.%0A%20sexNode%0A%20%20crux%20sex%0A%20%20extends%20abstractDemographicConceptNode%0A%20%20cells%20keywordCell%20sexCell%0A%20abstractEventNode%0A%20%20abstract%0A%20%20inScope%20dateNode%20timeNode%20locationNode%0A%20birthNode%0A%20%20extends%20abstractEventNode%0A%20%20cells%20keywordCell%0A%20%20crux%20birth%0A%20deathNode%0A%20%20extends%20abstractEventNode%0A%20%20cells%20keywordCell%0A%20%20crux%20death%0A%20abstractLocationNode%0A%20%20abstract%0A%20streetNode%0A%20%20cells%20keywordCell%0A%20%20extends%20abstractLocationNode%0A%20%20catchAllCellType%20streetAddressCell%0A%20cityNode%0A%20%20extends%20abstractLocationNode%0A%20%20cells%20keywordCell%20cityCell%0A%20countryNode%0A%20%20extends%20abstractLocationNode%0A%20%20cells%20keywordCell%20countryCell%0A%20stateNode%0A%20%20extends%20abstractLocationNode%0A%20%20cells%20keywordCell%20stateCell%0A%20zipCodeNode%0A%20%20extends%20abstractLocationNode%0A%20%20cells%20keywordCell%20zipCell%0A%20locationNode%0A%20%20inScope%20abstractLocationNode%0A%20%20crux%20location%0A%20%20cells%20locationKeywordCell%0A%20dateNode%0A%20%20cells%20keywordCell%20monthCell%20dayCell%20yearCell%0A%20%20crux%20date%0A%20observationDateNode%0A%20%20extends%20dateNode%0A%20%20crux%20date%0A%20timeNode%0A%20%20cells%20keywordCell%20timeCell%0A%20%20crux%20time%0A%20observationTimeNode%0A%20%20extends%20timeNode%0A%20%20crux%20time%0A%20abstractProviderNode%0A%20%20abstract%0A%20observationProviderNode%0A%20%20extends%20abstractProviderNode%0A%20%20crux%20provider%0A%20abstractObservationNode%0A%20%20abstract%0A%20%20inScope%20observationDateNode%20observationTimeNode%20observationProviderNode%20locationNode%0A%20abstractSelfReportedObservationNode%0A%20%20extends%20abstractObservationNode%0A%20smokingStatusNode%0A%20%20extends%20abstractSelfReportedObservationNode%0A%20%20crux%20smokingStatus%0A%20%20cells%20keywordCell%20smokingStatusCell%0A%20%20inScope%20packsPerDayNode%20cigarettesPerDayNode%0A%20%20example%0A%20%20%20smokingStatus%20yes%0A%20%20%20%20packsPerDay%201.5%0A%20packsPerDayNode%0A%20%20cells%20keywordCell%20packsPerDayCell%0A%20%20crux%20packsPerDay%0A%20cigarettesPerDayNode%0A%20%20cells%20keywordCell%20cigarettesPerDayCell%0A%20%20crux%20cigarettesPerDay%0A%20pauNode%0A%20%20root%0A%20%20description%20Medical%20Records%20for%20Planet%20Earth.%0A%20%20inScope%20abstractEventNode%20abstractDemographicConceptNode%20abstractObservationNode%20abstractNameNode%0Asample%0A%20firstName%20Linda%0A%20lastName%20Smith%0A%20sex%20Female%0A%20birth%0A%20%20location%0A%20%20date%2012%202%202000%0A%20%20time%202%3A22am%0A%20smokingStatus%20never)

## Overview

Pau is **P**atient **A**ccessible and **U**nderstandable Medical Records.

Imagine if you could copy/paste your complete medical records in a single email to change doctors. Imagine if you could copy/paste your relevant medical records to participate in an important new medical research study. Imagine if you could audit and dive into explanations of every line in your medical records. These are the types of things that Pau will allow.

## Quick Example

    smokes yes
     packsPerDay 1.5
