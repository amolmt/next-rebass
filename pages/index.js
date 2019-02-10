import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import {Box,Card,Image,Heading,Text} from 'rebass'
import '../styles/main.scss'

const Home = () => (
  <div>
    <Head title="Home" />
    <Box width={256}>
  <Card
    p={1}
    borderRadius={2}
    boxShadow='0 0 16px rgba(0, 0, 0, .25)'>
    <Image src="" />
    <Box px={2}>
      <Heading as='h3'>
        Card
      </Heading>
      <Text fontSize={0}>
        Small meta text
      </Text>
    </Box>
  </Card>
</Box>
  </div>
)

export default Home
