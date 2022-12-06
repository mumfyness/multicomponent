import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <a href="http://localhost:3000">Home</a>
                <a href="https://www.tetradigital.com">Preview Tetradigital</a>
                <a href="http://localhost:3000/" className="right">Contact</a>
            </div>
        );
    }
}

export default Navbar
