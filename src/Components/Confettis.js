import Confetti from "react-confetti";
import { Link } from "react-router-dom";

const Confettis = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const colors = ["#642ca9", "#ff36ab", "#fffff", "#ffb8de", "#ffdde1"];

    return (
        <>
            <Confetti
                width={width}
                height={height}
                colors={colors}
                numberOfPieces={300}
                //   recycle={false} //Keep spawning confetti after numberOfPieces pieces have been shown
                //   run={false} //Run the animation loop
            />
            <div className="giftButton">
                <Link to="/gift">
                    <button className="getGiftButton">
                        Le cadeau ! Le cadeau ! Le cadeau !
                    </button>
                </Link>
            </div>
        </>
    );
};

export default Confettis;
