import React, { useState } from "react";
import CycleNavigation from "./CycleNavigation";
import FieldNavigation from "./FieldNavigation";
import { useArt } from "hooks";
import { useViewportWidth } from "hooks";

const NavigationContainer = () => {
  const { field } = useArt();
  const [navHidden, setNavHidden] = useState(true);
  const [isMobile] = useViewportWidth();

  const toggleCycleNav = (clicked) => {
    if (isMobile) {
      if (clicked === field) {
        setNavHidden(!navHidden);
        return;
      }
      setNavHidden(false);
    }
  };

  return (
    <>
      <CycleNavigation navHidden={navHidden} />
      <FieldNavigation toggleCycleNav={toggleCycleNav} />
    </>
  );
};

export default NavigationContainer;
