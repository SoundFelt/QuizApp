import React from 'react'
import {AnswerObject} from './App'
import {useStyles} from './styles/QuestionCardStyles'

interface props {
    question: string,
    answers: string[],
    checkAnswer: (e: React.MouseEvent<HTMLButtonElement>) => void,
    userAnswers: AnswerObject,
    questionNo: number,
    totalQuestions: number,
}

const questionChoices = ['A', 'B', 'C', 'D']

function QuestionCard(props: props) {
    const classes = useStyles()
    return ( 
        <div className={classes.questionContainer}>
           <h2 className={classes.questionNo}>Question: {props.questionNo + 1}/{props.totalQuestions} </h2>
           <p className={classes.question}>{props.question}</p>
               {props.answers.map((answer, idx: number) => (
                    <div style={{width: '100%'}}key={answer}>
                       <button className={`${classes.answerButtons} ${props.userAnswers?.correctAnswer === answer 
                        ? classes.correctAnswer : props.userAnswers ? classes.wrongAnswer : ''}`} 
                        value={answer} disabled={props.userAnswers && true} onClick={props.checkAnswer}>
                        <span>{questionChoices[idx]}: {answer}</span>
                       </button> 
                    </div>
               ))}
            {props.userAnswers ? props.userAnswers?.userAnswer === props.userAnswers?.correctAnswer 
            ? <p className={classes.correctText}>Correct Answer!</p> 
            : <p className={classes.wrongText}>Incorrect Answer!</p> : ''}
        </div>
     );
}

export default QuestionCard ;