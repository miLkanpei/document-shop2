import React from 'react'

import {
    CFormGroup,
    CCol,
    CLabel,
    CInputCheckbox
}
    from '@coreui/react'

const Checkbox = (props) => {

    const item_list = props.items.map ( (item, index) => {
        return(
            <CFormGroup variant="custom-checkbox" inline>
                <CInputCheckbox
                    custom
                    id={index}
                    name="inline-checkbox1"
                    value="option1"
                />
                <CLabel variant="custom-checkbox" htmlFor="inline-checkbox1">{item}</CLabel>
            </CFormGroup>
        )
    })

    return(
        <CFormGroup row>
            <CLabel className={props.classNamelabel}>
              {props.text}
            </CLabel>
            <CCol className={props.classNameCheckBox}>
                {item_list}
            </CCol>
        </CFormGroup>
    );
}

export default Checkbox;
