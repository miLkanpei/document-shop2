import React from 'react';

import {
    CFormGroup,
    CCol,
    CLabel,
    CSelect
}
    from '@coreui/react'

const SelectBox = () => {

    return(
        <CFormGroup row>
            <p className="modal-label" htmlFor="select">配送業者</p>
            <CCol xs="12" md="9">
            <CSelect custom name="select" id="select">
                <option value="0">Please select</option>
                <option value="1">Option #1</option>
                <option value="2">Option #2</option>
                <option value="3">Option #3</option>
            </CSelect>
            </CCol>
        </CFormGroup>
    );
}

export default SelectBox;
