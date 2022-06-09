import React, { Component } from 'react';

class Content extends Component {
    render() {
        return (
            <div className="main">
                <div className="show1pict" >
                    <img className={"flightpicture"}
                         src={"http://static.wixstatic.com/media/f94ca6_30cebbb71aac9cdb1b90a05d512e2044.jpg/v1/fill/w_980,h_480,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f94ca6_30cebbb71aac9cdb1b90a05d512e2044.jpg"}
                         alt={"AEW&C Wedgetail"}
                    />
                </div>
                <h2>Airborne 1</h2>
                <h5>Over water</h5>
                <br />
                <div className="show2pict" >
                    <img
                        className={"flightpicture"}
                        src={"https://static.wixstatic.com/media/f94ca6_497c8a86baadf6c13caa99d50e4046aa.jpg/v1/fill/w_980,h_480,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f94ca6_497c8a86baadf6c13caa99d50e4046aa.jpg"}
                        alt={"AEW&C Wedgetail over Rivers"}
                    />
                </div>
                <h2>Airborne 2</h2>
                <h5>Over Delta</h5>
            </div>
        );
    }
}

export default Content