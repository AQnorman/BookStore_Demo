import React, { useState } from 'react'

import { HomeContainer, Number, ButtonWrapper, Button } from './Home.elements';

const Home = () => {

    const [number, setNumber] = useState(0);

    return(
        <HomeContainer>
            <Number>{number}</Number>
            <ButtonWrapper>
                <Button onClick={() => setNumber(0)}>Set 0</Button>
                <Button onClick={() => setNumber(1)}>Set 1</Button>
            </ButtonWrapper>
        </HomeContainer>
    )
}

export default Home;