import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Book } from '../../components'
import { BooksContainer, BooksWrapper } from './Books.elements';
import { books } from '../../books';

const Books = () => {

    return(
        <BooksContainer>
            <BooksWrapper>
                {
                    books.map((book) => (
                        <Book title={book.title} fn={book.author_fn} ln={book.author_ln}/>
                    ))
                }
            </BooksWrapper>
        </BooksContainer>
    )
}

export default Books;