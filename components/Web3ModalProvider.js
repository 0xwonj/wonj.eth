'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createWeb3Modal } from '@web3modal/wagmi/react';
import React from 'react';
import { WagmiProvider } from 'wagmi';

import { config, projectId } from '@/config/wagmi';

const queryClient = new QueryClient();

if (!projectId) throw new Error('Project ID is not defined');

createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: true,
  themeVariables: {
    '--w3m-font-family': '"Press Start 2P", regular',
    '--w3m-font-size-master': '0.44rem',
    '--w3m-color-mix': '#172554',
    '--w3m-accent': '#ff8800',
    '--w3m-color-mix-strength': 25,
  },
});

export default function Web3ModalProvider({ children, initialState }) {
  return (
    <WagmiProvider config={config} initialState={initialState}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}
