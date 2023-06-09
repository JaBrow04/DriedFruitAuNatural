import { useNavigate } from "react-router-dom";
import {
    HomeTeasersContainer,
    ProductImage,
    TextBoxStyled,
    Button
} from "./HomeTeaser.style";
import {
    EmptyTopBoxes,
    TeasersTextContainer,
    EmptyBottomBoxes,
} from "./ProductTeaser.style";

const ProductTeasers =(
    {direction, imageName}
) =>
{
    let navigate = useNavigate();
    const routeChange = () =>{
        let path = `/products`;
        navigate(path);
    }
    return  (
        <HomeTeasersContainer >
            <TeasersTextContainer>
                <EmptyTopBoxes/>
                <EmptyBottomBoxes/>
                <TextBoxStyled>
                    <h1>The Difference</h1>
                    <p>Locally sourced produce dehydrated in the heart of Sioux Falls, South Dakota.</p>
                    <Button onClick={routeChange}>Discover</Button>
                </TextBoxStyled>

            </TeasersTextContainer>
            <ProductImage
                src={require(`../${imageName}`)}
                alt={imageName}/>
        </HomeTeasersContainer>
    )

}

export default ProductTeasers;