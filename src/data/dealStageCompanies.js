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
    next_steps: "Finalize term sheet by Jan 31. Complete reference calls with Biogen partnership contacts. Board structure negotiation. Target close by Feb 15.",
    due_diligence: {
      recommendation: "approve_for_ic",
      recommendation_reasoning: "NeuralPath Bio represents a rare opportunity to invest in a DeepMind-caliber founder at pre-seed. Sarah Chen is among the top 20 people globally in AI-driven protein structure prediction, and she's applying that expertise to an underserved market. The neurological disease focus is contrarian but smart — pharma has underinvested here, creating opportunity. Early Biogen partnership interest validates the platform. Recommend approval for IC.",
      investment_thesis: "NeuralPath Bio is building the specialized AI drug discovery platform for neurological diseases. While generalist platforms like Recursion compete broadly, NeuralPath's neurological focus gives them unique advantages: (1) Neurological proteins have distinct folding challenges that benefit from specialized models, (2) Major pharma companies have underinvested in neuro R&D due to high failure rates, creating partnership opportunities, (3) Founder Sarah Chen has irreplaceable DeepMind pedigree.\n\nThe company has identified 3 novel therapeutic targets and is in active partnership discussions with Biogen. We believe NeuralPath can become the platform of choice for pharma companies seeking to re-enter neurological disease R&D with AI assistance.",
      market_analysis: "The AI drug discovery market is projected to reach $8.2B by 2028 at 28.4% CAGR. While crowded overall, the neurological disease segment is underserved. Major pharma companies like Pfizer and Novartis have reduced neuro R&D investment due to high clinical failure rates (>90% in Alzheimer's trials).\n\nThis creates a contrarian opportunity: if AI can improve target identification success rates even modestly, pharma will invest heavily. Biogen, Eli Lilly (neuro division), and Novartis are all actively seeking AI drug discovery partnerships for neurological diseases.",
      technology_assessment: "NeuralPath's core technology extends AlphaFold-style protein structure prediction with specific optimizations for neurological proteins. External review by Dr. Jennifer Kim (Stanford computational biology) confirms this is 'among the most sophisticated applications of protein structure prediction outside of DeepMind itself.'\n\nKey differentiators: (1) Proprietary neurological protein interaction dataset compiled from 5 years of academic research, (2) Models specifically tuned for CNS protein folding challenges, (3) Integration with target validation assays.\n\nTechnology risk is moderate — the core approach is proven, but translation to actual drug targets remains to be validated clinically.",
      go_to_market_strategy: "NeuralPath's GTM is partnership-driven. Rather than developing drugs internally (capital-intensive), they partner with pharma for target discovery and validation.\n\nBusiness model: (1) Upfront research partnership payments ($1-5M), (2) Milestone payments tied to clinical progress ($5-50M), (3) Royalties on approved drugs (1-3%).\n\nInitial focus is mid-tier pharma with active neuro programs (Biogen, Lundbeck). Once validated, expand to large pharma partners.",
      financial_projections_review: "Pre-revenue, capital-efficient profile. Current burn rate is $150K/month with 12 months runway. Raising $1.5M to extend runway to 24 months.\n\nUse of funds: (1) Expand computational infrastructure - $400K, (2) Hire 2 ML researchers - $600K, (3) Pharma partnership development - $300K, (4) Operating reserves - $200K.\n\nPath to revenue: Biogen partnership could close in Q2 2026, providing $1-2M in non-dilutive partnership revenue.",
      risk_matrix: [
        { risk: "Clinical translation failure", severity: "high", mitigation: "Focus on target identification, not drug development. Let pharma partners bear clinical risk." },
        { risk: "Pharma partnership delays", severity: "medium", mitigation: "Multiple concurrent discussions (Biogen, Lilly, Novartis). Diversified pipeline." },
        { risk: "Competition from well-funded platforms", severity: "medium", mitigation: "Neurological specialization creates defensible niche. Generalist platforms can't match depth." },
        { risk: "Team scaling challenges", severity: "medium", mitigation: "Focused hiring plan. Partnership model limits need for large team." }
      ],
      key_concerns: [
        "Neurological diseases have >90% clinical failure rates. Even excellent targets may not lead to approved drugs.",
        "Small team (8 people) may struggle if multiple pharma partnerships materialize simultaneously.",
        "Pre-revenue with no guaranteed partnership revenue — need to see Biogen deal close.",
        "Single-founder risk if Sarah Chen leaves or burns out."
      ],
      reference_questions: [
        "For Biogen contacts: How does NeuralPath's target quality compare to internal discovery efforts?",
        "For DeepMind colleagues: What made Sarah exceptional? Any concerns about her ability to build a company?",
        "For Recursion contacts: How does NeuralPath's neurological focus compare to your generalist approach?",
        "For scientific advisors: Is the neurological protein dataset genuinely differentiated?"
      ]
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
    next_steps: "Partner meeting scheduled for Jan 30. Complete Equinix reference call. Final due diligence on competitive landscape. Target term sheet by Feb 5.",
    due_diligence: {
      recommendation: "approve_for_ic",
      recommendation_reasoning: "Datacenter Copilot is an exceptional vertical AI opportunity with rare founder-market fit. Marcus Johnson literally built this system at Google — he is productizing his own proven work. Market timing is perfect with AI driving explosive data center growth. Early traction (Equinix, Digital Realty pilots) validates enterprise demand. Recommend approval for IC.",
      investment_thesis: "Datacenter Copilot is building the AI operations layer for data center infrastructure. As AI compute drives explosive data center growth, energy efficiency has become critical — data centers now consume 2%+ of global electricity.\n\nMarcus Johnson spent 10 years building the systems that make Google's data centers the most efficient in the world. He's productizing that expertise for the broader market. Unlike legacy DCIM tools (Schneider, Nlyte), Datacenter Copilot is AI-native from day one.\n\nWe believe this can become essential infrastructure for the AI era — the operating system for data center operations.",
      market_analysis: "Data center management software market is projected to reach $12B by 2028 at 18.5% CAGR. More importantly, AI compute is driving unprecedented data center expansion — hyperscalers are spending $200B+ annually on infrastructure.\n\nEnergy costs are 30-40% of data center opex. A 15-20% improvement in efficiency translates to millions in annual savings for large operators. This creates strong ROI for Datacenter Copilot's solution.\n\nLegacy DCIM vendors (Schneider Electric, Nlyte) are slow to innovate. They've owned this market for 20 years but are not AI-native. This creates a window for disruption.",
      technology_assessment: "Datacenter Copilot's core technology mirrors Google's internal systems. External review confirms the approach is sound and differentiated.\n\nKey capabilities: (1) Cooling optimization using thermal modeling and ML prediction, (2) Capacity planning with AI-driven demand forecasting, (3) Predictive maintenance reducing equipment failures.\n\nDocumented results show 15-20% energy savings at pilot customers. This is consistent with Google's internal results.\n\nTechnology risk is low — this is proven technology being productized, not R&D.",
      go_to_market_strategy: "Enterprise sales focused on data center operators and colocation providers. Initial targets are mid-size operators (Equinix, Digital Realty, CyrusOne) who lack Google-scale internal capabilities.\n\nLand with cooling optimization (fastest ROI), expand to full operations suite. Average deal size target is $80-150K ARR with potential for $500K+ at large facilities.\n\nSales cycle is 3-6 months. Current pipeline includes 12 qualified opportunities beyond existing pilots.",
      financial_projections_review: "Early traction: $400K ARR with 5 enterprise customers. Burn rate is $120K/month with 12 months runway.\n\nRaising $1.2M to scale sales team and expand engineering. Use of funds: (1) Sales team expansion - $500K, (2) Engineering for enterprise features - $400K, (3) Customer success - $200K, (4) Operating reserves - $100K.\n\nPath to $2M ARR by end of 2026 based on current pipeline conversion.",
      risk_matrix: [
        { risk: "Hyperscaler competition", severity: "medium", mitigation: "Google/AWS/Azure build for internal use. Different requirements than multi-tenant operators." },
        { risk: "Long enterprise sales cycles", severity: "medium", mitigation: "Strong pilot results accelerate deals. Current 3-6 month cycle is manageable." },
        { risk: "AI compute slowdown", severity: "low", mitigation: "Even in slowdown, efficiency becomes more important as operators cut costs." }
      ],
      key_concerns: [
        "What if Google or AWS productizes their internal tools for external sale?",
        "Enterprise sales could take longer than projected — need to validate pipeline quality.",
        "Team is engineering-heavy — may need sales leadership hire."
      ],
      reference_questions: [
        "For Equinix contacts: How does ROI compare to your projections? Would you expand deployment?",
        "For Google infrastructure contacts: What made Marcus exceptional? Any concerns about commercializing this approach?",
        "For Digital Realty: How does Datacenter Copilot compare to existing DCIM tools?"
      ]
    },
    team_deep_dive: "Marcus Johnson is the definition of founder-market fit. He spent 10 years at Google building the AI-powered systems that manage their data center operations — cooling optimization, capacity planning, predictive maintenance. Google's data centers are legendary for efficiency, and Marcus was a key architect of those systems.\n\nHe left Google in 2024 convinced that the same technology could help the broader data center industry. The timing is perfect — AI compute is driving massive data center expansion, and energy efficiency is critical as data centers now consume 2%+ of global electricity.\n\nCTO Linda Park led infrastructure AI at Meta and brings complementary experience. The team of 15 is almost entirely ex-Google and ex-Meta infrastructure engineers — they've built these systems before.",
    touchpoints: [
      { date: "2026-01-15", type: "email", summary: "Warm intro from Alex's Google network." },
      { date: "2026-01-18", type: "call", summary: "Intro call with Marcus. Exceptional background, clear product vision." },
      { date: "2026-01-22", type: "meeting", summary: "Full team meeting. Reviewed product demo and pilot results. 15-20% energy savings documented." },
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
    next_steps: "Complete customer reference calls. Technical deep dive with external radiologist. Competitive landscape analysis. Decision by Feb 10.",
    due_diligence: {
      recommendation: "request_more_info",
      recommendation_reasoning: "AutoRAD has interesting positioning (workflow vs. diagnostic AI) and early traction. However, competitive landscape is concerning with well-funded players and potential EHR vendor bundling. Need additional diligence on defensibility and customer stickiness before approval.",
      investment_thesis: "AutoRAD focuses on radiology workflow automation rather than diagnostic AI. This is smart positioning: workflow tools don't require FDA clearance and can be deployed faster. The product automates report generation, case prioritization, and quality assurance.\n\nRadiologists are overworked (reading 50+ studies/day) and burning out. AutoRAD increases throughput 20-30% while reducing errors. Early traction with 8 radiology practices validates demand.\n\nThe question is defensibility against well-funded competitors and EHR vendors.",
      market_analysis: "Radiology AI market is projected to reach $3.2B by 2027 at 21.3% CAGR. However, the market is crowded with well-funded players: Aidoc ($250M raised), Qure.ai ($100M+), Viz.ai ($200M+).\n\nAutoRAD's workflow focus is differentiated — most competitors focus on diagnostic AI (detecting specific conditions). Workflow automation is a larger market opportunity but faces competition from EHR vendors.",
      technology_assessment: "Technology is solid but not highly differentiated. Core NLP for report generation is based on standard transformer architectures. Case prioritization uses straightforward classification models.\n\nCompetitive moat is unclear. Epic and Cerner could build similar workflow features, and they have distribution advantage.\n\nQuestion: What prevents larger players from replicating this?",
      key_concerns: [
        "Competitive landscape is challenging with well-funded diagnostic AI players",
        "EHR vendors (Epic, Cerner) could build similar workflow features",
        "Healthcare sales cycles are long — 8 customers after 2 years is modest traction",
        "First-time founder team with limited startup experience"
      ],
      reference_questions: [
        "For radiology practice customers: What would make you switch to an alternative? How sticky is AutoRAD?",
        "For Epic contacts: Are you building similar workflow automation features?",
        "For radiologists: How does AutoRAD compare to other workflow tools you've evaluated?"
      ]
    },
    team_deep_dive: "Dr. Kevin Park is a practicing radiologist who spent 5 years at Stanford Health building internal AI tools for radiology workflow. He became frustrated that commercial tools focused on diagnostic AI (which has regulatory complexity) rather than workflow automation (which can be deployed faster).\n\nCTO Sarah Lee spent 3 years at Google Health working on clinical workflow products. She brings strong ML and product experience.\n\nThe team is smaller and less proven than our other deal stage opportunities, but the healthcare AI thesis is strong.",
    touchpoints: [
      { date: "2026-01-10", type: "email", summary: "Inbound via Julie's healthcare AI network." },
      { date: "2026-01-15", type: "call", summary: "Intro call with Kevin. Interesting workflow focus, questions about defensibility." },
      { date: "2026-01-20", type: "meeting", summary: "Product demo and market discussion. Good product, competitive concerns remain." },
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
      size: "$15B by 2030",
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
    next_steps: "Techno-economic analysis of production costs. Reference calls with pilot brand partners. External expert review of scaling approach. Decision by Feb 15.",
    due_diligence: {
      recommendation: "request_more_info",
      recommendation_reasoning: "SynthBio Materials has interesting technology and strong brand interest, but synthetic biology production scaling is notoriously difficult. Zymergen's failure looms large. Amanda has learned from that experience, but we need external validation of her scaling approach before proceeding. Request techno-economic analysis.",
      investment_thesis: "SynthBio Materials is building bio-based alternatives to petroleum-derived materials — plastics, textiles, packaging. Consumer brands (Patagonia, Unilever) are actively seeking sustainable materials for ESG commitments.\n\nThe company's platform uses engineered microorganisms to produce materials at scale. Amanda Foster learned from Zymergen's failure and has a more conservative, economics-first approach.\n\nIf SynthBio can prove unit economics at commercial scale, the market opportunity is massive. But that's a big 'if' in synthetic biology.",
      market_analysis: "Sustainable materials market is projected to reach $15B by 2030 at 18.7% CAGR, driven by consumer demand and corporate ESG commitments.\n\nBrand partners are actively seeking alternatives to petroleum plastics. Patagonia, Unilever, and others have public commitments to sustainable materials.\n\nChallenge: Brands want sustainability but often won't pay premiums. Bio-based materials must reach cost parity with petroleum alternatives.",
      technology_assessment: "SynthBio's platform uses engineered yeast strains to produce bio-based polymers. The core biology is sound — similar approaches work at Amyris, Ginkgo, and others.\n\nThe question is scale-up. Zymergen failed at exactly this step. Amanda's approach differs: (1) Smaller scale targets initially, (2) Prove economics before scaling, (3) Partner with existing manufacturers rather than building own facilities.\n\nNeed external techno-economic analysis to validate production cost assumptions.",
      regulatory_landscape: "Bio-based materials face relatively light regulation compared to food or pharma applications. No FDA approval required for industrial materials.\n\nHowever, some applications (food packaging) may require FDA GRAS certification. SynthBio is initially targeting non-food applications to avoid regulatory complexity.",
      key_concerns: [
        "Zymergen's $3B failure shows the risks of synthetic biology production scaling",
        "Unit economics at commercial scale are unproven",
        "Brand partners want sustainability but may not pay premiums",
        "Manufacturing scale-up requires significant capital beyond this round"
      ],
      reference_questions: [
        "For Patagonia contacts: Would you pay a premium for SynthBio materials? How much?",
        "For Zymergen alumni: What went wrong? How does Amanda's approach differ?",
        "For manufacturing experts: Are SynthBio's production cost assumptions realistic?"
      ]
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
