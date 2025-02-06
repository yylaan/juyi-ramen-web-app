import React from 'react'

import { Box, Flex } from '@chakra-ui/react'
import { Roboto_Condensed } from 'next/font/google'

import Footer from '@/components/footer'
import Header from '@/components/header'

const robotoCondensed = Roboto_Condensed({
  variable: '--font-roboto-condensed',
  subsets: ['latin'],
})

type DefaultLayoutProps = {
  children: React.ReactNode
}

export default function DefaultLayout({ children }: Readonly<DefaultLayoutProps>) {
  return (
    <Flex
      direction="column"
      minH="100vh"
      overflow="hidden"
      className={`${robotoCondensed.variable} `}
    >
      <Header />
      <Box as="main" flex="1 0 auto" position="relative" overflow="hidden">
        {children}
      </Box>
      <Footer />
    </Flex>
  )
}
