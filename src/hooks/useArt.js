import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DATA, LANDING_ART } from "../consts/constants";

const useArt = () => {
  const params = useParams();
  const [currentArt, setCurrentArt] = useState(LANDING_ART);

  useEffect(() => {
    setCurrentArt(paramsToState(params));
  }, [params]);

  return { ...currentArt };
};

const paramsToState = ({ cycle, field, id }) => {
  if (!field) {
    return {
      field: LANDING_ART.field,
      cycle: LANDING_ART.cycle,
      id: LANDING_ART.id,
    };
  }

  return {
    field: field,
    cycle: cycle || DATA[field].default_cycle,
    id: id || DATA[field].default_id,
  };
};

export default useArt

