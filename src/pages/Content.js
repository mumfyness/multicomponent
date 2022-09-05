import React, { Component } from 'react';

class Content extends Component {
    render() {
        return (
            <div className="main">
                <div className="showpicture" >
                    <img className={"flightpicture"}
                         src={"/multicomponent/WedgeTailOnTheCoast.jpg"}
                         alt={"selectedimage"}
                    />
                </div>
            </div>
        );
    }
}

export default Content
