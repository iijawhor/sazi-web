✅ Authentication Module (Signup & Login)
📌 Overview
This module provides user authentication (Signup & Login) using React, Redux Toolkit, and Axios. It supports JWT-based token authentication and manages user sessions in the Redux store.

🔍 Features
✅ Signup and Login in a single component.

✅ Form toggle between SignUp and LogIn modes.

✅ Redux Toolkit for global state management.

✅ JWT token stored in localStorage for session persistence.

✅ Error handling for failed authentication.

✅ Auto navigation to Dashboard on successful login.

FILE STRUCTURE
src/
├─ components/
│ ├─ Signup/
│ │ └─ Signup.jsx # UI & logic for signup/login
├─ store/
│ ├─ slices/
│ │ └─ userSlice.js # Redux slice for authentication
│ └─ store.js # Root Redux store
⚙️ Setup Instructions

1. Install Dependencies
   npm install @reduxjs/toolkit react-redux axios react-router-dom

2. Wrap Application with Redux Provider
   import { Provider } from "react-redux";
   import { store } from "./store/store";

<Provider store={store}>
  <App />
</Provider>
🔐 Authentication API Endpoints
Signup:
POST http://localhost:8000/api/v1/users/signup
Payload:

{
"firstName": "John",
"lastName": "Doe",
"phoneNumber": "1234567890",
"email": "john@example.com",
"password": "securePassword"
}

Signin:
POST http://localhost:8000/api/v1/users/signin
Payload:
{
"email": "john@example.com",
"password": "securePassword"
}
🔄 Redux State Structure
auth: {
user: null,
token: localStorage.getItem("token") || null,
loading: false,
error: null,
signupResponse: null,
signinResponse: null
}
✅ How It Works
Signup Flow:

Collect user details → dispatch signupUser thunk → call API → store token in localStorage → update signupResponse.

Signin Flow:

Collect credentials → dispatch signinUser thunk → call API → store token in localStorage → update signinResponse & user → navigate to /.
Usage Example

// Signup.jsx
const dispatch = useDispatch();

const handleAuthentication = () => {
if (!isSignupForm) {
dispatch(signupUser({ signupApi, userData }));
} else {
dispatch(signinUser({ signinApi, credentials: userData }));
navigate("/");
}
};
🚀 Future Improvements
Role-based routing for Teachers, Students, and Admin.

Token refresh logic for auto session renewal.

UI improvements for better UX.
