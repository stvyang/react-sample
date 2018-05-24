import { gql } from 'apollo-boost';

const createBook = gql`
  mutation($title: String!, $author: String!, $price: Float!, $stock: Int!) {
    createBook(data: { title: $title, author: $author, price: $price, stock: $stock }) {
      title
      author
    }
  }
`;

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

const deleteBookById = gql`
  mutation($id: ID!) {
    deleteBook(id: $id)
  }
`;

const placeOrder = gql`
  mutation($orderDetails: [OrderDetailInput]!) {
    createOrder(data: { orderDetails: $orderDetails }) {
      id
      customerName
    }
  }
`;

const getOrders = gql`
  {
    orders {
      id
      orderDate
      totalPayment
    }
  }
`;

const getOrderById = gql`
  query($id: ID!) {
    order(id: $id) {
      id
      orderDate
      totalPayment
      orderDetails {
        id
        book {
          title
        }
        quantity
      }
    }
  }
`;

const deleteOrderById = gql`
  mutation($id: ID!) {
    deleteOrder(id: $id)
  }
`;

export {
  createBook,
  getBooks,
  getBookById,
  updateBookById,
  deleteBookById,
  placeOrder,
  getOrders,
  getOrderById,
  deleteOrderById,
};
