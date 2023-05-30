import React from "react";
import ProductCard from "../componets/ProductCard";
import products from '../Resources/products.js'
import {ProductGrid, ProductContainer,HeaderContainer} from './ProductsPage.style';
import NavBar from "../componets/NavBar";
import Footer from "../componets/Footer";

function ProductsPage(){
    return (
              <main className="et-main"  id="tab-products">
                  <NavBar/>
                   <ProductContainer className="et-slide">
                      <HeaderContainer>
                          <h1>Locally Dehydrated Produce</h1>
                          <h3>
                              Now taking high volume orders.
                              For all inquiries please send me an email at DriedFruitAuNatural@gmail.com
                          </h3>
                      </HeaderContainer>
                      <ProductGrid>
                          {products &&
                              products.map((product,index) => (
                                  <ProductCard
                                      data={product}
                                      id={index}
                                      key={index}
                                  />
                              ))
                          }
                      </ProductGrid>
                  </ProductContainer>
              <Footer/>
              </main>

    )
}
export default ProductsPage
