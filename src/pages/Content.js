import React, { Component } from 'react';

class Content extends Component {
    render() {
        return (
            <div className="main">
                <div className="showPicture" >
                    <img className={"flightPicture"}
                         id={"displayContentId"}
                         onDragEnter={()=> {return false;}}
                         onDragStart={()=> {return false;}}
                         onDragEnd={()=> {return false;}}
                         onDragExit={()=> {return false;}}
                         onDragLeave={()=> {return false;}}
                         onDrop={()=> {return false;}}
                         src={"/multicomponent/WedgetailOnTheCoast.jpg"}
                         alt={"selectedimage"}
                    />
                </div>
            </div>
        );
    }
}

export default Content
