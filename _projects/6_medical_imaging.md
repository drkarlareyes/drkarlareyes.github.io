---
layout: page
title: Medical imaging
description: Vertebral landmarks and spondylolisthesis grading on lumbar X-rays
importance: 6
---

Spondylolisthesis is graded by how far one vertebra has slipped over the one below. I detect the four corners of each lumbar vertebra with Keypoint R-CNN, measure the slip between adjacent levels and assign the Meyerding grade.

On the validation split, the detector reached an AP of 0.758 for vertebra boxes and 0.687 for corner keypoints (0.982 and 0.940 at IoU 0.5).

#### Publications and data

- Reyes-Leiva KM. Prediction of spinal abnormalities in neuroradiology images applying deep transfer learning. *IEEE ICMLANT* (2024). [Paper](https://doi.org/10.1109/ICMLANT59547.2023.10372991)
- Reyes K. Spondylolisthesis Vertebral Landmark. *Mendeley Data*, V1 (2025): 716 lateral lumbar radiographs with boxes and corner keypoints for L3 to S1 (CC BY 4.0). [Data](https://doi.org/10.17632/5jdfdgp762.1)

#### Code

- [spondylolisthesis-detection](https://github.com/drkarlareyes/spondylolisthesis-detection): label conversion, training, detection and grading notebooks.
