import { Button } from "@/components/ui/button";
import {
  Box,
  Container,
  Text,
  Heading,
  Flex,
  VStack,
  Grid,
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa6";

function Step({
  count,
  children,
}: {
  count: number;
  children: React.ReactNode;
}) {
  return (
    <VStack>
      <Heading
        position="relative"
        mt="14px"
        fontSize="32px"
        fontWeight={700}
        lineHeight="140%"
      >
        Step 0{count}
        <Box
          position="absolute"
          bottom="100%"
          left="50%"
          fontSize="48px"
          bg="#FDF4E6"
          transform="translateX(-50%)"
        >
          •
        </Box>
      </Heading>
      <Text fontSize="20px" lineHeight="150%" textAlign={"center"}>
        {children}
      </Text>
    </VStack>
  );
}

export default function HowItWorks() {
  return (
    <Box w="100%" pt="112px" pb="148px" position={"relative"}>
      <Container display={"flex"} flexDir={"column"} gap="80px" maxW="1320px">
        <VStack gap="16px">
          <Text fontSize={"16px"} fontWeight={"600"} lineHeight={"150%"}>
            Tagline
          </Text>

          <Flex
            justifyContent={"flex-start"}
            w={"100%"}
            maxW={"618px"}
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
              How it Works
            </Heading>
            <Text
              fontSize={"18px"}
              fontWeight={"400"}
              lineHeight={"150%"}
              textAlign={"center"}
            >
              Explore how we deliver joy to your doorstep every month.
              Understand the magic behind our personalized recommendations.
            </Text>
          </Flex>
          <Button>
            Start Getting Books Now <FaArrowRight />
          </Button>
        </VStack>
        <Box width="100%">
          <Box width="100%" height="3px" bg="black" />
          <Grid templateColumns={"repeat(3, 1fr)"} gap="40px">
            <Step count={1}>Tell us your child&apos; age</Step>
            <Step count={2}>
              Receive two or three curated hardcover books monthly.
            </Step>
            <Step count={3}>
              As your child grows, books advance in difficulty, and your
              feedback improves future selections.
            </Step>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
