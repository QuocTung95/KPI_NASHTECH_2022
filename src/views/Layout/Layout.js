import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';
import Bottom from '../../components/Bottom/Bottom';
const Layout = ({children}) => {
    return (
        <div>
            <Header></Header>
                {children}
            <Bottom></Bottom>
        </div>
    );
};

Layout.propTypes = {
    
};

export default Layout;