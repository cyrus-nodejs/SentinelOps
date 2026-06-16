# SentinelOps AI

### Autonomous Agentic Operations Platform for Splunk

SentinelOps AI is an autonomous incident investigation and remediation platform built for the Splunk Agentic Ops Hackathon.

The platform combines Splunk operational data, AI agents, Google Gemini 2.5 Flash, Google ADK, Splunk MCP Server, BullMQ, and real-time investigation workflows to help security, observability, and operations teams detect issues faster, investigate incidents automatically, and execute intelligent remediation plans.

---

# Problem

Modern security and operations teams are overwhelmed by:

* Alert fatigue
* Slow incident investigations
* Manual evidence collection
* Fragmented tooling
* Delayed remediation actions

Engineers often spend hours gathering logs, correlating alerts, analyzing infrastructure metrics, and documenting findings before they can even begin remediation.

SentinelOps AI reduces this process from hours to minutes using autonomous AI agents.

---

# Solution

SentinelOps AI introduces an Agentic Operations workflow where multiple specialized AI agents collaborate to:

1. Investigate incidents automatically
2. Collect evidence from Splunk
3. Correlate alerts and telemetry
4. Identify root causes
5. Generate investigation reports
6. Recommend remediation actions
7. Execute approved remediation workflows
8. Stream results to operators in real time

---



### Observability

* Automated anomaly investigation
* Service dependency analysis
* Infrastructure health correlation
* Root cause detection

### Security

* Threat investigation
* Alert correlation
* Security evidence collection
* Incident response automation

### Platform & Developer Experience

* Agent orchestration framework
* Splunk MCP integration
* AI-assisted workflows
* Real-time operations dashboard

---

# Splunk Technologies Used

### Splunk MCP Server

SentinelOps uses the Splunk MCP Server as the primary interface between AI agents and operational data.

Agents invoke MCP tools to:

* Search logs
* Retrieve alerts
* Query incidents
* Fetch host metrics
* Access dashboards
* Generate remediation context

### Splunk Hosted Models

The platform supports Splunk-hosted models for operational intelligence workflows and future expansion.

### Splunk Enterprise

Operational telemetry, incidents, alerts, services, and infrastructure data are stored and analyzed through Splunk.

### Splunk AI Assistant

Agent workflows are designed to complement and extend Splunk AI capabilities.

---

# AI Architecture

SentinelOps uses a multi-agent architecture powered by Google ADK and Gemini 2.5 Flash.

## Orchestrator Agent

Coordinates all investigation workflows.

Responsibilities:

* Investigation planning
* Agent delegation
* Workflow coordination
* Final result aggregation

---

## Investigation Agent

Collects evidence from Splunk MCP tools.

Evidence sources:

* Logs
* Alerts
* Metrics
* Hosts
* Dashboards
* Incident timelines

---

## Correlation Agent

Analyzes evidence and determines:

* Root cause
* Attack chain
* Blast radius
* Confidence score

---

## Report Agent

Generates:

* Executive summaries
* Technical investigation reports
* Timeline narratives

---

## Remediation Agent

Creates:

* Remediation plans
* Verification steps
* Rollback procedures

---

# System Architecture

```text
Next.js 15
      │
      ▼
NestJS API
      │
      ▼
BullMQ
      │
      ▼
FastAPI Agent Service
      │
      ▼
Google ADK
      │
      ▼
Gemini 2.5 Flash
      │
      ▼
Splunk MCP Server
      │
      ▼
Splunk Enterprise
```

---

# Technology Stack

## Frontend

* Next.js 15
* React 19
* TypeScript
* TailwindCSS
* shadcn/ui
* TanStack Query
* Socket.IO

## Backend

* NestJS
* Prisma
* PostgreSQL
* Redis
* BullMQ
* WebSockets

## AI Layer

* FastAPI
* Google ADK
* Gemini 2.5 Flash

## Observability

* Splunk Enterprise
* Splunk MCP Server

## Infrastructure

* Docker Compose

---

# Monorepo Structure

```text
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

# Key Features

## Real-Time Dashboard

* Live incident monitoring
* KPI tracking
* Investigation metrics
* Agent performance visibility

## Autonomous Investigations

One-click incident investigation.

The system automatically:

* Collects evidence
* Correlates events
* Determines root cause
* Produces findings

## Agent Monitoring

Track:

* Agent executions
* Latency
* Token usage
* Success rates

## Remediation Center

Review and approve:

* Containment actions
* Recovery actions
* Verification workflows

## Live Investigation Timeline

Watch investigations progress in real time through WebSockets.

---

# Seeded Data

This project uses realistic seeded operational data instead of mock data.

Seeded datasets include:

* Organizations
* Users
* Services
* Hosts
* Alerts
* Incidents
* Investigations
* Evidence
* Agent Runs
* Remediation Actions

This enables a fully functional demo environment immediately after setup.

---

# Demo Flow

### Step 1

Open the Dashboard.

Review active incidents and alerts.

### Step 2

Select a critical incident.

### Step 3

Click "Start Investigation".

### Step 4

BullMQ creates an investigation job.

### Step 5

The Orchestrator Agent launches the investigation workflow.

### Step 6

Splunk MCP tools collect evidence.

### Step 7

Gemini analyzes findings.

### Step 8

A root cause is identified.

### Step 9

A remediation plan is generated.

### Step 10

Approve remediation.

### Step 11

Verification actions complete.

### Step 12

Investigation closes.

---

# Local Development

## Prerequisites

* Node.js 22+
* Python 3.12+
* Docker
* PostgreSQL
* Redis
* Splunk Enterprise
* Splunk MCP Server
* Google Gemini API Key

---

# Environment Variables

## API

```env
DATABASE_URL=
REDIS_URL=
JWT_SECRET=

AGENT_SERVICE_URL=
```

## Agent Service

```env
GEMINI_API_KEY=

SPLUNK_URL=
SPLUNK_USERNAME=
SPLUNK_PASSWORD=

SPLUNK_MCP_SERVER_URL=
```

## Web

```env
NEXT_PUBLIC_API_URL=
```

---

# Installation

```bash
pnpm install
```

---

# Start Infrastructure

```bash
docker compose up -d
```

---

# Run Database Migrations

```bash
pnpm prisma migrate deploy
```

---

# Seed Database

```bash
pnpm prisma db seed
```

---

# Start Backend

```bash
pnpm dev:api
```

---

# Start Agent Service

```bash
pnpm dev:agents
```

---

# Start Frontend

```bash
pnpm dev:web
```

---

# Open Application

```text
http://localhost:3000
```

---

# Future Enhancements

* Autonomous remediation execution
* Human-in-the-loop approvals
* Splunk SOAR integration
* RAG-based operational knowledge
* Multi-tenant deployments
* Agent memory and learning
* Predictive incident prevention

---

# Why SentinelOps AI?

SentinelOps AI transforms incident response from a manual, reactive process into an autonomous, agent-driven operational workflow.

By combining Splunk operational intelligence, AI agents, and real-time remediation capabilities, teams can investigate faster, respond smarter, and reduce operational burden across security and observability domains.

Built for the Splunk Agentic Ops .

---
## License

This project is licensed under the MIT License. See the LICENSE file for details.