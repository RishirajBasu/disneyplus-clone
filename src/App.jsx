import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/auth/Login";
import Header from "./Components/ui/Header";
function App() {
  return (
    <>
      <div className="app">
        <BrowserRouter>
          {/* we add global components here outside of the Routes */}
          <Header />
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
