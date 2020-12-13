import React from 'react'
import {
    CFormGroup,
    CCol,
    CInputRadio,
    CLabel
}
    from '@coreui/react'

const SelectRounded = (props) => {

    return(
        <CFormGroup row>
            <p className="modal-label">ステータス</p>
            <CCol className={props.className}>
                <CFormGroup variant="custom-radio" inline>
                    <CInputRadio custom id="inline-radio1" name="inline-radios" value="option1" />
                    <CLabel variant="custom-checkbox" htmlFor="inline-radio1">停止</CLabel>
                </CFormGroup>
                <CFormGroup variant="custom-radio" inline>
                    <CInputRadio custom id="inline-radio2" name="inline-radios" value="option2" />
                    <CLabel variant="custom-checkbox" htmlFor="inline-radio2">キャンセル</CLabel>
                </CFormGroup>
                <CFormGroup variant="custom-radio" inline>
                    <CInputRadio custom id="inline-radio3" name="inline-radios" value="option3" />
                    <CLabel variant="custom-checkbox" htmlFor="inline-radio3">有効</CLabel>
                </CFormGroup>
            </CCol>
        </CFormGroup>
    );
}

export default SelectRounded;
