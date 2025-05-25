import { getDocs, updateDoc, doc, collection } from "firebase/firestore";
import { db } from "../../firebase";

const getRandomImage = (width = 800, height = 600) => {
  const seed = Math.floor(Math.random() * 1000);
  return `https://picsum.photos/seed/${seed}/${width}/${height}`;
};

export const updateHasQuizField = async () => {
  const colRef = collection(db, "featured_quizes");
  const snapshot = await getDocs(colRef);

  const updates = snapshot.docs.map(async (document) => {
    const data = document.data();
    const hasQuiz = Array.isArray(data.lst_quiz) && data.lst_quiz.length > 0;

    return updateDoc(doc(db, "featured_quizes", document.id), {
      has_quiz: hasQuiz,
      image: getRandomImage(),
    });
  });

  await Promise.all(updates);
  console.log("✅ Done updating has_quiz field");
};
