import { DialogContent, DialogRoot } from "@/components/ui/dialog";
import {
  VStack,
  Text,
  Heading,
  HStack,
  Image,
  Input,
  Box,
} from "@chakra-ui/react";
import { useModalStore } from "@/store/modal";
import { Button } from "./ui/button";
import { FaArrowRight } from "react-icons/fa6";

export default function SubscriptionModal() {
  const { isOpen, setIsOpen } = useModalStore();
  return (
    <DialogRoot
      placement="center"
      motionPreset="slide-in-bottom"
      open={isOpen}
      onOpenChange={(e) => setIsOpen(e.open)}
    >
      <DialogContent
        p="56px"
        borderRadius={"32px"}
        border={"2px solid #DBA247"}
        background={"#FDF4E6"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        gap="24px"
      >
        <VStack>
          <Text
            padding="8px 24px"
            display={"flex"}
            alignItems="center"
            justifyContent="center"
            borderRadius="32px"
            border="1px solid black"
            fontSize="16px"
            lineHeight="150%"
          >
            Waitlist
          </Text>
          <Heading
            fontSize="56px"
            fontWeight="700"
            lineHeight="150%"
            textAlign="center"
          >
            Coming Soon!
          </Heading>
        </VStack>
        <VStack>
          <Heading fontSize="32px" lineHeight="150%" textAlign="center">
            Join our waitlist!
          </Heading>
          <Text
            fontSize="20px"
            textAlign="center"
            lineHeight="150%"
            fontWeight="400"
          >
            We&apos;re working hard to go live! Join our waiting list and
            we&apos;ll notify you ASAP
          </Text>
        </VStack>
        <Box
          display={"flex"}
          flexDir={"column"}
          alignItems={"center"}
          gap={"16px"}
          w={"100%"}
          px={"24px"}
        >
          <HStack gap={"8px"}>
            <Image src="/assets/group.png" alt="group" w="184px" />
            <Text
              color="#298100"
              textAlign={"center"}
              fontSize={"16px"}
              fontWeight={"400"}
              lineHeight={"150%"}
            >
              + 5264
            </Text>
          </HStack>
          <Text
            textAlign={"center"}
            fontSize={"16px"}
            fontWeight={"400"}
            lineHeight={"150%"}
          >
            You&apos;re not alone, there are{" "}
            <span
              style={{
                color: "#298100",
              }}
            >
              +5264
            </span>{" "}
            people joined!
          </Text>
          <Input
            placeholder="Email"
            border={"1px solid black"}
            background={"white"}
            borderRadius={"8px"}
            type="email"
          />
          <Input
            placeholder="Your Children's Age"
            border={"1px solid black"}
            background={"white"}
            width={"100%"}
            borderRadius={"8px"}
          />
          <Button w={"100%"} mt={"16px"}>
            Join The Waitlist <FaArrowRight />
          </Button>
        </Box>
      </DialogContent>
    </DialogRoot>
  );
}
