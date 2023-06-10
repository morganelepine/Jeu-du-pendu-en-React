import { useState, useEffect } from "react";
import "../App.css";
import Alphabet from "./Alphabet.js";
import Heart from "./Heart";
import Confettis from "./Confettis";

function App() {
    const [word, setWord] = useState([]);
    const [hiddenWord, setHiddenWord] = useState([]);
    const [attempt, setAttempt] = useState(0);
    const [maxAttempt, setMaxAttempt] = useState(7);
    const [rightLetter, setRightLetter] = useState([]);
    const [wrongLetter, setWrongLetter] = useState([]);
    const [win, setWin] = useState(false);

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase().split("");
    const easyWords = [
        "bulle",
        "bourgogne",
        "paisible",
        "nature",
        "voyage",
        "nuit",
        "escapade",
        "champetre",
        "jacuzzi",
        "romantique",
    ];
    const dictionary = [
        "tyran",
        "valse",
        "hochet",
        "whisky",
        "jockey",
        "monstera",
        "fraise",
        "azimut",
        "moult",
        "thym",
        "printemps",
        "ski",
        "boxe",
        "lynx",
        "ortie",
        "rugby",
        "crayon",
        "gospel",
        "bretzel",
        "cymbale",
    ];

    const refreshPage = () => {
        window.location.reload(false);
    };

    //Choisir aléatoirement, un mot du dictionnaire
    const generateWord = () => {
        const randomIndex = Math.floor(Math.random() * 9);
        const wordToFind = easyWords[randomIndex].split("");
        return wordToFind;
    };

    //Le reproduire en version underscore
    const generateunderscoreWord = (word) => {
        let emptyWord = [];
        for (let i = 0; i < word.length; i++) {
            emptyWord[i] = " _ ";
        }
        return emptyWord;
    };

    //Vérifier si le mot contient la lettre sélectionnée
    const selectLetter = (letter) => {
        let arrayRight = [];
        let arrayWrong = [];

        //Si la letter se trouve dans le word, remplacer l'underscore par la letter
        for (let i = 0; i < word.length; i++) {
            if (letter === word[i]) {
                hiddenWord[i] = letter;
                console.log("hiddenWord : ", hiddenWord);
                console.log("word : ", word);
                arrayRight.push(letter);
                setRightLetter(rightLetter + arrayRight);
                console.log("Right letters : ", rightLetter);
                const selectedLetter = document.getElementById(letter);
                selectedLetter.style.setProperty("color", "white");
                selectedLetter.style.setProperty("background-color", "#a663cc");
                //useRef
            }
        }

        //Si la letter ne se trouve pas dans le word, la pusher dans le tableau des lettres utilisées
        if (word.indexOf(letter) === -1) {
            arrayWrong.push(letter);
            setWrongLetter(wrongLetter + " " + arrayWrong);
            setMaxAttempt(maxAttempt - 1);
            const selectedLetter = document.getElementById(letter);
            // selectedLetter.style.setProperty("color", "#ffc2d1");
            // selectedLetter.style.setProperty("background-color", "#fff0f2");
            selectedLetter.style.setProperty("opacity", "0.2");
        }

        //Etat du jeu
        if (hiddenWord.toString() === word.toString()) {
            // alert("Gagné !");
            setWin(true);
        } else if (maxAttempt === 1) {
            alert("Perdu ! Le mot était " + word.join("").toUpperCase());
            refreshPage();
        }
    };

    let text = "";
    const textAttempt = () => {
        if (maxAttempt === 1) {
            text = "Plus que " + maxAttempt + " essai";
        } else {
            text = "Plus que " + maxAttempt + " essais";
        }
    };
    textAttempt();

    useEffect(() => {
        setWord(generateWord);
        console.log(word);
    }, []);

    useEffect(() => {
        setHiddenWord(generateunderscoreWord(word));
    }, [word]);

    return (
        <>
            {win === true ? (
                <Confettis />
            ) : (
                <div>
                    <div>
                        <button
                            onClick={() => window.location.reload(false)}
                            className="button"
                        >
                            Relancer le jeu
                        </button>
                    </div>
                    <div className="app">
                        <p className="intro">
                            Trouve le mot mystère pour accéder à ton cadeau...
                        </p>
                        {/* <h1>Qui veut gagner un cadeau ?</h1> */}
                        {/* <p>Le mot à trouver est : {word}</p> */}

                        <div className="underscore">
                            {hiddenWord.map((letter) => (
                                <p className="underscoreWord">{letter}</p>
                            ))}
                        </div>

                        <div className="attempt">
                            <p className="attemptText">
                                {/* Plus que {maxAttempt} essais */}
                                {text}
                            </p>
                            {
                                <Heart
                                    attempt={attempt}
                                    maxAttempt={maxAttempt}
                                />
                            }
                        </div>

                        <div className="alphabet">
                            {alphabet.map((letter) => (
                                <Alphabet
                                    letter={letter}
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
