import React, { Component } from 'react';

class Sidebar extends Component {
    render() {
        return (
            <div className="side">
                <h2>Menu Choices</h2>
                <h5>select one</h5>
                <div className="fakeimg" style={{ height: 200 }}>Image</div>
                <p>Choices list</p>
                <p>thank you</p>
                <div className="fakeimg" style={{ height: 60 }}>Image</div><br />
                <div className="fakeimg" style={{ height: 60 }}>Image</div><br />
                <div className="fakeimg" style={{ height: 60 }}>Image</div>
            </div>
        );
    }
}

export default Sidebar