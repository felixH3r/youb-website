---
name: youb-sprint-ticket
description: Erstellt GitHub-Issues im YOUB-Projekt und weist sie automatisch dem aktuellen Sprint zu. Verwende diesen Skill, wenn der Nutzer Tickets für den laufenden Sprint anlegen möchte.
---

# YOUB Sprint Ticket Creator

Dieser Skill automatisiert die Erstellung von Tickets im aktuellen Sprint des YOUB-Projekts (#1).

## Workflow

1. **Ermittlung des Typs:** Entscheide, ob das Ticket UI-relevant (Frontend, Design) oder Backend-lastig ist.
2. **Aufruf des Skripts:** Nutze das gebündelte Skript, um das Ticket anzulegen.

### Parameter für das Skript
- `Titel`: Kurzer, prägnanter Titel.
- `Body`: Beschreibung im YOUB-Triage-Format (Summary, Acceptance Criteria).
- `Typ`: `UI` (für felixH3r) oder `BACKEND` (für RingoDev).
- `Area`: Optional (z.B. \`ai-coaching\`, \`analytics\`, \`compliance\`).

## Triage-Template

Verwende für den `Body` immer dieses Format:

\`\`\`markdown
<!-- triage-start -->
## 🔍 Triage
**Type:** feature · **Area:** [AREA]

### Summary
[Beschreibung]

### Acceptance Criteria
- [ ] [Kriterium]
<!-- triage-end -->
\`\`\`

## Ausführung
Führe das Skript wie folgt aus:
\`node scripts/create_sprint_ticket.cjs "Titel" "Body" "UI|BACKEND" "priority" "area"\`
