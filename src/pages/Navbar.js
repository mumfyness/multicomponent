import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <a href="../../public/index.html">Home</a>
                <a href="../../public/tdgent.html">Preview Tetradigital</a>
                <a href="../../public/index.html" className="right">Contact</a>
            </div>
        );
    }
}

export default Navbar

