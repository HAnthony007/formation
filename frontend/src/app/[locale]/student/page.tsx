'use client'
import { useAuthStore } from "@/stores/AuthStore";
import { Suspense } from "react";
import Loading from "../loading";

export default function QuizPage() {
    const {user} = useAuthStore()
    console.log(user)
    return (
        <div>

            <h1>Hello  {user?.firstName} {user?.lastName}</h1>
            <Suspense fallback={<Loading />}>

            </Suspense>
        </div>
    )
}