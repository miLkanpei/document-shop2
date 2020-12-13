import React from 'react';

import {
    CCol,
    CFormGroup,
    CSelect,
    CInputCheckbox,
    CLabel
  } from '@coreui/react'

import Basic_button from '../../button/Basic_button';

const item = (text) => {
    return(
        <div>
            <div className="csv_modal-container">
                <p className="csv_modal-label">{text}</p>
                <CFormGroup row>
                    <div className="csv_modal-select-format">
                    <CSelect custom name="select" id="select">
                        <option value="0">フォーマットを選択</option>
                        <option value="1">Option #1</option>
                        <option value="2">Option #2</option>
                        <option value="3">Option #3</option>
                    </CSelect>
                  </div>
                </CFormGroup>

                <CFormGroup row>
                    <div className="csv_modal-check-box">
                        <CFormGroup variant="checkbox" className="checkbox">
                            <CInputCheckbox
                                id="checkbox1"
                                name="checkbox1"
                                value="option1"
                            />
                            <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox1">Option 1</CLabel>
                        </CFormGroup>
                    </div>
                </CFormGroup>
                <Basic_button
                    className="csv_modal-download-btn"
                    text="ダウンロード"
                    color="primary"
                />
            </div>
        </div>
    )
}

const CSV_modal = () => {
    return(
        <div>
            <p className="csv_modal-sum-font">計300件</p>
            {item("受注毎に出力する")}
            {item("受注商品毎に出力する")}
        </div>
    )
}

export default CSV_modal;
