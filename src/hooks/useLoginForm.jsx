import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateLoginForm } from "../validators/loginValidator";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { friendlyFirebaseError } from "../api/auth";


export const useLoginForm = () => {
  const [formUser, setFormUser] = useState({
    email: "",
    password: "",
    isRemember: true,
  });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [errMessage, setErrMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChangeForm = (field, value) => {
    setFormUser((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrMessage("");
    const { email, password } = formUser;

    const { valid, errors: newErrors } = validateLoginForm(formUser);
    if (!valid) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const token = await user.getIdToken();
      localStorage.setItem("accessToken", token);
      localStorage.setItem("email", user.email);
      navigate("/");
    } catch (error) {
      setErrMessage(friendlyFirebaseError(error.message));
      localStorage.setItem("accessToken", "");
      localStorage.setItem("email", "");
    } finally {
      setLoading(false);
    }
  };

  return {
    formUser,
    errors,
    errMessage,
    loading,
    handleLogin,
    handleChangeForm,
  };
};
