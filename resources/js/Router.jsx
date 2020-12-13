import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import { Route, Switch } from "react-router";

import Apps from './Apps';
import Search_sidebar from './components/UIkit/common/Search_sidebar';
import Sidebar from './components/UIkit/common/Sidebar';
import Header from './components/UIkit/common/Header'
import routes from './Breadcrumb'
import Search_conditions_bar from './components/UIkit/common/Search_conditions_bar'
import {
    CBreadcrumbRouter
}  from '@coreui/react'

const Router = () => {

    let search_bar_call = "";
    const selector = useSelector(state => state);
    const [isSidebar, setIsSidebar] = useState("");

    const is_sidebar = () => {
        const pathname = selector.router.location.pathname.slice(1);
        if (pathname === "customer_detail") {
            setIsSidebar(false);
        } else {
            setIsSidebar(true);
        }
    }

    useEffect(() => {
        is_sidebar();
    });


    return(
        <>
            <div className='wrapper'>
                <div className=  {`${
                    isSidebar ? 'wrapper-container' : 'wrapper-container-detail'
                }`}>
                    <Header className='header-area'/>
                    <CBreadcrumbRouter
                        className="border-0 c-subheader-nav m-0 px-0 px-md-3 breadcrumb-area"
                        routes={routes}
                    />
                    <div className='sidebar-area'>
                        <Sidebar />
                    </div>
                    <div className= {`${
                        isSidebar ? 'search_sidebar-area' : 'u-display-none'
                    }`}>
                        <Search_sidebar />
                    </div>
                    <div className='main-area'>
                        <div className={`${
                            isSidebar ? 'search_sidebar-area' : 'u-display-none'
                        }`}>
                            <Search_conditions_bar/>
                        </div>
                        <Switch>
                            <Apps />
                        </Switch>
                    </div>
                </div>
            </div>
        </>
);
}

export default Router;
