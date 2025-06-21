import { ApolloClient, InMemoryCache, createHttpLink, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';

const errorLink = onError(({ graphQLErrors, networkError, operation, forward }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.error(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  }
  if (networkError) {
    console.error(`[Network error]: ${networkError}`);
    console.error('Operation:', operation.operationName);
    console.error('Variables:', operation.variables);
  }
});

const httpLink = createHttpLink({
  uri: process.env.NODE_ENV === 'development' 
    ? `${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT || 'https://woocommerce-1475440-5585552.cloudwaysapps.com/graphql'}?t=${Date.now()}`
    : process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT || 'https://woocommerce-1475440-5585552.cloudwaysapps.com/graphql',
  credentials: 'same-origin',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const apolloClient = new ApolloClient({
  link: from([errorLink, httpLink]),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          products: {
            keyArgs: ['where'],
            merge(existing = { edges: [] }, incoming) {
              return {
                ...incoming,
                edges: [...(existing.edges || []), ...(incoming.edges || [])],
              };
            },
          },
        },
      },
      Product: {
        keyFields: ['id'],
        fields: {
          // Cache product images for better performance
          featuredImage: {
            merge: true,
          },
          galleryImages: {
            merge: true,
          },
        },
      },
    },
  }),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
      nextFetchPolicy: 'cache-first',
    },
    query: {
      fetchPolicy: 'cache-first',
      errorPolicy: 'all',
    },
  },
});