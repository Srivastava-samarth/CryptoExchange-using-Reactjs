import { Box,Image,Text } from '@chakra-ui/react'
import React from 'react'
import btnSrc from '../assets/btc.png'
import {motion} from 'framer-motion'

const Home = () => {
  return (
    <Box bgColor={"#001524"} w={"full"} h={"85vh"}>
      <motion.div style={{
        height:"80vh",
      }}
      animate={{
        translateY:"-25px",
      }}
      transition={{
        duration:1,
        repeat:Infinity,
        repeatType:"reverse"
      }}>
      <Image w={"full"} h={"full"} objectFit={"contain"} src={btnSrc} filter={"grayscale(1)"} />
      </motion.div>
      <Text fontSize={"6xl"} textAlign={"center"} fontWeight={900} mt={"-25"} color={"#ffecd1"}>XCRYPTO </Text>
    </Box>
  )
}

export default Home