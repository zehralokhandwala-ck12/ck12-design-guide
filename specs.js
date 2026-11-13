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
  math: [
    { label:"Diagram Labelling .ai Files", url:"https://drive.google.com/open?id=1CN_AgUXP4Dc2roR0qbYdsArv28AY8N0f&usp=drive_fs", icon:"📐" },
    { label:"Guide to Place Point Labels (.ai)", url:"https://drive.google.com/open?id=1CQwbXSi8yEYCIywe2ti5cx3ay95RhSn8&usp=drive_fs", icon:"📍" },
    { label:"AP Image Guidelines (Graphs)", url:"https://docs.google.com/document/d/15O2UthiEJMu-_0EfefMBEcZs7Dd_mQ9emk4hqyPk0h4/edit?tab=t.0", icon:"📄" },
    { label:"Pie Chart Reference File", url:"https://drive.google.com/file/d/1egheyvUESNyesFVDy-P8KIOIFBttUEY9/view?usp=sharing", icon:"🥧" },
  ],
  biology: [
    { label:"Artwork Creation Guide", url:"https://docs.google.com/document/d/1Zd2j9117hieGSQTK3h3OicJoPJRUPu2ReIlF7ApoYFk/edit?tab=t.0", icon:"📄" },
  ],
  physics: [
    { label:"Artwork Creation Guide", url:"https://docs.google.com/document/d/1Zd2j9117hieGSQTK3h3OicJoPJRUPu2ReIlF7ApoYFk/edit?tab=t.0", icon:"📄" },
    { label:"Circuit Symbol Library (.ai)", url:"https://drive.google.com/open?id=1bQQJJVUAFu2WFH4qrN1UFtPQUisBwd8y&usp=drive_fs", icon:"⚡" },
    { label:"Texture Library (.ai)", url:"https://drive.google.com/open?id=1iU_0KGthFyy8HjP1_Kefb40mXL2hyoQk&usp=drive_fs", icon:"🎨" },
    { label:"Optical Instruments (.ai)", url:"https://drive.google.com/open?id=1U3lhcPEHD4eOUQ6dBItvR40o1PETDtqN&usp=drive_fs", icon:"🔭" },
  ],
  chemistry: [
    { label:"Structure sizing reference (.ai)", url:"https://drive.google.com/open?id=1TbVfYxc1cIMVSrS2a3U2ZzQ8_Q62gzma&usp=drive_fs", icon:"📐" },
    { label:"Charges (.ai file)", url:"https://drive.google.com/open?id=1Tyeq4raCrkF3P73czzVtoRyAx2ngJpm0&usp=drive_fs", icon:"⚗" },
    { label:"Periodic Table · Element Colors (.ai)", url:"assets/chemistry/periodic-table-simplified.ai", download:true, icon:"🔬" },
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
  downloads:"math",
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
        ]
      }
    ]},

    { id:"points", label:"Points", elements:[{
      id:"points-size", label:"Points — Size by Grade", gradeVaries:true, images:[],
      specs:[
        {label:"Hollow point diameter in the Math 2025 example", value:"4 px"},
      ],
      gradeTable:{ columns:["Property","Grade 6–7","Grade 8–9","Grade 10+"], rows:[
        {label:"Diagram point", values:["10px","6px","4px"], highlight:true},
        {label:"Construction point", values:["6px","6px","4px"], highlight:true},
        {label:"Number line point", values:["10px","6px","6px"], highlight:true},
        {label:"Hollow point", values:["Fill #fff · Stroke 1px #000","Fill #fff · Stroke 1px #000","Fill #fff · Stroke 1px #000"]},
        {label:"Vector point (all grades)", values:["5px","5px","5px"]},
        {label:"Color (all solid)", values:["#000000","#000000","#000000"], type:"color"},
      ]},
      banners:[
        {type:"note", text:"Hollow point: white fill with 1px black stroke. One point type — not two separate elements."},
      ]
    }]},

    { id:"labelling", label:"Diagram Labelling", elements:[
      { id:"arrow-length-marker", label:"Arrow (Length Marker)", gradeVaries:true, images:[],
        specs:[
          {label:"Arrow to diagram line", value:"10 px"},
          {label:"Arrowhead scale", value:"60% standard, 40% when labels are crowded"},
          {label:"Size", value:"2px"},
          {label:"Color (Grade 8+)", value:"#999999", type:"color"},
          {label:"Color (Grade 6–7)", value:"#666666", type:"color"},
          {label:"Cap", value:"Round"},
          {label:"Corner", value:"Round"},
          {label:"Align Stroke", value:"Center"},
        ],
        banners:[
          {type:"note", text:"Arrow placed first, then label. 10px spacing between arrow and diagram line."},
          {type:"note", text:"<strong>Right-aligned</strong> labels are also valid depending on placement. Use left, center, or right alignment so that if text is edited later, it does not overlap the diagram."},
          {type:"note", text:"If limited space or multiple labels, align the label <strong>along the direction of the line</strong> to clarify which label belongs to which segment."},
          {type:"info", text:"<strong>When to skip the arrow marker:</strong> No arrow needed when the measurement is already obvious (e.g. a single radius r=6cm). Arrow IS needed when there is potential confusion — e.g. a diameter where point O is the midpoint, or concentric circles where it is unclear which radius is being labelled."},
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
          {label:"Label to diagram line", value:"10 px"},
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
      { id:"math-symbol-label", label:"Math Symbols and Prime Glyphs", images:[],
        specs:[
          {label:"Math symbol font", value:"Latin Modern Roman (Regular)"},
          {label:"Prime glyph font", value:"Latin Modern Roman CK12 · 10 Bold Italic"},
          {label:"Prime glyph size", value:"18 pt"},
          {label:"Prime glyph tracking", value:"100 in the Illustrator Character panel"},
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
        {label:"Arc start radius", value:"40 px (all grades)"},
        {label:"Arc gap", value:"10 px between arcs"},
        {label:"90° marker size", value:"15–25px by diagram"},
      ],
      banners:[
        {type:"note", text:"Reduce the radius when the canvas is small or a complex diagram leaves too little room."},
        {type:"note", text:"No need to write 90° when using a square angle marker."},
        {type:"note", text:"Use 40% arrowhead scale in complex, space-limited diagrams."},
      ]
    }]},

    { id:"length-markers", label:"Equal-Length Marks", elements:[{
      id:"hatch-marker", label:"Equal-Length Tick Marks (Hatch Marks)", gradeVaries:true, images:[],
      specs:[
        {label:"Stroke width", value:"2px"},
        {label:"Tick height", value:"15 px (10 px on smaller diagrams)"},
        {label:"Spacing between ticks", value:"5 px"},
        {label:"Color (Grade 8+)", value:"#cccccc", type:"color"},
        {label:"Color (Grade 6–7)", value:"#bbbbbb", type:"color"},
        {label:"Cap", value:"Round"},
        {label:"Corner", value:"Round"},
        {label:"Align Stroke", value:"Center"},
      ],
      banners:[
        {type:"note", text:"Use matching tick marks to identify line segments of equal length."},
      ]
    }]},

    { id:"parallel-markers", label:"Parallel Line Markers", elements:[{
      id:"feathers", label:"Parallel Line Markers (Feathers)", gradeVaries:true, images:[],
      specs:[
        {label:"Stroke width", value:"2px"},
        {label:"Marker dimension (all grades)", value:"10 px · use 7 px when space is limited"},
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
          {label:"Illustrator stroke weight", value:"3 pt"},
          {label:"End arrow scale", value:"50%"},
          {label:"Stroke profile", value:"Uniform"},
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
          {label:"5th color", value:"#1590FF", type:"color"},
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
          {label:"Point diameter (Grades 6–7)", value:"10 px"},
          {label:"Point diameter (Grade 8 and above)", value:"6 px"},
          {label:"Point color", value:"#000000", type:"color"},
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
          {label:"Label color", values:["#999999","#999999","#999999"], type:"color"},
          {label:"Style", values:["10 Bold","10 Bold","10 Bold"]},
          {label:"Graph axis marker", values:["2px #999999","2px #999999","2px #999999"]},
          {label:"Denominator color", values:["#333333","#999999","#666666"], highlight:true, type:"color"},
          {label:"Denominator size + cap", values:["2px, Round","2px, Round","2px, Round"]},
        ]}
      }
    ]},

    { id:"graphs", label:"Graphs", elements:[
      { id:"graph-grid", label:"Graph Grid", images:[],
        specs:[
          {label:"Grid spacing", value:"30 px horizontally and vertically"},
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
          {label:"Equation font", value:"Latin Modern Roman CK12, 16 px"},
          {label:"Point diameter", value:"4px"},
          {label:"Point color", value:"#000000", type:"color"},
          {label:"Alphabet labels", value:"Latin Modern Roman, 16px, #666666, 10 Bold Italic"},
          {label:"Axis numeral markers", value:"Latin Modern Roman, 14px, #999999, 10 Bold"},
          {label:"Axis labels (x, y)", value:"Latin Modern Roman, 14px, #999999, 10 Bold Italic"},
          {label:"Axis labels (X, X′, Y, Y′)", value:"Latin Modern Roman, 16px, #999999, 10 Bold Italic"},
          {label:"Graph equation color", value:"#999999", type:"color"},
          {label:"Equation — alphabet", value:"10 Bold Italic"},
          {label:"Equation — numeral", value:"10 Bold"},
          {label:"Descriptive label (axis heading)", value:"Proxima Nova, 18px, #999999, Regular"},
          {label:"Heading (math symbol text)", value:"Latin Modern Roman, 18px, #999999, 10 Bold / 10 Bold Italic"},
          {label:"Superscript / subscript", value:"21px"},
        ],
        banners:[
          {type:"note", text:"Use #666666 when colored fills make the default equation color #999999 hard to read."},
          {type:"note", text:"Y-axis label: right side for bar graphs, left side for function graphs. 10px from axis line."},
          {type:"note", text:"Use title case for headings, object names, graph description text."},
          {type:"note", text:"Equation on graph: minus = hyphen. Equation below graph: use math symbols."},
        ]
      },
      { id:"function-graph", label:"Function / Inequality Graphs", images:[],
        specs:[
          {label:"Equation font", value:"Latin Modern Roman CK12, 16 px · letters 10 Bold Italic · numerals 10 Bold"},
          {label:"Axis labels (X, X′, Y, Y′)", value:"Latin Modern Roman CK12, 16 px, #666666, 10 Bold Italic"},
          {label:"Alphabet labels", value:"Latin Modern Roman, 16px, #666666, 10 Bold Italic"},
          {label:"Axis numeral markers", value:"Latin Modern Roman, 14px, #000000 @ 40% opacity"},
          {label:"Axis labels (x, y)", value:"Latin Modern Roman, 14px, #666666, 10 Bold Italic"},
          {label:"Graph equation color", value:"#999999", type:"color"},
          {label:"Equation color on low-contrast fills", value:"#666666", type:"color"},
          {label:"Grid color", value:"#000000 @ 10% opacity, 1px"},
          {label:"Solution region", value:"#4D80F5 @ 40% opacity", type:"color-inline", colorValue:"#4D80F5"},
          {label:"Region shade 1", value:"#EE706B at 20% opacity", type:"color-inline", colorValue:"#EE706B"},
          {label:"Region shade 2", value:"#5BC9CA at 20% opacity", type:"color-inline", colorValue:"#5BC9CA"},
          {label:"Region shade 3", value:"#5EBF43 at 15% opacity", type:"color-inline", colorValue:"#5EBF43"},
          {label:"Region shade 4", value:"#A165EF at 10% opacity", type:"color-inline", colorValue:"#A165EF"},
          {label:"Region shade 5", value:"#2189F9 at 15% opacity", type:"color-inline", colorValue:"#2189F9"},
          {label:"Region shade 6", value:"#F29D38 at 25% opacity", type:"color-inline", colorValue:"#F29D38"},
          {label:"Region shade 7", value:"#CDCA52 at 30% opacity", type:"color-inline", colorValue:"#CDCA52"},
        ],
        banners:[
          {type:"note", text:"Match each region’s shade to its arrow color. Adjust shade opacity for the hue and number of overlapping regions. The solution region uses its specified 40% opacity."},
        ]
      },
      { id:"multi-line-graph", label:"Multi-line Graph — Equation Line Colors",
        images:[{src:"source-images/math/grade-10/image20.png", caption:"Grade 10 example with multiple equation lines"}],
        specs:[
          {label:"Primary line", value:"#EE706B", type:"color"},
          {label:"Secondary line", value:"#5BC9CA", type:"color"},
          {label:"3rd line", value:"#5EBF43", type:"color"},
          {label:"4th line", value:"#A165EF", type:"color"},
          {label:"5th line", value:"#2189F9", type:"color"},
          {label:"6th line", value:"#F29D38", type:"color"},
          {label:"7th line", value:"#CDCA52", type:"color"},
        ],
        banners:[{type:"note", text:"Use this palette in order when plotting multiple equation lines on one graph. Equation text follows the graph label color rule."}]
      },
      { id:"bar-graph", label:"Bar Graph", images:[],
        specs:[
          {label:"Grade 10 mixed category label (e.g. 5 yr old)", value:"Latin Modern Roman CK12, 14 px, #999999 · numeral 10 Bold, words 10 Bold Italic"},
          {label:"Category labels to axis heading", value:"10 px of clearance"},
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
      { id:"bar-colors", label:"Multicolor Bar Graph — Color Palette",
        specs:[
          {label:"Primary bar color", value:"#FF6666", type:"color"},
          {label:"Secondary bar color", value:"#0DC9BB", type:"color"},
          {label:"3rd bar color", value:"#5EBF43", type:"color"},
          {label:"4th bar color", value:"#DA51E5", type:"color"},
          {label:"5th bar color", value:"#3399FF", type:"color"},
          {label:"6th bar color", value:"#ADBD00", type:"color"},
          {label:"7th bar color", value:"#A165EF", type:"color"},
          {label:"8th bar color", value:"#F29D38", type:"color"},
        ]
      },
      { id:"pie-chart", label:"Pie Chart", images:[],
        specs:[
          {label:"Segment stroke", value:"2px, #FFFFFF, Round cap"},
          {label:"Angle marker", value:"3px, #666666, Butt cap, Miter join"},
          {label:"Label line", value:"1px, #000000, Round"},
          {label:"Label points", value:"6px, #000000"},
          {label:"Numerals — inside chart", value:"Latin Modern Roman, 18px, #000000, 10 Bold"},
          {label:"Descriptive labels — inside chart", value:"Proxima Nova, 18px, #000000, Bold"},
          {label:"Descriptive labels — outside chart", value:"Proxima Nova, 18px, #4a4a4a, Regular"},
          {label:"Measurement label numerals — outside percentages and angles", value:"Latin Modern Roman, 18px, #000000, 10 Bold"},
          {label:"Measurement label alphabets — outside", value:"Latin Modern Roman, 18px, #000000, 10 Bold Italic"},
          {label:"Legends", value:"Proxima Nova, 18px, #666666, Regular"},
          {label:"Title", value:"Proxima Nova, 21px, #000000, Bold"},
        ],
        banners:[
          {type:"info", text:"Measurement numerals, including percentages and angles, use #000000 inside and outside the pie. Outside descriptive text uses #4A4A4A Regular. Add a label line and point when data cannot fit inside."},
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
          {label:"Equal-length tick mark color", values:["#bbbbbb","#cccccc","#cccccc"], highlight:true, type:"color"},
          {label:"Angle marker color", values:["#999999","#666666","#666666"], highlight:true, type:"color"},
          {label:"Point size", values:["6px","6px","4px"], highlight:true},
          {label:"Construction lines and arcs", values:["2px","2px","2px"]},
          {label:"Angle marker size", values:["3px","3px","3px"]},
          {label:"Cap", values:["Round","Round","Round"]},
          {label:"Angle marker cap", values:["Butt","Butt","Butt"]},
          {label:"Angle marker corner", values:["Miter","Miter","Miter"]},
        ]},
        banners:[
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
      gradeTable:{ columns:["Property","Grade 6","Grade 7–10+"], rows:[
        {label:"Line color", values:["#666666","#999999"], highlight:true, type:"color"},
        {label:"Label 1 font", values:["Latin Modern Roman","Latin Modern Roman"], highlight:false},
        {label:"Label 1 size", values:["18px","14px"], highlight:true},
        {label:"Label 1 color", values:["#333333","#999999"], highlight:true, type:"color"},
        {label:"Label 1 style", values:["10 Bold","10 Bold"], highlight:false},
        {label:"Label 2 font", values:["Proxima Nova","Latin Modern Roman"], highlight:true},
        {label:"Label 2 size", values:["18px","18px"], highlight:false},
        {label:"Label 2 color", values:["#000000","#999999"], highlight:true, type:"color"},
        {label:"Label 2 style", values:["Regular","10 Bold"], highlight:true},
        {label:"Label term font", values:["Latin Modern Roman","Latin Modern Roman"], highlight:false},
        {label:"Label term size", values:["18px","14px"], highlight:true},
        {label:"Label term color", values:["#000000","#999999"], highlight:true, type:"color"},
        {label:"Label term style", values:["10 Bold","10 Bold Italic"], highlight:true},
      ]},
      specs:[
        {label:"Grade 6 counter tile diameter", value:"36 px"},
        {label:"Grade 6 counter tile clearances", value:"10 px at the top, 5 px at the side, 20 px between counters"},
        {label:"Grade 10 sequence circle diameter", value:"50 px in the sequence example"},
        {label:"Grade 10 factor tree circle diameter", value:"40 px in the factor tree example"},
        {label:"Grade 10 factor tree branch to numeral", value:"10 px in the factor tree example"},
        {label:"Line size", value:"2px"},
        {label:"Shape stroke", value:"2px, #999999"},
        {label:"Point size", value:"4px"},
        {label:"Point color", value:"#000000"},
        {label:"Grade 6 Illustrator Scale dialog (source example)", value:"Uniform 120% · Scale Corners enabled · Scale Strokes & Effects disabled"},
        {label:"Arrow", value:"Arrow 7, 1px stroke, 20% scale"},
      ],
      banners:[
        {type:"note", text:"Grade 6 arc construction: draw a circle with a 1 px stroke and a diameter equal to the distance between the two axis markers. Remove the lower semicircle, lower the top anchor by 3 px, then center the arrow on the remaining arc."},
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
  description:"Cells, organelles, proteins, lipids, energy molecules",
  downloads:"biology",
  categories:[

    { id:"bio-labels", label:"Labels & Typography", elements:[{
      id:"bio-general-labels", label:"General Label Specs", images:[
          {src:"source-images/biology/updated/image23.png", caption:"Biology P21 · Heading and leader lines on an illustration"},
          {src:"source-images/biology/updated/image7.png", caption:"Biology P22 · Dark-background label example"},
          {src:"source-images/biology/updated/image22.png", caption:"Biology P25 · Illustrator double-stroke settings"},
        ],
      specs:[
        {label:"Font", value:"Proxima Nova"},
        {label:"Heading", value:"21px, Bold"},
        {label:"Subheading", value:"18px, Bold"},
        {label:"Label text", value:"18px, Regular"},
        {label:"Label color (primary)", value:"#999999", type:"color"},
        {label:"Label color (secondary)", value:"#000000", type:"color"},
        {label:"Leader line (all Biology labels)", value:"2 px, #000000"},
        {label:"Heading to subheading", value:"40 px in the source example; adjust for canvas space"},
        {label:"Subheading to bracket", value:"10 px in the source example; adjust for canvas space"},
      ],
      banners:[
        {type:"warn", text:"Label text uses #999999 by default. For every Biology leader line, use a 2 px black stroke (#000000)."},
        {type:"note", text:"Use black label text when gray text merges with the illustration."},
        {type:"note", text:"If there is no subheading in the image, use 18px Bold for the heading instead of 21px."},
        {type:"note", text:"If the image has more labels, 16px is acceptable for label text."},
        {type:"note", text:"On dark backgrounds, add a white backing stroke for visibility. The historical Appearance panel shows 1 pt black over 2 pt white. The working black leader is 2 px."},
      ]
    }]},

    { id:"bio-cell-references", label:"Cell & Organism References", elements:[
      {
        id:"cell-membrane", label:"Cell Membrane & Cytoplasm", images:[
          {src:"source-images/biology/updated/image8.jpg", caption:"Biology P35 · Cell membrane and cytoplasm palette"},
        ],
        specs:[
          {label:"Cytoplasm", value:"#FFDECC", type:"color"},
          {label:"Cell membrane · light", value:"#FFA792", type:"color"},
          {label:"Cell membrane · dark", value:"#EA7373", type:"color"},
        ]
      },
      {
        id:"chromosome", label:"Chromosome", images:[
          {src:"source-images/biology/updated/image6.jpg", caption:"Biology P38 · Chromosome palette"},
        ],
        specs:[
          {label:"Chromosome", value:"#173766", type:"color"},
        ]
      },
      {
        id:"dna-atgc", label:"DNA — ATGC", images:[
          {src:"source-images/biology/updated/image3.jpg", caption:"Biology P40 · DNA bases A T G C palette"},
        ],
        specs:[
          {label:"A · adenine", value:"#FF7A9D", type:"color"},
          {label:"T · thymine", value:"#FFBC50", type:"color"},
          {label:"C · cytosine", value:"#61DE94", type:"color"},
          {label:"G · guanine", value:"#7295FF", type:"color"},
        ]
      },
      {
        id:"enzymes", label:"Enzymes", images:[
          {src:"source-images/biology/updated/image12.jpg", caption:"Biology P43 · Enzyme palette"},
        ],
        specs:[
          {label:"Magenta", value:"#DE62D0", type:"color"},
          {label:"Green", value:"#42DD82", type:"color"},
          {label:"Yellow", value:"#FFDC4A", type:"color"},
          {label:"Orange", value:"#FF8D47", type:"color"},
          {label:"Gray", value:"#ADBCBF", type:"color"},
          {label:"Cyan", value:"#80CDE1", type:"color"},
        ]
      },
      {
        id:"mitochondria", label:"Mitochondria", images:[
          {src:"source-images/biology/updated/image20.jpg", caption:"Biology P47 · Mitochondria palette"},
        ],
        specs:[
          {label:"Dark pink", value:"#C6056A", type:"color"},
          {label:"Bright pink", value:"#F236AF", type:"color"},
        ]
      },
      {
        id:"nucleus-dna", label:"Nucleus & DNA Strand", images:[
          {src:"source-images/biology/updated/image1.jpg", caption:"Biology P51 · Nucleus and DNA strand palette"},
        ],
        specs:[
          {label:"Nucleus · coral", value:"#FF7566", type:"color"},
          {label:"Nucleus · red", value:"#E63232", type:"color"},
          {label:"Nucleus · orange", value:"#FF9203", type:"color"},
          {label:"DNA in nucleus", value:"#451FFF", type:"color"},
          {label:"Ribosomes in nucleus illustration", value:"#3708B7", type:"color"},
        ]
      },
      {
        id:"ribosome", label:"Ribosome", images:[
          {src:"source-images/biology/updated/image9.jpg", caption:"Biology P53 · Ribosome palette"},
        ],
        specs:[
          {label:"Light purple", value:"#968FEF", type:"color"},
          {label:"Dark purple", value:"#323296", type:"color"},
        ]
      },
      {
        id:"plant-cell", label:"Plant Cell", images:[
          {src:"source-images/biology/updated/image2.png", caption:"Biology P57 · Plant cell diagram"},
          {src:"source-images/biology/updated/image21.png", caption:"Biology P59 · Plant cell palette"},
        ],
        specs:[
          {label:"Cell wall fill", value:"#99DD17", type:"color"},
          {label:"Cell wall outline", value:"#39C121", type:"color"},
          {label:"Cytoplasm (plant cell)", value:"#99DD17", type:"color"},
          {label:"Cell membrane fill", value:"#06874F", type:"color"},
          {label:"Cell membrane outline", value:"#024225", type:"color"},
        ],
        banners:[{type:"note", text:"Use the printed #99DD17 value for plant-cell cytoplasm. The pale-yellow sample in the source image is an earlier discrepancy."}]
      },
      {
        id:"bacteria-cell", label:"Bacteria Cell", images:[
          {src:"source-images/biology/updated/image4.png", caption:"Biology P63 · Bacteria cell diagram"},
          {src:"source-images/biology/updated/image17.png", caption:"Biology P66 · Bacteria cell palette"},
        ],
        specs:[
          {label:"Cell wall fill", value:"#F236AF", type:"color"},
          {label:"Cell wall outline", value:"#CE097A", type:"color"},
          {label:"Cytoplasm", value:"#EAE6FF", type:"color"},
          {label:"Plasma membrane", value:"#CA6EFF", type:"color"},
          {label:"Capsule", value:"#8E32F9", type:"color"},
          {label:"Pilus", value:"#8E2680", type:"color"},
        ]
      },
      {
        id:"membrane-proteins", label:"Membrane Proteins", images:[
          {src:"source-images/biology/updated/image15.png", caption:"Biology P70 · Membrane protein palette"},
        ],
        specs:[
          {label:"Blue", value:"#3D7FB3", type:"color"},
          {label:"Purple", value:"#D15CD9", type:"color"},
        ]
      },
    ]},

    { id:"bio-protein", label:"Protein Structure", elements:[
      { id:"protein-primary", label:"Primary Structure", images:[
          {src:"source-images/biology/updated/image16.png", caption:"Biology P75 · Primary protein structure"},
        ],
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
      {
        id:"protein-secondary", label:"Secondary Structure", images:[
          {src:"source-images/biology/updated/image14.png", caption:"Biology P82 · Secondary protein ribbons"},
          {src:"source-images/biology/updated/image11.png", caption:"Biology P85 · Secondary protein structure palette"},
        ],
        specs:[
          {label:"Ribbon · yellow", value:"#FFD15E", type:"color"},
          {label:"Ribbon · orange", value:"#E9803F", type:"color"},
        ]
      },
      { id:"protein-tertiary", label:"Tertiary Structure", images:[
          {src:"source-images/biology/updated/image10.png", caption:"Biology P89 · Tertiary protein structure"},
        ],
        specs:[
          {label:"Fill color", value:"#8564d5", type:"color"},
          {label:"Stroke color", value:"#5b4491", type:"color"},
          {label:"Stroke size", value:"1px"},
        ]
      },
      { id:"protein-quaternary", label:"Quaternary Structure", images:[],
        specs:[
          {label:"Blue fill", value:"#8564d5", type:"color"},
          {label:"Blue stroke", value:"#5b4491", type:"color"},
          {label:"Pink fill", value:"#d471b6", type:"color"},
          {label:"Pink stroke", value:"#aa5172", type:"color"},
          {label:"Stroke size (both)", value:"1px"},
        ]
      }
    ]},

    { id:"bio-lipids", label:"Lipids", elements:[
      {
        id:"lipid-low", label:"Lipid — Low Fidelity", images:[
          {src:"source-images/biology/updated/image13.png", caption:"Biology P103 · Low-fidelity lipid"},
        ],
        specs:[
          {label:"Head fill", value:"#ff816e", type:"color"},
          {label:"Head stroke", value:"#a14739", type:"color"},
          {label:"Head stroke size", value:"0.5px"},
          {label:"Tail color", value:"#bf7b24", type:"color"},
          {label:"Tail stroke", value:"0.5px, Round corner"},
        ]
      },
      {
        id:"lipid-high", label:"Lipid — High Fidelity", images:[
          {src:"source-images/biology/updated/image5.png", caption:"Biology P111 · High-fidelity lipid head and tail palette"},
        ],
        specs:[
          {label:"Lipid head", value:"#D06955", type:"color"},
          {label:"Lipid tail", value:"#FFD592", type:"color"},
        ]
      }
    ]},

    { id:"bio-energy", label:"Energy-Carrying Molecules", elements:[{
      id:"energy-molecule", label:"Molecule Shapes", images:[
          {src:"source-images/biology/updated/image18.png", caption:"Biology P115 · Energy-carrying molecule labels"},
          {src:"source-images/biology/updated/image19.png", caption:"Biology P123 · ATP shape"},
        ],
      specs:[
        {label:"Shape height", value:"30px"},
        {label:"Blue fill", value:"#58a3f0", type:"color"},
        {label:"Blue stroke", value:"#3d71a6", type:"color"},
        {label:"Yellow fill", value:"#ffe77a", type:"color"},
        {label:"Yellow stroke", value:"#bfad5c", type:"color"},
        {label:"Stroke size", value:"2px"},
        {label:"Corner radius", value:"5px"},
        {label:"Padding", value:"10px each side"},
        {label:"ATP starburst fill", value:"#fcef58", type:"color"},
        {label:"ATP starburst stroke", value:"#b9ad45, 1px"},
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
    { id:"phys-illustrations", label:"Illustrations", elements:[
      {
        id:"phys-illus",
        label:"Physics Illustrations",
        specs:[
          {label:"Style reference", value:"Use the CK-12 Artwork Creation Guide for Physics vector illustrations."},
        ],
        banners:[
          {type:"note", text:"<a href=\"physics-review/\">View the Physics source review</a> for the original passages, figure links and approved decisions."},
        ]
      }
    ]},
    { id:"phys-labels", label:"Labels & Typography", elements:[
      {
        id:"phys-general-labels",
        label:"Physics Illustration Labels & Leader Lines",
        specs:[
          {label:"Typeface", value:"Proxima Nova"},
          {label:"Heading", value:"21 px, Bold"},
          {label:"Subheading", value:"18 px, Bold"},
          {label:"Text label", value:"18 px, Regular"},
          {label:"Primary label and leader-line color", value:"#999999", type:"color"},
          {label:"Fallback color for visibility", value:"#000000", type:"color"},
          {label:"Leader line stroke", value:"2 px"},
        ],
        banners:[
          {type:"note", text:"Use black when gray merges into the illustration. For graph and vector notation, follow the <a href=\"?spec=linear-graph\">Math graph label specs</a> and the <a href=\"?spec=phys-graph-rules\">Physics axis exceptions</a>."},
        ]
      }
    ]},
    { id:"phys-graphs", label:"Physics Graphs", elements:[
      {
        id:"phys-graph-rules",
        label:"Physics Graph Labels and Origin",
        specs:[
          {label:"Axis letters", value:"Omit x, y, X and X′ by default.", figure:"physics-2025-p28"},
          {label:"Origin O", value:"Omit by default. When axis letters are explicitly requested, also mark O at the origin.", figure:"physics-2025-p28"},
          {label:"Quantity labels and units", value:"Keep the relevant quantity and unit. The source example labels velocity (m/s) and time (s).", figure:"physics-2025-p28"},
        ],
        images:[
          {src:"source-images/physics/2025/image13.png", caption:"Physics P28 · Physics axis and origin labeling example"},
          {src:"source-images/physics/2025/image7.png", caption:"Physics P17 · Label placement on a Physics graph"},
        ],
        banners:[
          {type:"note", text:"Use the shared <a href=\"?spec=graph-grid\">Math grid</a> and <a href=\"?spec=graph-axis\">axis settings</a>."},
        ]
      }
    ]},
    { id:"phys-vectors", label:"Vectors", elements:[
      {
        id:"phys-vector-types",
        label:"Physics Vector Types & Arrow Settings",
        specs:[
          {label:"Position vectors · r, r₁, r₂, r₂₁", value:"#EC008C · primary", type:"color-inline", colorValue:"#EC008C"},
          {label:"Force vectors · F₂₁, F₁₂", value:"#00CEAB · secondary", type:"color-inline", colorValue:"#00CEAB"},
          {label:"Resultant vector · Fnet", value:"#7575FC · tertiary", type:"color-inline", colorValue:"#7575FC"},
          {label:"Point diameter", value:"5 px", figure:"physics-2025-p59"},
          {label:"General vector stroke weight", value:"3 pt in the Illustrator reference", figure:"physics-2025-p51"},
          {label:"Arrowhead scale", value:"50% on the arrowhead end", figure:"physics-2025-p51"},
          {label:"Cap / join / alignment", value:"Round cap, round join, center-aligned stroke", figure:"physics-2025-p51"},
          {label:"Stroke profile", value:"Uniform, solid", figure:"physics-2025-p51"},
        ],
        images:[
          {src:"source-images/physics/2025/image3.png", caption:"Physics P59 · Position and force vector examples"},
          {src:"source-images/physics/2025/image6.png", caption:"Physics P18 · Label placement on a vector diagram"},
        ],
        archivalImages:[
          {src:"source-images/physics/2025/image5.png", caption:"Physics P51 · Illustrator vector arrow settings"},
        ],
        banners:[
          {type:"note", text:"Use <a href=\"?spec=fbd-spec\">the free-body diagram rule</a> for force arrows in an FBD. P18 illustrates vector label placement. Its green resultant predates or differs from the documented tertiary color."},
        ]
      },
      {
        id:"phys-vector-colors",
        label:"Vector Color Palette",
        specs:[
          {label:"Primary", value:"#EC008C", type:"color"},
          {label:"Secondary", value:"#00CEAB", type:"color"},
          {label:"Tertiary", value:"#7575FC", type:"color"},
          {label:"Quaternary", value:"#FF6B00", type:"color"},
          {label:"5th color", value:"#1590FF", type:"color"},
        ],
        banners:[
          {type:"note", text:"The fifth color is shared with <a href=\"?spec=vector-colors\">Math vectors</a>."},
        ]
      },
      {
        id:"fbd-spec",
        label:"Free-Body Diagrams (FBD)",
        specs:[
          {label:"Force arrow color", value:"#EC008C · primary", type:"color-inline", colorValue:"#EC008C", figure:"physics-2025-p62"},
          {label:"Stroke", value:"3 px"},
          {label:"Arrowhead scale", value:"50%"},
        ],
        images:[
          {src:"source-images/physics/2025/image4.png", caption:"Physics P62 · Free-body diagram on a slope"},
          {src:"source-images/physics/2025/image22.png", caption:"Physics P63 · Free-body diagram of a suspended object"},
        ],
        banners:[
          {type:"note", text:"Apply this primary-color rule to the force arrows in a free-body diagram."},
        ]
      }
    ]},
    { id:"phys-charges", label:"Charges", elements:[
      {
        id:"charge-spec",
        label:"Point Charge",
        specs:[
          {label:"Symbol", value:"Place the positive or negative sign in a circle.", figure:"physics-2025-p79"},
          {label:"Small circle diameter", value:"25 px"},
          {label:"Large circle diameter", value:"40 px"},
          {label:"Positive circle color", value:"#3399FF", type:"color"},
          {label:"Negative circle color", value:"#DA51E5", type:"color"},
          {label:"Circle fill opacity", value:"30%"},
          {label:"Circle stroke", value:"2 px"},
          {label:"Plus or minus sign", value:"Proxima Nova Bold, 24 px or 28 px, #666666"},
          {label:"Variable q", value:"Follow the Math variable label style.", figure:"physics-2025-p81"},
        ],
        images:[
          {src:"source-images/physics/2025/image12.png", caption:"Physics P79 · Positive and negative point charges"},
          {src:"source-images/physics/2025/image19.png", caption:"Physics P81 · Point charge and q label"},
        ],
        banners:[
          {type:"note", text:"Choose the circle size for the available space and detail. P79 shows the circle styling. Use P81 for the field direction around a negative charge."},
        ]
      },
      {
        id:"continuous-charge",
        label:"Continuous Charge — Surface Labels",
        specs:[
          {label:"Representation", value:"Place charge signs directly on the surface, without enclosing circles."},
          {label:"Label size", value:"18 px or 22 px, depending on the number of charges"},
          {label:"Typeface", value:"Proxima Nova Bold"},
          {label:"Label color", value:"#666666", type:"color"},
        ]
      },
      {
        id:"generic-charge",
        label:"Generic Charge Symbol",
        specs:[
          {label:"Circle diameter", value:"10 px", figure:"physics-2025-p93"},
          {label:"Fill", value:"#666666", type:"color"},
          {label:"Stroke", value:"#000000 · 2 px", type:"color-inline", colorValue:"#000000"},
        ],
        images:[
          {src:"source-images/physics/2025/image17.png", caption:"Physics P93 · Generic charge symbol"},
        ]
      }
    ]},
    { id:"phys-fields", label:"Electric & Magnetic Fields", elements:[
      {
        id:"field-lines",
        label:"Electric & Magnetic Field Lines",
        specs:[
          {label:"Electric field arrow color", value:"#AACDE2", type:"color", figure:"physics-2025-p98"},
          {label:"Magnetic field arrow color", value:"#E5AAAA", type:"color", figure:"physics-2025-p98"},
          {label:"Field arrow stroke", value:"2 px"},
          {label:"Arrowhead", value:"Arrow 7 at 60% scale"},
          {label:"Electric field direction", value:"Away from positive charge and toward negative charge.", figure:"physics-2025-p81"},
        ],
        images:[
          {src:"source-images/physics/2025/image8.png", caption:"Physics P98 · Electric and magnetic field arrows"},
          {src:"source-images/physics/2025/image10.png", caption:"Physics P99 · Electric field through a surface"},
        ],
        banners:[
          {type:"note", text:"The magenta vector in the surface example is the surface normal. The pale blue arrows represent the electric field."},
        ]
      },
      {
        id:"equipotential",
        label:"Equipotential Lines & Surface",
        specs:[
          {label:"Line and surface outline stroke", value:"2 pt", figure:"physics-2025-p106"},
          {label:"Dash length", value:"6 pt", figure:"physics-2025-p106"},
          {label:"Outline color", value:"#5EBF43", type:"color", figure:"physics-2025-p110"},
          {label:"Cap / join / alignment", value:"Round cap, round join, center-aligned stroke", figure:"physics-2025-p106"},
          {label:"Surface fill", value:"#CDEFC7", type:"color", figure:"physics-2025-p113"},
          {label:"Surface opacity", value:"100%", figure:"physics-2025-p113"},
        ],
        images:[
          {src:"source-images/physics/2025/image1.png", caption:"Physics P110 · Equipotential lines around a point charge"},
          {src:"source-images/physics/2025/image2.png", caption:"Physics P113 · Equipotential surface in a field"},
        ],
        archivalImages:[
          {src:"source-images/physics/2025/image20.png", caption:"Physics P106 · Illustrator settings for equipotential lines"},
        ]
      }
    ]},
    { id:"phys-optics", label:"Optical Instruments", elements:[
      {
        id:"optics-spec",
        label:"Lens, Light Ray & Mirror Specs",
        specs:[
          {label:"Lens, glass, water or prism fill", value:"#04ADEF · 20% opacity", type:"color-inline", colorValue:"#04ADEF"},
          {label:"Medium outline", value:"#04ADEF · 2 px, round cap", type:"color-inline", colorValue:"#04ADEF"},
          {label:"Light ray arrows", value:"#FF6666 · 2 px, Arrow 7, 60%", type:"color-inline", colorValue:"#FF6666", figure:"physics-2025-p153"},
          {label:"Object, image and reflection arrows", value:"#3A3AA5 · 3 px, Arrow 7, 50%", type:"color-inline", colorValue:"#3A3AA5", figure:"physics-2025-p155"},
          {label:"Principal and vertical lens axes", value:"#BBBBBB · 2 px dashed line, 6 px gap", type:"color-inline", colorValue:"#BBBBBB", figure:"physics-2025-p155"},
          {label:"Layer order", value:"Place the red light rays below the lens layer.", figure:"physics-2025-p155"},
          {label:"Mirror hatching", value:"Use the mirror-right and mirror-left brushes in the optical instruments file.", figure:"physics-2025-p159"},
        ],
        images:[
          {src:"source-images/physics/2025/image9.png", caption:"Physics P153 · Optical light ray diagram with mirrors"},
          {src:"source-images/physics/2025/image14.png", caption:"Physics P155 · Lens ray diagram with object and image"},
          {src:"source-images/physics/2025/image15.png", caption:"Physics P159 · Concave and convex mirror hatching"},
          {src:"source-images/physics/2025/image11.png", caption:"Physics P162 · Plane mirror hatching"},
        ],
        banners:[
          {type:"note", text:"The optics resource contains the lens brush and eye icon. See both the curved and plane mirror examples for hatching direction."},
        ]
      }
    ]},
    { id:"phys-circuit", label:"Circuit Symbols", elements:[
      {
        id:"circuit-symbols",
        label:"Circuit Symbols and Dielectric References",
        specs:[
          {label:"Circuit symbols", value:"Use the named assets in the maintained Illustrator file in Physics Resources."},
          {label:"Switch and key", value:"Use the same icon for both names, as specified in the source comment at P120."},
          {label:"Single and multiple dielectrics (K)", value:"A source comment points to these examples in the circuit Illustrator file. The Word export supplies no dimensions or embedded circuit figure."},
        ]
      }
    ]},
    { id:"phys-texture", label:"Physics Texture Library", elements:[
      {
        id:"texture-library",
        label:"Physics Texture Library",
        specs:[
          {label:"Wood", value:"Use the wood-grain reference.", figure:"physics-2025-p171"},
          {label:"Water", value:"Light cyan with horizontal dashed lines in the texture example.", figure:"physics-2025-p171"},
          {label:"Oil or other-density liquid", value:"Pale yellow in the reference.", figure:"physics-2025-p171"},
          {label:"Metal", value:"Silver-gray for steel or aluminium in this reference.", figure:"physics-2025-p171"},
          {label:"Copper or bronze", value:"Warm copper fill and darker border in the reference.", figure:"physics-2025-p171"},
          {label:"Spring", value:"Use the coil brush shown in the source.", figure:"physics-2025-p171"},
        ],
        images:[
          {src:"source-images/physics/2025/image18.png", caption:"Physics P171 · Physics texture library examples"},
        ],
        banners:[
          {type:"note", text:"These are visual references. The source figure does not print numeric texture swatches."},
        ]
      }
    ]},
    { id:"phys-diagram-specs", label:"Physics Diagram Specs", elements:[
      {
        id:"real-life-objects",
        label:"Real-Life Object Outlines",
        specs:[
          {label:"Outline color", value:"#000000", type:"color", figure:"physics-2025-p178"},
          {label:"Use", value:"Outline real-life objects in black to distinguish them from the rest of the diagram."},
        ],
        images:[
          {src:"source-images/physics/2025/image21.png", caption:"Physics P178 · Real-life outline on a container"},
          {src:"source-images/physics/2025/image16.png", caption:"Physics P181 · Object outlines in a mechanics diagram"},
        ]
      }
    ]}
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
    { id:"chem-fig-guidelines", label:"Chemistry Figure Guidelines", elements:[
      {
        id:"chem-fig-doc",
        label:"Chemistry Figure Guidelines",
        specs:[
          {label:"Artwork", value:"Generate the chemical illustration with AI using the appropriate structural-formula or rendered-model references."},
          {label:"Text and labels", value:"Set headings, captions, element labels, charges and locants manually. Check font, size, alignment and spacing in the finished figure."},
        ],
        banners:[
          {type:"note", text:"<a href=\"chemistry-review/\">Read the Chemistry source review</a> for the original Word passages, figures and reviewed decisions."},
        ]
      }
    ]},
    { id:"chem-general", label:"General Guidelines", elements:[
      {
        id:"chem-image-size",
        label:"Image Size & Scaling",
        specs:[
          {label:"Canvas", value:"Enlarge the canvas to make room for new elements. Retain the original size of the supplied SVG structure and benzene ring."},
          {label:"Structure scaling", value:"Scale uniformly if a size change is necessary. Review the change with the team before applying it across multiple figures."},
        ]
      }
    ]},
    { id:"chem-atoms", label:"Atom Sizing", elements:[
      {
        id:"atom-base",
        label:"Rendered Atoms — Size, Outline and Lighting",
        specs:[
          {label:"Base atom", value:"20 px circle with a 2 px outline", figure:"chemistry-master-p10"},
          {label:"Outline thickness", value:"2 px through 200 px atom size. Above 200 px, increase by 1 px per 100 px of atom size."},
          {label:"Highlight and shade position", value:"70% of atom size", figure:"chemistry-master-p14"},
          {label:"Highlight and shade width", value:"30% of atom diameter", figure:"chemistry-master-p19"},
          {label:"Highlight", value:"White at 40% opacity in most cases", figure:"chemistry-master-p25"},
          {label:"Light-colored atom example", value:"The pale atom in the reference shows a 100% opacity highlight.", figure:"chemistry-master-p25"},
          {label:"Shade", value:"20% darker than the atom color", figure:"chemistry-master-p25"},
          {label:"Light direction", value:"Top left, with a 45° rotation", figure:"chemistry-master-p33"},
          {label:"Atom fill colors", value:"Use the downloadable CK-12 periodic-table vector in Chemistry Resources. It contains individual swatches and shared group colors."},
          {label:"When scaling", value:"Scale highlight and shade proportionally to the atom. Retain the outline thickness specified for that size."},
        ],
        banners:[{type:"info", text:'<a href="assets/chemistry/periodic-table-simplified.ai" download>Download periodic-table element colors (.ai)</a>'}],
        images:[
          {src:"source-images/chemistry/master/image15.png", caption:"Master P10 · Base atom diameter and outline"},
          {src:"source-images/chemistry/master/image4.png", caption:"Master P14 · Highlight and shade position"},
          {src:"source-images/chemistry/master/image11.png", caption:"Master P19 · Highlight and shade width"},
          {src:"source-images/chemistry/master/image3.png", caption:"Master P25 · Highlight opacity and shade brightness"},
          {src:"source-images/chemistry/master/image12.png", caption:"Master P33 · Highlight rotation"},
        ],
        archivalImages:[
          {src:"source-images/chemistry/master/image10.png", caption:"Master P40 · Convert highlight and shadow strokes to outlines"},
          {src:"source-images/chemistry/master/image2.png", caption:"Master P45 · Illustrator scaling settings"},
        ]
      },
      {
        id:"atom-scaling",
        label:"Relative Atom Sizing — Formula and Examples",
        specs:[
          {label:"Atomic radius input", value:"Use column D of the linked CK-12 Atomic Radius Sheet."},
          {label:"Base", value:"Use a drawn diameter of 20 px for the smallest atom in the comparison."},
          {label:"Relative size", value:"Drawn diameter = reference diameter × target atomic radius ÷ reference atomic radius. Round the worked result to whole pixels."},
          {label:"CaCl₂ example", value:"With Cl at 20 px and radii Ca 174, Cl 100, draw Ca at approximately 35 px."},
          {label:"CaO example using the same Ca", value:"Retain Ca at 35 px. Oxygen is approximately 13 px using 35 × 64 ÷ 174."},
          {label:"Several molecules in one artwork", value:"Use one common scale across the artwork. Set the smallest atomic radius in the group to 20 px."},
        ],
        banners:[
          {type:"note", text:"<a href=\"?spec=atom-size-examples\">Open the worked atom-size examples</a> for the measured sizes printed in the source figure."},
        ]
      },
      {
        id:"atom-size-examples",
        label:"Worked Atom Sizes by Formula",
        specs:[
          {label:"Na₂CO₃ · sodium carbonate", value:"O 64 → 20 px, C 75 → 23 px, Na 160 → 50 px", figure:"chemistry-master-p85"},
          {label:"NaHCO₃ · sodium bicarbonate", value:"H 32 → 20 px, C 75 → 47 px, O 64 → 40 px, Na 160 → 100 px", figure:"chemistry-master-p85"},
          {label:"AlCl₃ · aluminium chloride", value:"Cl 100 → 20 px, Al 124 → 25 px", figure:"chemistry-master-p85"},
          {label:"KCl · potassium chloride", value:"Cl 100 → 20 px, K 200 → 40 px", figure:"chemistry-master-p85"},
          {label:"Ca(OH)₂ · calcium hydroxide", value:"H 32 → 20 px, O 64 → 40 px, Ca 160 → 100 px", figure:"chemistry-master-p85"},
          {label:"BaSO₄ · barium sulfate", value:"O 64 → 20 px, S 104 → 33 px, Ba 206 → 64 px", figure:"chemistry-master-p85"},
          {label:"NH₃ · ammonia", value:"H 32 → 20 px, N 71 → 44 px", figure:"chemistry-master-p85"},
          {label:"H₂O · water", value:"H 32 → 20 px, O 64 → 40 px", figure:"chemistry-master-p85"},
          {label:"CaF₂ · calcium fluoride", value:"F 60 → 20 px, Ca 174 → 58 px", figure:"chemistry-master-p85"},
          {label:"H₂SO₄ · sulfuric acid", value:"H 32 → 20 px, S 104 → 65 px, O 64 → 40 px", figure:"chemistry-master-p85"},
        ],
        images:[
          {src:"source-images/chemistry/master/image17.png", caption:"Master P85 · Historical sizing chart; use the corrected Ca(OH)₂ value and diameter rule above"},
        ],
        banners:[
          {type:"note", text:"Read each pair as source atomic radius → drawn diameter in pixels. For Ca(OH)₂, 20 × 160 ÷ 32 = 100 px. The historical screenshot labels the output as a radius and prints 109 px for Ca in this example."},
        ]
      },
      {
        id:"subatomic",
        label:"Subatomic Particle References",
        specs:[
          {label:"Particles named in the master", value:"Electron, proton, neutron and positron. The Word export lists these names without a particle-specific illustration, diameter or palette."},
        ]
      }
    ]},
    { id:"chem-molecular", label:"Molecular Representations", elements:[
      {
        id:"ball-stick-small",
        label:"Ball & Stick — 20 px Atoms",
        specs:[
          {label:"Inside stroke", value:"2 px, #999999", type:"color-inline", colorValue:"#999999"},
          {label:"Outside stroke", value:"2 px, #333333", type:"color-inline", colorValue:"#333333"},
          {label:"Stick height", value:"6 px", figure:"chemistry-master-p118"},
          {label:"Cap and corner", value:"Round"},
          {label:"Stroke alignment", value:"Center"},
          {label:"Double bond gap", value:"5 px between the two sticks in the illustrated example", figure:"chemistry-master-p141"},
        ],
        images:[
          {src:"source-images/chemistry/master/image19.png", caption:"Master P118 · Single bond with 20 px atoms"},
          {src:"source-images/chemistry/master/image14.png", caption:"Master P141 · Double bond spacing for smaller atoms"},
        ],
        archivalImages:[
          {src:"source-images/chemistry/master/image9.png", caption:"Master P103 · Ball-and-stick bond first stroke"},
          {src:"source-images/chemistry/master/image6.png", caption:"Master P106 · Ball-and-stick bond second stroke"},
          {src:"source-images/chemistry/master/image16.png", caption:"Master P111 · Rectangle method for a bond"},
        ]
      },
      {
        id:"ball-stick-large",
        label:"Ball & Stick — 250 px Atoms",
        specs:[
          {label:"Inside stroke", value:"3 px, #999999", type:"color-inline", colorValue:"#999999"},
          {label:"Outside stroke", value:"3 px, #333333", type:"color-inline", colorValue:"#333333"},
          {label:"Stick height", value:"9 px", figure:"chemistry-master-p129"},
          {label:"Cap and corner", value:"Round"},
          {label:"Stroke alignment", value:"Center"},
          {label:"Double bond gap", value:"10 px between the two sticks in the illustrated example", figure:"chemistry-master-p146"},
          {label:"Bond stroke by atom size", value:"2 px through 200 px atom size. Above 200 px, increase by 1 px per 100 px; the 250 px reference uses 3 px."},
        ],
        images:[
          {src:"source-images/chemistry/master/image8.png", caption:"Master P129 · Single bond with 250 px atoms"},
          {src:"source-images/chemistry/master/image18.png", caption:"Master P146 · Double bond spacing for larger atoms"},
        ]
      },
      {
        id:"cubic-crystal",
        label:"Cubic Crystal Structure",
        specs:[
          {label:"Bond junction", value:"When a bond appears on top of an atom, place the junction halfway along the atom’s radius.", figure:"chemistry-master-p153"},
        ],
        images:[
          {src:"source-images/chemistry/master/image7.png", caption:"Master P153 · Cubic crystal structure and bond junctions"},
        ]
      },
      {
        id:"space-filling",
        label:"Space-Filling Model",
        specs:[
          {label:"Atom arrangement", value:"Overlap the atom circles using the relative sizes and geometry of the depicted molecule."},
          {label:"Water example", value:"The accepted water example shows a 104.5° angle. Compare the positions of the two hydrogen atoms in the accepted and rejected references.", figure:"chemistry-master-p160"},
        ],
        images:[
          {src:"source-images/chemistry/master/image5.png", caption:"Master P160 · Correct space-filling model example"},
          {src:"source-images/chemistry/master/image13.png", caption:"Master P162 · Incorrect space-filling model example"},
        ]
      },
      {
        id:"lewis-dot-chem",
        label:"Lewis Dots — Structural Formula",
        specs:[
          {label:"Dot diameter", value:"4 px", figure:"chemistry-figures-p65"},
          {label:"Gap between paired dots", value:"3 px", figure:"chemistry-figures-p65"},
          {label:"Dot color", value:"#000000", type:"color"},
        ],
        images:[
          {src:"source-images/chemistry/figures/image4.png", caption:"Figure guidelines P65 · Lewis dot spacing in a structural formula"},
        ],
        banners:[
          {type:"note", text:"Use this rule for dots alongside element letters in a structural formula. <a href=\"?spec=lewis-dot-model\">See Lewis dots on a rendered molecular model</a>."},
        ]
      },
      {
        id:"lewis-dot-model",
        label:"Lewis Dots — Rendered Molecular Model",
        specs:[
          {label:"Dot diameter", value:"8 px", figure:"chemistry-master-p165"},
          {label:"Gap between paired dots", value:"5 px", figure:"chemistry-master-p165"},
          {label:"Clearance from dot to atom", value:"5 px", figure:"chemistry-master-p165"},
          {label:"Dot color", value:"#000000", type:"color"},
        ],
        images:[
          {src:"source-images/chemistry/master/image1.png", caption:"Master P165 · Lewis dot spacing on a molecular model"},
        ]
      }
    ]},
    { id:"chem-bonds", label:"Bonds", elements:[
      {
        id:"wedge-bond",
        label:"Wedge / Stereochemical Bond",
        specs:[
          {label:"Solid wedge color", value:"#000000", type:"color"},
          {label:"Solid and dashed wedge length", value:"20 px", figure:"chemistry-figures-p124"},
          {label:"Narrow tip width", value:"1 px", figure:"chemistry-figures-p124"},
          {label:"Wide base width", value:"7 px", figure:"chemistry-figures-p124"},
          {label:"Dash stroke", value:"1 px", figure:"chemistry-figures-p124"},
        ],
        images:[
          {src:"source-images/chemistry/figures/image14.png", caption:"Figure guidelines P124 · Solid and dashed wedge dimensions"},
          {src:"source-images/chemistry/figures/image18.png", caption:"Figure guidelines P126 · Stereochemical bonds in a structure"},
        ]
      },
      {
        id:"intramolecular",
        label:"Dashed Intramolecular Bond",
        specs:[
          {label:"Dashed stroke weight", value:"1 pt", figure:"chemistry-figures-p107"},
          {label:"Stroke color", value:"#000000", type:"color"},
          {label:"Dash length", value:"6 pt", figure:"chemistry-figures-p107"},
          {label:"Cap and corner", value:"Round", figure:"chemistry-figures-p107"},
          {label:"Stroke alignment", value:"Center", figure:"chemistry-figures-p107"},
        ],
        images:[
          {src:"source-images/chemistry/figures/image17.png", caption:"Figure guidelines P110 · Bond placement example. The working stroke weight is 1 pt."},
        ],
        archivalImages:[
          {src:"source-images/chemistry/figures/image11.png", caption:"Figure guidelines P107 · Intramolecular bond Illustrator settings"},
        ]
      },
      {
        id:"carbon-chain",
        label:"Carbon Chain — Dashed Enclosure",
        specs:[
          {label:"Dashed stroke weight", value:"1 pt", figure:"chemistry-figures-p115"},
          {label:"Stroke color", value:"#000000", type:"color"},
          {label:"Dash length", value:"4 pt", figure:"chemistry-figures-p115"},
          {label:"Clearance between structure and enclosure", value:"5 px", figure:"chemistry-figures-p116"},
          {label:"Cap and corner", value:"Round", figure:"chemistry-figures-p115"},
          {label:"Stroke alignment", value:"Center", figure:"chemistry-figures-p115"},
        ],
        images:[
          {src:"source-images/chemistry/figures/image12.png", caption:"Figure guidelines P116 · Carbon chain dashed enclosure clearance"},
          {src:"source-images/chemistry/figures/image16.png", caption:"Figure guidelines P118 · Carbon chain enclosure example"},
        ],
        archivalImages:[
          {src:"source-images/chemistry/figures/image5.png", caption:"Figure guidelines P115 · Carbon chain Illustrator settings"},
        ]
      }
    ]},
    { id:"chem-equations", label:"Equations & Arrows", elements:[
      {
        id:"chem-equation-font",
        label:"Equation Heading / Caption",
        specs:[
          {label:"Default typeface", value:"CMU Serif Roman"},
          {label:"Default caption size", value:"16 pt"},
          {label:"SME-requested variant", value:"Proxima Nova Regular, 16 pt, #000000", figure:"chemistry-figures-p14"},
          {label:"Caption clearance", value:"20–25 px below the structure in the illustrated example", figure:"chemistry-figures-p14"},
        ],
        images:[
          {src:"source-images/chemistry/figures/image9.png", caption:"Figure guidelines P14 · Equation caption and spacing"},
        ],
        banners:[
          {type:"note", text:"Apply the Proxima Nova variant when requested by the subject-matter expert. Set the caption manually."},
        ]
      },
      {
        id:"chem-names",
        label:"Chemical Names & Reaction Conditions",
        specs:[
          {label:"Typeface", value:"CMU Serif Roman (LaTeX style)"},
          {label:"Chemical name below structure", value:"14 pt", figure:"chemistry-figures-p35"},
          {label:"Conditions above or below arrow", value:"14 pt", figure:"chemistry-figures-p35"},
        ],
        images:[
          {src:"source-images/chemistry/figures/image13.png", caption:"Figure guidelines P35 · Chemical names and conditions around reaction arrows"},
          {src:"source-images/chemistry/figures/image7.png", caption:"Figure guidelines P40 · Long chemical equation"},
        ]
      },
      {
        id:"equation-arrows",
        label:"Equation Arrows",
        specs:[
          {label:"Arrow form", value:"Match the supplied reaction artwork. The reference shows a one-way arrow and a double-ended arrow.", figure:"chemistry-figures-p45"},
        ],
        images:[
          {src:"source-images/chemistry/figures/image20.png", caption:"Figure guidelines P45 · One-way and two-sided equation arrows"},
        ],
        banners:[
          {type:"note", text:"Keep arrow direction and chemical meaning consistent with the supplied equation."},
        ]
      },
      {
        id:"reversible-reaction",
        label:"Reversible Reaction Arrows",
        specs:[
          {label:"Typeface", value:"Latin Modern Roman CK12"},
          {label:"Glyph size", value:"22 px", figure:"chemistry-figures-p52"},
          {label:"Color", value:"#000000", type:"color"},
        ],
        images:[
          {src:"source-images/chemistry/figures/image8.png", caption:"Figure guidelines P52 · Reversible reaction arrow"},
        ]
      },
      {
        id:"rotation-arrows",
        label:"Single / Double Rotation Arrows",
        specs:[
          {label:"Stroke", value:"1 px"},
          {label:"Arrowhead", value:"Arrow 7"},
          {label:"Arrowhead scale", value:"50%"},
        ],
        images:[
          {src:"source-images/chemistry/figures/image10.png", caption:"Figure guidelines P58 · Rotation arrow"},
        ]
      }
    ]},
    { id:"chem-charges", label:"Charges & Symbols", elements:[
      {
        id:"chem-charge",
        label:"Positive & Negative Charge Symbols",
        specs:[
          {label:"Charge circle diameter", value:"8 px", figure:"chemistry-figures-p78"},
          {label:"Charge circle stroke", value:"1 px", figure:"chemistry-figures-p78"},
          {label:"Plus or minus sign size", value:"10 pt", figure:"chemistry-figures-p78"},
        ],
        images:[
          {src:"source-images/chemistry/figures/image2.png", caption:"Figure guidelines P78 · Positive and negative charge glyphs"},
          {src:"source-images/chemistry/figures/image15.png", caption:"Figure guidelines P82 · Charge glyph on a structure"},
        ],
        banners:[
          {type:"note", text:"Use the charge glyphs from the CK-12 Charges file in Resources."},
        ]
      },
      {
        id:"long-brackets",
        label:"Long Brackets",
        specs:[
          {label:"Bracket height", value:"Adjust to the height of the structure."},
          {label:"Horizontal arm width", value:"10 px", figure:"chemistry-figures-p72"},
          {label:"Stroke", value:"1 px", figure:"chemistry-figures-p72"},
        ],
        images:[
          {src:"source-images/chemistry/figures/image1.png", caption:"Figure guidelines P72 · Long bracket width and stroke"},
        ]
      }
    ]},
    { id:"chem-misc", label:"Other Elements", elements:[
      {
        id:"benzene-ring",
        label:"Benzene Ring Locants",
        specs:[
          {label:"Typeface", value:"Proxima Nova Regular"},
          {label:"Size", value:"12 pt", figure:"chemistry-figures-p101"},
          {label:"Color", value:"#000000", type:"color"},
          {label:"Placement", value:"Offset the numbers 1.5 px from the ring at the carbon positions.", figure:"chemistry-figures-p100"},
          {label:"Multiple locants", value:"Center-align related numbers horizontally and vertically.", figure:"chemistry-figures-p100"},
        ],
        images:[
          {src:"source-images/chemistry/figures/image6.png", caption:"Figure guidelines P100 · Benzene ring numbering offset"},
          {src:"source-images/chemistry/figures/image19.png", caption:"Figure guidelines P101 · Benzene ring locants on a substituted ring"},
        ]
      },
      {
        id:"locants",
        label:"Locants",
        specs:[
          {label:"Typeface", value:"Proxima Nova Regular"},
          {label:"Size", value:"12 pt", figure:"chemistry-figures-p91"},
          {label:"Color", value:"#000000", type:"color"},
        ],
        images:[
          {src:"source-images/chemistry/figures/image3.png", caption:"Figure guidelines P91 · Locant number placement"},
        ]
      }
    ]}
  ]
}

]}; /* end DATA */
