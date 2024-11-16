"use client"
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function AdminCoursesListPage() {
    return (
        <div>

        <h1>Admin Course list</h1>
        <Button onClick={()=> toast.success("Vous ete amoureux")}>Cliquer ici</Button>
        </div>
    )
}