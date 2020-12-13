import React from 'react'
import {
  CCol,
  CForm,
  CFormGroup,
  CInput,
  CInputGroup,
  CInputGroupAppend,
  CInputGroupText,
} from '@coreui/react'
import { CIcon } from '@coreui/icons-react';

const Search_input = () => {
    return(
        <CForm action="" method="post" className="form-horizontal">
            <CFormGroup row>
                <CCol md="12">
                <CInputGroup>
                    <CInput type="email" id="input2-group1" name="input2-group1" placeholder="検索" />
                    <CInputGroupAppend>
                        <CInputGroupText>
                            <CIcon name="cil-magnifying-glass" />
                        </CInputGroupText>
                    </CInputGroupAppend>
                </CInputGroup>
                </CCol>
            </CFormGroup>
        </CForm>
    );
}

export default Search_input;