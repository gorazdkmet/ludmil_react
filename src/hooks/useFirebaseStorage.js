import { useState, useEffect } from 'react';
import { getCurrentSet, getCurrentArt } from "../firebase/functions";

export const useFirebaseStorage = (one, two) => {

    const [ set, setSet ] = useState([])
    const [ loading, setLoading ] = useState(true)
    const [ error, setError ] = useState(false)

    useEffect(() => {

        setLoading(true)

        getCurrentSet(one, two)
            .then(set => { setSet(set) })
            .then(() => { setLoading(false) })
            .catch((err) => {
                console.error(err)
                setError(err)
            })

    }, [one, two])

    return [ set, loading, error]
}
