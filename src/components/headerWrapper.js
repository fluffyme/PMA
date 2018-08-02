import React, { Component } from 'react';

export default class HeaderWrapper extends Component {
    render() {
        return (
            <div header-wrapper>
                <h1>Welcome to PMA Manager!</h1>

                {this.props.children}
            </div>
        );
    }
}