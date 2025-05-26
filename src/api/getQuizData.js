// services/getQuizData.ts
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase";

export const getFeatQuizzes = async () => {
  const quizCollectionRef = query(
    collection(db, "featured_quizes"),
    where("has_quiz", "==", true)
  );

  const snapshot = await getDocs(quizCollectionRef);
  const quizzes = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return quizzes;
};
