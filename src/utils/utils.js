export const generateDataQuiz = (lstAnswer, rIdx) => {
  if (!lstAnswer) return [];
  return lstAnswer.map((a, idx) => ({
    value: a,
    label: a,
    available: true,
    key: `${rIdx}-${idx}`,
  }));
};

export const calculateTotalScore = (correctCount, totalQuestions) => {
  if (totalQuestions === 0) return 0;
  const rawScore = (correctCount / totalQuestions) * 10;
  return parseFloat(rawScore.toFixed(2)); 
};
