import Quiz from "@/components/quiz/Quiz";
import { Suspense } from "react";
import Loading from "./loading";

export default function QuizPage() {
    return (
        <>
            <h1>Hello  Cours</h1>
            <Suspense fallback={<Loading />}>

                <Quiz />
            </Suspense>
        </>
    )
}