import { HStack, Container, Image, Link, Flex, Box } from "@chakra-ui/react";
import { Button } from "./ui/button";
// import { BiMenu } from "react-icons/bi";

import Logo from "../assets/logo.svg";
import { FaArrowRight } from "react-icons/fa6";
import { BsChevronDown } from "react-icons/bs";
import { useCallback, useState } from "react";
import { BiMenu } from "react-icons/bi";

type MenuItem = {
  label: string;
  href?: string;
  items?: MenuItem[];
};

const menuItems: MenuItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/about-us",
  },
  {
    label: "Testimonials",
    href: "/testimonials",
  },
  {
    label: "Categories",
    items: [
      {
        label: "Books",
        href: "/books",
      },
    ],
  },
];

function MenuLink({ item }: { item: MenuItem }) {
  const [open, setOpen] = useState(false);
  const toggle = useCallback(() => setOpen((prev) => !prev), []);
  return (
    <Link
      key={`${item.label}`}
      href={item.href}
      position="relative"
      onClick={toggle}
      userSelect={"none"}
      fontSize="20px"
      display="flex"
      alignItems="center"
      gap="8px"
    >
      {item.label} {item.items && <BsChevronDown />}
      {item.items && open && (
        <Box
          position="absolute"
          left="50%"
          top="100%"
          w="100%"
          minW="200px"
          border="1px solid black"
          p="2"
          bg="#fdf4e6"
          transform={"translateX(-50%)"}
          userSelect={"none"}
        >
          {item.items.map((subitem, index) => (
            <Link key={`${subitem.label}-${index}`} href={subitem.href}>
              {subitem.label}
            </Link>
          ))}
        </Box>
      )}
    </Link>
  );
}

export default function MainNav() {
  return (
    <HStack borderBottom="1px solid #000">
      <Container
        py={{ base: 2, md: 4 }}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        maxW="1320px"
      >
        <Link asChild href="/">
          <Image
            src={Logo}
            alt="Logo"
            width="84px"
            height="36px"
            p="0px 7.333px 0px 6.667px"
            objectFit="contain"
          />
        </Link>

        {/* Desktop Middle */}
        <Flex
          gap="8"
          fontSize="5"
          lineHeight="150%"
          display={{ base: "none", md: "flex" }}
        >
          {menuItems.map((item, index) => (
            <MenuLink item={item} key={index} />
          ))}
        </Flex>

        {/* Desktop Right */}
        <Button display={{ base: "none", md: "flex" }}>
          Get Started <FaArrowRight />
        </Button>

        {/* Mobile Menu Button */}
        <Button visual="ghost" display={{ base: "flex", md: "none" }}>
          <BiMenu size={24} />
        </Button>
      </Container>
    </HStack>
  );
}
