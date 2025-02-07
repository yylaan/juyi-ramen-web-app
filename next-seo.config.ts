import { DefaultSeoProps } from 'next-seo'

const config: DefaultSeoProps = {
  title: 'JUYI RAMEN',
  titleTemplate: '%s | Exciting ramen, great price.',
  defaultTitle: 'JUYI RAMEN',
  openGraph: {
    type: 'website',
    locale: 'en_EN',
    url: 'https://www.juyiramen.com',
    siteName: 'JUYI RAMEN',
  },
}

export default config
