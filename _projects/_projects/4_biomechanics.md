---
layout: page
title: Computational Biomechanics & IoT
description: From Explainable AI (ADA) and Deep Learning HAR architectures to Finite Element Analysis (FEA).
img: assets/img/sports.jpg
importance: 4
category: Modeling & Simulation
related_publications: true
---

### Technical Architecture
This research line represents a convergence of **Computational Mechanics**, **Deep Learning**, and **Explainable AI (XAI)**. We aim to bridge the gap between "gold standard" optical motion capture and accessible, low-cost AI solutions, while solving critical engineering challenges in hyperparameter optimization and structural modeling.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/sports.jpg" title="OpenSim Skeleton" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/assistive.jpg" title="Pose Estimation" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left: Inverse kinematics modeling in OpenSim. Right: Real-time pose estimation for gait analysis.
</div>

### 1. ADA Framework: Explainable AI & Anthropometry
**ADA (Anthropometry and Diagnostic Aware Deep Learning)** represents a novel architecture designed to solve the "Black Box" problem in clinical exercise assessment.

* **Anthropometric Integration:** Unlike standard pose estimation models that treat all skeletons identically, ADA integrates a distinct **anthropometric embedding layer**. This fuses static scalar features (height, weight, limb length ratios) with dynamic time-series kinematic data, allowing the model to normalize diagnostic outputs based on individual body biomechanics.
* **Explainable AI (XAI):** We implemented **Attention Mechanisms** and **Saliency Maps** to visualize which specific joint angles or temporal frames contributed most to the diagnostic classification. This provides clinicians with interpretable reasoning (e.g., "Knee valgus detected during frame 30-45"), ensuring trust in automated assessments.
* **Diagnostic Awareness:** The loss function was modified to penalize kinematic deviations specifically correlated with injury risk (e.g., ACL tear mechanics) rather than generic pose reconstruction errors.

### 2. Deep Learning for Human Activity Recognition (HAR)
This track investigates the optimization of Deep Learning architectures for processing raw inertial data.

* **Hyperparameter Optimization (Sliding Windows):** In our study on acceleration-based HAR, we conducted a rigorous sensitivity analysis of **sliding window techniques**. We mathematically determined optimal window sizes and overlap percentages to maximize the F1-score of Convolutional Neural Networks (CNNs), demonstrating that incorrect windowing can degrade model accuracy by up to 15%.
* **Sensor Fusion Architectures:** We compared Deep Learning performance using low-cost Inertial Measurement Units (IMUs) against optical Motion Capture systems. The architecture utilized **sensor fusion** layers to combine accelerometer and gyroscope streams, achieving recognition rates comparable to expensive MoCap setups for rehabilitation exercises.
* **Spatio-Temporal Extraction:** Developed algorithms to extract granular gait parameters (stride length, stance phase duration, cadence) from single-point wearable sensors. This involved signal processing techniques to identify zero-velocity updates (ZUPT) and correct for integration drift in MEMS sensors.

### 3. Computational Validation & Inverse Dynamics
We focus on validating "edge" AI tools against physics-based ground truths.

* **Markerless vs. Marker-Based:** We performed a quantitative validation of **BlazePose** and **OpenCap** architectures against gold-standard Vicon/Optitrack systems. This involved computing **Root Mean Square Error (RMSE)** and **Bland-Altman plots** for lower extremity joint angles (hip flexion, knee flexion, ankle dorsiflexion) during dynamic gait cycles.
* **Inverse Dynamics:** Utilized **OpenSim** pipelines to calculate joint moments and forces from video-based kinematic data. This allows us to estimate the internal load on biological structures using only 2D video inputs.

### 4. Finite Element Analysis (FEA) & Soft Robotics
* **Topology Optimization:** Conducted structural stress testing on **Solid Ankle-Foot Orthotics (AFOs)**. We modeled the **anisotropic properties** of Additive Manufacturing (3D printed) materials (PLA/PETG) to predict failure points under gait cycle loads using Von Mises stress criteria.
* **Mesh Convergence:** Validated mesh quality and boundary conditions to ensure that the Finite Element Method (FEM) simulation accurately reflected the non-linear contact mechanics of the foot-orthosis interface.
* **IoT Soft Prosthesis:** Designed a 3D-printed soft prosthesis controlled via an **IoT architecture**. We implemented low-latency signal processing pipelines to map electromyography (EMG) signals to pneumatic actuator movements in real-time.
