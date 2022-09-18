import React from "react";

import { HeaderContainer, Logo, RoutesContainer, Route } from "./Header.elements";

const Header = () => {

    return(
        <HeaderContainer>
            <Logo to="/">BookStore</Logo>
            <RoutesContainer>
                <Route to="books" active>Books</Route>
                <Route to="contactus" >Contact Us</Route>
                <Route to="aboutus" >About Us</Route>
            </RoutesContainer>
        </HeaderContainer>
    )
}

export default Header;