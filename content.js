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
    credential: "CSPO\u00AE",
    tagline: "I turn complex business problems into clear requirements, workable solutions, and delivery decisions, across product, technology, and regulated environments.",
    hatsLine: "One role. Multiple hats.",
    hatsSubline: "Product thinking, Requirements, Solution design, Client delivery, Domain analysis, Delivery judgement.",
    microProof: [
      { value: "67%", label: "Less implementation time" },
      { value: "83%", label: "Less SME dependency" },
      { value: "66%", label: "Faster defect resolution" }
    ],
    relocation: "Open to opportunities globally \u00B7 Willing to relocate",
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
        situation: "Every new payment message type was creating another implementation effort. The same work was being repeated, while client-specific differences still needed to stay flexible.",
        whatIDid: [
          "Reviewed the active implementations side by side to identify what was repeated and what was specific to each implementation.",
          "Separated the common payment-message logic from the parts that needed to vary by client or implementation.",
          "Used that comparison to define a reusable capability instead of another one-off implementation.",
          "Kept genuine client-specific variation configurable rather than forcing it into the shared logic."
        ],
        whatIDidMore: [],
        workSnapshot: "Repeated implementation \u2192 identify common logic \u2192 separate configurable variation \u2192 reusable capability \u2192 future implementations reuse the common layer.",
        whatChanged: "The repeated logic became a reusable capability that future implementations could use, while client-specific differences remained configurable.",
        statValue: 67, statSuffix: "%", statLabel: "Less implementation time per project",
        statSub: "The reusable approach required roughly two additional sprints up front, but later implementations repaid that investment within the same quarter.",
        expandLabel: "Why I made that call",
        expandContent: "The first project could have taken the faster one-off route. I chose to spend roughly two extra sprints building the reusable approach because the same implementation pattern was already repeating. The important boundary was keeping genuine client variation configurable.",
        deepDive: true
      },
      {
        tag: "Case 02 / 03",
        title: "Turning AI-assisted documentation into a trusted training standard",
        situation: "An organization-level training academy was exploring AI-assisted training documentation. The challenge was to evaluate whether the approach could produce accurate, usable training material and establish whether it was suitable for wider adoption.",
        whatIDid: [
          "Led the execution of a proof of concept evaluating AI-assisted training documentation generation.",
          "Defined the evaluation framework, success criteria, and governance for objective assessment.",
          "Coordinated developers, analyst testers, and reviewers across multiple functions, then consolidated findings and measurable outcomes for senior leadership."
        ],
        whatIDidMore: [
          "Reviewed AI-generated training documentation for functional accuracy and completeness, validating business behavior, terminology, and implementation details across multiple platform capabilities.",
          "Improved the quality and usability of training material before formal adoption."
        ],
        workSnapshot: "AI-assisted documentation generation \u2192 Evaluation framework \u2192 Success criteria + governance \u2192 Cross-functional POC \u2192 Findings + measurable outcomes \u2192 Senior leadership review \u2192 Formal adoption",
        whatChanged: "The proof of concept demonstrated a scalable approach to AI-assisted training documentation generation, while the evaluation framework provided a structured basis for assessing the approach before wider adoption.",
        statValue: 83, statSuffix: "%", statLabel: "Less dependency on senior specialists",
        statSub: "66% faster defect resolution, and adopted as the organization-wide standard.",
        expandLabel: "The judgement",
        expandContent: "The POC focused on more than demonstrating AI-generated content. Defining the evaluation framework, success criteria, and governance made it possible to objectively assess the approach and its suitability for wider adoption. The resulting documentation now supports new-joiner onboarding and functions as a reliable knowledge base.",
        deepDive: false
      },
      {
        tag: "Case 03 / 03",
        title: "I found a cross-domain dependency before it became sprint spillover",
        situation: "One feature had been split into five stories across a shared domain model. Two of those stories depended on work owned by another domain.",
        whatIDid: [
          "Reviewed the five stories against their underlying dependencies instead of treating the existing story split as fixed.",
          "Traced the two affected stories to the work required from the other domain.",
          "Identified the sequencing problem before sprint planning locked the team's capacity.",
          "Drove a resequencing decision before the stories were committed to the sprint."
        ],
        whatIDidMore: [
          "Raised the dependency while multiple teams were pushing their own priorities."
        ],
        workSnapshot: "Feature \u2192 5 stories \u2192 2 cross-domain dependencies \u2192 dependency found before sprint planning \u2192 resequenced \u2192 delivery risk avoided.",
        whatChanged: "The dependent work was resequenced before capacity was committed, avoiding a delivery problem that would otherwise have surfaced inside the sprint.",
        statValue: 40, statSuffix: "%", statLabel: "Sprint story points protected from slippage",
        statSub: "",
        expandLabel: "The judgement",
        expandContent: "The teams were under their own delivery pressure and each had a reason to keep its preferred order. The useful intervention was not simply spotting the dependency, it was finding it early enough that sequencing could still change.",
        deepDive: false
      }
    ]
  },

  capabilities: {
    eyebrow: "Capabilities",
    hatsIntro: "I'm a Business Analyst who wears different hats depending on what the problem requires.",
    hats: [
      { name: "Product Thinker", proof: "Prioritization, success criteria, scope trade-offs, capacity and sequencing.", credential: "Certified Scrum Product Owner (CSPO\u00AE)" },
      { name: "Requirements Translator", proof: "Requirements, stories, acceptance criteria, and buildable system behavior." },
      { name: "Solution Designer", proof: "Functional solution logic, system behavior, and dependencies." },
      { name: "Client-Facing Consultant", proof: "Workshops, challenge, pressure-testing, and carrying decisions into delivery." },
      { name: "Scrum Practitioner", proof: "Dependency spotting, sequencing, and intervention before delivery risk." },
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
    summary: "I've worked across message analysis, mapping, business rules, and implementation impact for real payment message families. What follows is generalized: no client names, proprietary schemas, production messages, or identifiable implementation detail.",
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
    credentials: "Certified Scrum Product Owner (CSPO\u00AE), Scrum Alliance. SQL (Intermediate), HackerRank.",
    email: "khuranamuskaan13@gmail.com",
    phone: "+91 98132 91401",
    phoneHref: "+919813291401",
    linkedin: "linkedin.com/in/muskaan-khurana13",
    linkedinHref: "https://linkedin.com/in/muskaan-khurana13",
    resumeHref: "Muskaan_Khurana_Resume.pdf"
  }

};
