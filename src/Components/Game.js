import { useState, useEffect } from "react";
import "../App.css";
import Alphabet from "./Alphabet.js";
import Heart from "./Heart";
import Confettis from "./Confettis";

function App() {
    const sentence = "un delicieux et mignon the par jour pour attendre noel";
    const [hiddenWord, setHiddenWord] = useState("");
    const [maxAttempt, setMaxAttempt] = useState(3);
    const [win, setWin] = useState(false);

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase().split("");

    const refreshPage = () => {
        window.location.reload(false);
    };

    const generateUnderscoreWord = (sentence) => {
        let emptyWord = [];
        for (const letter of sentence) {
            if (letter === " ") {
                emptyWord.push(" ");
            } else {
                emptyWord.push("_");
            }
        }
        return emptyWord.join("");
    };

    const selectLetter = (letter) => {
        let updatedHiddenWord = hiddenWord.split("");

        for (let i = 0; i < sentence.length; i++) {
            if (letter === sentence[i]) {
                updatedHiddenWord[i] = letter;
                const selectedLetter = document.getElementById(letter);
                selectedLetter.style.setProperty("color", "white");
                selectedLetter.style.setProperty("background-color", "#df6315");
            }
        }

        if (!sentence.includes(letter)) {
            setMaxAttempt((prev) => prev - 1);
            const selectedLetter = document.getElementById(letter);
            selectedLetter.style.setProperty("opacity", "0.2");
        }

        setHiddenWord(updatedHiddenWord.join(""));

        if (updatedHiddenWord.join("") === sentence) {
            setWin(true);
        } else if (maxAttempt === 1) {
            alert("Perdu ! La phrase était " + sentence.toUpperCase());
            refreshPage();
        }
    };

    const getTextAttempt = () => {
        return maxAttempt === 1
            ? "Plus que " + maxAttempt + " essai"
            : "Plus que " + maxAttempt + " essais";
    };

    useEffect(() => {
        setHiddenWord(generateUnderscoreWord(sentence));
    }, [sentence]);

    return (
        <>
            {win ? (
                <Confettis />
            ) : (
                <div className="bodyJeu">
                    <div>
                        <button onClick={refreshPage} className="button">
                            Relancer le jeu
                        </button>
                    </div>
                    <div className="app">
                        <p className="intro">
                            Trouve la phrase mystère pour accéder à ton
                            cadeau...
                        </p>

                        <div className="underscore">
                            {hiddenWord.split("").map((letter, index) => (
                                <p className="underscoreWord" key={index}>
                                    {letter}
                                </p>
                            ))}
                        </div>

                        <div className="attempt">
                            <p className="attemptText">{getTextAttempt()}</p>
                            <Heart
                                attempt={3 - maxAttempt}
                                maxAttempt={maxAttempt}
                            />
                        </div>

                        <div className="alphabet">
                            {alphabet.map((letter) => (
                                <Alphabet
                                    letter={letter}
                                    key={letter}
                                    onClick={() => selectLetter(letter)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default App;
