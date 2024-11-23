'use client'
import QuizTemplate from "@/components/quiz/quizEx"
import CreateCourses from "@/components/trailer/CreateCourses/courses"
import CreateLesson from "@/components/trailer/lesson"
import { Button } from "@/components/ui/button"
import { Steps } from 'antd'
import { Suspense, useState } from "react"
import { toast } from "sonner"

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

export default function TrailerCoursesCreatePage() {
    const [current, setCurrent] = useState<number>(0)
    const next = () => {
        setCurrent(current + 1)
    }
    const prev = () => {
        setCurrent(current - 1)
    }
    
    return (

        <div className="w-full">
            <Suspense fallback={<p>Chargement ...</p>}>
                <header>
                    <Steps current={current}
                        items={stepItem}
                        size='small'
                    />
                </header>
                <main className="container px-20 pt-20 w-full">
                    {stepItem[current].content}
                </main>
            </Suspense>
            <footer>
                <div style={{ marginTop: 24 }} className="flex justify-end mr-20">
                    {current < stepItem.length - 1 && (
                        <Button onClick={() => next()}>
                            Next
                        </Button>
                    )}
                    {current === stepItem.length - 1 && (
                        <Button onClick={() => toast.success('Processing complete!')}>
                            Done
                        </Button>
                    )}
                    {current > 0 && (
                        <Button variant='secondary' style={{ margin: '0 8px' }} onClick={() => prev()}>
                            Previous
                        </Button>
                    )}
                </div>
            </footer>
        </div>

    )
}