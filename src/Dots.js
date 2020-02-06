import React,{ useEffect } from 'react'

export default function Dots({ onClick, captions, activeImgId, jumpImg }) {

    const activeClass = (i, id) => Number(i) === Number(id) ? "dot dot--active" : "dot";
    
    useEffect( () => {

        const setSiblingImg = (e) => {
            if (e.keyCode === 39) { jumpImg('next') }
            if (e.keyCode === 37) { jumpImg('prev') }
        }
        document.addEventListener( 'keydown', setSiblingImg )
        return ( () => document.removeEventListener('keydown', setSiblingImg ))

      }, [activeImgId, jumpImg])

    return (
        <div className="dots-controls">
        {
            captions.map( (c, i) => (< Dot 
                                        key={c}
                                        i={i}
                                        onClick={onClick}
                                        className={ activeClass(i, activeImgId) }
                                        />)
                        )
        }
        </div>
    )
}
const Dot = ({i, onClick, className}) => ( 
    <span id={i} className={className} {...onClick.imgId}>
        ·
    </span> 
)
