'use client'
import { Ide } from "@/components/editorCode/ide";
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
            <Suspense fallback={<p>Chargement...</p>}>
                <ResizablePanelGroup
                    direction="horizontal"
                    className="rounded-lg border w-full "
                >
                    <ResizablePanel >
                        <Card className="w-full ">
                            <CardHeader>
                                <CardTitle>Description:</CardTitle>
                                <CardDescription>{questionId?.quest?.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>Exemple:</p>
                                <p>Entre: {questionId?.resp[0]?.input}</p>
                                <p>Sortie: {questionId?.resp[0]?.value}</p>
                            </CardContent>
                            <CardFooter>
                                <p>Card Footer</p>
                            </CardFooter>
                        </Card>
                    </ResizablePanel>

                    <ResizableHandle />

                    <ResizablePanel>

                        <Ide />
                    </ResizablePanel>
                </ResizablePanelGroup>
            </Suspense>
        </>
    )
}