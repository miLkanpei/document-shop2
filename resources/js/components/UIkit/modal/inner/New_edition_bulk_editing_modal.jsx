import React from 'react'
import {
    CRow,
    CCol,
    CCardBody,
    CForm,
}
    from '@coreui/react'

import SelectBox from '../../form/InlineCheckBox'
import Textarea from '../../form/Textarea'
import DateInput from '../../form/input/Date_input'
import Checkbox from '../../form/Checkbox'
import SelectRounded from '../../form/InlineCheckBoxRounded'

const New_edition_bulk_editing = props => {

    const items = ["注文確定", "発送完了", "配達完了", "キャンセル", "返品", "与信審査エラー", "出荷準備中", "お客様確認中"];

    return(
        <div>
            <CRow>
                <CCol xs="12" md="12">
                    <div className="new_edition_bulk_editing-margin">
                        <CForm>
                            {/* 日付用インプット */}
                            <div className="modal-container">
                              <p className="modal-container-label">日付</p>
                              <div className="modal-container-box">
                                <p className="modal-container-font">発送日</p>
                                <DateInput />
                              </div>
                              <div className="modal-container-box">
                                <p className="modal-container-font">お届け日</p>
                                <DateInput />
                              </div>
                              <div className="modal-container-box">
                                <p className="modal-container-font">次回配送日</p>
                                <DateInput />
                              </div>
                            </div>
                            {/* //四角チェックボックス */}
                            <Checkbox
                                classNamelabel = "modal-label"
                                classNameCheckBox = "new_edition_bulk_editing-check-box"
                                items = {items}
                                text = "対応状況"
                            />
                            {/* 丸ぽちチェックボックス */}
                            <SelectRounded
                            />
                            {/* セレクトボックス */}
                            <SelectBox />
                            {/* テキストエリア */}
                            <Textarea
                              className = "new_edition_bulk_editing-text-area"
                            />
                        </CForm>
                    </div>
                </CCol>
            </CRow>
        </div>
    )
}

export default New_edition_bulk_editing;
