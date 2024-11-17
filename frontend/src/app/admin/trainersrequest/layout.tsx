import TrainerRequest from "@/components/admin/trainerRequest";
import { Suspense } from "react";

export default function AdminTrainersRequestLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-1 flex-col gap-4 p-4">
            {children}
            <Suspense fallback={<div>Loading Liste trainer request...</div>}>
                <TrainerRequest />
            </Suspense>
        </div>
    );
}