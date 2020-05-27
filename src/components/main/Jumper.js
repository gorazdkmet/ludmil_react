import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { pathFor } from "../../helpers/pathFor";
import { useArt } from "hooks"
import { useArtLength } from "hooks";

const Jumper = () => {
  const history = useHistory();
  const len = useArtLength();
  const { field, cycle, id } = useArt();

  useEffect(() => {
    window.addEventListener("keydown", onKeyPress);
    return () => {
      window.removeEventListener("keydown", onKeyPress);
    };
  });

  const jumpImg = (dir) => {
    const lastIndex = len - 1;
    if (dir === "prev") {
      const prevId = Number(id) === 0 ? lastIndex : Number(id) - 1;
      history.push(pathFor(field, cycle, prevId));
    }
    if (dir === "next") {
      const nextId = Number(id) === lastIndex ? 0 : Number(id) + 1;
      history.push(pathFor(field, cycle, nextId));
    }
  };

  function onKeyPress(e) {
    if (e.keyCode === 39) {
      jumpImg("next");
    }
    if (e.keyCode === 37) {
      jumpImg("prev");
    }
  }

  return (
    <div className="gallery__jumper">
      <div
        className="gallery__jumper--back"
        onClick={() => {
          jumpImg("prev");
        }}
      ></div>
      <div
        className="gallery__jumper--next"
        onClick={() => {
          jumpImg("next");
        }}
      ></div>
    </div>
  );
};

export default Jumper;
