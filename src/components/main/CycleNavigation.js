import React, { useState } from "react";
import { ALL_CYCLES, MAIN_BLOCKS } from "../../consts/constants";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import classNames from "classnames";
import { pathFor } from "../../helpers/pathFor";

const CycleNavigation = ({ field, active, navHidden }) => {
  const { t } = useTranslation("titles");
  const history = useHistory();

  const onClick = (active, cycle) => {
    history.push(pathFor(field, cycle));
  };

  return (
    <nav
      className={classNames("gallery-navigation", {
        "gallery-navigation--hidden": navHidden,
      })}
    >
      <div className="gallery-nav__section">
        <ul>
          {ALL_CYCLES[field.toUpperCase()].map((cycle, i) => (
            <div
              key={i}
              className={classNames("gallery-nav__item", {
                "gallery-nav__item--selected": active === cycle,
              })}
              onClick={() => {
                onClick(active, cycle);
              }}
            >
              <span>{t(`${MAIN_BLOCKS.CYCLE}.${field}.${cycle}.name`)}</span>
              <span className="gallery-nav__imgdate">
                {t(`${MAIN_BLOCKS.CYCLE}.${field}.${cycle}.year`)}
              </span>
            </div>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default CycleNavigation;
