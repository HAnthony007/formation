"use client";

import React, { Suspense, useEffect, useState } from "react";
import { Avatar, Button, Card, List, Space, Tag } from "antd";
import { toast } from "sonner";
import { CardContent, CardFooter } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { Ear, MessageCircle, Stars } from "lucide-react";
import {
    useAllCourses,
    useAllUserCours,
    useDeleteUsersCours,
} from "@/hooks/useAllUser";
import { useCreateUserCours } from "@/hooks/useCourse";

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);

export default function StudentCoursesPage() {
    const router = useRouter();
    const { courses = [] } = useAllCourses(); // Ensure courses defaults to an empty array
    const { userCourses: initialUserCourses = [] } = useAllUserCours();
    const [loadingId, setLoadingId] = useState<number | null>(null);
    const [userCourses, setUserCourses] = useState<typeof initialUserCourses>([]);

    useEffect(() => {
        setUserCourses(initialUserCourses);

        
    }, [initialUserCourses]);

    const onClickUnfollow = async (id: number) => {
        const { DeleteUserCours } = useDeleteUsersCours();
        try {
            setLoadingId(id);
            await DeleteUserCours(id);
            setUserCourses((prev) =>
                prev.filter((course) => course.pivot.cours_id !== id)
            );
            toast.success("Successfully unsubscribed!");
        } catch (error: any) {
            toast.error(`Error: ${error.message || error}`);
        } finally {
            setLoadingId(null);
        }
    };

    const onClickFollow = async (id_cours: number) => {
        const { createUserCours } = useCreateUserCours();
        try {
            setLoadingId(id_cours);
            await createUserCours(id_cours);
            setUserCourses((prev) => [...prev, { pivot: { cours_id: id_cours } }]);
            toast.success("Successfully subscribed!");
        } catch (error: any) {
            toast.error(`Error: ${error.message || error}`);
        } finally {
            setLoadingId(null);
        }
    };

    return (
        <div className="container p-4 flex flex-col flex-1 justify-center gap-4 w-full items-center">
            <h1>Voici les cours</h1>
            <Suspense fallback={<div>Loading Liste students...</div>}>
                <List
                    size="small"
                    grid={{
                        gutter: 16,
                    }}
                    dataSource={courses}
                    renderItem={(item) => (
                        <List.Item>
                            <Card
                                title={item.title}
                                hoverable
                                size="small"
                                onClick={() => router.push(`/student/courses/${item.id_cours}`)}
                                className="w-[380px] min-w-full flex flex-col gap-4"
                            >
                                <CardContent>
                                    <p>{item.description}</p>
                                </CardContent>
                                <CardFooter className="flex justify-between">
                                    <div>
                                        <Tag color="gold">{item.language}</Tag>
                                        <Tag color="blue">
                                            {new Date(item.created_at)
                                                .toISOString()
                                                .split("T")[0]
                                                .split("-")
                                                .reverse()
                                                .join("-")}
                                        </Tag>
                                    </div>
                                    {userCourses
                                        .map((e) => e.pivot.cours_id)
                                        .includes(item.id_cours) ? (
                                        <Button
                                            loading={loadingId === item.id_cours}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                onClickUnfollow(item.id_cours);
                                            }}
                                            className="z-50"
                                        >
                                            Désabonner
                                        </Button>
                                    ) : (
                                        <Button
                                            loading={loadingId === item.id_cours}
                                            type="primary"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                onClickFollow(item.id_cours);
                                            }}
                                            className="z-50"
                                        >
                                            Suivre
                                        </Button>
                                    )}
                                </CardFooter>
                            </Card>
                        </List.Item>
                    )}
                />
            </Suspense>
        </div>
    );
}

{/* 
                <List
                    itemLayout="vertical"
                    size="large"
                    pagination={{
                        onChange: (page) => {
                            console.log(page);
                        },
                        pageSize: 3,
                    }}
                    dataSource={courses}
                    footer={
                        <div>
                            <b>ant design</b> footer part
                        </div>
                    }
                    renderItem={(item) => (
                        <List.Item
                            key={item.title}
                            actions={[
                                <IconText icon={Stars} text="156" key="list-vertical-star-o" />,
                                <IconText icon={Ear} text="156" key="list-vertical-like-o" />,
                                <IconText icon={MessageCircle} text="2" key="list-vertical-message" />,
                            ]}
                            extra={
                                <img
                                    width={272}
                                    alt="logo"
                                    src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                                />
                            }
                        >
                            <List.Item.Meta
                                avatar={<Avatar src={item.avatar} />}
                                title={<a href={item.href}>{item.title}</a>}
                                description={`${item.language}. created at: ${item.created_at}`}
                            />
                            {item.desription}
                        </List.Item>
                    )}
                /> */}