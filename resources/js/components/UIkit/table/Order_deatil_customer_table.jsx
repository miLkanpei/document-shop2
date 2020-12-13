import React from 'react';
import styled from 'styled-components';

import {CCol, CCard, CCardHeader} from '@coreui/react'

const Table = styled.table`
    border-collapse: collapse;
    border: 1px solid #ccc;
    line-height: 1.5;
    margin: 15px;
`;
const Td = styled.td`
    border-collapse: collapse;
    border: 1px solid #ccc;
    line-height: 1.5;
    width: 150px;
    padding: 10px;
    font-weight: bold;
    vertical-align: top;
`;

const Tr = styled.tr`
    :nth-child(even){
        background: rgba(0, 0, 0, 0.05);
    }
`;

const Order_deatil_customer_table = () => {
    return(
        <CCol xs="12" lg="12">
            <CCard>
                <Table>
                    <tbody>
                        <Tr>
                            <Td>ID</Td>
                            <Td>1111</Td>
                        </Tr>
                        <Tr>
                            <Td>顧客番号</Td>
                            <Td>1111</Td>
                        </Tr>
                        <Tr>
                            <Td>お名前</Td>
                            <Td>羽生善治</Td>
                        </Tr>
                        <Tr>
                            <Td>郵便番号</Td>
                            <Td>861-8010</Td>
                        </Tr>
                        <Tr>
                            <Td>住所</Td>
                            <Td>福岡県福岡市早良区祖原1-3-1302</Td>
                        </Tr>
                        <Tr>
                            <Td>電話番号</Td>
                            <Td>080-6455-7594</Td>
                        </Tr>
                    </tbody>
                </Table>
            </CCard>
        </CCol>
    )
}

export default Order_deatil_customer_table;