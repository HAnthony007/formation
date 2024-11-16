'use client'
import React, { Suspense } from "react";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarRail } from "../ui/sidebar";
import { siteConfig } from "@/configs/site.conf";
import Link from "next/link";
import Image from "next/image";
import gsnLogo from '@/../public/gsnPhoto.jpg'
import { Separator } from "../ui/separator";
import { usePathname } from "next/navigation";

export function AdminSidebar(
    {
        ...props
    }: React.ComponentProps<typeof Sidebar>) {
    const pathname = usePathname()
    return (
        <Suspense fallback={<div>Sidebar loading...</div>}>
            <Sidebar {...props}>
                <SidebarHeader className="grid grid-cols-[auto_1fr] items-center ">
                    <Image src={gsnLogo} alt="gnsLogo" height={50} width={50} className="rounded-full" />
                    <h1 className="text-2xl font-extrabold">GSN Formation</h1>
                </SidebarHeader>
                <Separator />
                <SidebarContent>
                    {
                        siteConfig.adminSidebar.map((item) => (
                            <SidebarGroup key={item.title}>

                                <SidebarGroupLabel>{item.title}</SidebarGroupLabel>

                                <SidebarGroupContent>
                                    <SidebarMenu>
                                        {
                                            item.items?.map((item) => (
                                                <SidebarMenuItem key={item.title}>
                                                    <SidebarMenuButton asChild isActive={pathname === item.url}>
                                                        <Link href={item.url}>{item.title}</Link>
                                                    </SidebarMenuButton>

                                                </SidebarMenuItem>
                                            ))
                                        }
                                    </SidebarMenu>
                                </SidebarGroupContent>
                            </SidebarGroup>
                        ))
                    }
                </SidebarContent>
                <SidebarRail />
            </Sidebar>
        </Suspense>

    )
}