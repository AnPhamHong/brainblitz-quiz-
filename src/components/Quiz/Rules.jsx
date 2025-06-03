import {
  CircleCheckBig,
  Clock1,
  FileSearch2,
  Signature,
  X,
} from "lucide-react";
import { useState } from "react";
import { getTimeByDifficulty } from "@utils/getTimeByDifficulty";

function Rules(props) {
  const [isCheck, setIsCheck] = useState(false);

  return (
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <tbody>
        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
          <th
            scope="row"
            className="py-8 text-slate-500 flex  gap-2 items-center px-6 font-medium whitespace-nowrap dark:text-white"
          >
            <Clock1 size={20} color="#4e687e" /> Duration
          </th>
          <td className="px-6 py-8 text-justify">
            {getTimeByDifficulty(props.level)} minutes (You can pause the test between questions; You cannot
            return to previous questions)
          </td>
        </tr>
        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
          <th
            scope="row"
            className="text-green-600 flex  gap-2 items-center px-6 py-8 font-medium  whitespace-nowrap dark:text-white"
          >
            <CircleCheckBig size={20} color="#00ad28" /> Do
          </th>
          <td className="px-6 py-8 text-justify">
            You are permitted to use common references and tools, such as help
            files or a calculator.
          </td>
        </tr>
        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
          <th
            scope="row"
            className="text-red-600 flex  gap-2 items-center px-6 py-8 font-medium  whitespace-nowrap dark:text-white"
          >
            <X size={20} color="#ff0d00" /> Don't
          </th>
          <td className="px-6 py-8 text-justify">
            You are not permitted to seek or submit solutions from any other
            source. Do not copy or share any test content with any other website
            or person.
          </td>
        </tr>
        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
          <th
            scope="row"
            className="text-slate-500 flex  gap-2 items-center px-6 py-8 font-medium whitespace-nowrap dark:text-white"
          >
            <FileSearch2 size={20} color="#4e687e" /> Prepare
          </th>
          <td className="px-6 py-8 text-justify">
            IDE: This test requires programming. We recommend having a
            development environment ready for each language listed below so you
            can solve questions outside of the browser. Practice with these
            questions to prepare for your test.
          </td>
        </tr>
        <tr>
          <th
            scope="row"
            className="text-slate-500 flex  gap-2 items-center px-6 py-8 font-medium whitespace-nowrap dark:text-white"
          >
            <Signature size={20} color="#4e687e" /> Legal
          </th>
          <td className="px-6 py-8 text-justify">
            <div className="flex items-start cursor-pointer">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  className="appearance-none checked:appearance-auto  w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 ring-red-50 focus:ring-3 focus:ring-blue-300  dark:focus:ring-blue-600"
                  value=""
                  checked={isCheck}
                  onChange={(e) => setIsCheck(e.target.checked)}
                />
              </div>
              <label
                htmlFor="remember"
                className="ms-2 text-sm text-gray-500 dark:text-gray-300 cursor-pointer"
              >
                I have read all of the above and I agree with the terms of use
                and the privacy policy .
              </label>
            </div>
            <div className="w-full flex items-center justify-center">
              <button
                type="button"
                disabled={!isCheck}
                onClick={() => props.onStart()}
                className="w-1/2 disabled:cursor-not-allowed text-lg mt-4 text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-sky-600 dark:hover:bg-sky-700 focus:outline-none dark:focus:ring-sky-800"
              >
                Start the Test
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Rules;
