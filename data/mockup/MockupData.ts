import { CheckListIcon, HandCraftIcon, HeartCircleIcon, NatureIcon, StarCircleIcon } from "@/assets/Icons";

// Mockup Text
export const LoremText: Record<string, string> = {
    set10: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, modi.",
    set15: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia omnis praesentium qui. Mollitia, ut cum.",
    set20: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error deserunt impedit quibusdam dolorem voluptates hic quod ullam, natus ut quo!",
    set30: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit repellendus soluta nemo reprehenderit vitae facilis corrupti at cupiditate fuga, quibusdam sed placeat est? Dolorum, optio similique aspernatur esse possimus illum?",
    set40: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis hic reiciendis reprehenderit, animi natus quidem quae ex eius fugit perspiciatis aliquid error. Officia laudantium repudiandae necessitatibus voluptates dicta vel, nemo odio exercitationem eaque quis, impedit explicabo totam reiciendis quia accusantium?",
    set50: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam officiis necessitatibus, eaque voluptatibus est aut beatae consequatur amet quod, iure illo saepe similique vitae dignissimos quae consectetur facilis delectus nostrum laborum? Minus doloremque sed in aspernatur accusamus quisquam ullam suscipit. Nobis, veritatis! Veritatis dolorum debitis eligendi dignissimos natus consequatur vitae."
}

// Contact Info
export const AddressText = "116 7, San Klang, San Kamphaeng District, Chiang Mai 50130";
export const SupportEmail = "support@vast-original.com";


// User Data

export const UserData = [
	{
		id: "user001",
		name: "Jimmy Brown",
		image: "/images/users/avatar-001.jpg",
		comment: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,",
	},
	{
		id: "user002",
		name: "Samuel Gadhzi",
		image: "/images/users/avatar-002.jpg",
		comment: "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
	},
	{
		id: "user003",
		name: "Michael Fisher",
		image: "/images/users/avatar-003.jpg",
		comment: "Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. ",
	}
]

// Product Data
export const ProductData = [
	{
		id: "set001",
		name: "Claymation",
		slug: "claymation",
		price: "$29.99",
		detail:
		"Crafted for control without compromise. Our matte clay delivers texture, definition, and all-day hold—without the shine. Perfect for achieving effortless, refined looks that stay put.",
		quality: ["Strong Hold", "Natural Look"],
		inStock: true,
		image: "/images/models/model-001.png",
	},
	{
		id: "set002",
		name: "Glossilla",
		slug: "glossilla",
		price: "$39.99",
		detail:
		"Designed to deliver a sleek, polished finish. Our gloss pomade provides high shine with a flexible hold that won’t weigh your hair down.",
		quality: ["Medium Hold", "High Shine"],
		inStock: false,
		image: "/images/models/model-002.png",
	},
	{
		id: "set003",
		name: "Fiberize",
		slug: "fiberize",
		price: "$35.99",
		detail:
		"Adds thickness and volume to fine hair. Lightweight yet durable, giving you control without stickiness.",
		quality: ["Light Hold", "Matte Finish"],
		inStock: true,
		image: "/images/models/model-003.png",
	},
];

// Blog Tags

