---
layout: page
permalink: /publications/
title: publications
description: Peer-reviewed articles, conference papers and datasets, newest first.
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

## The data behind these papers

Most of these papers start with data that I collected or helped collect, often together with my students. When the data I need is not available in my lab, I test the methods on public datasets first; those tests are in my [repositories]({{ '/repositories/' | relative_url }}).

**Radar.** For [SiViS](#reyes2026sivis) we recorded two and three patient simulators (SimMan 3G Plus) in the emergency room of the Ostrava University Training Hospital, in twelve clinical states from rest to apnea and cardiac arrest. We used a TI IWR6843AOP radar with a DCA1000 capture board and an Infineon 60 GHz Doppler radar, placed above, in front of and beside the beds at 1 to 4 m, for more than 100 radar configurations; the same recordings support the [radar placement study](#reyes2026radar). For [respiratory rate in moving people](#reyes2025respiratory) we recorded ten people with UWB radar. Two projects are ongoing. One is a multimodal dataset recorded in a lab furnished as a nursing-home living room, bedroom and toilet, with 60 GHz FMCW radar, multi-camera markerless motion capture, a wrist physiological monitor and a capacitive floor sensor, annotated in 13 classes from postures and daily activities to medication-taking and falls, in solo and assisted protocols. The other is continuous radar monitoring of about 40 rooms in four nursing homes in Ostrava, 24 hours a day.

**Wearable sensors and EMG.** For [ADA](#reyes2026ada), 15 healthy adults (8 men and 7 women, 19 to 35 years) each performed 10 correct and 10 incorrect squats and Romanian deadlifts with a certified trainer, recorded with a full-body Xsens MVN Link suit (17 IMUs at 60 Hz) and video. For [activity recognition](#jaen2021faia), ten people walked, stood up from a chair and squatted while recorded with IMUs and optical motion capture; the same line of work looked at [window length](#jaen2022sliding) and [combined signals](#jaen2023impact). I have also recorded surface EMG of the shank muscles in ten people; that dataset is not published. Our [3D-printed soft hand prosthesis](#ordonez2025prosthesis) is driven by a myoelectric sensor and recognises three grasps.

**Gait and visual impairment.** Nine visually impaired adults (23 to 70 years, cane or guide-dog users) walked 45 routes of 7 to 45 m in and around their homes, 1,039 m and 2,068 steps in total, with two BNO055 IMUs for gait and a MetaMotionR sensor for posture ([Sensors 2023](#reyes2023spatio)). Before that, ten blindfolded volunteers tried three long-cane techniques with IMUs on the leg and on the cane ([Entropy 2021](#reyes2021proposal)), building on our [cane measurement system](#reyes2020cane) and a [simplified gait method](#reyes2021simplified) with low-cost IMUs. At KIT I built a [computer-vision assistant](#reyes2023vending) for visually impaired people using vending machines.

**Video, sport and rehabilitation.** With students in Honduras we filmed 22 university volleyball, basketball and soccer players in four Functional Movement Screen exercises ([EHB 2023](#guevara2024kinovea)), and 13 pre-junior players of the national volleyball team spiking and blocking (under review). We also analysed [soccer passes](#diaz2025soccer) with video and inertial sensors, compared [BlazePose with Kinovea](#zambrano2024blazepose) for joint angles during gait, tested [OpenCap](#bronfield2024opencap) with a stroke survivor and three healthy participants, and tried a [real-time exercise coach](#reyes2026jbbbe) for seven Vivifrail exercises with 14 volunteers.

**Medical images.** For [spinal X-ray analysis](#reyes2024spinal) and spondylolisthesis grading we assembled 716 lateral lumbar spine X-rays, 208 from Honduran patients and 508 from the public BUU-LSPINE set, and annotated the corners of each vertebra from L3 to S1 on 698 of them. The dataset is open on [Mendeley Data](https://doi.org/10.17632/5jdfdgp762.1).

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

{% bibliography %}

</div>
