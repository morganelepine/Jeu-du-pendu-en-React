import { useState } from "react";
import "../App.css";
import Alphabet from "./Alphabet";
import UnderscoreWord from ".UnderscoreWord";
import StartGame from ".StartGame";
import Confettis from ".Confettis";

function Game() {
    const [attempt, setAttempt] = useState(5);
    const [rightLetter, setRightLetter] = useState([]);
    const [wrongLetter, setWrongLetter] = useState([]);
    const [hiddenWord, setHiddenWord] = useState("");
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
    ];

    //Choisir aléatoirement un mot du dictionnaire
    const generateWord = () => {
        const randomIndex = Math.floor(Math.random() * 9);
        const wordToFind = dictionary[randomIndex].split("");
        return wordToFind;
    };
    // const word = generateWord();
    const word = "monstera";

    //Le reproduire en version tiret-vide
    const generateunderscoreWord = (word) => {
        let emptyWord = [];
        for (let i = 0; i < word.length; i++) {
            emptyWord[i] = " ___ ";
        }
        return emptyWord;
    };
    const underscoreWord = generateunderscoreWord(word);
    // setHiddenWord(underscoreWord);
    // console.log(hiddenWord);

    //Vérifier si le mot contient la lettre sélectionnée
    const selectLetter = (letter) => {
        let arrayRight = [];
        let arrayWrong = [];

        //Si la letter se trouve dans le word, remplacer l'underscore par la letter
        for (let i = 0; i < word.length; i++) {
            if (letter === word[i]) {
                underscoreWord[i] = letter;
                setHiddenWord(underscoreWord);
                console.log("hiddenWord : ", hiddenWord);
                arrayRight.push(letter);
                setRightLetter(rightLetter + arrayRight);
                console.log("Right letters : ", rightLetter);
            }
        }

        //Si la letter ne se trouve pas dans le word, la pusher dans le tableau des lettres utilisées
        if (word.indexOf(letter) === -1) {
            arrayWrong.push(letter);
            setWrongLetter(wrongLetter + " " + arrayWrong);
            setAttempt(attempt - 1);
        }

        //Etat du jeu
        if (rightLetter.length === word.length - 1) {
            // alert("Gagné !");
            setWin(true);
        } else if (attempt === 1) {
            alert('Perdu ! Le mot était "' + word + '"');
        }
    };

    // useEffect(() => {
    //     generateWord();
    // }, [win]);

    return (
        <>
            <div className="app">
                <div>{win === true ? <Confettis /> : <StartGame />}</div>

                <div className="text">
                    <p>Le mot à trouver est : {word}</p>
                    <p>Essais restants : {attempt}</p>
                    <p>Lettres déjà utilisées : {wrongLetter}</p>
                </div>

                <div className="underscore">
                    {hiddenWord}
                    {/* {underscoreWord.map((letter) => (
                    <UnderscoreWord letter={letter} />
                ))} */}
                    {/* {!hiddenWord.includes(alphabet)
                    ? { underscoreWord }
                    : { hiddenWord }} */}
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

export default Game;
