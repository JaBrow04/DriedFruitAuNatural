import React from "react";
import {useState} from "react";
import {ProductCardContainer,ProductImage,ProductImageContainer} from "./ProductCard.style";
import {CardActionArea} from "@material-ui/core";

export default function ProductCard(
    {id, data}
)
{
    const [showInfo, setShowInfo] = useState(false);

    function handleClick() {
        setShowInfo(!showInfo);
    }


    return  (
        <CardActionArea onClick={handleClick}>

        <ProductCardContainer key={id} className = "product">
            <ProductImageContainer>
                <ProductImage
                              image={require(`../Fruit/${data.name}.JPG`)}
                              alt={data.name}/>
            </ProductImageContainer>
            <h2>{`${data.name}`}</h2>
            <h3>{`${data.price}`}</h3>
            {data.description && <p>{`${ data.description}`}</p>}
        </ProductCardContainer>
        </CardActionArea>
    )

}

