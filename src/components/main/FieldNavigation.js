import React from 'react'
import { DEFAULT, MAIN_BLOCKS, SUPPORTED_LANG } from '../../consts/constants';
import { useTranslation } from "react-i18next";
import { useHistory} from "react-router-dom";
import i18next from 'i18next';
import { pathFor } from "../../helpers/pathFor";

const FieldNavigation = ({toggleCycleNav}) => {

    const { t } = useTranslation('titles')
    const history = useHistory()

    const revertLang = (lang) =>
        lang === SUPPORTED_LANG.SK ? SUPPORTED_LANG.EN : SUPPORTED_LANG.SK

    const currentLang = i18next.language
    const otherLang = revertLang(currentLang)

    const onLanguageChange = () => {
        i18next.changeLanguage(otherLang)
    }

    const handleFieldChange = (field) => {
        history.push(pathFor(field))
        toggleCycleNav(field)
    }

    return (
        <menu className="field-navigation">
            <div className="field-nav__container">
            {DEFAULT.map( (def, i) => (
                <Link key={i} text={t(`${MAIN_BLOCKS.FIELD}.${def.FIELD}`)} onClick={() => handleFieldChange(def.FIELD)} />
            ))}
                <Link text={t(`lang.${otherLang}`)} onClick={onLanguageChange} />
            </div>
        </menu>
    )
}

const Link = ({ text, ...props }) => ( <span {...props} > {text} </span> )

export default FieldNavigation





