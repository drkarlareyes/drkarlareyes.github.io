---
layout: page
title: Contactless vital signs
description: Heart and respiration rate from radar, without touching the patient
importance: 1
---

Radar picks up the tiny chest movements caused by breathing and the heartbeat. I work on separating these movements from body motion and from other people in the room, so that heart and respiration rate can be followed without electrodes or wearables.

**Methods:** multi-person detection and MVDR beamforming with 60 GHz FMCW radar (TI IWR6843), blind source separation (ICA) and multi-resolution analysis for people who move, and open benchmark data for multi-patient monitoring.

#### Publications

- Reyes-Leiva KM, Gupta A, Grosmaire A, Cerny M. SiViS: Simulated multi-patient physiological clinical states for advanced vital sign radar monitoring research. *Scientific Data* (2026). [Paper](https://doi.org/10.1038/s41597-025-06449-9) · [Data](https://doi.org/10.7910/DVN/S9SNAK)
- Reyes-Leiva KM, Gupta A, Cerny M. Radar placement effects on multi-patient heart and respiration monitoring: SiViS dataset validation. *Biomedical Engineering Systems and Technologies*, Springer (2026). [Paper](https://doi.org/10.1007/978-3-032-13312-0_11)
- Reyes Leiva KM, Vondal M, Yang M, Cerny M, Wang Y. Estimating respiratory rate in freely moving users using independent component and multi-resolution analysis. *Computers in Biology and Medicine* (2025). With UWB radar, the best method correlated at 0.94 with the reference in ten people. [Paper](https://doi.org/10.1016/j.compbiomed.2025.110957)
- Gupta A, Reyes-Leiva KM, Cerny M. Multi-objective undercomplete independent component analysis for radar signals based heart rate and interbeat interval estimations. *IEEE EMBC* (2025). [Paper](https://doi.org/10.1109/EMBC58623.2025.11253136)

#### Code and data

- [Radar-signal-processing](https://github.com/drkarlareyes/Radar-signal-processing): decoding, range-angle maps, target detection, MVDR beamforming, and heart and respiration rate for SiViS recordings.
- [SiViS on Harvard Dataverse](https://doi.org/10.7910/DVN/S9SNAK)
