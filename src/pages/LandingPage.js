import './LandingPage.css'
import React from "react";
import {ColoredBoxLandingContainer, MainLandingContainer, PictureLandingContainer} from "./LandingPage.Style";
function LandingPage(){

        return (
            <MainLandingContainer>
                <PictureLandingContainer>
                    <ColoredBoxLandingContainer>
                        <h1>Dried Fruit Au Natural</h1>
                        <h3>Hand curated dried fruit and trail mix <br/><br/> by Joe Niechwiadowicz</h3>
                    </ColoredBoxLandingContainer>
                </PictureLandingContainer>
            </MainLandingContainer>
        )

}

export default LandingPage;
