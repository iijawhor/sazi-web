// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {}
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        saziTheme: {
          primary: "#2563EB", // main blue
          "primary-focus": "#1E3A8A", // dark variant (focus/active)
          "primary-content": "#FFFFFF", // text on primary
          secondary: "#60A5FA", // light blue
          accent: "#8B5CF6",
          neutral: "#374151",
          "base-100": "#FFFFFF" // background
        }
      }
    ]
  }
};
