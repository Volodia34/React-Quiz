import React, {useState} from 'react';


import QUESTIONS from '../questions.js'

const Quiz = () => {
    const [userAnswers,setUserAnswer] = useState([])

    const activeQuestioIndex = userAnswers.length
    
    function handleSelectAnswer(selectedAnswer) {
        setUserAnswer((prevUserAnswers) => {
            return [...prevUserAnswers,selectedAnswer]
        })
    }
    
    return (
        <div id="quiz">
            <div id="question">
                <h2>{QUESTIONS[activeQuestioIndex].text}</h2>
                <ul id="answers">
                    {QUESTIONS[activeQuestioIndex].answers.map((answer) =>
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