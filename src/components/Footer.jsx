import { Avatar, Box, Stack, VStack,Text } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Box bgColor={"#001524"} color={"whiteAlpha.700"} minH={"48"} px={"16"} py={["16","8"]}>
        <Stack direction={["column","row"]} h={"full"} alignItems={"center"}>
            <VStack w={"full"} alignItems={["center","flex-start"]}>
                <Text fontWeight={"bold"} color={"#ffecd1"}>About Us</Text>
                <Text fontSize={"sm"} letterSpacing={"widest"} textAlign={["center","left"]} color={"#ffecd1"}>This is the best crypto trading app</Text>

            </VStack>
            <VStack>
                <Avatar boxSize={"20"} mt={["2","0"]} url="../assets/1.jpg"/>
                <Text color={"#ffecd1"}> Founder</Text>
            </VStack>
        </Stack>
    </Box>
  )
}

export default Footer