import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <a href="index.html">Home</a>
                <a href="tdgent.html">Preview Tetradigital</a>
                <a href="index.html" className="right">Contact</a>
            </div>
        );
    }
}

export default Navbar

