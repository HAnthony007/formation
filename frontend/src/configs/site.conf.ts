export const siteConfig = {
    
    homeNav: [
        {
            label: "acceuil",
            href: "/",
        },
        {
            label: "cours",
            href: "/student/courses",
        },
    ],

    adminSidebar: [
        {
            title: "Getting stared",
            url: "/admin",
            items: [
                {
                    title: "Dashboard",
                    url: "/admin",
                },
            ],
        },
        {
            title: "Users Management",
            url: "/users",
            items: [
                {
                    title: "List of students",
                    url: "/admin/studentslist",
                },
                {
                    title: "Trainer list",
                    url: "/admin/trainerslist",
                },
                {
                    title: "Trainer request",
                    url: "/admin/trainersrequest",
                },
            ],
        },
        {
            title: "Course Management",
            url: "/course",
            items: [
                {
                    title: "Courses list",
                    url: "/admin/courseslist",
                },
                {
                    title: "Course request",
                    url: "/admin/coursesrequest",
                },
            ],
        },
    ],

    trailerSidebar: [
        {
            title: "Getting stared",
            url: "/trailer",
            items: [
                {
                    title: "Dashboard",
                    url: "/trailer",
                },
            ],
        },
        {
            title: "Course Management",
            url: "/course",
            items: [
                {
                    title: "Courses",
                    url: "/trailer/courseslist",
                },
                {
                    title: "Course request",
                    url: "/trailer/coursesrequest",
                },
            ],
        },
    ],

    novelDefaultValue: {
        type: "doc",
        content: [
            {
                type: "paragraph",
                content: [
                    {
                        type: "text",
                        text: "This is an example for the editor",
                    },
                ],
            },
            {
                type: "heading",
                attrs: {
                    level: 1,
                },
                content: [
                    {
                        type: "text",
                        text: "H1",
                    },
                ],
            },
            {
                type: "heading",
                attrs: {
                    level: 2,
                },
                content: [
                    {
                        type: "text",
                        text: "H2",
                    },
                ],
            },
            {
                type: "heading",
                attrs: {
                    level: 3,
                },
                content: [
                    {
                        type: "text",
                        text: "H3",
                    },
                ],
            },
            {
                type: "paragraph",
                content: [
                    {
                        type: "text",
                        text: "text",
                    },
                ],
            },
            {
                type: "bulletList",
                attrs: {
                    tight: true,
                },
                content: [
                    {
                        type: "listItem",
                        content: [
                            {
                                type: "paragraph",
                                content: [
                                    {
                                        type: "text",
                                        text: "new idea",
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        type: "listItem",
                        content: [
                            {
                                type: "paragraph",
                                content: [
                                    {
                                        type: "text",
                                        text: "idea",
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
};
