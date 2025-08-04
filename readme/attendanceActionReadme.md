✅ Attendance Management (Login/Logout)
This module implements attendance tracking for users (e.g., teachers) with the ability to log web attendance using a Login and Logout mechanism. It integrates Redux Toolkit, React components, and API calls for managing attendance records.

📂 Files & Structure

src/
├── components/
│ └── Me/
│ ├── Me.jsx # Main page for Attendance & Actions
│ └── Actions.jsx # Attendance control (Login/Logout)
├── store/
│ ├── store.js # Redux store configuration
│ └── slices/
│ └── attendanceSlice.js # Redux slice for attendance state
🚀 Features Implemented
✅ Me.jsx
Acts as a dashboard section for attendance and related actions.

Contains:

Header with Attendance and Leave tabs.

Two info cards: Attendance & Timings (placeholders for additional data).

Actions section integrated for attendance operations.

✅ Actions.jsx
Displays LiveClock (time & date).

Provides Web Log In and Web Log Out buttons:

Login flow:

Sends a POST request with { status: "in", timestamp } to the attendance API.

Updates UI state and Redux store.

Logout flow:

Shows confirmation popup before logging out.

Sends { status: "out", timestamp } to the attendance API.

Handles:

Loading state: Displays Processing... during API calls.

Error state: Shows error messages from API failures.

Responsive UI styled with Tailwind CSS.

✅ attendanceSlice.js
Manages attendance state in Redux:

loginResponse: Stores API response after login.

logoutResponse: Stores API response after logout.

loading: Indicates API processing.

error: Stores error messages.

Implements updateAttendanceStatus thunk:

Single function for both login and logout.

Accepts { apiUrl, status, accessToken, timestamp }.

Sends request with Authorization Bearer token.

Updates Redux state accordingly.

✅ Redux Store (store.js)
Configures Redux Toolkit store.

Combines auth slice and attendance slice for global state management.

🔗 API Endpoints
Attendance API:
POST http://localhost:8000/api/v1/attendance/attendance

Headers:
Authorization: Bearer <token>
Content-Type: application/json

Body:

{
"status": "in" | "out",
"timestamp": "2025-08-04T10:30:00.000Z"
}
🖼 UI Flow
User lands on Me page.

Actions component shows LiveClock and attendance buttons.

User clicks Web Log In:

API call → Redux updates → Button changes to Web Log Out.

User clicks Web Log Out:

Confirmation popup → API call → Redux updates → Button changes back to Web Log In.

✅ State Flow

UI Action → Dispatch(updateAttendanceStatus) → API Request → Update State → Reflect in UI
🔍 Error Handling
Displays error message below buttons if API call fails.

Disables buttons during processing.

🛠 Tech Stack
React (for UI components)

Redux Toolkit (state management)

Axios (API requests)

Tailwind CSS (styling)

React Router (routing)

✅ Next Enhancements
Add attendance history table.

Display total logged-in hours.

Real-time sync with backend using WebSockets.
