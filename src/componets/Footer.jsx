import React from "react";
import {FooterContainer,FooterTextBox,FooterSocialMediaContainer} from "./Footer.style";
import { IconButton} from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import LanguageIcon from "@material-ui/icons/Language";

const Footer =(
) => {
        return (
            <FooterContainer>
                <FooterTextBox>
                    <h1>Contact Me</h1>
                    <p>4001 Benjamin Dr.</p>
                    <p>Sioux Falls, SD 57103</p>
                    <p>DriedFruitAuNatural@gmail.com</p>
                    <FooterSocialMediaContainer>
                        <IconButton
                            aria-label={`Visit Dried Fruit Au Natural Facebook page`}
                            component="a"
                            href={`https://www.facebook.com/driedfruitaunatural`}
                            rel="noopener noreferrer"
                            target="_blank"
                            title="Facebook"
                        >
                            <FacebookIcon
                                aria-label={`Facebook - Dried Fruit Au Natural`}
                                titleAccess={`Facebook -Dried Fruit Au Natural`}
                                style={{ color: '#FBFAF8' }}
                            />
                        </IconButton>
                    </FooterSocialMediaContainer>
                </FooterTextBox>


            </FooterContainer>
        )
}

export default Footer;
