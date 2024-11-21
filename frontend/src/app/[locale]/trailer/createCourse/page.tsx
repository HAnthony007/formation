import QuizTemplate from "@/components/quiz/quizEx"
import CreateLesson from "@/components/trailer/lesson"

const stepItem = [
    {
        title: 'Finished',
        // description: 'you can create a course',
    },
    {
        title: 'In Progress',
        // description: 'you can create a course',
    },
    {
        title: 'Waiting',
        // description: 'you can create a course',
    },
    {
        title: 'Waiting',
        // description: 'you can create a course',
    },
]

export default function TrailerCoursesCreatePage() {
    return (
        <div className="container p-8">
            {/* <CreateLesson /> */}
            <QuizTemplate />
        </div>
    )
}