
'use client'
import { CardContent } from '@/components/ui/card'
import { useAllChapiter, useAllQuestion } from '@/hooks/useAllUser'
import { useCreateQuestion, useCreateResponse } from '@/hooks/useCourse'
import { Button, Card, Checkbox, Col, Form, Input, InputNumber, Row, Select, Space, Typography } from 'antd'
import { X, XIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { Suspense } from 'react'
import { toast } from 'sonner'

type Props = {}

const ReponseQuestion= (props: Props) => {
    const router = useRouter()
    const { question } = useAllQuestion()
    const { createResponse } = useCreateResponse()
    const id = question.map((item) => ({ value: item.id_quest, label: item.description}))
    console.log(console.log(id))
    console.log(question)
    const onFinish = async (values: any) => {
        console.log(values)
        if (!values.isTrue) values.isTrue=false
        try {
            await createResponse(values.value, values.isTrue, values.quest_id)
            toast.success("Create Response success");
        } catch (error) {
            toast.error(error.message)
        }
    }
    return (
        <Suspense fallback={<h1>Loading signupasdasdas page...</h1>}>
            <div className='w-full grid place-items-center text-center h-full items-center '>
                {/* <Card className='w-full h-full justify-center items-center grid rounded-none'> */}
                <Form
                    className='h-full flex flex-col flex-1 justify-center items-center w-full'
                    size='large'
                    name="createCourse"
                    layout='vertical'
                    requiredMark={false}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                >

                    <CardContent>

                        <Form.Item
                            name="quest_id"
                            rules={[
                                { required: true, message: 'Please select chapters for this quiz!' },
                            ]}
                            hasFeedback
                        >
                            <Select
                                showSearch
                                placeholder="Question"
                                filterOption={(input, option) =>
                                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                }
                                options={question.map((item) => ({ value: item.id_quest, label: item.description}))}

                            />
                        </Form.Item>

                        <Form.Item
                            name="value"
                            rules={[
                                { required: true, message: 'Please select value for this question!' },
                            ]}
                            hasFeedback
                        >
                            <Input placeholder="Value" />
                        </Form.Item>

                        <Form.Item name="isTrue" valuePropName="checked">
                            <Checkbox defaultChecked={false}>isTrue</Checkbox>
                        </Form.Item>




                        <Form.Item >
                            <Button className="w-full" htmlType='submit'>Create Course</Button>

                        </Form.Item>
                        {/*  */}

                        {/*  */}
                    </CardContent>
                </Form>
                {/* </Card> */}
            </div>
        </Suspense>
    )
}

export default ReponseQuestion 