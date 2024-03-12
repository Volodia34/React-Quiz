import React, {useCallback, useRef, useState} from 'react';


import QUESTIONS from '../questions.js'
import quizCompleteImg from '../assets/quiz-complete.png'
import QuestionTimer from "./QuestionTimer.jsx";
import Answers from "./Answers.jsx";
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

const Quiz = () => {
    const [userAnswers, setUserAnswer] = useState([])

    const activeQuestioIndex =  userAnswers.length
    const quizIsComplete = activeQuestioIndex === QUESTIONS.length

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
        setUserAnswer((prevUserAnswers) => {
            return [...prevUserAnswers, selectedAnswer]
        })

    }, [])

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [])

    if (quizIsComplete) {
        return (
           <Summary userAnswers={userAnswers}/>
        )
    }


    return (
        <div id="quiz">
            <Question
                key={activeQuestioIndex}
                index={activeQuestioIndex}
                onSelectAnswer={handleSelectAnswer}
                onSkipAnswer={handleSkipAnswer }
             />
        </div>
    );
};

export default Quiz;