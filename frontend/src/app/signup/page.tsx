import { IntroAuth } from "@/components/auth/introAuth";
// import { SignUpForm } from "@/components/auth/signup";
import { Suspense } from "react";
import Loading from "./loading";
import SignUpForm from "@/components/auth/signup";


export default function SignUpPage() {
    return (
        <div className="grid place-items-center lg:grid-cols-[40%_1fr] gap-6 w-full h-full">
            <Suspense fallback={<Loading />}>
                <SignUpForm />
            </Suspense>
            <IntroAuth />
        </div>
    )
}