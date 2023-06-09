const Alphabet = ({ letter, heart, onClick }) => {
    return (
        <>
            <div>
                <button onClick={onClick} className="letter" id={letter}>
                    {letter}
                </button>
            </div>
        </>
    );
};

export default Alphabet;
