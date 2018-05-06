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

const updateBookById = gql`
  mutation($id: ID!, $title: String, $author: String, $price: Float, $stock: Int) {
    updateBook(id: $id, data: { title: $title, author: $author, price: $price, stock: $stock })
  }
`;

export { getBooks, getBookById, updateBookById };
