// external
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

// components
import {
  CycleNavigation,
  FieldNavigation,
  Jumper,
  ArtistName,
  Copyright,
  GalleryContainer,
  Dots,
} from "./components/main";

// others
import { paramsToState } from "./helpers/paramsToState";
import { useFirebaseStorage } from "./hooks/useFirebaseStorage";
import { useViewportWidth } from "./hooks/useViewportWidth";
import "./App.css";
import { useTranslation } from "react-i18next";

function App() {
  const params = useParams();
  const location = useLocation();

  const [currentArt, setCurrentArt] = useState(paramsToState(params));
  const [set, loading, error] = useFirebaseStorage(
    currentArt.field,
    currentArt.cycle
  );
  const [isMobile, width] = useViewportWidth(document.body.clientWidth);
  const [navHidden, setNavHidden] = useState(true);
  const { t } = useTranslation(`more`);

  useEffect(() => {
    setCurrentArt(paramsToState(params));
  }, [location.pathname]);

  const toggleCycleNav = (clicked) => {
    if (isMobile) {
      if (clicked === params.field) {
        setNavHidden(!navHidden);
        return;
      }
      setNavHidden(false);
    }
  };

  const { cycle, field, id } = currentArt;
  return (
    <div className="site">
      <CycleNavigation field={field} active={cycle} navHidden={navHidden} />
      <FieldNavigation toggleCycleNav={toggleCycleNav} />
      <ArtistName name={t(`artist`)} />
      <GalleryContainer
        id={id}
        field={field}
        cycle={cycle}
        set={set}
        isMobile={isMobile}
        isLoading={loading}
      />
      <Jumper
        id={id}
        cycle={cycle}
        field={field}
        set={set}
        isLoading={loading}
      />
      <Dots isLoading={loading} set={set} field={field} cycle={cycle} id={id} />
      <Copyright name={t(`author`)} link={`https://github.com/gorazdkmet`} />
    </div>
  );
}

export default App;
