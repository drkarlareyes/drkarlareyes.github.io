---
layout: post
title: "Does a wrist-activity model underperform for women?"
date: 2026-10-07 10:00:00 +0200
description: Testing the gender data gap on two public datasets. At coarse activity resolution, sex and hormonal status barely move the model or the measure.
tags: womens-health wearables activity-recognition machine-learning NHANES
categories: research
related_posts: false
toc:
  sidebar: left
---

A common argument for building female specific health data is that models trained mostly on men underperform for women. But I am a scientist so, for me it is worth testing directly rather than assuming. Using two public datasets, a wrist activity recognition benchmark and a national accelerometer survey, I looked for a sex or hormonal status effect on what the model learns and on the measured activity itself. At the resolution at which these datasets operate, the effect is so small as to be negligible. This does not invalidate the argument, but simply indicates where it applies.

##The Experiment

CAPTURE-24 (Chan et al., 2024) pairs wrist accelerometer data with camera confirmed activity labels for 151 adults, 99 women and 52 men. I trained a gradient-boosted classifier on 32 standard features to predict four coarse activity classes, and matched the training sets on age across 50 resamples so that sex, not age, drove any difference.

Macro F1 sat at 0.67 to 0.68 in all results. Training a model on a woman's own sex rather than on a mixed set raised her macro F1 by 0.004 (95% CI −0.003 to 0.011). For men the gain was essentially zero. Between person variation minimized both, with a standard deviation of 0.088 across individuals. Of ten per-class comparisons, exactly one had a confidence interval excluding zero: light activity was classified better for women, by 0.015 F1. In the recognition of wrist activity at a general level, a trained model without regard to sex does not show significantly lower performance in the case of women.

In NHANES 2013–14 (3,815 adults with valid wrist accelerometry), women averaged 0.80 thousand MIMS per day more activity than men after age adjustment, so sex does move the aggregate. Hormonal status within women did not. Comparing menopausal and still menstruating women aged 40 to 59, the activity difference was d = −0.07 (95% CI −0.46 to 0.32), indistinguishable from zero. Across 679 menstruating women whose measured estradiol spanned a 25-fold range, there was no association between estradiol and daily activity (d = 0.03 per doubling, CI −0.03 to 0.09). NHANES carries no cycle day information, so this speaks to hormonal status and level, not to within cycle timing.

## So... where is the Data Gap?

These are null results, and it is worth stating them clearly rather than trying to justify them. At the resolution of four activity classes and daily activity volume, neither sex nor hormonal status changes the model or the measure enough to matter. However, the claim that models underperform for women is not wrong in general. It needs to be made where it counts: fine-grained tasks, specific physiological signals, and outcomes known to track hormones, rather than coarse activity summaries with 4 class classifications...

The same logic applies to collecting new data. A dataset that can show a cycle effect has to resolve the cycle, with confirmed phase and repeated measures, which is exactly what population accelerometry and day labelled benchmarks lack.

## My conclusion on these

Coarse wrist activity is close to sex neutral and hormone neutral in these datasets. It is the wrong place to look for the gender data gap, and a weak place to argue it from. The gap is real where the resolution is fine enough to see it.
If you happen to know any dataset I could test this, please contact me :D

## Data, code and references

The analysis and notebooks are in the public repository [Hormones-Brain-Motion](https://github.com/drkarlareyes/Hormones-Brain-Motion).

1. Cirillo D, et al. npj Digital Medicine. 2020.
2. Joshi A. Frontiers in Big Data. 2024.
3. Chan et al. Scientific Data. 2024. https://doi.org/10.1038/s41597-024-03960-3
4. NHANES 2013–2014, National Center for Health Statistics. https://wwwn.cdc.gov/nchs/nhanes/
