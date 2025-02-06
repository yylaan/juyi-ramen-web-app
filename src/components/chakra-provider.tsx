import { ChakraProvider as DefaultChakraProvider } from '@chakra-ui/react'
import { ThemeProvider } from 'next-themes'

import theme from '@/theme'

export default function ChakraProvider(props: React.PropsWithChildren) {
  return (
    <DefaultChakraProvider value={theme}>
      <ThemeProvider attribute="class" disableTransitionOnChange {...props} />
    </DefaultChakraProvider>
  )
}
