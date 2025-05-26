import imgExample from "../../assets/images/library.png";
import { SvgLoading } from "../../utils/svgIcons";
import { useLoginForm } from "../../hooks/useLoginForm";
import Logo from "../../components/Logo";

function Login() {
  const {
    formUser,
    errors,
    errMessage,
    loading,
    handleLogin,
    handleChangeForm,
  } = useLoginForm();

  // const handleSubmit1 = async () => {
  //   await createUserWithEmailAndPassword(
  //     auth,
  //     "an.ph410@gmail.com",
  //     "admin1234"
  //   )
  //     .then(async (userCredential) => {
  //       //Send link to email user
  //       const data = await sendEmailVerification(userCredential.user);
  //       const user = userCredential.user;
  //       console.log(data, user);
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       console.log(errorCode, errorMessage);
  //     });
  // };

  return (
    <div className="flex min-h-full w-[100vw] space-x-4">
      <div className="relative w-1/2 h-screen hidden md:block">
        <div className="absolute inset-0">
          <img
            src={imgExample}
            alt="blur background"
            className="w-full h-full object-cover opacity-90 blur-sm"
          />
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
        </div>
        {/* Quote Content */}
        <div className="relative text-center space-y-6 flex flex-col items-center justify-center h-full w-2/3 mx-auto p-4">
          {/* Quote Icon */}
          <blockquote className="italic font-semibold text-white text-3xl dark:text-white">
            <svg
              className="shadow-2xl w-6 h-6 text-blue-400 dark:text-blue-400 mb-4 rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 14"
            >
              <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
            </svg>
            {/* Quote Text */}
            <p className="text-md md:text-lg leading-relaxed">
              Those people who develop the ability to continuously acquire new
              and better forms of knowledge that they can apply to their work
              and to their lives will be the movers and shakers in our society
              for the indefinite future.
            </p>
          </blockquote>

          {/* Author */}
          <p className="text-white text-xl font-medium">-- Brian Tracy --</p>
        </div>
      </div>
      <div className="flex flex-col gap-8 p-8 flex-1 w-1/2">
       <Logo />
        <div className="lg:w-3/4 w-full h-full flex flex-col justify-center items-center mx-auto gap-4">
          <form
            onSubmit={handleLogin}
            className="w-full flex justify-center flex-col gap-4"
          >
            <h2 className="text-blue-700 font-bold text-2xl">
              Login to your Account
            </h2>
            <p className="text-blue-700 text-lg">
              with your registered Email Address
            </p>

            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
              >
                Email address*
              </label>
              <input
                // autocomplete="off"
                // name="user_identifier"
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter email address"
                required
                value={formUser.email}
                onChange={(e) => handleChangeForm("email", e.target.value)}
              />

              {errors.email && (
                <p className="text-sm text-red-500 mt-1">{errors.email}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
              >
                Password*
              </label>
              <input
                autoComplete="new-password"
                name="login_code"
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                placeholder="Enter password"
                value={formUser.password}
                onChange={(e) => handleChangeForm("password", e.target.value)}
              />
              {errors.password && (
                <p className="text-sm text-red-500 mt-1">{errors.password}</p>
              )}
            </div>

            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  className="appearance-none checked:appearance-auto  w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 ring-red-50 focus:ring-3 focus:ring-blue-300  dark:focus:ring-blue-600"
                  value=""
                  checked={formUser.isRemember}
                  onChange={(e) =>
                    handleChangeForm("isRemember", e.target.checked)
                  }
                />
              </div>
              <label
                htmlFor="remember"
                className="ms-2 text-sm font-medium text-gray-500 dark:text-gray-300"
              >
                Remember my password
              </label>
            </div>
            <div>
              {errMessage && (
                <p className="text-sm text-red-500">{errMessage}</p>
              )}
            </div>
            <button
              disabled={loading}
              type="submit"
              className="flex items-center justify-center gap-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:cursor-not-allowed"
            >
              {loading && (
                <SvgLoading
                  role="status"
                  aria-label="Loading"
                  className="animate-spin h-5 w-5 text-white"
                />
              )}
              {loading ? "Loading..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
