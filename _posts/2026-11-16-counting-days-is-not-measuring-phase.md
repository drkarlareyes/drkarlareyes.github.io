---
layout: post
title: Counting days is not measuring phase
date: 2026-11-16 12:00:00 +0100
description: How calendar based cycle labels mislead women's health data, and what the Marquette cycle data show.
tags: womens health menstrual cycle wearables signal processing
categories: research
related_posts: false
toc:
  sidebar: left
---

Most datasets and studies that work with the menstrual cycle assign phase by counting days from the last period. The count is a proxy for an underlying hormonal state, and a weak one. In 1,498 cycles from 157 women tracked with a urinary-hormone monitor, a fixed calendar rule placed a session in its intended cycle phase 53 to 60 percent of the time, depending on the window. The physiology these labels stand in for varies across the cycle, so a label that is wrong a third to a half of the time is not a small measurement detail... It sets a ceiling on what any downstream analysis or model can recover.

## Importance of the phase label

Women are half the population, however the datasets behind health AI and motion science were built almost entirely on male or sex neutral physiology (Jiang et al., The Lancet Digital Health). Where the cycle is considered at all, it enters as an estimated independent variable: a session is labelled follicular or luteal, and outcomes are compared across those labels.

Hormonal state across the cycle is associated with measurable shifts in neuromuscular function, strength, sleep and cognition. A meta-analysis of 22 studies reported moderate shifts in maximal muscle strength favouring the late follicular phase (Niering et al., 2024), and grip and isokinetic torque vary across biochemically confirmed phases in physically active women (Weidauer et al., 2020)... can you imagine how sports performance are impacted over this changes?

The difficulty is that the label is usually estimated, not measured. Calendar counting and basal body temperature stand in for hormonal confirmation, and each introduces error at the exact point where the signal is read. Models trained on data labelled this way inherit the error, and biomedical AI systems already underperform for women when trained on non-representative data (Cirillo et al., 2020; Joshi, 2024). Before asking whether a cycle effect exists, it is worth asking how often the label naming the phase is correct.

## Research Question AND experiments

The Marquette Menstrual Cycle Data contains day by day records from women using an electronic fertility monitor that reads urinary luteinizing hormone and an estrogen metabolite (Fehring, 2012; Fehring et al., 2013). The monitor marks a hormonally defined peak day near ovulation, which gives a per-cycle anchor that calendar counting does not.

I used the monitor tracked cycles, 1,498 cycles from 157 women, and took the peak day as the ovulation reference. The question is simple: without the monitor, assigning phase by counting days instead, how often would you be right?

## Findings

1. Ovulation does not normally happen on day 14
Ovulation fell on a median of day 15, with an interquartile range of day 14 to 18. It landed exactly on day 14, the textbook value, in 15 percent of cycles. Luteal length was also variable, with a median of 13 days and an interquartile range of 12 to 14.

A woman's own history helps, but only partly. The within woman standard deviation of the ovulation day was 2.2 days, and the intraclass correlation was 0.64. About a third of the variance in ovulation timing sits within women across their own cycles, so a personalized estimate built from a woman's average still leaves a two day spread around any single cycle. The day-14 assumption is wrong for most cycles, and one woman's mean does not determine the current mean.

2. A day-21 visit is not the luteal phase
Scheduling makes the cost concrete. The table below shows how often three common rules place a session in its intended window, across the same 1,498 cycles.

| Target window | Fixed calendar day | Backward from usual length | Backward from actual length |
| --- | --- | --- | --- |
| Mid-luteal (ovulation +5 to +9) | 60% | 66% | 77% |
| Periovulatory (ovulation -2 to +1) | 53% | 57% | 73% |

Next, two things: A fixed day visit misses its intended phase in a quarter to nearly half of cases, and the direction of counting matters. Counting backward from the realized length of the cycle, when it is known, is consistently better than counting forward from the last period, because luteal length is more stable than follicular length.

3. There is a statistical cost
Phase misclassification does not only mislabel cases, it attenuates the effect under study. When a fraction of sessions carry the wrong phase, a real difference between phases is diluted toward zero, and more participants are needed to recover the same power. Under a simplified all or none misclassification model, the inflation in required sample size ranged from about 1.7 for actual length backward counting to 2.8 for the fixed day-21 rule. These figures are an approximation, not a precise correction.

What is not in doubt, though, is the direction. A single session per woman, scheduled by calendar, detects only large effects, and part of the inconsistency in the cycle literature is likely noise in the phase label rather than the absence of an effect. In programs designed specifically for women, sessions scheduled according to a hormonal marker, such as an LH urine test, eliminate most of this disadvantage.

## Interpretation and suggestions

Although the monitor gives a hormonally defined peak day, it is a urinary marker rather than serum, so it bounds how well calendar counting could do rather than defining ground the truth exactly. The cohort is also women with regular cycles tracking to conceive, so the spread in the wider population, including adolescence and the perimenopausal transition, is likely wider, not narrower. The analysis is exploratory and the sample size figures are illustrative.

The practical implications for experiments design are specific:

- Confirm phase with a hormonal marker wherever the design allows it.
- Where it does not, count backward from the realised cycle length rather than forward from the last period, and do not treat day 14 and day 21 as fixed.
- Report the phase assignment method explicitly. An effect measured against confirmed phase and one measured against a calendar label are not the same measurement.

For anyone building cycle aware wearables or models, the label is the FOUNDATION!!!!. If it is wrong a third of the time, everything trained on it inherits that error. Counting days is cheap... It is also wrong often enough to matter.

## Data, code and references

The analysis and notebooks are in the public repository [Hormones-Brain-Motion](https://github.com/drkarlareyes/Hormones-Brain-Motion). The source is the Marquette Menstrual Cycle Data.

1. Jiang S, et al. The Lancet Digital Health.
2. Niering M, et al. Sports. 2024.
3. Weidauer LA, et al. Journal of Musculoskeletal and Neuronal Interactions. 2020.
4. Cirillo D, et al. npj Digital Medicine. 2020.
5. Joshi A. Frontiers in Big Data. 2024.
6. Fehring RJ. Menstrual Cycle Data. Marquette University e-Publications, 2012. https://epublications.marquette.edu/data_nfp/7
7. Fehring RJ, Schneider M, Raviele K, et al. Contraception. 2013. https://doi.org/10.1016/j.contraception.2012.10.010
