import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { firebaseConfig } from "../../firebase";
import axios from "axios";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Giải mã ký tự HTML
function decodeHTMLEntities(text) {
  return text
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

// Fetch và thêm quiz
export async function fetchAndSaveQuiz() {
  const response = await axios.get(
    `https://opentdb.com/api.php?amount=50&category=30&difficulty=medium`
  );
  console.log(response);
  const { data } = response;

  const lst_quiz = data.results.map((q) => ({
    type: q.type,
    question: decodeHTMLEntities(q.question),
    correct_answer: decodeHTMLEntities(q.correct_answer),
    incorrect_answers: q.incorrect_answers.map(decodeHTMLEntities),
  }));

  await addDoc(collection(db, "featured_quizes"), {
    api: "opentdb.com",
    category: data.results[0]?.category ?? "",
    level_difficult: data.results[0]?.difficulty ?? "",
    lst_quiz,
  });

  console.log("✅ Quiz đã được lưu vào Firestore");
}
