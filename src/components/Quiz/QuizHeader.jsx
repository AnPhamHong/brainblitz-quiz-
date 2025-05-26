import { BadgesLevel } from "../Dashboard";
import PropTypes from "prop-types";

function QuizHeader({ image, category, level_difficult, total_quiz }) {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-EN");
  return (
    <div className="flex items-center justify-between gap-4 mb-8">
      <img src={image} alt="" className="w-20 h-20 rounded-full object-cover" />
      <div className="flex gap-2 justify-between flex-1">
        <div className="flex flex-col justify-between gap-1">
          <h2 className="text-blue-700 font-bold text-2xl uppercase">
            {category}
          </h2>
          <h2 className="text-blue-700 font-bold text-2xl uppercase">
            <span className="text-gray-500 text-base capitalize">Level: </span>
            <BadgesLevel level={level_difficult} />
          </h2>
        </div>
        <div className="flex flex-col justify-between gap-1">
          <span className="text-gray-500 text-base italic">
            Date: {formattedDate}
          </span>
          <span className="text-gray-500 text-base italic">Timer: -</span>
          <span className="text-gray-500 text-base italic">
            Total questions: {total_quiz ?? 0}
          </span>
        </div>
      </div>
    </div>
  );
}

QuizHeader.propTypes = {
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  level_difficult: PropTypes.string.isRequired,
  total_quiz: PropTypes.number,
};

export default QuizHeader;
