import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/auth/Login";
import Header from "./Components/ui/Header";
import Home from "./Components/Home";
import Detail from "./Components/Detail";
function App() {
  return (
    <>
      <div className="app">
        <BrowserRouter>
          {/* we add global components here outside of the Routes */}
          <Header />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
