export const siteConfig = {
    homeNav: [
        {
            label: "acceuil",
            href: "/",
        },
        {
            label: "cours",
            href: "/cours",
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
};
