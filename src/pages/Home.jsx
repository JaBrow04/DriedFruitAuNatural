import LandingPage from './LandingPage'
import NavBar from "../componets/NavBar";
import StoryTeasers from "../componets/StoryTeasers";
import React from "react";
import ProductTeasers from "../componets/ProductTeasers";
import Footer from "../componets/Footer";
import {ContactContainer, MarketGrid} from "./AboutPage.style";
import markets from "../Resources/markets";
import MarketCard from "../componets/MarketCard";

function Home(){
    return(
        <div>
            <LandingPage/>
            <NavBar/>
            <ProductTeasers
                imageName={"profile_img.jpg"}
            />

            <ContactContainer className="et-contact-container">
                <h1>Upcoming Markets</h1>
                <MarketGrid>
                    {markets &&
                        markets.map((product,index) => (

                            <MarketCard
                                data={product}
                                id={index}
                                key={index}
                            />
                        ))
                    }
                </MarketGrid>
            </ContactContainer>
            <StoryTeasers
                imageName={"profile_img.jpg"}
            />
            <Footer/>
        </div>
    )
}
export default Home;