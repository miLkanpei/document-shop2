import React from 'react'
import {
  CCol,
  CNav,
  CNavItem,
  CNavLink,
  CRow,
  CTabContent,
  CTabPane,
  CCard,
  CCardBody,
  CTabs,
  CCardHeader
} from '@coreui/react'

import Tab_inner_table from './Tab_inner_table'

const Tab_table = () => {
    return(
        <CRow>
            <CCol xs="12" md="12">
                <CCard>
                    <CCardHeader>
                        履歴
                    </CCardHeader>
                    <CCardBody>
                        <CTabs>
                            <CNav variant="tabs">
                                <CNavItem>
                                    <CNavLink>
                                        変更履歴
                                    </CNavLink>
                                </CNavItem>
                                <CNavItem>
                                    <CNavLink>
                                        メール配信履歴
                                    </CNavLink>
                                </CNavItem>
                            </CNav>
                            <CTabContent>
                                <CTabPane>
                                    <Tab_inner_table />
                                </CTabPane>
                                <CTabPane>
                                    <Tab_inner_table />
                                </CTabPane>
                            </CTabContent>
                        </CTabs>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}

export default Tab_table;