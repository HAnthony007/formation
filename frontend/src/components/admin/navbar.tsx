'use client'
import { usePathname } from "next/navigation";
import { ToggleTheme } from "../toggleTheme";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../ui/breadcrumb";
import { Separator } from "../ui/separator";
import { SidebarTrigger } from "../ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function AdminNavbar() {
    const pathname = usePathname().split("/")
    let [link1, link2] = [pathname[1], pathname[2]]
    return (
        <header className="flex sticky backdrop-blur top-0 z-50 h-14 shrink-0 items-center gap-2">
            <div className="flex flex-1 items-center gap-2 px-3">
                <SidebarTrigger className="-ml-1" />
                <Separator orientation="vertical" className="mr-2 h-4" />
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem className="hidden md:block">
                            <BreadcrumbLink href={`/${link1}`} >
                                {link1}
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator className="hidden md:block" />
                        <BreadcrumbItem>
                            <BreadcrumbPage>{link2}</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
            <div className="flex ml-auto px-3 items-center gap-4">
                <ToggleTheme />
                <span className="hidden md:block">anthony@gmail.com</span>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>A</AvatarFallback>
                </Avatar>
            </div>
        </header>
    )
}