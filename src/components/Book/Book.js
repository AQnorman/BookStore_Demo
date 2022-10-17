import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  BookContainer,
  BookImage,
  BookTitle,
  Author,
  Category,
} from './Book.elements';
import { useNavigate } from 'react-router-dom';
import { booksDataActions } from '../../store/booksData';

const Book = props => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  return (
    <BookContainer onClick={() => navigate(`/books/${props.id}`)}>
      <BookImage />
      <BookTitle>{props.title}</BookTitle>
      <Author>
        {props.fn} {props.ln}
      </Author>
      <Category>{props.category}</Category>
    </BookContainer>
  );
};

export default Book;
