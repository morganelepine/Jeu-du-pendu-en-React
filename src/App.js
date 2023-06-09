import { useState, useEffect } from "react";
import "./App.css";
import Alphabet from "./Components/Alphabet.js";
import StartGame from "./Components/StartGame";
import Heart from "./Components/Heart";
import Confettis from "./Components/Confettis";

function App() {
    const [word, setWord] = useState([]);
    const [hiddenWord, setHiddenWord] = useState([]);
    const [attempt, setAttempt] = useState(0);
    const [maxAttempt, setMaxAttempt] = useState(7);
    const [rightLetter, setRightLetter] = useState([]);
    const [wrongLetter, setWrongLetter] = useState([]);
    const [win, setWin] = useState(false);

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase().split("");
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

    //Choisir aléatoirement, un mot du dictionnaire
    const generateWord = () => {
        const randomIndex = Math.floor(Math.random() * 9);
        const wordToFind = dictionary[randomIndex].split("");
        return wordToFind;
    };

    //Le reproduire en version underscore
    const generateunderscoreWord = (word) => {
        let emptyWord = [];
        for (let i = 0; i < word.length; i++) {
            emptyWord[i] = " __ ";
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
        if (rightLetter.length === word.length - 1) {
            // alert("Gagné !");
            setWin(true);
        } else if (maxAttempt === 1) {
            alert('Perdu ! Le mot était "' + word + '"');
        }
    };

    // const lostAttempt = (heart) => {
    //     const heart = document.getElementById(heart);
    //     heart.style.setProperty("opacity", "0.3");
    // };

    useEffect(() => {
        setWord(generateWord);
        console.log(word);
    }, []);

    useEffect(() => {
        setHiddenWord(generateunderscoreWord(word));
    }, [word]);

    return (
        <>
            <div>{win === true ? <Confettis /> : <StartGame />}</div>
            <div className="app">
                <div className="text">
                    <h1>Qui veut gagner un cadeau ?</h1>
                    {/* <p>Le mot à trouver est : {word}</p> */}
                </div>

                <div>
                    <p className="attemptText">Plus que {maxAttempt} essais</p>
                    {<Heart attempt={attempt} maxAttempt={maxAttempt} />}
                </div>

                <div className="underscore">
                    {hiddenWord.map((letter) => (
                        <p className="underscoreWord">{letter}</p>
                    ))}
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
        </>
    );
}

export default App;
