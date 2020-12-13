import React from 'react';
import {
    CDropdown,
    CDropdownDivider,
    CDropdownItem,
    CDropdownMenu,
    CDropdownToggle,
} from '@coreui/react'

const Dropdown = () => {
    return(
        <CDropdown>
            <CDropdownToggle color="info" className="width_127">
                検索条件
            </CDropdownToggle>
            <CDropdownMenu>
                <CDropdownItem header>Header</CDropdownItem>
                <CDropdownItem disabled>Action Disabled</CDropdownItem>
                <CDropdownItem>Action</CDropdownItem>
                <CDropdownDivider />
                <CDropdownItem>Another Action</CDropdownItem>
            </CDropdownMenu>
        </CDropdown>
    )
}

export default Dropdown;
