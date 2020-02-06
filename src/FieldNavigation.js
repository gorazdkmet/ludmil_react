import React from 'react'
import { FieldNavigationWrapper } from './AppWrappers.js'

export default function FieldNavigation({ labels, labelsKeys, onClick }) {
    
    return (
        <FieldNavigationWrapper>
        {   
            labels.fields.map( (field, i) => ( 
                < FieldLink key={i}
                            field={field}
                            fieldKey={labelsKeys.fields[i]}
                            setFieldOnClick={onClick.field}
                            /> 
            ))
        }
        </FieldNavigationWrapper>
    )
}

function FieldLink({ field, fieldKey, setFieldOnClick }) {

    const classVal = field === 'lang' ? 'field-nav__lang' : 'field-nav__item';
    
    return (
        <>
            <span className={classVal} data-field={fieldKey} {...setFieldOnClick} >
                {field}
            </span>
            <span>
                /
            </span>
        </>
    )
}