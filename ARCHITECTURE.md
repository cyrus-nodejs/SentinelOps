# ARCHITECTURE.md

# SentinelOps AI Architecture

## Overview

SentinelOps AI is an autonomous Agentic Operations platform built for the Splunk Agentic Ops Hackathon.

The platform combines:

* Splunk Enterprise
* Splunk MCP Server
* Google ADK
* Gemini 2.5 Flash
* FastAPI
* NestJS
* PostgreSQL
* Redis
* BullMQ
* Next.js 15

to automate incident investigation, root cause analysis, evidence collection, reporting, and remediation workflows.

---

# High-Level Architecture

```text
┌──────────────────────────────┐
│          Next.js 15          │
│ Dashboard / Incidents / AI   │
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────┐
│          NestJS API          │
│ REST API + WebSockets        │
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────┐
│            BullMQ            │
│ Investigation Queue          │
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────┐
│       FastAPI Agents         │
│ Multi-Agent Orchestration    │
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────┐
│          Google ADK          │
│ Agent Runtime Layer          │
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────┐
│       Gemini 2.5 Flash       │
│ Reasoning & Analysis         │
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────┐
│       Splunk MCP Server      │
│ Tool Invocation Layer        │
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────┐
│       Splunk Enterprise      │
│ Logs / Metrics / Alerts      │
└──────────────────────────────┘
```

---

# Monorepo Architecture

```text
sentinelops-ai/

apps/
├── api/
│
├── agents/
│
└── web/

packages/
├── database/
├── shared/
└── config/
```

---

# Frontend Architecture

## Next.js 15

The frontend provides a real-time operational dashboard for:

* Incident Monitoring
* Investigation Tracking
* Agent Monitoring
* Remediation Approval
* Executive Reporting

### Core Pages

```text
/dashboard
/incidents
/investigations
/agents
/remediations
```

### Core Technologies

* Next.js 15
* React 19
* TypeScript
* TailwindCSS
* shadcn/ui
* TanStack Query
* Socket.IO

---

# Backend Architecture

## NestJS API

The NestJS application serves as the primary orchestration layer between the UI and AI services.

Responsibilities:

* Authentication
* Organization Management
* Incident APIs
* Investigation APIs
* Agent Monitoring APIs
* Remediation APIs
* WebSocket Streaming
* BullMQ Queue Management

---

# Database Layer

## PostgreSQL

Primary data store.

Managed through Prisma ORM.

### Core Tables

```text
organizations
users
services
hosts
alerts
incidents
investigations
investigation_evidence
agent_runs
remediations
audit_logs
```

---

# Queue Architecture

## Redis

Used for:

* BullMQ
* Job Processing
* Real-Time Events

---

## BullMQ

Investigation workflows are asynchronous.

```text
User Clicks Investigate
            │
            ▼
POST /investigations/:id/start
            │
            ▼
BullMQ Queue
            │
            ▼
Investigation Worker
            │
            ▼
FastAPI Agent Service
```

---

# Agent Architecture

SentinelOps uses a multi-agent design.

---

## Orchestrator Agent

Responsibilities:

* Investigation planning
* Agent coordination
* Workflow management
* Final aggregation

```text
Orchestrator
     │
 ┌───┼────┬────┐
 ▼   ▼    ▼    ▼
Inv Corr Report Remediation
```

---

## Investigation Agent

Purpose:

Collect evidence from Splunk.

Sources:

* Logs
* Alerts
* Dashboards
* Host Metrics
* Incident Timelines

Tools:

```text
SearchLogsTool
AlertsTool
HostsTool
IncidentsTool
DashboardsTool
```

---

## Correlation Agent

Purpose:

Analyze evidence and determine:

* Root Cause
* Attack Chain
* Blast Radius
* Confidence Score

Powered by:

* Gemini 2.5 Flash

---

## Report Agent

Purpose:

Generate:

* Executive Summary
* Technical Report
* Investigation Narrative

Powered by:

* Gemini 2.5 Flash

---

## Remediation Agent

Purpose:

Generate:

