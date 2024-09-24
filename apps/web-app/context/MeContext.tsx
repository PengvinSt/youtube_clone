import { Loader } from "@mantine/core";
import { createContext, ReactNode, useContext } from "react";
import { useQuery, RefetchOptions, RefetchQueryFilters } from "react-query";
import { getMe } from "../api";
import { Me, QueryKeys } from "../types";

const MeContext = createContext<{
  user: Me;
  refetch: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
  ) => void;
} | null>(null);

const MeContextProvider = ({ children }: { children: ReactNode }) => {
  const { data, isLoading, refetch } = useQuery(QueryKeys.me, getMe);

  return (
    <MeContext.Provider value={{ user: data, refetch }}>
      {isLoading ? <Loader /> : children}
    </MeContext.Provider>
  );
};

const useMeContext = () => {
  const context = useContext(MeContext);
  if (!context) {
    throw new Error("useMeContext must be used within a MeContextProvider");
  }
  return context;
};

export { MeContextProvider, useMeContext };
