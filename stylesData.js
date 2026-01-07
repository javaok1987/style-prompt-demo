const stylesData = [
        {
                "name": "Style 01 💼 顧問風 McKinsey Style",
                "prompt": "Create a McKinsey-style infographic about '5 Steps of Digital Transformation'.\nStyle specifications:\n- Clean white background\n- Sophisticated blue-and-gray color palette\n- Ample whitespace\n- Strict grid alignment\n- Orthogonal arrows (90-degree angles only)\n- Bold sans-serif typography\n- Professional business aesthetic.\nLayout: Horizontal flow chart.\nAspect ratio: 9:16 vertical"
        },
        {
                "name": "Style 02 💼 企業風 Corporate Memphis",
                "prompt": "Create a Corporate Memphis flat design infographic about \"Remote Team Collaboration Tips\".\nStyle specifications:\n- Abstract human figures with tiny heads and long limbs\n- Non-realistic skin tones (blue, purple, coral)\n- Geometric shapes and solid color blocks\n- No outlines, flat design\n- Joyful and modern mood.\nAspect ratio: 9:16 vertical"
        },
        {
                "name": "Style 03 💼 極簡風 Minimalist",
                "prompt": "Create a Minimalist infographic about '3 Principles of Good Design'.\nStyle specifications:\n- Generous whitespace as main element\n- Thin line icons\n- Monochromatic or two-color palette\n- Modern sans-serif typography as design element\n- Maximum simplicity and sophistication.\nAspect ratio: 9:16 vertical"
        },
        {
                "name": "Style 04 💼 商業簡報風 Professional Slide",
                "prompt": "Create a Professional business slide infographic about \"Q3 Performance Summary\".\nStyle specifications:\n- Clean corporate layout\n- Data visualization with bar/pie charts\n- Professional color scheme (navy, gray, accent blue)\n- Clear information\n- Clear information hierarchy\n- Executive summary format.\nAspect ratio: 9:16 vertical"
        },
        {
                "name": "Style 05 💼 顧問圖表風 Consulting Framework",
                "prompt": "Create a Consulting framework infographic about 'Competitive Strategy Matrix'.\nStyle specifications:\n- 2x2 matrix layout\n- BCG/McKinsey consulting style\n- Strategic diagram with quadrants\n- Clean labels and axis titles\n- Professional business aesthetic.\nAspect ratio: 9:16 vertical"
        },
        {
                "name": "Style 06 🎨 水彩風 Watercolor",
                "prompt": "Create a Storybook Watercolor infographic about 'Life Cycle of a Butterfly'.\nStyle specifications:\n- Soft painterly edges\n- Gentle ink wash outlines\n- Pastel color palette\n- Cold-press watercolor paper texture visible\n- Warm and healing atmosphere\n- Nature-inspired organic shapes\nAspect ratio: 9:16 vertical"
        },
        {
                "name": "Style 07 🎨 等距風 Isometric 3D",
                "prompt": "Create an Isometric 3D infographic about ‘How Cloud Computing Works’.\nStyle specifications:\n- 30-degree isometric perspective\n- Stacked cubic/geometric shapes\n- Clear shadow layers for depth\n- Video game map aesthetic\n- Tech-forward modern colors\nAspect ratio: 9:16 vertical"
        },
        {
                "name": "Style 08 🎨 扁平風 Flat Vector",
                "prompt": "Create a Flat Vector illustration infographic about \"How Solar Energy Works\".\nStyle specifications:\n- Pure solid color fills without gradients\n- Simplified geometric shapes\n- Clear bold outlines\n- High contrast colors\n- Educational textbook style\nAspect ratio: 9:16 vertical"
        },
        {
                "name": "Style 09 🎨 可愛風 Kawaii",
                "prompt": "Create a Kawaii cute vector infographic about \"Daily Hydration Reminder\".\nStyle specifications:\n- Rounded edges and shapes\n- Pastel color palette\n- Cute expressive faces on objects\n- Simplified adorable characters\n- Warm and friendly mood\nAspect ratio: 9:16 vertical"
        },
        {
                "name": "Style 10 🎨 手繪風 Hand-drawn Sketch",
                "prompt": "Create a Hand-drawn sketch infographic about \"Brainstorming Techniques\".\nStyle specifications:\n- Pencil line texture\n- Organic irregular shapes\n- Rough sketch edges\n- Notebook paper style\n- Casual and approachable mood\nAspect ratio: 9:16 vertical"
        },
        {
                "name": "Style 11 🎨 剪紙風 Paper Cutout",
                "prompt": "Create a Paper Cutout style infographic about 'Underwater Ocean Adventure'.\nStyle specifications:\n- Layered construction paper effect\n- Visible scissor-cut edges\n- Drop shadows between layers\n- Collage aesthetic\n- Colorful and playful.\nAspect ratio: 9:16 vertical"
        },
        {
                "name": "Style 12 🎮 動漫風 Anime",
                "prompt": "Create an Anime style infographic about '5 Tips for Learning a New Language'.\nStyle specifications:\n- Japanese anime art style\n- Expressive characters with large eyes\n- Dynamic action lines\n- Bold black outlines\n- Vibrant contrasting colors\n- Manga panel composition elements.\nAspect ratio: 9:16 vertical"
        },
        {
                "name": "Style 13 🎮 漫畫風 Comic Book",
                "prompt": "Create a Comic Book graphic novel style infographic about 'History of the Internet Timeline'.\nStyle specifications:\n- Bold thick black outlines\n- Flat colors with halftone dot texture\n- Dynamic panel framing\n- Speech bubbles for key points\n- High contrast dramatic composition.\nAspect ratio: 9:16 vertical"
        },
        {
                "name": "Style 14 🎮 像素風 Pixel Art",
                "prompt": "Create a 16-bit Pixel Art infographic about 'Game Development Process'.\nStyle specifications:\n- Limited retro color palette\n- Dithering for shadows and gradients\n- Distinct grid-based square pixel structure\n- 1990s console game screenshot aesthetic\n- Clear readable pixel typography.\nAspect ratio: 9:16 vertical"
        },
        {
                "name": "Style 15 🎮 黏土風 Claymation",
                "prompt": "Create a Claymation plasticine style infographic about 'Healthy Breakfast Guide'.\nStyle specifications:\n- 3D clay texture\n- Visible fingerprints on surface\n- Soft plasticine lighting\n- Stop-motion animation aesthetic\n- Warm and tactile feel.\nAspect ratio: 9:16 vertical"
        },
        {
                "name": "Style 16 🎮 摺紙風 Origami",
                "prompt": "Create an Origami paper folding style infographic about 'Introduction to Geometry'.\nStyle specifications:\n- Paper folding geometric shapes\n- Sharp clean edges\n- Structural concept visualization\n- Minimal color palette\n- Mathematical elegance.\nAspect ratio: 9:16 vertical"
        },
        {
                "name": "Style 17 🎮 塗鴉風 Graffiti",
                "prompt": "Create a Graffiti street art style infographic about 'Beginner's Guide to Street Dance'.\nStyle specifications:\n- Spray paint texture\n- Bold contrasting colors\n- Urban street art aesthetic\n- Energetic and rebellious mood\n- Dynamic typography.\nAspect ratio: 9:16 vertical"
        },
        {
                "name": "Style 18 📜 復古海報風 Vintage Poster / WPA",
                "prompt": "Create a WPA National Park vintage poster style infographic about 'Benefits of Outdoor Activities'.\nStyle specifications:\n- Flat vector illustration\n- Limited color palette (burnt orange, sage green, navy)\n- Screen print texture\n- Bold vintage typography\n- Hazy atmospheric perspective\n- Heroic and timeless mood.\nAspect ratio: 9:16 vertical"
        },
        {
                "name": "Style 19 📜 黑板風 Chalkboard",
                "prompt": "Create a Chalkboard art infographic about 'How to Brew Perfect Coffee'.\nStyle specifications:\n- Deep green or black chalkboard background\n- White chalk line drawings\n- Hand-drawn typography style\n- Classic school classroom feel\n- Slight chalk smudge texture.\nAspect ratio: 9:16 vertical"
        },
        {
                "name": "Style 20 📜 底片風 Analog Film Grain",
                "prompt": "Create an Analog Film photography style infographic about 'Travel Photography Tips'.\nStyle specifications:\n- 35mm film grain texture\n- Slight light leak effect\n- Vintage date stamp in corner\n- Muted Kodak Portra color palette\n- Nostalgic and authentic mood\n- Soft focus aesthetic.\nAspect ratio: 9:16 vertical"
        },
        {
                "name": "Style 21 📜 普普風 Pop Art",
                "prompt": "Create a Pop Art infographic about 'Evolution of Pop Culture'.\nStyle specifications:\n- Warhol/Lichtenstein style\n- High contrast bold colors\n- Halftone dot patterns\n- Energetic and attention-grabbing\n- Comic-inspired aesthetic.\nAspect ratio: 9:16 vertical"
        },
        {
                "name": "Style 22 📜 達文西風 Da Vinci Notebook",
                "prompt": "Create a Da Vinci notebook Renaissance style infographic about \"Human Muscle Anatomy\".\nStyle specifications:\n- Renaissance sketch style\n- Sepia tones on parchment texture\n- Anatomical drawing precision\n- Handwritten notes aesthetic\n- Scientific illustration feel\nAspect ratio: 9:16 vertical"
        },
        {
                "name": "Style 23 🔬 藍圖風 Blueprint",
                "prompt": "Create a Technical Blueprint style infographic about \"Smartphone Internal Structure\".\nStyle specifications:\n- Blue background with white line drawings\n- Architectural grid pattern\n- Dimension annotations and callouts\n- Engineering precision aesthetic\n- Technical drawing style\nAspect ratio: 9:16 vertical"
        },
        {
                "name": "Style 24 🔬 剖面圖風 Cross-section",
                "prompt": "Create a Cross-section diagram infographic about \"How a V6 Engine Works\".\n\nStyle specifications:\n- Cutaway view showing internal structure\n- Labeled parts with pointer lines\n- Clean white background\n- Technical illustration style\n- Accurate mechanical positioning\n\nAspect ratio: 9:16 vertical"
        },
        {
                "name": "Style 25 🔬 線框圖風 Wireframe UI",
                "prompt": "Create a UI Wireframe style infographic about 'App Design Process'.\n\nStyle specifications:\n- App blueprint wireframe aesthetic\n- Gray-scale color scheme\n- Logic flow visualization\n- Web/mobile design style\n- Clean structured layout\n\nAspect ratio: 9:16 vertical"
        },
        {
                "name": "Style 26 🔬 地鐵圖風 Subway Map",
                "prompt": "Create a Subway transit map style infographic about 'Career Development Roadmap'.\n\nStyle specifications:\n- Transit diagram aesthetic\n- Connected nodes as stations\n- Color-coded different lines/paths\n- Journey visualization\n- Clean geometric routes.\n\nAspect ratio: 9:16 vertical"
        },
        {
                "name": "Style 27 ✨ 賽博龐克風 Cyberpunk / Neon",
                "prompt": "Create a Cyberpunk neon style infographic about 'AI Artificial Intelligence Trends'.\n\nStyle specifications:\n- Dark background\n- Bright neon blue and pink accents\n- Glowing light effects\n- Futuristic cyber-noir aesthetic\n- Tech and sci-fi mood.\n\nAspect ratio: 9:16 vertical"
        },
        {
                "name": "Style 28 ✨ 蒸汽龐克風 Steampunk",
                "prompt": "Create a Steampunk style infographic about 'Inventions of the Industrial Revolution'.\n\nStyle specifications:\n- Mechanical gears and cogs\n- Brass and copper metallic textures\n- Victorian era aesthetic\n- Retro-futuristic mood\n- Intricate mechanical details.\n\nAspect ratio: 9:16 vertical"
        },
        {
                "name": "Style 29 ✨ 紙雕風 Paper Quilling",
                "prompt": "Create a Paper Quilling artwork style infographic about 'Beauty of Four Seasons'.\n\nStyle specifications:\n- Intricate paper strip swirl patterns\n- Depth and shadows between layers\n- Elaborate curving lines\n- Colorful paper craft aesthetic\n- Artistic and delicate mood\n\nAspect ratio: 9:16 vertical"
        },
        {
                "name": "Style 30 ✨ 平面攝影風 Flat Lay Photography",
                "prompt": "Create a Flat Lay Photography style infographic about 'Home Organization Tips'.\n\nStyle specifications:\n- Top-down bird's eye view\n- Arranged real objects\n- Clean light background\n- DIY aesthetic\n- Organized and visually pleasing layout\n\nAspect ratio: 9:16 vertical"
        },
        {
                "name": "Style 31 ✨ 玻璃擬態風 Glassmorphism",
                "prompt": "Create a Glassmorphism style infographic about 'Smart Home Control Panel'.\n\nStyle specifications:\n- Frosted glass effect\n- Semi-transparent blur background\n- Soft shadows and highlights\n- Modern UI aesthetic\n- Clean and premium feel.\n\nAspect ratio: 9:16 vertical"
        },
        {
                "name": "Style 32 ✨ 等距小屋風 Isometric Diorama",
                "prompt": "Create a 3D Isometric Diorama style infographic about 'Ideal Workspace Setup'.\n\nStyle specifications:\n- Miniature platform scene\n- Cute polished 3D style\n- Soft pastel colors\n- Tiny detailed models\n- Playful and charming aesthetic.\n\nAspect ratio: 9:16 vertical"
        }
];