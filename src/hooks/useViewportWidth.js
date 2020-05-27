import {useEffect, useState} from 'react'

const useViewportWidth = () => {
    const [width, setWidth] = useState(document.body.clientWidth)
    const breakPoint = 900

    useEffect(() => {
        window.addEventListener('resize', updateScreenSize)
        return () => {
            window.removeEventListener('resize', updateScreenSize)
        }
    }, )

    const updateScreenSize = () => {
        const w = document.body.clientWidth
        if (w !== width) {
            setWidth(w)
            return
        }
        // hack to catch a lost px point
        if (w === breakPoint) {
            setWidth(breakPoint)
        }
    }

    const isMobile = width < breakPoint ? true : false
    return [ isMobile, width ]
}

export default useViewportWidth

