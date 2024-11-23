
// import { Ide } from "@/components/editorCode/ide";
// import Question from "@/components/editorCode/question";
import React, { Suspense } from "react";

export default function LoginLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="w-full h-screen ">
            {children}
        </div>
    );
}