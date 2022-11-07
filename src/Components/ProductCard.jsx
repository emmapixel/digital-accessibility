import Button from "./Button";
import styles from "./ProductCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

export default function ProductCard() {
    return(
        <article className="productCardContainer">
            <section className="productPictureContainer">
                <img src="./media/images/blackLamp.jpg" alt="Bild på en svart metallampa med tre gulddetaljer. Lampskärmen är diamantformad och har ett korgliknande utseende. Det går att se igenom skärmen till själva glödlampan. Glödlampan är av LED-typ." width="100%"></img>
            </section>
            <section className="productDetailsContainer">
                <h3 class="productTitle">Kontorslampa för kreativt arbete</h3>
                <h4 class="productDescription">Lampan har en bottenarea på 20 cm. Den är tillverkad i svart metal och har gulddetaljer. Lampskärmen har diamantform och ett korgliknande utseende. Lampan är av LED-typ. </h4>
                <section className="productBuyContainer">
                    <input className="inputAmount" value={1} />
                    <Button>
                        <FontAwesomeIcon className="basketIcon" icon={faShoppingBasket} />
                        <h1 className="buttonText">KÖP</h1>
                    </Button>
                </section>
            </section>
        </article>
    )
}