export const programme = {
  name: "Pwani Innovators",
  phone: "0791532391",
  phoneInternational: "+254791532391",
  instagram: "pwaninnovate",
  website: "innovate-pwani.co.ke",
  email: "info@innovate-pwani.co.ke",
  typeformUrl: process.env.NEXT_PUBLIC_TYPEFORM_URL || "https://form.typeform.com/to/S6c3uimj",
  typeformLiveId: process.env.NEXT_PUBLIC_TYPEFORM_LIVE_ID || "01M69PZJ9HVRWB40R9K5X9XAWK",
  director: { name: "", quote: "" },
};

export const cohorts = [
  {
    id: "young",
    name: "Young Innovators",
    ages: "8–12",
    weeklyPrice: 1000,
    monthlyPrice: 4000,
    word: "Explore",
    description: "Big curiosity. Small steps. A wonderful place to begin.",
    skills: [
      "Playful introductions to coding",
      "Guided projects and creative challenges",
      "Learning to solve problems together",
    ],
    icon: "spark",
  },
  {
    id: "teen",
    name: "Teen Builders",
    ages: "13–17",
    weeklyPrice: 1200,
    monthlyPrice: 4800,
    word: "Create",
    description:
      "Follow an interest. Find your people. Make your first real project.",
    skills: [
      "Explore a technology track you enjoy",
      "Build, test and present your idea",
      "Discover where STEM could take you",
    ],
    icon: "code",
  },
  {
    id: "adult",
    name: "Solution Builders",
    ages: "18+",
    weeklyPrice: 1500,
    monthlyPrice: 6000,
    word: "Build",
    description:
      "Put your ideas to work with practical skills and purposeful projects.",
    skills: [
      "Turn a problem into a working prototype",
      "Practise collaboration and presenting",
      "Connect with a community of builders",
    ],
    icon: "rocket",
  },
];

export const tracks = [
  {
    id: "web",
    label: "Web development",
    icon: "code",
    title: "Your idea. On the internet.",
    description:
      "Give an idea a home on the web. Explore how pages work, shape a design and bring it to life with code.",
    project: "A little website for a big local idea.",
    example:
      "Create a colourful website for a neighbourhood business, a school club or your own passion project.",
    skills: [
      "HTML & CSS foundations",
      "Responsive layouts",
      "Creative problem-solving",
    ],
    challenge:
      "Imagine a website that helps someone discover your favourite part of Mombasa.",
  },
  {
    id: "app",
    label: "App development",
    icon: "phone",
    title: "Small screen. Big possibilities.",
    description:
      "Explore the thinking behind useful apps: who they help, how they feel and what happens when you tap.",
    project: "An everyday problem, made simpler.",
    example:
      "Prototype a study planner that helps learners organise subjects, set goals and keep track of their progress.",
    skills: ["Interface design", "App logic", "Testing with users"],
    challenge: "What is one everyday task you wish an app could make easier?",
  },
  {
    id: "game",
    label: "Game development",
    icon: "game",
    title: "Make the rules. Build the fun.",
    description:
      "Turn a story into something people can play. Discover characters, movement, game logic and the joy of testing your creation.",
    project: "An adventure with a coastal twist.",
    example:
      "Build a simple beach clean-up game where every collected bottle helps protect your virtual shoreline.",
    skills: ["Logic & interaction", "Storytelling", "Playtesting"],
    challenge:
      "Design a game that is fun to play and teaches one useful thing.",
  },
  {
    id: "ai",
    label: "Artificial intelligence",
    icon: "brain",
    title: "Get curious about AI.",
    description:
      "Discover what AI can do, where it gets things wrong and how to use it thoughtfully while creating something useful.",
    project: "A helpful study companion.",
    example:
      "Explore an AI-powered quiz idea, practise clear instructions and check the answers against reliable learning material.",
    skills: ["AI foundations", "Responsible use", "Checking outputs"],
    challenge:
      "How could AI help someone learn without doing all the thinking for them?",
  },
  {
    id: "robotics",
    label: "Robotics & IoT",
    icon: "bot",
    title: "Bring your code into the world.",
    description:
      "Connect the digital and the physical. Explore sensors, simple circuits and the code that makes things respond.",
    project: "A small invention you can touch.",
    example:
      "Explore a simple sensor-based prototype, such as a plant-care reminder or a robot that reacts to an obstacle.",
    skills: ["Sensors & circuits", "Physical computing", "Prototyping"],
    challenge:
      "What could a sensor notice that would make life a little easier?",
  },
];

