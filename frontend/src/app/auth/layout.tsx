import React from "react";

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        // <div className="d-flex justify-center items-center h-full w-screen">
        <div className="grid place-items-center h-screen">
            {children}
        </div>
    );
}