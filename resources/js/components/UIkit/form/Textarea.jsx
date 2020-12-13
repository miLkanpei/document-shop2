import React from 'react'
import {
    CFormGroup,
    CCol,
    CLabel,
    CTextarea
}
    from '@coreui/react'

const Textarea = (props) => {
    return(
        <CFormGroup row>
            <p className="modal-label" htmlFor="textarea-input">Textarea</p>
            <div className={props.className}>
              <CTextarea
                  name="textarea-input"
                  id="textarea-input"
                  rows="4"
                  placeholder="Content..."
              />
           </div>
        </CFormGroup>
    );
}

export default Textarea;
