'use client'
import { CardContent } from '@/components/ui/card'
import { useAllChapiter } from '@/hooks/useAllUser'
import { useCreateQuestion } from '@/hooks/useCourse'
import { Button, Card, Col, Form, Input, InputNumber, Row, Select, Space, Typography } from 'antd'
import { X, XIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { Suspense } from 'react'
import { toast } from 'sonner'

type Props = {}

const CreateQuiz = (props: Props) => {
    const router = useRouter()
    const { chapiter } = useAllChapiter()
    const { createQuestion } = useCreateQuestion()
    const id = chapiter.map((item) => ({ value: item.id_chpt, label: item.title }))
    console.log(console.log(id))
    const onFinish = async (values: any) => {
        console.log(values)
        try {
            await createQuestion(values.description, values.type, values.points as string, values.chpt_id)
            router.push('/trailer/createCourse/createResponse')
            toast.success('Create question success')
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
                            name="chpt_id"
                            rules={[
                                { required: true, message: 'Please select chapters for this quiz!' },
                            ]}
                            hasFeedback
                        >
                            <Select
                                showSearch
                                placeholder="Chapters"
                                filterOption={(input, option) =>
                                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                }
                                options={chapiter.map((item) => ({ value: Number(item.id_chpt), label: item.title }))}

                            />
                        </Form.Item>

                        <Form.Item
                            name="description"
                            rules={[
                                { required: true, message: 'Please select description for this quiz!' },
                            ]}
                            hasFeedback
                        >
                            <Input placeholder="Desription" />
                        </Form.Item>

                        <Form.Item
                            name="type"
                            rules={[
                                { required: true, message: 'Please select type for this quiz!' },
                            ]}
                            hasFeedback
                        >
                            <Select
                                showSearch
                                placeholder="Type"
                                filterOption={(input, option) =>
                                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                }
                                options={[{ value: 'qcm', label: "QCM" },
                                { value: 'code', label: 'Code' }
                                ]}

                            />
                        </Form.Item>

                        <Form.Item
                            name="points"
                            rules={[
                                { required: true, message: 'Please select type for this quiz!' },
                            ]}
                            hasFeedback
                        >
                            <InputNumber placeholder="Point" />
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

export default CreateQuiz