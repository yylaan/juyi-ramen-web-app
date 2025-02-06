import React from 'react'

import { Flex, HStack, Link } from '@chakra-ui/react'

import MaxWidthContainer from '@/components/max-width-container'
import PaddingContainer from '@/components/padding-container'
import JuyiLogo from '@/icons/juyi-logo'

function NavigationLink({ label, href }: { label: string; href?: string }) {
  return (
    <Link href={href} fontFamily="Roboto Condensed" fontWeight="light" fontSize={18}>
      {label}
    </Link>
  )
}

export default function Header() {
  return (
    <Flex py="4" align="center" w="100%" position="sticky" zIndex="sticky" bg="brand.primary">
      <MaxWidthContainer>
        <PaddingContainer>
          <Flex justify="space-between" align="center" w="100%">
            <JuyiLogo boxSize={16} />
            <HStack gap={16}>
              <NavigationLink label="about" href="/about" />
              <NavigationLink label="menu" href="/menu" />
              <NavigationLink label="contact" href="/contact" />
            </HStack>
          </Flex>
        </PaddingContainer>
      </MaxWidthContainer>
    </Flex>
  )
}
