import { createContext, useReducer } from "react";



const languageInitialState = {
    lang: 'en',
    changeLanguage: () => {}
};


export const LanguageContext = createContext(languageInitialState);

const languageReducer = (state, action) => {

    if (action.type === 'CHANGE_LANGUAGE') {
        const newLang = state.lang === 'en' ? 'ua' : 'en';

        console.log('context lang:', newLang);
        
        return { lang: newLang }
    }

    return state
}

const LanguageProvider = ({ children }) => {
    const [langState, dispatchLang] = useReducer(languageReducer, languageInitialState.lang);

    const changeLanguage = () => {
        dispatchLang({
            type: 'CHANGE_LANGUAGE',
        })
    }


    const langCtx = { lang: langState, changeLanguage };

    return (
        <LanguageContext.Provider value={langCtx}>
            {children}
        </LanguageContext.Provider>
    )
}

export default LanguageProvider;