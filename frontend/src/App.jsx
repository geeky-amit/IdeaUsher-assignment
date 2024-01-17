import Home from "./components/Home"
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import SinglePost from "./components/SinglePost";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/singlepost" target="_blank" element={<SinglePost />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
