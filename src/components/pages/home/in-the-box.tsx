import {
  Box,
  VStack,
  HStack,
  Text,
  Flex,
  Image,
  Container,
  Grid,
  Heading,
} from "@chakra-ui/react";
import Car from "@/icons/car";
import Book from "@/icons/book";
import Collection from "@/icons/collection";
import Phone from "@/icons/phone";
import Truck from "@/icons/truck";
import Return from "@/icons/return";
import Cancel from "@/icons/cancel";
import { FaArrowRight } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

import { useModalStore } from "@/store/modal";

function Feature({ children }: { children: React.ReactNode }) {
  return (
    <Flex
      gap="24px"
      alignItems="center"
      fontSize={{ base: "16px", md: "24px" }}
      lineHeight="150%"
      textTransform={"capitalize"}
    >
      {children}
    </Flex>
  );
}

export default function InTheBox() {
  const { setIsOpen } = useModalStore();
  return (
    <Box w="100%" py={{ md: "64px", base: "48px" }} position={"relative"}>
      <Container
        display={"flex"}
        flexDir={"column"}
        gap={{ md: "80px", base: "24px" }}
        maxW="1320px"
      >
        <VStack gap={{ base: "12px" }}>
          <Text
            fontSize={{ base: "14px", md: "16px" }}
            fontWeight={"600"}
            lineHeight={"150%"}
          >
            Tagline
          </Text>
          <HStack justify={"flex-start"}>
            <Flex
              justifyContent={"flex-start"}
              w={"100%"}
              maxW={"700px"}
              flexDir={"column"}
              gap={{ md: "24px", base: "12px" }}
              zIndex={5}
            >
              <Heading
                as="h3"
                fontSize={{ base: "24px", md: "48px" }}
                fontWeight={700}
                lineHeight={"150%"}
                textAlign={"center"}
              >
                What&apos;s In The Box?
              </Heading>
              <Text
                fontSize={{ base: "14px", md: "18px" }}
                fontWeight={"400"}
                lineHeight={"150%"}
                textAlign={"center"}
              >
                Our award-winning early learning program includes personalized
                book selections, tailored to your child's age, interests, and
                developmental needs. It includes:
              </Text>
            </Flex>
            <Image
              position={"absolute"}
              right={{ md: "92px", base: "10px" }}
              top={{ md: "40px", base: "130px" }}
              src={"/assets/rainbow.png"}
              width={{ md: "207px", base: "45px" }}
              height={{ md: "185px", base: "45px" }}
              alt="rainbow"
              transform={{ md: "rotate(0deg)", base: "rotate(-15deg)" }}
              objectFit={"contain"}
              zIndex={0}
            />
          </HStack>
        </VStack>
        <Grid
          templateColumns={{ md: "repeat(2, 1fr)", base: "repeat(1, 1fr)" }}
          gap={{ md: "80px", base: "24px" }}
          position="relative"
        >
          <Image
            src="/assets/butterfly.png"
            position="absolute"
            left="-12px"
            top="-12px"
            transform={"translate(-50%, -50%)"}
            width="83px"
            height="89px"
            objectFit="cover"
            display={{ base: "none", md: "block" }}
          />
          <Image
            src={"/assets/kid.png"}
            alt="kid"
            height={{ md: "auto", base: "305px" }}
            width={{ md: "auto", base: "100%" }}
            rounded="24px"
          />
          <VStack
            alignItems="flex-start"
            gap={"32px"}
            py={{ md: "32px", base: "8px" }}
            justifyContent={"space-between"}
          >
            <VStack alignItems="flex-start" gap={{ base: "16px", md: "24px" }}>
              <Feature>
                <Car /> An original collection of 7-10 playthings
              </Feature>
              <Feature>
                <Book /> 1-3 Books
              </Feature>
              <Feature>
                <Collection /> An approachable, research-backed Play Guide
              </Feature>
              <Feature>
                <Phone /> Access to The Lovevery App with ways to play and
                expert Q&A
              </Feature>
            </VStack>
            <VStack alignItems="flex-start" gap={{ base: "16px", md: "24px" }}>
              <Heading
                as="h3"
                fontSize={{ base: "16px", md: "24px" }}
                fontWeight="500"
                lineHeight="150%"
                mb={"8px"}
              >
                Along with these, we offer
              </Heading>
              <Feature>
                <Truck /> Free shipping
              </Feature>
              <Feature>
                <Return /> Easy Returns
              </Feature>
              <Feature>
                <Cancel /> Cancel Or Skip Any Time
              </Feature>
            </VStack>
            <Button
              width={{ base: "100%", md: "auto" }}
              onClick={() => setIsOpen(true)}
            >
              Start Getting Books Now <FaArrowRight />
            </Button>
          </VStack>
        </Grid>
      </Container>
    </Box>
  );
}
