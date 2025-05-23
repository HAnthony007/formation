"use client"
import { useAuthStore } from "@/stores/AuthStore";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";


export default function useProtectedRoute() {
    const [loading, setLoading] = useState(true);
    const [authentificated, setAuthentificated] = useState(false);
    const pathname = usePathname();

    const { user } = useAuthStore();
    
    const router = useRouter();

    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    const role = typeof window !== 'undefined' ? localStorage.getItem('role') : null;
    useEffect(() => {
        const isAuthenticated = !!token && !!role && !!user;

        console.log(`Voici le role :${role}`)
        const isAuthorizedPath = pathname.includes(`/${role}`) || pathname === '/';
        if (!isAuthenticated || !isAuthorizedPath ) {
            router.push('/login');
            toast.error("Vous devez etre authentifie pour acceder a cette page.")
        } else {
            setAuthentificated(true);
            setLoading(false)
        }
    }, [token, role, user, router, pathname]);

    return {loading, authentificated, role};
}