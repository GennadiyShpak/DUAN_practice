import FooterFacebook from "../../assets/svg/footer-facebook.jsx";
import FooterYoutube from "../../assets/svg/footer-youtube.jsx";
import FooterTwitter from "../../assets/svg/footer-twitter.jsx";
import FooterLinkedin from "../../assets/svg/footer-linkedin.jsx";

const linkConfig = {
        facebook: () => <FooterFacebook />,
        youtube: () => <FooterYoutube />,
        twitter: () => <FooterTwitter />,
        linkedin: () => <FooterLinkedin />
}

const FooterLink = ({ name }) => {
    const iconComponent = linkConfig[name];

    return (
        <li>
            <a href="#">
                { iconComponent() }
            </a>
        </li>
    )
}

export default FooterLink;
