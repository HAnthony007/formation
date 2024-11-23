import { packages, resultCode } from '@/hooks/usePiston'
import { Button } from 'antd'
import { useState } from 'react'
import { toast } from 'sonner'
import { TRU } from './ide'
import { Item } from '@radix-ui/react-navigation-menu'
import axiosInstance from '@/utils/axiosInstance'
import { exit } from 'process'
const axios = require('axios')
var rep = true
export default function Output({ sourceCode, langage }: { sourceCode: string, langage: string }) {
    const [output, setOutput] = useState(null)
    const [isLoading, setIsLoading] = useState(false)


    const runCode = async () => {
        if (!sourceCode) return

        if (langage == "html") return <iframe >{sourceCode}</iframe>

        const runtime = await packages()
        console.log(runtime)
        try {
            setIsLoading(true)
            const { run: result } = await resultCode(langage, sourceCode)
            console.log("Voici le outupt: ", result.output)
            setOutput(result.output)

        } catch (error) {
            console.log("Voici l'erreur: ", error)
            toast.error(`${(error as Error).message || "Il y a une erreur"}`)
        } finally {
            setIsLoading(false)
        }
    }

    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    let rep=true
    const OK = async () => {
        // Boucle asynchrone pour itérer sur chaque élément avec délai
        for (const Item of TRU) {
            const params = {
                language: 'python',  // Remplacez par le langage souhaité
                version: '3.10.0',   // Remplacez par la version du langage
                files: [
                    {
                        name: 'main.py',
                        content: sourceCode  // Code à exécuter
                    }
                ],
                stdin: Item.input  // Entrée pour le programme (si nécessaire)
            };
    
            try {
                // Envoie la requête après le délai de 1 seconde
                await sleep(1000);  // Délai de 1 seconde (1000 ms)
                const response = await axios.post('https://emkc.org/api/v2/piston/execute', params);
                console.log(response.data.run.output)
                console.log(Number(response.data.run.output) === Number(Item.output));

                console.log(Item.output)
            } catch (error) {
                console.error('Erreur lors de l\'exécution:', error.message);
            }
        }
    };
    


    return (
        <>
            <Button type='primary'
                loading={isLoading}
                onClick={runCode}
            >
                Run Code
            </Button>
            <Button type='primary'
                loading={isLoading}
                onClick={OK}
            >
                Execute
            </Button>
            <div className='w-full container' style={{ height: "75vh", border: "1px solid #333" }}>
                {output ? output : "Run the code..."}
            </div>
        </>
    )
}