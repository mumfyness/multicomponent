import React, { Component } from 'react';

class Sidebar extends Component {
    render() {
        return (
            <div className="side">
                <h2>Image Choices</h2>
                <h3>select one</h3>
                <br />
                <div className="fakeimg" style={{ height: 60 }}>Image1</div><br />
                <div className="fakeimg" style={{ height: 60 }}>Image2</div><br />
                <div className="fakeimg" style={{ height: 60 }}>Image3</div><br />
            </div>
        );
    }
}

export default Sidebar
