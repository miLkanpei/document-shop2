import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import axios from "axios";

import {CButton, CRow, CCol, CForm,CFormGroup,CLabel,CInput,CFormText, CContainer} from '@coreui/react'

import OperatorList from './OperatorList';
import Basic_button from '../UIkit/button/Basic_button'
import Table from '../UIkit/table/Table'
import { signInActiom, signOutAction } from '../../reducks/sample/users/actions';

const Operator = (props)=>{

  const [count, setCount] = useState(1000000);
  const [customers, setCustomers] = useState([]);
  const dispatch = useDispatch();
  const selector = useSelector( (state) => state )
  const isSignedIn = selector.users.isSignedIn;
  const username = selector.users.username
  const uid = selector.users.uid

  const getCustomers = async () => {
    const response = await axios.get('/api/customers');
    setCustomers(response.data);
  };

  const promise_sample = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log("promiseのサンプルだよ");
      }, 1000);
    });
  }

  const fetchURL = url => {
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();
      req.open("GET", URL, true);
      req.onload = () => {
        if(200 <= req.status && req.status < 300){
          resolve(req.statusText);
        } else {
          reject(new Error(req.statusText));
        }
      };
      req.onerror = () => {
        reject(new Error(req.statusText));
      }
      req.send();
    });
  }

  const request = {
    comment() {
      return fetchURL("https://azu.github.io/promises-book/json/people.json").then(JSON.parse);
    },
    people() {
      return fetchURL("https://azu.github.io/promises-book/json/people.json").then(JSON.parse);
    }
  }

  const main = () => {
    return Promise.all([request.comment(), request.people()]);
  }

  const winnerPromise = new Promise(resolve => {
    setTimeout(() => {
      resolve("this is winner");
    }, 100)
  });

  const loserPromise = new Promise(resolve => {
    setTimeout(() => {
      resolve("this is loser");
    }, 100)
  });

  useEffect(()=>{
    //promise
    // promise_sample().then(value => {
    //   console.log(value);
    // }).catch(error => {
    //   console.log(error);
    // });

    // //promise all
    // main().then(value => {
    //   console.log(value);
    // }).catch(error => {
    //   console.log(error);
    // })

    // //promise race
    // Promise.race([winnerPromise, loserPromise]).then(value => {
    //   console.log(value);
    // });

    //initial state
    // console.log(selector.users);

    getCustomers();

  }, []);

  return(
    <div>
      <Basic_button
        text = "coreUIテスト"
        color="info"
      />
      <Table
        
      />
      <h1>{username}さんこんにちわ</h1>
      <h1>githubのidは{uid}です</h1>
      <h1>対応人数：{count}</h1>
      <button onClick={() => setCount(count + 1)} >クリックしてね</button>
      <h1>友達一覧</h1>
      <OperatorList
        operationList = {props.operatorList}
      />
      <button onClick={() => dispatch(signInActiom({uid:"100", username:"daiki"}))}>
        Sign In
      </button>
      <button onClick={()=> dispatch(signOutAction())}>
        Sign Out
      </button>
      <CButton color='primary' onClick={() => dispatch(push('/auth'))}>認証画面へいく</CButton>
      <CContainer fluid>
      <CRow>
        <CCol sm="12">
          <CForm action="" method="post">
            <CFormGroup>
              <CLabel htmlFor="nf-email">Email</CLabel>
              <CInput
                type="email"
                id="nf-email"
                name="nf-email"
                placeholder="Enter Email.."
                autoComplete="email"
              />
              <CFormText className="help-block">Please enter your email</CFormText>
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="nf-password">Password</CLabel>
              <CInput
                type="password"
                id="nf-password"
                name="nf-password"
                placeholder="Enter Password.."
                autoComplete="current-password"
              />
              <CFormText className="help-block">Please enter your password</CFormText>
            </CFormGroup>
          </CForm>
        </CCol>
      </CRow>
    </CContainer>
    </div>
  )
}

export default Operator;