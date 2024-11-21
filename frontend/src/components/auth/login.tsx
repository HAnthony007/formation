'use client'
import { useLogin } from '@/hooks/useAuth';
import { Form, Input } from 'antd'
import { Button } from '../ui/button';
import Link from 'next/link';
import { Separator } from '../ui/separator';
import { Suspense } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card';
import Loading from '@/app/[locale]/login/loading';

export default function LoginForm() {

    const { login } = useLogin()
    const onFinish = async (values: any) => {

        console.log('Received values of form: ', values);
        try {
            const res = await login(values.email, values.password)
            console.log("response login: " + res)
            console.log("response login: " + values.email, values.password)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <Suspense fallback={<h1>Loading login page...</h1>}>
            <div className='w-full grid place-items-center text-center h-full items-center'>
                {/* <Card className='w-full h-full justify-center items-center grid rounded-none'> */}
                    <Form
                        name="login"
                        layout='vertical'
                        requiredMark={false}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        className='max-w-[100%]'
                    >
                        <CardContent>
                            <Form.Item
                                name="email"
                                rules={[
                                    { required: true, message: 'Please input your Username!' },
                                    { type: 'email', message: 'The input is not valid E-mail!' },
                                ]}
                            >
                                <Input placeholder="email" />
                            </Form.Item>

                            <Form.Item
                                name="password"
                                rules={[
                                    { required: true, message: 'Please input your Password!' },
                                    { min: 6, message: 'Password must be at least 6 characters' },
                                ]}
                            >
                                <Input.Password type="password" placeholder="Password" />
                            </Form.Item>

                        </CardContent>

                        <CardFooter className='grid'>
                            <Form.Item className='w-full'>
                                <Button type="submit" className='w-full'>Login</Button>
                            </Form.Item>
                            <span>Don't have an account yet? <Link href="/signup" className='hover:underline'>Sign Up</Link></span>
                        </CardFooter>

                    </Form>
                {/* </Card> */}
            </div>
        </Suspense>
    )
}