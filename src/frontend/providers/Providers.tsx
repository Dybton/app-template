import { ReactNode } from "react";
import { QueryProvider } from "./QueryProvider";
import { ClerkProvider } from "@clerk/nextjs";

const Providers = ({ children }: { children: ReactNode }) => {
  return <QueryProvider>{children}</QueryProvider>;
};

export default Providers;
