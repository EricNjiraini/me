---
title: A Data Governance Framework You Can Adopt
type: project
date: 2025-05-31
summary: A ready-to-use governance kit with data policies, a stewardship matrix, quality rules, a compliance checklist, data dictionary templates and monitoring scripts.
tags: [Data Governance, Data Quality, Stewardship, Compliance]
links:
  - label: View code
    url: https://github.com/EricNjiraini/Data-Governance-Framework
featured: true
tone: indigo
motif: flow
---

## The question

As more people use an organisation's data, the same problems appear: tables named differently by each team, nobody sure who owns a dataset, and KPIs that change depending on who ran the report. Governance fixes this, but most teams don't know where to start.

This framework is a starting kit that a data team can adapt instead of writing from scratch.

## What's inside

| Part | What it gives you |
|---|---|
| Data policies | Core rules for managing data, including naming conventions and sensitivity levels |
| Stewardship matrix | A RACI matrix that names an owner and a steward for each important data asset |
| Data quality rules | Quality dimensions and sample rules, such as flagging impossible values or missing IDs |
| Compliance checklist | Privacy and regulatory checks, for example for GDPR |
| Data dictionary template | A standard format for documenting each dataset |
| Monitoring scripts | Sample checks for data quality and schema drift |

## Who it's for

- **Leaders** set ownership and compliance strategy.
- **Data stewards** keep their datasets accurate and documented.
- **Data engineers** build the validation and monitoring into pipelines.
- **Analysts** know which data to trust and how to use it.

## Keeping it alive

Governance fails when it's written once and forgotten, so the framework includes a review cycle:

| Review | How often | Owner |
|---|---|---|
| Policies | Quarterly | Data manager |
| Data dictionary | Monthly | Stewards |
| Quality monitoring | Weekly | Engineers |

The repository also walks through a hypothetical example: a growing fintech applying each part of the framework in turn.
