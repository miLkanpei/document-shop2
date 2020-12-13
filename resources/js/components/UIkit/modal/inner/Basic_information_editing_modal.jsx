import React from 'react';
import {
    CCol,
    CFormGroup,
    CInput,
    CLabel
  } from '@coreui/react'


import Checkbox from '../../form/Checkbox';
import InlineCheckBoxRounded from '../../form/InlineCheckBoxRounded';
import Textarea from '../../form/Textarea';
import Basic_input from '../../form/input/Basic_input';

const Basic_information_editing_modal = () => {

    const items = ["注文確定", "発送完了", "配達完了", "キャンセル", "返品", "与信審査エラー", "出荷準備中", "お客様確認中"];
    const cancel_reason = ["与信エラー", "その他"]

    return(
        <>
            <Checkbox
                classNamelabel = "modal-label"
                classNameCheckBox = "modal-checkbox"
                items={items}
                text="対応状況"
            />
            <InlineCheckBoxRounded
                className="mg_l20"
            />
            <Checkbox
                classNamelabel = "modal-label"
                classNameCheckBox = "modal-checkbox"
                items={cancel_reason}
                text="停止理由"
            />
            <Textarea
              className = "modal-basic_information-memo"
            />
          <div className="modal-container">
              <div>
                  {/* textrea要リファクタ */}
                  <Textarea
                      className = "modal-basic_information-address"
                  />
                  <Basic_input
                      labelClass = "modal-label"
                      className = "modal-basic_information-address"
                      text="電話番号"
                  />
                  <Basic_input
                      labelClass = "modal-label"
                      className = "modal-basic_information-address"
                      text="名前"
                  />
              </div>
              <div className="">
                  <Basic_input
                      labelClass = "modal-basic_information-label"
                      className = "modal-basic_information-address"
                      text="ご利用ポイント"
                  />
                  <Basic_input
                      labelClass = "modal-basic_information-label"
                      className = "modal-basic_information-address"
                      text="ご利用クーポン"
                  />
                  <Basic_input
                      labelClass = "modal-basic_information-label"
                      className = "modal-basic_information-address"
                      text="支払いクーポン"
                  />
                  <Basic_input
                      labelClass = "modal-basic_information-label"
                      className = "modal-basic_information-address"
                      text="支払い方法"
                  />
              </div>
            </div>
        </>
    )
}

export default Basic_information_editing_modal;
