import React from 'react'

const ArtistName = ({name, onClick}) => (
    <hgroup className="artist-name">
        <span onClick={onClick}>{name}</span>
    </hgroup>
)

export default ArtistName
