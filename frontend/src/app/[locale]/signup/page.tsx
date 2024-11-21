import { IntroAuth } from "@/components/auth/introAuth";
// import { SignUpForm } from "@/components/auth/signup";
import { Suspense } from "react";
import Loading from "./loading";
import SignUpForm from "@/components/auth/signup";


export default function SignUpPage() {
    return (
        <div className="grid place-items-center lg:grid-cols-[1fr_30%] gap-6 h-full pr-10">
            <Suspense fallback={<Loading />}>
                <IntroAuth />
                <SignUpForm />
            </Suspense>
        </div>
    )
}