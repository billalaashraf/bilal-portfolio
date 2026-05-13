export interface CaseStudy {
  slug: string;
  num: string;
  title: string;
  subtitle: string;
  outcome: string;
  role: string;
  focus: string;
  engagement: string;
  stack: string[];
  context: { lede: string; body: string[] };
  problem: { lede: string; body: string[] };
  whyNeeded: {
    heading: string;
    intro: string;
    risks: { icon: string; title: string; desc: string }[];
  };
  solution: { num: string; title: string; body: string }[];
  techWork: { num: string; title: string; body: string; tags: string[] }[];
  impact: { key: string; value: string; unit?: string; desc: string }[];
  resultTitle: string;
  resultBody: string;
  resultChecks: string[];
  ctaNote: string;
  prev: { href: string; label: string } | null;
  next: { href: string; label: string } | null;
}

const studies: CaseStudy[] = [
  {
    slug: "dotshop",
    num: "01",
    title: "DotShop.ai",
    subtitle: "Multi-Region Ecommerce Platform",
    outcome:
      "Architected and shipped a curated fashion, beauty, and jewelry storefront from zero to production. Next.js frontend, REST backend, multi-region AWS infrastructure, and real-time Shopify sync feeding a custom order layer.",
    role: "Senior Full-Stack Engineer & System Architect",
    focus: "Product architecture, payments, infra, Shopify sync",
    engagement: "8 months · architecture & build",
    stack: ["Next.js", "Node", "Postgres", "AWS", "Shopify API", "Stripe"],
    context: {
      lede: "DotShop.ai launched as a curated multi-category storefront pulling product data from a Shopify catalog while owning its own customer experience, checkout flow, and order pipeline.",
      body: [
        "The team needed a platform that read like a premium DTC product on the front end but operated like infrastructure on the back end: predictable latency across regions, idempotent payment handling, and a Shopify sync that could keep inventory honest under spiky traffic.",
        "There was no platform in place when the engagement started. Only product designs, a Shopify storefront with the catalog, and a payment partner already selected.",
      ],
    },
    problem: {
      lede: "A premium storefront with three product categories, two regions, one Shopify source-of-truth, and a checkout that can't drop orders or oversell.",
      body: [
        "The core problem wasn't visual — it was reliability under coordination. Shopify owned the catalog and inventory. The platform owned the customer, the checkout, and the order. Any drift between the two would surface as oversold SKUs, missing orders, or refunds that didn't reconcile.",
        "On top of that: a payment integration with regional rules, two AWS regions to keep latency low, and a small team that needed the system to be operable, not just buildable.",
      ],
    },
    whyNeeded: {
      heading: "Three failure modes were not acceptable at launch.",
      intro:
        "This wasn't a prototype. The platform was the storefront of record on launch day, with marketing spend already committed.",
      risks: [
        {
          icon: "!",
          title: "Overselling SKUs during traffic spikes",
          desc: "Inventory drift between Shopify and the order layer would result in confirmed orders for stock that didn't exist — manual refunds, support load, and lost trust.",
        },
        {
          icon: "$",
          title: "Dropped or duplicated payments",
          desc: "A non-idempotent payment path would silently double-charge or lose authorizations under retry, with no audit trail to reconcile against.",
        },
        {
          icon: "~",
          title: "Cross-region latency on checkout",
          desc: "A single-region deployment would push checkout latency past 800ms for half the customer base, measurably hurting conversion on the most important page of the funnel.",
        },
      ],
    },
    solution: [
      { num: "01", title: "Next.js storefront", body: "App Router with ISR for catalog pages, edge-rendered cart, and a tightly scoped client bundle. Product data is hydrated from the platform API, not directly from Shopify, so the front end sees a stable, regional contract." },
      { num: "02", title: "REST backend in Node", body: "A typed REST surface for the storefront and admin: catalog read, cart, checkout, orders, customers. Every write goes through an idempotency-keyed handler with a retry-safe outbox for downstream effects." },
      { num: "03", title: "Postgres as source of order truth", body: "Orders, payments, and inventory snapshots live in Postgres with strict invariants. Shopify is read-through for catalog and pushed to for fulfilment, but the order ledger never depends on Shopify being available." },
      { num: "04", title: "Real-time Shopify sync", body: "A two-way sync worker: webhook ingestion for catalog and inventory updates, and a queued push for orders. Sync lag is treated as a first-class metric, surfaced in the admin, and alerted on past a 5s budget." },
      { num: "05", title: "Payments and fintech integration", body: "Stripe handles authorization and capture. A thin payment service in front owns idempotency keys, status reconciliation, and the audit trail. Refunds and disputes write to the same ledger, never reconstructed from webhooks alone." },
      { num: "06", title: "Multi-region AWS infrastructure", body: "Two regions behind CloudFront, ALB-fronted ECS services, a primary Postgres in one region with read replicas in the other, and S3/CloudFront for static and media. Terraform-defined, with one-command region failover." },
    ],
    techWork: [
      { num: "01", title: "Idempotent order and payment pipeline", body: "Every write to the order ledger carries an idempotency key, with a transactional outbox to drive Shopify and Stripe side-effects. Retries, partial failures, and webhook re-delivery all converge to the same state.", tags: ["Idempotency keys", "Outbox pattern", "Postgres tx"] },
      { num: "02", title: "Two-way Shopify sync worker", body: "Catalog and inventory flow inbound via webhooks into a normalized projection; orders flow outbound through a durable queue with per-SKU ordering. Sync lag is measured per direction and surfaced in admin.", tags: ["Webhooks", "SQS", "CDC projection"] },
      { num: "03", title: "Multi-region infrastructure as code", body: "Terraform modules for VPC, ECS services, Postgres and replicas, and CloudFront, parameterized by region. New environments stand up in a single CI pipeline; failover is a parameter flip, not a runbook.", tags: ["Terraform", "ECS", "RDS multi-AZ"] },
      { num: "04", title: "Edge-rendered storefront with ISR", body: "Product and category pages are statically rendered with on-demand revalidation triggered by sync events. Cart and checkout run on the edge against the regional API for sub-100ms first-byte from either region.", tags: ["Next.js App Router", "ISR", "Edge runtime"] },
      { num: "05", title: "Payment audit and reconciliation", body: "A dedicated payment service owns idempotency, status reconciliation against Stripe, and the audit trail that finance reads. Disputes and refunds write to the same ledger, never reconstructed from webhook history.", tags: ["Stripe", "Ledger", "Reconciliation"] },
      { num: "06", title: "Observability and on-call hygiene", body: "Structured logs, RED metrics per service, sync-lag dashboards, and alerts that fire on business invariants, not just infra. Runbooks for the three top failure modes were written before launch, not after.", tags: ["OpenTelemetry", "Grafana", "Runbooks"] },
    ],
    impact: [
      { key: "Checkout p95", value: "< 200", unit: "ms", desc: "Edge-rendered checkout from either region, well under the 800ms threshold the team set as the failure bar." },
      { key: "Inventory drift", value: "~ 0%", desc: "Zero overselling incidents in the first 90 days of operation, across two regions and three category surges." },
      { key: "Shopify sync lag", value: "< 1.5", unit: "s", desc: "Median catalog and inventory propagation, with alerting above 5s. Surfaced in the admin so operators can see it." },
      { key: "Time to launch", value: "8", unit: "mo", desc: "From empty repo to production cutover, including infrastructure, integrations, admin tooling, and on-call setup." },
    ],
    resultTitle: "A production storefront the team operates, not one they fight.",
    resultBody:
      "DotShop.ai shipped on schedule, in two regions, with a payment surface that finance can audit and a Shopify sync the support team can actually see. The platform has stayed in production with no architectural rewrites, and the runbooks written before launch have held up under the only two incidents that mattered.",
    resultChecks: [
      "Shipped on schedule in two regions",
      "Idempotent payment and order ledger",
      "Real-time Shopify sync with alerting",
      "Terraform infrastructure with one-flag failover",
      "Runbooks and on-call hygiene from day one",
    ],
    ctaNote: "Whether it's a platform from scratch, a Shopify or payments migration, or untangling a multi-region setup, send a few sentences and you'll hear back directly within one business day.",
    prev: null,
    next: { href: "/case-studies/clinic-dashboard", label: "Clinic Dashboard" },
  },

  {
    slug: "clinic-dashboard",
    num: "02",
    title: "Clinic Dashboard",
    subtitle: "Automation & Patient Follow-Up",
    outcome:
      "Turned a spreadsheet-driven clinic operation into a live operations dashboard. Patient action queue, automated follow-ups, reminder pipeline, and revenue-at-risk metrics, all sitting on top of the team's existing Google Sheets workflow.",
    role: "Senior Full-Stack Engineer & Automation Architect",
    focus: "Internal tooling, n8n automations, CRM workflows, ops visibility",
    engagement: "4 months · build & rollout, solo",
    stack: ["Next.js", "n8n", "Google Sheets API", "Postgres", "Twilio"],
    context: {
      lede: "A multi-practitioner clinic was running its entire operation off Google Sheets — patient list, follow-ups, invoices, reminders, no-show tracking — manually maintained by two front-desk staff.",
      body: [
        "It worked. It was also fragile. Every reminder, every booking lapse, every invoice older than 14 days lived in someone's head or in a tab that hadn't been opened that day. Revenue was leaking, and the team couldn't see where.",
        "The brief was deliberately small: don't replace the sheets, build a dashboard on top of them. The team's workflow couldn't pause for a migration, and the sheets contained logic that hadn't been written down anywhere else.",
      ],
    },
    problem: {
      lede: "Patient follow-ups were a queue with no UI. The cost of forgetting one was a lost patient and an unpaid invoice.",
      body: [
        "The clinic had no way to see, at a glance, which patients needed action and what kind. Everything lived in cells. The staff knew roughly what to look for, but the cognitive load was high and errors were quiet.",
        "Revenue at risk wasn't a number anyone could point to. It was a feeling. The team wanted to know exactly how much revenue was at risk from lapsed bookings and overdue invoices at any point in the day.",
      ],
    },
    whyNeeded: {
      heading: "Quiet failures compound until they're expensive.",
      intro:
        "The clinic wasn't in crisis. It was slowly leaking revenue and patient relationships through the cracks in a manual system.",
      risks: [
        {
          icon: "!",
          title: "Missed follow-ups turning into lost patients",
          desc: "A patient who doesn't hear back within two days of a lapse has a meaningfully higher churn rate. There was no system to ensure they heard back at all.",
        },
        {
          icon: "$",
          title: "Invoices aging past 30 days unnoticed",
          desc: "Overdue invoices were only visible if someone actively opened the right sheet. Several were aging past 30 days before anyone noticed.",
        },
        {
          icon: "~",
          title: "No single revenue-at-risk number",
          desc: "Without a live aggregate, the practice manager couldn't triage effort — they couldn't tell whether today's fire was a $400 problem or a $4,000 problem.",
        },
      ],
    },
    solution: [
      { num: "01", title: "Sheets-to-Postgres sync layer", body: "A sync process reads the live Google Sheets data into a normalized Postgres schema on a short interval. The dashboard reads from Postgres; the team keeps using Sheets exactly as before." },
      { num: "02", title: "Ranked action queue", body: "Every patient who needs contact is surfaced in a single ranked list with a reason, a suggested action, and a last-contact timestamp. The front desk sees one queue instead of five spreadsheet tabs." },
      { num: "03", title: "n8n automation workflows", body: "n8n drives the reminder spine: booking-lapse detection, SMS and email dispatches via Twilio, reminder scheduling, and escalation paths. Workflows are visible and editable without touching code." },
      { num: "04", title: "Revenue-at-risk derivation", body: "A nightly rollup calculates the revenue at risk from each patient category — overdue invoices, lapsed bookings, cold contacts — and surfaces it as a single number the practice manager can act on." },
      { num: "05", title: "Audited contact log", body: "Every automated and manual contact event is written to an append-only log. The front desk can see the full history for any patient without cross-referencing sheets or checking phone logs." },
      { num: "06", title: "Two-way Sheets write-back", body: "When the dashboard marks a reminder sent or an invoice chased, the status writes back to the originating sheet. The Sheets stay the source of truth; the dashboard is the interface." },
    ],
    techWork: [
      { num: "01", title: "Sheets-to-Postgres sync", body: "Google Sheets API polling with incremental sync into a normalized schema. Conflict resolution handles concurrent edits from the dashboard and Sheets without data loss.", tags: ["Sheets API", "Postgres", "Incremental sync"] },
      { num: "02", title: "Ranked action queue engine", body: "A scoring function weighs recency, value, and lapse type to produce a single sorted queue. Updated on each sync cycle so the front desk always sees the most urgent patient first.", tags: ["Scoring algorithm", "Queue UI", "Next.js"] },
      { num: "03", title: "n8n workflow library", body: "Six n8n workflows cover the full reminder and escalation spine. Each is parameterized by patient status and responds to manual overrides from the dashboard UI.", tags: ["n8n", "Twilio", "Automation"] },
      { num: "04", title: "Revenue-at-risk model", body: "Daily aggregation across invoice age, booking lapse, and cold-contact buckets. Produces a breakdown by category and a roll-up the practice manager can share in standup.", tags: ["Revenue model", "Aggregation", "Reporting"] },
      { num: "05", title: "Audited dispatcher", body: "All outbound contact events are written to an immutable log before dispatch. Duplicate suppression, rate limiting, and opt-out checks run at the dispatcher layer.", tags: ["Audit log", "Deduplication", "Compliance"] },
      { num: "06", title: "Write-back reconciliation", body: "Bi-directional sync with conflict detection. The dashboard can write status changes back to Sheets; if the sheet changed in the interim, the conflict is surfaced rather than silently overwritten.", tags: ["Conflict resolution", "Bi-directional sync"] },
    ],
    impact: [
      { key: "Revenue at risk", value: "–", unit: "", desc: "A live number the practice manager can act on, replacing a feeling with a figure. Exact amount varies by week." },
      { key: "Follow-up rate", value: "~96", unit: "%", desc: "Patients requiring action now reach that contact stage. Previously estimated at under 60% due to manual oversight." },
      { key: "Invoice cycle", value: "< 7", unit: "d", desc: "Median time from invoice issue to first chase, down from 14+ days under the manual process." },
      { key: "Time to build", value: "4", unit: "mo", desc: "From first call to the front desk using it daily. No sheet migrations, no disruption to the existing workflow." },
    ],
    resultTitle: "A live operations dashboard the front desk actually opens every morning.",
    resultBody:
      "The clinic kept its spreadsheets. It also got a single ranked queue, an automated reminder spine, an audited contact history, and a revenue-at-risk number it can argue about in standup. The system has been running in daily use since rollout with no architectural changes.",
    resultChecks: [
      "Single ranked queue replacing five manual tabs",
      "Automated reminder and escalation pipeline via n8n",
      "Live revenue-at-risk metric surfaced each morning",
      "Audited contact log replacing phone notes",
      "Google Sheets workflow unchanged for the front desk",
    ],
    ctaNote: "If you're running operations on spreadsheets and need visibility without a full migration, send a few sentences and I'll respond within one business day.",
    prev: { href: "/case-studies/dotshop", label: "DotShop.ai" },
    next: { href: "/case-studies/web-shop-manager", label: "Web Shop Manager" },
  },

  {
    slug: "web-shop-manager",
    num: "03",
    title: "Web Shop Manager",
    subtitle: "Backend & Cloud Optimization",
    outcome:
      "Cut AWS bills, halved p95 query latency, and quietly walked a legacy PHP system toward a Go and TypeScript backend. No rewrite, no freeze, no customer-visible incident.",
    role: "Senior Backend Engineer & Infra Architect",
    focus: "AWS/RDS optimization, legacy modernization, backend performance",
    engagement: "Ongoing retainer, started as a 6-week audit",
    stack: ["Go", "TypeScript", "PHP", "Postgres", "RDS", "Redis", "AWS"],
    context: {
      lede: "A well-established ecommerce operator with a PHP monolith that had grown past the team's ability to change it confidently — slow queries, over-provisioned infrastructure, and a cost structure that didn't match the traffic.",
      body: [
        "The platform worked, but it was expensive to run and slow to change. AWS spend had grown with the business without being right-sized. Query performance degraded as the catalog grew. The team had talked about rewriting in Go for two years without being able to commit to it.",
        "The engagement started as a 6-week performance and cost audit. It became an ongoing retainer when the initial changes — delivered without a freeze — produced results the team wanted to keep building on.",
      ],
    },
    problem: {
      lede: "A monolith that was expensive, slow on key paths, and impossible to rewrite without stopping the business.",
      body: [
        "The top 30 endpoints accounted for most of the latency complaints. Query plans were unoptimized, the cache layer was inconsistently applied, and read replicas weren't being used for traffic that didn't need primary writes.",
        "Infrastructure cost was the other half. Over-provisioned RDS instances, under-utilized reserved capacity, and no cost attribution by service or feature. The team knew they were spending too much but couldn't tell where.",
      ],
    },
    whyNeeded: {
      heading: "The cost of doing nothing was compounding.",
      intro: "The problems weren't critical. They were becoming structural. Each quarter of inaction made them harder to fix.",
      risks: [
        {
          icon: "$",
          title: "AWS spend scaling with headcount, not traffic",
          desc: "Infrastructure costs were growing because of over-provisioning decisions made at lower scale, not because the traffic required them. Each month of inaction was waste.",
        },
        {
          icon: "!",
          title: "Query regressions blocking new features",
          desc: "Slow queries on the catalog and order paths were making new feature work risky. Developers were working around known slow paths instead of through them.",
        },
        {
          icon: "~",
          title: "Rewrite risk accumulating",
          desc: "Two years of deferred modernization meant the gap between the PHP monolith and any new service was widening. The longer the wait, the larger the eventual rewrite.",
        },
      ],
    },
    solution: [
      { num: "01", title: "Endpoint and query audit", body: "A structured audit of the top 30 endpoints by latency and database cost. Query plans were read, indexes were added or changed where they had direct impact, and N+1 patterns were resolved first." },
      { num: "02", title: "Cache layer with sane invalidation", body: "Redis was already in the stack but applied inconsistently. A small set of rules for what gets cached, for how long, and how invalidation is triggered — applied to the highest-volume read paths." },
      { num: "03", title: "Read-replica routing", body: "Reads that don't need primary-write consistency are routed to read replicas. Implemented as a thin middleware change in the PHP layer — no service boundary required." },
      { num: "04", title: "Go edge service for hot paths", body: "The catalog search and product detail paths — highest volume, most latency-sensitive — were extracted into a small Go service. The PHP monolith calls it; the team deploys it independently." },
      { num: "05", title: "TypeScript operator API", body: "A new TypeScript service owns the operator-facing admin API. Typed, tested, and deployed separately from the PHP monolith. New admin features are built here, not added to PHP." },
      { num: "06", title: "Right-sizing and cost attribution", body: "RDS instances right-sized based on actual load profiles, reserved capacity rationalized, and cost attribution added by service so future spend decisions have data behind them." },
    ],
    techWork: [
      { num: "01", title: "Top-30 endpoint and query audit", body: "Systematic review of query plans for the highest-traffic endpoints. Index changes, query rewrites, and N+1 resolution — each change measured before and after.", tags: ["EXPLAIN ANALYZE", "Indexing", "N+1 resolution"] },
      { num: "02", title: "Cache layer with sane invalidation", body: "Redis applied to catalog reads and session-adjacent paths with explicit TTL strategy and event-driven invalidation. Cache hit rates measured per endpoint.", tags: ["Redis", "Cache strategy", "Invalidation"] },
      { num: "03", title: "Read-replica routing", body: "A routing middleware layer in PHP that directs read-only queries to the replica pool. Transparent to the application layer, measurable in RDS metrics.", tags: ["RDS replicas", "Read routing", "PHP middleware"] },
      { num: "04", title: "Go edge service for catalog paths", body: "Extracted product detail and search into a Go service behind an internal load balancer. Deployed independently, with its own metrics and on-call runbook.", tags: ["Go", "Internal service", "Terraform"] },
      { num: "05", title: "TypeScript operator API", body: "New operator-facing API in TypeScript with full type coverage, request validation, and structured logging. Deployed to ECS alongside the Go service.", tags: ["TypeScript", "ECS", "OpenAPI"] },
      { num: "06", title: "Right-sizing and cost attribution", body: "RDS right-sizing based on peak vs. median load profiles, reserved instance re-evaluation, and a cost-per-feature tagging strategy so future optimization has a baseline.", tags: ["AWS Cost Explorer", "RDS sizing", "Tagging"] },
    ],
    impact: [
      { key: "p95 latency", value: "–66", unit: "%", desc: "Across the top 30 endpoints after query optimization, cache layer, and read-replica routing. Measured before and after each change." },
      { key: "RDS cost", value: "–41", unit: "%", desc: "Monthly RDS spend after right-sizing and reserved capacity rationalization. No reduction in availability or read capacity." },
      { key: "Go service p95", value: "< 40", unit: "ms", desc: "Catalog search and product detail latency after extraction to Go. Previously averaging 280ms on the PHP path." },
      { key: "Engagement", value: "18+", unit: "mo", desc: "Ongoing retainer. Started as a 6-week audit; the team kept me on when the first changes held up in production." },
    ],
    resultTitle: "A backend the team can keep evolving, instead of one they have to escape.",
    resultBody:
      "The PHP monolith is still in production. It carries less work each quarter, and the parts that mattered most are now on a typed Go and TypeScript surface, behind a properly-sized AWS footprint. Latency is down, the bill is down, and the team has a clear migration path instead of a rewrite deadline.",
    resultChecks: [
      "p95 latency down 66% across top 30 endpoints",
      "Monthly RDS cost reduced 41% with no capacity loss",
      "Go service handling catalog paths under 40ms p95",
      "TypeScript operator API replacing PHP admin layer",
      "Cost attribution added so future decisions have data",
    ],
    ctaNote: "If you have a legacy backend that's expensive to run and slow to change, send a few sentences. I'll respond directly within one business day.",
    prev: { href: "/case-studies/clinic-dashboard", label: "Clinic Dashboard" },
    next: { href: "/case-studies/scrively", label: "Scrively" },
  },

  {
    slug: "scrively",
    num: "04",
    title: "Scrively",
    subtitle: "AI Workflow Rendering Engine",
    outcome:
      "Designed and built the rendering engine architecture behind a product where every screen is composed at runtime by an AI. Structured interactions, explicit state transitions, and adaptive UX that doesn't fall apart mid-stream.",
    role: "Senior Full-Stack Engineer & Frontend Architect",
    focus: "Rendering engine, state machines, AI workflow design, streaming UI",
    engagement: "6 months · architecture & build",
    stack: ["TypeScript", "React", "XState", "OpenAI", "Anthropic", "Node"],
    context: {
      lede: "Scrively is a product where the UI is composed dynamically by an AI model at runtime. Every screen, every form field, every button is generated from a model response — not authored by a designer in advance.",
      body: [
        "The founding premise was powerful and the prototype was impressive. It was also brittle. The AI could generate anything, which meant the front end had to render anything — and had no guarantees about what it would receive.",
        "The brief was to take the prototype from a compelling demo to an architecture that a product team could build on: constrained enough to be reliable, flexible enough to be useful.",
      ],
    },
    problem: {
      lede: "An AI that can generate any UI component is only useful if the renderer can handle what it generates — consistently, mid-stream, without visual breakage.",
      body: [
        "The prototype rendered model output directly as JSX. It worked most of the time. When the model was slightly off, the UI broke silently. There was no way to validate output before rendering, no way to recover from a partial stream, and no concept of workflow state.",
        "The product also needed to support long-running interactions — multi-step forms, branching flows, conditional steps — where the model's decisions at each step depend on what the user did in the last one. There was no framework for that.",
      ],
    },
    whyNeeded: {
      heading: "A rendering engine without constraints isn't an engine, it's a guess.",
      intro: "The prototype demonstrated the concept. The architecture had to make it shippable.",
      risks: [
        {
          icon: "!",
          title: "Silent rendering failures on model variation",
          desc: "Without a schema boundary, any deviation in model output — a missing field, a renamed component — would silently break the UI. The team couldn't ship that to users.",
        },
        {
          icon: "~",
          title: "No state machine meant no recoverable workflows",
          desc: "Multi-step interactions require knowing where you are, what's valid next, and how to recover. Without explicit state management, the product couldn't support any workflow longer than a single screen.",
        },
        {
          icon: "$",
          title: "Provider lock-in without an abstraction layer",
          desc: "Direct OpenAI calls in the rendering path meant the team couldn't A/B test models, add a fallback, or swap providers without a full refactor.",
        },
      ],
    },
    solution: [
      { num: "01", title: "Schema-bounded component vocabulary", body: "A TypeScript schema defines the set of renderable components and their valid props. The model is prompted to produce output that conforms to the schema. Output is validated before it reaches the renderer." },
      { num: "02", title: "XState workflow runtime", body: "A state machine owns the workflow: current step, valid transitions, guard conditions, and recovery paths. The AI operates within the machine's constraints — it can suggest a next step, but the machine decides whether it's valid." },
      { num: "03", title: "In-place streaming renderer", body: "Components render as tokens arrive. Partial state is valid — the renderer handles incomplete output gracefully, with stable component IDs so React doesn't remount on each update." },
      { num: "04", title: "Structured tool-call protocol", body: "The model uses structured tool calls to produce renderable output, rather than free-form JSON. Tool schemas are generated from the component vocabulary, closing the loop between what the model can generate and what the renderer can handle." },
      { num: "05", title: "Provider abstraction layer", body: "A thin provider interface wraps OpenAI, Anthropic, and any other LLM. The workflow runtime calls the interface; the model underneath is a configuration value, not a hardcoded dependency." },
      { num: "06", title: "Workflow author SDK", body: "A TypeScript SDK for defining new workflow types: component vocabulary, transition guards, context shape, and recovery logic. Product and engineering can author new workflows without touching the engine." },
    ],
    techWork: [
      { num: "01", title: "Component vocabulary and schema", body: "Zod schemas for each renderable component. The model is prompted with a condensed schema representation; output is parsed and validated before rendering. Schema violations are caught at the boundary, not at render time.", tags: ["Zod", "TypeScript", "Schema validation"] },
      { num: "02", title: "XState workflow state machine", body: "State machines per workflow type, with explicit states, guarded transitions, and parallel regions for multi-panel layouts. The machine's context is the source of truth for what's been collected and what's valid next.", tags: ["XState", "State machines", "Context"] },
      { num: "03", title: "Streaming renderer with stable IDs", body: "Components are assigned stable IDs from the first token of each output block. React keys are derived from these IDs, so streaming updates patch in-place rather than remounting.", tags: ["Streaming", "React reconciliation", "Stable keys"] },
      { num: "04", title: "Structured tool-call protocol", body: "Tool definitions generated from component schema. The model calls tools to produce renderable output. Partial tool calls are buffered and applied on completion, keeping the stream coherent.", tags: ["Tool calls", "OpenAI", "Anthropic"] },
      { num: "05", title: "Provider abstraction", body: "A provider interface with implementations for OpenAI and Anthropic. Streaming, tool call handling, and retry logic are normalized at the interface layer. Switching providers is a one-line config change.", tags: ["Provider pattern", "Streaming normalization"] },
      { num: "06", title: "Workflow author SDK", body: "A typed SDK for authoring new workflow definitions. Vocabulary declaration, transition guards, context shape, and custom recovery logic — without touching engine internals.", tags: ["SDK design", "TypeScript generics", "DX"] },
    ],
    impact: [
      { key: "Rendering reliability", value: "~99", unit: "%", desc: "Schema validation catches model output deviations before they reach the renderer. Near-zero silent UI failures since the schema boundary was added." },
      { key: "Workflow types", value: "1", unit: "wk", desc: "Approximate time to author a new workflow type using the SDK, down from an engine change that took weeks and broke existing flows." },
      { key: "Stream stability", value: "0", unit: "remounts", desc: "Stable component IDs mean streaming updates patch in-place. No visible flicker or remount on any workflow step." },
      { key: "Provider switch time", value: "< 1", unit: "hr", desc: "Time to swap the underlying LLM provider in production. Tested by switching between OpenAI and Anthropic in a canary deploy." },
    ],
    resultTitle: "An AI rendering engine the product team builds on, instead of fighting.",
    resultBody:
      "Scrively's engine turns a fragile idea into something operable: a constrained component vocabulary, an explicit state machine, a streaming renderer that doesn't blink, and a provider layer that's a swap away from any model. The product team can author new workflows without touching the engine, and the engine handles model variation without breaking the UI.",
    resultChecks: [
      "Schema-bounded rendering with zero silent failures",
      "XState machine owning all workflow transitions",
      "In-place streaming with stable component IDs",
      "Provider-agnostic LLM layer swappable in under an hour",
      "SDK enabling new workflow authoring in days, not weeks",
    ],
    ctaNote: "If you're building an AI-powered product and need a rendering or workflow layer that holds up in production, send a few sentences. I'll respond directly within one business day.",
    prev: { href: "/case-studies/web-shop-manager", label: "Web Shop Manager" },
    next: { href: "/case-studies/monkeytilt", label: "MonkeyTilt" },
  },

  {
    slug: "monkeytilt",
    num: "05",
    title: "MonkeyTilt",
    subtitle: "Gaming Platform Performance Optimization",
    outcome:
      "Took a real-time gaming platform from crawling under load to a properly-instrumented backend. Optimized queries, restructured the business-logic layer, and automated deployments so the team could ship without holding their breath.",
    role: "Senior Backend Engineer & Performance Lead",
    focus: "Database optimization, real-time backend performance, deploy automation",
    engagement: "5 months · optimization & tooling, embedded with a 3-engineer platform team",
    stack: ["Postgres", "Redis", "Node", "TypeScript", "Terraform", "AWS"],
    context: {
      lede: "MonkeyTilt is a real-time gaming platform where latency and correctness aren't quality metrics — they're the product. A 200ms delay in wallet resolution is a user complaint. A double-credit is a financial error.",
      body: [
        "The platform had grown fast. The team was talented but had been in feature mode for a year and a half. The database was carrying more than it should, the business logic layer had grown inconsistently, and deploys required a human watching metrics for 20 minutes before anyone felt safe.",
        "The engagement started with a performance audit and grew into a broader platform hardening effort. The team wanted to ship faster and sleep better.",
      ],
    },
    problem: {
      lede: "A real-time gaming backend where the wallet table was a hotspot, queries were unplannable, and deploys were manual and anxious.",
      body: [
        "The wallet table was the center of the problem. High-frequency concurrent updates to a small set of rows created lock contention that cascaded into latency spikes visible to players. The query layer had no SLOs, so nobody knew exactly how bad it was until players noticed.",
        "Deploys were manual: someone pushed, then watched the dashboard, then either declared it safe or rolled back. There was no automated gate, no canary, and no latency-based rollback criterion.",
      ],
    },
    whyNeeded: {
      heading: "In real-time gaming, latency and correctness failures are product failures.",
      intro: "The technical debt wasn't abstract. It was directly visible to players and directly correlated with churn.",
      risks: [
        {
          icon: "!",
          title: "Wallet lock contention causing player-visible latency",
          desc: "Hot-row contention on the wallet table was causing p95 latency spikes during peak sessions. Players experienced visible delays on the most time-sensitive action in the game.",
        },
        {
          icon: "$",
          title: "Deploys requiring manual oversight for 20+ minutes",
          desc: "Every deploy was a 20-minute manual watch window. At the team's ship frequency, this was consuming engineering time and creating anxiety that slowed the release cadence.",
        },
        {
          icon: "~",
          title: "No latency SLO meant no regression detection",
          desc: "Without baseline metrics and a defined SLO, performance regressions were only discovered by players. The team had no system to catch them earlier.",
        },
      ],
    },
    solution: [
      { num: "01", title: "Latency baseline and SLO definition", body: "Instrumented p50, p95, and p99 latency across the hot paths before touching any code. Defined SLOs per endpoint class, giving the team a shared definition of 'acceptable' for the first time." },
      { num: "02", title: "Targeted query and index pass", body: "EXPLAIN ANALYZE on the top 20 slow queries. Index additions and rewrites where the plan changed. Composite indexes for the multi-column predicates that the ORM was generating as full scans." },
      { num: "03", title: "Wallet hot-row redesign", body: "Replaced the single-row wallet update pattern with a balance-ledger model: each transaction appends a row, and the current balance is a projection. Lock contention dropped to near zero." },
      { num: "04", title: "Cached projections", body: "Balance and leaderboard projections are materialized in Redis on write. Reads hit the cache; the database is updated asynchronously. Cache invalidation is event-driven and audited." },
      { num: "05", title: "Latency-gated canary deploys", body: "A deploy pipeline that routes 10% of traffic to the new version, measures p95 latency against the SLO for 5 minutes, and either promotes or rolls back automatically. No human in the loop unless the gate fails." },
      { num: "06", title: "Infrastructure as code", body: "Terraform covering the full production footprint: ECS services, RDS, Redis, ALBs, and autoscaling policies. New environments from a single pipeline; config drift from the past three years eliminated." },
    ],
    techWork: [
      { num: "01", title: "Latency baseline and SLO", body: "OpenTelemetry instrumentation across all hot paths, with dashboards per endpoint class. SLOs defined at p95 for wallet, game-state, and leaderboard endpoints before any changes were made.", tags: ["OpenTelemetry", "Grafana", "SLO definition"] },
      { num: "02", title: "Targeted query and index pass", body: "EXPLAIN ANALYZE on the top 20 queries by total database time. Composite index additions for multi-column predicates; query rewrites where the ORM was producing suboptimal plans.", tags: ["EXPLAIN ANALYZE", "Composite indexes", "Query rewrite"] },
      { num: "03", title: "Wallet hot-row redesign", body: "Migrated from a single-row mutable balance to a ledger model: immutable append-only transaction rows, balance derived as a projection. Lock contention eliminated; audit trail added for free.", tags: ["Ledger model", "Append-only", "Postgres"] },
      { num: "04", title: "Cached projections with Redis", body: "Balance and leaderboard projections written to Redis on each transaction commit. Cache reads serve the hot path; async Postgres updates keep the authoritative record current.", tags: ["Redis", "Write-through cache", "Async updates"] },
      { num: "05", title: "Latency-gated canary pipeline", body: "GitHub Actions pipeline with a canary step: 10% traffic split, 5-minute observation window, automated SLO check, promote or rollback. Zero manual steps for a clean deploy.", tags: ["GitHub Actions", "Canary deploy", "SLO gate"] },
      { num: "06", title: "Infrastructure as code", body: "Terraform for the full production footprint. Eliminated three years of console-click drift. New environments reproducible in a single pipeline run.", tags: ["Terraform", "ECS", "RDS"] },
    ],
    impact: [
      { key: "p50 query time", value: "–64", unit: "%", desc: "Median query latency across wallet and game-state paths after the index pass and ledger redesign." },
      { key: "p95 query time", value: "–71", unit: "%", desc: "95th percentile latency, the number that was causing player-visible spikes. Measured over the same traffic window as the baseline." },
      { key: "Deploy time", value: "–80", unit: "%", desc: "Time from merge to safe production deploy, including the canary window. Down from 20+ minutes of manual watching to a fully automated pipeline." },
      { key: "Error rate", value: "0.04", unit: "%", desc: "Post-optimization steady-state error rate on the wallet and game-state paths. SLO target was under 0.1%." },
    ],
    resultTitle: "A real-time backend the team can change without flinching.",
    resultBody:
      "MonkeyTilt's hot path is faster, calmer, and instrumented end-to-end. The wallet stops being the limiter; the database stops being the mystery; the deploy pipeline catches perf regressions before customers do. The team ships at higher frequency with less anxiety than before the engagement started.",
    resultChecks: [
      "p95 wallet latency reduced 71% via ledger redesign",
      "Automated canary pipeline replacing 20-minute manual watches",
      "Latency SLOs defined and monitored per endpoint class",
      "Redis projection cache eliminating hot read paths",
      "Full Terraform coverage eliminating infrastructure drift",
    ],
    ctaNote: "If you have a real-time backend with latency or correctness problems, send a few sentences. I'll respond directly within one business day.",
    prev: { href: "/case-studies/scrively", label: "Scrively" },
    next: null,
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return studies.find((s) => s.slug === slug);
}

export function getAllSlugs(): string[] {
  return studies.map((s) => s.slug);
}
