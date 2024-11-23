

export default function PratiqueLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="w-full h-screen ">
            {children}
        </div>
    );
}