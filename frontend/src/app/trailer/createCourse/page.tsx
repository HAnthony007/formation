'use client'
import NovelEditor from '@/components/trailer/novel/novel'
import { Card, CardContent } from '@/components/ui/card'
import { useState } from 'react'
import parse from 'html-react-parser'

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
    const [content, setContent] = useState<string | undefined>(undefined)
    console.log(content) 
    const theObj = {_html: content}
    return (
        <div className="container p-8">
            <div className='grid grid-cols-2 gap-6'>
                <NovelEditor title='Editor content' setContent={setContent}/>

                <div>
                    <Card>
                        <CardContent>
                            <h2>Content preview</h2>
                            <div className='prose lg:prose-xl'>
                            {
                                parse(`${content}`)
                            }
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}