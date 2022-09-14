import React, { Component } from 'react';

class Content extends Component {
    render() {
        return (
            <div className="main">
                <div className="showPicture" >
                    <img className={"flightPicture"}
                         id={"displayContentId"}
                         src={"/multicomponent/WedgetailOnTheCoast.jpg"}
                         alt={"selectedimage"}
                    />
                </div>
            </div>
        );
    }
}

export default Content
