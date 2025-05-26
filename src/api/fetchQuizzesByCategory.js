import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const fetchQuizzesByCategory = async (category, level) => {
  const quizzesRef = collection(db, "featured_quizes");

  const q = query(
    quizzesRef,
    where("category", "==", category),
    where("level_difficult", "==", level)
  );

  const querySnapshot = await getDocs(q);

  const quizzes = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return quizzes;
};

export default fetchQuizzesByCategory;
