import { Box } from '@chakra-ui/react'

type PaddingContainerProps = {
  children: React.ReactNode
}

export default function PaddingContainer({ children }: Readonly<PaddingContainerProps>) {
  return <Box px={{ base: 4, md: 8, lg: 16 }}>{children}</Box>
}
