export const portfolioCompanies = [
  {
    id: "pc-1",
    name: "GlossGenius",
    website: "https://www.glossgenius.com",
    description: "GlossGenius is a comprehensive business platform for the beauty and wellness industry, offering booking, payments, marketing, and client management tools for independent beauty professionals and salons.",
    funding: {
      history: [
        { round: "Pre-Seed", amount: "$500K", date: "2017-03", investors: ["2048 Ventures", "Angel Investors"] },
        { round: "Seed", amount: "$2M", date: "2018-06", investors: ["2048 Ventures", "Thrive Capital"] },
        { round: "Series A", amount: "$16M", date: "2020-08", investors: ["Bessemer Venture Partners", "2048 Ventures"] },
        { round: "Series B", amount: "$25M", date: "2022-01", investors: ["Bessemer Venture Partners", "L Catterton"] },
        { round: "Series C", amount: "$28M", date: "2023-07", investors: ["L Catterton", "Bessemer Venture Partners"] }
      ],
      total: "$71M",
      last_round: { amount: "$28M", date: "2023-07-27" },
      valuation: "$500M+"
    },
    market: {
      size: "$190B by 2030",
      growth: "12.3% CAGR",
      trends: [
        "Independent beauty professionals increasingly seeking all-in-one platforms vs. fragmented tools",
        "Embedded fintech (payments, lending) becoming table stakes for vertical SaaS",
        "AI-powered scheduling and client communication driving productivity gains"
      ],
      challenges: [
        "High competition from Square, Vagaro, and Boulevard in the SMB beauty space",
        "Macroeconomic sensitivity — beauty is somewhat discretionary spending"
      ],
      context: "The global beauty and wellness market is massive and highly fragmented, with millions of independent professionals and small businesses. GlossGenius targets this underserved segment with purpose-built software that combines booking, payments, and marketing."
    },
    competitors: [{ name: "Square Appointments" }, { name: "Vagaro" }, { name: "Boulevard" }, { name: "Mindbody" }, { name: "Fresha" }],
    competitor_details: [
      {
        name: "Boulevard",
        description: "High-end salon management platform targeting premium salons and spas with sophisticated booking and client management",
        positioning: "Focuses on enterprise-level salons with complex needs; higher price point than GlossGenius",
        recent_moves: "Raised $70M Series C in 2022; expanding into multi-location chains"
      },
      {
        name: "Square Appointments",
        description: "Part of Square's SMB ecosystem, offering scheduling integrated with Square's payment processing",
        positioning: "Generalist approach — beauty is one of many verticals; lacks deep beauty-specific features",
        recent_moves: "Integrated with Square Banking; AI assistant features launched 2024"
      },
      {
        name: "Vagaro",
        description: "Booking and management platform for salons, spas, and fitness businesses",
        positioning: "Broad wellness focus; strong in fitness and spa segments",
        recent_moves: "Launched marketplace features; expanded internationally"
      }
    ],
    competitive_positioning: {
      unique_value_prop: "GlossGenius is purpose-built for independent beauty professionals with an intuitive mobile-first design, instant payouts, and AI-powered client management that larger platforms can't match.",
      advantages: [
        "Beautiful, intuitive UX specifically designed for beauty professionals",
        "Instant payouts differentiate from Square's standard 1-2 day settlements",
        "Strong brand loyalty and word-of-mouth in beauty community",
        "Deep integrations with Instagram and beauty-specific marketing tools"
      ]
    },
    news: [
      { title: "GlossGenius Launches AI Scheduling Assistant", date: "2025-12-10", summary: "New AI feature automatically fills cancellation slots by reaching out to waitlisted clients, boosting salon utilization by 15-20%.", impact: "product" },
      { title: "GlossGenius Hits $500M GMV Run Rate", date: "2025-09-15", summary: "Platform now processes over $500M in annual gross merchandise value, up 60% YoY, driven by expansion into multi-location salons.", impact: "major" },
      { title: "Partnership with Beauty Brands for Exclusive Discounts", date: "2025-11-01", summary: "GlossGenius partnered with Olaplex, ColorWow, and other professional brands to offer exclusive wholesale pricing to platform users.", impact: "market" }
    ],
    analysis: {
      opportunity_score: 9.0,
      growth_trajectory: "GlossGenius is emerging as the clear winner in the independent beauty professional segment. Strong revenue growth, expanding TAM through multi-location features, and embedded fintech expansion position it for a potential exit or IPO in 2026-2027.",
      health_assessment: "Healthy — strong product-market fit, loyal user base, and multiple growth vectors. Series C runway provides 24+ months to hit profitability milestones."
    },
    growth_opportunities: [
      { title: "Multi-Location Expansion", impact: "high", identified_date: "2025-09-15", description: "Moving upmarket to serve multi-location salons and chains significantly expands ACV and TAM." },
      { title: "Embedded Lending", impact: "high", identified_date: "2025-10-20", description: "Offering business loans and equipment financing to beauty professionals creates new revenue stream and increases platform stickiness." },
      { title: "International Expansion", impact: "medium", identified_date: "2025-11-05", description: "UK and Canada markets have similar independent beauty professional density and underserved software needs." }
    ],
    strategic_opportunities: [
      { title: "IPO Path", description: "With strong growth metrics and clear market leadership, GlossGenius could pursue an IPO in 2027 targeting a $1B+ valuation.", impact: "high", timeline: "Q4 2026" },
      { title: "Marketplace Model", description: "Building a two-sided marketplace connecting beauty professionals with clients could unlock consumer ad revenue.", impact: "medium", timeline: "Q2 2026" }
    ],
    threats: [
      { title: "Square Intensification", description: "Square could deepen beauty-specific features and leverage its massive SMB distribution to compete more directly.", severity: "medium", category: "competitive" },
      { title: "Economic Downturn Impact", description: "Recession could reduce discretionary beauty spending and slow new professional signups.", severity: "medium", category: "market" }
    ],
    ai_insights: {
      summary: "GlossGenius is 2048's standout portfolio company — a pre-seed investment that has grown into the leading platform for independent beauty professionals. The company's mobile-first, beautifully designed product has created genuine user love in an underserved market. With $500M+ GMV and clear path to profitability, this is positioned for a strong exit.",
      key_metrics: "65,000+ active beauty professionals, $500M+ GMV run rate, 60% YoY growth, 95%+ gross retention",
      recommendation: "Support expansion into multi-location segment and embedded fintech. This is a potential fund-returner — engage on board strategy for optimal exit timing."
    },
    financials: {
      mrr: 3500000,
      arr: 42000000,
      burn_rate: 2000000,
      runway: "24+ months"
    },
    intelligence_last_updated: "2026-01-28",
    news_last_updated: "2026-01-28"
  },
  {
    id: "pc-2",
    name: "Vitally",
    website: "https://www.vitally.io",
    description: "Vitally is a customer success platform for B2B software companies that combines product analytics, customer health scoring, and workflow automation to help teams retain and grow their customer base.",
    funding: {
      history: [
        { round: "Pre-Seed", amount: "$750K", date: "2019-02", investors: ["2048 Ventures", "Techstars"] },
        { round: "Seed", amount: "$3.5M", date: "2020-03", investors: ["2048 Ventures", "Primary Venture Partners"] },
        { round: "Series A", amount: "$9M", date: "2021-06", investors: ["Tiger Global", "Primary Venture Partners"] },
        { round: "Series B", amount: "$30M", date: "2023-02", investors: ["Next47", "Tiger Global", "Primary Venture Partners"] }
      ],
      total: "$43M",
      last_round: { amount: "$30M", date: "2023-02-22" },
      valuation: "$200M+"
    },
    market: {
      size: "$2.5B by 2027",
      growth: "18.4% CAGR",
      trends: [
        "Net revenue retention becoming key SaaS metric driving CS investment",
        "Product-led growth companies need automated customer success at scale",
        "AI-driven health scoring and churn prediction becoming table stakes"
      ],
      challenges: [
        "Crowded market with established players like Gainsight and ChurnZero",
        "Economic pressure on SaaS budgets affecting CS tool spend"
      ],
      context: "As SaaS companies mature, customer success has become critical to growth. The shift from 'growth at all costs' to efficient growth has elevated NRR and customer retention as key metrics, driving demand for platforms like Vitally."
    },
    competitors: [{ name: "Gainsight" }, { name: "ChurnZero" }, { name: "Totango" }, { name: "Planhat" }],
    competitor_details: [
      {
        name: "Gainsight",
        description: "The category creator and market leader in customer success platforms, serving enterprise customers",
        positioning: "Enterprise-focused with comprehensive but complex feature set; higher price point",
        recent_moves: "Launched AI Copilot in 2024; continued enterprise expansion"
      },
      {
        name: "ChurnZero",
        description: "Customer success platform focused on mid-market SaaS companies",
        positioning: "Strong automation and in-app messaging; direct competitor to Vitally",
        recent_moves: "Raised $25M in 2021; expanded product analytics capabilities"
      }
    ],
    competitive_positioning: {
      unique_value_prop: "Vitally combines the power of enterprise CS platforms with the ease-of-use of modern SaaS tools, specifically designed for product-led growth companies.",
      advantages: [
        "Product analytics integration superior to traditional CS platforms",
        "Faster time-to-value — customers live in weeks vs. months",
        "Purpose-built for PLG companies with usage-based workflows",
        "Modern, intuitive UX vs. legacy competitors"
      ]
    },
    news: [
      { title: "Vitally Launches AI-Powered Churn Prediction", date: "2025-11-20", summary: "New ML model predicts churn risk 60 days in advance with 85% accuracy, enabling proactive intervention.", impact: "product" },
      { title: "Vitally Passes 500 Enterprise Customers", date: "2025-10-01", summary: "Customer base now includes Segment, Notion, and 500+ other B2B SaaS companies, up from 350 at start of year.", impact: "major" },
      { title: "Partnership with HubSpot", date: "2025-08-15", summary: "Deep integration with HubSpot CRM enables seamless data flow and joint go-to-market in mid-market segment.", impact: "market" }
    ],
    analysis: {
      opportunity_score: 8.5,
      growth_trajectory: "Vitally has carved out a strong position in the PLG-focused customer success segment. Growth has been steady with improving unit economics. The company is well-positioned for Series C or acquisition by a larger platform.",
      health_assessment: "Healthy — strong customer retention, growing enterprise adoption, and clear differentiation from legacy players. Runway is solid for 18+ months."
    },
    growth_opportunities: [
      { title: "AI-Native CS Platform", impact: "high", identified_date: "2025-11-20", description: "Being early with AI features positions Vitally as the modern alternative to legacy CS platforms." },
      { title: "Platform Partnerships", impact: "medium", identified_date: "2025-08-15", description: "Deep integrations with HubSpot, Salesforce, and PLG tools expand distribution." }
    ],
    strategic_opportunities: [
      { title: "Acquisition Target", description: "Vitally could be an attractive acquisition for Salesforce, HubSpot, or a PE firm consolidating CS tools.", impact: "high", timeline: "2026" },
      { title: "International Expansion", description: "European market has similar CS platform demand with less competition.", impact: "medium", timeline: "Q3 2026" }
    ],
    threats: [
      { title: "Gainsight AI Investment", description: "Category leader's heavy AI investment could close the innovation gap.", severity: "medium", category: "competitive" },
      { title: "Platform Bundling", description: "CRM platforms adding native CS features could reduce standalone tool demand.", severity: "medium", category: "market" }
    ],
    ai_insights: {
      summary: "Vitally represents 2048's thesis on modern B2B infrastructure — taking a legacy category and rebuilding it for the PLG era. The company has established strong positioning among product-led growth companies and is increasingly winning against legacy players on product and ease of implementation.",
      key_metrics: "500+ enterprise customers, 140% net revenue retention, $15M+ ARR, 40% YoY growth",
      recommendation: "Support enterprise sales expansion and AI feature development. Evaluate strategic options including Series C vs. M&A in 2026."
    },
    financials: {
      mrr: 1300000,
      arr: 15600000,
      burn_rate: 1200000,
      runway: "20+ months"
    },
    intelligence_last_updated: "2026-01-28",
    news_last_updated: "2026-01-28"
  },
  {
    id: "pc-3",
    name: "Soona",
    website: "https://www.soona.co",
    description: "Soona is an all-in-one platform for e-commerce content creation, helping brands create, manage, and optimize product photos and videos at scale with virtual studio technology and AI-powered editing.",
    funding: {
      history: [
        { round: "Pre-Seed", amount: "$500K", date: "2018-05", investors: ["2048 Ventures", "Techstars"] },
        { round: "Seed", amount: "$3.8M", date: "2019-09", investors: ["Union Square Ventures", "2048 Ventures"] },
        { round: "Series A", amount: "$10M", date: "2020-10", investors: ["Bain Capital Ventures", "Union Square Ventures"] },
        { round: "Series B", amount: "$35M", date: "2022-01", investors: ["Bain Capital Ventures", "Union Square Ventures"] }
      ],
      total: "$49M",
      last_round: { amount: "$35M", date: "2022-01-24" },
      valuation: "$150M+"
    },
    market: {
      size: "$50B by 2028",
      growth: "15.2% CAGR",
      trends: [
        "E-commerce brands require constant content refresh across channels",
        "User-generated content and video commerce driving new format needs",
        "AI-generated imagery becoming viable for certain use cases"
      ],
      challenges: [
        "Competition from traditional photography studios going digital",
        "AI image generation could disrupt need for photo shoots"
      ],
      context: "E-commerce companies need high-quality visual content at increasing velocity. Traditional photo shoots are slow and expensive. Soona's virtual studio model enables same-day content delivery at a fraction of the cost."
    },
    competitors: [{ name: "Traditional Studios" }, { name: "Shutterstock Studios" }, { name: "Pencil" }, { name: "AI Image Generators" }],
    competitor_details: [
      {
        name: "Shutterstock Studios",
        description: "Shutterstock's custom content creation service for enterprise brands",
        positioning: "Leverages massive Shutterstock network; enterprise-focused",
        recent_moves: "Launched AI-powered editing tools; expanded production facilities"
      }
    ],
    competitive_positioning: {
      unique_value_prop: "Soona combines human creativity with AI-powered workflow to deliver professional e-commerce content in 24 hours at 10x lower cost than traditional studios.",
      advantages: [
        "Virtual studio model enables same-day delivery",
        "Software platform for content management and optimization",
        "AI editing tools enhance human photographer output",
        "Strong DTC brand relationships and word-of-mouth"
      ]
    },
    news: [
      { title: "Soona Launches AI Background Generation", date: "2025-12-05", summary: "New AI feature generates lifestyle backgrounds for product photos, reducing need for physical sets while maintaining authenticity.", impact: "product" },
      { title: "Soona Expands to Video Commerce", date: "2025-09-20", summary: "Platform now supports TikTok Shop and Instagram Reels content creation, addressing fastest-growing e-commerce format.", impact: "major" }
    ],
    analysis: {
      opportunity_score: 7.8,
      growth_trajectory: "Soona has established strong position in DTC content creation but faces headwinds from AI image generation. Pivot to video and AI-augmented workflow is promising. Growth has slowed but unit economics improving.",
      health_assessment: "Healthy but watchful — strong brand, loyal customer base, but must navigate AI disruption carefully. Runway solid with path to profitability visible."
    },
    growth_opportunities: [
      { title: "Video Commerce Expansion", impact: "high", identified_date: "2025-09-20", description: "TikTok Shop and video-first commerce creates massive content demand that AI can't fully address." },
      { title: "AI-Augmented Workflow", impact: "high", identified_date: "2025-12-05", description: "Using AI to enhance rather than replace photographers maintains quality while improving margins." }
    ],
    strategic_opportunities: [
      { title: "Shopify Integration", description: "Deep integration with Shopify could drive significant new customer acquisition.", impact: "medium", timeline: "Q2 2026" }
    ],
    threats: [
      { title: "AI Image Generation", description: "Tools like Midjourney and DALL-E 3 could reduce demand for product photography.", severity: "high", category: "technology" },
      { title: "E-commerce Slowdown", description: "Reduced e-commerce growth could slow content demand.", severity: "medium", category: "market" }
    ],
    ai_insights: {
      summary: "Soona is navigating the AI disruption in visual content well by positioning as AI-augmented rather than AI-replaced. The pivot to video commerce is smart given AI limitations in video. The company has strong brand loyalty among DTC brands.",
      key_metrics: "5,000+ brand customers, $20M+ ARR, 85% gross retention",
      recommendation: "Support video expansion and AI integration. Monitor AI image generation developments closely. Evaluate strategic options if AI headwinds intensify."
    },
    financials: {
      mrr: 1700000,
      arr: 20400000,
      burn_rate: 1500000,
      runway: "18+ months"
    },
    intelligence_last_updated: "2026-01-28",
    news_last_updated: "2026-01-28"
  },
  {
    id: "pc-4",
    name: "Nomic Bio",
    website: "https://www.nomicbio.com",
    description: "Nomic Bio develops next-generation proteomics technology that enables researchers to analyze thousands of proteins simultaneously from small biological samples, accelerating drug discovery and diagnostics development.",
    funding: {
      history: [
        { round: "Pre-Seed", amount: "$1M", date: "2019-08", investors: ["2048 Ventures", "SOSV"] },
        { round: "Seed", amount: "$4M", date: "2020-11", investors: ["2048 Ventures", "Khosla Ventures"] },
        { round: "Series A", amount: "$18M", date: "2022-04", investors: ["Khosla Ventures", "DCVC"] },
        { round: "Series B", amount: "$42M", date: "2024-09", investors: ["Leaps by Bayer", "DCVC", "Khosla Ventures"] }
      ],
      total: "$65M",
      last_round: { amount: "$42M", date: "2024-09-17" },
      valuation: "$250M+"
    },
    market: {
      size: "$10B by 2030",
      growth: "14.8% CAGR",
      trends: [
        "Multi-omics approaches requiring high-throughput proteomics",
        "Precision medicine driving demand for protein biomarker discovery",
        "Single-cell proteomics becoming critical for understanding disease"
      ],
      challenges: [
        "Competition from established proteomics players like Olink and SomaLogic",
        "Long sales cycles in pharma and academic markets"
      ],
      context: "Proteomics — the study of proteins — is the next frontier in understanding biology after genomics. Nomic Bio's technology enables massively parallel protein analysis, critical for drug discovery and precision medicine."
    },
    competitors: [{ name: "Olink" }, { name: "SomaLogic" }, { name: "Luminex" }, { name: "Standard BioTools" }],
    competitor_details: [
      {
        name: "Olink",
        description: "Market leader in targeted proteomics with proximity extension assay technology",
        positioning: "Strong pharma relationships; acquired by Thermo Fisher for $3.1B",
        recent_moves: "Thermo Fisher acquisition completed 2024; expanded panel offerings"
      },
      {
        name: "SomaLogic",
        description: "Proteomics platform using aptamer-based technology for protein detection",
        positioning: "Large protein menu (7,000+); strong in research and clinical markets",
        recent_moves: "Merged with Standard BioTools; expanding clinical diagnostics"
      }
    ],
    competitive_positioning: {
      unique_value_prop: "Nomic Bio's proprietary technology enables analysis of 10x more proteins from 100x smaller samples than competitors, opening new applications in single-cell analysis and rare sample types.",
      advantages: [
        "Superior sample efficiency — works with tiny biological samples",
        "Broader protein coverage than Olink's targeted panels",
        "Lower cost per sample enables larger studies",
        "Strong IP portfolio protects technology advantage"
      ]
    },
    news: [
      { title: "Nomic Bio Launches Single-Cell Proteomics Platform", date: "2025-11-10", summary: "First commercial platform for single-cell protein analysis enables unprecedented resolution in understanding cellular heterogeneity in tumors.", impact: "major" },
      { title: "Partnership with Top 5 Pharma Company", date: "2025-10-05", summary: "Multi-year collaboration with major pharmaceutical company for biomarker discovery in oncology pipeline.", impact: "market" },
      { title: "FDA Breakthrough Device Designation", date: "2025-08-20", summary: "Nomic's diagnostic platform received FDA Breakthrough Device designation for early cancer detection application.", impact: "major" }
    ],
    analysis: {
      opportunity_score: 9.0,
      growth_trajectory: "Nomic Bio is emerging as a category leader in next-gen proteomics. The single-cell platform launch and FDA designation position it for significant growth. Strong pharma partnerships validate technology and provide revenue visibility.",
      health_assessment: "Very healthy — strong technology moat, blue-chip pharma customers, and substantial Series B runway. Well-positioned for Series C or strategic acquisition."
    },
    growth_opportunities: [
      { title: "Single-Cell Proteomics Leadership", impact: "high", identified_date: "2025-11-10", description: "First-mover in single-cell proteomics addresses massive unmet need in understanding tumor heterogeneity." },
      { title: "Clinical Diagnostics Entry", impact: "high", identified_date: "2025-08-20", description: "FDA Breakthrough Device designation opens path to clinical diagnostics market." },
      { title: "Pharma Partnerships Expansion", impact: "medium", identified_date: "2025-10-05", description: "Success with first top 5 pharma opens doors to other large pharma collaborations." }
    ],
    strategic_opportunities: [
      { title: "Diagnostics Spinout", description: "Clinical diagnostics business could be spun out or partnered for accelerated path to market.", impact: "high", timeline: "2027" },
      { title: "Strategic Acquisition", description: "Strong fit for Illumina, Thermo Fisher, or other life science tools companies.", impact: "high", timeline: "2026-2027" }
    ],
    threats: [
      { title: "Thermo Fisher (Olink) Competition", description: "Olink's acquisition by Thermo Fisher brings massive distribution and resources to compete.", severity: "high", category: "competitive" },
      { title: "Technology Commoditization", description: "As proteomics technology matures, differentiation could narrow.", severity: "medium", category: "technology" }
    ],
    ai_insights: {
      summary: "Nomic Bio represents 2048's deep tech thesis — a platform technology company with genuine IP-protected advantages. The company is well-positioned in the rapidly growing proteomics space with differentiated single-cell capabilities. Strong pharma validation and FDA designation suggest multiple exit paths.",
      key_metrics: "20+ pharma/biotech customers, $8M+ ARR, 3 platform products, FDA Breakthrough Device designation",
      recommendation: "Support commercial scale-up and clinical pathway. This has potential for 10x+ return via strategic acquisition or IPO. Maintain close relationship with management on strategic options."
    },
    financials: {
      mrr: 700000,
      arr: 8400000,
      burn_rate: 2500000,
      runway: "24+ months"
    },
    intelligence_last_updated: "2026-01-28",
    news_last_updated: "2026-01-28"
  },
  {
    id: "pc-5",
    name: "Airspace Link",
    website: "https://www.airspacelink.com",
    description: "Airspace Link provides the infrastructure and workflow software for flying drones beyond visual line of sight (BVLOS), enabling commercial drone operations at scale with safety compliance and airspace management.",
    funding: {
      history: [
        { round: "Pre-Seed", amount: "$600K", date: "2019-03", investors: ["2048 Ventures", "Techstars"] },
        { round: "Seed", amount: "$4M", date: "2020-06", investors: ["2048 Ventures", "Avanta Ventures"] },
        { round: "Series A", amount: "$10M", date: "2021-04", investors: ["Avanta Ventures", "2048 Ventures"] },
        { round: "Series B", amount: "$23M", date: "2022-06", investors: ["Avanta Ventures", "Hanwha Aerospace"] }
      ],
      total: "$37M",
      last_round: { amount: "$23M", date: "2022-06-22" },
      valuation: "$100M+"
    },
    market: {
      size: "$60B by 2030",
      growth: "25.4% CAGR",
      trends: [
        "FAA BVLOS rules opening commercial drone operations",
        "Drone delivery becoming viable for logistics and retail",
        "Urban air mobility and eVTOL creating airspace management demand"
      ],
      challenges: [
        "Regulatory pace slower than technology development",
        "Competition from Wing (Alphabet) and Amazon for delivery airspace"
      ],
      context: "Commercial drone operations are bottlenecked by airspace management and BVLOS regulations. Airspace Link provides the critical infrastructure layer enabling drones to fly safely at scale."
    },
    competitors: [{ name: "Wing Aviation" }, { name: "AirMap" }, { name: "Kittyhawk" }, { name: "OneSky" }],
    competitor_details: [
      {
        name: "Wing Aviation (Alphabet)",
        description: "Alphabet's drone delivery subsidiary with integrated delivery and airspace management",
        positioning: "Vertically integrated; focuses on its own delivery operations",
        recent_moves: "Expanded commercial delivery operations in US and Australia"
      },
      {
        name: "AirMap",
        description: "Drone airspace management platform for UAS traffic management",
        positioning: "Strong API developer community; broad UTM coverage",
        recent_moves: "Partnered with European aviation authorities for U-Space"
      }
    ],
    competitive_positioning: {
      unique_value_prop: "Airspace Link is the trusted partner of state and local governments for drone infrastructure, with the deepest regulatory relationships and most comprehensive airspace data in the industry.",
      advantages: [
        "Government partnerships provide regulatory moat",
        "Most complete airspace data for BVLOS flight planning",
        "Hardware-agnostic — works with any drone platform",
        "Strong relationships with FAA and state aviation authorities"
      ]
    },
    news: [
      { title: "FAA Approves First Commercial BVLOS Corridor", date: "2025-12-15", summary: "Airspace Link-managed corridor in Michigan becomes first FAA-approved commercial BVLOS route, enabling regular drone delivery operations.", impact: "major" },
      { title: "Partnership with UPS Flight Forward", date: "2025-09-30", summary: "UPS selects Airspace Link as airspace management partner for expanded drone delivery network.", impact: "market" },
      { title: "Expansion to 15 State Aviation Partners", date: "2025-07-20", summary: "Now providing airspace infrastructure to 15 state aviation authorities, up from 8 at start of year.", impact: "market" }
    ],
    analysis: {
      opportunity_score: 8.5,
      growth_trajectory: "Airspace Link is positioned at the center of the commercial drone infrastructure buildout. FAA BVLOS approvals are accelerating, and the company's regulatory relationships create a significant moat. Growth tied to regulatory timeline but inflection point approaching.",
      health_assessment: "Healthy — strong regulatory positioning, blue-chip customers, and reasonable runway. Market timing risk remains but BVLOS approvals accelerating."
    },
    growth_opportunities: [
      { title: "BVLOS Commercial Deployment", impact: "high", identified_date: "2025-12-15", description: "First approved corridors open floodgates for commercial drone operations." },
      { title: "Drone Delivery Infrastructure", impact: "high", identified_date: "2025-09-30", description: "Partnerships with UPS, Amazon, and others position for massive scale." },
      { title: "Urban Air Mobility", impact: "medium", identified_date: "2025-11-01", description: "eVTOL air taxi operations will require similar airspace management infrastructure." }
    ],
    strategic_opportunities: [
      { title: "Infrastructure Acquisition", description: "Could be acquired by a major logistics company or aerospace firm building drone infrastructure.", impact: "high", timeline: "2026-2027" }
    ],
    threats: [
      { title: "Wing/Amazon Vertical Integration", description: "Large players could build proprietary airspace management, reducing market opportunity.", severity: "medium", category: "competitive" },
      { title: "Regulatory Delays", description: "Slower-than-expected FAA BVLOS approvals could delay market growth.", severity: "medium", category: "regulatory" }
    ],
    ai_insights: {
      summary: "Airspace Link is a picks-and-shovels play on the commercial drone boom. As BVLOS regulations finally open, the company's government relationships and comprehensive airspace data create a durable moat. The UPS partnership validates the approach and provides growth visibility.",
      key_metrics: "15 state aviation partners, UPS and Fortune 100 customers, $5M+ ARR",
      recommendation: "Support commercial scale-up as BVLOS approvals accelerate. Monitor regulatory timeline closely. Strong acquisition candidate for logistics or aerospace companies."
    },
    financials: {
      mrr: 450000,
      arr: 5400000,
      burn_rate: 1200000,
      runway: "20+ months"
    },
    intelligence_last_updated: "2026-01-28",
    news_last_updated: "2026-01-28"
  },
  {
    id: "pc-6",
    name: "Impilo",
    website: "https://www.impilo.health/",
    description: "Impilo is the operational OS for at-home health, providing the logistics infrastructure for remote patient monitoring (RPM) including device fulfillment, patient onboarding, and data integration.",
    funding: {
      history: [
        { round: "Pre-Seed", amount: "$500K", date: "2020-09", investors: ["2048 Ventures", "Founder Collective"] },
        { round: "Seed", amount: "$3M", date: "2021-07", investors: ["2048 Ventures", "Lerer Hippeau"] },
        { round: "Series A", amount: "$11.5M", date: "2024-11", investors: ["Construct Capital", "Lerer Hippeau", "2048 Ventures"] }
      ],
      total: "$15M",
      last_round: { amount: "$11.5M", date: "2024-11-14" },
      valuation: "$60M+"
    },
    market: {
      size: "$117B by 2028",
      growth: "19.2% CAGR",
      trends: [
        "CMS reimbursement expansion for remote patient monitoring",
        "Hospital-at-home programs driving device logistics demand",
        "Chronic disease management shifting to home settings"
      ],
      challenges: [
        "Healthcare sales cycles are long and complex",
        "Reimbursement changes could affect customer demand"
      ],
      context: "Remote patient monitoring is exploding as healthcare shifts to the home. But logistics — getting devices to patients, onboarding them, and managing data — is a massive operational challenge. Impilo solves this."
    },
    competitors: [{ name: "Health Recover Solutions" }, { name: "Biofourmis" }, { name: "Current Health (Best Buy)" }],
    competitor_details: [
      {
        name: "Health Recovery Solutions",
        description: "RPM platform with device fulfillment and patient engagement",
        positioning: "Comprehensive RPM solution; direct competitor",
        recent_moves: "Expanded hospital-at-home capabilities; raised Series B"
      },
      {
        name: "Biofourmis",
        description: "AI-powered remote monitoring with clinical-grade wearables",
        positioning: "Focuses on AI analytics layer; uses own wearable devices",
        recent_moves: "Raised $300M; expanded into virtual care"
      }
    ],
    competitive_positioning: {
      unique_value_prop: "Impilo is device-agnostic and focuses purely on the operational infrastructure — logistics, onboarding, and data integration — making it the essential backend for any RPM program.",
      advantages: [
        "Device-agnostic approach works with any RPM hardware",
        "Purpose-built logistics for healthcare compliance",
        "API-first architecture integrates with existing EMR/EHR",
        "Lower cost than full-stack RPM platforms"
      ]
    },
    news: [
      { title: "Impilo Powers Hospital-at-Home Expansion at Major Health System", date: "2025-11-25", summary: "Leading health system selects Impilo to manage device logistics for 10,000+ hospital-at-home patients annually.", impact: "major" },
      { title: "Series A Closes at $11.5M", date: "2024-11-14", summary: "Construct Capital leads Series A to accelerate sales and expand device partnerships.", impact: "market" }
    ],
    analysis: {
      opportunity_score: 8.0,
      growth_trajectory: "Impilo is riding the massive tailwind of healthcare shifting to the home. The device-agnostic, infrastructure-focused approach is smart positioning. Series A provides runway to scale sales and expand health system partnerships.",
      health_assessment: "Healthy — strong market tailwinds, recent funding, and validated approach. Early stage but positioned well for growth."
    },
    growth_opportunities: [
      { title: "Hospital-at-Home Expansion", impact: "high", identified_date: "2025-11-25", description: "Hospital-at-home programs require exactly the logistics infrastructure Impilo provides." },
      { title: "Device Partnerships", impact: "medium", identified_date: "2025-10-01", description: "Partnerships with device manufacturers for preferred logistics provider status." }
    ],
    strategic_opportunities: [
      { title: "Healthcare Infrastructure Consolidation", description: "Could be acquired by EMR vendor or healthcare logistics company.", impact: "medium", timeline: "2027+" }
    ],
    threats: [
      { title: "Full-Stack RPM Competition", description: "Comprehensive RPM platforms might absorb logistics capabilities.", severity: "medium", category: "competitive" },
      { title: "Reimbursement Changes", description: "CMS reimbursement cuts could slow RPM adoption.", severity: "medium", category: "regulatory" }
    ],
    ai_insights: {
      summary: "Impilo is early but well-positioned in the at-home health infrastructure space. The device-agnostic approach is smart — they become essential plumbing for any RPM program rather than competing with the devices themselves. Strong market tailwinds with CMS reimbursement expansion.",
      key_metrics: "15+ health system customers, 50,000+ devices managed, $2M+ ARR",
      recommendation: "Support sales expansion and health system enterprise deals. Monitor for Series B in 2025-2026. Strong infrastructure play in high-growth market."
    },
    financials: {
      mrr: 180000,
      arr: 2160000,
      burn_rate: 600000,
      runway: "20+ months"
    },
    intelligence_last_updated: "2026-01-28",
    news_last_updated: "2026-01-28"
  },
  {
    id: "pc-7",
    name: "Laminar",
    website: "https://runlaminar.com/",
    description: "Laminar provides precision automation for industrials and data centers, using computer vision and robotics to automate inspection, monitoring, and maintenance tasks in complex facilities.",
    funding: {
      history: [
        { round: "Pre-Seed", amount: "$750K", date: "2020-11", investors: ["2048 Ventures", "Techstars"] },
        { round: "Seed", amount: "$4M", date: "2021-09", investors: ["2048 Ventures", "E14 Fund"] },
        { round: "Series A", amount: "$12M", date: "2025-07", investors: ["Greycroft", "E14 Fund", "2048 Ventures"] }
      ],
      total: "$17M",
      last_round: { amount: "$12M", date: "2025-07-16" },
      valuation: "$60M+"
    },
    market: {
      size: "$25B by 2030",
      growth: "22.1% CAGR",
      trends: [
        "Industrial automation accelerating due to labor shortages",
        "Data center growth driving facility management automation",
        "Computer vision costs dropping, enabling new applications"
      ],
      challenges: [
        "Long sales cycles in industrial markets",
        "Integration complexity with legacy systems"
      ],
      context: "Industrial facilities and data centers face massive labor shortages while needing to maintain complex infrastructure. Laminar's precision automation addresses this with computer vision-powered inspection and monitoring."
    },
    competitors: [{ name: "Gecko Robotics" }, { name: "Sarcos" }, { name: "Boston Dynamics (Spot)" }],
    competitor_details: [
      {
        name: "Gecko Robotics",
        description: "Industrial inspection robots for tanks, pipes, and infrastructure",
        positioning: "Focuses on asset inspection; raised $200M+ in funding",
        recent_moves: "Expanded into power and water infrastructure"
      }
    ],
    competitive_positioning: {
      unique_value_prop: "Laminar combines software-defined automation with existing infrastructure, delivering 10x faster deployment than traditional robotics at a fraction of the cost.",
      advantages: [
        "Software-first approach enables rapid customization",
        "Works with existing facility infrastructure",
        "Lower cost than full robotics solutions",
        "Strong Coca-Cola and Unilever customer validation"
      ]
    },
    news: [
      { title: "Laminar Raises $12M Series A", date: "2025-07-16", summary: "Greycroft leads Series A to expand deployment across Coca-Cola and Unilever facilities.", impact: "market" },
      { title: "Expansion into Data Center Monitoring", date: "2025-10-15", summary: "Laminar launches data center offering for automated thermal and infrastructure monitoring.", impact: "product" }
    ],
    analysis: {
      opportunity_score: 7.5,
      growth_trajectory: "Laminar is early but has impressive customer validation with Fortune 100 industrials. The expansion into data centers is well-timed given explosive growth in that segment. Series A provides runway to scale.",
      health_assessment: "Healthy — blue-chip customers, recent funding, and strong market positioning. Earlier stage but promising trajectory."
    },
    growth_opportunities: [
      { title: "Data Center Market Entry", impact: "high", identified_date: "2025-10-15", description: "Data centers represent massive, well-funded market for facility automation." },
      { title: "Fortune 500 Industrial Expansion", impact: "high", identified_date: "2025-07-16", description: "Success with Coca-Cola and Unilever opens doors to other major industrials." }
    ],
    strategic_opportunities: [
      { title: "Strategic Partnership", description: "Partnership with industrial automation giant (Siemens, ABB) could accelerate distribution.", impact: "medium", timeline: "2026" }
    ],
    threats: [
      { title: "Robotics Competition", description: "Well-funded robotics companies could enter this segment.", severity: "medium", category: "competitive" },
      { title: "Economic Sensitivity", description: "Industrial capex can be cut in downturns.", severity: "medium", category: "market" }
    ],
    ai_insights: {
      summary: "Laminar represents 2048's deep tech thesis applied to industrial automation. The company's software-first approach enables faster, cheaper deployment than traditional robotics. Fortune 100 customer validation de-risks the technology; now it's about scaling sales.",
      key_metrics: "Coca-Cola, Unilever customers, $3M+ ARR, 10+ facility deployments",
      recommendation: "Support sales expansion and data center go-to-market. Strong thesis play in industrial automation. Monitor for Series B in 2026."
    },
    financials: {
      mrr: 260000,
      arr: 3120000,
      burn_rate: 800000,
      runway: "18+ months"
    },
    intelligence_last_updated: "2026-01-28",
    news_last_updated: "2026-01-28"
  },
  {
    id: "pc-8",
    name: "Aerodome",
    website: "https://www.aerodome.com/",
    description: "Aerodome provides Drone-as-First-Responder (DFR) infrastructure for police departments, enabling rapid aerial response to 911 calls with autonomous drone systems and real-time video feeds.",
    funding: {
      history: [
        { round: "Pre-Seed", amount: "$500K", date: "2021-03", investors: ["2048 Ventures"] },
        { round: "Seed", amount: "$6M", date: "2022-02", investors: ["Andreessen Horowitz", "2048 Ventures"] },
        { round: "Series A", amount: "$16M", date: "2023-08", investors: ["Andreessen Horowitz", "Fontinalis Partners"] }
      ],
      total: "$22.5M",
      last_round: { amount: "Acquired", date: "2025-09-15" },
      valuation: "Acquired by Flock Safety"
    },
    market: {
      size: "$15B by 2030",
      growth: "28.3% CAGR",
      trends: [
        "Police departments seeking force multipliers amid staffing shortages",
        "911 response times under pressure — drones provide faster initial response",
        "Public safety drone technology maturing rapidly"
      ],
      challenges: [
        "Public perception and privacy concerns around police drones",
        "Regulatory complexity for urban drone operations"
      ],
      context: "Police departments nationwide face staffing shortages while 911 call volumes increase. Drones can reach incidents in under 2 minutes vs. 7+ minutes for patrol cars, providing critical situational awareness."
    },
    competitors: [{ name: "Skydio" }, { name: "DroneUp" }, { name: "BRINC" }],
    competitor_details: [
      {
        name: "Skydio",
        description: "Autonomous drone maker with strong public safety presence",
        positioning: "Hardware-focused with AI autonomy; supplies many police drones",
        recent_moves: "Launched Skydio X10; expanded DFR offerings"
      }
    ],
    competitive_positioning: {
      unique_value_prop: "Aerodome provided end-to-end DFR infrastructure including hardware, software, and 24/7 operations — the only turnkey DFR solution for police departments.",
      advantages: [
        "Turnkey solution vs. point products",
        "Proven sub-2-minute response times",
        "Strong regulatory relationships for urban operations",
        "24/7 remote pilot operations included"
      ]
    },
    news: [
      { title: "Flock Safety Acquires Aerodome", date: "2025-09-15", summary: "Flock Safety, the license plate recognition company, acquires Aerodome to expand its public safety platform with aerial capabilities.", impact: "exit" },
      { title: "Aerodome Deploys in 25 Police Departments", date: "2025-06-01", summary: "DFR deployments reach 25 departments, with demonstrated 60% reduction in response times for covered areas.", impact: "major" }
    ],
    analysis: {
      opportunity_score: "N/A - Exited",
      growth_trajectory: "Aerodome demonstrated strong product-market fit in DFR before being acquired by Flock Safety. The acquisition validates the thesis on public safety infrastructure.",
      health_assessment: "Exited — successful acquisition by Flock Safety provides return to LPs. Strong validation of the DFR category."
    },
    growth_opportunities: [],
    strategic_opportunities: [],
    threats: [],
    ai_insights: {
      summary: "Aerodome is a successful 2048 exit — acquired by Flock Safety in 2025. The company proved out the Drone-as-First-Responder category and demonstrated that turnkey public safety infrastructure is highly valuable. This validates 2048's thesis on critical infrastructure investments.",
      key_metrics: "25+ police department deployments, sub-2-minute response times, acquired by Flock Safety",
      recommendation: "Exit complete. Track Flock Safety performance for potential secondary gains if tied to acquisition terms. Strong proof point for public safety infrastructure thesis."
    },
    financials: {
      mrr: null,
      arr: null,
      burn_rate: null,
      runway: "Exited"
    },
    intelligence_last_updated: "2026-01-28",
    news_last_updated: "2026-01-28"
  }
];
