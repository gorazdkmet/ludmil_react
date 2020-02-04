import { useState, useEffect } from 'react';

export const useFetchData = (defaultData, dataPath) => {

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
            
            if ( Object.keys(res).length === 0) { 
                errorWhileFetching('empty art') 
            }
        }
    
        const errorWhileFetching = (err) => {
            console.error(err);
            setData({
                ...defaultData,
                isLoading: false,
                isError: true
            })
        }


	}, [dataPath, defaultData])

	return [ data, setData ]
}

export const useArt = (defaultArt) => {
    
    const [ pic, setPic ] = useState(defaultArt.pic)
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
            console.log(newField)
            setField(newField)
        }
    }

    return [
        {
            pic, cycle, field
        },
        {
            field: setFieldOnClick,
            cycle: setCycleOnClick
        }
    ]

}
