import React, {useState} from 'react';
import './App.css';
import { AppWrapper } from './AppWrappers.js'
import { useFetchData, useArt } from './appHooks'
import CycleNavigation from './CycleNavigation.js'
import FieldNavigation from './FieldNavigation.js'
import ArtistName from './ArtistName.js'
import Jumper from './Jumper.js'
import Gallery from './Gallery.js'
import Dots from './Dots.js'
import Copyright from './Copyright.js'

const dataPath = './data/data.json'

const defaultData = {
	art: {},
	isError: false,
	isLoading: true
}

const defaultArt = {
  pic: 0,
  cycle: 'transfig',
  field: 'paint'
}

const defaultAppLang = 'sk'

function App() {

  const [ lang ] = useState(defaultAppLang)
  const [ data ] = useFetchData(defaultData, dataPath)
  const [ activeArt, setActiveArtOnClick ] = useArt(defaultArt)

  const imgSrc = `./data/img/${activeArt.field}/${activeArt.cycle}/${activeArt.pic}.jpg`;
  const specLabels = data.art[lang];
  const uniLabels = data.art.uni;
  
  if (data.isLoading) { return <div><span>Loadind...</span></div> }

  return (
    < AppWrapper >
      < ActiveArtContext.Provider value={activeArt} >
        < CycleNavigation 
          artSpec={specLabels}
          artUni={uniLabels}
          />
        < FieldNavigation 
          onClick={setActiveArtOnClick}
          artSpec={specLabels}
          artUni={uniLabels}
          />
        < ArtistName />
        < Jumper
          />
        < Gallery 
          src={imgSrc}
          />
        < Dots />
        < Copyright />
    </ ActiveArtContext.Provider >
  </ AppWrapper >
  )
}

export default App;

export const ActiveArtContext = React.createContext('sk');