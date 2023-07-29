"use client";
import React from "react";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "./config";

const ApolloClientProvider = ({ children }: { children: React.ReactNode }) => {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};

export default ApolloClientProvider;
