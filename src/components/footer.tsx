import {Box, Container, Text, VStack} from "@chakra-ui/react";
import {Button} from "@/components/ui/button";
import {FaArrowRight} from "react-icons/fa6";
import {useModalStore} from "@/store/modal";

export default function Footer() {
  const { setIsOpen, setButtonId } = useModalStore();
  return (
    <>
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
              <Text as="span" fontStyle="italic" fontWeight="350">
                Try One Box!
              </Text>
            </Text>
            <Text
              fontSize={{ base: "14px", md: "20px" }}
              fontWeight={"400"}
              lineHeight={"150%"}
              textAlign={"center"}
              maxW={"1052px;"}
            >
              Parents can order a single box as a one-time purchase without
              committing to a monthly subscription. This option allows families
              to test out the quality and value of the books before subscribing.
            </Text>
          </VStack>
          <Button
            w={{ base: "100%", md: "auto" }}
            onClick={() => {
              setIsOpen(true);
              setButtonId('Try One button')
            }}
          >
            Try One Book Now <FaArrowRight />
          </Button>
        </VStack>
      </Container>
      <Box w="100%" py={"24px"} as="footer" borderTop="1px solid black">
        <VStack gap={"32px"} maxW="1320px" mx="auto">
          {new Date().getFullYear()} © Slavic Book Membership
        </VStack>
      </Box>
    </>
  );
}
