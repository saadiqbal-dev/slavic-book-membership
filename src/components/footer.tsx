import { Container, VStack, Text } from "@chakra-ui/react";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa6";

export default function Footer() {
  return (
    <Container w="100%" py="112px" maxW="1320px">
      <VStack gap={"32px"}>
        <VStack gap={"24px"}>
          <Text
            as="h2"
            fontSize="56px"
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
                fontSize: "56px",
              }}
            >
              Try One Box!
            </span>
          </Text>
          <Text
            fontSize={"20px"}
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
        <Button>
          Try One Book Now <FaArrowRight />
        </Button>
      </VStack>
    </Container>
  );
}
