import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ModalOuter from '../../components/UIkit/modal/ModalOuter';
import {
    CButton,
    CCard,
    CCardBody,
    CCardFooter,
    CCardHeader,
    CForm,
    CFormGroup,
    CFormText,
    CInput,
    CLabel,
  } from '@coreui/react'
  import CIcon from '@coreui/icons-react'
  import {getModalForm, test2} from '../../reducks/sample/customers/actions'
  import {normalize, schema, denormalize} from 'normalizr'

const Modal = () => {

    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const originalData = {
        "id": "123",
        "author": {
          "id": "1",
          "name": "Paul"
        },
        "title": "My awesome blog post",
        "comments": [
          {
            "id": "324",
            "commenter": {
              "id": "2",
              "name": "Nicole"
            }
          }
        ]
    }
    const user = new schema.Entity('users');
    const comment = new schema.Entity('comments', {
    commenter: user
    });
    const article = new schema.Entity('articles', {
    author: user,
    comments: [comment]
    });
    const normalizedData = normalize(originalData, article);

    const handleChange = (event) => {
        const value = event.target.value;
        if(event.target.name === 'nf-email'){
            setMail(value);
        } else if(event.target.name === 'nf-password'){
            setPassword(value);
        }
    }

    const on_submit = (event) => {
        event.preventDefault();
        dispatch(getModalForm(mail, password));
        setMail('');
        setPassword('');
    }

    const test = () => {
        dispatch(test2());
    }

    return(
        <>
            <p>一括変種・新規追加,New_edition_bulk_editing_modal.jsx</p>
            <ModalOuter
                modal_title = "一括変種・新規追加"
                type = "New_edition_bulk_editing"
            />
            <p>ｃｓｖ,CSV_modal.jsx</p>
            <ModalOuter
                modal_title = "csv"
                type = "CSV_modal"
            />
            <p>さらに絞り込み,Search_condition_modal.jsx</p>
            <ModalOuter
                modal_title = "さらに絞り込み"
                type = "Search_condition_modal"
            />
            <p>履歴,History_modal.jsx</p>
            <ModalOuter
                modal_title = "履歴"
                type = "History_modal"
            />
            <p>基本情報編集,Basic_information_editing_moda.jsx</p>
            <ModalOuter
                modal_title = "基本情報編集"
                type = "Basic_information_editing_modal"
            />
            <p>商品内容変更,Product_change_modal.jsx</p>
            <ModalOuter
                modal_title = "商品内容変更"
                type = "Product_change_modal"
            />
            <CCard>
                <CCardHeader>
                Normal
                <small> Form</small>
                </CCardHeader>
                <CCardBody>
                <CForm action="" onSubmit={on_submit} className="test">
                    <CFormGroup>
                    <CLabel htmlFor="nf-email">Email</CLabel>
                    <CInput type="email" id="nf-email" name="nf-email" value={mail} placeholder="Enter Email.." autoComplete="email" onChange={handleChange}/>
                    <CFormText className="help-block">Please enter your email</CFormText>
                    </CFormGroup>
                    <CFormGroup>
                    <CLabel htmlFor="nf-password">Password</CLabel>
                    <CInput type="password" id="nf-password" name="nf-password" value={password} placeholder="Enter Password.." autoComplete="current-password" onChange={handleChange}/>
                    <CFormText className="help-block">Please enter your password</CFormText>
                    </CFormGroup>
                    <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Submit</CButton> <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
                </CForm>
                </CCardBody>
                <CCardFooter>
                </CCardFooter>
            </CCard>
            <CButton type="submit" size="sm" color="primary" onClick={test}><CIcon name="cil-scrubber" /> test</CButton> <CButton type="reset" size="sm" color="danger"><CIcon name="" /> test</CButton>
        </>
    )
}

export default Modal;