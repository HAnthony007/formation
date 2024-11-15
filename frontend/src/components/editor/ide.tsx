"use client"
import { Editor, EditorProps } from "@monaco-editor/react";
import { useRef, useState } from "react";
import LangageSelect from "./LangageSelect";
import { CODE_SNIPPETS } from "@/configs/ideConfig";
import Output from "./Output";

export function Ide() {
    const [value, setValue] = useState("")
    const [langage, setLangage] = useState("javascript")
    const editorRef = useRef();

    const onMount = (editor) => {
        editorRef.current = editor
        editor.focus()
    }

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
                    theme="vs-dark"
                    width="100%"
                    onMount={onMount}
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