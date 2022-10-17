import styled from 'styled-components';

export const BookContainer = styled.div`
  margin: 20px;
  transition: all 0.2s ease;
  &:hover {
    transform: scale(1.02);
  }
`;

export const BookImage = styled.div`
  width: 200px;
  height: 300px;
  background-color: #3e586b;
`;

export const BookTitle = styled.div`
  font-weight: bold;
`;

export const Author = styled.div`
  font-size: 12px;
  font-style: italic;
`;

export const Category = styled.div`
  font-size: 12px;
`;
