import React, { Component } from 'react';

class Sidebar extends Component {
    render() {
        return (
            <div className="side">
                <h2>Image Choices</h2>
                <br/>
                <h4>Select photo to display</h4>
                <div className="sidebarpicts" >
                    <div >
                        <img // onClick={alert(this)}
                            className={"thumbnail"} src={"/multicomponent/WedgetailOnTheCoast.jpg"} alt={"thm1"}/>
                    </div>
                    <br/>
                    <div>
                        <img // onClick={alert(this)}
                             className={"thumbnail"} src={"/multicomponent/WedgetailOverRivers.jpg"} alt={"thm2"}/>
                    </div>
                    <br/>
                    <div >
                        <img // onClick={alert(this)}
                             className={"thumbnail"} src={"/multicomponent/PeaceEyeInClouds.jpg"} alt={"thm3"}/>
                    </div>
                    <br/>
                    <div >
                        <img // onClick={alert(this)}
                            className={"thumbnail"} src={"/multicomponent/PeaceEagleFlyingHigh.jpg"} alt={"thm4"}/>
                    </div>
                </div>
            </div>
        );
    }
}

/** TODO Use similar function to respond to "Contact Us" in Navbar
 * setDisplayPicture dynamically sets the selected picture
 * in the Content column
 **/
//function setDisplayPicture(thumbdiv) {
    // if (thumbdiv !== undefined) {
    //     alert(thumbdiv);
    // }
//     return  MouseEvent.mouseUp;
// }


export default Sidebar
