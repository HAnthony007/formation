'use client'
import { useLogin } from '@/hooks/useAuth';
import { Form, Input } from 'antd'
import { Button } from '../ui/button';
import Link from 'next/link';
import { Separator } from '../ui/separator';
import { Suspense } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card';
import Loading from '@/app/[locale]/login/loading';
import { toast } from 'sonner';

export default function LoginForm() {

    const { login } = useLogin()
    const onFinish = async (values: any) => {
        try {
            await login(values.email, values.password)
        } catch (error) {
            if (error.response && error.response.status === 422) {
                
            toast.error("Erreur de validation: ", error.response.data.errors)
            }
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
                            ]}
                        >
                            <Input.Password type="password" placeholder="Password" />
                        </Form.Item>

                    </CardContent>

                    <Form.Item className='w-full'>
                        <Button type="submit" className='w-full'>Login</Button>
                    </Form.Item>
                    <span>Don't have an account yet? <Link href="/signup" className='hover:underline'>Sign Up</Link></span>

                </Form>
                {/* </Card> */}
            </div>
        </Suspense>
    )
}