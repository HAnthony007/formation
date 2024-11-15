"use client"
import { useAllUsers } from "@/hooks/useAllUser";
import { useAuthStore } from "@/stores/AuthStore";

export default function DashboardPage() {

    const { user } = useAuthStore((state) => state);
    console.log(user)
    const allUser = useAllUsers();
    console.log(allUser)
    
    return (
        <h1>Bienvenue Authentified</h1>

    )
}