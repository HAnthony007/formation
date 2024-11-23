'use client'
import { useParams, useRouter } from "next/navigation"
import { Suspense } from "react"
import { Col, Form, Input, InputNumber, Row, Select, Space, Upload } from 'antd'
import { CardContent } from "@/components/ui/card"
import TextArea from "antd/es/input/TextArea"
import { Button } from "@/components/ui/button"
import { Inbox } from "lucide-react"
import { toast } from "sonner"
import { useCreateLesson } from "@/hooks/useCourse"
import { useAllCourses } from "@/hooks/useAllUser"


export default function coursesPage() {
    const { courses } = useAllCourses()

    const router = useRouter()
    const { createLesson } = useCreateLesson()

    const idCourses = courses.map((item) => ({ value: item.id_cours, label: item.title }))

    const orders = 1
    const onFinish = async (values: any) => {
        const { title, ptsRequired, cours_id} = values;

        // Récupérer le fichier depuis le champ d'upload
        const fileInput = document.getElementById('fileInput') as HTMLInputElement;
        const contents = fileInput?.files?.[0];

        if (!contents) {
            toast.error("Please upload a file");
            return;
        }

        console.log("File to upload:", contents);

        // Créer un formData avec toutes les données
        const formData = new FormData();
        formData.append("title", title);
        formData.append("orders", "1");
        formData.append("cours_id", cours_id)
        formData.append("ptsRequired", ptsRequired as string);
        formData.append("contents", contents); // Ajout du fichier
        formData.append("courses", courses as string);

        try {
            await createLesson(formData);

            router.push('trailer/createCourse/createQuestion')
            toast.success("Lesson created successfully!");
        } catch (error) {
            toast.error("Error creating lesson: " + error);
        }
    };

    return (
        <Suspense fallback={<h1>Loading signupasdasdas page...</h1>}>
            <div className='w-full grid place-items-center text-center h-full items-center '>
                <h1>Create Chapter</h1>
                {/* <Card className='w-full h-full justify-center items-center grid rounded-none'> */}
                <Form
                    className='h-full flex flex-col flex-1 justify-center items-center w-full'
                    size='large'
                    name="createCourse"
                    layout='vertical'
                    requiredMark={false}
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                >

                    <CardContent>
                        <Form.Item
                            name="cours_id"
                            rules={[{ required: true, message: 'Please enter your courses id!' }]}
                            hasFeedback
                        >
                            <Select
                                showSearch
                                placeholder="Cours"
                                filterOption={(input, option) =>
                                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                }
                                options={courses.map((item) => ({ value: Number(item.id_cours), label: item.title }))}

                            />
                        </Form.Item>
                        
                        <Form.Item
                            name="title"
                            rules={[{ required: true, message: 'Please enter your courses name!' }]}
                            hasFeedback
                        >
                            <Input placeholder="Title" />
                        </Form.Item>

                        <Form.Item
                            name="ptsRequired"
                            rules={[
                                { required: true, message: 'Please input your required points!' },
                            ]}
                            hasFeedback

                        >
                            <InputNumber placeholder="Required Points" min={0}
                                style={{
                                    width: '100% !important'
                                }}
                            />
                        </Form.Item>



                        <Form.Item className="w-full"
                            name="orders"
                            rules={[
                                { required: true, message: 'Please input your orders chapters!' },
                            ]}
                            hasFeedback

                        >
                            <InputNumber style={{ width: "100%" }} placeholder="Orders" min={0} />
                        </Form.Item>
                    
                        <Row gutter={16}>
                            <Col span={24}>
                                <Form.Item >
                                    <input
                                        id="fileInput"
                                        type="file"
                                        accept=".pdf"
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Form.Item className='w-full'>
                            <Button type='submit' variant='default' className='w-full'>Sign Up</Button><br />
                        </Form.Item>
                        {/*  */}

                        {/*  */}
                    </CardContent>
                </Form>
                {/* </Card> */}
            </div>
        </Suspense >
    )
}