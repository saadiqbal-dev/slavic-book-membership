import { HStack, Container, Image, Link, Flex, Box } from "@chakra-ui/react";
import { Button } from "./ui/button";

import { FaArrowRight } from "react-icons/fa6";
import { BsChevronDown } from "react-icons/bs";
import { useCallback, useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";

import { useModalStore } from "@/store/modal";
import { AnimatePresence, motion } from "motion/react";

type MenuItem = {
  label: string;
  href?: string;
  items?: MenuItem[];
};

const menuItems: MenuItem[] = [
  {
    label: "Home",
    href: "/#",
  },
  {
    label: "About Us",
    href: "/#",
  },
  {
    label: "Testimonials",
    href: "/#",
  },
  {
    label: "Categories",
    href: "/#",
    items: [
      {
        label: "Books",
        href: "/#",
      },
    ],
  },
];

function MenuLink({ item }: { item: MenuItem }) {
  const [open, setOpen] = useState(false);
  const toggle = useCallback(() => setOpen((prev) => !prev), []);
  return (
    <Box position="relative">
      <Link
        key={`${item.label}`}
        href={item.href}
        onClick={toggle}
        userSelect={"none"}
        fontSize="20px"
        display="flex"
        alignItems="center"
        gap="8px"
        _focus={{
          outline: "none",
        }}
        _hover={{
          opacity: 0.6,
          textDecoration: "none",
        }}
      >
        {item.label} {item.items && <BsChevronDown />}
      </Link>
      <AnimatePresence>
        {item.items && open && (
          <motion.div
            key={`${item.label}-${open}`}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 10 }}
            exit={{ opacity: 0, y: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "absolute",
              top: "100%",
              left: "50%",
              width: "100%",
              minWidth: "200px",
              zIndex: 10,
            }}
            onClick={() => {
              setOpen(false);
            }}
          >
            <Box
              border="1px solid black"
              rounded="24px"
              p="4"
              bg="#fdf4e6"
              transform={"translate(-50%, 10px)"}
            >
              {item.items.map((subitem, index) => (
                <Link
                  key={`${subitem.label}-${index}`}
                  href={subitem.href}
                  w="100%"
                  _focus={{
                    outline: "none",
                  }}
                  _hover={{
                    opacity: 0.6,
                    textDecoration: "none",
                  }}
                >
                  {subitem.label}
                </Link>
              ))}
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
}

export default function MainNav() {
  const [isOpen, setIsOpen] = useState(false);
  const { setIsOpen: setModalOpen } = useModalStore();
  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

  return (
    <HStack borderBottom="1px solid #000" position="relative">
      <Container
        py={{ base: 2, md: 4 }}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        maxW="1320px"
      >
        <Link
          href="/"
          _focus={{
            outline: "none",
          }}
        >
          <Image
            src={"/assets/logo.png"}
            alt="Logo"
            width="64px"
            height="64px"
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
        <Button
          onClick={() => setModalOpen(true)}
          display={{ base: "none", md: "flex" }}
        >
          Get Started <FaArrowRight />
        </Button>

        {/* Mobile Menu Button */}
        <Button
          visual="ghost"
          display={{ base: "flex", md: "none" }}
          onClick={toggle}
          aria-label="Menu"
          zIndex={20}
        >
          {isOpen ? <BiX size={24} /> : <BiMenu size={24} />}
        </Button>
      </Container>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={`motion-${isOpen}-1`}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 10 }}
            exit={{ opacity: 0, y: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              zIndex: 10,
            }}
          >
            <Box
              key={"box"}
              position="absolute"
              bottom="-10px"
              left="50%"
              width="calc(100% - 32px)"
              transform="translate(-50%, 100%)"
              bg="white"
              rounded="24px"
              p="12px 16px"
              border="2px solid #A46804"
              display={{ md: "none", base: "flex" }}
              flexDir={"column"}
              gap="8px"
              alignItems={"flex-start"}
              boxShadow="0px 1px 27.1px 3px rgba(164, 104, 4, 0.15)"
              zIndex={10}
            >
              {menuItems.map((item, index) => (
                <>
                  <Link
                    key={item.label + index}
                    href={item.href}
                    onClick={() => {
                      if (item.items) {
                        return;
                      } else {
                        setIsOpen(false);
                      }
                    }}
                    _focus={{
                      outline: "none",
                    }}
                  >
                    <Button visual="ghost" w="full" justifyContent={"left"}>
                      {item.label}
                      {item.items && <BsChevronDown />}
                    </Button>
                  </Link>
                  {item.items?.map((subitem, index1) => (
                    <Link
                      key={subitem.label + index1}
                      href={subitem.href}
                      onClick={() => {
                        setIsOpen(false);
                      }}
                      _focus={{
                        outline: "none",
                      }}
                    >
                      <Button
                        visual="ghost"
                        w="full"
                        justifyContent={"left"}
                        ms="32px"
                        pt={0}
                      >
                        - {subitem.label}
                      </Button>
                    </Link>
                  ))}
                </>
              ))}
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </HStack>
  );
}
