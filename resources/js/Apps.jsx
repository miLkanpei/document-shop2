import React from 'react';

import { Route, Switch } from "react-router";
import { Login } from "./containers";
import Top from "./containers/sample/Top";
import Customer from "./components/sample/Customer";
import CustomerDetail from "./components/sample/CustomerDetail";
import Auth from './Auth';
import Header from './components/UIkit/common/Header';
import Sidebar from './components/UIkit/common/Sidebar';
import Search_condition_bar from './components/UIkit/common/Search_conditions_bar';
import Order_table from './components/UIkit/table/Order_table';

import Customer_list from './containers/Customer_list';
import Customer_detail from './containers/Customer_detail';
import Order_list from './containers/Order_list';
import Modal from './containers/sample/Modal';

const _routes = [
  {
    component: Modal,
    path: '/modal',
  }
]

const Apps = ()=> {
    return(
        <>
          <Switch>
            {/* 要リファクタ */}
            {_routes.map(item => {
              <Route
                key={item.path}
                component={item.component}
                path={item.path}
                />
              })
            }
            <Route exact path={"(/auth)"} component={Auth} />
            <Route exact path={"(/login)"} component={Login} />
            <Route path="/customer/edit/:id" component={CustomerDetail} />
            <Route exact path={"(/customer)"} component={Customer} />
            <Route exact path={"(/header)"} component={Header} />
            <Route exact path={"(/sidebar)"} component={Sidebar} />
            <Route exact path={"(/search_bar)"} component={Search_condition_bar} />
            <Route exact path={"(/order_table)"} component={Order_table} />

            <Route exact path={"(/customer_list)"} component={Customer_list} />
            <Route exact path={"(/customer_detail)"} component={Customer_detail} />
            <Route exact path={"(/order_list)"} component={Order_list} />
            {/* <Route exact path={"(/modal)"} component={Modal} /> */}

            <Auth>
              <Route exact path={"(/)?"} component={Top} />
            </Auth>
          </Switch>
        </>
    )
}

export default Apps;