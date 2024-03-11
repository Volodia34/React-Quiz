import React, {useState} from 'react';


import QUESTIONS from '../questions.js'
import quizCompleteImg from '../assets/quiz-complete.png'

const Quiz = () => {
    const [userAnswers,setUserAnswer] = useState([])

    const activeQuestioIndex = userAnswers.length

    const quizIsComplete = activeQuestioIndex === QUESTIONS.length
    
    function handleSelectAnswer(selectedAnswer) {
        setUserAnswer((prevUserAnswers) => {
            return [...prevUserAnswers,selectedAnswer]
        })
    }

    if(quizIsComplete) {
        return (
            <div id="summary">
                <img src={quizCompleteImg} alt="Trophy icon"/>
                <h2>Quiz Completed!</h2>
            </div>
        )
    }

    const shuffledAnswers =  [...QUESTIONS[activeQuestioIndex].answers]
    shuffledAnswers.sort(() => Math.random() - 0.5)
    
    return (
        <div id="quiz">
            <div id="question">
                <h2>{QUESTIONS[activeQuestioIndex].text}</h2>
                <ul id="answers">
                    {shuffledAnswers.map((answer) =>
                        <li key={answer} className="answer">
                            <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Quiz;