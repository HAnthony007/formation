import { createGoogleGenerativeAI } from '@ai-sdk/google'
import { streamText } from 'ai'
export const maxDuration = 30

const google = createGoogleGenerativeAI({
    apiKey: process.env.NEXT_PUBLIC_GOOGLE_GENERATIVE_AI_API_KEY
    
})
// const model = google('gemini-1.5-flash')

export async function POST(req: Request) {
    const { messages } = await req.json()

    const result = streamText({
        model: google('gemini-1.5-flash-002'),
        messages,
    })
    return result.toDataStreamResponse()
}