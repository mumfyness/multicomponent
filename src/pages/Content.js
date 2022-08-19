import React, { Component } from 'react';

class Content extends Component {
    render() {
        return (
            <div className="main">
                <div className="show1pict" >
                    <img className={"flightpicture"}
                         src={"../../images/WedgetailOnThecoast.jpg"}
                         alt={"AEW&C Wedgetail On The Coast"}
                    />
                </div>
                <h2>Airborne 1</h2>
                <h5>Over water</h5>
                <br />
                <div className="show2pict" >
                    <img
                        className={"flightpicture"}
                        src={"../../images/WedgetailOverRivers.jpg"}
                        alt={"AEW&C Wedgetail Over Rivers"}
                    />
                </div>
                <h2>Airborne 2</h2>
                <h5>Over Delta</h5>
            </div>
        );
    }
}

export default Content