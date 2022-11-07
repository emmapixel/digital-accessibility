import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import Button from "../Button";
import Footer from "../Footer";
import Header from "../Header";
import styles from './Home.css';


export default function Home() {
    return (
        <>
            <Header />
            <main>
                <h3 className="breadcrumbs">Hem</h3>
                <img src="/media/images/heroImage.jpg" alt="Bilden är på en öppen planlösning med vardagsrum och kök i ett. Färgerna i bilden går i ljusa toner. Grått, ljusbrunt, brunt, vitt och bildar en helhetskänsla av att alla sakerna hör ihop. Det är lyxiga tyger i mocka på stolarna och på soffan. Bord och bänkar är i ljust trä. Rummet är ljust och stilrent. " className="heroImage"></img>
                <section className="mainContainer">
                    <article className="discountMobileSection">
                        <article className="discountImageContainer">
                            <img src="./media/images/heroImage.jpg" alt="Bild på bordslampa till salu för 30% lägre i pris. Enkel lampa i metall och med en korgliknande diamantformad lampskärm. Går att se igenom till glödlampan." width="100%" height="100%"></img>
                        </article>
                        <article className="discountDescriptionContainer">
                                <h1 className="titleBold">Lys upp höstmörket. <br />Nu <span className="redText">30%</span> på alla lampor.</h1>
                                <br />
                                <h2>Erbjudandet gäller 31/11-2022, för dig som är(eller blir)medlem</h2>
                            <br />                    
                        </article>
                        <Button>
                            <h1 className="buttonText">Till erbjudandet</h1>
                            <FontAwesomeIcon className="arrowRightIcon" icon={faArrowRightLong} />
                        </Button>
                    </article>
                    <article className="discountSection">
                        <article className="discountImageContainer">
                            <img src="./media/images/heroImage.jpg" alt="Bild på bordslampa till salu för 30% lägre i pris. Enkel lampa i metall och med en korgliknande diamantformad lampskärm. Går att se igenom till glödlampan." width="100%" height="100%"></img>
                        </article>
                        <article className="discountDescriptionContainer">
                                <h1 className="titleBold">Lys upp höstmörket. <br />Nu <span className="redText">30%</span> på alla lampor.</h1>
                                <br />
                                <h2>Erbjudandet gäller 31/11-2022, för dig som är(eller blir)medlem</h2>
                            <br />                    
                            <Button>
                                <h1 className="buttonText">Till erbjudandet</h1>
                                <FontAwesomeIcon className="arrowRightIcon" icon={faArrowRightLong} />
                            </Button>
                        </article>
                    </article>
                    <article className="aboutMobileSection">
                        <section className="aboutSectionImage">
                            <img src="./media/images/team.jpg" alt="Bild på fem människor som jobbar på Hemma Bäst företaget. Tre killar och två tjejer. Alla ler och är glada. "width="100%"></img>
                        </section>
                        <section className="aboutSectionImageDescription"> 
                                <h1 className="titleBold">Träffa Hemma Bäst teamet!</h1>
                                <br/>
                                <h2>För att du ska ha möjlighet att skapa den bästa miljön i ditt hem följer vi dessa fem principer</h2>
                                    <br/>
                                    <ul className="principList">
                                        <li>Tillit</li>
                                        <li>Trygghet</li>
                                        <li>Sparande</li>
                                        <li>Erfarenhet</li>
                                        <li>Nytänkande</li>
                                    </ul>
                        </section>
                        <Button>
                            <h1 className="buttonText">Kom i kontakt med oss</h1>
                            <FontAwesomeIcon className="arrowRightIcon" icon={faArrowRightLong} />
                        </Button>
                    </article>
                    <article className="aboutSection">
                        <section className="aboutSectionImage">
                            <img src="./media/images/team.jpg" alt="Bild på fem människor som jobbar på Hemma Bäst företaget. Tre killar och två tjejer. Alla ler och är glada. "width="100%"></img>
                        </section>
                        <section className="aboutSectionImageDescription"> 
                            <h1 className="titleBold">Träffa Hemma Bäst teamet!</h1>
                            <h2>För att du ska ha möjlighet att skapa den bästa miljön i ditt hem följer vi dessa fem principer</h2>
                                <ul>
                                    <li>Tillit</li>
                                    <li>Trygghet</li>
                                    <li>Sparande</li>
                                    <li>Erfarenhet</li>
                                    <li>Nytänkande</li>
                                </ul>
                            <br/>
                            <Button>
                                <h1 className="buttonText">Kom i kontakt med oss</h1>
                                <FontAwesomeIcon className="arrowRightIcon" icon={faArrowRightLong} />
                            </Button>
                        </section>
                    </article>
                </section>
                <Footer />
            </main>
        </>
    );
}