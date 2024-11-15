import { packages, resultCode } from '@/hooks/usePiston'
import { Button } from 'antd'
import { useState } from 'react'
import { toast } from 'sonner'

export default function Output({ sourceCode, langage }: { sourceCode: string, langage: string }) {
    const [output, setOutput] = useState(null)
    const [isLoading, setIsLoading] = useState(false)


    const runCode = async () => { 
        if(!sourceCode) return
        
        if (langage=="html") return <iframe >{sourceCode}</iframe>

        const runtime = await packages()
        console.log(runtime)
        try {
            setIsLoading(true)
            const {run:result} = await resultCode(langage, sourceCode)
            console.log("Voici le outupt: ",result.output)
            setOutput(result.output)

        } catch (error) {
            console.log("Voici l'erreur: ", error)
            toast.error(`${(error as Error).message || "Il y a une erreur"}`)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <>
            <Button type='primary'
                loading={isLoading}
                onClick={runCode}
            >
                Run Code
            </Button>
            <div className='w-full container' style={{height: "75vh", border: "1px solid #333"}}>
                {output ? output : "Run the code..."}
            </div>       
        </>
    )
}