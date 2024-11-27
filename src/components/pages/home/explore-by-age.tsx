import { Button } from "@/components/ui/button";
import {
  Container,
  VStack,
  Text,
  Heading,
  Box,
  HStack,
  Image,
  Grid,
} from "@chakra-ui/react";
import ArrorwRight from "./arrow-right";
import { useState } from "react";

function AgeCard({
  image,
  tag,
  title,
  description,
}: {
  image: string;
  tag: string;
  title: string;
  description: string;
}) {
  return (
    <Box
      rounded="24px"
      display={"flex"}
      flexDir={"column"}
      border="1px solid black"
      bg="white"
    >
      <Image
        src={image}
        width="100%"
        height="100%"
        objectFit={"cover"}
        roundedTop="24px"
        maxH="233px"
        alt={title}
      />
      <Box padding="32px">
        <Text fontWeight={700} lineHeight="150%" mb="8px">
          {tag}
        </Text>
        <Heading
          as="h4"
          fontSize="32px"
          fontWeight="700"
          lineHeight={"130%"}
          mb="16px"
        >
          {title}
        </Heading>
        <Text lineHeight={"150%"}>{description}</Text>
      </Box>
    </Box>
  );
}

export default function ExploreByAge() {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <Container
      display={"flex"}
      flexDir={"column"}
      gap={"64px"}
      alignItems="center"
      w="100%"
      py="64px"
      mt="-32px"
      maxW="1320px"
    >
      <VStack gap="24px">
        <Text fontSize={"16px"} fontWeight={"600"} lineHeight={"150%"}>
          Category
        </Text>
        <Heading
          as="h3"
          fontSize={"48px"}
          fontWeight={"700"}
          lineHeight={"150%"}
          textAlign={"center"}
        >
          Explore by Kids Age
        </Heading>
      </VStack>
      <HStack bg="#333" p="24px" borderRadius={"full"} position="relative">
        <Button
          visual={selectedTab === 0 ? "solid" : "dashed"}
          onClick={() => setSelectedTab(0)}
        >
          6-12 Months
        </Button>
        <Button
          visual={selectedTab === 1 ? "solid" : "dashed"}
          onClick={() => setSelectedTab(1)}
        >
          1 Year Old
        </Button>
        <Button
          visual={selectedTab === 2 ? "solid" : "dashed"}
          onClick={() => setSelectedTab(2)}
        >
          2 Years Old
        </Button>
        <Button
          visual={selectedTab === 3 ? "solid" : "dashed"}
          onClick={() => setSelectedTab(3)}
        >
          3 Years Old
        </Button>
        <Button
          visual={selectedTab === 4 ? "solid" : "dashed"}
          onClick={() => setSelectedTab(4)}
        >
          4 Years Old
        </Button>
        <Box
          position="absolute"
          left="100%"
          bottom="100%"
          transform="scaleX(-1)"
          rotate="-45deg"
        >
          <ArrorwRight />
        </Box>
      </HStack>
      <Grid templateColumns={"repeat(3, 1fr)"} gap={"32px"}>
        <AgeCard
          image="/assets/age-box-1.png"
          tag="1-3 Months"
          title="Early Learning Essentials, Books for Tiny Tots"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <AgeCard
          image="/assets/age-box-2.png"
          tag="4-7 Months"
          title="Sensory Stimulation, Books for Curious Minds"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <AgeCard
          image="/assets/age-box-3.png"
          tag="8-12 Months"
          title="Building Blocks of Language, Books for Little Learners"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      </Grid>
    </Container>
  );
}
