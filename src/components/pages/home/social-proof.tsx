import {
  Container,
  Text,
  Heading,
  HStack,
  VStack,
  Image,
  Box,
  Flex,
} from "@chakra-ui/react";

import ReviewCard from "./review-card";

import EmblaCarousel from "./EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";

const OPTIONS: EmblaOptionsType = { dragFree: false, loop: true };

type Review = {
  text: string;
  name: string;
  image: string;
  position: string;
};

const reviews: Review[] = [
  {
    text: "This subscription box is a goldmine for our children! The books are beautifully illustrated, engaging, and culturally relevant. We're so grateful for this opportunity to expose our kids to the rich world of Russian literature.",
    name: "Name Surname",
    image: "/assets/person.png",
    position: "Position, Company Name",
  },
  {
    text: "With this subscription, we don't have to worry about finding the right books. They arrive at our doorstep, ready to be enjoyed. It's a hassle-free way to build a beautiful library of Russian children's books.",
    name: "Name Surname",
    image: "/assets/person.png",
    position: "Position, Company Name",
  },
  {
    text: "The books we receive are always a delightful surprise. The curation team clearly understands our children's interests and reading levels. It's like having a personal book concierge!",
    name: "Name Surname",
    image: "/assets/person.png",
    position: "Position, Company Name",
  },
  {
    text: "This subscription box is the perfect gift for any child. It's a gift that keeps on giving, month after month. We highly recommend it to any family looking to enrich their child's life.",
    name: "Name Surname",
    image: "/assets/person.png",
    position: "Position, Company Name",
  },
  {
    text: "Our child has become an avid reader thanks to this subscription box. The high-quality books and engaging stories have sparked their imagination and fostered a love of learning.",
    name: "Name Surname",
    image: "/assets/person.png",
    position: "Position, Company Name",
  },

  {
    text: "This subscription box is a wonderful way to connect our children with their Russian heritage. The books not only entertain but also educate, teaching them about Russian culture, history, and language.",
    name: "Name Surname",
    image: "/assets/person.png",
    position: "Position, Company Name",
  },
];

export default function SocialProof() {
  return (
    <Box
      bg="white"
      w="100%"
      mt="-32px"
      pb="32px"
      position="relative"
      overflow={"clip"}
    >
      <Image
        src="/assets/alphabet-bg.png"
        width="100%"
        maxW="1550px"
        height="100%"
        objectFit="contain"
        alt="importance-bg"
        position="absolute"
        top="0"
        left="50%"
        transform={"translateX(-50%)"}
      />
      <Container
        paddingY="72px"
        display={"flex"}
        alignItems={"center"}
        gap="80px"
        flexDir={"column"}
        maxW="1320px"
      >
        <HStack position="relative">
          <Image
            src="/assets/planet.png"
            width={{ base: "90px", md: "168.5px" }}
            height={{ base: "90px", md: "168.5px" }}
            objectFit={"cover"}
            alt="planet"
            position={{ base: "absolute", md: "relative" }}
            left="0"
            top="-58px"
          />
          <Image
            src="/assets/pencil-blocks.png"
            width="168.5px"
            height="168.5px"
            objectFit={"cover"}
            alt="pencil blocks"
            position="absolute"
            top="64px"
            left="100%"
          />
          <VStack gap={{ base: "20px", md: "24px" }}>
            <Text
              fontWeight={"700"}
              lineHeight="150%"
              fontSize={{ base: "14px", md: "16px" }}
            >
              Social Proof
            </Text>
            <Heading
              as="h2"
              fontSize={{ base: "24px", md: "48px" }}
              fontWeight={700}
              maxW="770px"
              textAlign="center"
              lineHeight={"120%"}
            >
              Thousands of trusted reviews from people like you
            </Heading>
            <Text fontSize={{ base: "14px", md: "18px" }} lineHeight="150%">
              Over 5 million Russian Books shipped
            </Text>
          </VStack>
        </HStack>
        {/* Desktop */}
        <HStack
          alignItems={"flex-start"}
          justifyContent={"center"}
          gap="32px"
          w="100%"
          display={{ base: "none", md: "flex" }}
          flexWrap={"wrap"}
        >
          <Flex flexShrink={0} flexDir={"column"} gap="32px">
            {reviews.slice(0, 2).map((item, index) => (
              <ReviewCard
                name={item.name}
                text={item.text}
                image={item.image}
                position={item.position}
                key={index}
              />
            ))}
          </Flex>
          <Flex flexShrink={0} flexDir={"column"} gap="32px">
            {reviews.slice(2, 4).map((item, index) => (
              <ReviewCard
                name={item.name}
                text={item.text}
                image={item.image}
                position={item.position}
                key={index}
              />
            ))}
          </Flex>
          <Flex flexShrink={0} flexDir={"column"} gap="32px">
            {reviews.slice(4, 6).map((item, index) => (
              <ReviewCard
                name={item.name}
                text={item.text}
                image={item.image}
                position={item.position}
                key={index}
              />
            ))}
          </Flex>
        </HStack>

        {/* Mobile */}
        <Box display={{ base: "block", md: "none" }}>
          <EmblaCarousel
            slides={reviews.map((item, index) => (
              <ReviewCard
                name={item.name}
                text={item.text}
                image={item.image}
                position={item.position}
                key={index}
                fullWidth
              />
            ))}
            options={OPTIONS}
          />
        </Box>
      </Container>
    </Box>
  );
}
