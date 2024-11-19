export const user = [
    {
        "iduser": 2,
        "firstname": "RAKOTOARIMANANA",
        "lastname": "Harifetra Anthony",
        "email": "anthony@gmail.com",
        "email_verified_at": null,
        "role": "admin",
        "level": "beginner",
        "status": "actif",
        "created_at": "2024-11-12T10:44:51.000000Z",
        "updated_at": "2024-11-12T10:44:51.000000Z",
    },
    {
        "iduser": 3,
        "firstname": "RABENIRINA",
        "lastname": "Fandresena Mihaja",
        "email": "mihaja@gmail.com",
        "email_verified_at": null,
        "role": "formateur",
        "level": "advanced",
        "status": "actif",
        "created_at": "2024-11-12T10:44:51.000000Z",
        "updated_at": "2024-11-12T10:44:51.000000Z",
    },
    {
        "iduser": 4,
        "firstname": "RAKOTO",
        "lastname": "harifetra",
        "email": "harifetra@gmail.com",
        "email_verified_at": null,
        "role": "student",
        "level": "advanced",
        "status": "actif",
        "created_at": "2024-11-12T10:44:51.000000Z",
        "updated_at": "2024-11-12T10:44:51.000000Z",
    },
    {
        "iduser": 5,
        "firstname": "RABE",
        "lastname": "Fandresena",
        "email": "fandresena@gmail.com",
        "email_verified_at": null,
        "role": "student",
        "level": "intermediate",
        "status": "actif",
        "created_at": "2024-11-12T10:44:51.000000Z",
        "updated_at": "2024-11-12T10:44:51.000000Z",
    },
];

export const course = [
    {
        idcourse: 1,
        title: "Introduction to Cybersecurity",
        description:
            "Learn about the fast-growing field of Cybersecurity and how to protect your data and information from digital attacks.",
        language: "francais",
        category: "Cybersecurity",
        duration: "3 heures",
        difficulty: "Beginner",
        idformateur: 2,
        status: "actif",
    },
    {
        idcourse: 2,
        title: "Introduction to Cloud Computing",
        description:
            "Understand the basics of cloud computing and its applications.",
        language: "anglais",
        category: "Cloud Computing",
        duration: "3 heures",
        difficulty: "Beginner",
        idformateur: 2,
        status: "actif",
    },
    {
        idcourse: 3,
        title: "Deep Learning with TensorFlow",
        description: "Explore deep learning techniques using TensorFlow.",
        language: "anglais",
        category: "Machine Learning",
        duration: "7 heures",
        difficulty: "Advanced",
        idformateur: 3,
        status: "actif",
    },
    {
        idcourse: 4,
        title: "Web Development with React",
        description: "Learn how to build dynamic web applications using React.",
        language: "francais",
        category: "Web Development",
        duration: "5 heures",
        difficulty: "Intermediate",
        idformateur: 4,
        status: "actif",
    },
    {
        idcourse: 5,
        title: "Introduction to Blockchain",
        description: "Discover the fundamentals of blockchain technology.",
        language: "francais",
        category: "Blockchain",
        duration: "4 heures",
        difficulty: "Beginner",
        idformateur: 5,
        status: "actif",
    },
    {
        idcourse: 6,
        title: "Cybersecurity for Beginners",
        description:
            "Learn the basics of cybersecurity and how to protect your data.",
        language: "anglais",
        category: "Cybersecurity",
        duration: "3 heures",
        difficulty: "Beginner",
        idformateur: 2,
        status: "actif",
    },
    {
        idcourse: 7,
        title: "Advanced JavaScript",
        description:
            "Deep dive into advanced JavaScript concepts and techniques.",
        language: "anglais",
        category: "Programming",
        duration: "5 heures",
        difficulty: "Advanced",
        idformateur: 3,
        status: "actif",
    },
    {
        idcourse: 8,
        title: "Data Science with Python",
        description: "Learn data science techniques and tools using Python.",
        language: "anglais",
        category: "Data Science",
        duration: "6 heures",
        difficulty: "Intermediate",
        idformateur: 4,
        status: "actif",
    },
    {
        idcourse: 9,
        title: "Machine Learning Basics",
        description:
            "Introduction to machine learning concepts and algorithms.",
        language: "francais",
        category: "Machine Learning",
        duration: "4 heures",
        difficulty: "Beginner",
        idformateur: 5,
        status: "actif",
    },
];

export type courseType = {
    idcourse: number;
    title: string;
    description?: string;
    language?: string;
    category: string;
    duration: string;
    difficulty: string;
    idformateur?: number;
    status?: string;
}