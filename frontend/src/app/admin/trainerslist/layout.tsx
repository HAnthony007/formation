
export default function AdminTrainersListLayout({
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