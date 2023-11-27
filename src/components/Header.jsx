import { Button, HStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HStack p={"4"} shadow={"base"} bgColor={"blackAlpha.900"}>
      <Button variant={"unstyled"} color={"white"} fontSize={20} css={{
        "&:hover": {
          color:"#ffecd1",
        },
      }}>
        <Link to="/">Home</Link>
      </Button>
      <Button variant={"unstyled"} color={"white"} fontSize={20}  css={{
        "&:hover": {
          color:"#ffecd1",
        },
      }}>
        <Link to="/exchanges">Exchanges</Link>
      </Button>
      <Button variant={"unstyled"} fontSize={20}  color={"white"} css={{
        "&:hover": {
          color:"#ffecd1",
        },
      }}>
        <Link to="/coins">Coins</Link>
      </Button>
    </HStack>
  );
};

export default Header;