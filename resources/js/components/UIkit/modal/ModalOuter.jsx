import React, { useState } from 'react'
import {
    CModal,
    CModalHeader,
    CModalBody,
    CModalFooter,
    CModalTitle
} from '@coreui/react'

import Basic_button from '../button/Basic_button'
import New_edition_bulk_editing from './inner/New_edition_bulk_editing_modal';
import CSV_modal from './inner/CSV_modal';
import Basic_information_editing_modal from './inner/Basic_information_editing_modal';
import Search_condition_modal from './inner/Search_condition_modal';
import Product_change_modal from './inner/Product_change_modal';
import History_modal from './inner/History_modal';

const ModalOuter = (props) => {
    const [modal, setModal] = useState(false);

    return(
        <div>
            {props.attribute === "link"
                ?   <a onClick={() => setModal(!modal)}><p className={props.className}>{props.link_name}</p></a>
                :   <Basic_button
                        onClick={() => setModal(!modal)}
                        className={props.className}
                        text={props.modal_title}
                    />
            }
            <CModal
              show={modal}
              onClose={() => setModal(!modal)}
              size="lg"
            >
                <CModalHeader closeButton>
                    <CModalTitle>{props.modal_title}</CModalTitle>
                </CModalHeader>
                <CModalBody className="modal-outer-mg">
                    {/* 要リファクアタ */}
                    {props.type === "New_edition_bulk_editing" &&
                        <New_edition_bulk_editing/>
                    }
                    {props.type === "CSV_modal" &&
                        <CSV_modal/>
                    }
                    {props.type === "Search_condition_modal" &&
                        <Search_condition_modal/>
                    }
                    {props.type === "Basic_information_editing_modal" &&
                        <Basic_information_editing_modal/>
                    }
                    {props.type === "History_modal" &&
                        <History_modal/>
                    }
                    {props.type === "Product_change_modal" &&
                        <Product_change_modal/>
                    }
                </CModalBody>
                <CModalFooter>
                    <Basic_button
                        className="modal-outer-close-btn"
                        onClick={() => setModal(!modal)}
                        text="閉じる"
                    />
                    <Basic_button
                        className="modal-outer-save-btn"
                        onClick={() => setModal(!modal)}
                        text="保存"
                    />
                </CModalFooter>
            </CModal>
            </div>
    );
}

export default ModalOuter;
