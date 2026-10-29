---
title: Start Data Governance With the Numbers People Argue About
type: article
date: 2026-10-29
summary: Governance stalls when it starts with policy. Follow a hypothetical distributor that started with the KPIs leadership argued about instead.
tags: [Data Governance, Data Quality, Stewardship, KPIs]
featured: true
tone: slate
motif: kpi
---

## The usual starting point

Most data governance programmes begin with a document: a policy, a RACI chart, a data catalogue that nobody opens after launch week. The intent is right but the order is wrong. People don't adopt governance because a policy exists. They adopt it when it settles an argument they're tired of having.

Every growing organisation has those arguments. Sales and finance report different revenue for the same month. Two dashboards disagree on how many customers are active. A regional manager doesn't trust the central numbers, so they keep a spreadsheet of their own. Each time, someone spends a day reconciling figures instead of acting on them.

Those arguments are the best place to start. The cost of ungoverned data is already visible, and the people who need to agree are already in the room. This article follows one company through five steps that start there.

## Meet Tawileaves Agri

*Tawileaves Agri is a hypothetical company, and all its figures are illustrative.*

Tawileaves Agri sells seed and fertiliser on credit to smallholder farmers in three countries. Its 400 field agents register farmers and take orders on a mobile form, and farmers repay through mobile money. Orders and stock live in an ERP, and customer records in a CRM.

At the monthly review, the head of sales reports 52,000 active customers, finance reports 31,000, and the field operations lead brings a spreadsheet with a third number. Each is right by its own definition. Sales counts every farmer registered this season, finance counts farmers who repaid in the last 90 days, and field operations counts farmers an agent visited last month. The first hour of every review goes on deciding which number to believe.

## 1. List the numbers decisions hang on

Start with the 10 to 15 measures in the leadership pack: revenue, active customers, units sold, collections, churn, or whatever the monthly review is built on. Leave the rest of the warehouse for later.

A scope this small can be governed in weeks rather than quarters, and every improvement lands in front of the people whose support you need for the next phase.

**At Tawileaves Agri,** the leadership pack had 14 measures. Listing where each one was calculated showed that six were produced in more than one place, with different results. Active customers, repayment rate and agent productivity caused the most arguments, so they went first.

## 2. Give each one definition and one owner

Write each measure on one page, in the same format. Here is Tawileaves Agri's entry for active customers:

| Field | Tawileaves Agri's entry |
|---|---|
| Measure | Active customer |
| Definition | A farmer with at least one repayment in the last 90 days |
| Business owner | Chief Commercial Officer |
| Steward | The analyst who maintains the calculation |
| Source | Mobile money repayments, matched to CRM customer IDs |
| Refreshed | Daily |
| Known caveats | Farmers on an approved repayment holiday count as active |

The owner is a business leader, not the data team, because choosing a definition is a business decision. The data team's job is to make the agreed definition calculate the same way in every report. When two teams disagree, the owner decides once and the decision is written down, so the argument doesn't come back next quarter.

**At Tawileaves Agri,** the chief commercial officer chose finance's definition, because it counts the farmers who are still paying. Sales' number became *registered farmers* and field operations' became *farmers visited*. Neither was lost. They just stopped sharing a name.

## 3. Check quality where data enters, not where it's reported

Most errors are created at capture: free text where a drop-down belonged, a customer registered twice, a missing ID. Caught on a dashboard, each one becomes a manual clean-up, repeated every month.

Move the checks upstream:

- **At collection:** constraints and required fields in forms and field apps (KoboCollect and ODK support both), so impossible values can't be submitted.
- **As data lands:** validation rules on each critical dataset for completeness, validity, uniqueness and timeliness, run before the data reaches reporting.
- **Over time:** the pass rate for each dataset, tracked weekly, so data quality is a number with a trend rather than a feeling.

**At Tawileaves Agri,** the first checks found that about 1 in 8 farmer registrations had no phone number, or one already used by another farmer. Those farmers' repayments couldn't be matched to them, so they never counted as active. The agents' form now requires a phone number in a valid format, and duplicates are flagged as the data lands, which stops new cases at the source.

## 4. Make the governed number the easiest one to use

Governance that adds friction gets bypassed. If an analyst has to rebuild "active customers" from raw tables, they'll write their own version, and you're back to two numbers.

So make the certified version the quickest to reach: a certified dataset or semantic layer in the BI tool, the definition one click from the chart, and a clear label on what's certified and what's exploratory.

A platform migration is the best moment to do this. You're rebuilding the pipelines anyway, so carry the agreed definitions across instead of copying the old reports as they were.

**At Tawileaves Agri,** the three measures were published as a certified dataset in the BI tool, with each definition shown beside its chart. Regional teams now build their dashboards on it instead of on raw exports.

## 5. Widen the scope on a schedule

Once the first measures hold, extend to the datasets they depend on, then to the next tier of reports. Each new area gets the same treatment: a definition, an owner, checks at entry and a governed version people can find.

Keep a review rhythm so definitions don't drift: policies each quarter, the data dictionary each month and quality monitoring each week.

**At Tawileaves Agri,** the rest of the leadership pack followed over the next two quarters, then the field operations reports.

## How to tell it's working

- Fewer "which number is right?" requests reach the data team.
- More of the leadership pack has a written definition and a named owner.
- Quality pass rates on critical datasets hold steady or improve week on week.
- Shadow spreadsheets are retired because people trust the shared version.

None of these needs a governance tool to measure. They need someone to count them each month and report them alongside the KPIs themselves.

**At Tawileaves Agri,** the monthly review now opens with one active-customer number, and the field operations spreadsheet has been retired.

## Tools to start with

The [Data Governance Framework](/insights/data-governance-framework) has the policies, stewardship matrix, data dictionary template and review cycle this article draws on. The [Data Quality and Integration](/insights/data-quality-integration) project has the SQL and R validation scripts and intake templates for step 3.
