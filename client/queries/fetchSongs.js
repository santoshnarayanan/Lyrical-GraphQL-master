import { gql } from '@apollo/client'; //Fetch graphql query

export default gql `
{
    songs{
        id
        title
    }
}
`;