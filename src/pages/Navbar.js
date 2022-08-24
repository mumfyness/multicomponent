import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return ( /** Test Removal of PUBLIC_URL env variable **/
            <div className="navbar">
                <a href="multicomponent">Home</a>
                <a href="multicomponent/tdgent.html">Preview Tetradigital</a>
                <a href="multicomponent" className="right">Contact Us</a>
            </div>
        );
    }
}

export default Navbar

