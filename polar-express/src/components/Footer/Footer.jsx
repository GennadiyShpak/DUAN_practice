import FooterLink from "../FooterLink/FooterLink.jsx";

const linkConfig = ['facebook', 'youtube', 'twitter', 'linkedin'];

const Footer = () => {
    return (
        <footer class="footer container">
            <div class="customer-service__wrapper">
                <h3 class="footer-header">Customer Service</h3>
                <menu class="footer-menu customer-service">
                    <li>
                        <a class="footer-menu__link" href="#">Help center</a>
                    </li>

                    <li>
                        <a class="footer-menu__link" href="#">Claims Support</a>
                    </li>
                </menu>

                <h3 class="footer-header social-header">Follow PolarExpress</h3>
                <menu class="footer-social-menu">
                    { linkConfig.map(link => <FooterLink key={link} name={link} />) }
                </menu>
            </div>

            <div class="site__wrapper">
                <h3 class="footer-header">This Site</h3>

                <menu class="footer-menu">
                    <li>
                        <a class="footer-menu__link" href="#">Tracking</a>
                    </li>
                    <li>
                        <a class="footer-menu__link" href="#">Shipping</a>
                    </li>

                    <li>
                        <a class="footer-menu__link" href="#">Services</a>
                    </li>
                </menu>
            </div>

            <div class="company-info__wrapper">
                <h3 class="footer-header">Company Info</h3>

                <menu class="footer-menu">
                    <li>
                        <a class="footer-menu__link" href="#">
                            About PE
                            <img src="../../../public/svg/redirection.svg" alt="redirection" />
                        </a>
                    </li>

                    <li>
                        <a class="footer-menu__link" href="#">
                            Media Relations
                            <img src="../../../public/svg/redirection.svg" alt="redirection" />
                        </a>
                    </li>

                    <li>
                        <a class="footer-menu__link" href="#">
                            Investor Relations
                            <img src="../../../public/svg/redirection.svg" alt="redirection" />
                        </a>
                    </li>

                    <li>
                        <a class="footer-menu__link" href="#">Careers</a>
                    </li>
                </menu>
            </div>
        </footer>
    )
}

export default Footer
