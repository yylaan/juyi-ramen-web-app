import { DefaultSeoProps } from 'next-seo'

const config: DefaultSeoProps = {
  title: 'Cachup',
  titleTemplate: "%s | Let's compose good communication.",
  defaultTitle: 'Cachup',
  openGraph: {
    type: 'website',
    locale: 'en_EN',
    url: 'https://cachup.app',
    siteName: 'Cachup',
  },
}

export default config
