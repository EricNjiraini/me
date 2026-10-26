---
title: How Big a Sample Does Sales Verification Need?
type: project
date: 2025-10-20
summary: A Monte Carlo simulation in R that finds the smallest sample giving a stable sales verification rate, by resampling each agent's records at increasing sizes.
tags: [R, Monte Carlo, data.table, Sampling]
links:
  - label: View code
    url: https://github.com/EricNjiraini/Sample-Size-vs-Verification-Outcome-Monte-Carlo-Simulation
featured: true
---

## The question

Verifying sales by calling customers costs time and money, so teams check a sample rather than every sale. Sample too few and an agent's verification rate swings from month to month by chance alone. Sample too many and the budget goes on calls that add little.

How big does the sample need to be before the rate can be trusted?

## Approach

1. **Prepare the data.** Keep only sampled, contacted records, flag each one as verified or not, and drop agents with fewer than 30 records.
2. **Simulate.** For each agent, repeatedly draw random samples of increasing size, from 30 up to all of the agent's records, and record the verification rate of each draw.
3. **Measure stability.** Compare the spread of verification rates at each sample size, test whether larger samples give steadier rates for each agent, and fit linear models within and across countries.

The simulation is written in R with data.table for speed.

## What it found

- **Variability falls as samples grow,** as the Central Limit Theorem predicts. Below a certain size, differences between agents are mostly noise.
- **Most agents show the same pattern:** the larger the sample, the steadier their rate.
- **The effect held in every country** in the data, even though baseline verification rates differed. It comes from sampling itself, not from local operations.
- **Stability is the robust result, not the level.** How the average rate moved with sample size varied by country, so the case for larger samples rests on steadier rates, not on a higher or lower average.

## Why it matters

The output is a minimum sample size per agent, so verification effort can be planned and agents compared fairly. The same method works wherever decisions rest on a sampled rate, such as audit samples in finance, quality-control checks in operations or diagnostic testing in healthcare.
