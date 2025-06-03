export function getTimeByDifficulty(difficulty) {
  switch (difficulty) {
    case "easy":
      return 15;
    case "medium":
      return 25;
    case "hard":
      return 45;
    default:
      return 0;
  }
}
