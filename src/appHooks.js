import { useState, useEffect } from 'react';

export const useFetch = (defaultData, dataPath) => {

    const [ data, setData ] = useState(defaultData)    

    useEffect( () => {
        fetch(dataPath)
            .then( res => res.json() )
			.then(
			res => { saveDataToState(res) },
			err => { errorWhileFetching(err) }
            )
    
        const saveDataToState = (res) => {            
            setData({
                ...defaultData,
                art: res,
                isLoading: false
                })
        }
    
        const errorWhileFetching = (err) => {
            setData({
                ...defaultData,
                isLoading: false,
                isError: true
            })
            console.error(err);
        }
    }, [dataPath, defaultData])

	return data
}

export const useArt = (defaultArt) => {
    
    const [ imgId, setImgId ] = useState(defaultArt.imgId)
    const [ cycle, setCycle ] = useState(defaultArt.cycle)
    const [ field, setField ] = useState(defaultArt.field)

    const setCycleOnClick = {
        onClick: (e) => {
            e.preventDefault();
            const newCycle = e.currentTarget.dataset.cycle;
            setCycle(newCycle)
        }
    }

    const setFieldOnClick = {
        onClick: (e) => {
            e.preventDefault();
            const newField = e.currentTarget.dataset.field;
            setField(newField)
        }
    }

    const setImgIdOnClick = {
        onClick: (e) => {
            e.preventDefault();
            const newImgId = Number(e.currentTarget.id);
            setImgId(newImgId)
        }
    }

    return [
        {
            imgId, cycle, field
        },
        {
            field: setFieldOnClick,
            cycle: setCycleOnClick,
            imgId: setImgIdOnClick
        },
        setImgId
    ]

}
