import AdminNavbar from "@/components/admin/navbar";
import { AdminSidebar } from "@/components/admin/sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function TrailerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
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