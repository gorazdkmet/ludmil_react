import React from 'react'

export default function Jumper({ jumpImg }) {

    const goNext = () => { jumpImg("next") }
    const goPrev = () => { jumpImg("prev") }

    return (
        <div className="gallery__jumper">
            <div className="gallery__jumper--back" onClick={goPrev}>
            </div>
            <div className="gallery__jumper--next" onClick={goNext}>
            </div>
        </div>
    )
}
