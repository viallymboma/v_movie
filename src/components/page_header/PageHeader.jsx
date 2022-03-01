import React from 'react'
// import PropTypes from 'prop-types'

import bg from '../../assets/footer-bg.jpg';

const PageHeader = props => {
    return (
        <div className='page_header' style={{backgroundImage: `url(${bg})`}}>
            <h2> { props.children } </h2>
        </div>
    )
}

// PageHeader.propTypes = {

// }

export default PageHeader
