import React, { Component } from 'react';

class Sidebar extends Component {
    render() {
        return (
            <div className="side">
                <h2>Image Choices</h2>
                <br/>
                <h4>Select photo to display</h4>
                {/*<form action="action" onChange={setDisplayPicture(this)}>*/}
                {/*    <h4>Select a photo:</h4>*/}
                {/*    <select name="fotos" id="fotos">*/}
                {/*        <option value="WedgeTail">WedgeTail</option>*/}
                {/*        <option value="Hawk">Hawk</option>*/}
                {/*        <option value="Egret">Egret</option>*/}
                {/*        <option value="Vulture">Vulture</option>*/}
                {/*        <option value="Eagle">Eagle</option>*/}
                {/*        <option value="Falcon">Falcon</option>*/}
                {/*    </select>*/}
                {/*    <input type="submit" value="Submit"/>*/}
                {/*</form>*/}
                <div className="sidebarpicts" >
                    <div >
                        <img // onClick={alert(this)}
                            className={"thumbnail"} src={"/multicomponent/WedgeTailOnTheCoast.jpg"} alt={"thm1"}/>
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
