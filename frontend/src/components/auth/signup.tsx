'use client'
import { useSignup } from '@/hooks/useAuth';
import { Col, Form, FormProps, Input, Row, Select } from 'antd'
import Link from 'next/link';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';
import { Suspense } from 'react';
import { CardContent, } from '../ui/card';
import { toast } from 'sonner';
import { SignUp } from '@/types/authentification';

export default function SignUpForm() {
    const router = useRouter()

    const { signup } = useSignup()
    const onFinish: FormProps<SignUp>['onFinish'] = async (values) => {
        console.log("Voici les donne: " + values.firstName, values.lastName, values.email, values.password)
        try {
            const res = await signup(values.firstName, values.lastName, values.email, values.password)
        } catch (error) {
            if (error.response && error.response.status === 422) {

                toast.error("Erreur de validation: ", error.response.data.errors)
            }
        }
    }

    return (

        <Suspense fallback={<h1>Loading signupasdasdas page...</h1>}>
            <div className='w-full grid place-items-center text-center h-full items-center mx-9'>
                {/* <Card className='w-full h-full justify-center items-center grid rounded-none'> */}
                <Form
                    className='h-full flex flex-col flex-1 justify-center items-cente'
                    size='large'
                    name="signup"
                    layout='vertical'
                    requiredMark={false}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}

                >
                    {/* <CardHeader>
                            <CardTitle className='text-center text-2xl text-foreground'>Create an account</CardTitle>
                            <Separator />
                        </CardHeader> */}

                    <CardContent>


                        <Row gutter={16}>
                            <Col span={24}>
                                <Form.Item
                                    name="firstName"
                                    rules={[{ required: true, message: 'Please enter your firstname!' }]}
                                    hasFeedback
                                >
                                    <Input placeholder="Your firstname" />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={24}>
                                <Form.Item
                                    name="lastName"
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
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your password!',
                                        },
                                        { min: 6, message: 'Password must be at least 6 characters' },
                                    ]}
                                    hasFeedback
                                >
                                    <Input.Password placeholder='Your password' />
                                </Form.Item>
                            </Col>
                            <Col xs={24} md={12}>
                                <Form.Item
                                    name="confirm"
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
                                    <Input.Password placeholder='Confirm your password' />
                                </Form.Item>
                            </Col>
                        </Row>

                        {/*  */}

                        <Form.Item className='w-full'>
                            <Button type="submit" className='w-full'>Sign Up</Button><br />
                        </Form.Item>
                        <span>Already got an account? <Link href="/login" className='hover:underline'>Log In</Link></span>
                        {/*  */}
                    </CardContent>
                </Form>
            </div>
        </Suspense>


    )
}