import React from 'react'

export function AppWrapper(props) {
    return (
        <div className="site">
            {props.children}      
        </div>
    )
}

export const FieldNavigationWrapper = (props) => (
    <menu className="field-navigation">
        <div className="field-nav__container">
            {props.children}
        </div>
    </menu>
)

export const GalleryNavigationWrapper = (props) => (
    <nav className="gallery-navigation">
        {props.children}
    </nav>
)

export const NavigationSectionWrapper = ({children, field}) => (
    <div className="gallery-nav__section" id={field} >
        <ul>
            {children}
        </ul>
    </div>
)

export const GalleryWrapper = (props) =>  (
    <main className="gallery">
        <div className="gallery__content">
            <ul className="gallery__list">
                {props.children}
            </ul>
        </div>
    </main>
)

export const FigureWrapper = (props) => (
    <li className="gallery__item">
        <figure className="gallery__figure">
            {props.children}
        </figure>
    </li>
) 

export const CycleNavLinkWrapper = ({children, dataAttr}) => (
    <li className="gallery-nav__item" {...dataAttr} >
       {children}
    </li>
 ) 
