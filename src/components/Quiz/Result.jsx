import { CheckCheck, X } from "lucide-react";
import Pagination from "../Pagination";
import { useMemo, useState } from "react";

function Result({ detailScore }) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(detailScore.totalQuestions / 10);

  const paginate = (data, currentPage, pageSize) => {
    const startIndex = (currentPage - 1) * pageSize;
    return data.slice(startIndex, startIndex + pageSize);
  };

  const dataDetail = useMemo(() => {
    return paginate(detailScore.answerDetails, currentPage, 10);
  }, [detailScore.answerDetails, currentPage]);

  if (!detailScore) return null;

  return (
    <>
      <div className="flex flex-col gap-4 text-cyan-700 bg-gray-50 px-6 py-6 justify-center items-center text-lg">
        <h2>
          <strong>Correct Answers: </strong>
          {detailScore.correctAnswer}/{detailScore.totalQuestions}
        </h2>
        <h2>
          <strong>Score: </strong>
          {detailScore.totalScore}/10
        </h2>
      </div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3 text-center">
              No.
            </th>
            <th scope="col" className="px-6 py-3">
              Selected Answer
            </th>
            <th scope="col" className="px-6 py-3">
              Correct Answer
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Result
            </th>
          </tr>
        </thead>
        <tbody>
          {dataDetail.map((item, index) => {
            return (
              <>
                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                  <td
                    scope="row"
                    className="py-4 text-slate-500 flex justify-center  gap-2 items-center px-6 font-medium whitespace-nowrap dark:text-white"
                  >
                    {(currentPage - 1) * 10 + index + 1}
                  </td>
                  <td className="px-6 py-4 text-justify">
                    {item.selectedAnswer}
                  </td>
                  <td className="px-6 py-4 text-justify">
                    {item.correctAnswer}
                  </td>
                  <td className="px-6 py-4 flex justify-center">
                    {item.isCorrect ? (
                      <CheckCheck size={20} color="#00ad16" />
                    ) : (
                      <X size={20} color="#ad0000" />
                    )}
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </>
  );
}

export default Result;
