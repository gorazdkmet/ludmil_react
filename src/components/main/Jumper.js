import React, {useEffect} from 'react'
import { useHistory } from "react-router-dom";
import { pathFor } from "../../helpers/pathFor";

const Jumper = ({isLoading, set, id, field, cycle}) => {

    const history = useHistory()

    useEffect(() => {
        window.addEventListener('keydown', onKeyPress)
        return () => {
            window.removeEventListener('keydown', onKeyPress)
        }
    })

    if (isLoading) {
        return null
    }

    const jumpImg = (dir) => {
        const lastIndex = set.length - 1;
        if (dir === "prev") {
            const prevId = Number(id) === 0 ? lastIndex : Number(id) - 1
            history.push(pathFor(field, cycle, prevId))
        }
        if (dir === "next") {
            const nextId = Number(id) === lastIndex ? 0 : Number(id) + 1
            history.push(pathFor(field, cycle, nextId))
        }
    }

    function onKeyPress(e) {
        if (e.keyCode === 39) { jumpImg("next") }
        if (e.keyCode === 37) { jumpImg("prev") }
    }

    return (
        <div className="gallery__jumper">
            <div className="gallery__jumper--back" onClick={() => { jumpImg("prev") }}></div>
            <div className="gallery__jumper--next" onClick={() => { jumpImg("next") }}></div>
        </div>
    )
}

export default Jumper
