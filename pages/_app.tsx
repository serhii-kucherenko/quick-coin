import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "../styles/globals.css";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = process.env.NODE_ENV === 'production' ? 'ethereum' : 'mumbai';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <QueryClientProvider client={queryClient}>
    <ThirdwebProvider activeChain={activeChain}  queryClient={queryClient}>
      <Component {...pageProps} />
    </ThirdwebProvider>
      </QueryClientProvider>
  );
}

export default MyApp;
