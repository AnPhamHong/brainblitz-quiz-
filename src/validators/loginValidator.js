export function validateLoginForm(formUser) {
  const errors = { email: "", password: "" };
  let valid = true;

  if (!formUser.email) {
    errors.email = "Email is required.";
    valid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formUser.email)) {
    errors.email = "Invalid email format.";
    valid = false;
  }

  if (!formUser.password) {
    errors.password = "Password is required.";
    valid = false;
  } else if (formUser.password.length < 6) {
    errors.password = "Password must be at least 6 characters.";
    valid = false;
  }

  return { valid, errors };
}
