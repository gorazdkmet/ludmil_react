import React from 'react'
import { FieldNavigationWrapper } from './AppWrappers.js'

export default function FieldNavigation({ artSpec, onClick, artUni }) {
    
    return (
        <FieldNavigationWrapper>
        {   
            artSpec.fields.map( (fieldSpec, i) => ( 
                < FieldLink key={i}
                            fieldSpec={fieldSpec}
                            fieldUni={artUni.fields[i]}
                            setFieldOnClick={onClick.field}
                            /> 
            ))
        }
        </FieldNavigationWrapper>
    )
}

function FieldLink({ fieldSpec, fieldUni, setFieldOnClick }) {

    const classVal = fieldSpec === 'lang' ? 'field-nav__lang' : 'field-nav__item';
    
    return (
        <>
            <span className={classVal} data-field={fieldUni} {...setFieldOnClick} >
                {fieldSpec}
            </span>
            <span>
                /
            </span>
        </>
    )
}