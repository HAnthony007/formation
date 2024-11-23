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
};

export const quiz = {
    "quizTitle": "React Quiz Component Demo",
    "quizSynopsis":
        "Lorem ipsum dolor sit amet",
    "progressBarColor": "#9de1f6",
    "nrOfQuestions": "4",
    
    "questions": [
        {
            "question":
                "How can you access the state of a component from inside of a member function?",
            "questionType": "text",
            "questionPic": "https://dummyimage.com/600x400/000/fff&text=X", // if you need to display Picture in Question
            "answerSelectionType": "single",
            "answers": [
                "this.getState()",
                "this.prototype.stateValue",
                "this.state",
                "this.values",
            ],
            "correctAnswer": "3",
            "messageForCorrectAnswer": "Correct answer. Good job.",
            "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
            "explanation":
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "point": "20",
        },
        {
            "question": "ReactJS is developed by _____?",
            "questionType": "text",
            "answerSelectionType": "single",
            "answers": [
                "Google Engineers",
                "Facebook Engineers",
            ],
            "correctAnswer": "2",
            "messageForCorrectAnswer": "Correct answer. Good job.",
            "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
            "explanation":
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "point": "20",
        },
        {
            "question": "ReactJS is an MVC based framework?",
            "questionType": "text",
            "answerSelectionType": "single",
            "answers": [
                "True",
                "False",
            ],
            "correctAnswer": "2",
            "messageForCorrectAnswer": "Correct answer. Good job.",
            "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
            "explanation":
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "point": "10",
        },
        {
            "question":
                "Which of the following concepts is/are key to ReactJS?",
            "questionType": "text",
            "answerSelectionType": "single",
            "answers": [
                "Component-oriented design",
                "Event delegation model",
                "Both of the above",
            ],
            "correctAnswer": "3",
            "messageForCorrectAnswer": "Correct answer. Good job.",
            "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
            "explanation":
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "point": "30",
        },
        {
            "question":
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
            "questionType": "photo",
            "answerSelectionType": "single",
            "answers": [
                "https://dummyimage.com/600x400/000/fff&text=A",
                "https://dummyimage.com/600x400/000/fff&text=B",
                "https://dummyimage.com/600x400/000/fff&text=C",
                "https://dummyimage.com/600x400/000/fff&text=D",
            ],
            "correctAnswer": "1",
            "messageForCorrectAnswer": "Correct answer. Good job.",
            "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
            "explanation":
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "point": "20",
        },
        {
            "question": "What are the advantages of React JS?",
            "questionType": "text",
            "answerSelectionType": "multiple",
            "answers": [
                "React can be used on client and as well as server side too",
                "Using React increases readability and makes maintainability easier. Component, Data patterns improves readability and thus makes it easier for manitaining larger apps",
                "React components have lifecycle events that fall into State/Property Updates",
                "React can be used with any other framework (Backbone.js, Angular.js) as it is only a view layer",
            ],
            // "correctAnswer": [1, 2, 4],
            "correctAnswer": "2",
            "messageForCorrectAnswer": "Correct answer. Good job.",
            "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
            "explanation":
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "point": "20",
        },
    ],
};
