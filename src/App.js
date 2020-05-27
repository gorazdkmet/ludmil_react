// external
import React from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

// components
import {
  Jumper,
  ArtistName,
  Copyright,
  Navigation,
  Gallery,
  Dots,
} from "./components/main";

// others
import "./App.css";
import { pathFor } from "./helpers/pathFor";

function App() {
  const history = useHistory();
  const { t } = useTranslation(`more`);

  const onArtistClick = () => {
    history.push(pathFor());
  };

  return (
    <div className="site">
      <Navigation />
      <ArtistName name={t(`artist`)} onClick={onArtistClick} />
      <Gallery />
      <Jumper />
      <Dots />
      <Copyright name={t(`author`)} link={`https://github.com/gorazdkmet`} />
    </div>
  );
}

export default App;
