import React from "react";
import {AboutContainer, AboutImage, TextBox} from "./AboutPage.style";
import NavBar from "../componets/NavBar";
import Footer from "../componets/Footer";

function AboutPageStyle(){

    return (
        <main className="et-main" id="tab-about" >
            <NavBar/>
                <AboutContainer>
                    <AboutImage className="et-about-img" src={require('../profile_img_backup.jpg')} />
                    <TextBox className="et-about">
                                <h1>My Story</h1>
                                <p>
                                    I started dehydrating fruit as a fun snack for the kids when they were in high school. The banana and apple chips were the favorites and always requested by their friends. Post-retirement, I brought these healthy snacks to the Farmers Market and
                                    <i> Dried Fruit Au Natural</i> was born. In addition to weekly markets, I've partnered with several local Sioux Falls businesses to satisfy fruit lovers cravings throughout the week. Whether you prefer the classic apple chips or want to be adventurous and try the dried kiwi- I hope to see you at the next market!
                                </p>
                            </TextBox>

                </AboutContainer>
            <Footer/>
        </main>
    )

}
export default AboutPageStyle;
