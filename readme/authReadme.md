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
README Update (Auth Component - Signup)
Signup / Login Component
This React component provides a combined Signup and Login form with improved user experience and error handling.

Features
Toggle between Signup and Login forms using a boolean state.

Controlled form inputs with centralized state management.

Password visibility toggle for better usability.

Error handling: Displays user-friendly error messages on signup or login failures.

Improved async flow: Waits for backend response before navigation, preventing premature redirects.

Clears form inputs on both success and failure, maintaining clean state.

How It Works
Form Toggle

A boolean state isSignupForm controls which form to show:

true → Login form

false → Signup form with extra fields (first name, last name, phone number)

Input Handling

userData state stores input values.

handleChange updates the state on each input change.

Authentication Handling

On submit, calls handleAuthentication:

For Signup, dispatches signupUser thunk with API URL and user data.

For Login, dispatches signinUser thunk with API URL and credentials.

Uses .unwrap() on thunk dispatch to access fulfilled/rejected promises.

On success, navigates to homepage ("/").

On failure, sets an error message displayed below the form.

Always resets form data after submission attempt.

Error Feedback

Error messages from failed authentication attempts are shown in red text below the form inputs.

Improves user understanding of issues like invalid credentials or server errors.

Password Visibility

Password input can toggle between masked and visible states with an emoji button.

How to Use
Import and render the Signup component wherever authentication is required.

Make sure your Redux store includes signupUser and signinUser async thunks for handling authentication.

Backend endpoints:

POST /api/v1/users/signup for new user registration

POST /api/v1/users/signin for user login

Improvements Over Previous Version
Proper async flow management using unwrap() to handle promise rejections.

User feedback for authentication failures.

Navigation only on successful login/signup.

Form reset on both success and failure, ensuring clean form state.

Enhanced error visibility to guide user actions.

## <!-- UPDATED VERSION OF SIGNUP -->

# **Signup Component – Updated Version**

## **Overview**

This updated `Signup` component allows users to toggle between **Signup** and **Login** forms using a single UI.
The fix ensures that the form now correctly displays signup-only fields (First Name, Last Name, Phone Number) **only** when the user is in "Sign Up" mode, and hides them during "Log In" mode.

---

## **Key Changes in This Version**

- **Fixed Toggle Logic**

  - `isSignupForm = true` now correctly shows the **Signup** fields.
  - `isSignupForm = false` now correctly shows the **Login** fields only.

- **Unified Component**

  - Single component handles both Signup and Login actions.
  - Dynamically switches the displayed form without navigation.

- **Form State Management**

  - `userData` state object holds all form inputs.
  - Single `handleChange` method updates fields dynamically.

- **API Integration**

  - `signupUser` and `signinUser` actions from Redux slice handle authentication.
  - API URLs configurable via `signupApi` and `signinApi`.

- **User Experience**

  - Password visibility toggle (`🙈 / 👁️`) for better usability.
  - Clear error messages displayed when signup or login fails.
  - Responsive design adjustments for mobile and desktop.

---

## **How the Toggle Works**

- **Sign Up Mode (`isSignupForm = true`):**

  - Shows **First Name**, **Last Name**, **Phone Number**, **Email**, and **Password** fields.
  - Button text: `Signup`
  - Switch link: "Already have an account? Log In"

- **Login Mode (`isSignupForm = false`):**

  - Shows only **Email** and **Password** fields.
  - Button text: `Login`
  - Switch link: "Don't have an account? Sign Up"

---

## **Benefits of This Update**

- Eliminates confusion where signup fields were not showing.
- Improves maintainability by keeping form logic centralized.
- Makes future UI changes (e.g., adding extra fields) easier since logic is consistent.
- Provides a smoother user experience with quick form switching.

---

## **Next Steps / Suggestions**

- **remove public signup** later (Keka-style), you can easily hide the toggle and only show the login form.
- Implement role-based access once authentication is complete.
- Add form validation before sending API requests.
