import React, {useState } from 'react';
import './App.css';

import { dataPath ,defaultAppLang, defaultData, defaultArt } from "./CONSTANTS";
import { AppWrapper } from './AppWrappers.js'
import { useFetch, useArt } from './appHooks.js'
import CycleNavigation from './CycleNavigation.js'
import FieldNavigation from './FieldNavigation.js'
import ArtistName from './ArtistName.js'
import Jumper from './Jumper.js'
import Gallery from './Gallery.js'
import Dots from './Dots.js'
import Copyright from './Copyright.js'

function App() {

  const data = useFetch(defaultData, dataPath)
  const [ lang ] = useState(defaultAppLang)
  const [ activeArt, setActiveArtOnClick, setImgId] = useArt(defaultArt)

  const activeImgId = activeArt.imgId;
  const activeCycle = activeArt.cycle;
  const activeField = activeArt.field;

  if (data.isLoading) { return <div><span>Loadind, plase wait...</span></div> }
  if (data.isError) { return <div><span>Sorry there was a problem witch your network</span></div> }

  const imgSrc = `./data/img/${activeField}/${activeCycle}/${activeImgId}.jpg`;
  const labels = data.art[lang];
  const labelsKeys = data.art.keys;
  const activeCaptions = labels.captions[activeField][activeCycle];
  const activeCycleLen = Number(activeCaptions.length) - 1;

  const jumpImg = (dir) => {

      if ( dir === "next" ) {
        setImgId(activeImgId === activeCycleLen ? 0 : activeImgId + 1)
      }
      if ( dir === "prev" ) {
        setImgId(activeImgId === 0 ? activeCycleLen : activeImgId - 1)
      }
  }

  return (
    < AppWrapper >
        < CycleNavigation
          activeField={activeField}
          labels={labels}
          labelsKeys={labelsKeys}
          />
        < FieldNavigation
          onClick={setActiveArtOnClick}
          labels={labels}
          labelsKeys={labelsKeys}
          />
        < ArtistName />
        < Jumper
          jumpImg={jumpImg}
          />
        < Gallery
          src={imgSrc}
          />
        < Dots
          jumpImg={jumpImg}
          onClick={setActiveArtOnClick}
          captions={activeCaptions}
          activeImgId={activeImgId}
          />
        < Copyright />
  </ AppWrapper >
  )
}

export default App;
