import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.hygraph.com/v2/cl926wizc2l5401ul4w7w6ot2/master',
    cache: new InMemoryCache()
})