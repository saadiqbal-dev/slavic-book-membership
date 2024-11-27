import Hero from "./../components/pages/home/hero";
import SocialProof from "@/components/pages/home/social-proof";
import { VStack, Image, Box } from "@chakra-ui/react";
import InTheBox from "@/components/pages/home/in-the-box";
import Importance from "@/components/pages/home/importance";
import ExploreByAge from "@/components/pages/home/explore-by-age";
import HowItWorks from "@/components/pages/home/how-it-works";

export default function Home() {
  return (
    <VStack>
      <Hero />
      <Image
        src="/assets/seperator.webp"
        alt="seperator"
        mt="-32px"
        w="100%"
        zIndex={5}
      />
      <SocialProof />
      <Image
        src="/assets/seperator.webp"
        alt="seperator"
        mt="-124px"
        w="100%"
        zIndex={5}
      />
      <ExploreByAge />
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        position="relative"
      >
        <Image src="/assets/seperator-2.png" alt="seperator" w="926px" />
        <Image
          src="/assets/ship.png"
          alt="ship"
          position="absolute"
          top="24px"
          left="-24px"
          transform="translate(-50%, -50%)"
          width="200px"
          height="200px"
        />
      </Box>
      <InTheBox />
      <Importance />
      <HowItWorks />
      <Image
        src="/assets/seperator.webp"
        alt="seperator"
        mt="-124px"
        w="100%"
        zIndex={5}
      />
    </VStack>
  );
}
