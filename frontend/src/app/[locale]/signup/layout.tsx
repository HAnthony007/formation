import React from "react";

export default function SignUpLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="w-full h-screen">
            {children}
        </div>
    );
}