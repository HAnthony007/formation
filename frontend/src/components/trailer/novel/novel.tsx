
import {
    EditorContent,
    EditorRoot,
    type JSONContent
} from 'novel'


interface EditorProps {
    initialValue?: JSONContent
    onChange: (value: string) => void
}

const Editor = ({
    initialValue, onChange
}: EditorProps
) => {
    <EditorRoot>
        <EditorContent
            className="border p-4 rounded-xl"
            {...(initialValue && { initialContent: initialValue })}
            
        >

        </EditorContent>
    </EditorRoot>
}