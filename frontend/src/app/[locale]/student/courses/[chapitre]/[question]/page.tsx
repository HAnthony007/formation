'use client'
import { Ide } from "@/components/editorCode/ide";
import Question from "@/components/editorCode/question";
import { Suspense, use } from "react";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { useChapter, useChapterId, useQuestion } from "@/hooks/useAllUser";
import { Badge, Button, Card, List, Popconfirm, Tag } from 'antd'
import { CardContent, CardFooter } from "@/components/ui/card";
import { usePathname, useRouter } from "next/navigation";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Slash } from "lucide-react";

export default function CoursePage({
    params,
}: {
    params: Promise<{ question: string }>; // Corrige le type pour une utilisation correcte
}) {
    const resolvedParams = use(params)
    const router = useRouter()
    const { chapterId } = useChapterId(resolvedParams.question);
    const pathname = usePathname()

    const { chapter } = useChapter(chapterId?.[0]?.chpt_id)
    // const router = useRouter()
    console.log("Voici chapter: ",chapter)
    console.log("Voici chapterId: ",chapterId)
    // const {} = useChapter()
    const handleVoir= (id: number) => {
        console.log(id)
        router.push(`/student/courses/3/11/${id}`);
        router.refresh()
    };

    console.log("Vos question: ", chapterId)
    console.log("Vos : ",)
    return (
        <div className="w-full h-screen ">

            <div>
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/student/courses/">{chapter?.course?.title}</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator>
                            <Slash />
                        </BreadcrumbSeparator>
                        <BreadcrumbItem>
                            <BreadcrumbLink href={`/student/courses/${chapter?.course?.id_cours}`}>{chapter?.chpt?.title}</BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <h1 className="text-3xl text-center flex justify-center w-full font-bold">
                    Question Liste
                </h1>
            </div>


            <Suspense fallback={<div>Loading Liste students...</div>}>
                <List
                    grid={{ gutter: 16 }}
                    className="h-full"
                    size="small"
                    dataSource={chapterId}
                    renderItem={(item) => (

                        <List.Item>

                            <Card
                                title={`Question ${item.id_quest}:`}
                                hoverable
                                // onClick={() =>
                                //     router.push(`/student/courses/${item.id_cours}`)
                                // }
                                size="small"
                                className="w-[380px] min-w-full flex flex-col"
                            >
                                <CardContent className="w-full flex justify-between space-x-5">
                                    <div className="flex space-x-5">
                                            {/* <a href={src} download className="w-fit">
                                                <img
                                                    src="/pdfIcon.jpg"
                                                    alt="PDF Icon"
                                                    style={{ width: 40, height: 50 }}
                                                />
                                            </a> */}
                                            <p>{item.description}</p>
                                        </div> 
                                    <Badge
                                        color="orange"
                                        count={item.points}
                                        className="text-xs rounded-full"
                                    />
                                </CardContent>

                                <CardFooter className="flex justify-between">
                                    <div>
                                        <Tag color="blue">
                                            {new Date(item.created_at)
                                                .toISOString()
                                                .split("T")[0]
                                                .split("-")
                                                .reverse()
                                                .join("-")}
                                        </Tag>
                                    </div>
                                    <Button variant="filled" type="primary" className="z-50"
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            console.log(item.id_quest)
                                            handleVoir(item.id_quest)
                                        }}
                                    >
                                        Voir
                                    </Button>
                                </CardFooter>
                            </Card>
                        </List.Item>
                    )}
                />
            </Suspense>
        </div>
    );
}