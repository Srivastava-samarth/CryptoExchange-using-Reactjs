import { Heading, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const CoinCard = ({ id, name, img, symbol, price, currencySymbol = "₹" }) => (
  <Link to={`/coin/${id}`}>
    <VStack
      w={"52"}
      shadow={"lg"}
      p={"8"}
      borderRadius={"lg"}
      transition={"all 0.3s"}
      m={"4"}
      bgColor={"#ffecd1"}
      css={{
        "&:hover": {
          backgroundColor:"white",
          transform: "scale(1.1)",
        },
      }}
    >
      <Image
        src={img}
        w={"12"}
        h={"12"}
        objectFit={"contain"}
        alt={"Exchange"}
      />
      <Heading size={"md"} noOfLines={1}>
        {symbol}
      </Heading>

      <Text fontSize={"large"} fontWeight={500} noOfLines={1}>{name}</Text>
      <Text fontWeight={500} noOfLines={1}>{price ? `${currencySymbol}${price}` : "NA"}</Text>
    </VStack>
  </Link>
);

export default CoinCard;