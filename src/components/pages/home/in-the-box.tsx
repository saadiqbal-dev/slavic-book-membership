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

function Feature({ children }: { children: React.ReactNode }) {
  return (
    <Flex
      gap="24px"
      alignItems="center"
      fontSize="24px"
      lineHeight="150%"
      textTransform={"capitalize"}
    >
      {children}
    </Flex>
  );
}

export default function InTheBox() {
  return (
    <Box w="100%" py="64px" position={"relative"}>
      <Container display={"flex"} flexDir={"column"} gap="80px" maxW="1320px">
        <VStack>
          <Text fontSize={"16px"} fontWeight={"600"} lineHeight={"150%"}>
            Tagline
          </Text>
          <HStack justify={"flex-start"}>
            <Flex
              justifyContent={"flex-start"}
              w={"100%"}
              maxW={"700px"}
              flexDir={"column"}
              gap={"24px"}
            >
              <Heading
                as="h3"
                fontSize={"48px"}
                fontWeight={"700"}
                lineHeight={"150%"}
                textAlign={"center"}
              >
                What&apos;s In The Box?
              </Heading>
              <Text
                fontSize={"18px"}
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
              right={"92px"}
              top={"40px"}
              src={"/assets/rainbow.png"}
              width={"207px"}
              height={"185px"}
              alt="rainbow"
            />
          </HStack>
        </VStack>
        <Grid
          templateColumns={"repeat(2, 1fr)"}
          gap={"80px"}
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
          />
          <Image src={"/assets/kid.png"} alt="kid" />
          <VStack
            alignItems="flex-start"
            gap={"32px"}
            py="32px"
            justifyContent={"space-between"}
          >
            <VStack alignItems="flex-start" gap="24px">
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
            <VStack alignItems="flex-start" gap="24px">
              <Heading
                as="h3"
                fontSize="24px"
                fontWeight="500"
                lineHeight="150%"
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
            <Button>
              Start Getting Books Now <FaArrowRight />
            </Button>
          </VStack>
        </Grid>
      </Container>
    </Box>
  );
}
