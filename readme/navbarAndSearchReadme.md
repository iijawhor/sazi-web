# Navbar Component with Debounced Search and LiveClock

This feature provides a **responsive navigation bar** with:

- **Live Clock & Date**
- **Debounced Search (API Integrated)**
- **User Avatar with Dropdown Menu**
- **Sidebar Toggle for Small Screens**

---

## 📂 Project Structure

src/
├── components/
│ ├── Navbar.jsx # Main navigation bar with search input
│ ├── LiveClock.jsx # Real-time clock and date display
│
├── hooks/
│ ├── useDebounce.js # Custom debounce hook
│
├── allFiles.js # Exports shared components/hooks (optional aggregator)

---

## ✅ Features and Flow

### 1. **Navbar Component**

- Renders:

  - **Brand Logo (SAZi)**
  - **Sidebar Toggle** (Visible on small screens)
  - **Search Bar** (Debounced API Search)
  - **LiveClock** (Current time and date)
  - **User Avatar with Dropdown Menu (Profile, Settings, Logout)**

- **Search Input**
  - Uses `searchQuery` state to capture input.
  - Calls `handleSearch` function wrapped in **debounce** to prevent excessive API calls.
  - Fetches data from:
    ```
    GET http://localhost:8000/api/v1/users/search?query=<searchQuery>
    ```
  - Results stored in `searchResults`.

---

### 2. **Debounced Search with `useDebounce` Hook**

- Prevents multiple rapid API calls by delaying execution until user stops typing.
- Uses:
  - `useRef` to store timeout ID.
  - `useCallback` for memoized function.
  - `useEffect` cleanup on component unmount.

```javascript
// export default function useDebounce(callback, delay) {
//   const timeoutRef = useRef();

//   const debouncedFunction = useCallback((...args) => {
//     clearTimeout(timeoutRef.current);
//     timeoutRef.current = setTimeout(() => callback(...args), delay);
//   }, [callback, delay]);

//   useEffect(() => () => clearTimeout(timeoutRef.current), []);

//   return debouncedFunction;
// }
3. LiveClock Component
Uses useState and useEffect to update time every second.

Displays:

Time in hh:mm:ss AM/PM format.

Date in Weekday, Month Day, Year.

Example:
10:45:32 AM
Wed, Jul 30, 2025
🔗 How They Connect
Navbar imports:

LiveClock for time display.

useDebounce for efficient search.

When a user types in the search bar:

searchQuery updates.

useEffect triggers debouncedSearch(searchQuery).

debouncedSearch waits 500ms (or delay) before calling handleSearch.

handleSearch makes an Axios GET request.

Search results are stored in state.
```

✅ Technologies Used
React Hooks: useState, useEffect, useCallback

Axios for API calls

TailwindCSS for styling

Custom Hook: useDebounce for performance optimization

GET /api/v1/users/search?query=<searchString>
{
"success": true,
"message": "Found 3 matching users.",
"data": [
{ "firstName": "Jawhor", "lastName": "Ali", "email": "jawhor@example.com" }
]
}
How to Run
Ensure API is running at http://localhost:8000/api/v1/users/search.

Start React app:

bash
Copy
Edit
npm install
npm run dev
Navigate to your browser and test the Navbar.
