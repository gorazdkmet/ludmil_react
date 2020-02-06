import React from 'react'
import { GalleryNavigationWrapper, NavigationSectionWrapper, CycleNavLinkWrapper } from './AppWrappers.js'

export default function CycleNavigation({ labels, labelsKeys, activeField:fieldKey }) {
   

   const cycles = labels.cycles[fieldKey];
   const cyclesKeys = labelsKeys.cycles[fieldKey];
   const years = labels.years;
   
    return (
            < GalleryNavigationWrapper >
               < NavigationSectionWrapper field={fieldKey} > 
               {
                  cycles.map( (cycle, i) => (
                     <CycleNavLink 
                        key={i}
                        fieldKey={fieldKey}
                        cycleKey={cyclesKeys[i]}
                        cycle={cycle}
                        years={years}
                        />
                  ))
               }
               </ NavigationSectionWrapper >
            </ GalleryNavigationWrapper >
    )
}

const CycleNavLink = ({ cycle, cycleKey, fieldKey, years }) => {
   
   const dataAttr = {
      ['data-' + fieldKey]: cycleKey
   }
   const year = years[fieldKey][cycleKey];
   
   return (
      < CycleNavLinkWrapper dataAttr={dataAttr} >
         < LinkName value={cycle} />
         < LinkDate value={year} />
      </ CycleNavLinkWrapper >
   )
}

const LinkName = ({value}) => <span>{value}</span>
const LinkDate = ({value}) => <span className="gallery-nav__imgdate">{value}</span>
