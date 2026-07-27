---
layout: post
title: "New Publication: Personalized AI for Exercise Assessment Using Wearable IMUs"
date: 2026-02-06 10:00:00 +0200
inline: false
related_posts: false
---

I'm excited to share our latest publication in *Frontiers in Medical Technology*:

**Anthropometry and Diagnostic Aware Deep Learning for Exercise Assessment**

In this work, we introduce **ADA (Anthropometry and Diagnostic Aware)**, a multimodal deep learning framework that combines wearable IMU motion data with anthropometric and diagnostic information to improve exercise assessment and movement-risk prediction.

Our results show that incorporating subject-specific information significantly improves movement quality classification, increasing accuracy from **86.5%** using kinematic data alone to **94.8%**, while achieving **97.8%** accuracy for movement-related risk prediction. These findings highlight the importance of personalized AI models for sports science, rehabilitation, and digital health. :contentReference[oaicite:0]{index=0}

To encourage reproducible research, we have also released the **raw Xsens IMU dataset** together with the processing pipeline used in the paper. The repository includes:
- Raw wearable IMU recordings of squats and Romanian deadlifts (RDLs)
- Data processing and windowing scripts
- Deep learning implementations of the baseline CNN-LSTM and the proposed ADA model
- Explainability analyses (SHAP) and latent-space visualization tools

I hope this dataset will be useful for researchers working in **Human Activity Recognition, biomechanics, wearable sensing, sports science, rehabilitation, and AI for healthcare**.

📄 **Read the paper:** https://www.frontiersin.org/journals/medical-technology/articles/10.3389/fmedt.2025.1725661/full

💻 **Dataset & code:** https://github.com/drkarlareyes/Xsens-IMU-Raw-Data-Squat-RDL
