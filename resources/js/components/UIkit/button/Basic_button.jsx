import React from 'react';
import {CButton} from '@coreui/react'

//https://coreui.io/react/docs/components/-Button

const Basic_button = (props) => {

    return(
        <CButton
            className = {props.className}
            color = {props.color}
            size = {props.size}
            onClick = {props.onClick}
        >
            {props.text}
        </CButton>
    )

}

export default Basic_button;
