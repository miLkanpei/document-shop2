import React from 'react'
import {
    CFormGroup,
    CCol,
    CLabel,
    CInput
} from '@coreui/react'

const Date_input = (props) => {
    return(
        <CFormGroup row>
            {props.label &&(
                <p htmlFor="date-input">日付</p>
            )}
            <CCol xs={props.xs} md={props.md}>
                {/* ここのインプットはmatearial ui でもよさげ　　https://material-ui.com/components/pickers/ */}
                <CInput type="date" id="date-input" name="date-input" placeholder="date" />
            </CCol>
        </CFormGroup>
    );
}

export default Date_input;
