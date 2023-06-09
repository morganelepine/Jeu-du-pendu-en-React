import "./App.css";
import { Routes, Route } from "react-router-dom";
import Alphabet from "./Components/Alphabet.js";
import Confettis from "./Components/Confettis";
import Game from "./Components/Game";
import Gift from "./Components/Gift";
import Heart from "./Components/Heart";
import StartGame from "./Components/StartGame";

function App() {
    return (
        <div className="">
            <Routes>
                <Route path="/game" element={<Game />} />
                <Route path="/confettis" element={<Confettis />} />
                <Route path="/alphabet" element={<Alphabet />} />
                <Route path="/heart" element={<Heart />} />
                <Route path="/gift" element={<Gift />} />
                <Route path="/" element={<StartGame />} />
            </Routes>
        </div>
    );
}

export default App;
