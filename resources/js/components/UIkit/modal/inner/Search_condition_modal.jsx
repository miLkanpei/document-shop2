import React from 'react';
import {
    CCol,
    CFormGroup,
    CInput,
    CLabel
  } from '@coreui/react'

import Checkbox from '../../form/Checkbox';

const Search_condition_modal = () => {

    const items = ["注文確定", "発送完了", "配達完了", "キャンセル", "返品", "与信審査エラー", "出荷準備中", "お客様確認中"];
    const label = ["baby2", "baby4", "sweet", "dridefruits", "broth"];

    return(
        <>
            <div className="mg_b30">
              <CFormGroup row>
                  <p className="modal-label">購入回数</p>
                  <div className="modal-col">
                      <CInput placeholder="" />
                  </div>
                  <CCol xs="1">
                      <p>〜</p>
                  </CCol>
                  <div className="modal-col">
                      <CInput placeholder="" />
                  </div>
              </CFormGroup>
            </div>
            <div className="mg_b30">
              <Checkbox
                  classNamelabel = "modal-label"
                  classNameCheckBox = "modal-checkbox"
                  items = {items}
                  text = "対応状況"
              />
            </div>
            <div className="mg_b30">
              <Checkbox
                  classNamelabel = "modal-label"
                  classNameCheckBox = "modal-checkbox"
                  items = {label}
                  text = "商品ラベル"
              />
            </div>
            <div className="mg_b30">
              <Checkbox
                  classNamelabel = "modal-label"
                  classNameCheckBox = "modal-checkbox"
                  items = {items}
                  text = "対応状況"
              />
            </div>
            <div className="mg_b30">
              <Checkbox
                  classNamelabel = "modal-label"
                  classNameCheckBox = "modal-checkbox"
                  items = {label}
                  text = "商品ラベル"
              />
            </div>
        </>
    )
}

export default Search_condition_modal;
