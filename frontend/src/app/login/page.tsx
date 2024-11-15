
import { Suspense } from "react";
import { IntroAuth } from "@/components/auth/introAuth";
import Loading from "./loading";
import LoginForm from "@/components/auth/login";

export default function LoginPage() {
    return (
        <div className="grid place-items-center lg:grid-cols-[40%_1fr] gap-6 w-full h-full">
            <Suspense fallback={<Loading />}>
                <LoginForm />
            </Suspense>
            <IntroAuth />
        </div>
    )
}