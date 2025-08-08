Got it — here’s your updated **README.md** with the screenshot you provided included in a **Preview** section:

````markdown
# Timings Component

## Overview

The **Timings** component is a React functional component that visually displays a weekly class schedule, highlights the current day, and shows details about class timing, break timing, and durations.

This component is styled using **Tailwind CSS** and is designed to be responsive and compact.

---

## Features

- Displays **all 7 days of the week** with their first letter.
- Highlights the **current day** using a blue background.
- Shows **class timing** for today.
- Displays **break timing** and **duration**.
- Includes a visual **progress bar** representing the class schedule.
- Supports **custom timings** via props.

---

## Props

| Prop            | Type   | Default                 | Description                  |
| --------------- | ------ | ----------------------- | ---------------------------- |
| `breakDuration` | String | `"45"`                  | Break duration in minutes.   |
| `breakTiming`   | String | `"1:15 PM to 2:00 PM"`  | Time range for the break.    |
| `classDuration` | String | `"6 hours 30 mins"`     | Total duration of the class. |
| `classTiming`   | String | `"10:00 AM to 4:30 PM"` | Time range for the class.    |

---

## How It Works

1. **Generate Weekdays**
   - Creates an array of weekday names starting from Sunday using `Array.from()` and `Date`.
2. **Identify Today's Day**
   - Uses `new Date()` to match and highlight the current day.
3. **Render UI**
   - Displays day initials, class timing, break timing, progress bar, and break duration.
4. **Styling**
   - Uses **Tailwind CSS** for layout and visual styles.
   - Highlights today with `bg-blue-500`.

---

## Example Usage

```jsx
import Timings from "./Timings";

export default function App() {
  return (
    <div className="p-4">
      <Timings
        breakDuration="30"
        breakTiming="12:30 PM to 1:00 PM"
        classDuration="6 hours"
        classTiming="10:00 AM to 4:00 PM"
      />
    </div>
  );
}
```
````

---

## Preview

![Timings Component Preview](./9a256755-5373-484a-b47b-e57e0cd0d1fe.png)

---

## Visual Layout

```
Timings
 ├─ Title: "Timings"
 ├─ Weekday initials (S M T W T F S) — today highlighted
 ├─ Today (Class timing) • Break Timing
 ├─ Progress bar
 └─ Duration & Break Duration with icon
```

---

## Dependencies

- **React**
- **Tailwind CSS** for styling

---

## Notes

- The weekday generation logic is based on the `Date` object starting from **Sunday (1970-01-04)**.
- This component assumes **English (en-US)** locale for weekday names.
- All props are optional — defaults are provided.
