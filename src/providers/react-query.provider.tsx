import React, { PropsWithChildren } from 'react';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      retryDelay: 500,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  },
});

export const ReactQueryProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
      <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
};
