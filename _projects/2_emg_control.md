---
layout: page
title: EMG, prosthetics and control
description: Reading muscle signals to anticipate and drive hand movement
importance: 2
---

Muscle electrical activity starts before the force it produces. I use surface EMG to anticipate hand movement and to control assistive devices, and I test whether the extra time it gives is real or an artefact of the experimental protocol.

#### Forecasting finger force and pinch onsets from HD-sEMG

An evaluation framework of eight tests, run on the public Hyser and CEMHSEY datasets: how far EMG leads force when only past samples are used (22 to 41 ms here, less than a zero-phase filter suggests), when a forecast beats simply repeating its own last estimate, which calibration data identify the model, whether a cue-only predictor can fake anticipation, and where false pinches come from, including after the electrodes are re-applied on another day. Version 0.2 re-checks the timing and the forecast with causal processing, confidence intervals and a leakage checklist.

- [Forecasting_PinchOnset](https://github.com/drkarlareyes/Forecasting_PinchOnset)

#### Myoelectric soft prosthesis

- Ordoñez-Avila JL, Lopez DD, Ventura D, Molina-Palucho J, Colindres AD, Perdomo ME, Reyes Leiva KM, Fajardo J, Cardona M. A 3D printing soft prosthesis and an IoT architecture for controlling gestures. *Journal of Biomimetics, Biomaterials and Biomedical Engineering* 69:137-150 (2025). A low-cost upper-limb prosthesis made with additive manufacturing and controlled with a myoelectric sensor and a neural network for three grasps (precision 91.25%, recall 90.75%). Soft printed materials help the hand conform to different objects. [Paper](https://doi.org/10.4028/p-y0NyIN)
