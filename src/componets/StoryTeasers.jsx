import { useNavigate } from "react-router-dom";
import {HomeTeasersContainer,ProductImage,  TeasersTextContainer, EmptyTopBoxes, EmptyBottomBoxes,TextBoxStyled,Button} from "./HomeTeaser.style";

import {makeStyles} from "@material-ui/core";


const StoryTeasers =(
    {imageName}
) =>
{
    let navigate = useNavigate();
    const routeChange = () =>{
        let path = `/about-me`;
        navigate(path);
    }
    return  (
        <HomeTeasersContainer >
                <ProductImage
                    src={require(`../${imageName}`)}
                    alt={imageName}/>
            <TeasersTextContainer>
                <EmptyTopBoxes/>
                <EmptyBottomBoxes/>
                <TextBoxStyled>
                    <h1>My Story</h1>
                    <p>A little bit of spare time and a hankering for healthy snacks, that turned into a business venture.</p>
                    <Button onClick={routeChange}>Learn More</Button>
                </TextBoxStyled>

            </TeasersTextContainer>
        </HomeTeasersContainer>
    )

}

export default StoryTeasers;