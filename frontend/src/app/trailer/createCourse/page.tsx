import { Steps } from 'antd'

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

export default function TrailerCoursesCreatePage() {
    return (
        <div className="">
            <Steps current={1}
                items={stepItem}
                size='small'
            />
        </div>
    )
}