'use client'
import { useLogin } from '@/hooks/useAuth';
import { Button, Form, Input } from 'antd'

export function LoginForm() {

    const { login } = useLogin()
    const onFinish = async (values: any) => {

        console.log('Received values of form: ', values);
        try {
            const res = await login(values.email, values.password)
            console.log("response login: " + res)

        } catch (error) {
            console.log(error)
        }
    }
    return (
        <Form
            name="login"
            initialValues={{ remember: true }}
            style={{ maxWidth: 360 }}
            onFinish={onFinish}
        >
            <Form.Item
                name="email"
                rules={[{ required: true, message: 'Please input your Username!' }]}
            >
                <Input placeholder="email" />
            </Form.Item>

            <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your Password!' }]}
            >
                <Input type="password" placeholder="Password" />
            </Form.Item>

            <Form.Item>
                <Button block type="primary" htmlType="submit">
                    Sign up
                </Button>
                or <a href="">Register now!</a>
            </Form.Item>
        </Form>
    )
}