const StartGame = ({ onClick }) => {
    return (
        <div>
            <button onClick={onClick} className="startGame">
                Relancer le jeu
            </button>
        </div>
    );
};

export default StartGame;
