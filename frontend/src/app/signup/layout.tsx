import React from "react";

export default function SignUpLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="bg-green-600 w-full h-full">
            {children}
        </div>
    );
}