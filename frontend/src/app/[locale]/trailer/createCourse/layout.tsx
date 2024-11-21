import { Steps } from 'antd'
export default function TrailerCoursesCreateLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const stepItem = [
        {
            title: 'Finished',
            // description: 'you can create a course',
        },
        {
            title: 'In Progress',
            // description: 'you can create a course',
        },
        {
            title: 'Waiting',
            // description: 'you can create a course',
        },
        {
            title: 'Waiting',
            // description: 'you can create a course',
        },
    ]
    return (
        <div className="flex flex-1 flex-col gap-4 p-4 ">
            <Steps current={1}
                items={stepItem}
                size='small' 
            />        
            {children}
        </div>
    );
}