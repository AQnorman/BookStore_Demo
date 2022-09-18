import React from "react";
import { BookContainer, BookImage, BookTitle, Author } from "./Book.elements";

const Book = (props) => {
    return(
        <BookContainer>
            <BookImage/>
            <BookTitle>{props.title}</BookTitle>
            <Author>{props.fn} {props.ln}</Author>
        </BookContainer>
    )
}

export default Book;