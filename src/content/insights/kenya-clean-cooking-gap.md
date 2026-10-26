---
title: Kenya's Clean Cooking Gap, County by County
type: project
date: 2026-04-12
summary: A geospatial study of clean cooking access across Kenya's 47 counties using DHS 2022 data, showing where LPG expansion and e-cooking pilots would do the most good per unit of capital.
tags: [Python, GeoPandas, DHS 2022, Geospatial Analysis, Energy Access]
links:
  - label: View code
    url: https://github.com/EricNjiraini/kenya-clean-cooking-gap
featured: true
tone: forest
motif: map
---

## The question

About 77% of Kenyan households have electricity, yet only around 31% cook with clean fuels. The government's target is universal clean cooking access by 2028.

National averages hide the problem: the gap is spread very unevenly across counties. This study asks where governments, investors and energy companies should focus to get the most adoption for each unit of capital.

## Approach

1. **Access rate by county,** from DHS 2022 household fuel data, measured against the 2028 target.
2. **Household deficit:** the number of households without clean cooking (total households × the share without access). For market sizing, the absolute number matters more than the percentage.
3. **Priority matrix:** counties plotted by market size against access gap, to find the large, under-served ones.
4. **Affordability or distribution?** Laying the Relative Wealth Index over access rates shows whether a county's gap is mainly about what households can afford or about what is available to buy. The two need different responses.
5. **Market archetypes:** k-means clustering groups counties into four types by access, urbanisation, population and wealth.

## What it found

- Urban counties generally have better access (r = 0.72), but urbanisation is no guarantee: eight relatively urban counties in the north and along the coast still have very low access.
- Ten counties combine above-median electric cooking with below-median LPG use. They are the strongest candidates for e-cooking pilots.
- Wealth tracks access most closely (r = 0.88), and not in a straight line: adoption picks up sharply above a certain level.
- Counties with more female-headed households tend to have lower access (r = −0.38).

## Recommendations

- **Expand LPG first** in large, high-deficit counties: Kakamega, Bungoma, Meru, Nakuru and Kilifi.
- **Pilot induction cooking** in the ten e-cooking opportunity counties.
- **Segment the response:** subsidised LPG for low-income rural counties, hybrid LPG and electric programmes for counties in transition, and appliance-led adoption in urban counties.
- **Invest by county,** weighting by the household deficit rather than the national average.

## Data

The analysis uses Kenya DHS 2022 household data (licensed through the DHS Program), the Kenya National Cooking Transition Strategy 2024–2028, World Bank SDG 7 series, GADM county boundaries and the Meta Relative Wealth Index. In line with the DHS terms, raw household data is not published: the repository shares county-level results and the notebooks that reproduce them.

## Next

The same method will be applied across sub-Saharan Africa, adding OnStove cost–benefit estimates to rank countries by the gap between need and capital deployed.
