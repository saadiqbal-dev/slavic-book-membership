import {
  Box,
  Container,
  Grid,
  Heading,
  Text,
  VStack,
  Image,
} from "@chakra-ui/react";

export default function Importance() {
  return (
    <Box bg="white" w="100%" py="112px" position="relative" overflow="clip">
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
      <Image
        src="/assets/plane.png"
        width="400px"
        left={0}
        top={"42px"}
        position="absolute"
        objectFit="contain"
        alt="plane"
      />
      <Container
        display={"flex"}
        flexDir={"column"}
        gap={"80px"}
        alignItems="center"
        maxW="1320px"
      >
        <VStack gap="24px" position={"relative"}>
          <Image
            src="/assets/planet-2.png"
            position="absolute"
            alt="planet"
            left="100%"
            top="0"
            transform={"translateY(-50%)"}
            width="168px"
            height="168px"
            objectFit={"cover"}
          />
          <Heading
            as="h3"
            fontSize={"48px"}
            fontWeight={"700"}
            lineHeight={"150%"}
            textAlign={"center"}
          >
            Why It's Important?
          </Heading>
          <Text
            fontSize={"18px"}
            fontWeight={"400"}
            lineHeight={"150%"}
            textAlign={"center"}
            maxW="836px"
          >
            Invest now for the greatest impact on your child&apos;s future. 90%
            Ninety percent of your child's physical brain growth occurs by age
            5.
          </Text>
        </VStack>
        <Grid
          templateColumns={"repeat(2, 1fr)"}
          gap={"12px"}
          position="relative"
        >
          <Image
            src="/assets/importance-1.png"
            width="100%"
            height="100%"
            objectFit="cover"
            rounded="24px"
            alt="importance-1"
          />
          <Image
            position={"absolute"}
            left={"100%"}
            bottom={"0"}
            transform="translateX(20px)"
            src={"/assets/rainbow.png"}
            width={"207px"}
            height={"185px"}
            alt="rainbow"
          />
          <Grid
            templateColumns="repeat(2, 1fr)"
            templateRows="repeat(3, 1fr)"
            gap="12px"
          >
            <Image
              src="/assets/importance-2.png"
              width="100%"
              height="100%"
              objectFit="cover"
              rounded="24px"
              alt="importance-2"
            />
            <Image
              src="/assets/importance-3.png"
              width="100%"
              height="100%"
              objectFit="cover"
              rounded="24px"
              alt="importance-3"
            />
            <Image
              src="/assets/importance-4.png"
              width="100%"
              height="100%"
              objectFit="cover"
              gridColumn="span 2"
              gridRow="span 2"
              rounded="24px"
              alt="importance-4"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
