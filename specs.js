/* ============================================================
   CK-12 DIAGRAM STYLE GUIDE — SPECS DATA FILE
   ============================================================
   This file contains ALL content for the style guide.
   Edit this file to:
     - Add / update spec values
     - Add / remove categories
     - Add image references
     - Update download links

   The index.html file (app engine) never needs to change
   unless you want a design update.

   HOW TO ADD AN IMAGE:
   Find the element, find its images:[] array, add an entry:
     { src: "images/math/lines/solid-line.png", caption: "Solid line example" }

   HOW TO ADD A CATEGORY:
   Copy an existing category block inside the right subject's
   categories:[] array. Change the id, label, and elements.

   HOW TO UPDATE A DOWNLOAD LINK:
   Find it in the RES object below and replace the url value.
   ============================================================ */

/* ── DOWNLOADS & RESOURCES ── */
const RES = {
  shared: [
    { label:"Graphic Style Library (.ai)", url:"https://drive.google.com/open?id=1VmF8CGY07QGTh0lMfwMVPqu0cYpcl_fh&usp=drive_fs", icon:"🎨" },
    { label:"Math & Science Symbol Sheet", url:"https://docs.google.com/spreadsheets/d/1ak97nLF4mzZe0QD2LtMQeDflA7jg1uqQ/edit?gid=14434770", icon:"📐" },
  ],
  fonts: [
    { label:"Latin Modern Roman", url:"https://www.gust.org.pl/projects/e-foundry/latin-modern/download", icon:"🔤" },
    { label:"Latin Modern Math", url:"https://www.gust.org.pl/projects/e-foundry/lm-math/download", icon:"∑" },
    { label:"CMU Serif Roman", url:"https://drive.google.com/open?id=1wM5EEnnxLuiuwTp-aik9oHhLZNIDapLj&usp=drive_fs", icon:"Σ" },
  ],
  biology: [
    { label:"Artwork Creation Guide", url:"https://docs.google.com/document/d/1Zd2j9117hieGSQTK3h3OicJoPJRUPu2ReIlF7ApoYFk/edit?tab=t.0", icon:"📄" },
  ],
  physics: [
    { label:"Circuit Symbol Library (.ai)", url:"https://drive.google.com/open?id=1bQQJJVUAFu2WFH4qrN1UFtPQUisBwd8y&usp=drive_fs", icon:"⚡" },
    { label:"Texture Library (.ai)", url:"https://drive.google.com/open?id=1iU_0KGthFyy8HjP1_Kefb40mXL2hyoQk&usp=drive_fs", icon:"🎨" },
    { label:"Optical Instruments (.ai)", url:"https://drive.google.com/open?id=1U3lhcPEHD4eOUQ6dBItvR40o1PETDtqN&usp=drive_fs", icon:"🔭" },
  ],
  chemistry: [
    { label:"Charges (.ai file)", url:"https://drive.google.com/open?id=1Tyeq4raCrkF3P73czzVtoRyAx2ngJpm0&usp=drive_fs", icon:"⚗" },
    { label:"Periodic Table (colors)", url:"https://drive.google.com/file/d/1ZoRgkow3tB25WzwhcrE6uHS11qoYgg-r/view?usp=drive_link", icon:"🔬" },
    { label:"Atomic Radius Sheet", url:"https://docs.google.com/spreadsheets/d/1vQTlV8xBBgzu4fv803PwACB1vCMWLclgEmOw7k0VeiY/edit#gid=0", icon:"📊" },
  ],
};

