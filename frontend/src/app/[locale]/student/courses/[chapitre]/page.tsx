'use client';

import { useCourse, useCourseId, useUser } from "@/hooks/useAllUser";
import { Suspense, use, useRef } from "react";
import { Badge, Button, Card, List, Popconfirm, Tag } from "antd";
import { CardContent, CardFooter } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useAuthStore } from "@/stores/AuthStore";
import { useUpdatePoint } from "@/hooks/useCourse";

export default function CoursePage({
    params,
}: {
    params: Promise<{ chapitre: string }>; // Corrige le type pour une utilisation correcte
}) {
    const resolvedParams = use(params)
    const router = useRouter();
    const { courseId } = useCourseId(resolvedParams.chapitre); // Assurez-vous que ce hook fonctionne bien côté client
    const { course } = useCourse(resolvedParams.chapitre); // Idem
    const api = process.env.NEXT_PUBLIC_BACKEND_API_FILE;
    const file = course?.[0]?.contents;
    const src = api + file;

    const { user, updateUser } = useUser()

    const { updatePoint } = useUpdatePoint()

    const setUser = useAuthStore((state) => state.setUser)
    const confirm = async (points: number) => {
        try {
            points *= -1;
            const res = await updatePoint(points);
            toast.success("Achat effectué avec succès.")

            const okElement = document.getElementById("ok");
            if (okElement) {
                okElement.textContent = res?.data.data ; // Affiche uniquement la valeur
            }
        } catch (error) {
            console.error(error);
            toast.error('error: ' + error);
        } finally {
            updateUser()
            setUser(user)
            router.refresh()
        }
    };

    const cancel = () => {
        toast.error("Achat annulé.");
    };

    const handleExercice = (id: number) => {
        router.push(`/student/courses/${resolvedParams.chapitre}/${id}`);
    };


    return (
        <div className="flex flex-col justify-center items-center gap-10 w-full h-full">
            <h1 className="text-3xl text-center flex justify-center w-full font-bold">
                {courseId?.title}
            </h1>

            <Suspense fallback={<div>Loading Liste students...</div>}>
                <List
                    grid={{ gutter: 16 }}
                    className="h-full"
                    size="small"
                    dataSource={course}
                    renderItem={(item) => (

                        <Popconfirm
                            title="Acheter le chapitre"
                            description="Vous êtes sûr d'acheter ce chapitre ?"
                            onConfirm={() => (user?.points - item.ptsRequired >= 0 ? confirm(item.ptsRequired) : toast.error("Pas assez de points"))}
                            onCancel={cancel}
                            disabled={user?.points - item.ptsRequired < 0}
                            okText="Oui"
                            cancelText="Non"
                        >
                            <List.Item>

                                <Card
                                    title={`Chapitre ${item.orders}:`}
                                    hoverable
                                    // onClick={() =>
                                    //     router.push(`/student/courses/${item.id_cours}`)
                                    // }
                                    size="small"
                                    className="w-[380px] min-w-full flex flex-col"
                                >
                                    <CardContent className="w-full flex justify-between space-x-5">
                                        <div className="flex space-x-5">
                                            <a href={src} aria-disabled download={false} className="w-fit">
                                                <img
                                                    src="/pdfIcon.jpg"
                                                    alt="PDF Icon"
                                                    style={{ width: 40, height: 50 }}
                                                />
                                            </a>
                                            <p>{item.title}</p>
                                        </div>
                                        <Badge
                                            color="orange"
                                            count={item.ptsRequired}
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
                                            onClick={(e) =>{
                                                e.stopPropagation()
                                                console.log(item.id_chpt)
                                                handleExercice(item.id_chpt)
                                            }}
                                        >
                                            Exercice
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </List.Item>
                        </Popconfirm>
                    )}
                />
            </Suspense>
        </div>
    );
}
