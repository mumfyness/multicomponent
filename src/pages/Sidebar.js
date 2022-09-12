// noinspection SpellCheckingInspection

import React, { Component } from 'react';

class Sidebar extends Component {

    render() {
        let thmOrigBgColor = "";

        return (
            <div className="side">
                <h2>Image Choices</h2>
                <h4>Select photo to display</h4>
                <div className="sidebarpicts" >
                    <div >
                        <img
                            className={"thumbnail"}
                            id={"thm1"}
                            onPointerDown={trigger}
                            onPointerUp={trigger}
                            onPointerOver={trigger}
                            onPointerOut={trigger}
                            src={"/multicomponent/WedgetailOnTheCoast.jpg"}
                            alt={"thm1"}/>
                    </div>
                    <br/>
                    <div>
                        <img
                            className={"thumbnail"}
                            id={"thm2"}
                            onPointerDown={trigger}
                            onPointerUp={trigger}
                            onPointerOver={trigger}
                            onPointerOut={trigger}
                            src={"/multicomponent/WedgetailOverRivers.jpg"}
                            alt={"thm2"}/>
                    </div>
                    <br/>
                    <div >
                        <img
                            className={"thumbnail"}
                            id={"thm3"}
                            onPointerDown={trigger}
                            onPointerUp={trigger}
                            onPointerOver={trigger}
                            onPointerOut={trigger}
                            src={"/multicomponent/PeaceEyeInClouds.jpg"}
                            alt={"thm3"}/>
                    </div>
                    <br/>
                    <div >
                        <img
                            className={"thumbnail"}
                            id={"thm4"}
                            onPointerDown={trigger}
                            onPointerUp={trigger}
                            onPointerOver={trigger}
                            onPointerOut={trigger}
                            src={"/multicomponent/PeaceEagleOnHigh.jpg"}
                            alt={"thm4"}/>
                    </div>
                </div>
            </div>
        );

        function resetAllThumbImages (event, origBgColor) {
            // Reset the temporary image-path attribute to undefined.
            event.currentTarget.style.backgroundColor = origBgColor;
            event.target.setAttribute("image-path", undefined);
        }
        /**
         * changeContentImage
         * @param event - pointerup event.
         */
        function changeContentImage(event) {
            if (event.type === "pointerup") {
                let imagePath = event.target.getAttribute("image-path");
                if ( imagePath !== undefined) {
                    // alert ("New Content image path: " + imagePath);
                    document.getElementById("displayContentId").src = imagePath;
                }
            }
        }

        /**
         * trigger
         * @param event - pointer event
         */
        function trigger(event) {
            let id = event.currentTarget.id;

            // alert("\nevent.type: " + event.type + "\nevent.currentTarget.id: " + id);
            try {
                // pointerdown
                if (event.type === "pointerdown") {

                    // Select new Content image from displayed list.
                    let sourcepath = event.target.getAttribute("src");

                    if (sourcepath !== undefined) {
                        console.log("image source: " + sourcepath);
                        // Set the temporary image-path attribute.
                        event.target.setAttribute("image-path", sourcepath);

                        let announce = "\nTargetId: " + id + "\nhandle event.type: " +
                                       "\ngot source thumbnail Picture: " + sourcepath;
                        console.log(announce);
                    }
                }
                // pointerup
                else if (event.type === "pointerup") {
                    // set new Content picture.
                    changeContentImage(event);
                    resetAllThumbImages(event, thmOrigBgColor);
                }
                // pointerout
                else if (event.type === "pointerout") {
                    resetAllThumbImages(event, thmOrigBgColor);
                }
                // pointerover
                else if (event.type === "pointerover") {
                    thmOrigBgColor = event.currentTarget.style.backgroundColor;
                    event.currentTarget.style.backgroundColor = "yellow";
                }
            }
            catch (e) {
                console.log(e.message());
            }
        }
    };
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
