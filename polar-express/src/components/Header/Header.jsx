import Logo from "../../assets/svg/logo.jsx";

const Header = () => {
    return (
        <header class="header container">
            <h1>
                <a href="./index.html">
                    <Logo/>
                </a>
            </h1>
            <nav class="nav">
                <menu class="menu menu__links">
                    <li><a class="navigation_link" href="#">Tracking</a></li>
                    <li><a class="navigation_link" href="#">Shiping</a></li>
                    <li><a class="navigation_link" href="./services.html">Services</a></li>
                </menu>

                <menu class="menu menu__icons">
                    <li><img src="../../../public/svg/glass.svg" alt="glass"/></li>
                    <li><img src="../../../public/svg/usa_flag.svg" alt="usa flag"/></li>
                    <li><img src="../../../public/svg/figure.svg" alt="figure"/></li>
                </menu>
            </nav>
        </header>
    )
}

export default Header;
