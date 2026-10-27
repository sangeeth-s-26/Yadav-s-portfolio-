export const portfolioData = {
  personalInfo: {
    name: "Yadav Babu MK",
    brandName: "YADAV BABU",
    title: "Civil Engineering | Interior & Exterior Designing",
    tagline: "Passionate Civil Engineer specializing in Building Information Modeling (BIM), architectural visualization, precision CAD drafting, and functional 3D interior/exterior design.",
    email: "yadavbabu3480@gmail.com",
    phone: "8590698689",
    phoneDisplay: "+91 8590698689",
    location: "Koyilandy, Kozhikode, Kerala",
    profileImage: "/images/profile/yadav_babu.jpg",
    heroImage: "/images/profile/hero_architecture.jpg",
    resumePdf: "/Yadav_Portfolio.pdf",
    shortBio: "I am a passionate Civil Engineer with a strong interest in Building Information Modeling (BIM) and architectural visualization. Skilled in creating precise CAD drawings and realistic 3D models using Revit, AutoCAD, and 3ds Max, along with high-quality rendering using V-Ray, I focus on delivering accurate, functional, and visually compelling design solutions."
  },

  about: {
    heading: "Civil Engineer & Architectural Designer",
    biography: "I am a passionate Civil Engineer with a strong interest in Building Information Modeling (BIM) and architectural visualization. Skilled in creating precise CAD drawings and realistic 3D models using Revit, AutoCAD, and 3ds Max, along with high-quality rendering using V-Ray, I focus on delivering accurate, functional, and visually compelling design solutions. My strengths include BIM modeling, technical drafting, and producing detailed visual presentations that effectively communicate design concepts. I am eager to begin my professional career in a dynamic environment where I can apply my technical expertise, creativity, and commitment to contributing to real-world civil engineering and BIM projects.",
    coreStrengths: [
      {
        title: "Building Information Modeling (BIM)",
        desc: "Integrated parametric building modeling with Autodesk Revit for coordinated architectural and structural planning."
      },
      {
        title: "Precision Technical Drafting",
        desc: "Creation of municipal sanction drawings adhering strictly to Kerala Panchayat Building Rules (KPBR 2019), structural gridlines, centerlines, and setouts."
      },
      {
        title: "Architectural 3D Visualization",
        desc: "Photorealistic exterior and interior renderings using 3ds Max, Lumion, and V-Ray with accurate materials, lighting, and environmental assets."
      },
      {
        title: "Interior & Exterior Space Planning",
        desc: "Comprehensive space planning balancing functional civil engineering principles with aesthetic architectural design."
      }
    ],
    quickFacts: [
      { label: "Specialization", value: "Civil Engineering & Design" },
      { label: "Key Software", value: "AutoCAD, Revit, 3ds Max, V-Ray, Lumion" },
      { label: "Education", value: "Diploma in Civil & Diploma in Design" },
      { label: "Location", value: "Kozhikode, Kerala, India" }
    ]
  },

  education: [
    {
      degree: "Diploma in Interior and Exterior Designing",
      institution: "Planners Group, Calicut",
      duration: "2025 – 2026",
      status: "Advanced Professional Diploma",
      description: "Advanced training in architectural floor plan drafting, 3D exterior building visualization, bespoke interior design, V-Ray material shaders, and Lumion landscape rendering.",
      subjects: [
        "Architectural Working Drawings",
        "Photorealistic 3D Exterior Elevations",
        "Interior Space Planning & Ergonomics",
        "V-Ray & Lumion Architectural Rendering"
      ]
    },
    {
      degree: "Diploma in Civil Engineering",
      institution: "M DIT Polytechnic College",
      duration: "2022 – 2025",
      status: "State Board of Technical Education",
      description: "Comprehensive foundation in civil engineering principles, structural drafting, surveying, estimation & costing, building construction technology, and municipal building bye-laws (KPBR 2019).",
      subjects: [
        "Building Technology & Construction Management",
        "Surveying & Setting-Out on Site",
        "AutoCAD 2D/3D Drafting & Municipal Approvals",
        "Structural Analysis & Materials Testing"
      ]
    },
    {
      degree: "Vocational Higher Secondary (Science)",
      institution: "GVHSS Koyilandy",
      duration: "2020 – 2022",
      status: "Higher Secondary Board",
      description: "Vocational higher secondary education with core focus on physics, chemistry, mathematics, and technical vocational foundation.",
      subjects: [
        "Engineering Physics & Chemistry",
        "Technical Mathematics",
        "Vocational Skill Foundations"
      ]
    }
  ],

  skills: [
    {
      name: "AutoCAD",
      category: "2D Drafting & Detailing",
      icon: "/images/skills/autocad.jpeg",
      isImg: true,
      description: "Comprehensive architectural plans, sanction drawings, centerline layouts, foundation setouts, section cuts, and electrical schematics."
    },
    {
      name: "3ds Max",
      category: "3D Modeling",
      icon: "/images/skills/3dsmax.jpeg",
      isImg: true,
      description: "Precision polygonal 3D modeling for residential houses, commercial buildings, religious complexes, and complex architectural details."
    },
    {
      name: "BIM Architecture",
      category: "BIM Coordination",
      icon: "bi-building-gear",
      isImg: false,
      description: "Integrated Building Information Modeling ensuring parametric geometry, multidisciplinary coordination, and data-rich construction documents."
    },
    {
      name: "Revit",
      category: "Parametric BIM",
      icon: "/images/skills/revit.png",
      isImg: true,
      description: "Parametric floor plans, automated building sections, elevations, schedule generation, and structural component modeling."
    },
    {
      name: "Lumion",
      category: "Architectural Visualization",
      icon: "/images/skills/lumion.png",
      isImg: true,
      description: "Real-time atmospheric rendering, high-definition architectural animations, environment landscaping, and lighting simulation."
    },
    {
      name: "V-Ray",
      category: "Photorealistic Rendering",
      icon: "/images/skills/vray.jpeg",
      isImg: true,
      description: "Physically-based global illumination, photorealistic ray-tracing, custom PBR material textures, and camera depth-of-field effects."
    }
  ],

  projectCategories: [
    "All",
    "Architectural Drawings",
    "Residential",
    "Commercial",
    "Religious",
    "Exterior",
    "Interior"
  ],

  projects: [
    // A. Architectural Drawings
    {
      id: "sanction-drawing",
      title: "Municipal Sanction Drawing",
      category: "Architectural Drawings",
      image: "/images/architectural/sanction_drawing_irinjalakuda.png",
      subtitle: "Residential Building at Irinjalakuda Panchayath (KPBR 2019)",
      description: "Statutory building permit drawing compliant with Kerala Panchayat Building Rules, 2019. Includes Ground Floor Plan, First Floor Plan, Front Elevation, Section A-A, Site Plan with setbacks, Service Plan, Septic Tank & Soak Pit engineering cross-sections, and 3,500-liter Rainwater Harvesting Tank details.",
      specifications: [
        { label: "Location", value: "Irinjalakuda, Thrissur District" },
        { label: "Plot Area", value: "6.07 Are (607 Sq.M)" },
        { label: "Built-up Area", value: "201.63 Sq.M (GF: 126.76 | FF: 74.87)" },
        { label: "F.S.I / Coverage", value: "F.S.I: 0.31 | Coverage: 20.88%" },
        { label: "Building Height", value: "8.03 M" },
        { label: "Statutory Code", value: "Kerala Panchayat Building Rules (KPBR 2019) Appendix J1 & J2" }
      ]
    },
    {
      id: "cad-floor-plans",
      title: "Architectural Floor Plans",
      category: "Architectural Drawings",
      image: "/images/architectural/cad_floor_plans.png",
      subtitle: "G+1 Working Blueprint — Plinth Area: 124.32 Sq.M (1,338 Sq.Ft)",
      description: "Detailed two-level architectural plan prepared at Planners Group. Highlights clear room dimensioning, sit out, living hall (343x393), dining hall (393x393), inner open-to-sky courtyard (268x229), modular kitchen, work area, patio, multiple en-suite bedrooms, study room, and open terraces.",
      specifications: [
        { label: "Plinth Area", value: "124.32 Sq.M (1,338.30 Sq.Ft)" },
        { label: "Drawing Scale", value: "1:100 (Dimensions in Centimeters)" },
        { label: "Floors", value: "Ground Floor & First Floor Layout" },
        { label: "Features", value: "Courtyard, Patio, Study, Balconies & Work Area" }
      ]
    },
    {
      id: "four-side-elevations",
      title: "4-Side Architectural Elevations",
      category: "Architectural Drawings",
      image: "/images/architectural/four_side_elevations.png",
      subtitle: "North, South, East, and West Facade Drawings",
      description: "Comprehensive 4-side orthogonal elevations depicting architectural exterior aesthetics, parapet wall details, RCC sunshades, window openings, and sloping roof profiles from all cardinal orientations.",
      specifications: [
        { label: "Drawing Scale", value: "1:100 (Metric CM)" },
        { label: "Scope", value: "Front (South), Back (North), East & West Elevations" },
        { label: "Application", value: "Exterior Form Planning & Vertical Detailing" }
      ]
    },
    {
      id: "building-sections",
      title: "Structural Building Sections",
      category: "Architectural Drawings",
      image: "/images/architectural/building_sections.png",
      subtitle: "Section A-A: Foundation, Lintel, Slabs & Roof Detailing",
      description: "Detailed transverse section through living room, dining, bedrooms, and toilets. Illustrates Random Rubble (R.R) Masonry for basement & foundation, Ground Level (GL), plinth levels, brick masonry walls, RCC lintels with sunshades, RCC flat slabs, and sloping roof trusses.",
      specifications: [
        { label: "Drawing Scale", value: "1:100 (CM)" },
        { label: "Foundation", value: "R.R Masonry for Basement & Foundation" },
        { label: "Superstructure", value: "Brick Masonry & R.C.C Flat/Sloping Slabs" },
        { label: "Clear Heights", value: "Standard 210cm Lintel & 300cm Floor-to-Ceiling" }
      ]
    },
    {
      id: "grid-drawing",
      title: "Structural Grid Line Drawing",
      category: "Architectural Drawings",
      image: "/images/architectural/grid_line_drawing.png",
      subtitle: "Ground Floor & First Floor Axis Alignment",
      description: "Primary coordinate grid system displaying longitudinal axes (A through G) and transverse axes (1 through 7) for accurate structural column positioning and beam load alignment.",
      specifications: [
        { label: "Drawing Scale", value: "1:100" },
        { label: "Coordinate Axes", value: "Axes A, B, C, D, E, F, G × 1, 2, 3, 4, 5, 6, 7" },
        { label: "Purpose", value: "Structural column center coordination" }
      ]
    },
    {
      id: "centerline-drawing",
      title: "Centerline Working Drawing",
      category: "Architectural Drawings",
      image: "/images/architectural/centerline_drawing.png",
      subtitle: "Centerline Drawing — Sheet 1 (Planners Group)",
      description: "Technical centerline layout showing wall thicknesses and center-to-center distances across all primary structural walls, serving as the benchmark guide during site excavation and footing layout.",
      specifications: [
        { label: "Drawing Scale", value: "1:100" },
        { label: "Plinth Area", value: "124.32 Sq.M" },
        { label: "Dimensions", value: "Exact Wall Centerline Offsets in CM" }
      ]
    },
    {
      id: "setout-drawing",
      title: "Foundation & Column Setout Drawing",
      category: "Architectural Drawings",
      image: "/images/architectural/setout_drawing.png",
      subtitle: "Ground Floor Setting-Out Plan",
      description: "Precision setout drawing showing boundary offsets and cumulative linear measurements for setting profile pegs and trench lines accurately on-site before earthwork excavation.",
      specifications: [
        { label: "Drawing Scale", value: "1:100" },
        { label: "Application", value: "On-Site Setting Out & Peg Marking" },
        { label: "Plinth Area", value: "124.32 Sq.M" }
      ]
    },
    {
      id: "electrical-drawing",
      title: "Electrical Services Layout & Legend",
      category: "Architectural Drawings",
      image: "/images/architectural/electrical_layout_drawing.png",
      subtitle: "Ground & First Floor Lighting, Power & Conduit Plan",
      description: "Comprehensive MEP electrical drawing showing circuit distribution boards, 6A/16A socket outlets, fluorescent tube lights, decorative chandeliers, wall lamps, foot lamps, bell switches, exhaust fan points, AC AH units, water heater circuits, and fan regulators with complete architectural legend.",
      specifications: [
        { label: "Drawing Scale", value: "1:100" },
        { label: "Legend Items", value: "24 Distinct Electrical Symbols & Conduit Runs" },
        { label: "Coverage", value: "Ground Floor & First Floor Electrification" }
      ]
    },
    {
      id: "terrace-landscape-plan",
      title: "Terrace Floor Plan & Landscape Site Layout",
      category: "Architectural Drawings",
      image: "/images/architectural/terrace_landscape_site_plan.png",
      subtitle: "Site Plan with 300 CM Wide Access Road",
      description: "Integrated site plan illustrating plot setbacks, landscaped garden perimeters, main entry gate, 300 cm wide access road, and terrace drainage slope orientation.",
      specifications: [
        { label: "Drawing Scale", value: "1:100" },
        { label: "Site Access", value: "300 cm Wide Access Road" },
        { label: "Features", value: "Terrace Slopes, Landscape Zones & Entry Walkway" }
      ]
    },

    // B. Residential Architecture
    {
      id: "traditional-house",
      title: "Traditional House Architectural Design",
      category: "Residential",
      image: "/images/residential/traditional_house_cad_plan.png",
      renderImage: "/images/exterior/traditional_house_exterior.jpg",
      subtitle: "Vernacular Kerala Heritage Architecture",
      description: "Detailed AutoCAD floor plan and corresponding photorealistic 3D exterior render. Incorporates traditional sloping tiled roofs, carved wooden pillars (charupadi), central courtyard (nadumuttam), shaded sit-out, and climatically responsive tropical cross-ventilation.",
      specifications: [
        { label: "Style", value: "Traditional Kerala Architecture" },
        { label: "Key Spaces", value: "Verandah, Living, Dining, Kitchen, Courtyard & Multiple Bedrooms" },
        { label: "Outputs", value: "AutoCAD 2D Plan + 3D Exterior Render" }
      ]
    },
    {
      id: "contemporary-house",
      title: "Contemporary House Architectural Design",
      category: "Residential",
      image: "/images/residential/contemporary_house_cad_plan.png",
      renderImage: "/images/exterior/contemporary_house_exterior.jpg",
      subtitle: "Modern Minimalist Two-Storey Residence",
      description: "Contemporary two-story residential plan featuring an open-concept living and dining layout, private master suites, spacious balconies, clean rectilinear forms, expansive glass fenestrations, and cantilevered sunshades.",
      specifications: [
        { label: "Style", value: "Contemporary Minimalist" },
        { label: "Layout", value: "Sit-Out, Open Living, Family Lounge, Dining, Kitchen & Balconies" },
        { label: "Outputs", value: "Detailed AutoCAD Working Drawing + 3D Render" }
      ]
    },
    {
      id: "colonial-house",
      title: "Colonial House Architectural Design",
      category: "Residential",
      image: "/images/residential/colonial_house_cad_plan.png",
      renderImage: "/images/exterior/colonial_house_exterior.jpg",
      subtitle: "Colonial Manor with Symmetrical Façade",
      description: "Stately residence design featuring classical proportions, grand entry colonnades, symmetrical fenestration with shutters, high ceilings, spacious living and dining halls, and multi-level balcony views.",
      specifications: [
        { label: "Style", value: "Colonial Architectural Heritage" },
        { label: "Drawings Included", value: "Ground Floor, First Floor, Elevation & Structural Section" },
        { label: "Outputs", value: "CAD Plans, Elevations, Section + 3D Exterior Render" }
      ]
    },

    // C. Commercial Architecture
    {
      id: "commercial-building",
      title: "Multi-Storey Commercial Building",
      category: "Commercial",
      image: "/images/commercial/commercial_building_cad_plan.png",
      renderImage: "/images/commercial/commercial_building_render.jpg",
      subtitle: "Commercial Plaza with Hypermarket & Retail Outlets",
      description: "Comprehensive multi-level commercial complex drawing featuring ground and upper level retail shop units, hypermarket zone, dual passenger elevator cores, escalators, public washroom clusters, and wide pedestrian corridors paired with modern glazed 3D exterior render.",
      specifications: [
        { label: "Scale", value: "1:100 (Dimensions in CM)" },
        { label: "Circulation", value: "Dual Elevators, Escalators & Wide Corridors" },
        { label: "Commercial Units", value: "Over 20 Dedicated Retail Outlets + Anchor Hypermarket" },
        { label: "Deliverables", value: "Multi-Floor AutoCAD Plans, Elevation & 3D Exterior Render" }
      ]
    },

    // D. Religious Architecture
    {
      id: "mosque-design",
      title: "Avant-Garde Mosque Architecture",
      category: "Religious",
      image: "/images/religious/mosque_design_drawing.png",
      subtitle: "Spiritual Landmark with Arches & Cylindrical Minarets",
      description: "The mosque design features a striking avant-garde facade with soaring, pointed arches and intricate calligraphic latticework, complemented by unique cylindrical minarets. Its bold, expressive geometry and expansive floor plan blend modern artistic flair with traditional spiritual purpose, creating a landmark that is both visually captivating and functionally grand.",
      specifications: [
        { label: "Scale", value: "1:100 (Dimensions in CM)" },
        { label: "Key Elements", value: "Mihrab, Main Namaz Hall, Entrance Portico & Ablution/Washing Area" },
        { label: "Façade Detailing", value: "Pointed Arches, Cylindrical Minarets & Calligraphic Latticework" },
        { label: "Drawings", value: "Floor Plan & Front Elevation" }
      ]
    },
    {
      id: "temple-design",
      title: "Traditional Kerala Temple Design",
      category: "Religious",
      image: "/images/religious/temple_design_drawing.png",
      subtitle: "Heritage Vastu-Compliant Sacred Architecture",
      description: "This temple design reflects traditional Kerala architectural heritage, featuring a distinctive multi-tiered sloping roof finished with clay tiles and decorative gables. The structure is characterized by its horizontal emphasis and timber-inspired detailing, which harmonize with the natural environment. The square floor plan and courtyard-centric layout are meticulously designed to facilitate ritualistic circumambulation, balancing ancient Vastu principles with a sense of peace and timelessness.",
      specifications: [
        { label: "Scale", value: "1:100" },
        { label: "Sacred Zones", value: "Srikovil (Sanctum Sanctorum) & Namaskara Mandapam" },
        { label: "Roofing", value: "Multi-Tiered Sloping Roof with Clay Tiles & Gables" },
        { label: "Drawings", value: "Ground Floor Plan, Elevation & Roof Framing Plan" }
      ]
    },
    {
      id: "church-design",
      title: "Ecclesiastical Church Architecture",
      category: "Religious",
      image: "/images/religious/church_design_drawing.png",
      subtitle: "Dynamic Ecclesiastical Structure with Soaring Spire",
      description: "This church design features a dynamic, multi-tiered roofline anchored by a central soaring spire and an ornamental crucifix. The integration of arched windows and a standalone bell tower provides a blend of classical and contemporary ecclesiastical styles. The use of a bold color palette and varied structural heights creates a vibrant and welcoming presence, while the organized floor plan ensures a spacious and solemn atmosphere for worship.",
      specifications: [
        { label: "Scale", value: "1:100 (CM)" },
        { label: "Ecclesiastical Zones", value: "Altar, Sacristy, Nave & Administrative Office" },
        { label: "Vertical Features", value: "Central Spire with Ornamental Crucifix & Bell Tower" },
        { label: "Drawings", value: "Detailed Plan & Orthogonal Elevation" }
      ]
    },

    // E. Exterior Design
    {
      id: "exterior-traditional",
      title: "Traditional Kerala House Exterior",
      category: "Exterior",
      image: "/images/exterior/traditional_house_exterior.jpg",
      subtitle: "3D Photorealistic Render — Vernacular Aesthetics",
      description: "High-resolution architectural exterior render illustrating pitched roofs clad with authentic terracotta tiles, carved timber posts, sheltered sit-out, ambient daylighting, and landscaped surrounding gardens.",
      specifications: [
        { label: "Modeling Software", value: "3ds Max / AutoCAD" },
        { label: "Rendering Engine", value: "V-Ray Photorealistic Shaders" },
        { label: "Focus", value: "Natural Wood Textures, Clay Tile Shading & Landscape Harmony" }
      ]
    },
    {
      id: "exterior-contemporary",
      title: "Contemporary Residence Exterior",
      category: "Exterior",
      image: "/images/exterior/contemporary_house_exterior.jpg",
      subtitle: "3D Photorealistic Render — Minimalist Architecture",
      description: "Modern exterior visualization showcasing geometric cubic volumes, smooth white plaster finishes, warm timber cladding accents, glass balcony railings, and subtle architectural facade illumination.",
      specifications: [
        { label: "Modeling Software", value: "3ds Max & Revit" },
        { label: "Rendering Engine", value: "V-Ray / Lumion" },
        { label: "Focus", value: "Geometric Volumetrics, Glass Reflections & Modern Materials" }
      ]
    },
    {
      id: "exterior-colonial",
      title: "Colonial Manor Exterior",
      category: "Exterior",
      image: "/images/exterior/colonial_house_exterior.jpg",
      subtitle: "3D Photorealistic Render — Classical Colonnade",
      description: "Refined 3D render highlighting classical white colonnades, symmetrical pediment arches, dark sloping roof framing, and landscaped carriage driveway.",
      specifications: [
        { label: "Modeling Software", value: "3ds Max" },
        { label: "Rendering Engine", value: "V-Ray High-Fidelity Ray-Tracing" },
        { label: "Focus", value: "Colonnade Symmetry & Classical Proportions" }
      ]
    },
    {
      id: "exterior-commercial",
      title: "Commercial Building Exterior",
      category: "Exterior",
      image: "/images/exterior/commercial_building_exterior.jpg",
      subtitle: "3D Photorealistic Render — Urban Commercial Complex",
      description: "Photorealistic render depicting modern multi-level commercial architecture with structural glass curtain walling, composite panel cladding, prominent entrance plazas, and dynamic urban scale.",
      specifications: [
        { label: "Modeling Software", value: "3ds Max / Revit" },
        { label: "Rendering Engine", value: "Lumion / V-Ray" },
        { label: "Focus", value: "Structural Glazing, Urban Scale & Pedestrian Entries" }
      ]
    },

    // F. Interior Design
    {
      id: "interior-bedroom",
      title: "Master Bedroom 3D Interior",
      category: "Interior",
      image: "/images/interior/bedroom_interior.jpg",
      subtitle: "Luxury Master Suite with Accent Headboard & Cove Lighting",
      description: "Photorealistic bedroom render featuring vertical fluted wall paneling, integrated warm LED cove lighting, floating nightstands, ambient pendant lamps, and modern luxury finishes.",
      specifications: [
        { label: "Room Type", value: "Master Bedroom Suite" },
        { label: "Software Used", value: "3ds Max & V-Ray" },
        { label: "Design Features", value: "Fluted Accent Wall, Warm Concealed LEDs & Plush Furnishings" }
      ]
    },
    {
      id: "interior-bathroom",
      title: "Luxury Bathroom 3D Interior",
      category: "Interior",
      image: "/images/interior/bathroom_interior.jpg",
      subtitle: "Modern Spa-Like Ensuite with Marble Wall Panels",
      description: "Spacious bathroom visualization highlighting large-format marble wall tiles with continuous veining, floating vanity counter, backlit circular mirror, frameless glass shower enclosure, and modern fixtures.",
      specifications: [
        { label: "Room Type", value: "Ensuite Master Bathroom" },
        { label: "Software Used", value: "3ds Max & V-Ray" },
        { label: "Design Features", value: "Marble Finishes, Backlit Mirror & Frameless Shower Partition" }
      ]
    },
    {
      id: "interior-living",
      title: "Modern Living Room 3D Interior",
      category: "Interior",
      image: "/images/interior/living_room_interior.jpg",
      subtitle: "Contemporary Open Living Lounge & Entertainment Wall",
      description: "High-fidelity interior render of a spacious family living lounge featuring bespoke television media wall, marble-faced wall console, plush sectional sofa, designer ceiling fan, and ample natural window lighting.",
      specifications: [
        { label: "Room Type", value: "Formal & Family Living Room" },
        { label: "Software Used", value: "3ds Max & V-Ray" },
        { label: "Design Features", value: "Media Console Wall, Cove Ceiling & Open Space Planning" }
      ]
    },
    {
      id: "interior-dining",
      title: "Contemporary Dining Room 3D Interior",
      category: "Interior",
      image: "/images/interior/dining_room_interior.jpg",
      subtitle: "Elegant Dining Space with Statement Pendant Lighting",
      description: "Photorealistic render of modern dining area displaying customized 6-seater dining table, ergonomic upholstered chairs, statement modern chandelier, textured wall feature, and seamless spatial flow to living and kitchen zones.",
      specifications: [
        { label: "Room Type", value: "Dining Hall" },
        { label: "Software Used", value: "3ds Max & V-Ray" },
        { label: "Design Features", value: "Designer Lighting, Ergonomic Seating & Refined Wall Finishes" }
      ]
    },
    {
      id: "interior-kitchen",
      title: "Modular Kitchen 3D Interior",
      category: "Interior",
      image: "/images/interior/kitchen_interior.jpg",
      subtitle: "Ergonomic Modular Kitchen with Island & Premium Cabinetry",
      description: "Modern modular kitchen render designed for maximum culinary efficiency. Incorporates durable quartz worktops, handleless acrylic cabinetry, under-cabinet task illumination, modern chimney hood, and seamless work triangle layout.",
      specifications: [
        { label: "Room Type", value: "Modern Modular Kitchen" },
        { label: "Software Used", value: "3ds Max & V-Ray" },
        { label: "Design Features", value: "Ergonomic Work Triangle, Seamless Cabinetry & Under-Cabinet Lighting" }
      ]
    }
  ],

  galleryImages: [
    {
      id: "gal-1",
      title: "Traditional House Exterior Render",
      category: "Exterior",
      image: "/images/exterior/traditional_house_exterior.jpg",
      caption: "Vernacular Kerala architecture with clay tile roofing and wooden verandahs"
    },
    {
      id: "gal-2",
      title: "Contemporary House Exterior Render",
      category: "Exterior",
      image: "/images/exterior/contemporary_house_exterior.jpg",
      caption: "Minimalist two-story residence with cantilevered balconies and architectural lighting"
    },
    {
      id: "gal-3",
      title: "Colonial House Exterior Render",
      category: "Exterior",
      image: "/images/exterior/colonial_house_exterior.jpg",
      caption: "Classical colonial residence with majestic pillars and symmetrical elevation"
    },
    {
      id: "gal-4",
      title: "Commercial Building 3D Façade",
      category: "Exterior",
      image: "/images/exterior/commercial_building_exterior.jpg",
      caption: "Modern glazed commercial building with multi-level retail frontage"
    },
    {
      id: "gal-5",
      title: "Master Bedroom Interior",
      category: "Interior",
      image: "/images/interior/bedroom_interior.jpg",
      caption: "Warm ambiance with fluted accent wall and integrated LED illumination"
    },
    {
      id: "gal-6",
      title: "Luxury Bathroom Interior",
      category: "Interior",
      image: "/images/interior/bathroom_interior.jpg",
      caption: "Marble-panelled walls, frameless glass shower enclosure and modern vanity"
    },
    {
      id: "gal-7",
      title: "Contemporary Living Room",
      category: "Interior",
      image: "/images/interior/living_room_interior.jpg",
      caption: "Spacious open living space with bespoke entertainment media wall"
    },
    {
      id: "gal-8",
      title: "Modern Dining Room",
      category: "Interior",
      image: "/images/interior/dining_room_interior.jpg",
      caption: "Sophisticated dining area with designer chandelier and acoustic wall paneling"
    },
    {
      id: "gal-9",
      title: "Modular Kitchen Interior",
      category: "Interior",
      image: "/images/interior/kitchen_interior.jpg",
      caption: "Ergonomic kitchen layout with premium quartz countertops and task lighting"
    },
    {
      id: "gal-10",
      title: "Sanction Drawing — Irinjalakuda",
      category: "Architectural Drawings",
      image: "/images/architectural/sanction_drawing_irinjalakuda.png",
      caption: "Municipal permit drawings adhering to Kerala Panchayat Building Rules (KPBR 2019)"
    },
    {
      id: "gal-11",
      title: "Architectural Floor Plans",
      category: "Architectural Drawings",
      image: "/images/architectural/cad_floor_plans.png",
      caption: "Ground and first floor CAD plans with courtyard, bedrooms, and service areas"
    },
    {
      id: "gal-12",
      title: "Four-Side Façade Elevations",
      category: "Architectural Drawings",
      image: "/images/architectural/four_side_elevations.png",
      caption: "Orthogonal elevations from North, South, East, and West cardinal views"
    },
    {
      id: "gal-13",
      title: "Structural Section Details",
      category: "Architectural Drawings",
      image: "/images/architectural/building_sections.png",
      caption: "Longitudinal section A-A showing R.R masonry foundation and slab heights"
    },
    {
      id: "gal-14",
      title: "Electrical Services Layout",
      category: "Architectural Drawings",
      image: "/images/architectural/electrical_layout_drawing.png",
      caption: "Complete lighting, conduit routing, socket positions and architectural MEP legend"
    },
    {
      id: "gal-15",
      title: "Avant-Garde Mosque Design",
      category: "Religious",
      image: "/images/religious/mosque_design_drawing.png",
      caption: "Pointed arches, cylindrical minarets and intricate calligraphic latticework"
    },
    {
      id: "gal-16",
      title: "Traditional Kerala Temple Design",
      category: "Religious",
      image: "/images/religious/temple_design_drawing.png",
      caption: "Multi-tiered sloping clay roof with Srikovil and Namaskara Mandapam"
    },
    {
      id: "gal-17",
      title: "Ecclesiastical Church Architecture",
      category: "Religious",
      image: "/images/religious/church_design_drawing.png",
      caption: "Multi-tiered roofline with central soaring spire, bell tower and altar layout"
    },
    {
      id: "gal-18",
      title: "Commercial Multi-Storey CAD Plan",
      category: "Commercial",
      image: "/images/commercial/commercial_building_cad_plan.png",
      caption: "Multi-level retail shop planning, hypermarket hall, elevator and escalator circulation"
    }
  ],

  whyChooseMe: [
    {
      id: "civil-knowledge",
      title: "Civil Engineering Knowledge",
      icon: "bi-building-check",
      description: "Diploma in Civil Engineering from M DIT Polytechnic College. Solid grounding in structural layout, building materials, construction methodology, and Kerala Panchayat Building Rules (KPBR 2019)."
    },
    {
      id: "drawing-skills",
      title: "Architectural Drawing Skills",
      icon: "bi-rulers",
      description: "Expertise in technical drafting for statutory sanction drawings, architectural floor plans, 4-side elevations, cross sections, structural gridlines, centerline drawings, setouts, and MEP electrical layouts."
    },
    {
      id: "interior-exterior",
      title: "Interior & Exterior Design",
      icon: "bi-palette",
      description: "Diploma in Interior and Exterior Designing from Planners Group, Calicut. Holistic approach linking structural integrity with striking exterior facades and functional, ergonomic interior spaces."
    },
    {
      id: "design-software",
      title: "Familiarity with Design Software",
      icon: "bi-laptop",
      description: "Hands-on proficiency with industry-leading CAD, BIM, and visualization packages: AutoCAD, Revit, 3ds Max, Lumion, and V-Ray for complete end-to-end project representation."
    },
    {
      id: "attention-detail",
      title: "Attention to Design Details",
      icon: "bi-compass",
      description: "Meticulous accuracy in dimensioning, joinery schedules, structural legends, site clearances, and technical drafting standards to ensure flawless translation from drawing to construction."
    }
  ],

  contact: {
    fullName: "Yadav Babu MK",
    email: "yadavbabu3480@gmail.com",
    phone: "8590698689",
    phoneDisplay: "+91 8590698689",
    location: "Koyilandy, Kozhikode, Kerala",
    subtext: "Available for junior civil engineering roles, architectural drafting, BIM modeling, and interior/exterior visualization projects."
  }
};
