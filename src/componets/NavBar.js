import React from "react";
import {NavBarStyle, HomeIconImg} from "./NavBar.style";
import { HashLink } from 'react-router-hash-link';
const NavBar =(
) => {


        return (
            <NavBarStyle>
                <HashLink  to ="/about-me#top" style={{ color: '#FFF' }}>My Story</HashLink>
                    <HashLink  to ="/#tab-landing" >
                            <HomeIconImg src={require(`../icons/apple.png`)} />
                    </HashLink>
                    <HashLink  to ="/products#top" style={{ color: '#FFF' }}>Products</HashLink>
            </NavBarStyle>
        )
}

export default NavBar;
