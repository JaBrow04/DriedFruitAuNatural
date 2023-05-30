import React from "react";
import {
    DetailsContainer,
    HeaderContainer,
    MarketCardContainer,
    MarketingImg,
    SocialMediaContainer
} from "./MarketCard.style";
import IconButton from "@material-ui/core/IconButton";
import FacebookIcon from "@material-ui/icons/Facebook";
import LanguageIcon from '@material-ui/icons/Language';

const MarketCard =(
    {id, data}
) =>
{

    console.log(data.location);
    return  (
        <MarketCardContainer key={id}>
            <MarketingImg
                src={require(`../icons/${data.img}`)}
                alt={data.name}
            >
            </MarketingImg>
            <HeaderContainer>
                <h2>{`${data.name}`}</h2>
            </HeaderContainer>
            <DetailsContainer>
                <h3>{`${data.location}`}</h3>
            </DetailsContainer>
            <SocialMediaContainer>
                <IconButton
                    aria-label={`Visit ${data.name} Facebook page`}
                    component="a"
                    href={`${data.linkFb}`}
                    rel="noopener noreferrer"
                    target="_blank"
                    title="Facebook"
                >
                    <FacebookIcon
                        aria-label={`Facebook - ${data.name}`}
                        titleAccess={`Facebook -${data.name}`}
                        visibility={`${!data.linkFb?"hidden":""}`}
                    />
                </IconButton>

                <IconButton
                    aria-label={`Visit ${data.name}'s home page`}
                    component="a"
                    href={`${data.link}`}
                    rel="noopener noreferrer"
                    target="_blank"
                    title="Facebook"
                >
                    <LanguageIcon
                        aria-label={`${data.name}`}
                        titleAccess={`${data.name}`}
                        visibility={`${!data.link?"hidden":""}`}
                    />
                </IconButton>
            </SocialMediaContainer>
        </MarketCardContainer>
    )

}

export default MarketCard;