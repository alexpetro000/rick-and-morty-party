import { gql } from 'apollo-boost';

export default gql`
    query Characters($page: Int, $name: String) {
        characters(page: $page, filter: {name: $name}) {
            info {
                count
                pages
                next
            }
            results {
                id
                name
                image
            }
        }
    }
`;
