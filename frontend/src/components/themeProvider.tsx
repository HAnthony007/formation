'use client'
import { ConfigProvider, theme } from 'antd'
import { ReactNode, useCallback, useEffect, useState } from 'react'

export function ThemeProvider({ children }: { children: ReactNode }) {
    // const [darkMode, setDarkMode] = useState(false);
    // const windowQuery = window.matchMedia("(prefers-color-scheme:dark)");

    // const darkModeChange = useCallback((event: MediaQueryListEvent) => {
    //     console.log(event.matches ? true : false);
    //     setDarkMode(event.matches ? true : false);
    // }, []);

    // useEffect(() => {
    //     windowQuery.addEventListener("change", darkModeChange);
    //     return () => {
    //         windowQuery.removeEventListener("change", darkModeChange);
    //     };
    // }, [windowQuery, darkModeChange]);

    // useEffect(() => {
    //     console.log(windowQuery.matches ? true : false);
    //     setDarkMode(windowQuery.matches ? true : false);
    // }, []);
    return (
        <ConfigProvider
            theme={{
                "token": {
                    "wireframe": false,
                    "colorPrimary": "#00B96B",
                    "colorInfo": "#1677ff",
                    "colorSuccess": "#52c41a",
                    "colorWarning": "#faad14",
                    "colorError": "#ff4d4f",
                    "colorLink": "#00B96B",
                    "colorTextBase": "#000000",
                    "colorBgBase": "#ffffff",
                    "fontSize": 16,
                    "sizeStep": 5,
                    "sizeUnit": 5,
                    "borderRadius": 6
                }
            }}

        >
            {children}
        </ConfigProvider>
    )
}