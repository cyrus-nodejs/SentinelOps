# SYSTEM_DESIGN.md

# SentinelOps AI System Design

## Executive Summary

SentinelOps AI is an autonomous Agentic Operations platform designed to accelerate incident investigation, root cause analysis, and remediation across security and observability domains.

The system combines:

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

to create an end-to-end AI-powered operational workflow.

The primary objective is to reduce Mean Time To Investigate (MTTI) and Mean Time To Resolve (MTTR) through autonomous multi-agent reasoning.

---

# Design Goals

## Functional Goals

The platform must:

* Detect and manage incidents
* Collect operational evidence
* Correlate telemetry
* Determine root causes
* Generate investigation reports
* Recommend remediation actions
* Stream progress in real time

---

## Non-Functional Goals

The platform should be:

* Scalable
* Fault tolerant
* Observable
* Extensible
* Real-time
* Cloud-native

---

# Core Design Principles

## Separation of Concerns

The system separates responsibilities into dedicated services.

```text
Frontend
    ↓
API Layer
    ↓
Queue Layer
    ↓
AI Layer
    ↓
Data Layer
```

Each layer can evolve independently.

---

## Event-Driven Processing

Investigations are asynchronous.

Instead of blocking API requests, long-running AI workflows are processed through BullMQ.

Benefits:

* Improved reliability
* Better scalability
* Retry support
* Parallel processing

---

## Agent Specialization

Rather than relying on a single AI model call, the system uses multiple specialized agents.

Benefits:

* Better reasoning quality
* Easier debugging
* Modular design
* Independent evolution

---

# System Components

## Frontend

### Technology

* Next.js 15
* React 19
* TypeScript
* TailwindCSS
* shadcn/ui
* Socket.IO
* TanStack Query

---

### Responsibilities

The frontend provides:

* Dashboard
* Incident Management
* Investigation Monitoring
* Agent Monitoring
* Remediation Approval

---

### Real-Time Updates

Investigation progress is streamed through WebSockets.

Users can observe:

* Evidence collection
* Correlation progress
* Report generation
* Remediation planning

without refreshing the page.

---

# API Layer

## NestJS

NestJS serves as the platform gateway.

---

### Responsibilities

Authentication

Authorization

Organization management

Incident management

Investigation orchestration

WebSocket management

BullMQ integration

Audit logging

---

### Why NestJS?

* Enterprise-grade architecture
* Dependency injection
* Type safety
* WebSocket support
* BullMQ integration

---

# Data Layer

## PostgreSQL

PostgreSQL serves as the primary system of record.

---

### Stored Entities

```text
Organizations
Users
Services
Hosts
Alerts
Incidents
Investigations
Evidence
Agent Runs
Remediations
Audit Logs
```

---

## Prisma ORM

Prisma provides:

* Type-safe queries
* Migration management
* Seed execution
* Schema versioning

---

# Queue Layer

## Redis

Redis powers:

* BullMQ
* Job scheduling
* Event processing

---

## BullMQ

Every investigation becomes a background job.

Workflow:

```text
Create Investigation
        ↓
Queue Job
        ↓
Worker Pickup
        ↓
Agent Execution
        ↓
Result Persistence
```

---

### Why BullMQ?

Investigations may take several seconds or minutes.

Using queues prevents:

* Request timeouts
* UI blocking
* API resource exhaustion

---

# AI Layer

## FastAPI

FastAPI hosts the AI subsystem.

---

### Responsibilities

Agent execution

Agent orchestration

Gemini integration

Splunk MCP integration

Investigation workflows

---

## Why Separate AI From NestJS?

Reasons:

* Independent scaling
* Python AI ecosystem
* Google ADK compatibility
* Lower operational coupling

---

# Multi-Agent Design

The system uses five specialized agents.

---

## Orchestrator Agent

Coordinates the workflow.

Responsibilities:

* Investigation planning
* Agent delegation
* State management
* Result aggregation

---

## Investigation Agent

Collects evidence.

Sources:

* Splunk logs
* Alerts
* Host metrics
* Dashboards
* Incident records

Output:

```json
{
  "alerts": [],
  "logs": [],
  "hosts": []
}
```

---

## Correlation Agent

Analyzes evidence.

Determines:

* Root cause
* Impacted systems
* Confidence score
* Incident severity

Powered by:

Gemini 2.5 Flash

