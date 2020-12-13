import React from 'react';
import Search_input from '../form/input/Search_input';
import {
    CFormGroup,
    CLabel,
    CInputCheckbox
} from '@coreui/react'

import {CCardHeader} from '@coreui/react';
import ModalOuter from '../modal/ModalOuter';

const List_header_buttons = (props) => {

    const checkbox_list = ['通常', '定期２週間', '定期4週間', '定期・単品'];
    const modal_dict = [
        {
            modal_title: "一括編集",
            type: "New_edition_bulk_editing"
        },
        {
            modal_title: "CSV作成",
            type: 'CSV_modal'
        },
        {
            modal_title: "新規追加",
            type: "New_edition_bulk_editing"
        },
    ]

    return(
        <div className="button-list-header">
            <CCardHeader>
                <Search_input/>
                {checkbox_list.map((item, index) => {
                    return(
                        <CFormGroup variant="custom-checkbox" inline>
                            <CInputCheckbox
                                custom
                                id= "inline-checkbox1"
                                name= "inline-checkbox1"
                                value= "option1"
                                key= {item}
                            />
                            <CLabel variant="custom-checkbox" htmlFor="inline-checkbox1">{item}</CLabel>
                        </CFormGroup>
                    )
                })}
                <div className="button-list-header-container">
                    <div className="button-list-header-text">{props.title}</div>
                        <div className="button-list-btn-margin">
                            {modal_dict.map((item, index) => {
                                return(
                                    <ModalOuter
                                        className="button-list-header-btns"
                                        modal_title = {item.modal_title}
                                        type = {item.type}
                                        key = {item.tyoe}
                                    />
                                )
                            })}
                        </div>
                </div>
            </CCardHeader>
        </div>
    )

}

export default List_header_buttons;
