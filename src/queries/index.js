import { gql } from 'apollo-boost';

const getBooks = gql`
	{
		books{
      id
			title
			author
      price
      stock
		}
	}
`

export { getBooks };