---

## Report Agent

Generates:

* Executive summary
* Technical summary
* Investigation narrative

---

## Remediation Agent

Produces:

* Containment steps
* Recovery actions
* Verification actions
* Rollback instructions

---

# Splunk MCP Integration

## Design Rationale

Instead of directly querying Splunk APIs from agents, SentinelOps uses MCP.

Benefits:

* Tool abstraction
* Reusable workflows
* Standardized interfaces
* Agent interoperability

---

# MCP Tool Layer

```text
Agent
   ↓
MCP Client
   ↓
MCP Tool
   ↓
Splunk
```

---

## Implemented Tools

### SearchLogsTool

Retrieves incident-related logs.

---

### AlertsTool

Retrieves correlated alerts.

---

### HostsTool

Retrieves infrastructure metrics.

---

### IncidentsTool

Retrieves incident metadata.

---

### DashboardsTool

Retrieves operational dashboard metrics.

---

### RemediationTool

Creates remediation recommendations.

---

# Investigation Lifecycle

## Phase 1

Incident Created

```text
OPEN
```

---

## Phase 2

Investigation Started

```text
QUEUED
```

---

## Phase 3

Evidence Collection

```text
RUNNING
```

---

## Phase 4

Correlation

```text
ANALYZING
```

---

## Phase 5

Report Generation

```text
REPORTING
```

---

## Phase 6

Remediation Planning

```text
REMEDIATING
```

---

## Phase 7

Completed

```text
COMPLETED
```

---

# WebSocket Design

## Goal

Provide real-time investigation visibility.

---

### Events

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

### Flow

```text
Worker
   ↓
Gateway
   ↓
Socket.IO
   ↓
Frontend
```

---

# Audit Architecture

Every critical action is logged.

Examples:

```text
Investigation Started

Investigation Completed

Remediation Generated

Remediation Approved

Remediation Executed
```

---

# Failure Handling

## Queue Retries

BullMQ retries failed jobs automatically.

---

## Agent Failures

If a single agent fails:

```text
Retry
   ↓
Fallback
   ↓
Escalation
```

The entire investigation does not immediately fail.

---

## MCP Failures

If Splunk MCP is unavailable:

* Retry execution
* Log failure
* Notify operators

---

# Scalability Design

The architecture supports horizontal scaling.

---

## Frontend

Multiple Next.js instances behind a load balancer.

---

## API

Multiple NestJS instances.

---

## Workers

Additional BullMQ workers can be added.

```text
Worker 1

Worker 2

Worker 3

Worker N
```

---

## AI Service

FastAPI agents scale independently.

---

# Security Design

## Authentication

JWT access tokens

Refresh tokens

---

## Authorization

Role-based access control.

Roles:

```text
Admin

Analyst

Viewer
```

---

## Audit Logging

All sensitive actions are recorded.

---

# Seed Data Strategy

The platform intentionally uses realistic seeded datasets.

Benefits:

* Deterministic demos
* Reproducible investigations
* Consistent judging experience

---

## Seeded Records

Organizations

Users

Hosts

Services

Alerts

Incidents

Investigations

Evidence

Remediations

Agent Runs

---

# Tradeoffs

## Why FastAPI + NestJS?

Alternative:

Single NestJS application.

Rejected because:

* We need Python AI tooling.
* Google ADK integrates naturally with Python.
* Independent AI scaling is valuable.

---

## Why BullMQ?

Alternative:

Synchronous investigation execution.

Rejected because:

* Long-running AI workflows
* Timeout risk
* Poor user experience

---

## Why MCP?

Alternative:

Direct Splunk REST API calls.

Rejected because:

* Less reusable
* More coupling
* Reduced agent interoperability

---

# Future Enhancements

Planned improvements:

* Autonomous remediation execution
* Human approval workflows
* Long-term agent memory
* Knowledge graph correlation
* Splunk SOAR integration
* Multi-tenant SaaS deployment
* Agent self-evaluation
* Predictive incident prevention

---

# Conclusion

SentinelOps AI demonstrates how modern AI agents, operational intelligence, and event-driven architecture can work together to transform incident response.

By combining Splunk MCP Server, Google ADK, Gemini 2.5 Flash, BullMQ, FastAPI, NestJS, and real-time observability workflows, the platform enables organizations to investigate faster, respond smarter, and reduce operational burden at scale.
