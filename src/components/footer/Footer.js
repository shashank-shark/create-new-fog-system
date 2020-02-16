import React from 'react';
import { Component } from 'react';

import {
    Alignment,
    Navbar,
    NavbarDivider,
    NavbarGroup,
    NavbarHeading
} from '@blueprintjs/core';

class Footer extends Component {
    render() {
        return (
            <div>
                <Navbar>
                    <NavbarGroup align={Alignment.LEFT}>
                        <NavbarHeading>Fog Computing System</NavbarHeading>
                    </NavbarGroup>
                </Navbar>
            </div>
        );
    }
}

export default Footer;