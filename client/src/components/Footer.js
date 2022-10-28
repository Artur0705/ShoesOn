import { Flex, Text, Link } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Flex
      w="full"
      bg="blackAlpha.50"
      minHeight="20vh"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
      justifyContent="center"
      mt="10"
    >
      <Text mb="3">
        Provided by{" "}
        <Link href="/" isExternal color="blue.500">
          AppSeed
        </Link>
      </Text>
      <Text opacity="0.5">ShoesOn UI</Text>
    </Flex>
  );
};

export default Footer;
