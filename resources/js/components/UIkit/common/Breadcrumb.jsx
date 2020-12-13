import React from 'react'

import {
    CBreadcrumbRouter
}
    from '@coreui/react'
import routes from '../../../Breadcrumb'

const Breadcrumb = (props) => {

    return(
        <CBreadcrumbRouter
            className='border-0 c-subheader-nav m-0 px-0 px-md-3'
            routes={routes}
        />
    );
}

export default Breadcrumb;
