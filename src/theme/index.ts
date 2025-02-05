import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'

const customConfig = defineConfig({
  globalCss: {
    '*': {
      boxSizing: 'border-box',
      margin: 0,
      padding: 0,
    },
    'html, body': {
      bg: 'white',
      maxWidth: '100vw',
      overflowX: 'hidden',
    },
    body: {
      fontSmooth: 'antialiased',
    },
    a: {
      color: 'inherit',
      textDecoration: 'none',
    },
  },
  theme: {
    tokens: {
      fonts: {
        heading: { value: 'var(--font-poppins)' },
        body: { value: 'var(--font-poppins)' },
      },
      colors: {
        brand: {
          primary: {
            value: '#103288',
          },
          secondary: {
            value: '#F4F7FB',
          },
        },
        lightGray: {
          value: '#95A0AA',
        },
      },
    },
  },
})

export default createSystem(defaultConfig, customConfig)
