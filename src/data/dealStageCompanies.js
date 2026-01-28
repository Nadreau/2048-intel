export const dealStageCompanies = [
  {
    id: "ds-1",
    name: "NeuralPath Bio",
    founder_name: "Dr. Sarah Chen",
    website: "https://neuralpathbio.com",
    description: "AI-powered drug discovery platform focused on neurological diseases, using novel protein structure prediction to identify therapeutic targets",
    deal_stage: "term_sheet",
    deal_size: "$1.5M",
    valuation: "$12M pre-money",
    our_allocation: "$1M lead + $500K from syndicate",
    market: {
      size: "$8.2B by 2028",
      growth: "28.4% CAGR"
    },
    team_assessment: "Exceptional. Sarah Chen built the protein folding team at Google DeepMind — she is among the top 20 people in the world in AI-driven protein structure prediction. CSO Michael Torres brings 8 years of computational biology experience from Recursion. The team of 8 is small but extremely focused and technically elite.",
    product_assessment: "Platform has identified 3 novel therapeutic targets for neurological diseases that have been validated by external researchers. The proprietary neurological protein interaction dataset provides a unique training advantage over generalist platforms. Still pre-clinical but strong scientific foundation.",
    concerns: [
      "Neurological diseases have notoriously high clinical failure rates — even excellent target identification may not lead to successful drugs",
      "Small team may struggle to scale if multiple pharma partnerships materialize simultaneously",
      "Competition from well-funded generalist platforms like Recursion and Insilico"
    ],
    champions: [
      "Julie Wolf (Partner) — Deep biotech expertise, led diligence",
      "Alex Iskold (Managing Partner) — Strong conviction on founder quality"
    ],
    next_steps: [
      "Finalize term sheet by Jan 31",
      "Complete reference calls with Biogen partnership contacts",
      "Board structure negotiation",
      "Target close by Feb 15"
    ],
    due_diligence: {
      technical: {
        summary: "Technology is differentiated. The neurological protein interaction dataset is genuinely unique — compiled from 5 years of academic research plus proprietary data partnerships. AI models show meaningful improvement over public baselines (AlphaFold, ESMFold) specifically for neurological protein structures.",
        score: 9,
        details: "Reviewed with external scientific advisor Dr. Jennifer Kim (Stanford computational biology). Her assessment: 'This is among the most sophisticated applications of protein structure prediction I've seen outside of DeepMind itself. The neurological focus is smart — these proteins have unique folding challenges that generalist models struggle with.'"
      },
      market: {
        summary: "AI drug discovery market is hot ($8.2B by 2028) but crowded. Neurological disease focus is differentiated — major pharma companies have underinvested in neuro due to high failure rates, creating opportunity for specialized platforms.",
        score: 8,
        details: "Market research confirms that Biogen, Eli Lilly (neuro division), and Novartis are all actively seeking AI drug discovery partnerships for neurological diseases. The specialized focus gives NeuralPath a positioning advantage over generalist platforms."
      },
      team: {
        summary: "Exceptional founding team. Sarah Chen has DeepMind pedigree that is almost impossible to replicate. Michael Torres provides operational experience from Recursion. Small team but focused.",
        score: 9,
        details: "Reference calls with former DeepMind colleagues confirm Sarah is 'one of the most talented researchers who left the team' and 'could have stayed and been promoted but wanted to apply the technology to real patient impact.'"
      },
      financials: {
        summary: "Pre-revenue but capital-efficient. Burn rate is $150K/month with 12 months runway remaining. Raising $1.5M to extend runway to 24 months and fund pharma partnership development.",
        score: 7,
        details: "Current burn is sustainable for platform development. Main use of funds will be expanding computational infrastructure and hiring 2 additional ML researchers."
      }
    },
    team_deep_dive: "Dr. Sarah Chen is a standout founder. She joined DeepMind's protein folding team in 2018 and became a key contributor to the AlphaFold successor work. She left in 2024 to start NeuralPath after becoming convinced that the technology could be applied more aggressively to neurological diseases, which have unique protein folding challenges. Her motivation is personal — her father was diagnosed with early-onset Parkinson's, driving her focus on neurological applications.\n\nCSO Michael Torres spent 8 years at Recursion building their computational biology infrastructure before joining Sarah. He brings crucial operational experience and pharma relationship skills that Sarah lacks.\n\nThe team is small (8 people) but extremely focused. All have PhDs in relevant fields and most have worked together before at either DeepMind or Recursion.",
    touchpoints: [
      { date: "2026-01-15", type: "call", summary: "Initial intro call with Sarah. Exceptional background, clear vision for neuro-focused platform." },
      { date: "2026-01-18", type: "meeting", summary: "Full team meeting at 2048 office. Reviewed platform demo and early results." },
      { date: "2026-01-20", type: "call", summary: "Technical deep dive with external advisor Dr. Jennifer Kim. Strong validation." },
      { date: "2026-01-22", type: "call", summary: "Reference calls with Biogen contacts. Confirmed serious partnership interest." },
      { date: "2026-01-25", type: "email", summary: "Sent term sheet. $1M lead at $12M pre-money valuation." }
    ]
  },
  {
    id: "ds-2",
    name: "Datacenter Copilot",
    founder_name: "Marcus Johnson",
    website: "https://datacentercopilot.com",
    description: "AI operations platform for data centers that automates capacity planning, cooling optimization, and predictive maintenance",
    deal_stage: "partner_meeting",
    deal_size: "$1.2M",
    valuation: "$10M pre-money",
    our_allocation: "$800K lead + $400K syndicate",
    market: {
      size: "$12B by 2028",
      growth: "18.5% CAGR"
    },
    team_assessment: "Exceptional. Marcus Johnson built Google's data center efficiency team over 10 years — this is exactly the system he's productizing. CTO Linda Park brings Meta infrastructure AI experience. Team of 15 ex-Google/Meta engineers is strong.",
    product_assessment: "Product is already deployed at 5 enterprise customers including Equinix and Digital Realty pilots. Documented 15-20% energy savings. Technology is proven from Google internals — the innovation is productizing it for external data centers.",
    concerns: [
      "Enterprise sales to data center operators can have long sales cycles",
      "Hyperscalers (Google, AWS, Azure) might productize internal tools",
      "Dependent on AI compute buildout continuing at current pace"
    ],
    champions: [
      "Alex Iskold (Managing Partner) — Strong vertical AI conviction, led sourcing",
      "Zann Ali (Partner) — Deep infrastructure expertise"
    ],
    next_steps: [
      "Partner meeting scheduled for Jan 30",
      "Complete Equinix reference call",
      "Final due diligence on competitive landscape",
      "Target term sheet by Feb 5"
    ],
    due_diligence: {
      technical: {
        summary: "Technology is proven — Marcus built this exact system at Google. The innovation is productizing it for external data centers. Product includes cooling optimization (30-40% of data center energy), capacity planning, and predictive maintenance.",
        score: 9,
        details: "Technical review confirmed the system matches Google's internal tools in functionality. Differentiation comes from being purpose-built for multi-tenant data centers rather than hyperscaler-specific infrastructure."
      },
      market: {
        summary: "Perfect market timing. AI compute is driving massive data center expansion. Energy costs are 30-40% of opex. Legacy DCIM tools are not AI-native. Datacenter Copilot is positioned to become the AI operations layer.",
        score: 9,
        details: "Spoke with 3 data center operators — all confirmed they are actively looking for AI-powered operations tools. Legacy Schneider and Nlyte tools are not keeping pace with modern requirements."
      },
      team: {
        summary: "Exceptional team. Marcus Johnson has 10 years building exactly this system at Google. Team of 15 ex-Google/Meta engineers brings deep domain expertise.",
        score: 9,
        details: "Reference calls with Google contacts confirm Marcus was 'the architect of our data center efficiency improvements that saved billions in energy costs.'"
      },
      financials: {
        summary: "Strong early traction. $400K ARR with 5 enterprise customers. Raising $1.2M to scale sales and expand engineering.",
        score: 8,
        details: "Unit economics are strong — average contract is $80K ARR with potential to grow significantly with expansion deals. Burn rate is $120K/month, runway is 12 months."
      }
    },
    team_deep_dive: "Marcus Johnson is the definition of founder-market fit. He spent 10 years at Google building the AI-powered systems that manage their data center operations — cooling optimization, capacity planning, predictive maintenance. Google's data centers are legendary for efficiency, and Marcus was a key architect of those systems.\n\nHe left Google in 2024 convinced that the same technology could help the broader data center industry. The timing is perfect — AI compute is driving massive data center expansion, and energy efficiency is critical as data centers now consume 2%+ of global electricity.\n\nCTO Linda Park led infrastructure AI at Meta and brings complementary experience. The team of 15 is almost entirely ex-Google and ex-Meta infrastructure engineers — they've built these systems before.",
    touchpoints: [
      { date: "2026-01-15", type: "email", summary: "Warm intro from Alex's Google network." },
      { date: "2026-01-18", type: "call", summary: "Intro call with Marcus. Exceptional background." },
      { date: "2026-01-22", type: "meeting", summary: "Full team meeting. Reviewed product demo and pilot results." },
      { date: "2026-01-26", type: "email", summary: "Confirmed partner meeting for Jan 30." }
    ]
  },
  {
    id: "ds-3",
    name: "AutoRAD",
    founder_name: "Dr. Kevin Park",
    website: "https://autorad.ai",
    description: "AI-powered radiology workflow automation that automates report generation, case prioritization, and quality assurance for radiology practices",
    deal_stage: "diligence",
    deal_size: "$1M",
    valuation: "$8M pre-money",
    our_allocation: "$750K lead",
    market: {
      size: "$3.2B by 2027",
      growth: "21.3% CAGR"
    },
    team_assessment: "Strong. Dr. Kevin Park is a practicing radiologist who built AI tools at Stanford Health. CTO brings Google Health experience. Team of 10 is capable but less proven than our other deal stage companies.",
    product_assessment: "Product automates report generation and case prioritization for radiologists. Early traction with 8 radiology practices. Differentiation is workflow focus vs. diagnostic AI — less regulatory burden.",
    concerns: [
      "Radiology AI market is crowded with well-funded competitors",
      "Healthcare sales cycles are long and complex",
      "Epic and Cerner may build similar workflow features"
    ],
    champions: [
      "Julie Wolf (Partner) — Healthcare AI expertise"
    ],
    next_steps: [
      "Complete customer reference calls",
      "Technical deep dive with external radiologist",
      "Competitive landscape analysis",
      "Decision by Feb 10"
    ],
    due_diligence: {
      technical: {
        summary: "Technology is solid but not as differentiated as NeuralPath or Datacenter Copilot. Workflow automation is valuable but could be replicated by EHR vendors.",
        score: 7,
        details: "Product demo showed strong workflow automation capabilities. Question is defensibility against Epic/Cerner building similar features."
      },
      market: {
        summary: "Radiology AI market is large but crowded. Workflow focus is differentiated from diagnostic AI but faces competition from multiple directions.",
        score: 7,
        details: "Market is attractive but competitive dynamics are concerning. Need to understand defensibility better."
      },
      team: {
        summary: "Strong team but less proven than our other deal stage companies. Kevin Park has relevant experience but hasn't scaled a startup before.",
        score: 7,
        details: "Team is capable but this is a first-time founder team with less domain-specific startup experience."
      },
      financials: {
        summary: "Early stage. $100K ARR with 8 radiology practice customers. Raising $1M for 18 months runway.",
        score: 7,
        details: "Burn rate is $80K/month. Unit economics are reasonable but unproven at scale."
      }
    },
    team_deep_dive: "Dr. Kevin Park is a practicing radiologist who spent 5 years at Stanford Health building internal AI tools for radiology workflow. He became frustrated that commercial tools focused on diagnostic AI (which has regulatory complexity) rather than workflow automation (which can be deployed faster).\n\nCTO Sarah Lee spent 3 years at Google Health working on clinical workflow products. She brings strong ML and product experience.\n\nThe team is smaller and less proven than our other deal stage opportunities, but the healthcare AI thesis is strong.",
    touchpoints: [
      { date: "2026-01-10", type: "email", summary: "Inbound via Julie's healthcare AI network." },
      { date: "2026-01-15", type: "call", summary: "Intro call with Kevin. Interesting workflow focus." },
      { date: "2026-01-20", type: "meeting", summary: "Product demo and market discussion." },
      { date: "2026-01-24", type: "email", summary: "Requested additional customer references for diligence." }
    ]
  },
  {
    id: "ds-4",
    name: "SynthBio Materials",
    founder_name: "Dr. Amanda Foster",
    website: "https://synthbiomaterials.com",
    description: "Synthetic biology platform for producing sustainable biomaterials including bio-based plastics, textiles, and packaging materials",
    deal_stage: "deep_diligence",
    deal_size: "$2M",
    valuation: "$15M pre-money",
    our_allocation: "$1.5M lead",
    market: {
      size: "$15B sustainable materials market by 2030",
      growth: "18.7% CAGR"
    },
    team_assessment: "Strong scientific team. Amanda Foster was a principal scientist at Zymergen before it failed — she has lessons learned from that experience. Team includes former Ginkgo and Bolt Threads scientists.",
    product_assessment: "Platform produces bio-based alternatives to petroleum plastics and synthetic textiles. Has pilot partnerships with major consumer brands. Technology is proven at lab scale, scaling to commercial production is the challenge.",
    concerns: [
      "Synthetic biology has had high-profile failures (Zymergen)",
      "Scaling bio-production is notoriously difficult",
      "Sustainable materials market is price-sensitive"
    ],
    champions: [
      "Julie Wolf (Partner) — Deep biotech expertise, understands syn bio risks"
    ],
    next_steps: [
      "Techno-economic analysis of production costs",
      "Reference calls with pilot brand partners",
      "External expert review of scaling approach",
      "Decision by Feb 15"
    ],
    due_diligence: {
      technical: {
        summary: "Technology is scientifically sound. The challenge is scaling — Zymergen failed at exactly this step. Amanda has learned from that experience and has a more conservative scaling approach.",
        score: 7,
        details: "External expert review in progress. Key question is whether the unit economics work at commercial scale."
      },
      market: {
        summary: "Sustainable materials market is large and growing but price-sensitive. Consumers and brands want sustainability but often not at premium prices.",
        score: 8,
        details: "Brand partner interest is strong — Unilever, Patagonia, and 3 other major brands have pilot programs. The question is whether they'll pay premiums at scale."
      },
      team: {
        summary: "Strong scientific team with relevant experience. Amanda's time at Zymergen is both a feature (she knows what went wrong) and a risk (association with failure).",
        score: 7,
        details: "Reference calls confirm Amanda was not responsible for Zymergen's scaling failures and has applied lessons learned to SynthBio's approach."
      },
      financials: {
        summary: "Pre-revenue at commercial scale. Has $2M in pilot revenue from brand partnerships. Raising $2M to fund production scale-up.",
        score: 6,
        details: "Production economics are the key unknown. If unit economics work at scale, this could be a massive opportunity. If not, it could fail like Zymergen."
      }
    },
    team_deep_dive: "Dr. Amanda Foster spent 6 years at Zymergen, eventually becoming a principal scientist. She left before the company's collapse but witnessed the scaling challenges that ultimately killed it. She started SynthBio Materials with a fundamentally different approach — smaller scale, proven economics at each step, and capital efficiency.\n\nHer team includes former scientists from Ginkgo Bioworks and Bolt Threads — they've seen both the successes and failures in synthetic biology. The lessons learned are valuable.\n\nThe big risk is that synthetic biology production is notoriously difficult to scale. Many promising lab results don't translate to commercial production. Amanda believes she's solved this, but it's the key diligence question.",
    touchpoints: [
      { date: "2026-01-08", type: "email", summary: "Inbound from Julie's biotech network." },
      { date: "2026-01-12", type: "call", summary: "Intro call with Amanda. Interesting Zymergen lessons learned." },
      { date: "2026-01-18", type: "meeting", summary: "Deep technical review of production approach." },
      { date: "2026-01-23", type: "call", summary: "Follow-up on scaling economics. External review in progress." }
    ]
  }
];
