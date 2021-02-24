import { ApolloClient, HttpLink, InMemoryCache, NormalizedCacheObject } from '@apollo/client';
import { concatPagination } from '@apollo/client/utilities';
import { isServer } from '../constant/enviroments';

export type InitApolloProps = {
  initialState?: NormalizedCacheObject;
};

export function createApolloClient({ initialState }: InitApolloProps) {
  const apiURL = process.env.BASE_URL;
  const cache = new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          allPosts: concatPagination(),
        },
      },
    },
  });
  return new ApolloClient({
    ssrMode: isServer,
    link: new HttpLink({
      uri: apiURL,
    }),
    cache: initialState ? cache.restore(initialState) : cache,
  });
}
