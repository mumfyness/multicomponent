import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <a href="http://localhost:3000/multicomponent">Home</a>
                <a href="../../public/tdgent.html">Preview Tetradigital</a>
                <a href="http://localhost:3000/multicomponent" className="right">Contact</a>
            </div>
        );
    }
}

export default Navbar

