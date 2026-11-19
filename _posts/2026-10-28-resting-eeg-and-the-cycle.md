---
layout: post
title: "What resting EEG can and cannot say about the menstrual cycle"
date: 2026-10-28 10:00:00 +0100
description: A public EEG dataset of 69 women cannot separate a cycle or contraceptive effect from noise. A power and labeling analysis.
tags: womens-health menstrual-cycle EEG statistical-power neuroscience
categories: research
related_posts: false
toc:
  sidebar: left
---

This public EEG dataset let us ask a direct question: do resting brain rhythms differ between women on hormonal contraception and naturally cycling women, or across the menstrual cycle? With 37 contraceptive users and 32 non-users, the answer this dataset can support is that it cannot tell. After correction for multiple comparisons, no spectral measure differed between groups. This does not prove that cycling does not alter the resting EEG. The dataset is too small to detect anything more than a significant effect, and the method used is too imprecise to determine the phase.

## The Experiment

ds007615 (Normannseth et al., 2025) contains resting state EEG from 69 women, 37 using hormonal contraception and 32 naturally cycling. I compared seven standard spectral measures between the two groups, including absolute and relative alpha power and the individual alpha peak frequency, and corrected for the seven tests with the Holm procedure.

## The Findings

No measure differed between groups after correction. The largest raw effect was absolute alpha power, with a standardized difference of d = 0.48, but its 95% confidence interval ran from −0.00 to 0.96: consistent with a moderate effect and equally consistent with none. Relative alpha power (d = 0.33) and individual alpha peak frequency (d = −0.36) were smaller and also non significant.

The useful question is not whether the test was significant, but what it could have found. The minimum detectable effect for the contraceptive contrast was 0.69 SD. For a luteal vrs other comparison within the naturally cycling women, it was 1.13 SD. Lesser effects than that were never within reach. Detecting a moderate between groups effect (d = 0.5) at conventional power would need roughly 64 women per group, about twice this dataset.

A design for woman measurements, changes the arithmetic. Measuring the same women at two cycle points, rather than comparing different women once, would bring the minimum detectable effect down to about 0.35 SD with 27 women, assuming a within subject correlation of 0.8. The gain comes from removing between person variation, which in resting EEG is large.

The phase labels are also crude:  The phase labels in a dataset like this are assigned by counting days, not by measuring hormones. Here the cycle is divided into fixed day ranges (1–6, 7–12, 14+), and a binary follicular/luteal split places the ovulatory window into the luteal class. Recomputing the label by counting backward from each woman's cycle length changes it for 14 of 26 cycles. A comparison built on these labels is comparing noisy groups, which widens the confidence intervals further. It is the same calendar problem that undermines day-based phase assignment elsewhere, now sitting on top of an already underpowered test.

## My suggestion on experimental design

The honest reading of ds007615 is that it does not answer the question, and it says why: too few women, measured once, labelled by calendar. A dataset that could answer it would measure the same women across the cycle, with phase confirmed by a hormonal marker rather than a date. That is a different experimental design, not a larger version of this one.

## Data, code and references

The analysis and notebooks are in the public repository [Hormones-Brain-Motion](https://github.com/drkarlareyes/Hormones-Brain-Motion).

1. Pritschet L, et al. NeuroImage. 2020.
2. Normannseth, et al. Frontiers in Human Neuroscience. 2025.
3. OpenNeuro dataset ds007615. https://doi.org/10.18112/openneuro.ds007615.v1.0.0
