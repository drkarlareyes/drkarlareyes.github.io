---
layout: page
title: EMG, prosthetics and control
description: Reading muscle signals to anticipate and drive hand movement
importance: 2
---

Muscle electrical activity starts before the force it produces. I use surface EMG to anticipate hand movement and to control assistive devices, and I test whether the extra time it gives is real or an artefact of the experimental protocol.

#### Forecasting pinch force from forearm sEMG

Can forearm sEMG tell a robotic hand that a pinch is coming, early enough to be useful? I tested this offline on four public datasets, 77 people in total (Hyser, putEMG-Force, WAY-EEG-GAL and CEMHSEY).

The lead is short once processing is causal: 22 and 54 ms in the pilot. A forecast 100 ms ahead beat the model's own current estimate while force rose, but by little: 1.4 points of a typical press in Hyser, 0.4 in putEMG-Force, and not at all in a reach-and-lift task. A threshold detector rarely caught a press before its force started, even at settings with many false alarms at rest, and during a reach it fired long before the fingers touched the object. A calibration did not carry over to a new session without tens of seconds of new data with force.

- [Forecasting_PinchOnset](https://github.com/drkarlareyes/Forecasting_PinchOnset)

#### Myoelectric soft prosthesis

- Ordoñez-Avila JL, Lopez DD, Ventura D, Molina-Palucho J, Colindres AD, Perdomo ME, Reyes Leiva KM, Fajardo J, Cardona M. A 3D printing soft prosthesis and an IoT architecture for controlling gestures. *Journal of Biomimetics, Biomaterials and Biomedical Engineering* 69:137-150 (2025). A low-cost upper-limb prosthesis made with additive manufacturing and controlled with a myoelectric sensor and a neural network for three grasps (precision 91.25%, recall 90.75%). Soft printed materials help the hand conform to different objects. [Paper](https://doi.org/10.4028/p-y0NyIN)
