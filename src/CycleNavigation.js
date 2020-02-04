import React,{ useContext } from 'react'
import { GalleryNavigationWrapper, NavigationSectionWrapper, CycleNavLinkWrapper } from './AppWrappers.js'
import { ActiveArtContext } from './App.js'

export default function CycleNavigation({artSpec, artUni}) {
   
   const activeArt = useContext(ActiveArtContext)
   const fieldUni = activeArt.field;
   const cyclesSpec = artSpec.cycles[fieldUni];
   const cyclesUni = artUni.cycles[fieldUni];
   const years = artSpec.years;
   
    return (
            < GalleryNavigationWrapper >
               < NavigationSectionWrapper field={fieldUni} > 
               {
                  cyclesSpec.map( (cycleSpec, i) => (
                     <CycleNavLink 
                        key={i}
                        fieldUni={fieldUni}
                        cycleUni={cyclesUni[i]}
                        cycleSpec={cycleSpec}
                        years={years}
                        />
                  ))
               }
               </ NavigationSectionWrapper >
            </ GalleryNavigationWrapper >
    )
}

const CycleNavLink = ({cycleSpec, cycleUni,  fieldUni, years}) => {
   
   const dataAttr = {
      ['data-' + fieldUni]: cycleUni
   }
   const year = years[fieldUni][cycleUni];
   
   return (
      < CycleNavLinkWrapper dataAttr={dataAttr} >
         < LinkName value={cycleSpec} />
         < LinkDate value={year} />
      </ CycleNavLinkWrapper >
   )
}

const LinkName = ({value}) => <span>{value}</span>
const LinkDate = ({value}) => <span className="gallery-nav__imgdate">{value}</span>
