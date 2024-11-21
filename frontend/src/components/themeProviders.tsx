"use client"
import * as React from "react";
import { ThemeProvider as NextThemesProviders, useTheme } from 'next-themes'
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from 'antd'
import { Toaster } from "./ui/sonner";

export function Providers({
    children,
}: { children: React.ReactNode }) {
    return (
        <NextThemesProviders enableSystem
            attribute='class'
            defaultTheme='dark'
            disableTransitionOnChange
        >

            <ToasterProvider />
            <AntdProvider>
                {children}
            </AntdProvider>
        </NextThemesProviders>
    )
}

const AntdProvider = ({ children }: { children: React.ReactNode }) => {
    const { resolvedTheme } = useTheme()
    return (
        <ConfigProvider
            theme={{
                "token": {
                    "wireframe": false,
                    "colorPrimary": "#1677FF",
                    "colorInfo": "#1677ff",
                    "colorSuccess": "#52c41a",
                    "colorWarning": "#faad14",
                    "colorError": "#ff4d4f",
                    "colorLink": "#1677FF",
                    "colorTextBase": `${resolvedTheme === 'dark' ? '#f5f5f5' : '#212121'}`,
                    "colorBgBase": `${resolvedTheme === 'dark' ? '#121212' : '#fafafa'}`,
                    "fontSize": 16,
                    "sizeStep": 5,
                    "sizeUnit": 5,
                    "borderRadius": 6
                }
            }}
        >
            <AntdRegistry>
                {children}
            </AntdRegistry>
        </ConfigProvider>
    )
}

const ToasterProvider = () => {
    const { resolvedTheme } = useTheme()
    return (
        <Toaster richColors
            closeButton
            position="top-right"
            theme={resolvedTheme === 'dark' ? 'dark' : 'light'}

        />
    )
}