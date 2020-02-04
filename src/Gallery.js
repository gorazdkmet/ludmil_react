import React from 'react'
import { GalleryWrapper, FigureWrapper } from './AppWrappers.js'

export default function Gallery({src}) {
    return (
        <GalleryWrapper>
            <Figure src={src} />
        </GalleryWrapper>
    )
}

function Figure({src, caption}) {
    return	(
        < FigureWrapper >
            < Image caption={caption} src={src} />
            < Caption caption={caption} />
        </FigureWrapper>
    )
}


const Image = ({src, caption}) => (
    <img className="gallery__image" src={src} alt={caption} />
)

const Caption = ({caption}) => ( 
    <figcaption className="gallery__caption">
        {caption}
    </figcaption>
)

