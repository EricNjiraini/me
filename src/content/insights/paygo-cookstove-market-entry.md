---
title: PayGo Cookstove Market Entry
type: project
date: 2026-04-12
summary: Market sizing, credit-risk scoring and churn prediction for a hypothetical pay-as-you-go cookstove company choosing between Kenya, Uganda, Tanzania and Ethiopia.
tags: [Python, XGBoost, Survival Analysis, Market Sizing, Geospatial]
links:
  - label: View code
    url: https://github.com/EricNjiraini/paygo-cookstove-market-entry
featured: true
---

## The question

A pay-as-you-go (PayGo) cookstove company planning its next launch has three linked decisions to make:

1. **Where to enter:** which country, and which zones within it.
2. **Who to lend to:** which customers to offer credit when they sign up.
3. **Who to keep:** which paying customers are about to stop, and when, so field agents can step in early.

This project answers all three for Kenya, Uganda, Tanzania and Ethiopia and brings them together in one market-entry recommendation.

## Approach

### 1. Market sizing and entry priority

The addressable market is segmented with the Clean Cooking Alliance framework: early adopters (higher spending power, electricity, better housing), fast followers (banked and able to borrow) and secondary followers (limited financial inclusion).

Countries are compared on the clean cooking access gap, mobile money reach, PayGo market maturity, financial inclusion, the urban–rural split and regulation. The result is a weighted scorecard and sub-national opportunity maps for all four countries.

### 2. Credit risk

A default model scores each new customer using only what is known at sign-up. Logistic regression, random forest and XGBoost are compared on AUC-ROC and precision–recall, and a feature-importance view shows what drives default.

### 3. Churn

A customer churns when they stop paying long enough for the stove to lock, or abandon it. Survival analysis (Kaplan–Meier and Cox models) estimates time to churn, and a 30-day classifier gives each customer a daily risk score for the field team or call centre.

## Data

The market sizing uses public data: DHS household surveys for all four countries, World Bank Global Findex, GSMA mobile money data, the Lighting Global PAYGo Market Attractiveness Index, the Meta Relative Wealth Index and FinAccess Kenya.

**The customer ledger is simulated.** No public PayGo transaction data exists, because companies treat it as a core commercial asset. The ledger behind the credit and churn models is generated from GOGLA PAYGo PERFORM benchmarks for repayment, default and contract length. The credit and churn findings show the method; they are not results from a live portfolio.

## What it shows

The same three questions (market, credit and retention) sit behind most growth decisions in PayGo energy. Answering them together, with shared data and one recommendation, is closer to how a leadership team decides than three separate models would be.
