import { BrowserRouter, Route, Routes } from "react-router";
import { Body, Dashboard, Me, Signup } from "./allFiles";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            {/* Child Routes */}
            <Route index element={<Dashboard />} /> {/* default child */}
            <Route path="me" element={<Me />} />
          </Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/me" element={<Me />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
