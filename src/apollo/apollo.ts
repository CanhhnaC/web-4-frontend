import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import { createApolloClient, InitApolloProps } from './client';
import merge from 'deepmerge';
import isEqual from 'lodash/isEqual';
import { useMemo } from 'react';

let apolloClient: ApolloClient<NormalizedCacheObject>;

export function initializeApollo(args?: InitApolloProps) {
  const { initialState } = args ?? {};
  const _apolloClient = apolloClient ?? createApolloClient({ initialState });

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();

    // Merge the existing cache into data passed from getStaticProps/getServerSideProps
    const data = merge(initialState, existingCache, {
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter((d) => sourceArray.every((s) => !isEqual(d, s))),
      ],
    });

    // Restore the cache with the merged data
    _apolloClient.cache.restore(data);
  }

  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function useApollo(args?: InitApolloProps) {
  const { initialState } = args ?? {};
  const store = useMemo(() => initializeApollo({ initialState }), [initialState]);
  return store;
}
