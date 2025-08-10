import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signupUser, signinUser } from "../../store/slices/userSlice.js";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignupForm, setIsSignupForm] = useState(true); // true = signup, false = login
  const [error, setError] = useState("");
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
    role: ""
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signupApi = "http://localhost:8000/api/v1/users/signup";
  const signinApi = "http://localhost:8000/api/v1/users/signin";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAuthentication = () => {
    console.log("User data in func:", userData);

    if (isSignupForm) {
      // Signup
      dispatch(signupUser({ signupApi, userData }))
        .unwrap()
        .then((data) => {
          console.log("Signup success", data);
          resetForm();
          navigate("/");
        })
        .catch((err) => {
          setError(err || "Signup failed");
        });
    } else {
      // Login
      dispatch(signinUser({ signinApi, credentials: userData }))
        .unwrap()
        .then((data) => {
          console.log("Login success", data);
          resetForm();
          navigate("/");
        })
        .catch((err) => {
          setError(err || "Login failed");
        });
    }
  };

  const resetForm = () => {
    setUserData({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      password: ""
    });
  };

  return (
    <div className="h-screen bg-info-content flex items-center justify-center">
      <div className="bg-blue-100 flex lg:flex-row gap-5 lg:!pl-12 lg:!pr-12 w-4/5 h-5/6 flex md:flex-col m-auto rounded-4xl justify-between items-center text-center">
        <div className="p-2 flex w-full gap-2 justify-center flex-col lg:text-start">
          {/* Header */}
          <div className="flex flex-col justify-between">
            <h1 className="font-bold text-xl text-blue-900 tracking-wider">
              {isSignupForm ? "Sign Up" : "Log In"}
            </h1>
            <p className="text-gray-600 text-sm">
              {isSignupForm
                ? "Already have an account? "
                : "Don't have an account? "}
              <span
                className="text-blue-500 cursor-pointer hover:underline"
                onClick={() => setIsSignupForm((prev) => !prev)}
              >
                {isSignupForm ? "Log In" : "Sign Up"}
              </span>
            </p>
          </div>

          {/* Form */}
          <div className="flex w-full flex-col gap-2">
            {isSignupForm && (
              <>
                {/* First Name */}
                <div className="flex flex-col lg:flex-row justify-between items-center">
                  <label className="text-blue-900">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={userData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    className="rounded-full !p-1 input input-info p-2 input-sm"
                  />
                </div>
                {/* Last Name */}
                <div className="flex flex-col lg:flex-row justify-between items-center">
                  <label className="text-blue-900">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={userData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    className="rounded-full !p-1 input input-info p-2 input-sm"
                  />
                </div>
                {/* Phone Number */}
                <div className="flex flex-col lg:flex-row justify-between items-center">
                  <label className="text-blue-900">Phone Number</label>
                  <input
                    type="text"
                    name="phoneNumber"
                    value={userData.phoneNumber}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="rounded-full !p-1 input input-info p-2 input-sm"
                  />
                </div>
                <div className="flex flex-col lg:flex-row justify-between items-center">
                  <label className="text-blue-900">Role</label>
                  <input
                    type="text"
                    name="role"
                    value={userData.role}
                    onChange={handleChange}
                    placeholder="User Role"
                    className="rounded-full !p-1 input input-info p-2 input-sm"
                  />
                </div>
              </>
            )}

            {/* Email */}
            <div className="flex flex-col lg:flex-row justify-between items-center">
              <label className="text-blue-900">Email</label>
              <input
                type="text"
                name="email"
                value={userData.email}
                onChange={handleChange}
                placeholder="Email"
                className="rounded-full !p-1 input input-info p-2 input-sm"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col lg:flex-row justify-between items-center">
              <label className="text-blue-900">Password</label>
              <div className="flex items-center rounded-full input input-info input-sm p-0">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={userData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="rounded-full !p-1 input input-info p-2 input-sm"
                />
                <p
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="cursor-pointer mr-2"
                >
                  {showPassword ? "👁️" : "🙈"}
                </p>
              </div>
            </div>

            {/* Button */}
            <button
              onClick={handleAuthentication}
              className="btn text-blue-900 tracking-widest hover:text-white text-sm border-none mt-3 rounded-full outline-none hover:btn-primary hover:bg-blue-900 bg-blue-200 btn-sm"
            >
              {isSignupForm ? "Signup" : "Login"}
            </button>
          </div>

          {/* Error Message */}
          <p className="text-center text-sm text-red-400 font-inter font-semibold tracking-wide">
            {error}
          </p>
        </div>

        {/* Side Image */}
        <div className="h-96 hidden lg:block flex w-full">
          <img src="assets/bg1.jpg" alt="" className="rounded-lg h-full" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
