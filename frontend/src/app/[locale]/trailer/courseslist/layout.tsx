import ListCourse from "@/components/admin/listCourse";
import { Suspense } from "react";

export default function TrailerCoursesListLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-1 flex-col gap-4 p-4">
            {children}
            <Suspense fallback={<div>Loading Liste courses...</div>}>
                <ListCourse />
            </Suspense>
        </div>
    );
}