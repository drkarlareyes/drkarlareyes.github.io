---
layout: post
title: "What is the data gap? The numbers behind it"
date: 2026-09-23 10:00:00 +0200
description: Start here. What the data gap in women's health is, how it was built, and what the published numbers say about its size.
tags: womens-health data-gap menstrual-cycle wearables statistics
categories: research
featured: true
related_posts: false
toc:
  sidebar: left
---

Women are half the population of the world, and a minority of the evidence in data. 
That is the *data gap*: tThe measurements, studies, and datasets on which medicine and health technology are based describe male bodies better than female bodies, and almost never record the hormonal state that causes changes in female physiology over time. This post is the entry point to this blog.
It explains out the gap with numbers and evidence. 

## How the gap was built

The gap has a documented origin. In 1977 an FDA guideline excluded most women of childbearing potential from early phase drug trials. It stood until 1993, when the FDA rescinded it and the NIH Revitalization Act made the inclusion of women in federally funded clinical research a legal requirement (Liu and Dipietro Mager, 2016). Sixteen years of drug development ran under that exclusion, and many drugs prescribed today were approved before it ended (Zucker and Prendergast, 2020).

The rule is gone. However, its effect on the evidence base is not gone, because data collected without women cannot be corrected afterwards. It can only be replaced.

## How large it is today

Four audits, in four fields, counted the same thing in different ways.

| Field | What was counted | Result |
| --- | --- | --- |
| Open biosignal data | 175 human datasets on PhysioNet | Fewer than 7% report sex or gender, age, race and ethnicity together. Where sex is reported, samples are mostly male (Jiang et al., 2024) |
| Sport and exercise science | 5,261 studies in six journals, 2014 to 2020 | 6% studied women only, against 31% men only. Women were 34% of 12.5 million participants (Cowley et al., 2021) |
| Neuroimaging | Studies published since the 1990s | Fewer than 0.5% consider health factors specific to women (Taylor et al., 2021; Jacobs, 2023) |
| Basic biology | 720 articles in nine disciplines, 2009 against 2019 | More studies include both sexes. In eight of nine disciplines, no more of them analyse by sex (Woitowich et al., 2020) |

The first row is the one closest to my own work. PhysioNet is one of the largest open repositories of biosignal data, and it is widely used to develop, train and validate algorithms ALL OVER THE WORLD. An algorithm trained on a dataset that does not say who was measured,IT cannot be checked for whom it works with certanty.

The last row is the most uncomfortable: The inclusion went up and the analysis did not. Including women in a study and learning something about women are different things.

## The variable that is never recorded

Sex variable is the easy part of the gap. A dataset can add a column for it. The harder part is that female physiology is not constant (embedded problem), and the variable that tracks the change is rarely and/or never measured.

Across one menstrual cycle, estradiol rises about 12-fold and progesterone about 800-fold (Pritschet et al., 2020). A woman goes through roughly 450 cycles in her lifetime (Rizor et al., 2024). More than 100 million women use oral hormonal contraceptives, which suppress the body's own hormone production and replace that rhythm with a different one (Taylor et al., 2021).

These swings reach the signals that wearables already collect. In 274 cycles from 91 women wearing a wrist sensor during sleep, pulse rate was 2.1 beats per minute higher in the fertile window than during menstruation, and 3.8 beats per minute higher in the mid-luteal phase (Shilaih et al., 2017). Body temperature rises by 0.28 to 0.56 °C after ovulation, and in a cohort of 237 women, wrist skin temperature, heart rate and respiratory rate all shifted with cycle phase (Goodale et al., 2019).

A device that does not know the cycle phase has to attribute those shifts to something else: fitness, recovery, stress, illness. The measurement is correct. The interpretation is missing a variable. How well that variable can be recovered without a hormone measurement is a separate question, and I test it in [another post](/blog/2026/counting-days-is-not-measuring-phase/).

## Costs and effects of the Gap

Three figures on a population scale show where it stands.

**Drugs.** Women experience adverse drug reactions nearly twice as often as men (Zucker and Prendergast, 2020). Most pharmacotherapeutic guidelines remain sex-neutral, although absorption, distribution, metabolism and excretion all differ by sex and vary with hormonal state (Aljohmani and Yildiz, 2025).

**Diagnosis.** In hospital records from 6.9 million people, the whole Danish population over 21 years, women were diagnosed later than men for 770 disease types, by about four years on average (Westergaard et al., 2019). A registry records the age at first diagnosis, so it cannot by itself separate later onset from later recognition. Either way, the pattern holds across hundreds of conditions.

**Autoimmune disease.** In records from 22 million people in the UK, 19 autoimmune disorders together affect about 10% of the population: 13% of women and 7% of men (Conrad et al., 2023). A disease group that affects women at nearly twice the rate of men depends on the same evidence base described above.

## Unresolved

None of this means every reported cycle effect is real. Whether athletic performance changes with cycle phase is still called "a constant scientific debate", made harder by studies that never measured the hormones (Schlie et al., 2025). For pain, most well-controlled studies in healthy women find no effect of phase (Iacovides et al., 2015).

I take that uncertainty seriously, and I think it has the same cause as everything above. Small samples, single sessions and unmeasured hormones produce inconsistent results in both directions. A field cannot settle a question with data that was never collected to answer it.

