import { DefaultSeo as DefaultNextSeo } from 'next-seo'

import SEO from '../../next-seo.config'

function DefaultSeo() {
  return <DefaultNextSeo {...SEO} />
}

export default DefaultSeo
