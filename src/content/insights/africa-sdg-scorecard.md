---
title: Africa SDG Scorecard
type: project
date: 2026-04-25
summary: An interactive scorecard tracking 54 African countries against 7 Sustainable Development Goals from 2015 to 2030, built entirely on open data.
tags: [React, Python, Recharts, Open Data, SDGs]
links:
  - label: Live dashboard
    url: https://africa-sdg-scorecard.vercel.app
  - label: View code
    url: https://github.com/EricNjiraini/africa-sdg-scorecard
featured: true
---

## The question

Progress on the Sustainable Development Goals is reported in dozens of separate databases, each with its own indicators, years and country coverage. Comparing countries, or even one country across goals, takes hours of downloading and joining.

The scorecard puts seven goals for all 54 African countries in one place, from the 2015 baseline to the 2030 deadline.

## What it covers

| Goal | Indicator used |
|---|---|
| 1. No poverty | Share living below $2.15 a day |
| 2. Zero hunger | Undernourishment rate |
| 3. Good health | Under-5 mortality rate |
| 4. Quality education | Primary completion rate |
| 7. Clean energy | Electricity access |
| 8. Decent work | GDP per capita growth |
| 13. Climate action | CO₂ emissions per person |

## How it works

- **Overview:** headline figures, the strongest and weakest performers, and a breakdown by region.
- **Scorecard:** a sortable, filterable heatmap of 54 countries by 7 goals.
- **Charts:** bar, radar and scatter views for comparing countries and goals.
- **Country deep-dive:** one profile per country, goal by goal.
- **Analysis:** written commentary on trends across the continent.
- **Sources:** full attribution and method notes for every figure.

The data is prepared in Python and the dashboard is built in React with Recharts.

## Data

Everything comes from open-licensed sources: the UN Global SDG Indicators Database, World Bank World Development Indicators, the WHO Global Health Observatory, FAOSTAT, UNESCO education statistics, Climate Watch greenhouse gas data, and the SDSN SDG Index.

## Why it matters

Funders, ministries and companies working across Africa make portfolio decisions country by country. A single, sourced view of where each country stands on the goals that matter to them is the starting point for those decisions.

*For information only. Not affiliated with the United Nations.*
