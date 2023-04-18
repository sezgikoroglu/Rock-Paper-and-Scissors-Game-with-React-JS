import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Game from "./components/Game";
import Play from "./components/Play";

function App() {
  return (
    <div className="container">
      <Header/>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Play/>} />
          <Route
            path="/game"
            element={
              <Game />
            }
          />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
