import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signupUser, signinUser } from "../../store/slices/userSlice.js";
const Signup = () => {
  const [isPassword, setIsPassword] = useState(null);
  const [isSignupForm, setIsSignUpForm] = useState(true);
  const [error, setError] = useState("");
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth?.signinResponse);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  const signupApi = "http://localhost:8000/api/v1/users/signup";
  const signinApi = "http://localhost:8000/api/v1/users/signin";
  const handleAuthentication = () => {
    if (!isSignupForm) {
      // Signup
      dispatch(signupUser({ signupApi, userData }))
        .unwrap()
        .then((data) => {
          console.log("Signup success", data);
          navigate("/"); // only on success
        })
        .catch((err) => {
          setError(err || "Signup failed");
          // No navigate here, stays on signup page
        })
        .finally(() => {
          setUserData({});
        });
    } else {
      // Signin
      dispatch(signinUser({ signinApi, credentials: userData }))
        .unwrap()
        .then((data) => {
          navigate("/"); // only on success
        })
        .catch((err) => {
          setError(err || "Login Failed");

          // stays here on error
        })
        .finally(() => {
          setUserData({});
        });
    }
  };
  // fixed navigation - for FIT PUSH
  return (
    <div className="h-screen bg-info-content flex items-center jutify-center ">
      <div className="bg-blue-100  gap-5 lg:!pl-12 lg:!pl-12 lg:!pr-12 w-4/5 h-5/6 flex !md:flex-col !m-auto rounded-4xl justify-between items-center jutify-center text-center">
        <div className=" !p-2 flex w-full gap-2 justify-center flex-col lg:flex-start lg:text-start">
          <div className="flex flex-col md:flex-col  justify-between ">
            <h1 className="font-bold text-xl text-blue-900 tracking-wider">
              {!isSignupForm ? <span>SignUp</span> : <span>LogIn</span>}
            </h1>
            <p className="text-gray-600 text-sm">
              {!isSignupForm
                ? "Already have an account? "
                : "Don't have an account? "}
              <span
                className="text-blue-500 cursor-pointer hover:underline"
                onClick={() => setIsSignUpForm(!isSignupForm)}
              >
                {!isSignupForm ? "Log In" : "Sign Up"}
              </span>
            </p>
          </div>
          <div className=" flex  w-full flex-col gap-2">
            {!isSignupForm && (
              <>
                <div className="flex flex-col md:flex-col lg:flex-row justify-between items-center">
                  <label htmlFor="" className="text-blue-900 ">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={userData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    className=" rounded-full input input-info !p-2 input-sm"
                  />
                </div>

                <div className="flex flex-col md:flex-col lg:flex-row justify-between items-center">
                  <label htmlFor="" className="text-blue-900 ">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={userData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    className=" rounded-full input input-info !p-2  input-sm"
                  />
                </div>
                <div className="flex flex-col md:flex-col lg:flex-row justify-between items-center">
                  <label htmlFor="" className="text-blue-900 ">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phoneNumber"
                    value={userData.phoneNumber}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className=" rounded-full input input-info !p-2  input-sm"
                  />
                </div>
              </>
            )}
            <div className="flex flex-col md:flex-col lg:flex-row justify-between items-center">
              <label htmlFor="" className="text-blue-900 ">
                Email
              </label>
              <input
                type="text"
                name="email"
                value={userData.email}
                onChange={handleChange}
                placeholder="Email"
                className=" rounded-full input input-info !p-2  input-sm"
              />
            </div>

            <div className="flex flex-col md:flex-col lg:flex-row justify-between items-center">
              <label htmlFor="" className="text-blue-900 ">
                Password
              </label>
              <div className="!outline-none rounded-full input input-info  input-sm">
                <input
                  type={!isPassword ? "password" : ""}
                  name="password"
                  value={userData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className=" !outline-none rounded-full  input input-info !p-2  input-sm"
                />
                <p
                  onClick={() => setIsPassword((prev) => !prev)}
                  className="cursor-pointer !mr-1"
                  id="togglePassword"
                  // className="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); cursor: pointer;"
                >
                  {!isPassword ? <span>🙈</span> : <span className="">👁️</span>}
                </p>
              </div>
            </div>
            <button
              onClick={handleAuthentication}
              className="btn text-blue-900 tracking-widest hover:text-white text-sm text border-none !mt-3 hover-text-white rounded-full outline-none hover:btn-primary hover:bg-blue-900 bg-blue-200 btn-sm"
            >
              {isSignupForm ? "Login" : "Signup"}
            </button>
          </div>
          <p className="text-center text-sm text-red-400 font-inter font-semibold tracking-wide">
            {error}
          </p>
        </div>
        <div className="h-96 hidden lg:block flex w-full">
          <img
            src="assets\bg1.jpg"
            alt=""
            srcSet=""
            className="rounded-lg h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
