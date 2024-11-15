import { LANGAGE_VERSIONS } from "@/configs/ideConfig"
import axios from "axios"

const pistonAPI = axios.create({
    baseURL: 'https://emkc.org/api/v2/piston'
})

export const resultCode = async (langage: string, sourceCode: string) => {

    const res = await pistonAPI.post('/execute', {
        "language": langage,
        "version": LANGAGE_VERSIONS[langage as keyof typeof LANGAGE_VERSIONS],
        "files": [
            {
                "content": sourceCode
            }
        ], 
    })
    return res.data

}
export const packages = async () => {
    const res = await pistonAPI.get('/runtimes')
    return res.data
}