import ListCourse from "@/components/admin/listCourse";
import { Suspense } from "react";

export default function AdminCoursesListLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-1 flex-col gap-4 p-4">
            {children}
            <Suspense fallback={<div>Loading Liste students...</div>}>
                <ListCourse />
            </Suspense>
        </div>
    );
}