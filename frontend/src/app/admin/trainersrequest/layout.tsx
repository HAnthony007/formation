
export default function AdminTrainersRequestLayout({
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