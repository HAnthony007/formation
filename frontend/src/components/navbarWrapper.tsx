"use client"

import { usePathname } from "next/navigation";
import Navbar from "./Home/navbar";
import AdminNavbar from "./admin/navbar";

export default function NavbarWrapper() {
    const pathname = usePathname()
    return (
        <>
            {pathname.startsWith("/admin") ? <AdminNavbar /> : <Navbar />}
        </>
    );
}
