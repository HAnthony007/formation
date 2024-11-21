import { Button } from "../ui/button"

type Props = {
    scorePercentage: number,
    score: number,
    totalQuestions: number
}

const QuizSubmission = (props: Props) => {
    const {scorePercentage, score, totalQuestions} = props
    return (
        <div className="flex flex-col flex-1">
            <main className='flex flex-col flex-1 gap-4 items-center py-11 mt-24'>
                <h2 className='text-3xl font-bold'>Quiz complete! {score}</h2>
                <p>Your scored: {scorePercentage}%</p>
                <>
                    <div className='flex flex-row gap-8'>
                        <p>{score} Correct</p>
                        <p>{totalQuestions - score} Incorrect</p>
                    </div>
                </>
            </main>
        </div>
    )
}

export default QuizSubmission