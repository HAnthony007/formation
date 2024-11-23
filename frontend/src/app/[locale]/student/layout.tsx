'use client'
import { Skeleton } from "@/components/ui/skeleton";
import useProtectedRoute from "@/hooks/useProtectedRoute";
import React from "react";
import { toast } from "sonner";

export default function SignUpLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { loading, authentificated, role } = useProtectedRoute()
if (loading) {
        return (
            <div className="flex flex-1 flex-col gap-4 p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <Skeleton className="aspect-video rounded-xl" />
                    <Skeleton className="aspect-video rounded-xl" />
                    <Skeleton className="aspect-video rounded-xl" />
                </div>
                <Skeleton className="min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
            </div>
        )
    }
    console.log(role)
    if (!authentificated) return toast.error("Vous devez etre authentifie pour acceder a cette page.")
    return (
        <div className="grid place-items-center h-screen p-8">
            {children}
        </div>
    );
}