import Logo from "../../assets/svg/logo.jsx";
import { Link, NavLink } from "react-router-dom";
import './Header.css';
import { useContext } from "react";
import { LanguageContext } from "../../store/languge-context.jsx";
import { useSelector, useDispatch } from 'react-redux';
import Figure from "../../assets/svg/figure.jsx";
import NotLoggedUser from "../../assets/svg/not-logged-user.jsx"
import { modalActions } from '../../redux-store/modal-store.js'

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
    const isAuth = useSelector(state => state.auth.isAuth)
    const dispatch = useDispatch();

    const onLinkActiveHandler = ({ isActive }) => {
        return isActive ? 'active-link' : ''
    }

    const onLanguageChangeHandler = () => {
        changeLanguage();
    }

    const onAuthHandler = () => {
        dispatch(modalActions.openModal())
    }

    const flagUrl = `../../../public/svg/usa_flag${lang.lang === 'en' ? '' : '_pirate'}.svg`;

    return (
        <header className="container" style={HEADER_STYLES}>
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
                    <li onClick={onAuthHandler}>{isAuth ? <Figure/> : <NotLoggedUser/>}</li>
                </menu>
            </nav>
        </header>
    )
}

export default Header;
