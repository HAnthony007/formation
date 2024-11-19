'use client'
import { useSignup } from '@/hooks/useAuth';
import { Col, Form, Input, Row, Select } from 'antd'
import Link from 'next/link';
import { Button } from '../ui/button';
import { Option } from 'antd/es/mentions';
import { useRouter } from 'next/navigation';
import { Suspense } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Separator } from '../ui/separator';

export default function SignUpForm() {
    const router = useRouter()

    const { signup } = useSignup()
    const onFinish = async (values: any) => {

        console.log('Received values of form: ', values);
        try {
            const res = await signup(values.name, values.email, values.role, values.password)
            console.log("response signup: " + res)

        } catch (error) {
            console.log(error)
        }
    }

    return (

        <Suspense fallback={<h1>Loading signupasdasdas page...</h1>}>
            <div className='w-full grid place-items-center text-center h-full'>

                <Card className='w-full h-full rounded-none'>
                    <Form
                        size='large'
                        name="signup"
                        layout='vertical'
                        requiredMark={false}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                    >
                        <CardHeader>
                            <CardTitle className='text-center text-2xl text-foreground'>Create an account</CardTitle>
                            <Separator />
                        </CardHeader>
                        
                        <CardContent>


                            <Row gutter={16}>
                                <Col xs={24} md={12} >
                                    <Form.Item
                                        label="Firstname"
                                        name="firstname"
                                        rules={[{ required: true, message: 'Please enter your firstname!' }]}
                                        hasFeedback
                                    >
                                        <Input placeholder="Your firstname" />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} md={12} >
                                    <Form.Item
                                        label="Lastname"
                                        name="lastname"
                                        rules={[{ required: true, message: 'Please enter your lastname!' }]}
                                        hasFeedback
                                    >
                                        <Input placeholder="Your lastname" />
                                    </Form.Item>
                                </Col>

                            </Row>
                            <Row gutter={16} >
                                <Col span={24}>
                                    <Form.Item
                                        name="email"
                                        label="E-mail"
                                        rules={[
                                            { required: true, message: 'Please input your Username!' },
                                            { type: 'email', message: 'The input is not valid E-mail!' },
                                        ]}
                                        hasFeedback
                                    >
                                        <Input placeholder="Your email" />
                                    </Form.Item>

                                </Col>

                            </Row>

                            <Row gutter={16}>
                                <Col xs={24} md={12}>
                                    <Form.Item
                                        name="password"
                                        label="Password"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your password!',
                                            },
                                        ]}
                                        hasFeedback
                                    >
                                        <Input.Password placeholder='Your password'/>
                                    </Form.Item>
                                </Col>
                                <Col xs={24} md={12}>
                                    <Form.Item
                                        name="confirm"
                                        label="Confirm Password"
                                        dependencies={['password']}
                                        hasFeedback
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please confirm your password!',
                                            },
                                            ({ getFieldValue }) => ({
                                                validator(_, value) {
                                                    if (!value || getFieldValue('password') === value) {
                                                        return Promise.resolve();
                                                    }
                                                    return Promise.reject(new Error('The new password that you entered do not match!'));
                                                },
                                            }),
                                        ]}
                                    >
                                        <Input.Password placeholder='Confirm your password'/>
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Row gutter={16}>
                                <Col span={24}>
                                    <Form.Item
                                        name="level"
                                        label="level"
                                        rules={[{ required: true, message: 'Please choose your level' }]}
                                        hasFeedback
                                    >
                                        <Select placeholder="Choose your level" defaultValue={"beginner"} >
                                            <Option value="beginner">Beginner</Option>
                                            <Option value="intermediate">Intermediate</Option>
                                            <Option value="advanced">Advanced</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                            </Row>
{/*  */}

{/*  */}
                        </CardContent>
                        <CardFooter className='grid'>
                            <Form.Item className='w-full'>
                                <Button type="submit" className='w-full'>Sign Up</Button><br />
                            </Form.Item>
                            <span>Already got an account? <Link href="/login" className='hover:underline'>Log In</Link></span>
                        </CardFooter>

                    </Form>
                </Card>


            </div>
        </Suspense>


    )
}