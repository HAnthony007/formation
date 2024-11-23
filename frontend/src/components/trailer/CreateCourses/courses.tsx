'use client'
import { Suspense, useState } from "react";
import { Button as ButtonAntd, Col, Form, Input, Row, Select } from 'antd'
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TextArea from "antd/es/input/TextArea";
import { toast } from "sonner";
import { useCreateCourse } from "@/hooks/useCourse";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";


export default function CreateCourses() {
    const router = useRouter()
    const onFinish = async (values: any) => {
        const { createCourse } = useCreateCourse()
        try {
            const res = await createCourse(values.title, values.description, values.language, values.category)
            const id = res?.data.data
            router.push(`/trailer/createCourse/createChapter`)
        } catch (error) {
            console.log(error)
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

                        <Row gutter={16}>
                            <Col span={32}>
                                <Form.Item
                                    name="title"
                                    rules={[{ required: true, message: 'Please enter your courses name!' }]}
                                    hasFeedback
                                >
                                    <Input placeholder="Title" />
                                </Form.Item>
                            </Col>
                            <Col span={32}>
                                <Form.Item
                                    name="category"
                                    rules={[
                                        { required: true, message: 'Please input your categories courses!' },
                                    ]}
                                    hasFeedback
                                >
                                    <Select
                                        showSearch
                                        placeholder="Category"
                                        filterOption={(input, option) =>
                                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                        }
                                        options={[
                                            { value: 'web', label: 'Developement web' },
                                            { value: 'mobile', label: 'Application mobile' },
                                        ]}
                                    />
                                </Form.Item>

                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={24}>
                                <Form.Item
                                    name="description"
                                    rules={[{ required: true, message: 'Please enter your course description' }]}
                                    hasFeedback
                                >
                                    <TextArea placeholder="Description" />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={8} >


                        </Row>

                        <Row gutter={16}>
                            <Col span={24} >
                                <Form.Item
                                    name="language"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please select your langage!',
                                        },
                                    ]}
                                    hasFeedback
                                >
                                    <Select
                                        showSearch
                                        placeholder="Language"
                                        filterOption={(input, option) =>
                                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                        }
                                        options={[
                                            { value: 'francais', label: 'Francais' },
                                            { value: 'anglais', label: 'Anglais' },
                                        ]}
                                    />
                                </Form.Item>
                            </Col>
                        </Row>

                            <Form.Item >
                                <Button  className="w-full">Create Course</Button>
                                
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