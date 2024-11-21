'use client'
import AdminNavbar from "@/components/admin/navbar";
import { AdminSidebar } from "@/components/admin/sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Skeleton } from "@/components/ui/skeleton";
import useProtectedRoute from "@/hooks/useProtectedRoute";
import { toast } from "sonner";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { loading, authentificated } = useProtectedRoute()

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

    if (!authentificated) return toast.error("Vous devez etre authentifie pour acceder a cette page.")

    return (
        <SidebarProvider>

            <AdminSidebar />

            <SidebarInset>

                <AdminNavbar />

                {children}

            </SidebarInset>

        </SidebarProvider>
    );
}