'use client'
import { useState } from "react";
import { Card, CardContent } from "../ui/card";
import NovelEditor from "./novel/novel";
import parse from 'html-react-parser'

export default function CreateLesson() {
    const [content, setContent] = useState<string | undefined>(undefined)
    return (

        <div className='grid grid-cols-2 gap-6'>
            <NovelEditor title='Editor content' setContent={setContent} />

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
    )
}