/* ── SPEC DATA ── */
const DATA = { subjects: [

/* ════════════════════════════════════════════
   MATHEMATICS
════════════════════════════════════════════ */
{
  id:"math", label:"Mathematics", badge:"math",
  icon:"∑", iconBg:"#e8f5ee", iconColor:"#008545",
  accentColor:"#008545",
  description:"Grade 6–10+ · Lines, points, graphs, construction",
  downloads:"shared",
  categories:[

    { id:"canvas", label:"Canvas & Padding", elements:[{
      id:"canvas-size", label:"Canvas Size", images:[],
      specs:[
        {label:"Standard", value:"320–350px"},
        {label:"Complex graphs", value:"400–450px"},
        {label:"Maximum", value:"500px"},
        {label:"Padding (max)", value:"10–15px"},
      ],
      banners:[
        {type:"note", text:"Number lines get more than 10px vertical padding to balance the image."},
        {type:"note", text:"Anything beyond 500px height is not advisable."},
      ]
    }]},

    { id:"lines", label:"Lines", elements:[
      { id:"solid-line", label:"Solid Line", gradeVaries:true, images:[],
        specs:[
          {label:"Size", value:"2px"},
          {label:"Color (Grade 8+)", value:"#999999", type:"color"},
          {label:"Color (Grade 6–7)", value:"#666666", type:"color"},
          {label:"Cap", value:"Round"},
          {label:"Corner", value:"Round"},
          {label:"Align Stroke", value:"Center"},
        ],
        banners:[
          {type:"info", text:"<strong>Grade 6–7:</strong> Use <code>#666666</code> — higher contrast for younger readers. Grade 8+ use <code>#999999</code>."},
        ]
      },
      { id:"dotted-line", label:"Dotted / Dash Line", gradeVaries:true, images:[],
        specs:[
          {label:"Size", value:"2px"},
          {label:"Color (Grade 8+)", value:"#bbbbbb", type:"color"},
          {label:"Color (Grade 6–7)", value:"#666666", type:"color"},
          {label:"Cap", value:"Round"},
          {label:"Corner", value:"Round"},
          {label:"Align Stroke", value:"Center"},
          {label:"Dash", value:"6pt"},
        ],
        banners:[
          {type:"info", text:"<strong>Grade 6–7:</strong> Use <code>#666666</code> for higher contrast."},
        ]
      }
    ]},

    { id:"points", label:"Points", elements:[{
      id:"points-size", label:"Points — Size by Grade", gradeVaries:true, images:[],
      gradeTable:{ columns:["Property","Grade 6–7","Grade 8–9","Grade 10+"], rows:[
        {label:"Diagram point", values:["10px","6px","4px"], highlight:true},
        {label:"Construction point", values:["6px","6px","4px"], highlight:true},
        {label:"Number line point", values:["10px","6px","4px"], highlight:true},
        {label:"Hollow point", values:["Fill #fff · Stroke 1px #000","Fill #fff · Stroke 1px #000","Fill #fff · Stroke 1px #000"]},
        {label:"Vector point (all grades)", values:["5px","5px","5px"]},
        {label:"Color (all solid)", values:["#000000","#000000","#000000"], type:"color"},
      ]},
      banners:[
        {type:"note", text:"Vector point is always 5px regardless of grade."},
        {type:"note", text:"Hollow point: white fill with 1px black stroke. One point type — not two separate elements."},
      ]
    }]},

    { id:"labelling", label:"Diagram Labelling", elements:[
      { id:"arrow-length-marker", label:"Arrow (Length Marker)", gradeVaries:true, images:[],
        specs:[
          {label:"Size", value:"2px"},
          {label:"Color (Grade 8+)", value:"#999999", type:"color"},
          {label:"Color (Grade 6–7)", value:"#666666", type:"color"},
          {label:"Cap", value:"Round"},
          {label:"Corner", value:"Round"},
          {label:"Align Stroke", value:"Center"},
        ],
        banners:[
          {type:"note", text:"In complex diagrams, reduce arrowhead to 40% (from standard 60%) in Illustrator."},
          {type:"note", text:"Arrow placed first, then label. 10px spacing between arrow and diagram line."},
        ]
      },
      { id:"vertex-label", label:"Vertex Label", images:[],
        specs:[
          {label:"Font", value:"Latin Modern Roman"},
          {label:"Size", value:"18px"},
          {label:"Color", value:"#666666", type:"color"},
          {label:"Style", value:"10 Bold Italic"},
          {label:"Alignment", value:"Center (paragraph panel)"},
        ]
      },
      { id:"measurement-label", label:"Measurement Label", gradeVaries:true, images:[],
        specs:[
          {label:"Font", value:"Latin Modern Roman"},
          {label:"Size", value:"18px"},
          {label:"Color (Grade 8+)", value:"#999999", type:"color"},
          {label:"Color (Grade 6–7)", value:"#333333", type:"color"},
          {label:"Numeral style", value:"10 Bold"},
          {label:"Unit style", value:"10 Bold Italic"},
        ],
        banners:[
          {type:"note", text:"Labels like 6cm, 28cm → Left aligned. Labels like 10cm, 36cm → Center aligned."},
        ]
      },
      { id:"math-symbol-label", label:"Math Symbol Label", images:[],
        specs:[
          {label:"Font", value:"Latin Modern Roman (Regular)"},
          {label:"Space for character", value:"100px"},
        ],
        banners:[
          {type:"info", text:"Copy-paste symbols from the Math & Science Symbol Sheet. Download button above."},
        ]
      }
    ]},

    { id:"angle-markers", label:"Angle Markers", elements:[{
      id:"angle-marker-spec", label:"Angle Marker", gradeVaries:true, images:[],
      specs:[
        {label:"Size", value:"3px"},
        {label:"Color (Grade 8+)", value:"#666666", type:"color"},
        {label:"Color (Grade 6–7)", value:"#999999", type:"color"},
        {label:"Cap", value:"Butt"},
        {label:"Corner", value:"Miter join"},
        {label:"Align Stroke", value:"Center"},
        {label:"Arc start radius", value:"Flexible (~40px default)"},
        {label:"Arc gap", value:"Flexible (~10px default)"},
        {label:"90° marker size", value:"15–25px by diagram"},
      ],
      banners:[
        {type:"info", text:"<strong>Grade 6–7 color logic:</strong> Line color is <code>#666666</code>, so angle marker uses <code>#999999</code> to differentiate without introducing a new color."},
        {type:"note", text:"Arc radius and gap are flexible — adjust by diagram size. Defaults are starting points."},
        {type:"note", text:"No need to write 90° when using a square angle marker."},
        {type:"note", text:"Use 40% arrowhead scale in complex, space-limited diagrams."},
      ]
    }]},

    { id:"length-markers", label:"Length Markers", elements:[{
      id:"hatch-marker", label:"Hatch Marker", gradeVaries:true, images:[],
      specs:[
        {label:"Size", value:"2px"},
        {label:"Color (Grade 8+)", value:"#cccccc", type:"color"},
        {label:"Color (Grade 6–7)", value:"#bbbbbb", type:"color"},
        {label:"Cap", value:"Round"},
        {label:"Corner", value:"Round"},
        {label:"Align Stroke", value:"Center"},
      ],
      banners:[
        {type:"note", text:"10px height hatch marker can be used depending on diagram size."},
      ]
    }]},

    { id:"parallel-markers", label:"Parallel Line Markers", elements:[{
      id:"feathers", label:"Feathers", gradeVaries:true, images:[],
      specs:[
        {label:"Size", value:"2px"},
        {label:"Color (Grade 8+)", value:"#cccccc", type:"color"},
        {label:"Color (Grade 6–7)", value:"#bbbbbb", type:"color"},
        {label:"Cap", value:"Round"},
        {label:"Corner", value:"Round"},
        {label:"Align Stroke", value:"Center"},
      ]
    }]},

    { id:"vectors", label:"Vectors", elements:[
      { id:"vector-spec", label:"Vector Specs", images:[],
        specs:[
          {label:"Arrow type", value:"Arrow 7 (Illustrator)"},
          {label:"Point size", value:"5px (all grades)"},
          {label:"Point color", value:"#000000", type:"color"},
        ],
        banners:[
          {type:"warn", text:"Vector guidelines have been updated. Old assets may have different arrowhead styles — do not replicate old styles."},
        ]
      },
      { id:"vector-colors", label:"Vector Color Palette",
        specs:[
          {label:"Primary", value:"#ec008c", type:"color"},
          {label:"Secondary", value:"#00ceab", type:"color"},
          {label:"Tertiary", value:"#7575fc", type:"color"},
          {label:"Quaternary", value:"#ff6b00", type:"color"},
          {label:"Senary", value:"#1590ff", type:"color"},
        ],
        banners:[
          {type:"note", text:"Same palette used in Physics. Consistent across both subjects."},
        ]
      }
    ]},

    { id:"number-line", label:"Number Line", elements:[
      { id:"number-line-spec", label:"Number Line", gradeVaries:true, images:[],
        specs:[
          {label:"Size", value:"2px"},
          {label:"Color (Grade 8+)", value:"#999999", type:"color"},
          {label:"Color (Grade 6–7)", value:"#666666", type:"color"},
          {label:"Arrowhead", value:"Arrow 7, 60% scale"},
          {label:"Cap / Corner", value:"Round"},
        ],
        banners:[
          {type:"info", text:"<strong>Font size rule:</strong> Use <strong>14px</strong> when number line is part of a graph. Use <strong>18px</strong> when it is a standalone image."},
          {type:"note", text:"Minus (−) symbol must be a hyphen on number lines. Do not use the math minus symbol."},
        ]
      },
      { id:"number-line-fonts", label:"Number Line — Labels", gradeVaries:true,
        gradeTable:{ columns:["Property","Grade 6–7","Grade 8–9","Grade 10+"], rows:[
          {label:"Font", values:["Latin Modern Roman","Latin Modern Roman","Latin Modern Roman"]},
          {label:"Size (in graph)", values:["14px","14px","14px"]},
          {label:"Size (standalone)", values:["18px","18px","18px"]},
          {label:"Label color", values:["#333333","#666666","#666666"], highlight:true, type:"color"},
          {label:"Style", values:["10 Bold","10 Bold","10 Bold"]},
          {label:"Graph axis marker", values:["2px #999999","2px #999999","2px #999999"]},
          {label:"Denominator color", values:["#333333","#999999","#666666"], highlight:true, type:"color"},
        ]}
      }
    ]},

    { id:"graphs", label:"Graphs", elements:[
      { id:"graph-grid", label:"Graph Grid", images:[],
        specs:[
          {label:"Size", value:"1px"},
          {label:"Color", value:"#e6e6e6", type:"color"},
          {label:"Cap / Corner", value:"Round"},
          {label:"Align Stroke", value:"Center"},
        ]
      },
      { id:"graph-axis", label:"Graph Axis", images:[],
        specs:[
          {label:"Size", value:"2px"},
          {label:"Color", value:"#999999", type:"color"},
          {label:"Arrowhead", value:"Arrow 7, 60% scale"},
          {label:"Cap / Corner", value:"Round"},
          {label:"Align Stroke", value:"Center"},
          {label:"Axis marker height/width", value:"10px"},
        ]
      },
      { id:"linear-graph", label:"Linear Graph — Labels", images:[],
        specs:[
          {label:"Point diameter", value:"4px"},
          {label:"Point color", value:"#000000", type:"color"},
          {label:"Alphabet labels", value:"Latin Modern Roman, 16px, #666666, 10 Bold Italic"},
          {label:"Axis numeral markers", value:"Latin Modern Roman, 14px, #999999, 10 Bold"},
          {label:"Axis labels (x, y)", value:"Latin Modern Roman, 14px, #999999, 10 Bold Italic"},
          {label:"Axis labels (X, X′, Y, Y′)", value:"Latin Modern Roman, 16px, #999999, 10 Bold Italic"},
          {label:"Graph equation color", value:"#666666", type:"color"},
          {label:"Equation — alphabet", value:"10 Bold Italic"},
          {label:"Equation — numeral", value:"10 Bold"},
          {label:"Superscript / subscript", value:"21px"},
        ],
        banners:[
          {type:"note", text:"Y-axis label: right side for bar graphs, left side for function graphs. 10px from axis line."},
          {type:"note", text:"Use title case for headings, object names, graph description text."},
          {type:"note", text:"Equation on graph: minus = hyphen. Equation below graph: use math symbols."},
        ]
      },
      { id:"function-graph", label:"Function / Inequality Graphs", images:[],
        specs:[
          {label:"Alphabet labels", value:"Latin Modern Roman, 16px, #666666, 10 Bold Italic"},
          {label:"Axis numeral markers", value:"Latin Modern Roman, 14px, #000000 @ 40% opacity"},
          {label:"Axis labels (x, y)", value:"Latin Modern Roman, 14px, #666666, 10 Bold Italic"},
          {label:"Graph equation color", value:"#4a4a4a", type:"color"},
          {label:"Grid color", value:"#000000 @ 10% opacity, 1px"},
          {label:"Solution region", value:"#4D80F5 @ 40% opacity", type:"color-inline", colorValue:"#4D80F5"},
        ],
        banners:[
          {type:"info", text:"<strong>Equation color <code>#4a4a4a</code> is specific to inequality/function graphs only.</strong> All other graphs use <code>#666666</code>."},
          {type:"note", text:"Shade opacity guide: #EE706B→20% · #5BC9CA→20% · #5EBF43→15% · #A165EF→10% · #2189F9→15% · #F29D38→25% · #CDCA52→30%"},
        ]
      },
      { id:"bar-graph", label:"Bar Graph", images:[],
        specs:[
          {label:"Grid lines", value:"1px, #e6e6e6, Round"},
          {label:"Bar labels (day/month etc)", value:"Latin Modern Roman, 14px, #999999, 10 Bold"},
          {label:"Axis label (Days of Week etc)", value:"Proxima Nova, 18px, #999999, Regular"},
          {label:"Legends", value:"Latin Modern Roman, 14px, #999999, 10 Bold"},
          {label:"Chart / Axis title", value:"Proxima Nova, 18px, #999999, Normal"},
          {label:"Data on bars", value:"Latin Modern Roman, 14px, #999999, 10 Bold"},
          {label:"Bar gap", value:"1.5× bar width"},
          {label:"Double bar gap", value:"4px (same category)"},
        ],
        banners:[
          {type:"note", text:"Horizontal labels if ≥10px spacing. Switch to vertical if tight."},
          {type:"note", text:"Axis line layer must be above bar graph layer in Illustrator."},
        ]
      },
      { id:"pie-chart", label:"Pie Chart", images:[],
        specs:[
          {label:"Label line", value:"1px, #000000, Round"},
          {label:"Label points", value:"6px, #000000"},
          {label:"Numerals inside", value:"Latin Modern Roman, 18px, #000000, 10 Bold"},
          {label:"Text inside", value:"Proxima Nova, 18px, #000000, 10 Bold"},
          {label:"Legends", value:"Proxima Nova, 18px, #666666, Regular"},
          {label:"Title", value:"Proxima Nova, 21px, #000000, Bold"},
        ]
      },
      { id:"pie-colors", label:"Pie Chart Color Palette",
        specs:[
          {label:"1st", value:"#80C0FF", type:"color"},
          {label:"2nd", value:"#F68DFF", type:"color"},
          {label:"3rd", value:"#FFA282", type:"color"},
          {label:"4th", value:"#94E67E", type:"color"},
          {label:"5th", value:"#EAD53B", type:"color"},
          {label:"6th", value:"#A3A0FF", type:"color"},
          {label:"7th", value:"#FF8C96", type:"color"},
          {label:"8th", value:"#7FA2CC", type:"color"},
        ]
      }
    ]},

    { id:"construction", label:"Construction Diagrams", elements:[
      { id:"construction-lines", label:"Construction — Lines", gradeVaries:true, images:[],
        gradeTable:{ columns:["Element","Grade 6–7","Grade 8–9","Grade 10+"], rows:[
          {label:"Solid line color", values:["#666666","#999999","#999999"], highlight:true, type:"color"},
          {label:"Dotted line color", values:["#666666","#bbbbbb","#bbbbbb"], highlight:true, type:"color"},
          {label:"Arc color", values:["#666666","#999999","#999999"], highlight:true, type:"color"},
          {label:"Length marker color", values:["#bbbbbb","#cccccc","#cccccc"], highlight:true, type:"color"},
          {label:"Angle marker color", values:["#999999","#666666","#666666"], highlight:true, type:"color"},
          {label:"Point size", values:["6px","6px","4px"], highlight:true},
          {label:"All stroke sizes", values:["2px","2px","2px"]},
          {label:"Angle marker size", values:["3px","3px","3px"]},
          {label:"Cap", values:["Round","Round","Round"]},
          {label:"Angle marker cap", values:["Butt","Butt","Butt"]},
          {label:"Angle marker corner", values:["Miter","Miter","Miter"]},
        ]},
        banners:[
          {type:"info", text:"Grade 6–7 darker colors are intentional — higher contrast for younger students."},
        ]
      },
      { id:"construction-labels", label:"Construction — Labels", gradeVaries:true,
        specs:[
          {label:"Font", value:"Latin Modern Roman"},
          {label:"Vertex label size", value:"18px"},
          {label:"Vertex label color", value:"#666666", type:"color"},
          {label:"Vertex label style", value:"10 Bold Italic"},
          {label:"Measurement label (Grade 8+)", value:"#999999", type:"color"},
          {label:"Measurement label (Grade 6–7)", value:"#333333", type:"color"},
          {label:"Measurement style", value:"Numeral: 10 Bold · Unit: 10 Bold Italic"},
        ]
      }
    ]},

    { id:"sequence", label:"Sequence Diagrams", elements:[{
      id:"sequence-spec", label:"Sequence Diagram", gradeVaries:true, images:[],
      specs:[
        {label:"Line size", value:"2px"},
        {label:"Line color (Grade 8+)", value:"#999999", type:"color"},
        {label:"Line color (Grade 6)", value:"#666666", type:"color"},
        {label:"Shape stroke", value:"2px, #999999"},
        {label:"Point size", value:"4px"},
        {label:"Arrow", value:"Arrow 7, 1px, 20% scale"},
        {label:"Label 1", value:"14px, #999999, 10 Bold"},
        {label:"Label 2", value:"18px, #999999, 10 Bold"},
        {label:"Label term", value:"14px, #999999, 10 Bold Italic"},
      ],
      banners:[
        {type:"note", text:"Arc arrow: full circle → remove lower semicircle → push top anchor down 3px → center Arrow 7 on arc."},
      ]
    }]}

  ]
},

/* ════════════════════════════════════════════
   BIOLOGY
════════════════════════════════════════════ */
{
  id:"biology", label:"Biology", badge:"biology",
  icon:"🧬", iconBg:"#e0f2e9", iconColor:"#00783E",
  accentColor:"#00783E",
  description:"Cells, proteins, lipids, energy molecules",
  downloads:"biology",
  categories:[

    { id:"bio-labels", label:"Labels & Typography", elements:[{
      id:"bio-general-labels", label:"General Label Specs", images:[],
      specs:[
        {label:"Font", value:"Proxima Nova"},
        {label:"Heading", value:"21px, Bold"},
        {label:"Subheading", value:"18px, Bold"},
        {label:"Label text", value:"18px, Regular"},
        {label:"Label color (primary)", value:"#999999", type:"color"},
        {label:"Label color (secondary)", value:"#000000", type:"color"},
        {label:"Label line", value:"2px, #000000"},
      ],
      banners:[
        {type:"warn", text:"Guidelines updated — old assets will show color variation. New standard: primary <code>#999999</code>, secondary <code>#000000</code>."},
        {type:"note", text:"Use <code>#000000</code> when <code>#999999</code> merges with diagram. Designer's call."},
        {type:"note", text:"If many labels, 16px is acceptable for label text."},
        {type:"note", text:"Use double stroke in Illustrator on dark backgrounds for label line visibility."},
      ]
    }]},

    { id:"bio-protein", label:"Protein Structure", elements:[
      { id:"protein-primary", label:"Primary Structure", images:[],
        specs:[
          {label:"Fill color", value:"#66a2ed", type:"color"},
          {label:"Stroke color", value:"#4172b2", type:"color"},
          {label:"Stroke size", value:"0.5px"},
          {label:"Outer path color", value:"#839ba8", type:"color"},
          {label:"Outer path stroke", value:"2.5px"},
          {label:"Inner path color", value:"#bdccd4", type:"color"},
          {label:"Inner path stroke", value:"1.5px"},
        ]
      },
      { id:"protein-tertiary", label:"Tertiary Structure",
        specs:[
          {label:"Fill color", value:"#8564d5", type:"color"},
          {label:"Stroke color", value:"#5b4491", type:"color"},
          {label:"Stroke size", value:"1px"},
        ]
      },
      { id:"protein-quaternary", label:"Quaternary Structure",
        specs:[
          {label:"Blue fill", value:"#8564d5", type:"color"},
          {label:"Blue stroke", value:"#5b4491", type:"color"},
          {label:"Pink fill", value:"#d471b6", type:"color"},
          {label:"Pink stroke", value:"#aa5172", type:"color"},
          {label:"Stroke size (both)", value:"1px"},
        ]
      }
    ]},

    { id:"bio-lipids", label:"Lipids", elements:[{
      id:"lipid-low", label:"Lipid — Low Fidelity", images:[],
      specs:[
        {label:"Head fill", value:"#ff816e", type:"color"},
        {label:"Head stroke", value:"#a14739", type:"color"},
        {label:"Head stroke size", value:"0.5px"},
        {label:"Tail color", value:"#bf7b24", type:"color"},
        {label:"Tail stroke", value:"0.5px, Round corner"},
      ]
    }]},

    { id:"bio-energy", label:"Energy-Carrying Molecules", elements:[{
      id:"energy-molecule", label:"Molecule Shapes", images:[],
      specs:[
        {label:"Shape height", value:"30px"},
        {label:"Blue fill", value:"#58a3f0", type:"color"},
        {label:"Blue stroke", value:"#3d71a6", type:"color"},
        {label:"Yellow fill", value:"#ffe77a", type:"color"},
        {label:"Yellow stroke", value:"#bfad5c", type:"color"},
        {label:"Stroke size", value:"2px"},
        {label:"Corner radius", value:"5px"},
        {label:"Padding", value:"10px each side"},
        {label:"Small shape fill", value:"#fcef58", type:"color"},
        {label:"Small shape stroke", value:"#b9ad45, 1px"},
      ]
    }]}

  ]
},

/* ════════════════════════════════════════════
   PHYSICS
════════════════════════════════════════════ */
{
  id:"physics", label:"Physics", badge:"physics",
  icon:"⚡", iconBg:"#eeeeff", iconColor:"#5750E3",
  accentColor:"#5750E3",
  description:"Vectors, charges, fields, optics, circuits",
  downloads:"physics",
  categories:[

    { id:"phys-illustrations", label:"Illustrations", elements:[{
      id:"phys-illus", label:"Physics Illustrations", images:[],
      specs:[],
      banners:[
        {type:"info", text:"Physics vector illustrations follow the same guidelines as the <strong>Artwork Creation Guide</strong>. Download link above."},
        {type:"warn", text:"Physics guidelines have been updated. Older assets may have inconsistencies — do not replicate old styles."},
      ]
    }]},

    { id:"phys-labels", label:"Labels & Typography", elements:[{
      id:"phys-general-labels", label:"General Label Specs", images:[],
      specs:[
        {label:"Font", value:"Proxima Nova"},
        {label:"Color (primary)", value:"#999999", type:"color"},
        {label:"Color (secondary)", value:"#000000", type:"color"},
        {label:"Heading", value:"21px, Bold"},
        {label:"Subheading", value:"18px, Bold"},
        {label:"Label text", value:"18px, Regular"},
        {label:"Label line", value:"2px, #999999 or #000000"},
      ],
      banners:[
        {type:"info", text:"Physics graph and vector labelling follows <strong>math guidelines</strong> exactly."},
      ]
    }]},

    { id:"phys-graphs", label:"Physics Graphs", elements:[{
      id:"phys-graph-rules", label:"Graph Rules — Physics Exceptions", images:[],
      specs:[
        {label:"Base specs", value:"Follow all Math graph guidelines"},
        {label:"x/y axis labels", value:"Do NOT add unless explicitly instructed"},
        {label:"X, X′ labels", value:"Do NOT add unless explicitly instructed"},
        {label:"Origin 'O'", value:"Do NOT add unless explicitly instructed"},
      ],
      banners:[
        {type:"info", text:"Physics graphs follow all math graph guidelines with the above exceptions."},
        {type:"note", text:"If there is explicit instruction from SME to add axis labels, also add the origin 'O' in that case."},
      ]
    }]},

    { id:"phys-vectors", label:"Vectors", elements:[
      { id:"phys-vector-types", label:"Physics Vector Types", images:[],
        specs:[
          {label:"Position vectors (r, r₁, r₂)", value:"#ec008c — Primary", type:"color-inline", colorValue:"#ec008c"},
          {label:"Force vectors (F₂₁, F₁₂)", value:"#00ceab — Secondary", type:"color-inline", colorValue:"#00ceab"},
          {label:"Resultant (Fnet, →F)", value:"#7575fc — Tertiary", type:"color-inline", colorValue:"#7575fc"},
          {label:"Point size", value:"5px (all)"},
        ],
        banners:[{type:"note", text:"Same vector color palette as Math. See Graphic Style Library for arrow settings."}]
      },
      { id:"phys-vector-colors", label:"Vector Color Palette",
        specs:[
          {label:"Primary", value:"#ec008c", type:"color"},
          {label:"Secondary", value:"#00ceab", type:"color"},
          {label:"Tertiary", value:"#7575fc", type:"color"},
          {label:"Quaternary", value:"#ff6b00", type:"color"},
          {label:"Senary", value:"#1590ff", type:"color"},
        ]
      },
      { id:"fbd-spec", label:"Free Body Diagrams (FBD)", images:[],
        specs:[
          {label:"Arrow color", value:"#ec008c (Primary)", type:"color-inline", colorValue:"#ec008c"},
          {label:"Stroke", value:"3px"},
          {label:"Arrow scale", value:"50%"},
        ]
      }
    ]},

    { id:"phys-charges", label:"Charges", elements:[{
      id:"charge-spec", label:"Point Charge", images:[],
      specs:[
        {label:"Positive fill", value:"#3399ff @ 30% opacity", type:"color-inline", colorValue:"#3399ff"},
        {label:"Negative fill", value:"#da51e5 @ 30% opacity", type:"color-inline", colorValue:"#da51e5"},
        {label:"Circle diameter (small)", value:"25px"},
        {label:"Circle diameter (large)", value:"40–45px"},
        {label:"Stroke", value:"2px"},
        {label:"Label font", value:"Proxima Nova, 24–28px, Bold, #666666"},
      ],
      banners:[
        {type:"note", text:"<strong>Point charge:</strong> Represent in a circle. Two sizes: 25px or 45px diameter."},
        {type:"note", text:"<strong>Continuous charge:</strong> No circle. Font size varies: 18px Bold or 22px Bold, Proxima Nova, #666666."},
        {type:"note", text:"<strong>Generic charge:</strong> 10px circle, fill #666666, stroke 2px #000000."},
        {type:"note", text:"Font size and style for 'q' remains the same as math."},
      ]
    }]},

    { id:"phys-fields", label:"Electric & Magnetic Fields", elements:[
      { id:"field-lines", label:"Electric & Magnetic Field Lines", images:[],
        specs:[
          {label:"Electric field arrows", value:"#aacde2, 2px, Arrow 7, 60%", type:"color-inline", colorValue:"#aacde2"},
          {label:"Magnetic field arrows", value:"#e5aaaa, 2px, Arrow 7, 60%", type:"color-inline", colorValue:"#e5aaaa"},
        ]
      },
      { id:"equipotential", label:"Equipotential Lines & Surface", images:[],
        specs:[
          {label:"Lines", value:"#5ebf43, 2px, 6pt dash", type:"color-inline", colorValue:"#5ebf43"},
          {label:"Surface stroke", value:"#5ebf43, 2px, 6pt dash"},
          {label:"Surface fill", value:"#cdefc7, 100% opacity", type:"color-inline", colorValue:"#cdefc7"},
        ]
      }
    ]},

    { id:"phys-optics", label:"Optical Instruments", elements:[{
      id:"optics-spec", label:"Lens & Mirror Specs", images:[],
      specs:[
        {label:"Medium fill (lens/glass/water)", value:"#04adef @ 20% opacity", type:"color-inline", colorValue:"#04adef"},
        {label:"Medium stroke", value:"#04adef, 2px, Round cap"},
        {label:"Light ray arrows", value:"#ff6666, 2px, Arrow 7, 60%", type:"color-inline", colorValue:"#ff6666"},
        {label:"Object / image / reflection arrows", value:"#3a3aa5, 3px, Arrow 7, 50%", type:"color-inline", colorValue:"#3a3aa5"},
        {label:"Principal axis & vertical axis", value:"#bbbbbb, 2px, dash line, 6px gap"},
      ],
      banners:[
        {type:"note", text:"Light ray layers (red arrows) must sit <strong>below</strong> the lens layer in Illustrator."},
        {type:"note", text:"Use Mirror Hatch marks brush from the Optical Instruments .ai file for all lens shading."},
        {type:"info", text:"This guideline is in progress and will be updated as needed."},
      ]
    }]},

    { id:"phys-circuit", label:"Circuit Symbols", elements:[{
      id:"circuit-symbols", label:"Circuit Symbol Library", images:[],
      specs:[],
      banners:[
        {type:"info", text:"All circuit symbols are maintained in the Circuit Symbol Library .ai file. Download above."},
        {type:"note", text:"The library is updated regularly as new symbols are needed."},
      ]
    }]},

    { id:"phys-texture", label:"Texture Library", elements:[{
      id:"texture-library", label:"Physics Texture Library", images:[],
      specs:[],
      banners:[
        {type:"info", text:"Wood texture patterns, oil color, spring brush etc. are in the Texture Library .ai file. Download above."},
        {type:"note", text:"This library is in progress and will be updated as needed."},
      ]
    }]},

    { id:"phys-diagram-specs", label:"Diagram Specs", elements:[{
      id:"real-life-objects", label:"Real-Life Object Outlines", images:[],
      specs:[
        {label:"Outline style", value:"Black outline"},
        {label:"Purpose", value:"Differentiate real-life objects from diagram elements"},
      ],
      banners:[
        {type:"info", text:"Any real-life object in a physics diagram must use a black outline to allow proper visual differentiation."},
      ]
    }]}

  ]
},

/* ════════════════════════════════════════════
   CHEMISTRY
════════════════════════════════════════════ */
{
  id:"chemistry", label:"Chemistry", badge:"chemistry",
  icon:"⚗", iconBg:"#fff5e6", iconColor:"#B25600",
  accentColor:"#B25600",
  description:"Atoms, bonds, molecular models, equations",
  downloads:"chemistry",
  categories:[

    { id:"chem-general", label:"General Guidelines", elements:[{
      id:"chem-image-size", label:"Image Size & Scaling", images:[],
      specs:[
        {label:"Canvas", value:"Grow canvas if more space needed"},
        {label:"Scaling", value:"NEVER non-uniform scaling"},
      ],
      banners:[
        {type:"warn", text:"<strong>NEVER do non-uniform scaling of chemical figures.</strong> If the structure needs scaling, flag it to the team before doing it across multiple assets."},
        {type:"note", text:"If more elements need to be added, grow the image canvas size — retain the original size of the existing structure."},
      ]
    }]},

    { id:"chem-atoms", label:"Atom Sizing", elements:[
      { id:"atom-base", label:"Atom — Base Specs", images:[],
        specs:[
          {label:"Base atom size", value:"20px circle"},
          {label:"Stroke", value:"2px (≤200px size)"},
          {label:"Highlight / shade position", value:"70% of atom size"},
          {label:"Highlight / shade width", value:"30% of diameter"},
          {label:"Highlight", value:"White, 40% opacity"},
          {label:"Shade", value:"20% darker than atom color"},
          {label:"Highlight angle", value:"Top-left, 45° rotation"},
        ],
        banners:[
          {type:"note", text:"Scaling: enable Scale Corners, disable Scale Strokes & Effects. Stroke stays at 2px."},
          {type:"note", text:"Stroke rule: 2px up to 200px atom size. Add 1px per 100px above that."},
          {type:"info", text:"Atom colors: see Periodic Table file on Drive. Atomic radii: see Atomic Radius Sheet (Column D). Both downloadable above."},
        ]
      },
      { id:"atom-scaling", label:"Atom Size — Calculation Formula", images:[],
        specs:[],
        banners:[
          {type:"info", text:"<strong>Formula:</strong> Smallest atom = 20px base. Scale others: <code>new_size = 20 × (target_radius ÷ smallest_radius)</code>."},
          {type:"note", text:"<strong>Example — CaCl₂:</strong> Ca radius=174, Cl radius=100. Cl=20px. Ca = 20×(174/100) = 35px."},
          {type:"note", text:"For multi-molecule images: atom with smallest atomic radius in that image gets the 20px base. Calculate all others relative to it."},
        ]
      },
      { id:"subatomic", label:"Subatomic Particles", images:[],
        specs:[
          {label:"Electron", value:"See Periodic Table file"},
          {label:"Proton", value:"See Periodic Table file"},
          {label:"Neutron", value:"See Periodic Table file"},
          {label:"Positron", value:"See Periodic Table file"},
        ],
        banners:[
          {type:"info", text:"Refer to the Periodic Table Drive file for subatomic particle representations."},
        ]
      }
    ]},

    { id:"chem-molecular", label:"Molecular Representations", elements:[
      { id:"ball-stick-small", label:"Ball & Stick — 20px Atoms", images:[],
        specs:[
          {label:"Inside stroke", value:"2px, #999999", type:"color-inline", colorValue:"#999999"},
          {label:"Outside stroke", value:"2px, #333333", type:"color-inline", colorValue:"#333333"},
          {label:"Stick height", value:"6px"},
          {label:"Cap / Corner", value:"Round"},
          {label:"Align stroke", value:"Center"},
        ],
        banners:[
          {type:"note", text:"Bond joins atom at half the atom's radius."},
          {type:"note", text:"Bond construction: draw 2px stroke first, then add 6px stroke on top. Alternatively use a 4px height rectangle with 2px stroke."},
        ]
      },
      { id:"ball-stick-large", label:"Ball & Stick — 250px Atoms", images:[],
        specs:[
          {label:"Inside stroke", value:"3px, #999999", type:"color-inline", colorValue:"#999999"},
          {label:"Outside stroke", value:"3px, #333333", type:"color-inline", colorValue:"#333333"},
          {label:"Stick height", value:"9px"},
          {label:"Cap / Corner", value:"Round"},
          {label:"Align stroke", value:"Center"},
        ],
        banners:[
          {type:"note", text:"Stroke rule: 2px up to 200px atom, +1px per 100px above that."},
        ]
      },
      { id:"space-filling", label:"Space-Filling Model", images:[],
        specs:[],
        banners:[
          {type:"info", text:"Space-filling models use the same atom circle specs. Atoms overlap based on their relative sizes — no bond sticks are shown."},
        ]
      },
      { id:"lewis-dot-chem", label:"Lewis Dot Structure", images:[],
        specs:[
          {label:"Color", value:"#000000", type:"color"},
          {label:"Dot diameter", value:"4px"},
        ]
      }
    ]},

    { id:"chem-bonds", label:"Bonds", elements:[
      { id:"wedge-bond", label:"Wedge / Stereochemical Bond", images:[],
        specs:[
          {label:"Solid wedge color", value:"#000000", type:"color"},
          {label:"Dash stroke", value:"1px"},
        ]
      },
      { id:"intramolecular", label:"Intramolecular Bond", images:[],
        specs:[
          {label:"Style", value:"Dash line"},
          {label:"Color", value:"#000000", type:"color"},
        ]
      },
      { id:"carbon-chain", label:"Carbon Chain", images:[],
        specs:[
          {label:"Style", value:"Dash line, 1px"},
          {label:"Color", value:"#000000", type:"color"},
        ]
      }
    ]},

    { id:"chem-equations", label:"Equations & Arrows", elements:[
      { id:"chem-equation-font", label:"Equation Heading / Caption", images:[],
        specs:[
          {label:"Font", value:"Proxima Nova Regular"},
          {label:"Size", value:"16pt"},
          {label:"Color", value:"#000000", type:"color"},
        ],
        banners:[
          {type:"note", text:"Use only when instructed by SME. Default font is CMU Serif Roman."},
        ]
      },
      { id:"chem-names", label:"Chemical Names in Reactions", images:[],
        specs:[
          {label:"Font", value:"CMU Serif Roman (LaTeX)"},
          {label:"Size", value:"14pt"},
          {label:"Position", value:"Below structure or above/below arrow"},
        ],
        banners:[
          {type:"info", text:"Download CMU Serif Roman from the font download button above."},
          {type:"note", text:"Names or conditions above/below the arrow are also 14pt CMU Serif Roman."},
        ]
      },
      { id:"equation-arrows", label:"Equation Arrows", images:[],
        specs:[],
        banners:[
          {type:"info", text:"Use arrows generated by the Davinci image generator for equation arrows in chemistry."},
        ]
      },
      { id:"reversible-reaction", label:"Reversible Reaction Arrows", images:[],
        specs:[
          {label:"Font", value:"Latin Modern Roman"},
          {label:"Size", value:"22px"},
          {label:"Color", value:"#000000", type:"color"},
        ]
      },
      { id:"rotation-arrows", label:"Single / Double Rotation Arrows", images:[],
        specs:[
          {label:"Stroke", value:"1px"},
          {label:"Arrow type", value:"Arrow 7"},
          {label:"Scale", value:"50%"},
        ]
      }
    ]},

    { id:"chem-charges", label:"Charges & Symbols", elements:[
      { id:"chem-charge", label:"Positive & Negative Charge", images:[],
        specs:[],
        banners:[
          {type:"info", text:"Use the Charges .ai file for all charge representations. Download above."},
          {type:"note", text:"Charge symbols maintain consistent visual weight — do not redraw from scratch."},
        ]
      },
      { id:"lewis-dot-struct", label:"Lewis Dot Structure", images:[],
        specs:[
          {label:"Color", value:"#000000", type:"color"},
          {label:"Dot diameter", value:"4px"},
        ]
      },
      { id:"long-brackets", label:"Long Brackets", images:[],
        specs:[
          {label:"Height", value:"Adjustable by image"},
        ],
        banners:[
          {type:"note", text:"The height of the bracket is adjustable according to the image content."},
        ]
      }
    ]},

    { id:"chem-misc", label:"Other Elements", elements:[
      { id:"benzene-ring", label:"Benzene Ring Locants", images:[],
        specs:[
          {label:"Font", value:"Proxima Nova Regular"},
          {label:"Size", value:"12pt"},
          {label:"Color", value:"#000000", type:"color"},
          {label:"Position", value:"1.5px offset from ring"},
          {label:"Alignment", value:"Center (horizontal & vertical)"},
        ],
        banners:[
          {type:"note", text:"Numbers represent carbon atoms at the intersections of the ring lines. Multiple numbers must be center-aligned with each other both horizontally and vertically."},
        ]
      },
      { id:"locants", label:"Locants", images:[],
        specs:[
          {label:"Font", value:"Proxima Nova Regular"},
          {label:"Size", value:"12pt"},
          {label:"Color", value:"#000000", type:"color"},
        ]
      }
    ]}

  ]
}

]}; /* end DATA */
