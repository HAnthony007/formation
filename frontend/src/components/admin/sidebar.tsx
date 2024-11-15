import React from "react";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarRail } from "../ui/sidebar";
import { siteConfig } from "@/configs/site.conf";
import Link from "next/link";

export function AdminSidebar(
    {
        ...props
    }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar {...props}>
            <SidebarHeader>
                <h1>Voici le headers</h1>
            </SidebarHeader>

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
                                                <SidebarMenuButton asChild >
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
    )
}