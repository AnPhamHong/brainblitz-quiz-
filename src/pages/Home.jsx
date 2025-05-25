import svgFlag from "../assets/svgs/flag-filled.svg";
import svgCircle from "../assets/svgs/circle-check-fill.svg";
import svgVector from "../assets/svgs/vector.svg";
import { fetchAndSaveQuiz } from "../api/generateQuizes";
import { useCallback, useEffect, useState } from "react";
import { getFeatQuizzes } from "../api/getQuizData";
import { updateHasQuizField } from "../api/updateQuizes";

function StatBox({ icon, value, label }) {
  return (
    <div className="flex gap-2 items-center">
      <div className="w-12 h-12 bg-blue-100 shadow-md rounded-lg flex items-center justify-center">
        <img src={icon} alt={label} className="w-7 h-7" />
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-gray-500 font-bold text-lg">{value}</p>
        <span className="text-gray-500 font-normal text-sm">{label}</span>
      </div>
    </div>
  );
}

function UIAchieve() {
  return (
    <div className="flex gap-8 mt-4">
      <StatBox icon={svgFlag} value={27} label={"Quiz Passed"} />
      <StatBox icon={svgCircle} value={"27min"} label={"Fastest Time"} />
      <StatBox icon={svgVector} value={200} label={"Correct Answers"} />
    </div>
  );
}

function UIProgressBar() {
  return (
    <div className="w-2/3">
      <div className="flex justify-end mb-1 w-full">
        <span className="text-sm font-medium text-blue-700 dark:text-white">
          45%
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          className="bg-blue-600 h-2.5 rounded-full"
          style={{ width: "45%" }}
        ></div>
      </div>
    </div>
  );
}

function BadgesLevel({ level }) {
  const timeMap = { easy: "15min", medium: "25min", hard: "45min" };
  const colorMap = {
    easy: "red",
    medium: "green",
    hard: "yellow",
  };

  return (
    <>
      <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-md dark:bg-blue-900 dark:text-blue-300">
        {/* {level === "easy" ? "15min" : level === "medium" ? "25min" : "45min"} */}
        {timeMap[level]}
      </span>

      <span
        className={`capitalize bg-${colorMap[level]}-100 text-${colorMap[level]}-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-md dark:bg-${colorMap[level]}-900 dark:text-${colorMap[level]}-300`}
      >
        {level}
      </span>
    </>
  );
}

function UIFeaturedQuizzes({ quizzes }) {
  return (
    <div className="mt-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-blue-800">Featured Quizes</h2>
        <a href="#" className="text-sm text-blue-600 hover:underline">
          View All
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {quizzes.map((quiz) => (
          <div
            key={quiz.id}
            className="relative rounded-2xl overflow-hidden shadow-md hover:scale-[1.02] transition-transform duration-300"
          >
            <img
              src={quiz.image}
              alt={quiz.category}
              className="w-full h-48 object-cover"
            />
            <div className="absolute top-2 left-2">
              <BadgesLevel level={quiz.level_difficult} />
            </div>
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent px-4 py-3">
              <p className="text-white text-sm font-medium">{quiz.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getFeatQuizzes();
      setQuizzes(data);
    })();
  }, []);

  const onGenerate = useCallback(() => {
    fetchAndSaveQuiz(10, 9).then(console.log);
  }, []);

  const onUpdate = useCallback(() => {
    updateHasQuizField().then(console.log);
  }, []);

  return (
    <div className="flex w-full gap-4 px-4">
      <div className="flex-[3] bg-white shadow-lg p-6 rounded-lg">
        <div className="flex gap-8 h-48">
          <img
            className="w-44 h-48 rounded-2xl object-cover"
            src="https://images.unsplash.com/photo-1457449940276-e8deed18bfff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="User dropdown"
          />
          <div className="flex flex-col gap-2 w-full justify-between">
            <div>
              <h2 className="font-bold text-blue-700 text-xl">AnPTH</h2>
              <p className="font-normal text-gray-500 text-base">
                Bonus booster 24lv
              </p>
            </div>
            <UIProgressBar />
            <UIAchieve />
          </div>
        </div>
        <UIFeaturedQuizzes quizzes={quizzes} />
      </div>
      <div className="flex-[1] bg-white shadow-lg rounded-lg p-6 gap-4">
        <button onClick={onGenerate}>Generate data</button>
        <button onClick={onUpdate}>Update data</button>
      </div>
    </div>
  );
}
