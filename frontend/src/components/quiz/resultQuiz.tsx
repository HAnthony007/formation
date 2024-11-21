import React from 'react'
import { clsx } from 'clsx'
import { cn } from '@/lib/utils'


type Props = {
    isCorrect: boolean | null,
    correctAnswer: string
}

const ResultQuiz = (props: Props) => {
    const { isCorrect } = props

    if (isCorrect===null) return null

    const text = isCorrect ? 'Correct' : 'Incorrect!: The correct asnwer is: '+props.correctAnswer
    
    const borderClass = clsx({
        "border-green-500": isCorrect,
        "border-red-500": !isCorrect
    })

    return (
        <div className={cn(
            borderClass, "border-2 rounded-lg p-4 text-center text-lg font-semibold my-4 bg-secondary"
        )}>
            {text}
        </div>
    )
}

export default ResultQuiz