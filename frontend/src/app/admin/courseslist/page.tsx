"use client"
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function AdminCoursesListPage() {
    return (
        <div className="pt-10 pr-10 pb-10">
            <h2 className="text-2xl font-bold tracking-tight">List of course</h2>
            <p className="text-muted-foreground">
                Here is the list of all course
            </p>
        </div>
    )
}