export default function LoginLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="grid place-items-center h-screen">
            {children}
        </div>
    );
}