import CoursesRequest from "@/components/admin/coursesRequest";
import { Suspense } from "react";

export default function TrailerCoursesRequestLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-1 flex-col gap-4 p-4">
            {children}
            <Suspense fallback={<div>Loading Liste trainer request...</div>}>
                <CoursesRequest />
            </Suspense>
        </div>
    );
}