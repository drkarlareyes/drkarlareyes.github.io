---
layout: page
title: Radar Signal Processing & Deep Learning
description: Advanced Signal Processing (ICA/MRA) and Synthetic Data Generation (SiViS) for Non-Contact Vital Sign Monitoring.
img: assets/img/radar_project.jpg
importance: 2
category: Signal Processing & AI
related_publications: true
---

### Technical Objective
In the domain of **non-contact physiological monitoring**, the primary data science challenge is separating subtle micro-Doppler signatures (heartbeat/respiration) from high-magnitude noise caused by random body motion.

This project, conducted at the **eHealth Lab (VSB Technical University of Ostrava)**, engineers a robust signal processing pipeline that integrates **Blind Source Separation (BSS)** algorithms with **Deep Learning** architectures to estimate heart rate (HR) and respiratory rate (RR) in freely moving subjects.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/radar_project.jpg" title="Radar Signal Processing Chain" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Visualizing the extraction of physiological micro-movements from complex radar return signals.
</div>

### Advanced Signal Processing Algorithms
To achieve high fidelity in signal extraction, I developed and validated custom algorithmic approaches:

* **Multi-Objective Undercomplete ICA:** I implemented a specialized variation of Independent Component Analysis (ICA). Unlike standard ICA, this "Undercomplete" and "Multi-Objective" approach is optimized to recover specific source signals (vital signs) from a mixture where the number of sensors is fewer than the number of sources (motion artifacts + physiology).
* **Multi-Resolution Analysis (MRA):** To handle the non-stationary nature of human motion, I applied MRA to decompose radar signals into different frequency sub-bands. This allows for the precise isolation of respiratory harmonics from breathing noise.

### Data Science Strategy: The SiViS Dataset (Digital Twin)
A major bottleneck in applying **Deep Learning** to radar health monitoring is the scarcity of labeled data for pathological conditions (e.g., arrhythmias, apnea).

To solve this, I led the data engineering of **SiViS (Simulated Vital Signs)**, a synthetic dataset that serves as a "Digital Twin" for clinical radar research.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/sivis.jpg" title="SiViS Simulation Pipeline" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The SiViS pipeline for generating synthetic radar signatures of multi-patient physiological states.
</div>

* **Physics-Based Simulation:** We engineered a pipeline that models the **Radar Cross Section (RCS)** fluctuations of the human thorax during respiration and cardiac activity.
* **Sim-to-Real Transfer Learning:** This dataset enables a strategy where models are pre-trained on massive synthetic datasets (learning general feature representations) before being fine-tuned on limited real-world clinical data. This significantly improves model robustness and generalization.

### Tech Stack
* **Algorithms:** FastICA, JADE, Wavelet Transform.
* **AI/ML:** Deep Learning (CNNs/RNNs) for time-series forecasting.
* **Simulation:** Physics-based modeling of Radar Cross Section (RCS) fluctuations.
