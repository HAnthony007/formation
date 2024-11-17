"use client"

import { usePathname } from "next/navigation";
import Navbar from "./Home/navbar";

export default function NavbarWrapper() {
    const pathname = usePathname()
    return (
        <>
            {pathname.startsWith("/admin") || pathname.startsWith("/trailer") ? null : <Navbar />}
        </>
    );
}
