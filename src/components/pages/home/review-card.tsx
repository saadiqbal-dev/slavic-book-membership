import { Box, Image, Text, Flex, VStack } from "@chakra-ui/react";

export default function ReviewCard({
  text,
  image,
  name,
  position,
}: {
  text: string;
  image: string;
  name: string;
  position: string;
}) {
  return (
    <Box
      padding="32px"
      bg="#333"
      border="1px solid black"
      borderRadius="24px"
      display="flex"
      flexDir="column"
      gap="24px"
      color="white"
      maxW="400px"
      w="100%"
    >
      <Image
        src="/assets/stars.png"
        width="116px"
        height="18.9px"
        objectFit="cover"
        alt="stars"
      />
      <Text fontStyle="italic" fontSize="18px" lineHeight="150% ">
        {text}
      </Text>
      <Flex gap="16px">
        <Image
          src={image}
          width="48px"
          height="48px"
          borderRadius="50%"
          objectFit="cover"
          alt="person"
        />
        <VStack align="flex-start" justifyContent="center" gap="0">
          <Text fontFamily="Roboto" fontWeight="600" lineHeight="150%">
            {name}
          </Text>
          <Text fontFamily="Roboto" lineHeight="150%">
            {position}
          </Text>
        </VStack>
      </Flex>
    </Box>
  );
}
