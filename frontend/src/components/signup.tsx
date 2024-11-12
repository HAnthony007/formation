'use client'
import { useSignup } from '@/hooks/useAuth';
import { Button, Checkbox, Flex, Form, Input } from 'antd'

export function SignUpForm() {

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
        <Form
            name="login"
            initialValues={{ remember: true }}
            style={{ maxWidth: 360 }}
            onFinish={onFinish}
        >
            <Form.Item
                name="name"
                rules={[{ required: true, message: 'Please input your Username!' }]}
            >
                <Input placeholder="name" />
            </Form.Item>
            <Form.Item
                name="email"
                rules={[{ required: true, message: 'Please input your Username!' }]}
            >
                <Input placeholder="email" />
            </Form.Item>
            <Form.Item
                name="role"
                rules={[{ required: true, message: 'Please input your Username!' }]}
            >
                <Input placeholder="role" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your Password!' }]}
            >
                <Input type="password" placeholder="Password" />
            </Form.Item>
            <Form.Item>
                <Flex justify="space-between" align="center">
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                    <a href="">Forgot password</a>
                </Flex>
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