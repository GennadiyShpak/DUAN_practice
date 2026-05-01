import Logo from "../../assets/svg/logo.jsx";
import { Link, NavLink } from "react-router-dom";
import './Header.css';
import { useContext, useEffect } from "react";
import { LanguageContext } from "../../store/languge-context.jsx";

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
    const {lang, changeLanguage} = useContext(LanguageContext);

    const onLinkActiveHandler = ({ isActive }) => {
        return isActive ? 'active-link' : ''
    }

    const onLanguageChangeHandler = () => {
        console.log('Current language:', lang);
        changeLanguage();
    }

    const flagUrl = `../../../public/svg/usa_flag${lang.lang === 'en' ? '' : '_pirate'}.svg`;

    return (
        <header class="container" style={HEADER_STYLES}>
            <h1>
                <Link to="/home">
                    <Logo/>
                </Link>
            </h1>
            <nav style={NAV_STYLES}>
                <menu className="menu" style={MENU_LINKS_STYLES}>
                    <li>
                        <NavLink style={NAVIGATION_LINK_STYLES} className={onLinkActiveHandler} to="/tracking">Tracking</NavLink>
                    </li>

                    <li>
                        <NavLink style={NAVIGATION_LINK_STYLES} className={onLinkActiveHandler} to="/shiping">Shipping</NavLink>
                    </li>

                    <li>
                        <NavLink style={NAVIGATION_LINK_STYLES} className={onLinkActiveHandler} to="/services">Services</NavLink>
                    </li>
                </menu>

                <menu className="menu" style={MENU_ICONS_STYLES}>
                    <li><img src="../../../public/svg/glass.svg" alt="glass"/></li>
                    <li onClick={onLanguageChangeHandler}><img src={flagUrl} alt="usa flag"/></li>
                    <li><img src="../../../public/svg/figure.svg" alt="figure"/></li>
                </menu>
            </nav>
        </header>
    )
}

export default Header;
