import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import fetchQuizzesByCategory from "@api/fetchQuizzesByCategory";
import RadioGroup from "@components/RadioGroup";
import QuizHeader from "@components/Quiz/QuizHeader";
import { cloneDeep, fill, filter, shuffle } from "lodash";
import { calculateTotalScore, generateDataQuiz } from "@utils/utils";
import { ModalConfirmSubmit, Result } from "@components/Quiz";
import { TestStep } from "@enums";
import { SvgLoading } from "@utils/svgIcons";
import { Rules } from "@components/Quiz";
import BackToTop from "@components/BackToTop";

function Quiz() {
  const { level_difficult, quizCategory } = useParams();
  const [step, setStep] = useState(TestStep.RULES);
  const [quizList, setQuizList] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [detailScore, setDetailScore] = useState({
    answeredCount: 0,
    totalQuestions: 0,
    correctAnswer: 0,
    totalScore: 0,
    answerDetails: [
      {
        selectedAnswer: "",
        correctAnswer: "",
        isCorrect: false,
      },
    ],
  });
  const [isOpenConfirm, setIsOpenConfirm] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getQuizzes = async () => {
      const result = await fetchQuizzesByCategory(
        quizCategory,
        level_difficult
      );
      if (result.length > 0) {
        const tmp_quiz = cloneDeep(result[0]);
        let init_answers = fill(Array(tmp_quiz.lst_quiz?.length ?? 0), "");
        tmp_quiz.lst_quiz = tmp_quiz.lst_quiz.map((q) => {
          return {
            ...q,
            lstAnswer: shuffle([...q.incorrect_answers, q.correct_answer]),
          };
        });
        setQuizList(tmp_quiz);
        setAnswers(init_answers);
      } else {
        setQuizList(null);
        setAnswers([]);
      }
    };
    getQuizzes();
  }, [quizCategory, level_difficult]);

  const handleAnswerChange = (questionIndex, value) => {
    setAnswers((prev) => ({
      ...prev,
      [questionIndex]: value,
    }));
  };

  const renderQuestions = (lst_quiz) => {
    return lst_quiz?.map((q, i) => (
      <div key={i} className="p-4 border-b">
        <h2 className="text-cyan-800 text-base font-semibold mb-3">
          {i + 1}. {q.question}
        </h2>
        <RadioGroup
          options={generateDataQuiz(q.lstAnswer, i)}
          selected={answers[i] ?? ""}
          onChange={(val) => {
            handleAnswerChange(i, val);
          }}
          name={`question-${i}`}
        />
      </div>
    ));
  };

  const onHandleSubmit = () => {
    setIsOpenConfirm(true);
  };

  const qDone = useMemo(() => {
    return filter(answers, (val) => val !== "").length;
  }, [answers]);

  const onHandleScore = () => {
    setIsOpenConfirm(false);
    setLoading(true);

    let total = 0;

    let _tmp_answer_details = [];

    quizList.lst_quiz.forEach((q, i) => {
      const isCorrect = answers[i] === q.correct_answer;
      _tmp_answer_details.push({
        selectedAnswer: !answers[i] ? "You skipped this question." : answers[i],
        correctAnswer: q.correct_answer,
        isCorrect: isCorrect,
      });
      if (isCorrect) {
        total += 1;
      }
    });

    const qTotal = quizList.lst_quiz.length ?? 0;

    setDetailScore((prev) => {
      return {
        ...prev,
        answeredCount: qDone,
        totalQuestions: qTotal,
        correctAnswer: total,
        totalScore: calculateTotalScore(total, qTotal),
        answerDetails: [..._tmp_answer_details],
      };
    });

    setStep(TestStep.RESULT);
    setLoading(false);
  };

  return (
    <>
      <div className="xl:max-w-4xl max-w-full mx-auto py-6 px-4 sm:px-6 lg:px-8 no-select">
        {step === TestStep.RULES ? (
          <div className="relative shadow-md sm:rounded-lg">
            <Rules
              onStart={() => setStep(TestStep.DO_QUIZ)}
              level={level_difficult}
            />
          </div>
        ) : step === TestStep.DO_QUIZ ? (
          <div className="shadow-md sm:rounded-lg bg-white p-6">
            <QuizHeader
              image={quizList?.image ?? ""}
              category={quizList?.category ?? ""}
              level_difficult={quizList?.level_difficult ?? ""}
              total_quiz={quizList?.lst_quiz?.length ?? 0}
            />
            {quizList?.lst_quiz?.length ? (
              <>
                {renderQuestions(quizList.lst_quiz)}
                <div className="w-full flex items-center justify-center">
                  <button
                    disabled={loading || qDone === 0}
                    type="submit"
                    onClick={() => onHandleSubmit()}
                    className="mt-4 flex items-center justify-center gap-2 text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800 disabled:cursor-not-allowed"
                  >
                    {loading && (
                      <SvgLoading
                        role="status"
                        ariaLabel="Loading"
                        className="animate-spin h-5 w-5 text-white"
                      />
                    )}
                    {loading ? "Loading..." : "Submit"}
                  </button>
                </div>
              </>
            ) : (
              <p>No questions available.</p>
            )}
          </div>
        ) : (
          <div className="relative shadow-md sm:rounded-lg">
            <Result detailScore={detailScore} />
          </div>
        )}
        <ModalConfirmSubmit
          stateOpen={isOpenConfirm}
          onOk={onHandleScore}
          onCancel={() => setIsOpenConfirm(false)}
          qDone={qDone}
          qTotal={
            !quizList || !quizList.lst_quiz ? 0 : quizList.lst_quiz?.length
          }
        />
      </div>
      <BackToTop />
    </>
  );
}

export default Quiz;
