import React from 'react'
import { useHistory } from "react-router-dom";
import { pathFor } from "../../helpers/pathFor";

export default function Dots({isLoading, set, field, cycle, id }) {

    const history = useHistory()

    if (isLoading) {
        return null
    }

    const activeClass = (i, id) => Number(i) === Number(id) ? "dot dot--active" : "dot";
    const onClick = (id) => { history.push(pathFor(field, cycle, id)) }

    return (
        <div className="dots-controls">
        {set.map((c, i) => (
            < Dot
                key={i}
                cname={activeClass(i, id)}
                onClick={() => onClick(i)}
                />
        ))}
        </div>
    )
}

const Dot = ({ cname, onClick }) => <span className={cname} onClick={onClick} >·</span>
