import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";

interface LayoutProps {
  children: ReactNode;
}
export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Box
        minH="100vh"
        display="flex"
        flexDirection="column"
        overflowX="hidden"
      >
        <Header />

        {/* Main content */}
        {children}

        {/* Footer placeholder */}
        <Footer />
      </Box>
    </>
  );
};
