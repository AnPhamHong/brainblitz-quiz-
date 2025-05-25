import React from "react";

function QuestionCard({ question, options }) {
  const handleAnswer = (option) => {
    console.log("Selected:", option);
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-2">{question}</h2>
      <ul className="grid gap-2">
        {options.map((option, i) => (
          <li key={i}>
            <button
              onClick={() => handleAnswer(option)}
              className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuestionCard;
