import {
  Box,
  Container,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Button } from "@/components/ui/button";
import { BsChevronRight } from "react-icons/bs";
import ArrorwRight from "./arrow-right";
import { useModalStore } from "@/store/modal";

export default function Hero() {
  const { setIsOpen } = useModalStore();
  return (
    <>
      <Container
        padding="7rem 4rem 4rem 4rem"
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        gap="32px"
        maxW="1320px"
      >
        <VStack gap="4" position="relative">
          <Image
            src="/assets/cloud.webp"
            position="absolute"
            top="-16px"
            left="100%"
            width="122px"
            height="74px"
            objectFit={"contain"}
            className="cloud2"
            alt="cloud"
          />
          <Image
            src="/assets/sun.png"
            position="absolute"
            top="-16px"
            right="100%"
            width="150px"
            height="150px"
            objectFit={"contain"}
            alt="sun"
          />
          <Image
            src="/assets/cloud.webp"
            position="absolute"
            top="100%"
            right="100%"
            width="122px"
            height="74px"
            objectFit={"contain"}
            className="cloud2"
            alt="cloud"
          />
          <Image
            src="/assets/static-cloud.png"
            position="absolute"
            top="100%"
            right="-200px"
            width="180px"
            height="32px"
            objectFit={"contain"}
            alt="cloud"
          />
          <Text fontWeight={"700"} lineHeight="150%">
            Tagline
          </Text>
          <Heading
            as="h1"
            fontSize="48px"
            fontWeight={700}
            maxW="944px"
            textAlign="center"
            lineHeight={"120%"}
          >
            Get Award Winning Russian Books for kids Every Month!
          </Heading>
          <Text
            as="h2"
            fontSize="18px"
            lineHeight={"150%"}
            textAlign={"center"}
            maxW="768px"
            width="100%"
            marginTop="8px"
          >
            Get the top 1% Russian Books For Kids (2-9 years old) Every Month —{" "}
            <span style={{ fontStyle: "italic" }}>
              Curated by child education experts.
            </span>
          </Text>
        </VStack>
        <HStack position="relative">
          <Box
            position="absolute"
            left="-16px"
            top="100%"
            transform="translate(-100%, -50%)"
          >
            <ArrorwRight />
          </Box>
          <Button onClick={() => setIsOpen(true)}>Subscribe Now</Button>
          <Button visual="ghost">
            Learn More <BsChevronRight />
          </Button>
        </HStack>
      </Container>
      <Box position="relative">
        <Image
          src="/assets/astranaut.png"
          position="absolute"
          top="50%"
          right="20%"
          objectFit={"cover"}
          alt="cloud"
        />
        <Image
          src="/assets/cloud.webp"
          position="absolute"
          top="40%"
          left="20%"
          width="122px"
          height="74px"
          objectFit={"contain"}
          className="cloud"
          alt="cloud"
        />
        <Image
          src="/assets/cloud.webp"
          position="absolute"
          top="20%"
          right="20%"
          width="168px"
          height="102px"
          objectFit={"contain"}
          transform="scaleX(-1)"
          className="cloud1"
          alt="cloud"
        />
        <Image src="/assets/hero-image.webp" alt="hero-image" />
      </Box>
    </>
  );
}
