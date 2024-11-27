import { Container, VStack, Text } from "@chakra-ui/react";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa6";

export default function Footer() {
  return (
    <Container w="100%" py={{ md: "112px", base: "48px" }} maxW="1320px">
      <VStack gap={"32px"}>
        <VStack gap={"24px"}>
          <Text
            as="h2"
            fontSize={{ base: "24px", md: "56px" }}
            fontWeight={"700"}
            lineHeight={"120%"}
            textAlign={"center"}
            maxW="768px"
            width="100%"
            marginTop="8px"
          >
            Not Ready for a Subscription? —{" "}
            <span
              style={{
                fontStyle: "italic",
                fontWeight: "350",
              }}
            >
              Try One Box!
            </span>
          </Text>
          <Text
            fontSize={{ base: "14px", md: "20px" }}
            fontWeight={"400"}
            lineHeight={"150%"}
            textAlign={"center"}
            maxW={"1052px;"}
          >
            Parents can order a single box as a one-time purchase without
            committing to a monthly subscription. This option allows families to
            test out the quality and value of the books before subscribing.
          </Text>
        </VStack>
        <Button w={{ base: "100%", md: "auto" }}>
          Try One Book Now <FaArrowRight />
        </Button>
      </VStack>
    </Container>
  );
}