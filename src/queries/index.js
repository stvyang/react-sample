import { gql } from 'apollo-boost';

const getBooks = gql`
  {
    books {
      id
      title
      author
    }
  }
`;

const getBookById = gql`
  query($id: ID!) {
    book(id: $id) {
      title
      author
      price
      stock
    }
  }
`;

export { getBooks, getBookById };
