export const siteConfig = {
    name: "Mahesh Tadepalli",
    title: "M.Tech Student | Software Development | Data Science & Machine Learning",
    description: "I build software and machine learning solutions that connect big data, computer vision, and practical decision support.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://maheshtadepalli.dev",

    author: {
        name: "Mahesh Tadepalli",
        email: "maheshtadepalli02@gmail.com",
        phone: "+91 9948756708",
        role: "M.Tech Student at IIT Bombay",
        education: "M.Tech. @ IIT Bombay",
        tagline: "Software Development | Data Science & Machine Learning",
        bio: "M.Tech student at IIT Bombay focused on software development, machine learning, big data, and computer vision-driven applications.",
    },

    social: {
        linkedin: "https://www.linkedin.com/in/mahesh-tadepalli",
        github: "https://github.com/MaheshTadepalli?tab=repositories",
        email: "maheshtadepalli02@gmail.com",
    },

    keywords: [
        "Mahesh Tadepalli",
        "IIT Bombay MTech",
        "Software Developer",
        "Machine Learning",
        "Data Science",
        "Computer Vision",
        "Big Data Analytics",
        "Unity ARCore Developer",
        "Python Developer",
        "C++ Developer",
        "Flood Risk Prediction",
        "Augmented Reality Application",
    ],
};

export type SiteConfig = typeof siteConfig;
