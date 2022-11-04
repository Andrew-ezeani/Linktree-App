import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./styles/App.css";
import Home from "./components/home";
import Contact from "./pages/contact";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
