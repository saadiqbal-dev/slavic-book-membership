import Hero from "./../components/pages/home/hero";
import SocialProof from "@/components/pages/home/social-proof";
import { VStack, Image, Box } from "@chakra-ui/react";
import InTheBox from "@/components/pages/home/in-the-box";
import Importance from "@/components/pages/home/importance";
import ExploreByAge from "@/components/pages/home/explore-by-age";
import HowItWorks from "@/components/pages/home/how-it-works";

function Seperator() {
  return (
    <Image
      src="/assets/seperator.webp"
      alt="seperator"
      mt="-32px"
      w="100%"
      zIndex={5}
      h={{ base: "124px", md: "auto" }}
    />
  );
}

export default function Home() {
  return (
    <VStack>
      <Hero />
      <Seperator />
      <SocialProof />
      <Seperator />
      <ExploreByAge />
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        position="relative"
        transform={{ base: "scale(0.9)", md: "scale(1)" }}
      >
        <Image src="/assets/seperator-2.png" alt="seperator" w="926px" />
        <Image
          src="/assets/ship.png"
          alt="ship"
          position="absolute"
          top="24px"
          left={{ md: "-24px", base: "0px" }}
          transform="translate(-50%, -50%)"
          width={{ md: "200px", base: "69px" }}
          height={{ md: "200px", base: "69px" }}
        />
      </Box>
      <InTheBox />
      <Importance />
      <HowItWorks />
      <Seperator />
    </VStack>
  );
}
