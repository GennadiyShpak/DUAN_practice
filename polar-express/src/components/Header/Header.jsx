import Logo from "../../assets/svg/logo.jsx";

const HEADER_STYLES = {
    display: 'flex',
    gap: '244px',
    marginBottom: '4px',
    background: '#fff'
}

const NAV_STYLES = {
    display: 'flex',
    gap: '244px',
    alignItems: 'center'
}

const MENU_LINKS_STYLES = {
    gap: '70px'
}

const NAVIGATION_LINK_STYLES = {
    color: '#1A1A1A',
    textDecoration: 'none'
}

const MENU_ICONS_STYLES = {
    gap: '22px'
}

const Header = () => {
    return (
        <header class="container" style={HEADER_STYLES}>
            <h1>
                <a href="./index.html">
                    <Logo/>
                </a>
            </h1>
            <nav style={NAV_STYLES}>
                <menu className="menu" style={MENU_LINKS_STYLES}>
                    <li><a style={NAVIGATION_LINK_STYLES} href="#">Tracking</a></li>
                    <li><a style={NAVIGATION_LINK_STYLES} href="#">Shiping</a></li>
                    <li><a style={NAVIGATION_LINK_STYLES} href="./services.html">Services</a></li>
                </menu>

                <menu className="menu" style={MENU_ICONS_STYLES}>
                    <li><img src="../../../public/svg/glass.svg" alt="glass"/></li>
                    <li><img src="../../../public/svg/usa_flag.svg" alt="usa flag"/></li>
                    <li><img src="../../../public/svg/figure.svg" alt="figure"/></li>
                </menu>
            </nav>
        </header>
    )
}

export default Header;
