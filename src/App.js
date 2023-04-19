import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Game from "./components/Game";
import Play from "./components/Play";
import Modal from "./components/Modal";
import { useState } from "react";

function App() {
  const [myChoice,setMyChoice]=useState("");
  const [score,setScore] = useState(0);
  const [showFooter,setShowFooter]=useState(true)
  return (
    <>
    <div className="container">
      <Header score={score}/>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Play setMyChoice={setMyChoice} />} />
          <Route
            path="/game"
            element={
              <Game myChoice={myChoice} score={score} setScore={setScore} setShowFooter={setShowFooter}/>
            }
          />
        </Routes>
      </BrowserRouter>
      {showFooter && <Footer/>}
    </div>
    
    </>
  );
}

export default App;
