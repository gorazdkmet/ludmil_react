import React from "react";
import { DATA, SUPPORTED_LANG } from "../../consts/constants";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import i18next from "i18next";
import { pathFor } from "../../helpers/pathFor";
import classNames from "classnames";
import { useArt } from "hooks";

const FieldNavigation = ({ toggleCycleNav }) => {

  const { field } = useArt();
  const { t } = useTranslation("titles");
  const history = useHistory();

  const revertLang = (lang) =>
    lang === SUPPORTED_LANG.SK ? SUPPORTED_LANG.EN : SUPPORTED_LANG.SK;

  const currentLang = i18next.language;
  const otherLang = revertLang(currentLang);

  const onLanguageChange = () => {
    i18next.changeLanguage(otherLang);
  };

  const handleFieldChange = (field) => {
    history.push(pathFor(field));
    toggleCycleNav(field);
  };

  return (
    <menu className="field-navigation">
      <div className="field-nav__container">
        {Object.keys(DATA).map((def, i) => (
          <Link
            className={classNames("field-nav__item", {
              "field-nav--selected": def === field,
            })}
            key={i}
            text={t(`field.${def}`)}
            onClick={() => handleFieldChange(def)}
          />
        ))}
        <Link className='field-nav__item' text={t(`lang.${otherLang}`)} onClick={onLanguageChange} />
      </div>
    </menu>
  );
};

const Link = ({ text, ...props }) => <span {...props}>{text}</span>;

export default FieldNavigation;
