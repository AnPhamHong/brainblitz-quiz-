import React from "react";
import PropTypes from "prop-types";

const BadgesLevel = ({ level, isOnlyLevel }) => {
  const timeMap = { easy: "15min", medium: "25min", hard: "45min" };

  const levelClass = {
    easy: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
    medium: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    hard:
      "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
  };

  return (
    <>
      {!!isOnlyLevel && (
        <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-md dark:bg-blue-900 dark:text-blue-300">
          {timeMap[level]}
        </span>
      )}

      <span
        className={`capitalize text-sm font-medium me-2 px-2.5 py-0.5 rounded-md ${levelClass[level]}`}
      >
        {level}
      </span>
    </>
  );
};

BadgesLevel.propTypes = {
  level: PropTypes.oneOf(["easy", "medium", "hard"]).isRequired,
  isOnlyLevel: PropTypes.bool,
};

export default React.memo(BadgesLevel);
