import { Link } from "react-router-dom";
import image1 from "../Images/cadeau1.jpg";
import image2 from "../Images/cadeau2.jpg";
import image3 from "../Images/cadeau3.jpg";

const Gift = () => {
    return (
        <div className="bodyGame">
            <div className="gift">
                <h1 className="h1Gift">
                    Le calendrier de l'avent Tea Heritage
                </h1>
                <div className="imageGift">
                    <img src={image1} alt="Le calendrier" className="image" />
                    <img
                        src={image2}
                        alt="Une autre vue du calendrier"
                        className="image"
                    />
                    <img
                        src={image3}
                        alt="Une 3e vue du calendrier"
                        className="image"
                    />
                </div>
                <p className="textGift">
                    À chaque jour sa tasse de thé ! Chaque matin, tu découvriras
                    une saveur différente dans une des cases de ton joli
                    Calendrier de l'Avent.
                </p>
                <p className="textGift">
                    La meilleure façon de patienter jusqu'au jour de Noël, avec
                    des infusions biologiques, rooibos, tisanes...
                </p>
                <p className="textGift">
                    Chaque sachet de thé Tea Heritage est personnalisé. L'effet
                    de surprise sera garantie !
                </p>
                <Link to="/game">
                    <button className="buttonGiftGame">
                        Super ce cadeau mais j'aimerais rejouer...
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Gift;
