'use client'
import QuizTemplate from '@/components/quiz/quizEx';
import CreateCourses from '@/components/trailer/CreateCourses/courses';
import CreateLesson from '@/components/trailer/lesson';
import { Steps } from 'antd'
import { Suspense, useState } from 'react';

const stepItem = [
    {
        title: 'Create Course',
        // description: 'you can create a course',
        content: <CreateCourses />
    },
    {
        title: 'In Progress',
        // description: 'you can create a course',
        content: <QuizTemplate />
    },
    {
        title: 'Waiting',
        // description: 'you can create a course',
        content: <CreateLesson />
    },
    {
        title: 'Waiting',
        // description: 'you can create a course',
        content: 'hello finished waiting'
    },
]
export default function TrailerCoursesCreateLayout({
    children,
}: {
    children: React.ReactNode;
}) { 
    return (
        <div className="flex flex-1 flex-col gap-4 p-4 ">
                {children}
        </div>
    );
}