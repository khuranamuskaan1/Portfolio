// ============================================================
// PORTFOLIO CONTENT, edit anything in quotes below.
// Do not touch anything outside quotes (commas, brackets, colons).
// ============================================================

const SITE_CONTENT = {

  meta: {
    title: "Muskaan Khurana | Business Analyst",
    description: "Business Analyst working across product, technology, regulated environments and payments, with deep experience in ISO 20022 and financial infrastructure."
  },

  hero: {
    name: "Muskaan Khurana",
    title: "Business Analyst",
    tagline: "I turn complex business problems into clear requirements, workable solutions, and delivery decisions, across product, technology, and regulated environments.",
    hatsLine: "One role. Multiple hats.",
    hatsSubline: "Product thinking, Requirements, Solution design, Client delivery, Domain analysis, Delivery judgement.",
    microProof: [
      { value: "67%", label: "Less implementation time" },
      { value: "83%", label: "Less SME dependency" },
      { value: "66%", label: "Faster defect resolution" }
    ],
    relocation: "Open to relocation across the UK & EU",
    photo: "photo.png",
    ctaPrimary: { label: "View my work", href: "#work" },
    ctaSecondary: { label: "Let's talk", href: "#contact" },
    ctaTertiaryLabel: "Download CV"
  },

  proof: {
    eyebrow: "Impact",
    stats: [
      { value: "67%", label: "Less implementation time" },
      { value: "83%", label: "Less SME dependency" },
      { value: "66%", label: "Faster defect resolution" },
      { value: "6 / 2", label: "Regional implementations / jurisdictions" },
      { value: "40%", label: "Sprint points protected" }
    ],
    secondary: "~60% fewer downstream requirement clarifications. ~50% less UAT execution effort. 400+ professionals reached through knowledge-sharing.",
    scaleCard: "6 concurrent regional implementations. EU and UK. Shared solution logic plus regional configuration."
  },

  work: {
    eyebrow: "Selected Work",
    heading: "Three problems. Three different kinds of judgement.",
    items: [
      {
        tag: "Case 01 / 03",
        title: "One platform, instead of a hundred one-off fixes",
        problem: "Repeated implementation work was creating duplicated effort and inconsistent solutions. Every new payment message type meant starting from scratch.",
        owned: "I compared active implementations side by side, looking for what repeated versus what was genuinely one-off, then owned the design of a single reusable capability layer end to end.",
        decision: "The repeated logic became a reusable capability. Genuine client-specific variation stayed configurable, accepting roughly two additional sprints up front.",
        statValue: 67, statSuffix: "%", statLabel: "Less implementation time, per project",
        method: "I mapped every active implementation side by side to find what genuinely repeated versus what was truly one-off, then built the repeated logic into a single configurable capability layer that any future team could plug into.",
        tradeoff: "The reusable version took roughly two additional sprints up front. I made that call anyway, betting the second and third implementation would repay it. They did, within the same quarter.",
        pressure: "The team delivering the first project wanted the fast fix, since the reusable approach meant their own timeline moved second, not first.",
        learning: "Reusable only works if the configurable parts stay genuinely configurable. I'd protect that boundary even more explicitly next time.",
        deepDive: true
      },
      {
        tag: "Case 02 / 03",
        title: "Turning senior knowledge into something everyone could use",
        problem: "Useful knowledge was trapped in senior specialists' heads, making delivery slower and onboarding expensive.",
        owned: "I defined the evaluation framework, success criteria, and governance for an AI-assisted documentation initiative that nobody had trusted yet.",
        decision: "I chose cross-functional validation over a faster, narrower pilot, because adoption would fail if the output was trusted only by the team that built it.",
        statValue: 83, statSuffix: "%", statLabel: "Less dependency on senior specialists", statSub: "+ 66% faster defect resolution. Adopted as the org-wide standard.",
        method: "I built a scoring rubric against real historical documentation: accuracy, completeness, actionability, and whether a new hire could act on it without pulling in a specialist to translate.",
        tradeoff: "Cross-functional validation took longer to reach a verdict than a single-team pilot would have.",
        pressure: "The team that built the initial pilot was already confident in it, and saw the wider validation as a delay rather than a safeguard.",
        learning: "Trust isn't won by the pilot team's confidence. It's won by the most skeptical reviewer's confidence.",
        deepDive: false
      },
      {
        tag: "Case 03 / 03",
        title: "I found a cross-domain dependency before it became sprint spillover",
        problem: "Multiple domains contributed to a shared project through a common domain model. One feature had been split into five stories, and two of them depended on another domain's work.",
        owned: "I identified the dependency before sprint planning, while multiple project teams were pushing to prioritize their own work.",
        decision: "I drove resequencing before capacity was committed, instead of letting the stories enter the sprint as originally split.",
        statValue: 40, statSuffix: "%", statLabel: "Of committed sprint points protected from slippage",
        method: "I traced each of the five stories back to its actual dependencies before sprint planning locked anything in, rather than trusting the story split as originally proposed.",
        tradeoff: "Resequencing meant telling teams under their own delivery pressure that their preferred order wasn't happening, before I could prove the alternative was better.",
        pressure: "Multiple project teams were pushing to prioritize their own work into the same sprint, and none of them wanted to be the one that moved.",
        learning: "Dependencies are cheapest to fix before sprint planning starts, and almost impossible to fix cleanly after.",
        deepDive: false
      }
    ]
  },

  capabilities: {
    eyebrow: "Capabilities",
    hatsIntro: "I'm a Business Analyst who wears different hats depending on what the problem requires.",
    hats: [
      { name: "Product Thinker", proof: "Prioritization, success criteria, scope trade-offs, capacity and sequencing." },
      { name: "Requirements Translator", proof: "Requirements, stories, acceptance criteria, and buildable system behavior." },
      { name: "Solution Designer", proof: "Functional solution logic, system behavior, and dependencies." },
      { name: "Client-Facing Consultant", proof: "Workshops, challenge, pressure-testing, and carrying decisions into delivery." },
      { name: "Delivery Partner", proof: "Dependency spotting, sequencing, and intervention before delivery risk." },
      { name: "Domain Specialist", proof: "Payments, regulatory change, and ISO 20022 when specialist depth is required." }
    ],
    howIWorkHeading: "How I Work",
    capabilitiesList: [
      { name: "Requirements to System Behavior", evidence: "BRD/FRD/PRD, user stories, acceptance criteria, vertical slicing. ~60% fewer downstream clarifications." },
      { name: "Prioritization & Product Judgement", evidence: "Backlog sequencing, capacity planning, scope trade-offs, regulatory deadlines, dependency resequencing." },
      { name: "Payments & ISO 20022", evidence: "Message analysis, mapping, business rules, regulatory change, implementation impact." },
      { name: "Data & Technical Analysis", evidence: "SQL, APIs, Postman / Insomnia, Excel." },
      { name: "Risk & UAT", evidence: "Risk-based test scope, high-risk scenarios, regulatory coverage. ~50% less execution effort." },
      { name: "Client & Stakeholder Delivery", evidence: "Client workshops, multi-region communication, functional solution design." },
      { name: "Leadership", evidence: "POC leadership, mentoring, 400+ professional knowledge-sharing." }
    ],
    tools: "SQL, Jira, Confluence, APIs, Postman, Insomnia, Excel, Gliffy, Figma"
  },

  testimonials: {
    eyebrow: "In Their Words",
    voice1: {
      role: "Senior Stakeholder, AI Documentation POC",
      quotes: [
        "She naturally led the proof-of-concept coordinating developers, analyst testers, and all of the participants in the exercise. She showed her natural ability to lead even in front of more senior people."
      ]
    },
    voice2: {
      role: "Senior Product Owner, Payments",
      quotes: [
        "I have full confidence that she will get things done no matter the task."
      ]
    }
  },

  myStory: {
    eyebrow: "My Story",
    closedLine: "I've pivoted more than once in my life, and every pivot taught me to adapt, lead, and own more...",
    ctaLabel: "How I got here \u2192",
    note: "",
    stages: [
      {
        phase: "Biotechnology",
        when: "2019 to 2023",
        what: "B.Tech in Biotechnology, Jaypee University of Information Technology.",
        why: "Started in the sciences, drawn to work where precision has real consequences.",
        learned: "Evidence-based thinking, and how to sit with a problem until the data actually explains it.",
        gained: "A foundation in rigor before I ever touched a requirement document."
      },
      {
        phase: "Software / Technology",
        when: "March 2023 to May 2025, Rxlogix Corporation",
        what: "The major pivot: out of biotechnology and into software and technology, entering pharmacovigilance as a QABA, a Business Quality Analyst role that fused QA and BA from day one.",
        why: "A missed detail in pharmacovigilance isn't academic, it's a real-world safety risk. That kind of stakes felt like the right place to apply the precision I'd trained for, just in software instead of a lab.",
        learned: "How to test whether a requirement actually holds up, not just how to write one.",
        gained: "Mentored 7 new team members, led defect trend analysis, and started catching gaps before they reached QA."
      },
      {
        phase: "Finance / Fintech",
        when: "May 2025 to present, FNZ Technology",
        what: "The second major pivot: into financial infrastructure and payments, now working as a Business Analyst.",
        why: "Wanted the same zero-tolerance-for-mistakes pressure, at a much larger systems scale.",
        learned: "The pattern that started in pharmacovigilance holds everywhere: find the ambiguity, understand it properly, build the structure, get it over the line.",
        gained: "End-to-end ownership of reusable capability design, cross-regional delivery, and the judgement calls that come with both."
      }
    ],
    landing: "I've repeatedly entered unfamiliar environments, learned fast, adapted, and taken on more responsibility. That's not a personality trait. It's a pattern."
  },

  isoDeepDive: {
    eyebrow: "Specialist Depth",
    heading: "Payments / ISO 20022",
    opening: "This section is for readers who want to verify real payments and ISO 20022 depth, not just the label.",
    summary: "I've worked message analysis, mapping, business rules, and implementation impact for real payment message families. What follows is generalized: no client names, proprietary schemas, production messages, or identifiable implementation detail.",
    controlLabel: "Explore my ISO 20022 depth \u2192",
    collapseLabel: "Show less \u2191",
    families: [
      { code: "PAIN", name: "Customer & Payment Initiation", detail: "Payment initiation and status handling. I've worked requirement definition and validation logic for this family directly." },
      { code: "PACS", name: "Interbank Payment Processing", detail: "Downstream processing and integration impact when payments move between institutions." },
      { code: "CAMT", name: "Account Reporting", detail: "Reporting and data implications, including how account statements feed downstream implementation decisions." },
      { code: "MT / MX", name: "Migration & Coexistence", detail: "Business-to-system translation across the legacy-to-ISO 20022 migration and coexistence context." }
    ],
    capabilities: [
      "Message analysis: what changed, and why",
      "Field-level interpretation and source-to-target mapping",
      "Business rules and validation behavior",
      "Impact analysis across dependent capabilities",
      "Requirements through user stories to acceptance criteria",
      "API and integration implications where relevant",
      "SIT/UAT strategy and high-risk scenario design",
      "Separating common logic from client and regulatory configuration"
    ]
  },

  contact: {
    eyebrow: "Let's Talk",
    headline: "Have a payments, product, or delivery problem that needs untangling? Let's talk.",
    subline: "Open to Business Analyst, Product Owner, Payments / ISO 20022, and client-facing solution roles across the UK & EU.",
    email: "khuranamuskaan13@gmail.com",
    phone: "+91 98132 91401",
    phoneHref: "+919813291401",
    linkedin: "linkedin.com/in/muskaan-khurana13",
    linkedinHref: "https://linkedin.com/in/muskaan-khurana13",
    resumeHref: "Muskaan_Khurana_Resume.pdf"
  }

};
