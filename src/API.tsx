import axios from 'axios'
import {Question} from './App'

export enum Difficulty {EASY = 'easy', MEDIUM = 'medium', HARD = 'hard'}

export const getData = async (amount: number, difficulty: Difficulty) => {
    const responce = await 
    axios.get(`https://opentdb.com/api.php?amount=${amount}&category=9&difficulty=${difficulty}&type=multiple`)
  
    const result = responce.data.results.map((question: Question) => (
      {...question, 
      all_answers: [...question.incorrect_answers, question.correct_answer].sort(() => Math.random() - 0.5) }
    ))
    return result
  }