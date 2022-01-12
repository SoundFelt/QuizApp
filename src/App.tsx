import React from 'react';
import {useState} from 'react'
import QuestionCard from './QuestionCard'
import BGVideo from './media/OceanVideo1.mp4'
import {useStyles} from './styles/AppStyles'
import {getData, Difficulty} from './API'

const totalQuestions = 10

export type Question = {
  category: string,
  correct_answer: string,
  difficulty: string,
  incorrect_answers: string,
  question: string,
  type: string
}

type CompleteQuestion = Question & {all_answers: string[]}

export type AnswerObject = {
  question: string,
  userAnswer: string,
  correct: boolean,
  correctAnswer: string
}

function App() {

const classes = useStyles()

const [loading, setLoading] = useState(false)
const [questions, setQuestions] = useState<CompleteQuestion[]>([])
const [questionNo, setQuestionNo] = useState(0)
const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([])
const [score, setScore] = useState(0)
const [gameOver, setGameOver] = useState(true)

const startQuiz = async () => {
  setGameOver(false);
  setScore(0);
  setLoading(true);
  const newQuestions = await getData(10, Difficulty.EASY);
  setQuestions(newQuestions)
  setUserAnswers([])
  setQuestionNo(0)
  setLoading(false)
}

const nextQuestion = () => {
  setQuestionNo(questionNo + 1)
}

const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
  const curQuestion = questions[questionNo]
  const userAnswer = e.currentTarget.value;
  const correct = userAnswer === curQuestion.correct_answer
  if (correct) setScore(current => current + 1)
  const answerObj = {
    question: curQuestion.question,
    userAnswer: userAnswer,
    correct: correct,
    correctAnswer: curQuestion.correct_answer
  }
  setUserAnswers([...userAnswers, answerObj])
  if (userAnswers.length + 1 === totalQuestions)
  setGameOver(true)
}

  return (
    <div className={classes.container}>
      <div className={classes.bgVideoContainer}>
        <video className={classes.bgVideo} src={BGVideo} autoPlay muted loop/>
      </div>

      <div className={classes.contentContainer}>
        <h1 className={classes.title}>General Knowledge Quiz!</h1>

        {gameOver && userAnswers.length !== 10 && <button className={classes.mainButtons} onClick={startQuiz}>Start</button>}

        {userAnswers.length !== 10 && !gameOver && <p className={classes.score}>Score: {score}</p>}

        {!loading && !gameOver && 
          <QuestionCard question={questions[questionNo].question} answers={questions[questionNo].all_answers} 
          checkAnswer={checkAnswer} userAnswers={userAnswers[questionNo]} 
          questionNo={questionNo} totalQuestions={totalQuestions}/> } 

        {userAnswers.length === 10 && <p className={classes.finalScore}>Your Final Score Is: {score}/10</p>}

        {userAnswers.length === 10 ? <button className={classes.mainButtons} onClick={startQuiz}>Restart Quiz</button> : ''}

        {loading && <p>Loading Question ...</p>}

        {!gameOver && !loading && questionNo !== 9 && userAnswers.length === questionNo + 1? 
        <button className={classes.mainButtons} onClick={nextQuestion}>Next Question</button> : ''}
      </div>
    </div>
  );
}

export default App;