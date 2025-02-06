import {
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Container,
  VStack,
  HStack,
  List,
} from '@chakra-ui/react'

import MaxWidthContainer from '@/components/max-width-container'
import PaddingContainer from '@/components/padding-container'

function ImageGrid() {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 8, md: 16 }}>
      <Image alt="" src="https://picsum.photos/2000/3000" />
      <Image alt="" src="https://picsum.photos/2000/3000" mt={24} />
    </SimpleGrid>
  )
}

function ExplainerText({ children }: { children: React.ReactNode }) {
  return (
    <Text whiteSpace="pretty" textAlign="center" fontWeight="light" fontSize={24}>
      {children}
    </Text>
  )
}

function RulesText({ children }: { children: React.ReactNode }) {
  return (
    <Text whiteSpace="pretty" fontWeight="light" fontSize={24}>
      {children}
    </Text>
  )
}

function MenuPricingText({ children }: { children: React.ReactNode }) {
  return (
    <Text as="span" fontSize={16} fontStyle="italic">
      {children}
    </Text>
  )
}

function Explainer() {
  return (
    <Container maxW={800} justifyItems="center">
      <Heading as="h2" size="3xl" p={8}>
        WHAT WE DO
      </Heading>
      <Stack>
        <ExplainerText>we offer exciting food at a fair price.</ExplainerText>
        <ExplainerText>
          we strive to minimize food waste by sourcing local surplus ingredients.
        </ExplainerText>
        <ExplainerText>everything is fresh. nothing is vegetarian or vegan.</ExplainerText>
      </Stack>
      <Image alt="" src="https://picsum.photos/2000/1400" pt={16} />
    </Container>
  )
}

function HouseRules() {
  return (
    <Container maxW={800}>
      <Heading as="h2" size="3xl" p={8} textAlign="center">
        RULES
      </Heading>
      <Stack align="center">
        <List.Root as="ol" gap={4}>
          <List.Item>
            <RulesText>be on time and respect other guests.</RulesText>
          </List.Item>
          <List.Item>
            <RulesText>don&apos;t waste food.</RulesText>
          </List.Item>
          <List.Item>
            <RulesText>finish your food in a reasonable amount of time</RulesText>
            <RulesText>to let everyone enjoy it.</RulesText>
          </List.Item>
          <List.Item>
            <RulesText>
              respect the food. it&apos;s here for you, not the other way around.
            </RulesText>
          </List.Item>
          <List.Item>
            <RulesText>no strong parfumes or pets.</RulesText>
          </List.Item>
          <List.Item>
            <RulesText>no children unless agreed upon in advance.</RulesText>
          </List.Item>
          <List.Item>
            <RulesText>
              all dishes contain meat and/or seafood. no exceptions will be made.
            </RulesText>
          </List.Item>
        </List.Root>
      </Stack>

      <Image alt="" src="https://picsum.photos/2000/1400" pt={16} />
    </Container>
  )
}

function Menu() {
  return (
    <Container maxW={800} justifyItems="center">
      <Stack gap={16}>
        <VStack>
          <HStack>
            <Heading as="h3" size="3xl">
              RAMEN
            </Heading>
            <MenuPricingText>14</MenuPricingText>
          </HStack>
          <VStack>
            <ExplainerText>SHIO / SHOYU</ExplainerText>
            <HStack>
              <ExplainerText>TORI PAITAN</ExplainerText>
              <MenuPricingText>+2</MenuPricingText>
            </HStack>
            <HStack>
              <ExplainerText>MONTHLY SPECIAL</ExplainerText>
              <MenuPricingText>+2</MenuPricingText>
            </HStack>
          </VStack>
          <Text fontWeight="light" pt={2}>
            larger ramen portions are free upon request, but please finish it all.
          </Text>
        </VStack>
        <VStack>
          <HStack>
            <Heading as="h3" size="3xl">
              DRINKS
            </Heading>
            <MenuPricingText>3</MenuPricingText>
          </HStack>
          <VStack>
            <ExplainerText>SODA - COLD</ExplainerText>
            <HStack>
              <ExplainerText>TEA - WARM</ExplainerText>
              <MenuPricingText>-3</MenuPricingText>
            </HStack>
            <HStack>
              <ExplainerText>TEA - COLD</ExplainerText>
            </HStack>
          </VStack>
        </VStack>
      </Stack>
    </Container>
  )
}

export default function Home() {
  return (
    <MaxWidthContainer>
      <PaddingContainer>
        <Stack gap={16}>
          <Stack py={16} gap={24}>
            <Heading as="h1" size="6xl">
              exciting ramen, good price.
            </Heading>
            <ImageGrid />
          </Stack>
          <Explainer />
          <HouseRules />
          <Menu />
        </Stack>
      </PaddingContainer>
    </MaxWidthContainer>
  )
}
