import React from 'react'
import NavbarBox              from '../../components/NavbarBox';
import FooterBox              from '../../components/FooterBox';
import HeaderBox              from '../../components/HeaderBox';

const LayoutContainer = (props) => (
    <div>
        {props.children}
    </div>
)

export default LayoutContainer