* Containment Actions
* Recovery Actions
* Verification Steps
* Rollback Procedures

Powered by:

* Gemini 2.5 Flash

---

# Splunk MCP Architecture

The Splunk MCP Server acts as the bridge between AI agents and operational data.

---

## MCP Flow

```text
Agent
  │
  ▼
MCP Client
  │
  ▼
Splunk MCP Server
  │
  ▼
Splunk Enterprise
```

---

## MCP Tools

### Search Logs

```text
search.logs
search.by_ip
search.by_user
search.raw
```

### Alerts

```text
alerts.list
alerts.get
alerts.resolve
```

### Incidents

```text
incidents.list
incidents.get
incidents.timeline
```

### Hosts

```text
hosts.list
hosts.metrics
hosts.health
```

### Dashboards

```text
dashboards.list
dashboards.metrics
```

### Remediation

```text
remediation.plan
remediation.execute
remediation.verify
```

---

# Investigation Workflow

## Step 1

Incident is selected.

```text
OPEN INCIDENT
```

---

## Step 2

User starts investigation.

```text
POST /investigations/:id/start
```

---

## Step 3

BullMQ creates investigation job.

---

## Step 4

Worker invokes FastAPI.

```text
POST /api/investigations/start
```

---

## Step 5

Orchestrator launches agents.

```text
Investigation Agent
Correlation Agent
Report Agent
Remediation Agent
```

---

## Step 6

Investigation Agent collects evidence.

```text
Logs
Alerts
Metrics
Hosts
Dashboards
```

---

## Step 7

Correlation Agent identifies root cause.

---

## Step 8

Report Agent generates summary.

---

## Step 9

Remediation Agent creates action plan.

---

## Step 10

Results are persisted.

```text
investigations
investigation_evidence
remediations
agent_runs
```

---

## Step 11

WebSocket updates are streamed.

```text
investigation.started
investigation.evidence
investigation.correlation
investigation.report
investigation.completed
```

---

# Real-Time Architecture

## WebSocket Events

```text
investigation.started
investigation.evidence
investigation.correlation
investigation.report
investigation.completed
agent.run.completed
remediation.approved
```

---

## Frontend Streaming

```text
Socket.IO
      │
      ▼
NestJS Gateway
      │
      ▼
Investigation Worker
      │
      ▼
Live UI Updates
```

---

# Seed Data Architecture

The system runs entirely on realistic seeded operational data.

Seeded entities include:

* Organizations
* Users
* Services
* Hosts
* Alerts
* Incidents
* Investigations
* Agent Runs
* Evidence
* Remediations

No mock data is required.

---

# Security Architecture

Authentication:

* JWT Access Tokens
* Refresh Tokens

Authorization:

```text
Admin
Analyst
Viewer
```

Audit Logging:

```text
Investigation Started
Investigation Completed
Remediation Approved
Remediation Executed
```

---

# Scalability

The architecture is designed to scale independently.

```text
Next.js
    │
NestJS API
    │
Redis
    │
BullMQ Workers
    │
FastAPI Agents
    │
Gemini Models
```

Additional workers can be added horizontally without modifying application code.

---

# Hackathon Innovation Highlights

## Best Use of Splunk MCP Server

Every investigation uses MCP tools as the primary operational intelligence layer.

## Best Use of AI

Multi-agent architecture powered by Google ADK and Gemini 2.5 Flash.

## Observability

Autonomous infrastructure and service investigations.

## Security

Automated threat investigation and remediation workflows.

## Platform & Developer Experience

Composable agent framework built on MCP and modern cloud-native architecture.

---

# End-to-End Demo Sequence

```text
Dashboard
    │
    ▼
Incident
    │
    ▼
Investigate
    │
    ▼
BullMQ
    │
    ▼
FastAPI
    │
    ▼
Orchestrator Agent
    │
    ▼
Splunk MCP Tools
    │
    ▼
Evidence Collection
    │
    ▼
Gemini Analysis
    │
    ▼
Root Cause
    │
    ▼
Remediation Plan
    │
    ▼
Approval
    │
    ▼
Verification
    │
    ▼
Resolved
```
