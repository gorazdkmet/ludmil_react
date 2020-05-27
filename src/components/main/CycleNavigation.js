import { DATA } from "../../consts/constants";

import React from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import classNames from "classnames";

import { pathFor } from "../../helpers/pathFor";
import { useArt } from "hooks";

const CycleNavigation = ({ navHidden }) => {

  const { field, cycle }  = useArt();
  const { t } = useTranslation("titles");
  const history = useHistory();

  const handleCycleChange = (cycle) => {
    history.push(pathFor(field, cycle));
  }

  return (
    <nav
      className={classNames("gallery-navigation", {
        "gallery-navigation--hidden": navHidden,
      })}
    >
      <div className="gallery-nav__section">
        <ul>
          {DATA[field].cycles.map((c, i) => (
            <div
              key={i}
              className={classNames("gallery-nav__item", {
                "gallery-nav__item--selected": cycle === c,
              })}
              onClick={() => {
                handleCycleChange(c);
              }}
            >
              <span>{t(`cycle.${field}.${c}.name`)}</span>
              <span className="gallery-nav__imgdate">
                {t(`cycle.${field}.${c}.year`)}
              </span>
            </div>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default CycleNavigation;
