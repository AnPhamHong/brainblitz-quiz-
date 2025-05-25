import React from 'react';
import QuestionCard from '../components/QuestionCard';
import questions from '../data/questions';

function Quiz() {
    console.log(questions)
    return (
        <div>
            {questions.map((q, i) => {
                return <QuestionCard question={q.question} options={q.options} key={`quiz-${i}`} />

            })}
        </div>
    );
}

export default Quiz;