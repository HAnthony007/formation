"use client"

import { usePathname } from "next/navigation";
import Navbar from "./Home/navbar";

export default function NavbarWrapper() {
    const pathname = usePathname()
    return (
        <>
            {(pathname.includes("/admin") || pathname.includes("/trailer")) ? null : <Navbar />}
            {/* {(pathname.includes("/admin") || pathname.includes("/trailer") || pathname.includes("/login") || pathname.includes("/signup")) ? null : <Navbar />} */}

        </>
    );
}
