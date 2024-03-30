"use client";

import React from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface QueryProviderProps {
  children: React.ReactNode;
}

const queryClient = new QueryClient();

const QueryProvider: React.FC<QueryProviderProps> = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

export default QueryProvider;
