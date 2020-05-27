import React from "react";
import classNames from "classnames";
import { useHistory } from "react-router-dom";
import { pathFor } from "../../helpers/pathFor";
import { useArtLength } from "hooks";
import { useArt } from "hooks";

export default function Dots() {
  const history = useHistory();
  const { field, cycle, id } = useArt();
  const len = useArtLength();

  const handleDotClick = (id) => {
    history.push(pathFor(field, cycle, id));
  };

  return (
    <div className="dots-controls">
      {Array.from(Array(len), (e, i) => (
        <Dot
          key={i}
          cname={classNames("dot", { "dot--active": i === Number(id) })}
          onClick={() => handleDotClick(i)}
        />
      ))}
    </div>
  );
}

const Dot = ({ cname, onClick }) => (
  <span className={cname} onClick={onClick}>
    ·
  </span>
);
