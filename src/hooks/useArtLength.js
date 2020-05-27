import { useEffect, useState } from 'react'
import useArt from "./useArt";
import locales from "./../lib/locales";

const useArtLength = () => {

    const { field, cycle } = useArt();
    const [artLength, setArtLength] = useState(0)

    useEffect(() => {
        if (locales.sk.captions[field][cycle]) {
            let len = locales.sk.captions[field][cycle].length || 20
            setArtLength(len)
        }
    }, [ field, cycle ])

    return artLength
}

export default useArtLength
