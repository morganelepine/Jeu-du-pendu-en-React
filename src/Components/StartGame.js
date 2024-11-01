import { Link } from "react-router-dom";

const StartGame = () => {
    return (
        <div className="bodyJeu">
            <div className="startGame">
                <div>
                    <h1>Tu veux un cadeau ?</h1>
                </div>
                <div className="startGameButtons">
                    <Link to="/game">
                        <button className="startGameButton">Oui</button>
                    </Link>
                    <Link to="/game">
                        <button className="startGameButton">Ouiiiiiiiii</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default StartGame;
