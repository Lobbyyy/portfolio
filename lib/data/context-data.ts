export type ContextCategory = "book" | "course" | "experience" | "education" | "competition"

export interface ContextItem {
  id: string
  category: ContextCategory
  title: string
  subtitle: string // Author for books, institution for courses/experiences
  takeaway: string // The one key learning
  tags: string[]   // Topic tags for filtering
  isbn?: string    // ISBN for book covers (optional)
  logo?: string    // Local logo path (e.g., "/antlerglobal_logo.jpeg")
  domain?: string  // Company/institution domain for Clearbit logo fallback
  date?: string    // Date range for experiences/education (e.g., "2022 - 2023")
  location?: string // Location for experiences/education
}

export const CONTEXT_ITEMS: ContextItem[] = [
  // ============================================
  // BOOKS
  // ============================================

  // Entrepreneurship & Startups
  {
    id: "zero-to-one",
    category: "book",
    title: "Zero to One",
    subtitle: "Peter Thiel",
    takeaway: "Competition is for losers. Build a monopoly by creating something new.",
    tags: ["entrepreneurship", "startups", "strategy"],
    isbn: "9780804139298"
  },
  {
    id: "the-mom-test",
    category: "book",
    title: "The Mom Test",
    subtitle: "Rob Fitzpatrick",
    takeaway: "Talk about their life, not your idea. Ask about specific past behaviors.",
    tags: ["entrepreneurship", "customer-research"],
    isbn: "9781492180746"
  },
  {
    id: "the-lean-startup",
    category: "book",
    title: "The Lean Startup",
    subtitle: "Eric Ries",
    takeaway: "Build-measure-learn. Validate assumptions before scaling.",
    tags: ["entrepreneurship", "startups", "product"],
    isbn: "9780307887894"
  },
  {
    id: "crossing-the-chasm",
    category: "book",
    title: "Crossing the Chasm",
    subtitle: "Geoffrey Moore",
    takeaway: "Focus on a beachhead market before expanding. The chasm kills most startups.",
    tags: ["entrepreneurship", "marketing", "strategy"],
    isbn: "9780062292988"
  },
  {
    id: "play-bigger",
    category: "book",
    title: "Play Bigger",
    subtitle: "Al Ramadan",
    takeaway: "Category kings capture 76% of the market. Design the category, not just the product.",
    tags: ["entrepreneurship", "marketing", "strategy"],
    isbn: "9780062407610"
  },
  {
    id: "the-cold-start-problem",
    category: "book",
    title: "The Cold Start Problem",
    subtitle: "Andrew Chen",
    takeaway: "Network effects are earned, not given. Start with the hardest side first.",
    tags: ["entrepreneurship", "startups", "growth"],
    isbn: "9780062969743"
  },
  {
    id: "venture-deals",
    category: "book",
    title: "Venture Deals",
    subtitle: "Brad Feld",
    takeaway: "Understand term sheets. Economics and control are the two things that matter.",
    tags: ["entrepreneurship", "fundraising", "finance"],
    isbn: "9781119594826"
  },
  {
    id: "the-100-startup",
    category: "book",
    title: "The $100 Startup",
    subtitle: "Chris Guillebeau",
    takeaway: "You don't need much to start. Find the intersection of passion and market need.",
    tags: ["entrepreneurship", "startups"],
    isbn: "9780307951526"
  },

  // Psychology & Behavior
  {
    id: "thinking-fast-and-slow",
    category: "book",
    title: "Thinking, Fast and Slow",
    subtitle: "Daniel Kahneman",
    takeaway: "System 1 is fast and intuitive. System 2 is slow and deliberate. Know when to use each.",
    tags: ["psychology", "decision-making"],
    isbn: "9780374533557"
  },
  {
    id: "the-chimp-paradox",
    category: "book",
    title: "The Chimp Paradox",
    subtitle: "Prof Steve Peters",
    takeaway: "Your inner chimp reacts emotionally. Learn to manage it, not fight it.",
    tags: ["psychology", "mental-health"],
    isbn: "9780091935580"
  },
  {
    id: "atomic-habits",
    category: "book",
    title: "Atomic Habits",
    subtitle: "James Clear",
    takeaway: "1% better every day. Systems beat goals. Make good habits obvious and easy.",
    tags: ["psychology", "habits", "self-development"],
    isbn: "9780735211292"
  },
  {
    id: "the-power-of-habit",
    category: "book",
    title: "The Power of Habit",
    subtitle: "Charles Duhigg",
    takeaway: "Habits are cue-routine-reward loops. Change the routine, keep the cue and reward.",
    tags: ["psychology", "habits"],
    isbn: "9780812981605"
  },
  {
    id: "influence",
    category: "book",
    title: "Influence",
    subtitle: "Robert Cialdini",
    takeaway: "Six principles of persuasion: reciprocity, commitment, social proof, authority, liking, scarcity.",
    tags: ["psychology", "marketing", "persuasion"],
    isbn: "9780062937650"
  },
  {
    id: "hooked",
    category: "book",
    title: "Hooked",
    subtitle: "Nir Eyal",
    takeaway: "Trigger, action, variable reward, investment. Build habit-forming products ethically.",
    tags: ["psychology", "product", "entrepreneurship"],
    isbn: "9781591847786"
  },
  {
    id: "dopamine-nation",
    category: "book",
    title: "Dopamine Nation",
    subtitle: "Dr. Anna Lembke",
    takeaway: "Pleasure and pain are co-located. Pursuing pleasure relentlessly leads to pain.",
    tags: ["psychology", "mental-health", "neuroscience"],
    isbn: "9781524746728"
  },

  // Philosophy & Stoicism
  {
    id: "meditations",
    category: "book",
    title: "Meditations",
    subtitle: "Marcus Aurelius",
    takeaway: "Control what you can, accept what you cannot. The obstacle is the way.",
    tags: ["philosophy", "stoicism"],
    isbn: "9780140449334"
  },
  {
    id: "the-power-of-now",
    category: "book",
    title: "The Power of Now",
    subtitle: "Eckhart Tolle",
    takeaway: "The present moment is all you have. Stop identifying with your thoughts.",
    tags: ["philosophy", "mindfulness"],
    isbn: "9781577314806"
  },
  {
    id: "beyond-good-and-evil",
    category: "book",
    title: "Beyond Good and Evil",
    subtitle: "Friedrich Nietzsche",
    takeaway: "Question conventional morality. Create your own values.",
    tags: ["philosophy"],
    isbn: "9780140449235"
  },
  {
    id: "ikigai",
    category: "book",
    title: "Ikigai",
    subtitle: "Héctor García",
    takeaway: "Find the intersection of what you love, what you're good at, what the world needs, and what you can be paid for.",
    tags: ["philosophy", "purpose", "japanese"],
    isbn: "9780143130727"
  },

  // Business & Strategy
  {
    id: "blue-ocean-strategy",
    category: "book",
    title: "Blue Ocean Strategy",
    subtitle: "W. Chan Kim",
    takeaway: "Create uncontested market space. Make competition irrelevant.",
    tags: ["strategy", "business"],
    isbn: "9781625274496"
  },
  {
    id: "art-of-war",
    category: "book",
    title: "The Art of War",
    subtitle: "Sun Tzu",
    takeaway: "The supreme art of war is to subdue the enemy without fighting.",
    tags: ["strategy", "philosophy"],
    isbn: "9781599869773"
  },
  {
    id: "good-strategy-bad-strategy",
    category: "book",
    title: "Good Strategy Bad Strategy",
    subtitle: "Richard Rumelt",
    takeaway: "Good strategy is diagnosis, guiding policy, and coherent action. Most strategies are just goals.",
    tags: ["strategy", "business"],
    isbn: "9780307886231"
  },
  {
    id: "the-effective-executive",
    category: "book",
    title: "The Effective Executive",
    subtitle: "Peter Drucker",
    takeaway: "Effectiveness can be learned. Focus on contribution, not effort.",
    tags: ["business", "leadership", "productivity"],
    isbn: "9780060833459"
  },

  // Sales & Marketing
  {
    id: "gap-selling",
    category: "book",
    title: "Gap Selling",
    subtitle: "Keenan",
    takeaway: "Sell the gap between current state and future state. Problems drive sales.",
    tags: ["sales", "marketing"],
    isbn: "9781732891005"
  },
  {
    id: "this-is-marketing",
    category: "book",
    title: "This is Marketing",
    subtitle: "Seth Godin",
    takeaway: "Marketing is the generous act of helping someone solve a problem. Find the smallest viable market.",
    tags: ["marketing", "business"],
    isbn: "9780525540830"
  },
  {
    id: "never-split-the-difference",
    category: "book",
    title: "Never Split the Difference",
    subtitle: "Chris Voss",
    takeaway: "Tactical empathy. Mirror, label emotions, and use calibrated questions.",
    tags: ["negotiation", "sales", "psychology"],
    isbn: "9780062407801"
  },
  {
    id: "building-a-story-brand",
    category: "book",
    title: "Building a StoryBrand",
    subtitle: "Donald Miller",
    takeaway: "The customer is the hero, not your brand. You are the guide.",
    tags: ["marketing", "storytelling"],
    isbn: "9780718033323"
  },
  {
    id: "how-to-win-friends",
    category: "book",
    title: "How to Win Friends and Influence People",
    subtitle: "Dale Carnegie",
    takeaway: "Be genuinely interested in others. Make people feel important.",
    tags: ["communication", "relationships", "sales"],
    isbn: "9780671027032"
  },

  // Finance & Investing
  {
    id: "rich-dad-poor-dad",
    category: "book",
    title: "Rich Dad Poor Dad",
    subtitle: "Robert Kiyosaki",
    takeaway: "Assets put money in your pocket. Liabilities take it out. Buy assets.",
    tags: ["finance", "investing"],
    isbn: "9781612680194"
  },
  {
    id: "the-intelligent-investor",
    category: "book",
    title: "The Intelligent Investor",
    subtitle: "Benjamin Graham",
    takeaway: "Mr. Market is bipolar. Be fearful when others are greedy, greedy when others are fearful.",
    tags: ["finance", "investing"],
    isbn: "9780060555665"
  },
  {
    id: "beating-the-street",
    category: "book",
    title: "Beating the Street",
    subtitle: "Peter Lynch",
    takeaway: "Invest in what you know. Do your homework before buying.",
    tags: ["finance", "investing"],
    isbn: "9780671891633"
  },

  // Productivity & Performance
  {
    id: "the-4-hour-workweek",
    category: "book",
    title: "The 4-Hour Workweek",
    subtitle: "Tim Ferriss",
    takeaway: "Eliminate, automate, delegate. Design your lifestyle first, then build a business around it.",
    tags: ["productivity", "lifestyle", "entrepreneurship"],
    isbn: "9780307465351"
  },
  {
    id: "the-5am-club",
    category: "book",
    title: "The 5am Club",
    subtitle: "Robin Sharma",
    takeaway: "Own your morning, elevate your life. The 20/20/20 formula.",
    tags: ["productivity", "habits"],
    isbn: "9781443456623"
  },
  {
    id: "flow",
    category: "book",
    title: "Flow",
    subtitle: "Mihaly Csikszentmihalyi",
    takeaway: "Flow is the optimal experience. Challenge must match skill.",
    tags: ["psychology", "productivity", "performance"],
    isbn: "9780061339202"
  },
  {
    id: "cant-hurt-me",
    category: "book",
    title: "Can't Hurt Me",
    subtitle: "David Goggins",
    takeaway: "Callous your mind. You're only using 40% of your potential.",
    tags: ["mindset", "performance", "resilience"],
    isbn: "9781544512280"
  },
  {
    id: "never-finished",
    category: "book",
    title: "Never Finished",
    subtitle: "David Goggins",
    takeaway: "Stay hard. Evolution requires constant discomfort.",
    tags: ["mindset", "performance", "resilience"],
    isbn: "9781544534077"
  },

  // Science & Understanding
  {
    id: "seven-brief-lessons-in-physics",
    category: "book",
    title: "Seven Brief Lessons in Physics",
    subtitle: "Carlo Rovelli",
    takeaway: "Reality is not what it seems. Time is relative, space curves, and we are made of the same stuff as stars.",
    tags: ["science", "physics"],
    isbn: "9780141981727"
  },
  {
    id: "a-brief-history-of-time",
    category: "book",
    title: "A Brief History of Time",
    subtitle: "Stephen Hawking",
    takeaway: "The universe had a beginning, but it may not have an edge. Time may be an illusion.",
    tags: ["science", "physics", "cosmology"],
    isbn: "9780553380163"
  },
  {
    id: "why-we-sleep",
    category: "book",
    title: "Why We Sleep",
    subtitle: "Matthew Walker",
    takeaway: "Sleep is the foundation of health. 8 hours is non-negotiable.",
    tags: ["science", "health", "performance"],
    isbn: "9781501144325"
  },
  {
    id: "breathe",
    category: "book",
    title: "Breath",
    subtitle: "James Nestor",
    takeaway: "How you breathe matters. Nasal breathing transforms health.",
    tags: ["health", "science"],
    isbn: "9780735213616"
  },

  // Mindset
  {
    id: "the-subtle-art",
    category: "book",
    title: "The Subtle Art of Not Giving a F*ck",
    subtitle: "Mark Manson",
    takeaway: "Choose what to care about carefully. Not everything deserves your energy.",
    tags: ["mindset", "philosophy"],
    isbn: "9780062457714"
  },
  {
    id: "start-with-why",
    category: "book",
    title: "Start with Why",
    subtitle: "Simon Sinek",
    takeaway: "People don't buy what you do, they buy why you do it.",
    tags: ["leadership", "purpose", "marketing"],
    isbn: "9781591846444"
  },
  {
    id: "the-icarus-deception",
    category: "book",
    title: "The Icarus Deception",
    subtitle: "Seth Godin",
    takeaway: "The real risk is not flying too high, but flying too low. Make art.",
    tags: ["creativity", "mindset"],
    isbn: "9781591846079"
  },
  {
    id: "think-and-grow-rich",
    category: "book",
    title: "Think and Grow Rich",
    subtitle: "Napoleon Hill",
    takeaway: "Thoughts become things. Definiteness of purpose is the starting point of all achievement.",
    tags: ["mindset", "success"],
    isbn: "9781585424337"
  },

  // Additional Books from Screenshot
  {
    id: "hello-my-name-is-awesome",
    category: "book",
    title: "Hello, My Name is Awesome",
    subtitle: "Alexandra Watkins",
    takeaway: "Great names are SMILE-worthy (Suggestive, Memorable, Imagery, Legs, Emotional) and avoid SCRATCH (Spelling-challenged, Copycat, Random, Annoying, Tame, Curse of knowledge, Hard to pronounce).",
    tags: ["marketing", "branding", "entrepreneurship"],
    isbn: "9781626561861"
  },
  {
    id: "a-happy-pocket-full-of-money",
    category: "book",
    title: "A Happy Pocket Full of Money",
    subtitle: "David Cameron Gikandi",
    takeaway: "Wealth is a state of mind. Abundance flows from gratitude and present-moment awareness.",
    tags: ["mindset", "wealth", "spirituality"],
    isbn: "9781571746078"
  },
  {
    id: "barbarians-to-bureaucrats",
    category: "book",
    title: "Barbarians to Bureaucrats",
    subtitle: "Lawrence M. Miller",
    takeaway: "Organizations evolve through predictable stages. Recognize which stage you're in to lead effectively.",
    tags: ["leadership", "business", "organizations"],
    isbn: "9780449905265"
  },
  {
    id: "rich-dads-increase-financial-iq",
    category: "book",
    title: "Rich Dad's Increase Your Financial IQ",
    subtitle: "Robert Kiyosaki",
    takeaway: "Financial intelligence is about solving financial problems. The more problems you solve, the smarter you get.",
    tags: ["finance", "investing", "education"],
    isbn: "9780446509367"
  },
  {
    id: "rich-dads-guide-to-investing",
    category: "book",
    title: "Rich Dad's Guide to Investing",
    subtitle: "Robert Kiyosaki",
    takeaway: "Investing is a plan, not a product. The rich invest in financial education first.",
    tags: ["finance", "investing"],
    isbn: "9781612680200"
  },
  {
    id: "the-22-laws-of-category-design",
    category: "book",
    title: "The 22 Laws of Category Design",
    subtitle: "Category Pirates",
    takeaway: "Don't compete in existing categories. Create new ones where you define the rules.",
    tags: ["marketing", "strategy", "entrepreneurship"],
    isbn: "9781544530710"
  },
  {
    id: "how-to-build-a-billion-dollar-app",
    category: "book",
    title: "How to Build a Billion Dollar App",
    subtitle: "George Berkowski",
    takeaway: "Think big from day one. The path to a billion-dollar app requires relentless focus on user experience.",
    tags: ["entrepreneurship", "startups", "product"],
    isbn: "9780349401379"
  },
  {
    id: "the-science-of-getting-rich",
    category: "book",
    title: "The Science of Getting Rich",
    subtitle: "Wallace D. Wattles",
    takeaway: "Getting rich is an exact science. Think in a certain way, act in a certain way.",
    tags: ["wealth", "mindset", "philosophy"],
    isbn: "9781585426010"
  },
  {
    id: "code-to-extraordinary-mind",
    category: "book",
    title: "The Code of the Extraordinary Mind",
    subtitle: "Vishen Lakhiani",
    takeaway: "Question the 'brules' (bullshit rules) society taught you. Bend reality by upgrading your models.",
    tags: ["mindset", "self-development", "philosophy"],
    isbn: "9781623367084"
  },
  {
    id: "social-selling",
    category: "book",
    title: "Social Selling",
    subtitle: "Timothy Hughes",
    takeaway: "Cold calling is dead. Build relationships through social media before you ever pitch.",
    tags: ["sales", "marketing", "social-media"],
    isbn: "9780749478018"
  },
  {
    id: "the-happiness-of-pursuit",
    category: "book",
    title: "The Happiness of Pursuit",
    subtitle: "Chris Guillebeau",
    takeaway: "Quests give life meaning. Find your own adventure and pursue it relentlessly.",
    tags: ["purpose", "adventure", "self-development"],
    isbn: "9780385348867"
  },
  {
    id: "practical-fintech",
    category: "book",
    title: "Learning Practical Fintech from Successful Companies",
    subtitle: "Sihem Jouini",
    takeaway: "Fintech success comes from solving real pain points in financial services with technology.",
    tags: ["fintech", "entrepreneurship", "technology"],
    isbn: "9781484262535"
  },
  {
    id: "the-law-of-success",
    category: "book",
    title: "The Law of Success",
    subtitle: "Napoleon Hill",
    takeaway: "Success is the result of applying timeless principles: definite purpose, self-confidence, initiative, and persistence.",
    tags: ["success", "mindset", "self-development"],
    isbn: "9780486466682"
  },
  {
    id: "the-circadian-code",
    category: "book",
    title: "The Circadian Code",
    subtitle: "Satchin Panda",
    takeaway: "Your body runs on a clock. Align eating, sleeping, and activity with your circadian rhythm for optimal health.",
    tags: ["health", "science", "habits"],
    isbn: "9781635652437"
  },
  {
    id: "the-truth-about-markets",
    category: "book",
    title: "The Truth About Markets",
    subtitle: "John Kay",
    takeaway: "Markets work not because people are rational, but because of institutions, social context, and embedded knowledge.",
    tags: ["economics", "markets", "finance"],
    isbn: "9780141988290"
  },
  {
    id: "the-compound-effect",
    category: "book",
    title: "The Compound Effect",
    subtitle: "Darren Hardy",
    takeaway: "Small, consistent actions compound into massive results. Success is not about big breakthroughs but daily disciplines.",
    tags: ["habits", "success", "self-development"],
    isbn: "9781593157135"
  },
  {
    id: "prisoners-of-geography",
    category: "book",
    title: "Prisoners of Geography",
    subtitle: "Tim Marshall",
    takeaway: "Geography shapes destiny. Mountains, rivers, and coastlines determine the fate of nations more than ideology.",
    tags: ["geopolitics", "history", "strategy"],
    isbn: "9781501121470"
  },
  {
    id: "modern-man-search-for-soul",
    category: "book",
    title: "Modern Man in Search of a Soul",
    subtitle: "Carl Jung",
    takeaway: "The psyche has its own reality. Understanding your unconscious is the path to wholeness.",
    tags: ["psychology", "philosophy", "spirituality"],
    isbn: "9780156612067"
  },
  {
    id: "21-lessons-for-21st-century",
    category: "book",
    title: "21 Lessons for the 21st Century",
    subtitle: "Yuval Noah Harari",
    takeaway: "In a world of information overload, clarity is power. Question every story, including your own.",
    tags: ["philosophy", "future", "society"],
    isbn: "9780525512196"
  },
  {
    id: "complete-guide-property-investment",
    category: "book",
    title: "The Complete Guide to Property Investment",
    subtitle: "Rob Dix",
    takeaway: "Property investment is about cash flow, not just capital appreciation. Run the numbers before you buy.",
    tags: ["property", "investing", "finance"],
    isbn: "9780993497209"
  },
  {
    id: "how-markets-fail",
    category: "book",
    title: "How Markets Fail",
    subtitle: "John Cassidy",
    takeaway: "Markets are not always efficient. Irrational exuberance and herd behavior cause bubbles and crashes.",
    tags: ["economics", "markets", "finance"],
    isbn: "9780374173203"
  },
  {
    id: "keynes-return-of-master",
    category: "book",
    title: "Keynes: The Return of the Master",
    subtitle: "Robert Skidelsky",
    takeaway: "Markets need government intervention during crises. Keynes was right about animal spirits and uncertainty.",
    tags: ["economics", "history", "finance"],
    isbn: "9781586489175"
  },
  {
    id: "what-every-body-is-saying",
    category: "book",
    title: "What Every Body is Saying",
    subtitle: "Joe Navarro",
    takeaway: "The body doesn't lie. Learn to read nonverbal cues to understand what people really think.",
    tags: ["psychology", "communication", "body-language"],
    isbn: "9780061438295"
  },
  {
    id: "why-we-eat",
    category: "book",
    title: "Why We Eat (Too Much)",
    subtitle: "Andrew Jenkinson",
    takeaway: "Weight is regulated by your set point, not willpower. Understand the biology to change the behavior.",
    tags: ["health", "science", "biology"],
    isbn: "9780241400531"
  },
  {
    id: "elon-musk-biography",
    category: "book",
    title: "Elon Musk",
    subtitle: "Ashlee Vance",
    takeaway: "Think in first principles. Set impossible goals, then work backwards to make them possible.",
    tags: ["biography", "entrepreneurship", "innovation"],
    isbn: "9780062301253"
  },
  {
    id: "21-irrefutable-laws-leadership",
    category: "book",
    title: "The 21 Irrefutable Laws of Leadership",
    subtitle: "John C. Maxwell",
    takeaway: "Leadership is influence, nothing more, nothing less. The lid on your leadership determines your effectiveness.",
    tags: ["leadership", "business", "self-development"],
    isbn: "9780785288374"
  },
  {
    id: "48-laws-of-power",
    category: "book",
    title: "The 48 Laws of Power",
    subtitle: "Robert Greene",
    takeaway: "Power is amoral. Understand how it works to protect yourself and achieve your goals.",
    tags: ["strategy", "power", "psychology"],
    isbn: "9780140280197"
  },
  {
    id: "flatland",
    category: "book",
    title: "Flatland",
    subtitle: "Edwin A. Abbott",
    takeaway: "We are limited by our dimensional perspective. What seems impossible may just be beyond our perception.",
    tags: ["philosophy", "science", "perspective"],
    isbn: "9780486272634"
  },
  {
    id: "the-80-20-principle",
    category: "book",
    title: "The 80/20 Principle",
    subtitle: "Richard Koch",
    takeaway: "80% of results come from 20% of efforts. Focus ruthlessly on the vital few, ignore the trivial many.",
    tags: ["productivity", "strategy", "business"],
    isbn: "9780385491747"
  },
  {
    id: "adapt",
    category: "book",
    title: "Adapt",
    subtitle: "Tim Harford",
    takeaway: "Success comes from trial and error, not top-down planning. Fail fast, learn faster.",
    tags: ["adaptation", "business", "strategy"],
    isbn: "9780374100964"
  },
  {
    id: "crucial-conversations",
    category: "book",
    title: "Crucial Conversations",
    subtitle: "Kerry Patterson",
    takeaway: "Master high-stakes dialogue. Create safety, share your path, and explore others' paths.",
    tags: ["communication", "leadership", "relationships"],
    isbn: "9780071771320"
  },
  {
    id: "hyper-focus",
    category: "book",
    title: "Hyperfocus",
    subtitle: "Chris Bailey",
    takeaway: "Attention is your most valuable resource. Manage it deliberately through hyperfocus and scatterfocus modes.",
    tags: ["productivity", "focus", "attention"],
    isbn: "9780525522256"
  },
  {
    id: "the-7-habits",
    category: "book",
    title: "The 7 Habits of Highly Effective People",
    subtitle: "Stephen R. Covey",
    takeaway: "Be proactive, begin with the end in mind, put first things first. Character is the foundation of effectiveness.",
    tags: ["productivity", "self-development", "leadership"],
    isbn: "9781982137274"
  },

  // ============================================
  // COURSES & CERTIFICATIONS
  // ============================================
  {
    id: "harvard-cs50",
    category: "course",
    title: "CS50: Introduction to Computer Science",
    subtitle: "Harvard University",
    takeaway: "This is CS50. Computational thinking is a superpower that applies far beyond coding.",
    tags: ["computer-science", "programming", "education"],
    domain: "harvard.edu",
    date: "2023"
  },
  {
    id: "disruptive-strategy",
    category: "course",
    title: "Disruptive Strategy",
    subtitle: "Harvard Business School Online",
    takeaway: "Disruption comes from below. Incumbents fail not because they're stupid, but because they're rational.",
    tags: ["strategy", "innovation", "business"],
    logo: "/onlinehbs_logo.jpeg",
    date: "Feb 2023"
  },
  {
    id: "corda-business",
    category: "course",
    title: "Corda for Business Professionals",
    subtitle: "R3",
    takeaway: "Enterprise blockchain is about trust and privacy. Shared ledgers transform how businesses collaborate.",
    tags: ["blockchain", "fintech", "technology"],
    logo: "/r3cev_llc_logo.jpeg",
    date: "Sep 2022"
  },
  {
    id: "antler-cohort",
    category: "course",
    title: "Antler London Cohort",
    subtitle: "Antler VC",
    takeaway: "Build fast, validate faster. The best founders are relentlessly resourceful.",
    tags: ["entrepreneurship", "venture-capital", "startups"],
    logo: "/antlerglobal_logo.jpeg",
    date: "Oct 2023 - Mar 2024"
  },

  // ============================================
  // EDUCATION
  // ============================================
  {
    id: "lse-economics",
    category: "education",
    title: "The London School of Economics and Political Science (LSE)",
    subtitle: "Bachelor's Degree, Economics",
    takeaway: "Economics is about incentives. Understanding how people respond to incentives unlocks human behavior.",
    tags: ["economics", "education", "finance"],
    logo: "/london_school_of_economics_logo.jpeg",
    date: "2015 - 2018",
    location: "London, UK"
  },
  {
    id: "founder-institute",
    category: "education",
    title: "Founder Institute",
    subtitle: "2019 Accelerator Cohort",
    takeaway: "Execution beats ideas. The best time to start is now, the second best time is also now.",
    tags: ["entrepreneurship", "startups", "education"],
    logo: "/the_founder_institute_logo.jpeg",
    date: "2019 - 2020"
  },
  {
    id: "ernest-bevin",
    category: "education",
    title: "Ernest Bevin Academy",
    subtitle: "High School - Maths (A*), Further Maths (A), Economics (A), Chemistry (A), Biology (A)",
    takeaway: "Hard work compounds. The discipline built in early years pays dividends forever.",
    tags: ["education"],
    logo: "/ernest_bevin_academy_logo.jpeg",
    date: "2009 - 2015",
    location: "London, UK"
  },

  // ============================================
  // EXPERIENCES
  // ============================================
  {
    id: "founder-stealth",
    category: "experience",
    title: "Founder",
    subtitle: "Stealth Startup",
    takeaway: "Build something people want. Everything else is noise.",
    tags: ["entrepreneurship", "startups", "leadership"],
    logo: "/stealth_startup_51_logo.jpeg",
    date: "Apr 2024 - Present"
  },
  {
    id: "entrepreneur-antler",
    category: "experience",
    title: "Entrepreneur",
    subtitle: "Antler",
    takeaway: "Co-founder chemistry is everything. Find someone who complements your weaknesses.",
    tags: ["entrepreneurship", "venture-capital", "startups"],
    logo: "/antlerglobal_logo.jpeg",
    date: "Oct 2023 - Mar 2024",
    location: "Greater London, UK"
  },
  {
    id: "venture-dev-r3",
    category: "experience",
    title: "Venture Development Lead, EMEA",
    subtitle: "R3",
    takeaway: "Enterprise sales is about solving real problems. Technology is secondary to business value.",
    tags: ["venture-capital", "enterprise", "blockchain", "strategy"],
    logo: "/r3cev_llc_logo.jpeg",
    date: "Jun 2022 - Oct 2023",
    location: "Greater London, UK"
  },
  {
    id: "gtm-can-co",
    category: "experience",
    title: "Head of GTM Execution",
    subtitle: "Can & Co",
    takeaway: "Go-to-market is where strategy meets reality. Execution reveals truth faster than planning.",
    tags: ["strategy", "consulting", "sales", "operations"],
    logo: "/canandco_logo.jpeg",
    date: "Nov 2020 - Dec 2022",
    location: "Greater London, UK"
  },
  {
    id: "bd-pitchbook",
    category: "experience",
    title: "Business Development Associate",
    subtitle: "PitchBook Data",
    takeaway: "Data is power. The best salespeople are consultants who happen to sell.",
    tags: ["sales", "data", "finance", "business-development"],
    logo: "/pitchbook_logo.jpeg",
    date: "Sep 2018 - Oct 2021"
  },
  {
    id: "equity-research-woozle",
    category: "experience",
    title: "Equity Research Analyst",
    subtitle: "Woozle Research",
    takeaway: "Dig deeper than the obvious. The edge is in the details others overlook.",
    tags: ["finance", "research", "investing"],
    logo: "/woozle_research_logo.jpeg",
    date: "Dec 2017 - Nov 2018",
    location: "London, UK"
  },
  {
    id: "research-analyst-talent-capital",
    category: "experience",
    title: "Research Analyst (Intern)",
    subtitle: "Talent Capital – Research Consultancy",
    takeaway: "Competitive intelligence is about connecting dots others miss. Deep research creates asymmetric advantages.",
    tags: ["research", "consulting", "talent-acquisition"],
    logo: "/talent_cap.jpeg",
    date: "Nov 2016 - Nov 2017",
    location: "London, UK"
  },
  {
    id: "intern-man-group",
    category: "experience",
    title: "Spring Week Intern",
    subtitle: "Man Group – Hedge Fund",
    takeaway: "Alpha comes from seeing what others don't. Diversification and discipline separate winners from losers.",
    tags: ["finance", "investing", "hedge-funds"],
    logo: "/man_group_plc_logo.jpeg",
    date: "Apr 2016",
    location: "London, UK"
  },
  {
    id: "assistant-zadig",
    category: "experience",
    title: "Assistant to Partner",
    subtitle: "Zadig Asset Management",
    takeaway: "Valuation is part art, part science. The best investors combine rigorous analysis with contrarian thinking.",
    tags: ["finance", "investing", "asset-management"],
    logo: "/zadig_asset_management_logo.jpeg",
    date: "Feb 2016",
    location: "London, UK"
  },
  {
    id: "intern-barclays",
    category: "experience",
    title: "Investment Banking Intern",
    subtitle: "Barclays Investment Bank",
    takeaway: "Work ethic is table stakes. Learn fast, stay humble, and always be ready.",
    tags: ["finance", "banking", "career"],
    logo: "/barclays_corporate_and_investment_bank_logo.jpeg",
    date: "Aug 2014 - Sep 2014",
    location: "London, UK"
  },

  // ============================================
  // COMPETITIONS & HACKATHONS
  // ============================================
  {
    id: "supanova-hackathon",
    category: "competition",
    title: "Supanova",
    subtitle: "Gemini 3 Hackathon",
    takeaway: "AI agents can orchestrate complex creative workflows. The future of video is conversational.",
    tags: ["ai", "hackathon", "video", "agents"],
    domain: "devpost.com",
    date: "2024"
  },
  {
    id: "lifta-hackathon",
    category: "competition",
    title: "Lifta",
    subtitle: "World's Largest Hackathon by Bolt",
    takeaway: "Voice-first interfaces unlock hands-free productivity. Build for the context where users actually are.",
    tags: ["ai", "hackathon", "voice", "fitness"],
    domain: "bolt.new",
    date: "2024"
  },
  {
    id: "6degrees-hackathon",
    category: "competition",
    title: "6degrees",
    subtitle: "Google AI Hackathon",
    takeaway: "Your network is your net worth. AI can unlock the hidden value in professional relationships.",
    tags: ["ai", "hackathon", "networking", "social-capital"],
    domain: "google.com",
    date: "2024"
  },
  {
    id: "20punches-hackathon",
    category: "competition",
    title: "20punches (BuffetBot)",
    subtitle: "AI Agents Hack – lablab.ai & MindsDB",
    takeaway: "Agentic AI transforms financial advice. Build tools that democratize expertise.",
    tags: ["ai", "hackathon", "fintech", "agents"],
    domain: "lablab.ai",
    date: "2024"
  }
]

// Helper functions
export function getAllContextItems(): ContextItem[] {
  return CONTEXT_ITEMS
}

export function getContextCategories(): ContextCategory[] {
  return ["experience", "education", "competition", "course", "book"]
}

export function getAllContextTags(): string[] {
  const tags = new Set<string>()
  CONTEXT_ITEMS.forEach(item => item.tags.forEach(tag => tags.add(tag)))
  return Array.from(tags).sort()
}

export function getItemsByCategory(category: ContextCategory): ContextItem[] {
  return CONTEXT_ITEMS.filter(item => item.category === category)
}

export function getItemsByTag(tag: string): ContextItem[] {
  return CONTEXT_ITEMS.filter(item => item.tags.includes(tag))
}
