import { ReactNode } from "react";
import { QueryProvider } from "./QueryProvider";
import { ClerkProvider } from "@clerk/nextjs";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ClerkProvider>
      <QueryProvider>{children}</QueryProvider>
    </ClerkProvider>
  );
};

export default Providers;
