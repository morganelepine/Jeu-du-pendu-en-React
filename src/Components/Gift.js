import { Link } from "react-router-dom";
import image1 from "../Images/image1.jpg";
import image2 from "../Images/image2.jpg";
import image3 from "../Images/image3.jpg";
import image4 from "../Images/image4.jpg";
import image5 from "../Images/image5.jpg";
import image6 from "../Images/image6.jpg";

const Gift = () => {
    return (
        <>
            <div className="gift">
                <h1 className="h1Gift">2 nuits dans une bulle en Bourgogne</h1>
                <div className="imageGift">
                    <img src={image1} alt="La chambre" className="image" />
                    <img
                        src={image2}
                        alt="Une autre vue de la chambre"
                        className="image"
                    />
                    <img
                        src={image3}
                        alt="Une 3e vue de la chambre"
                        className="image"
                    />
                    <img
                        src={image5}
                        alt="La salle de bain"
                        className="image"
                    />
                    <img src={image4} alt="Le jacuzzi" className="image" />
                    <img
                        src={image6}
                        alt="Le pett-déjeuner"
                        className="image"
                    />
                </div>
                <p className="textGift">
                    La Bulle Ecureuil aura le plaisir d'accueillir Caly et Rémi
                    pour une escapade romantique et champêtre en amoureux.{" "}
                </p>
                <p className="textGift">
                    Installez-vous confortablement dans votre lit pour profiter
                    de la vue sur le ciel étoilé. Le matin, les rayons du soleil
                    et les bruits de la nature viendront vous réveiller tout en
                    douceur.{" "}
                </p>
                <p className="textGift">
                    La bulle dispose d’une terrasse pour que vous puissiez
                    pleinement profiter de votre petit-déjeuner, inclus et livré
                    directement à votre porte, ou tout simplement, vous
                    installer et vous détendre.
                </p>
                <p className="textGift">
                    Pour un moment de détente parfait, rien ne vaut une séance
                    dans un jacuzzi, à proximité de votre bulle, dans une
                    dépendance privatisée.
                </p>
                <p className="adressGift">
                    Le P'tit Monde du Morvan <br />
                    Quarré-Les-Tombes <br />
                    Yonne (89) <br />à 3h30 de Sartrouville
                </p>
                <Link to="https://www.abracadaroom.com/fr/reservation-le-ptit-monde-du-morvan-bulles-bulle-ecureuil-4087/">
                    <button className="buttonGift">
                        Je veux en savoir plus !
                    </button>
                </Link>
                <Link to="/game">
                    <button className="buttonGiftGame">
                        Super ce cadeau mais j'aimerais rejouer...
                    </button>
                </Link>
            </div>
        </>
    );
};

export default Gift;