## Why this is personal

I do not come to this topic only as an engineer. I live with an autoimmune disease, and I am tracking my own body recomposition. When I look at my own numbers, I want to know which changes are the ones I am working for and which belong to my cycle or to my condition. That question is the data gap at the scale of one person, and it is the reason I keep working on it.


## References

1. Liu KA, Dipietro Mager NA. Women's involvement in clinical trials: historical perspective and future implications. Pharmacy Practice. 2016;14(1):708. [doi:10.18549/PharmPract.2016.01.708](https://doi.org/10.18549/PharmPract.2016.01.708)
2. Zucker I, Prendergast BJ. Sex differences in pharmacokinetics predict adverse drug reactions in women. Biology of Sex Differences. 2020;11:32. [doi:10.1186/s13293-020-00308-5](https://doi.org/10.1186/s13293-020-00308-5)
3. Jiang S, Ashar P, Shandhi MMH, Dunn J. Demographic reporting in biosignal datasets: a comprehensive analysis of the PhysioNet open access database. The Lancet Digital Health. 2024;6(11):e871–e878. [doi:10.1016/S2589-7500(24)00170-5](https://doi.org/10.1016/S2589-7500%2824%2900170-5)
4. Cowley ES, Olenick AA, McNulty KL, Ross EZ. "Invisible sportswomen": the sex data gap in sport and exercise science research. Women in Sport and Physical Activity Journal. 2021;29(2):146–151. [doi:10.1123/wspaj.2021-0028](https://doi.org/10.1123/wspaj.2021-0028)
5. Taylor CM, Pritschet L, Jacobs EG. The scientific body of knowledge: whose body does it serve? A spotlight on oral contraceptives and women's health factors in neuroimaging. Frontiers in Neuroendocrinology. 2021;60:100874. [doi:10.1016/j.yfrne.2020.100874](https://doi.org/10.1016/j.yfrne.2020.100874)
6. Jacobs EG. Only 0.5% of neuroscience studies look at women's health. Here's how to change that. Nature. 2023;623(7988). [doi:10.1038/d41586-023-03614-1](https://doi.org/10.1038/d41586-023-03614-1)
7. Woitowich NC, Beery A, Woodruff T. A 10-year follow-up study of sex inclusion in the biological sciences. eLife. 2020;9:e56344. [doi:10.7554/eLife.56344](https://doi.org/10.7554/eLife.56344)
8. Pritschet L, Santander T, Taylor CM, et al. Functional reorganization of brain networks across the human menstrual cycle. NeuroImage. 2020;220:117091. [doi:10.1016/j.neuroimage.2020.117091](https://doi.org/10.1016/j.neuroimage.2020.117091)
9. Rizor EJ, Babenko V, Dundon NM, et al. Menstrual cycle-driven hormone concentrations co-fluctuate with white and gray matter architecture changes across the whole brain. Human Brain Mapping. 2024;45(11):e26785. [doi:10.1002/hbm.26785](https://doi.org/10.1002/hbm.26785)
10. Shilaih M, de Clerck V, Falco L, Kübler F, Leeners B. Pulse rate measurement during sleep using wearable sensors, and its correlation with the menstrual cycle phases, a prospective observational study. Scientific Reports. 2017;7:1294. [doi:10.1038/s41598-017-01433-9](https://doi.org/10.1038/s41598-017-01433-9)
11. Goodale BM, Shilaih M, Falco L, Dammeier F, Hamvas G, Leeners B. Wearable sensors reveal menses-driven changes in physiology and enable prediction of the fertile window: observational study. Journal of Medical Internet Research. 2019;21(4):e13404. [doi:10.2196/13404](https://doi.org/10.2196/13404)
12. Aljohmani A, Yildiz D. Biological sex differences in pharmacokinetics and adverse drug reactions. Naunyn-Schmiedeberg's Archives of Pharmacology. 2025;399:3285–3301. [doi:10.1007/s00210-025-04721-8](https://doi.org/10.1007/s00210-025-04721-8)
13. Westergaard D, Moseley P, Sørup FKH, Baldi P, Brunak S. Population-wide analysis of differences in disease progression patterns in men and women. Nature Communications. 2019;10:666. [doi:10.1038/s41467-019-08475-9](https://doi.org/10.1038/s41467-019-08475-9)
14. Conrad N, Misra S, Verbakel JY, et al. Incidence, prevalence, and co-occurrence of autoimmune disorders over time and by age, sex, and socioeconomic status: a population-based cohort study of 22 million individuals in the UK. The Lancet. 2023;401(10391):1878–1890. [doi:10.1016/S0140-6736(23)00457-9](https://doi.org/10.1016/S0140-6736%2823%2900457-9)
15. Schlie J, Krassowski V, Schmidt A. Effects of menstrual cycle phases on athletic performance and related physiological outcomes. A systematic review of studies using high methodological standards. Journal of Applied Physiology. 2025. [doi:10.1152/japplphysiol.00223.2025](https://doi.org/10.1152/japplphysiol.00223.2025)
16. Iacovides S, Avidon I, Baker FC. Does pain vary across the menstrual cycle? A review. European Journal of Pain. 2015;19(10):1389–1405. [doi:10.1002/ejp.714](https://doi.org/10.1002/ejp.714)
