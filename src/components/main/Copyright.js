import React from 'react'

const Copyright = ({name, link}) => (
    <footer className="copyright">
        <a className="copyright__link" href={link}>
            {name}
        </a>
            {' · '}
        <span>
            2020
        </span>
    </footer>
)

export default Copyright
