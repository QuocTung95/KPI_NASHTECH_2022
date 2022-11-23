import React from 'react';
import PropTypes from 'prop-types';
import {ThemeContext} from '../../contexts/ThemeContext'
import { useState, useContext } from 'react'
import {Menu} from 'antd'
import {Link} from 'react-router-dom'

const Navigate = props => {

    const items = [
        {
          label: <Link to='/home'>Home</Link>,
          key: 'home',
        },
        {
          label: <Link to='/book'>Book</Link>,
          key: 'book',
        },
        {
          label: <Link to='/profile'>Profile</Link>,
          key: 'profile',
        },
      ];
    return (
        <Menu mode="horizontal" items={items} />
    );
};

Navigate.propTypes = {
    
};

export default Navigate;