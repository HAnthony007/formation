'use client'
import { Ide } from "@/components/editorCode/ide";
import Question from "@/components/editorCode/question";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { useQuestionExo } from "@/hooks/useAllUser";
import { Suspense, use } from "react";

export default function PratiquePage({
    params,
}: {
    params: Promise<{ pratique: string }>; // Corrige le type pour une utilisation correcte
}) {
    const resolvedParams = use(params)
    const { questionId } = useQuestionExo(resolvedParams.pratique)

    console.log("Voici params: ", resolvedParams)
    console.log("Vos question Exo: ", questionId)
    return (
        <>

            <h1>Hello question</h1>
            <Suspense fallback={<p>Chargement...</p>}>
                <ResizablePanelGroup direction="horizontal">
                    {/* <ResizablePanel>
                        <Card>
                            <CardHeader>
                                <CardTitle>Description</CardTitle>
                                <CardDescription>{questionId?.quest?.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p></p>
                            </CardContent>
                            <CardFooter>
                                <p>Card Footer</p>
                            </CardFooter>
                        </Card>
                    </ResizablePanel> */}

                    <ResizableHandle />

                    <ResizablePanel>
                        <Ide />
                    </ResizablePanel>
                </ResizablePanelGroup>
            </Suspense>
        </>
    )
}