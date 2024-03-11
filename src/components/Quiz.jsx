import React, {useState} from 'react';

const Quiz = () => {
    const [activeQuestioIndex,setActiveQuestionIndex] = useState(0)
    const [userAnswers,setUserAnswer] = useState([])
    return (
        <p>Currently ctive Question</p>
    );
};

export default Quiz;