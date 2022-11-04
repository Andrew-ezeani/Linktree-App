import { Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Home from "./components/home";
import Contact from "./pages/contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
