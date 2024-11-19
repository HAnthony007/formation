import ListStudents from "@/components/admin/listStudents";
import { Suspense } from "react";

export default function AdminStudentsListLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-1 flex-col gap-4 p-4">
            {children}
            <Suspense fallback={<div>Loading Liste students...</div>}>
                <ListStudents />
            </Suspense>
        </div>
    );
}