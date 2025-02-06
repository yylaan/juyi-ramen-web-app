import type { AppProps } from 'next/app'

import ChakraProvider from '@/components/chakra-provider'
import DefaultSeo from '@/components/default-seo'
import DefaultLayout from '@/layouts/default-layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <DefaultSeo />

      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </ChakraProvider>
  )
}
