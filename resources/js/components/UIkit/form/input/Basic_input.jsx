import React from 'react'
import {
    CCol,
    CFormGroup,
    CInput,
    CLabel
  } from '@coreui/react'

const Basic_input = (props) => {

    return(
        <div>
            <CFormGroup row>
                <p className={props.labelClass} variant="" htmlFor="inline-checkbox1">{props.text}</p>
                <div className={props.className}>
                    <CInput placeholder={props.placeholder} />
                </div>
            </CFormGroup>
        </div>
    )
}

export default Basic_input;
