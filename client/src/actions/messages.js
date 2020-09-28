import {gql} from "@apollo/client";

export const GET_MESSAGES = gql`
    subscription {
        messages {
            id
            content
            user
        }
    }
`;

export const POST_MESSAGE = gql`
    mutation($user: String!, $content: String!) {
        postMessage(user: $user, content: $content)
    }
`;