export const BlogCategories = [
	"Trips & Tricks", "Classic Looks", "Product Guide", "Haircut & Styling", "Lifestyle", "Haircare", "Essentials"
];
  
  export const BlogPostData = [
	{
		title: "Mastering the Slick Back",
		slug: "mastering-the-slick-back",
		date: "2024-04-01",
		excerpt: "Discover how to achieve the perfect slick back hairstyle that never goes out of style.",
		content: "The slick back is a timeless style that speaks confidence, control, and sophistication. But mastering it requires more than just gel and a comb—it’s about technique, product choice, and understanding your hair type. Start with clean, towel-dried hair that’s slightly damp but not dripping. Apply a water-based pomade or cream that offers medium to strong hold, depending on how sleek or natural you want the result. Use a fine-tooth comb to guide the hair straight back from the forehead, keeping the motion smooth and consistent. The key is not to flatten the top entirely—leave a slight lift at the front to avoid looking too severe. If your hair is wavy or thick, consider blow-drying it into place first using a round brush for added control. Throughout the day, avoid touching it too much—oil from your hands can break down the hold and add unwanted shine. For a softer, more modern take, skip the high-shine finish and opt for a matte or natural gloss. And don’t forget to revisit the neckline—keeping the sides and nape clean enhances the overall sharpness of the look. Whether you're heading to work or a night out, the slick back delivers a polished impression every time, as long as you treat it with the right balance of structure and subtlety.",
		author: "J.K. Turner",
		image: "/images/blog/blog-001.jpg",
		tags: ["Classic Looks", "Haircut & Styling"],
		isFeatured: true,
	},
	{
		title: "Matte vs Shine?",
		slug: "matte-vs-shine",
		date: "2024-03-28",
		excerpt: "Choosing between a matte or shiny hair product? Here's what you need to know.",
		content: "When it comes to styling products, one of the most common dilemmas is choosing between a matte or shiny finish. The decision goes beyond just aesthetics—it can define the overall tone of your look and how your hair interacts with different lighting and settings. Matte products, like clays and pastes, are ideal for achieving a more natural, textured look. They absorb light rather than reflect it, which makes them great for messy, effortless styles or casual everyday wear. They also tend to work better for fine hair by adding volume and grip without the heaviness. On the other hand, shiny products like pomades and glosses offer a polished, classic finish that suits formal events or vintage-inspired styles like the slick back or side part. Shine creates the impression of smoothness and control but may also highlight oiliness or imperfections if overused. Ultimately, the choice comes down to your personal style, the occasion, and how your hair behaves throughout the day. You might even switch it up—matte during the week for a laid-back vibe, and shine on weekends when you want to make a statement. The best way to find your balance is through experimenting with different product textures until you find what feels and looks most like you.",
		author: "J.K. Turner",
		image: "/images/blog/blog-002.jpg",
		tags: ["Product Guide", "Haircare"],
		isFeatured: false,
	},
	{
		title: "Haircut Styles for Face Shapes",
		slug: "haircut-styles-for-face-shapes",
		date: "2024-03-20",
		excerpt: "Not every haircut fits every face. Here's how to match your style to your face shape.",
		content: "Not all haircuts suit every face shape—and choosing the right one can make a huge difference in enhancing your features and overall presence. First, identify your face shape by looking at the proportions of your forehead, cheekbones, jawline, and chin. If you have a round face, go for styles with volume on top and shorter sides to elongate the face. Square faces benefit from softer, textured cuts that round out the strong jawline. Oval faces are the most versatile—you can pull off most styles, from fades to messy crops. Heart-shaped faces work well with medium-length cuts that add volume to the lower part of the head, balancing a broader forehead. If your face is longer, avoid styles that add too much height on top; instead, opt for balanced volume on the sides to visually shorten the length. Remember that layering, fades, and fringe can all play a role in framing your features. Work with a barber or stylist who understands facial structure, and don’t hesitate to bring reference photos. The right cut isn’t just about trend—it’s about enhancing your individuality and building confidence in your personal style.",
		author: "Delta Style Team",
		image: "/images/blog/blog-003.jpg",
		tags: ["Haircut & Styling"],
		isFeatured: false,
	},
	{
		title: "Daily Hair Routine",
		slug: "daily-hair-routine",
		date: "2024-03-15",
		excerpt: "Low maintenance doesn’t mean looking messy. Here’s a 5-minute daily hair routine for men.",
		content: "Your hair deserves the same attention as your skin or wardrobe—and a solid daily routine makes all the difference in maintaining healthy, manageable, and great-looking hair. Start your morning by rinsing your hair with cool or lukewarm water, especially if you don’t shampoo daily. This refreshes your scalp without stripping natural oils. Use a lightweight shampoo 2–3 times a week and follow with conditioner to restore moisture and softness. After your shower, gently towel-dry and apply a pre-styler like a volumizing spray or leave-in conditioner to set the foundation for styling. Whether you’re using clay, cream, or pomade, always warm the product between your palms before applying evenly through damp or dry hair. Comb or style with your fingers, depending on the look you’re going for. At night, avoid going to bed with tons of product in your hair. Rinse or lightly wash before sleep to prevent buildup and breakouts. Finally, invest in a satin or silk pillowcase—it helps reduce friction and prevents frizz. A consistent routine doesn’t just make styling easier; it keeps your scalp healthy and your look sharp every day.",
		author: "J.K. Turner",
		image: "/images/blog/blog-004.jpg",
		tags: ["Haircare", "Essentials"],
		isFeatured: false,
	},
	{
		title: "Hair Tips for Humid Days",
		slug: "hair-tips-for-humid-days",
		date: "2024-03-10",
		excerpt: "Humidity is the enemy of style. Learn how to manage frizz and flyaways like a pro.",
		content: "Humidity is the enemy of control. On humid days, moisture in the air causes hair to frizz, flatten, or puff up unpredictably. The solution isn’t more product—it’s smarter product. Start by prepping with an anti-humidity spray or leave-in conditioner that seals the hair cuticle and reduces moisture absorption. Use a matte styling product like clay or fiber that offers strong hold without excess shine, which can make hair look greasy faster in humid weather. Avoid heavy creams or waxes—they tend to melt and mix with sweat. Blow-drying your hair on low heat with a cool finish can help lock in your style. If your hair is longer, tie it back loosely or style it in a controlled shape to prevent expansion throughout the day. Keeping a small bottle of dry shampoo or styling powder in your bag is a good way to fight mid-day frizz or limp volume. And remember: the cleaner your hair is, the more vulnerable it is to humidity. A little product buildup can actually help it resist moisture better. Adapt your routine slightly when the forecast gets sticky, and your hair will thank you.",
		author: "Delta Style Team",
		image: "/images/blog/blog-005.jpg",
		tags: ["Haircare", "Trips & Tricks"],
		isFeatured: false,
	},
	{
		title: "Sweat-Proof Hair Hacks",
		slug: "seat-proof-hair-hacks",
		date: "2024-03-01",
		excerpt: "Here’s how to keep your hair looking fresh even after a workout.",
		content: "Sweat and great hair rarely go hand-in-hand—especially when you're hustling between the gym and your next meeting. But that doesn’t mean you have to sacrifice style just because you’re active. With the right preparation and a few quick habits, you can maintain a sharp, refreshed look throughout the day, even after a tough workout. Start by prepping your hair before you sweat. Use a light, matte-finish product like a texturizing powder or pre-styler to give your hair structure without adding excess weight or grease. These products help your hair hold its shape and make post-gym styling much easier. If you know you'll be breaking a sweat, consider wearing a sweat-wicking headband or breathable cap. It helps absorb moisture and minimizes the chance of product breakdown at the roots. Once you're done exercising, dry shampoo becomes your best friend. A few quick sprays at the roots can absorb oil, reduce odor, and bring back volume without having to wash your hair. For extra lift, use your fingers or a brush to fluff your roots and restore shape. To cool things down, hit your hair with the cold setting on your blow dryer for 30–60 seconds. It helps evaporate leftover moisture and gives your style a clean finish. If a dryer isn’t available, just run your fingers through your hair while standing under a fan or near an air vent. When you're ready to restyle, avoid piling on heavy products. Instead, use a small amount of styling powder or clay to redefine texture and add control where needed. These lightweight formulas work well with hair that's already been exposed to some humidity or sweat. Most importantly, don't overdo it—using too much product can make your hair feel heavy, flat, or sticky as the day goes on. Stick to water-soluble products that are easy to rinse out and won’t build up over time. With a few simple adjustments, you can keep your hair looking clean, styled, and confident—no matter how packed your day is or how intense your workouts get.",
		author: "J.K. Turner",
		image: "/images/blog/blog-006.jpg",
		tags: ["Lifestyle", "Trips & Tricks"],
		isFeatured: false,
	},
	{
		title: "Volumizing Tricks",
		slug: "volumizing-tricks",
		date: "2024-02-22",
		excerpt: "Fine hair doesn’t have to fall flat. Learn how to add volume that lasts all day.",
		content: "Flat hair can make even the sharpest style fall flat—literally. But getting more volume doesn’t always mean piling on product or spending hours in front of the mirror. It starts with the right foundation. Wash your hair with a volumizing shampoo and conditioner, then use a blow dryer with a vented brush to lift the roots as you dry. Blow-drying upside down can also help build instant volume. Use a lightweight pre-styler or sea salt spray to give your hair body and hold before applying your main product. When it comes to styling, powders and clays are your best friend. Apply them near the roots and use your fingers to work them in, lifting and shaping as you go. Avoid heavy gels or creams—they weigh hair down and make it harder to restyle later. If you need a refresh, spritz dry shampoo at the crown and rough up the roots for quick lift. Volumizing is all about structure and movement—don’t over-style. The messier it looks (in the right way), the more natural volume you’ll create. Master these small tweaks, and your hair will never feel lifeless again.",
		author: "Delta Style Team",
		image: "/images/blog/blog-007.jpg",
		tags: ["Haircare", "Trips & Tricks"],
		isFeatured: false,
	},
	{
		title: "Barber vs Salon: Where Should You Go?",
		slug: "barber-vs-salon-where-should-you-go",
		date: "2024-02-10",
		excerpt: "Not sure whether to visit a barber or a salon? Here’s how to choose what’s best for you.",
		content: "Choosing between a barber and a salon can make a surprising difference in your haircut experience—and understanding the strengths of each helps you make the best call. Barbers specialize in classic men’s cuts: fades, tapers, buzz cuts, slick backs, and anything involving clippers. If you want a clean, sharp, low-maintenance cut with regular upkeep, a good barber is the go-to. Salons, on the other hand, often focus more on longer styles, layering, texturing, and more advanced scissor work. If your hair is medium to long or you want a more styled, personalized look, a salon visit might be worth it. Another thing to consider is the vibe—barbershops often have a quicker, straightforward feel, while salons may offer more time, consultation, and styling advice. Price can differ too, with salons typically costing more. At the end of the day, the decision should match your hair goals, not just the trend. Some guys switch between both based on the cut they want. Knowing your options gives you more control over your look and the experience behind it.",
		author: "J.K. Turner",
		image: "/images/blog/blog-008.jpg",
		tags: ["Lifestyle", "Haircut & Styling"],
		isFeatured: false,
	},
	{
		title: "Top Travel-Friendly Hair Products",
		slug: "top-travel-friendly-hair-productds",
		date: "2024-01-29",
		excerpt: "Stay styled on the go with these compact and effective travel grooming essentials.",
		content: "Travel doesn’t mean compromising on style—you just have to be smart about what goes in your bag. The best travel-friendly hair products are lightweight, versatile, and TSA-approved. Look for travel-size clays, creams, or styling powders that offer solid hold without taking up much space. Powders are especially great because they don’t count as liquids, don’t spill, and are easy to apply without water. A compact, refillable dry shampoo can save your style after long flights or sweaty commutes. If you blow-dry or pre-style at home, consider a small travel dryer or just rely on a quality texturizing spray for shape. For maintenance, bring a mini comb, folding brush, or even a hair pick depending on your routine. Use a dopp kit or hard case to protect your grooming gear, and always double-check bottle sizes before flying. Keeping it simple is key—choose two or three products max that you know work well together. A smart setup lets you stay polished no matter where you land, whether it's a weekend city break or a two-week business trip.",
		author: "Delta Style Team",
		image: "/images/blog/blog-009.jpg",
		tags: ["Essentials", "Trips & Tricks"],
		isFeatured: false,
	},
  ];
  

  export const AssuranceData = [
	{
		name: "Secured Payment",
		detail: "All transactions are encrypted and processed through trusted gateways.",
	},
	{
		name: "Fast Shipping",
		detail: "Orders are packed and shipped within 1–2 business days for quick delivery.",
	},
	{
		name: "English & Thai Support",
		detail: "Reach out in English or Thai—we're here to help with any questions.",
	}
  ]

  export const AboutData = {
	intro: "At VAST Original, we believe that grooming isn’t just about looking good — it’s about feeling confident in yourselves and expressing who you are. Born from a passion for clean aesthetics and effortless confidence, VAST is more than just a brand — it’s a lifestyle for those who move with intention.",
	whyUs: {
		point1: {
			header: "All-Natural Formulas",
			detail: "We use only high-quality, natural ingredients — no shortcuts, no harsh chemicals. Just clean, effective care.",
			icon: NatureIcon,
		},
		point2: {
			header: "Handcrafted with Precision",
			detail: "Every product is made in small batches by hand ensuring consistent quality and attention to detail.",
			icon: HandCraftIcon,
		},
		point3: {
			header: "Tailored to You",
			detail: "Every product and experience is crafted with sharp aesthetics, user-first thinking, and real-life uses in mind.",
			icon: HeartCircleIcon,
		},
		point4: {
			header: "Real-World Proven",
			detail: "Every formula is refined through real-world use — by people who expect performance, not just promises.",
			icon: CheckListIcon,
		},
		point5: {
			header: "Unique & Intentional",
			detail: "From the formula to the packaging, we obsess over every detail — because your grooming should feel as sharp as it looks.",
			icon: StarCircleIcon,
		}
	},
	drives: {
		point1: {
			header: "Creating Space for Self-Respect",
			detail: "We believe men deserve better — not just in products, but in how they see themselves. VAST exists to give men the tools to feel confident, present, and proud. When self-care is normalized, self-respect follows.",
		},
		point2: {
			header: "Designing with Purpose",
			detail: "Every product we create is driven by intention — not trends. We craft solutions for real routines, helping men look sharp, feel clean, and move through life with clarity and ease.",
		},
		point3: {
			header: "Empowering Everyday Confidence",
			detail: "It’s not about standing out, it’s about showing up — for yourself. We build tools that help men feel ready, grounded, and at home in their skin. Confidence starts with care, and care starts here."
		}
	},
	outro: "We’re evolving, and you’re part of that story. Explore our blog, try our picks, and reach out if you need anything. We’re building a space where confidence, design, and real-world style meet — and we’re glad you’re here.",
  }