"use client"
import { Editor } from "@monaco-editor/react";
import { useState } from "react";
import LangageSelect from "./LangageSelect";
import { CODE_SNIPPETS } from "@/configs/ideConfig";
import Output from "./Output";
import { useTheme } from "next-themes";

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



    const onSelect = (langage: string) => {
        setLangage(langage)
        setValue(CODE_SNIPPETS[langage as keyof typeof CODE_SNIPPETS])
    }
    console.log(value)

    return (
        <div className="container grid grid-cols-2 gap-2 w-screen">
            <div>
                <LangageSelect langage={langage} onSelect={onSelect} />
                <Editor height="75vh"
                    language={langage}
                    defaultValue={CODE_SNIPPETS[langage as keyof typeof CODE_SNIPPETS]}
                    theme={resolvedTheme === 'dark' ? 'vs-dark' : 'light'}
                    width="100%"
                    value={value || ''}
                    onChange={(value) => setValue(value || '')}
                />
            </div>
            <div>
                <Output sourceCode={value} langage={langage} />
            </div>

        </div>
    )
}