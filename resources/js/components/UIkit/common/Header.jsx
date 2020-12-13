import React from 'react';

import {
    CHeader,
    CHeaderBrand,
    CHeaderNav,
    CHeaderNavItem,
    CHeaderNavLink,
  } from '@coreui/react'
import CIcon from '@coreui/icons-react'

const Header = () => {
    return(
            <CHeader withSubheader>
                <CHeaderNav className="d-md-down-none mr-auto">
                    <CHeaderNavItem className="" >
                        <CHeaderNavLink to="/">
                          <CIcon className="logo" height="48" width="120" alt="Logo"/>
                        </CHeaderNavLink>
                    </CHeaderNavItem>
                    <CHeaderNavItem className="px-3" >
                        <CHeaderNavLink to="/dashboard">
                            Dashboard
                        </CHeaderNavLink>
                    </CHeaderNavItem>
                    <CHeaderNavItem  className="px-3">
                        <CHeaderNavLink to="/users">
                            Users
                        </CHeaderNavLink>
                    </CHeaderNavItem>
                    <CHeaderNavItem className="px-3">
                        <CHeaderNavLink>
                            Settings
                        </CHeaderNavLink>
                    </CHeaderNavItem>
                </CHeaderNav>
            </CHeader>
    )
}

export default Header;
