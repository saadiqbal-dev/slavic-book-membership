import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
import MainNav from "./main-nav";
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
        <MainNav />

        {/* Main content */}
        {children}

        {/* Footer placeholder */}
        <Footer />
      </Box>
    </>
  );
};
