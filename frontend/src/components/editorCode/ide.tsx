"use client"
import { Editor } from "@monaco-editor/react";
import { useState } from "react";
import LangageSelect from "./LangageSelect";
import { CODE_SNIPPETS } from "@/configs/ideConfig";
import Output from "./Output";
import { useTheme } from "next-themes";
import axios from "axios";
import { Button } from 'antd'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "../ui/resizable";

export const TRU = [
    {
        input: '2',
        output: '2'
    },
    {
        input: '3',
        output: '6',
    },
    {
        input: '5',
        output: '120',
    }
]

export function Ide() {
    const { resolvedTheme } = useTheme()
    const [value, setValue] = useState("")
    const [langage, setLangage] = useState("javascript")
    const [output, setOutput] = useState<
    Array<{ input: string; expectedOutput: string; actualOutput: string; isCorrect: boolean }>
>([]);
    const [isLoading, setIsLoading] = useState(false)
    const [result, setResult] = useState(null)

    const onSelect = (langage: string) => {
        setLangage(langage)
        setValue(CODE_SNIPPETS[langage as keyof typeof CODE_SNIPPETS])
    }


    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    let rep = true
    const OK = async () => {
        let logs: Array<{ input: string; expectedOutput: string; actualOutput: string; isCorrect: boolean }> = [];
        setIsLoading(true);
        // Boucle asynchrone pour itérer sur chaque élément avec délai
        for (const Item of TRU) {
            const params = {
                language: 'python',  // Remplacez par le langage souhaité
                version: '3.10.0',   // Remplacez par la version du langage
                files: [
                    {
                        name: 'main.py',
                        content: value  // Code à exécuter
                    }
                ],
                stdin: Item.input  // Entrée pour le programme (si nécessaire)
            };

            try {
                setIsLoading(true)
                // Envoie la requête après le délai de 1 seconde
                await sleep(1000);  // Délai de 1 seconde (1000 ms)
                const response = await axios.post('https://emkc.org/api/v2/piston/execute', params);
                const result = (response.data.run.output)
                console.log();

                logs.push({
                    input: Item.input,
                    expectedOutput: Item.output,
                    actualOutput: result,
                    isCorrect: Number(result) === Number(Item.output)
                });
                console.log(Item.output)
            } catch (error) {
                console.error('Erreur lors de l\'exécution:', error.message);
            } finally {
                setIsLoading(false)
            }
        }
        setOutput(logs)
    };

    return (
        <ResizablePanelGroup direction="vertical" className="w-full">
            <ResizablePanel>
                <div className="grid gap-4">
                    <div className="flex items-center justify-between w-full">
                        <LangageSelect langage={langage} onSelect={onSelect} />
                        <Button type='primary'
                            loading={isLoading}
                            onClick={OK}
                        >
                            Execute
                        </Button>
                    </div>
                    <Editor height="75vh"
                        language={langage}
                        defaultValue={CODE_SNIPPETS[langage as keyof typeof CODE_SNIPPETS]}
                        theme={resolvedTheme === 'dark' ? 'vs-dark' : 'light'}
                        width="100%"
                        value={value || ''}
                        onChange={(value) => setValue(value || '')}
                    />
                </div>

            </ResizablePanel>

            <ResizableHandle withHandle />

            <ResizablePanel>

                <div className="w-full container" style={{ height: "75vh", border: "1px solid #333" }}>
                    {output ? (
                        <table>
                        <thead>
                            <tr>
                                <th>Input</th>
                                <th>Expected Output</th>
                                <th>Actual Output</th>
                                <th>Correct</th>
                            </tr>
                        </thead>
                        <tbody>
                            {output.map((log, index) => (
                                <tr key={index}>
                                    <td>{log.input}</td>
                                    <td>{log.expectedOutput}</td>
                                    <td>{log.actualOutput}</td>
                                    <td>{log.isCorrect ? '✔️' : '❌'}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    ) : "Run the code..."}
                </div>

            </ResizablePanel>

        </ResizablePanelGroup>
    )
}