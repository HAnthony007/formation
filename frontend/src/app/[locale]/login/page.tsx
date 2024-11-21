
import { Suspense } from "react";
import { IntroAuth } from "@/components/auth/introAuth";
import Loading from "./loading";
import LoginForm from "@/components/auth/login";

export default function LoginPage() {
    return (
        <div className="grid place-items-center lg:grid-cols-[1fr_40%] gap-6 w-full h-full">
            <Suspense fallback={<Loading />}>
                <IntroAuth />
                <LoginForm />
            </Suspense>
        </div>
    )
}