import { Suspense } from "react";

export default function TrailerCoursesCreateLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-1 flex-col gap-4 p-4">
            {children}
            <Suspense fallback={<div>Loading create courses...</div>}>
                {/* <Tiptap /> */}
            </Suspense>
        </div>
    );
}