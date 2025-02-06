import React from 'react'

import { Flex, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import { BsEnvelope, BsInstagram, BsTelephone } from 'react-icons/bs'

import JuyiWhiteLogo from '@/icons/juyi-white-logo'

import MaxWidthContainer from './max-width-container'
import PaddingContainer from './padding-container'

export default function Footer() {
  return (
    <Flex mt="16" pt="24" pb={8} bg="black" align="center">
      <MaxWidthContainer>
        <PaddingContainer>
          <Stack gap={16}>
            <SimpleGrid gridTemplateColumns="1fr 4fr 1fr" alignItems="center">
              <JuyiWhiteLogo boxSize={16} />
              <Text color="white" textAlign="center">
                everything is fresh. nothing is vegetarian or vegan. <br />
                slurping is encouraged. please enjoy the food — and fuck off.
              </Text>
              <Flex gap={4} justifySelf="end">
                <BsInstagram color="white" />
                <BsEnvelope color="white" />
                <BsTelephone color="white" />
              </Flex>
            </SimpleGrid>
            <Text color="white" textAlign="right">
              © {new Date().getFullYear()} Youyi. All rights reserved. <br />
            </Text>
          </Stack>
        </PaddingContainer>
      </MaxWidthContainer>
    </Flex>
  )
}
