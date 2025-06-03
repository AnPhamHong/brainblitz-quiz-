import {
  // useCallback,
  useEffect,
  useState,
} from "react";
import { getFeatQuizzes } from "@api/getQuizData";
import {
  Skeleton,
  UIFeaturedQuizzes,
  UIProgressBar,
  UserAchieve,
  UserLog,
  UserOnline,
} from "@components/Dashboard";
// import { updateHasQuizField } from "../api/updateQuizes";
// import { fetchAndSaveQuiz } from "../api/generateQuizes";
import svgFlag from "@assets/svgs/flag-filled.svg";
import svgCircle from "@assets/svgs/circle-check-fill.svg";
import svgVector from "@assets/svgs/vector.svg";

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
    <div className="flex flex-wrap gap-4 mt-4">
      <StatBox icon={svgFlag} value={27} label={"Quiz Passed"} />
      <StatBox icon={svgCircle} value={"27min"} label={"Fastest Time"} />
      <StatBox icon={svgVector} value={200} label={"Correct Answers"} />
    </div>
  );
}

export default function Home() {
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchQuizzes = async () => {
    try {
      setLoading(true);
      const data = await getFeatQuizzes();
      setQuizzes(data);
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuizzes();
  }, []);

  // const onGenerate = useCallback(() => {
  //   fetchAndSaveQuiz(10, 9).then(console.log);
  // }, []);

  // const onUpdate = useCallback(() => {
  //   updateHasQuizField().then(console.log);
  // }, []);

  return (
    <div className="flex flex-col lg:flex-row w-full gap-4 px-4">
      <div className="lg:flex-[4] bg-white shadow-lg p-6 rounded-lg">
        <div className="flex gap-8">
          <img
            className="w-44 h-48 rounded-lg object-cover"
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

        {loading ? <Skeleton /> : <UIFeaturedQuizzes quizzes={quizzes} />}
      </div>
      <div className="flex-[1] bg-white shadow-lg rounded-lg p-6 gap-8 flex-col flex">
        <UserOnline />
        <UserAchieve />
        <UserLog />
        {/* <button onClick={onGenerate}>Generate data</button>
        <button onClick={onUpdate}>Update data</button> */}
      </div>
    </div>
  );
}
