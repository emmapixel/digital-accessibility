import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Button from "./Button";

export default function Footer() {
    return(
        <main className="footer">
            <section className="newsletterSection">
                <h2 className="textBold">Prenumerera på vårt nyhetsbrev</h2>
                <input className="inputField" placeholder="dinmail@hotmail.com" required></input>
                <Button>
                    <h1 className="buttonText">Godkänn prenumeration</h1>
                </Button>
            </section>

            <section className="footerBottomWrapper">
                <section className="footerTextContainer">
                    <h2>Information</h2>
                    <p>Hemma Bäst Design & inredning <br/> Telefon: 070-000 00 00 <br/> e-post: info@hemmabast.se <br /> <br/> Copyright © Hemma Bäst - 2022</p>
                </section>
                
                <section className="socialMediaIconContainer">
                    <button className="iconButton">
                        <FontAwesomeIcon className="socialMediaIcon" icon={faFacebook} />
                        <p className="iconText">Facebook</p>
                    </button>
                    <button className="iconButton">
                        <FontAwesomeIcon className="socialMediaIcon" icon={faInstagram} />
                        <p className="iconText">Instagram</p>
                    </button>
                    <button className="iconButton">
                        <FontAwesomeIcon className="socialMediaIcon" icon={faYoutube} />
                        <p className="iconText">Youtube</p>
                    </button>
                </section>
            </section>
        </main>
    )
}