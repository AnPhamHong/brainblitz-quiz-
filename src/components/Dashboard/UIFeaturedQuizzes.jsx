import React from "react";
import PropTypes from "prop-types";
import BadgesLevel from "./BadgesLevel";
import { useNavigate } from "react-router-dom";

const UIFeaturedQuizzes = ({ quizzes }) => {
  const navigate = useNavigate();
  return (
    <div className="mt-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-blue-800">Featured Quizzes</h2>
        <a href="#" className="text-sm text-blue-600 hover:underline">
          View All
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {quizzes.map((quiz) => (
          <div
            key={quiz.id}
            className="relative rounded-lg overflow-hidden shadow-md hover:scale-[1.02] transition-transform duration-300"
            onClick={() => navigate(`/quiz/${quiz.id}/${quiz.level_difficult}/${quiz.category}`)}
          >
            <img
              src={quiz.image}
              alt={quiz.category}
              className="w-full h-48 object-cover"
            />
            <div className="absolute top-2 left-2">
              <BadgesLevel level={quiz.level_difficult} />
            </div>
            <div className="absolute bottom-0 left-0  px-4 py-3 backdrop-blur-md bg-cyan-500/40 w-full uppercase text-center">
              <p className="text-white text-sm font-medium">{quiz.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

UIFeaturedQuizzes.propTypes = {
  quizzes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      category: PropTypes.string,
      level_difficult: PropTypes.string,
      image: PropTypes.string,
    })
  ).isRequired,
};

export default React.memo(UIFeaturedQuizzes);
