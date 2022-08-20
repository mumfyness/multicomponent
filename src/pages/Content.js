import React, { Component } from 'react';

class Content extends Component {
    render() {
        return (
            <div className="main">
                <div className="show1pict" >
                    <img className={"FlightPicture"}
                         src={"WedgeTailOnTheCoast.jpg"}
                         alt={"AEW&C WedgeTail On The Coast"}
                    />
                </div>
                <p> </p>
                <p> </p>
                <br />
                <div className="show2pict" >
                    <img
                        className={"FlightPicture"}
                        src={"WedgeTailOverRivers.jpg"}
                        alt={"AEW&C WedgeTail Over Rivers"}
                    />
                </div>
            </div>
        );
    }
}

export default Content