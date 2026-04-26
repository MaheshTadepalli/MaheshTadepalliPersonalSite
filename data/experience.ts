export interface Experience {
    role: string;
    company: string;
    period: string;
    type: "work" | "education" | "achievement" | "course" | "interest";
    description: string[];
    skills?: string[];
}

export const experienceData: Experience[] = [
    {
        role: "GATE 2025 Computer Science - Top 1.12%",
        company: "Among 170,825 candidates",
        period: "2025",
        type: "achievement",
        description: [
            "Ranked in the top 1.12% in GATE 2025 Computer Science and Information Technology",
            "Demonstrated strong fundamentals across core computer science and engineering concepts",
        ],
    },
    {
        role: "NPTEL Certification",
        company: "Programming, Data Structures and Algorithms Using Python - IIT Madras",
        period: "Jul 2022 - Dec 2022",
        type: "achievement",
        description: [
            "Completed certification focused on programming fundamentals, data structures, and algorithmic problem solving using Python",
        ],
    },
    {
        role: "Teaching Assistant",
        company: "IIT Bombay",
        period: "Jul 2025 - Present",
        type: "work",
        description: [
            "Assisting a niche group of 110+ students through tutorials and doubt-solving sessions",
            "Providing academic support and technical guidance during coursework",
        ],
        skills: ["Teaching", "Mentoring", "Tutorials", "Doubt Solving"],
    },
    {
        role: "Interview Coordinator",
        company: "Placement Cell, IIT Bombay",
        period: "Nov 2025 - Dec 2025",
        type: "work",
        description: [
            "Coordinated with a 250+ member team for interviews of 2300+ students",
            "Assisted in conducting tests for 20+ firms and handling student queries",
        ],
        skills: ["Coordination", "Communication", "Organization"],
    },
    {
        role: "Introduction to Machine Learning",
        company: "IIT Bombay | Prof. Amit Sethi",
        period: "Jan 2026 - Present",
        type: "course",
        description: [
            "Studying machine learning fundamentals and model evaluation through graduate coursework",
        ],
    },
    {
        role: "Deep Learning for Computer Vision",
        company: "IIT Bombay | Prof. Biplab Banerjee",
        period: "Jan 2026 - Present",
        type: "course",
        description: [
            "Studying deep learning methods for visual understanding and computer vision applications",
        ],
    },
    {
        role: "Post Graduation (M.Tech.)",
        company: "IIT Bombay",
        period: "2027",
        type: "education",
        description: [
            "CPI: 8.21",
            "Focused on software development, data science, machine learning, and computer vision",
        ],
    },
    {
        role: "Under Graduation (B.Tech.)",
        company: "SRKR Engineering College, JNTUK",
        period: "2023",
        type: "education",
        description: [
            "Specialization: Electronics and Communication Engineering (ECE)",
        ],
    },
    {
        role: "Interests",
        company: "Personal",
        period: "Ongoing",
        type: "interest",
        description: [
            "Listening to music",
            "Watching WWE",
            "Gym",
        ],
    },
];
