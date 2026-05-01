import {Outlet} from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "../../store/languge-context.jsx";

const Shiping = () => {
    const {lang} = useContext(LanguageContext);

    const titleText = lang.lang === 'en' ? 'Shipping page' : 'Сторінка доставки';
    return (
        <>
            <section className="main_container">
                <h2 style={{color: 'brown'}} className="title">{titleText}</h2>
            
                <Outlet/>
            </section>
        </>
    )
}

export default Shiping;