export const steps = [
  {
    title: "Learn the basics",
    short: "Get your bearings.",
    description:
      "Start with guided, age-appropriate activities. Try the tools, ask questions and build confidence one small discovery at a time.",
    icon: "compass",
  },
  {
    title: "Find your idea",
    short: "Notice. Wonder. Imagine.",
    description:
      "Choose something you would love to create, or spot a problem at home, at school or in your community. Your curiosity sets the direction.",
    icon: "bulb",
  },
  {
    title: "Build & improve",
    short: "Make it. Try it. Tweak it.",
    description:
      "Turn your idea into a working project. Test it, learn from what happens and use feedback to make the next version better.",
    icon: "tools",
  },
  {
    title: "Share your creation",
    short: "Show what you can do.",
    description:
      "Present your project and explain the thinking behind it. Celebrate what you have learned with your own creation and a certificate.",
    icon: "award",
  },
  {
    title: "Keep growing",
    short: "Your journey carries on.",
    description:
      "Discover suitable tech communities, coding challenges and programmes that can help you keep practising and meeting other builders.",
    icon: "rocket",
  },
];

export const faqs = [
  {
    q: "Who can join Pwani Innovators?",
    a: "Learners aged 8 and above are welcome. We have three cohorts: Young Innovators (8–12), Teen Builders (13–17) and Solution Builders (18+). You can join because you are curious, because you love making things, or because you want to explore a future in STEM.",
    category: "Joining",
  },
  {
    q: "Do I need any coding experience?",
    a: "No previous coding experience is required. The programme begins with foundations and guided activities, with projects suited to learners’ age and experience.",
    category: "Joining",
  },
  {
    q: "Is this suitable for learners who have completed KJSEA?",
    a: "Yes. Recent Junior Secondary graduates can explore coding, AI, robotics and practical problem-solving before Senior Secondary. It is an opportunity to discover interests and build confidence for a STEM pathway; it is not an exam-preparation or school-placement service.",
    category: "Joining",
  },
  {
    q: "When and where does the programme run?",
    a: "The first holiday programme begins on 9 November 2026 at Smartbrains Academy, Mombasa, during November and December. Sessions run Monday to Saturday, for four hours daily per cohort. Contact the team for your cohort’s exact session times, directions and the closing date.",
    category: "Practical details",
  },
  {
    q: "How much does it cost?",
    a: "Young Innovators (ages 8–12) costs KSh 1,000 per week or KSh 4,000 per month. Teen Builders (ages 13–17) costs KSh 1,200 per week or KSh 4,800 per month. Solution Builders (ages 18+) costs KSh 1,500 per week or KSh 6,000 per month. Weekly fees cover six sessions; monthly fees cover four weeks (24 sessions). Contact the team to confirm attendance and payment arrangements.",
    category: "Practical details",
  },
  {
    q: "Does my child need to bring a laptop?",
    a: "Please contact the team before attending to confirm device access and any equipment requirements for the chosen track. We will help you understand what to bring.",
    category: "Practical details",
  },
  {
    q: "Will learners study every technology track?",
    a: "Learners explore the available areas and build a project in a domain that interests them. The aim is to develop foundations and practical experience, rather than promise mastery of every field in one holiday.",
    category: "Learning",
  },
  {
    q: "What will learners take away?",
    a: "Learners work towards their own built project and a certificate, alongside practical skills, experience presenting ideas and connections with other curious builders. Ask the team about completion and attendance requirements.",
    category: "Learning",
  },
  {
    q: "Can I join if I am 18 or older?",
    a: "Yes. Solution Builders is our 18+ cohort for college-age learners, adults and curious beginners who want to turn ideas into practical projects.",
    category: "Joining",
  },
  {
    q: "What happens after the holiday programme?",
    a: "Pwani Innovators will run during school holidays throughout the year. Learners will also be introduced to relevant tech communities, programmes and coding competitions, including opportunities offered by Hack Club where suitable. Eligibility and availability depend on each external programme.",
    category: "Learning",
  },
  {
    q: "How can I register my interest?",
    a: "Visit the Contact page to prepare an enquiry, email info@innovate-pwani.co.ke, or call 0791532391 to speak with the team. Online registration will be available once the programme’s interest form opens.",
    category: "Joining",
  },
];
