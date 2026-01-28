export const earlyStageCompanies = [
  {
    id: "es-1",
    name: "CellularOS",
    contact_name: "Dr. Maya Rodriguez",
    contact_email: "maya@cellularos.bio",
    website: "https://cellularos.bio",
    description: "Operating system for cell manufacturing — software platform that automates and optimizes cell therapy production processes",
    contact_source: "referral",
    stage: "meeting_scheduled",
    last_contact_date: "2026-01-25",
    email_thread_count: 3,
    market: "Cell Therapy Manufacturing / Biotech",
    ai_summary: "Strong founder with MIT PhD and Genentech manufacturing background. Platform addresses critical bottleneck in cell therapy production. Early pilots with 2 CDMOs showing 40% improvement in manufacturing efficiency.",
    notes: "Maya Rodriguez spent 8 years at Genentech leading manufacturing automation for biologics. She saw the cell therapy manufacturing bottleneck firsthand and built CellularOS to address it. The platform provides real-time monitoring, predictive quality control, and automated batch management for cell manufacturing.",
    market_size: "$12B cell therapy manufacturing market by 2030",
    market_growth: "24.6% CAGR",
    team_background: [
      "Dr. Maya Rodriguez — Founder/CEO, MIT PhD Biological Engineering, 8 years at Genentech manufacturing",
      "Dr. Kevin Park — CTO, ex-Benchling, built laboratory software infrastructure",
      "Team of 12, mix of bioprocess engineers and software developers",
      "Advisory board includes former heads of manufacturing at Novartis and Bristol Myers Squibb"
    ],
    competitive_landscape: [
      { name: "Cytiva (Danaher)", positioning: "Hardware-focused — sells equipment but limited software capabilities" },
      { name: "Benchling", positioning: "Lab informatics — strong R&D focus but weak in manufacturing" },
      { name: "Apprentice.io", positioning: "Pharma manufacturing platform — more focused on traditional manufacturing" }
    ],
    green_flags: [
      "Exceptional founder pedigree — Genentech manufacturing leadership",
      "Critical bottleneck problem — cell therapy demand outstrips manufacturing capacity",
      "Early CDMO pilots showing 40% efficiency improvements",
      "Strong technical team with relevant bioprocessing experience",
      "Clear regulatory pathway — software doesn't require FDA approval"
    ],
    red_flags: [
      "Cell therapy manufacturing is complex — long sales cycles",
      "Requires integration with diverse equipment vendors",
      "Early stage — only 2 pilot customers"
    ],
    recommendation: "advance_to_deal_stage",
    recommendation_reasoning: "CellularOS fits 2048's deep tech thesis perfectly. Exceptional founder from Genentech manufacturing, addresses critical bottleneck in high-growth cell therapy market, and early pilot data is compelling. The efficiency gains translate directly to customer ROI.",
    key_questions: [
      "What's the path from pilot to full production contracts at CDMOs?",
      "How do you handle integration with different equipment vendors?",
      "What's the competitive moat as more software companies enter this space?",
      "How do you think about pricing — subscription vs. usage-based?"
    ],
    market_assessment: "Cell therapy is one of the fastest-growing segments in biopharma, but manufacturing is a critical bottleneck. Manual processes, batch failures, and capacity constraints limit scale. CellularOS addresses this with software that can be deployed without major capital investment.",
    touchpoints: [
      { date: "2026-01-15", type: "email", summary: "Inbound via warm intro from Julie Wolf's network at IndieBio." },
      { date: "2026-01-20", type: "call", summary: "30-min intro call with Sarah. Impressive background, clear vision for neuro-focused platform." },
      { date: "2026-01-25", type: "email", summary: "Shared deck and early data. 3 novel targets identified, Biogen interested." }
    ]
  },
  {
    id: "es-2",
    name: "ChainGuard",
    contact_name: "Alex Romero",
    contact_email: "alex@chainguard.ai",
    website: "https://chainguard.ai",
    description: "AI-powered supply chain security platform that detects anomalies and predicts disruptions using satellite imagery and shipping data",
    contact_source: "cold_outreach",
    stage: "follow_up",
    last_contact_date: "2026-01-22",
    email_thread_count: 2,
    market: "Supply Chain / Vertical AI",
    ai_summary: "Interesting vertical AI application for supply chain visibility. Strong technical team from Palantir. Product has traction with 3 Fortune 500 logistics customers. Concerns about commoditization from larger players.",
    notes: "ChainGuard uses computer vision on satellite imagery combined with shipping manifest data to predict supply chain disruptions before they happen. The recent port strikes and Red Sea disruptions have created urgency for this type of solution. However, both Flexport and Project44 are building similar capabilities, and they have distribution advantage.",
    market_size: "$19.3B supply chain visibility market by 2027",
    market_growth: "15.8% CAGR",
    team_background: [
      "Alex Romero — Founder/CEO, ex-Palantir supply chain practice lead",
      "Dr. Wei Zhang — CTO, ex-Planet Labs satellite imagery ML",
      "Team of 12, heavy on ML and geospatial expertise"
    ],
    competitive_landscape: [
      { name: "Project44", positioning: "Supply chain visibility leader — $2.7B valuation, adding predictive features" },
      { name: "Flexport", positioning: "Freight forwarding + tech — building internal visibility tools" },
      { name: "Altana AI", positioning: "Supply chain mapping platform — raised $100M, similar satellite approach" }
    ],
    green_flags: [
      "Strong technical team with relevant Palantir and Planet Labs experience",
      "3 Fortune 500 customers validates enterprise demand",
      "Recent supply chain disruptions have created market urgency",
      "Satellite + shipping data combination is differentiated"
    ],
    red_flags: [
      "Well-funded competitors building similar capabilities",
      "Supply chain visibility market is crowded",
      "Fortune 500 sales cycles are long and expensive"
    ],
    recommendation: "continue_monitoring",
    recommendation_reasoning: "ChainGuard has interesting technology and early traction, but the competitive landscape is challenging. Larger players like Project44 and Altana have significant head starts and funding. Worth monitoring but not priority for now.",
    key_questions: [
      "How do you differentiate from Altana AI, which has similar satellite-based approach?",
      "What's your path to winning against Project44's distribution advantage?",
      "How sticky are your Fortune 500 contracts? Any multi-year commitments?"
    ],
    market_assessment: "Supply chain visibility is a hot space post-COVID, but funding has poured in creating a competitive landscape. ChainGuard's satellite + shipping data approach is differentiated but faces well-funded competitors like Altana AI taking similar approaches.",
    touchpoints: [
      { date: "2026-01-18", type: "email", summary: "Inbound via cold email. Interesting pitch on supply chain AI." },
      { date: "2026-01-22", type: "call", summary: "Intro call with Alex. Good team, interesting tech, but competitive concerns." }
    ]
  },
  {
    id: "es-3",
    name: "ProteinForge",
    contact_name: "Dr. James Liu",
    contact_email: "james@proteinforge.bio",
    website: "https://proteinforge.bio",
    description: "Platform for designing and synthesizing novel proteins for industrial applications including enzymes, biomaterials, and sustainable chemicals",
    contact_source: "conference",
    stage: "responded",
    last_contact_date: "2026-01-20",
    email_thread_count: 1,
    market: "Synthetic Biology / Industrial Biotech",
    ai_summary: "Met at SynBioBeta conference. Interesting platform for industrial protein design. Strong academic pedigree but first-time founders. Market is large but industrial biotech sales cycles are challenging.",
    notes: "James Liu is a professor at Caltech who has developed novel protein design methods. The company applies this to industrial applications — enzymes for chemical manufacturing, proteins for biomaterials, etc. The technology is genuinely novel but the team is all academics with no commercial experience. Industrial biotech is also a tough market with long sales cycles.",
    market_size: "$42B industrial enzymes and bioproducts market by 2030",
    market_growth: "8.2% CAGR",
    team_background: [
      "Dr. James Liu — Founder/CEO, Caltech Professor, pioneer in computational protein design",
      "Dr. Emily Park — CSO, Stanford postdoc, enzyme engineering",
      "Team of 5, all from academic backgrounds"
    ],
    competitive_landscape: [
      { name: "Ginkgo Bioworks", positioning: "Synthetic biology platform — $15B peak valuation, broad applications" },
      { name: "Arzeda", positioning: "Computational protein design — $30M raised, industrial focus" },
      { name: "Absci", positioning: "AI protein engineering for drug discovery — different market focus" }
    ],
    green_flags: [
      "Novel protein design technology from leading academic",
      "Large market opportunity in industrial biotech",
      "Strong IP portfolio from academic research",
      "2 early pilot projects with chemical companies"
    ],
    red_flags: [
      "First-time founders with no commercial experience",
      "Industrial biotech has long sales cycles and low margins",
      "Ginkgo Bioworks struggles show market challenges",
      "Small team may not be able to execute commercially"
    ],
    recommendation: "continue_monitoring",
    recommendation_reasoning: "ProteinForge has interesting technology but significant execution risk with first-time academic founders in a challenging market. Industrial biotech requires patient capital and commercial expertise the team lacks. Monitor but not priority.",
    key_questions: [
      "How do you plan to build commercial capabilities given your academic background?",
      "What's the business model — licensing vs. product development?",
      "How do you think about Ginkgo's challenges in the market?"
    ],
    market_assessment: "Industrial biotech is a massive market but difficult to navigate. Ginkgo Bioworks' stock decline shows the challenges of monetizing synthetic biology platforms. ProteinForge's technology is interesting but execution in this market requires commercial expertise the team currently lacks.",
    touchpoints: [
      { date: "2026-01-20", type: "meeting", summary: "Met at SynBioBeta conference. Interesting technology, concerns about commercial execution." }
    ]
  },
  {
    id: "es-4",
    name: "Datacenter Copilot",
    contact_name: "Marcus Johnson",
    contact_email: "marcus@datacentercopilot.com",
    website: "https://datacentercopilot.com",
    description: "AI operations platform for data centers that automates capacity planning, cooling optimization, and predictive maintenance",
    contact_source: "referral",
    stage: "meeting_scheduled",
    last_contact_date: "2026-01-26",
    email_thread_count: 4,
    market: "Data Center Infrastructure / Vertical AI",
    ai_summary: "Strong vertical AI play in data center operations. Founder built Google's data center efficiency team. Product has real traction with 5 enterprise customers. Market timing excellent with AI compute buildout.",
    notes: "Marcus Johnson built the AI-powered efficiency systems for Google's data centers before leaving to productize the approach. The company helps data center operators optimize cooling (30-40% of energy costs), predict equipment failures, and plan capacity. With AI driving massive data center expansion, timing is excellent. Strong early traction with Equinix and Digital Realty pilots.",
    market_size: "$12B data center management software market by 2028",
    market_growth: "18.5% CAGR",
    team_background: [
      "Marcus Johnson — Founder/CEO, ex-Google data center efficiency team lead (10 years)",
      "Dr. Linda Park — CTO, ex-Meta infrastructure AI, PhD MIT",
      "Team of 15, mostly ex-Google and Meta infra engineers"
    ],
    competitive_landscape: [
      { name: "Schneider Electric", positioning: "Legacy DCIM — large install base but slow to innovate" },
      { name: "Nlyte", positioning: "DCIM software — private equity owned, limited R&D" },
      { name: "Vertiv (Liebert)", positioning: "Hardware-focused — moving into software but not AI-native" }
    ],
    green_flags: [
      "Exceptional founder pedigree — built Google's data center efficiency systems",
      "Strong early traction — Equinix, Digital Realty pilots",
      "Perfect market timing with AI compute buildout",
      "Legacy competitors slow to innovate",
      "Concrete ROI — 15-20% energy savings documented"
    ],
    red_flags: [
      "Enterprise sales to data center operators can be slow",
      "Google, Microsoft, Amazon building internal tools — may not buy",
      "Potential for hyperscalers to compete if they productize internal tools"
    ],
    recommendation: "advance_to_deal_stage",
    recommendation_reasoning: "Datacenter Copilot is an exceptional vertical AI opportunity. The founder built exactly this type of system at Google, creating authentic domain expertise. Market timing is perfect with AI driving data center expansion. Legacy competitors are slow to innovate. This fits 2048's vertical AI thesis perfectly.",
    key_questions: [
      "What's the conversion path from pilots to full contracts at Equinix and Digital Realty?",
      "How do you think about the risk of hyperscalers productizing their internal tools?",
      "What's your go-to-market strategy for the long tail of smaller data centers?",
      "How defensible is the technology against fast-followers?"
    ],
    market_assessment: "Data center buildout is exploding due to AI compute demand. Energy efficiency is critical as data centers now consume 2%+ of global electricity. Existing DCIM tools are legacy and not AI-native. Datacenter Copilot is well-positioned to become the AI operations layer for this massive infrastructure buildout.",
    touchpoints: [
      { date: "2026-01-15", type: "email", summary: "Warm intro from Alex Iskold's Google network." },
      { date: "2026-01-18", type: "call", summary: "Intro call with Marcus. Exceptional background, clear vision." },
      { date: "2026-01-22", type: "email", summary: "Shared detailed deck and pilot results. 15-20% energy savings documented." },
      { date: "2026-01-26", type: "email", summary: "Scheduled full partnership meeting for Jan 30." }
    ]
  },
  {
    id: "es-5",
    name: "PathologyAI",
    contact_name: "Dr. Rachel Williams",
    contact_email: "rachel@pathologyai.com",
    website: "https://pathologyai.com",
    description: "AI-powered digital pathology platform that assists pathologists in cancer diagnosis with automated image analysis and second-read capabilities",
    contact_source: "portfolio_referral",
    stage: "follow_up",
    last_contact_date: "2026-01-23",
    email_thread_count: 2,
    market: "Digital Pathology / Health AI",
    ai_summary: "Interesting digital pathology play referred by Julie Wolf from IndieBio network. Strong clinical validation but crowded market with well-funded competitors like Paige AI. Need to understand differentiation better.",
    notes: "PathologyAI uses deep learning to analyze digitized pathology slides, helping pathologists catch cancers they might miss. The technology has strong clinical validation — peer-reviewed studies show 15% improvement in cancer detection. However, the market is crowded with well-funded competitors like Paige AI ($150M raised) and PathAI ($300M+ raised). Need to understand PathologyAI's differentiation.",
    market_size: "$4.8B digital pathology market by 2027",
    market_growth: "12.1% CAGR",
    team_background: [
      "Dr. Rachel Williams — Founder/CEO, ex-pathologist at MD Anderson, trained 500+ pathology residents",
      "Dr. Kevin Chen — CTO, ex-Google Health AI team",
      "Team of 18, mix of pathologists and ML engineers"
    ],
    competitive_landscape: [
      { name: "Paige AI", positioning: "FDA-cleared digital pathology — $150M+ raised, strong clinical traction" },
      { name: "PathAI", positioning: "Largest digital pathology platform — $300M+ raised, pharma focused" },
      { name: "Ibex Medical", positioning: "Israel-based AI pathology — strong international presence" }
    ],
    green_flags: [
      "Strong clinical validation with peer-reviewed studies",
      "Founder is credentialed pathologist with teaching experience",
      "Ex-Google Health CTO brings ML credibility",
      "Focus on community hospitals — underserved market segment"
    ],
    red_flags: [
      "Well-funded competitors have significant head start",
      "Digital pathology adoption slower than expected",
      "Regulatory pathway complex for AI diagnostics"
    ],
    recommendation: "continue_monitoring",
    recommendation_reasoning: "PathologyAI has strong clinical validation and team, but the competitive landscape is challenging with Paige AI and PathAI having raised hundreds of millions. The community hospital focus is interesting but need to understand if that's defensible positioning or a sign they can't win major health systems. Worth a follow-up call to understand differentiation.",
    key_questions: [
      "How do you differentiate from Paige AI and PathAI given their funding advantage?",
      "Why focus on community hospitals — is this strategy or necessity?",
      "What's your regulatory pathway? Are you pursuing FDA clearance?",
      "How do you think about the consolidation in this space?"
    ],
    market_assessment: "Digital pathology is a large market but adoption has been slower than expected. The major competitors have raised significant funding and are establishing dominant positions. PathologyAI's community hospital focus could be smart if they can build a moat there, but it could also indicate inability to compete for major accounts.",
    touchpoints: [
      { date: "2026-01-18", type: "email", summary: "Intro via Julie Wolf's IndieBio network." },
      { date: "2026-01-23", type: "call", summary: "Intro call with Rachel. Strong clinical background, need to understand competitive positioning." }
    ]
  },
  {
    id: "es-6",
    name: "FarmSense",
    contact_name: "David Martinez",
    contact_email: "david@farmsense.ai",
    website: "https://farmsense.ai",
    description: "IoT and AI platform for precision agriculture that provides real-time crop monitoring, pest detection, and yield prediction using computer vision and environmental sensors",
    contact_source: "cold_outreach",
    stage: "new",
    last_contact_date: "2026-01-24",
    email_thread_count: 1,
    market: "AgTech / Vertical AI",
    ai_summary: "Inbound from ag tech accelerator. Interesting computer vision application for crop monitoring. Team has agricultural background. Need to understand market dynamics — ag tech has had mixed venture outcomes.",
    notes: "FarmSense provides computer vision-based crop monitoring that detects pests, diseases, and water stress earlier than traditional scouting. The founder has deep agricultural background — fourth generation farmer who got a CS degree to apply technology to farming. Ag tech is a large market but has had mixed venture outcomes — long sales cycles, farmer skepticism of technology, and commodity economics.",
    market_size: "$22B precision agriculture market by 2027",
    market_growth: "13.5% CAGR",
    team_background: [
      "David Martinez — Founder/CEO, 4th generation farmer, CS degree from UC Davis",
      "Jennifer Liu — CTO, ex-John Deere autonomous vehicles team",
      "Team of 10, mix of ag and tech backgrounds"
    ],
    competitive_landscape: [
      { name: "Climate Corporation (Bayer)", positioning: "Dominant player — Bayer owned, massive farmer relationships" },
      { name: "Farmers Edge", positioning: "Canadian ag tech — struggled financially, shows market challenges" },
      { name: "Prospera (Valmont)", positioning: "Acquired by Valmont — computer vision for ag" }
    ],
    green_flags: [
      "Founder has authentic agricultural background",
      "Strong technical team with John Deere experience",
      "Product-market fit with 50+ farm customers",
      "Large and underdigitized market"
    ],
    red_flags: [
      "Ag tech has had mixed venture outcomes",
      "Long sales cycles and seasonal revenue",
      "Farmers Edge struggles show market challenges",
      "Climate Corporation (Bayer) has massive head start"
    ],
    recommendation: "continue_monitoring",
    recommendation_reasoning: "FarmSense has an interesting approach and authentic founder, but ag tech has historically been challenging for venture returns. The market is large but sales cycles are long, farmers are price-sensitive, and major incumbents like Bayer have significant advantages. Not a priority but worth monitoring.",
    key_questions: [
      "How do you think about competing with Climate Corporation's massive farmer base?",
      "What's your business model — subscription? Hardware + software?",
      "How do you address farmer skepticism about ag tech given past failures?"
    ],
    market_assessment: "Precision agriculture is a large market but has been difficult for venture-backed companies. Farmers Edge's financial struggles and low acquisition multiples for ag tech companies suggest market challenges. FarmSense needs a differentiated approach to succeed.",
    touchpoints: [
      { date: "2026-01-24", type: "email", summary: "Inbound via ag tech accelerator. Interesting background, need to evaluate market dynamics." }
    ]
  }
];
