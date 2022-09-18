import styled from "styled-components";

export const HomeContainer = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const Number = styled.div`
    color: red;
    font-size: 100px;
`

export const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

export const Button = styled.div`
    border: 5px solid pink;
    border-radius: 20px;
    margin: 20px;
    padding: 20px;
    padding-left: 60px;
    padding-right: 60px;
    font-size: 50px;
    color: pink;

    &:hover {
        background-color: pink;
        color: white;
    }
`