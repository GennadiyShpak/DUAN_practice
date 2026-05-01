import { useContext } from "react";
import { LanguageContext } from "../../store/languge-context.jsx";

const Tracking = () => {
    const {lang} = useContext(LanguageContext);
    const titleText = lang.lang === 'en' ? 'Tracking page' : 'Сторінка відстеження';
    return (
        <section className="main_container">
            <h2 style={{color: 'brown'}} className="title">{titleText}</h2>
        </section>
    )
}

export default Tracking;