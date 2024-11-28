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
import { useEffect, useState } from "react";
import Airtable from "airtable";

export default function SubscriptionModal() {
  const { isOpen, setIsOpen } = useModalStore();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);

  const handleSubmit = async () => {
    if (!email) {
      setError("Please enter your email");
      return;
    }

    // validate email using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email");
      return;
    }

    if (age <= 0) {
      setError("Please enter a valid age");
      return;
    }

    try {
      setIsLoading(true);
      setError("");
      setIsSuccess(false);
      const base = new Airtable({
        apiKey: import.meta.env.VITE_AIRTABLE_API_KEY,
      }).base("apptZnsRzrVRJzN60");

      await base("waitlist").create(
        [
          {
            fields: {
              email: email,
              age: age,
            },
          },
        ],
        (err, records) => {
          if (err) {
            setError("Something went wrong: " + err);
            return;
          }
          console.log(records);
          setEmail("");
          setAge(0);
        },
      );
    } catch (error) {
      setError("Something went wrong: " + error);
    } finally {
      setIsLoading(false);
      setIsSuccess(true);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        setIsSuccess(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isSuccess]);

  return (
    <DialogRoot
      placement="center"
      motionPreset="slide-in-bottom"
      open={isOpen}
      onOpenChange={(e) => setIsOpen(e.open)}
    >
      <DialogContent
        p={{ base: "24px", md: "56px" }}
        borderRadius={"32px"}
        border={"2px solid #DBA247"}
        background={"#FDF4E6"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={{ base: "16px", md: "24px" }}
        w={{ base: "calc(100% - 32px)", md: "auto" }}
      >
        <VStack>
          <Text
            padding={{ md: "8px 24px", base: "4px 24px" }}
            display={"flex"}
            alignItems="center"
            justifyContent="center"
            borderRadius="32px"
            border="1px solid black"
            lineHeight="150%"
            fontSize={{ base: "14px", md: "16px" }}
          >
            Waitlist
          </Text>
          <Heading
            fontWeight="700"
            lineHeight="150%"
            textAlign="center"
            fontSize={{ base: "24px", md: "56px" }}
          >
            Coming Soon!
          </Heading>
        </VStack>
        <VStack>
          <Heading
            fontSize={{ md: "32px", base: "20px" }}
            lineHeight="150%"
            textAlign="center"
          >
            Join our waitlist!
          </Heading>
          <Text
            textAlign="center"
            lineHeight="150%"
            fontWeight="400"
            fontSize={{ base: "14px", md: "20px" }}
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
          px={{ base: "px", md: "24px" }}
        >
          <HStack gap={"8px"}>
            <Image
              src="/assets/group.png"
              alt="group"
              w={{ md: "184px", base: "120px" }}
            />
            <Text
              color="#298100"
              textAlign={"center"}
              fontSize={{ base: "14px", md: "16px" }}
              fontWeight={"400"}
              lineHeight={"150%"}
            >
              + 5264
            </Text>
          </HStack>
          <Text
            textAlign={"center"}
            fontSize={{ base: "14px", md: "16px" }}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Your Children's Age"
            border={"1px solid black"}
            background={"white"}
            width={"100%"}
            borderRadius={"8px"}
            type="number"
            value={age > 0 ? age : ""}
            onChange={(e) => setAge(Number(e.target.value))}
          />

          {error && <Text color="red.500">{error}</Text>}
          {isSuccess && <Text color="green.500">Submitted Successfully!</Text>}

          <Button w={"100%"} mt={"16px"} onClick={() => handleSubmit()}>
            {isLoading ? (
              <>Submitting...</>
            ) : (
              <>
                Join The Waitlist <FaArrowRight />
              </>
            )}
          </Button>
        </Box>
      </DialogContent>
    </DialogRoot>
  );
}
