'use client'
import { quiz } from "@/configs/dataTest"
import { useEffect, useState } from "react"
import { Button } from "../ui/button"
import { Button as ButtonAntd } from 'antd'
import ProgressBar from "./progressBar"
import { ChevronLeft, X } from "lucide-react"
import ResultQuiz from "./resultQuiz"
import QuizSubmission from "./quizSubmission"


export default function QuizTemplate() {
    const [started, setStarted] = useState<boolean>(false)
    const [currentQuestion, setCurrentQuestion] = useState<number>(0)
    const [score, setScore] = useState<number>(0)
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
    const [submited, setSubmited] = useState<boolean>(false)
    const [timeLeft, setTimeLeft] = useState<number>(59)
    const [timerRunning, setTimerRunning] = useState<boolean>(false)
    const question = quiz.questions

    useEffect(() => {
        if (started && timerRunning) {
            const intervalId = setInterval(() => {
                setTimeLeft((prevTime) => {
                    if (prevTime <= 0) {
                        clearInterval(intervalId)
                        return 0
                    }
                    return prevTime - 1
                })
            }, 1000)
            return () => clearInterval(intervalId)
        }
    }, [started, timerRunning])

    const handleNext = () => {
        if (!started) {
            setStarted(true)
            setTimerRunning(true)
        }
        if (currentQuestion < question.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
        } else {
            return setSubmited(true)
        }

        setSelectedAnswer(null)
        setIsCorrect(null)
        setTimerRunning(true)
        setTimeLeft(59)
    }

    const restart = () => {
        setCurrentQuestion(0)
        setScore(0)
        setSelectedAnswer(null)
        setIsCorrect(null)
        setSubmited(false)
        setTimeLeft(59)
    }

    // Formatage du temps restant (min:sec)
    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
    };

    if (submited) {
        return (
            <div className="flex flex-col flex-1 items-center">
                <QuizSubmission
                    score={score}
                    scorePercentage={Math.round(score / question.length) * 100}
                    totalQuestions={question.length}
                />
                <Button onClick={restart}>Restart</Button>
            </div>
        )
    }

    if (timeLeft<=0) {
        setScore(score-1)
    }
    const handleAnswer = (answer: number) => {
        setSelectedAnswer(answer)
        const isCurrentCorrect = answer == Number(question[currentQuestion].correctAnswer)
        if (isCurrentCorrect) setScore(score + 1)
        setIsCorrect(isCurrentCorrect)
        setTimerRunning(false)
    }

    return (
        <div className="flex flex-col flex-1">
            <div className="sticky top-0 z-10 shadow-md py-4 w-full">
                <header className="grid grid-cols-[auto_1fr_auto] grid-flow-col items-center justify-between py-2 gap-2">
                    <Button size='icon' variant='outline'>
                        <ChevronLeft />
                    </Button>
                    <ProgressBar value={((currentQuestion) / question.length) * 100} />
                    <Button size='icon' variant='outline'>
                        <X />
                    </Button>
                </header>
            </div>
            <main className="flex justify-center flex-1">
                {!started ? (
                    <h1 className="text-3xl font-bold">Welcome to the quiz page</h1>
                ) : (
                    <div>
                        <h2 className="text-3xl font-bold">{question[currentQuestion].question}</h2>
                        {timeLeft > 0 ? <p className="text-muted-foreground">Time left: {formatTime(timeLeft)}</p> : 'Time out'}

                        <div className="grid grid-cols-1 gap-6 mt-6">
                            {
                                question[currentQuestion].answers.map((answer, index) => {
                                    const color = selectedAnswer === index + 1 ? (index + 1 == Number(question[currentQuestion].correctAnswer) ? 'primary' : 'danger') : 'default'
                                    return (
                                        <ButtonAntd key={index}
                                            variant="filled"
                                            color={color}
                                            disabled={(selectedAnswer || timeLeft<=0) ? true : false}
                                            onClick={() => handleAnswer(index + 1)}
                                        >
                                            {answer}
                                        </ButtonAntd>
                                    )
                                })
                            }
                        </div>
                    </div>
                )
                }
            </main>
            <footer className="footer pb-9 px-6 relative mb-0">
                <ResultQuiz isCorrect={isCorrect} correctAnswer={question[currentQuestion].messageForIncorrectAnswer} />
                <Button onClick={handleNext} className="w-full" variant='neo'>
                    {!started ? 'Start' : (currentQuestion === question.length - 1 ? 'Submit' : 'Next')}
                </Button>
            </footer>
        </div>
    )
}