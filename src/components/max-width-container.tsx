import { Container } from '@chakra-ui/react'

type MaxWidthContainerProps = {
  children: React.ReactNode
}

export default function MaxWidthContainer({ children }: Readonly<MaxWidthContainerProps>) {
  return (
    <Container p="0" maxW="74rem">
      {children}
    </Container>
  )
}
