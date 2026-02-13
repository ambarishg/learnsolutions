import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Grid,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Tag,
  VStack
} from '@chakra-ui/react';
import { ArrowForwardIcon, CheckIcon } from '@chakra-ui/icons';
import heroLogo from './assets/logo.jpg';
import calmScene from './assets/buddha.jpg';

const trainingPrograms = [
  {
    title: 'Strategic Communication Foundations',
    description:
      'Align leadership narratives, create executive briefings, and practice persuasive storytelling so every decision dialogue gains clarity.',
    outcomes: ['Story-oriented operating rhythms', 'Executive briefing kits', 'Narratives tied to measurable progress'],
    audience: 'Leaders, change agents'
  },
  {
    title: 'Influence & Facilitation Labs',
    description:
      'Facilitation labs, coaching rounds, and psychological-safety rituals that help your teams hold high-stakes conversations with confidence.',
    outcomes: ['High-stakes facilitation playbooks', 'Peer-to-peer coaching diagnostics', 'Impact statements for sponsors'],
    audience: 'People leaders, internal trainers'
  },
  {
    title: 'Collaborative Resilience & Coaching',
    description:
      'Cohort-based programs mix live simulations, blended coaching, and micro-credentials that scale across regions.',
    outcomes: ['Resilience scorecards', 'Peer coaching pathways', 'Mentored reflection sessions'],
    audience: 'Trainers, talent leaders'
  }
];

const methodology = [
  { step: 'Discover', detail: 'Map stakeholder priorities and team dynamics to pinpoint communication gaps.' },
  { step: 'Design', detail: 'Co-create experiential labs, facilitation scripts, and feedback rituals.' },
  { step: 'Deliver', detail: 'Run simulations, peer coaching, and reinforcement loops that scale.' }
];

const testimonials = [
  {
    name: 'Roshni Patel',
    role: 'VP, Transformation, LumiPower',
    quote:
      'The sessions reset our leadership rhythm, turning disparate meetings into collaborative forums that drive action.'
  },
  {
    name: 'Imran Singh',
    role: 'Chief People Officer, NorthWind Energy',
    quote:
      'Every cohort has delivered momentum—teams now enter high-stakes rooms with clarity and move decisions forward confidently.'
  }
];
const impactStats = [
  { label: 'Live cohorts led', value: '12+' },
  { label: 'Enterprise leaders prepared', value: '380+' },
  { label: 'Repeat learning partners', value: '9 organizations' }
];

export default function App() {
  return (
    <Box minH="100vh" bg="brand.navy" color="white">
      <Box
        bgImage="radial-gradient(circle at top right, rgba(79, 209, 197, 0.2), transparent 40%),
          linear-gradient(135deg, rgba(26, 54, 93, 0.95), rgba(15, 23, 42, 0.95))"
        pb={20}
        pt={12}
      >
        <Container maxW="6xl">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">
            <VStack align="stretch" spacing={6} textAlign="left">
              <Tag alignSelf="flex-start" colorScheme="teal" variant="solid" bg="brand.teal" color="brand.navy">
                Communication & Transformation Studio
              </Tag>
              <Heading size="2xl" fontWeight="extrabold" lineHeight="short">
                Modern training for teams who need confident communication across complex change.
              </Heading>
              <Text fontSize="lg" opacity={0.85}>
                Rooted in decades of enterprise leadership, we help utility and industrial teams
                translate complex change programs into repeatable learning experiences.
              </Text>
              <Stack direction={{ base: 'column', sm: 'row' }} spacing={4} pt={2} alignItems="center">
                <Button colorScheme="teal" bg="brand.teal" color="brand.navy" size="lg">
                  Book a discovery workshop
                </Button>
                <Button variant="outline" borderColor="brand.sky" size="lg">
                  View curriculum
                </Button>
              </Stack>
              <HStack spacing={6} pt={4} alignItems="center">
                {impactStats.map((stat) => (
                  <VStack key={stat.label} spacing={1} align="flex-start">
                    <Heading size="md" color="brand.gold">
                      {stat.value}
                    </Heading>
                    <Text fontSize="sm" opacity={0.8}>
                      {stat.label}
                    </Text>
                  </VStack>
                ))}
              </HStack>
            </VStack>
            <Box position="relative" textAlign="right">
              <Image
                src={heroLogo}
                alt="Signature logo"
                borderRadius="2xl"
                border="4px solid"
                borderColor="rgba(255,255,255,0.2)"
                boxShadow="0 25px 45px rgba(0,0,0,0.45)"
              />
              <Box
                position="absolute"
                right={-4}
                bottom={-4}
                borderRadius="3xl"
                p={4}
                bg="rgba(15,23,42,0.9)"
                border="1px solid"
                borderColor="rgba(255,255,255,0.1)"
              >
                <Text fontSize="md" opacity={0.8}>
                  Curricula crafted for learning agility, measured by outcomes.
                </Text>
              </Box>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      <Container maxW="6xl" py={10}>
        <VStack spacing={6} textAlign="center">
          <Text fontSize="sm" letterSpacing="wider" color="brand.sky">
            Immersive programs
          </Text>
          <Heading size="xl">Curriculum built for enterprise change.</Heading>
          <Text maxW="3xl" opacity={0.8}>
            Each cohort blends peer coaching, live labs, and practical playbooks so your teams gain both
            fluency and measurable progress in their change programs.
          </Text>
        </VStack>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} mt={8}>
          {trainingPrograms.map((program) => (
            <Box key={program.title} bg="rgba(15,23,42,0.8)" borderRadius="2xl" p={6} borderWidth="1px" borderColor="rgba(255,255,255,0.07)">
              <HStack justify="space-between" mb={3}>
                <Heading size="md">{program.title}</Heading>
                <Tag variant="subtle" colorScheme="whiteAlpha">
                  {program.audience}
                </Tag>
              </HStack>
              <Text mb={4} opacity={0.8}>
                {program.description}
              </Text>
              <Stack spacing={2}>
                {program.outcomes.map((outcome) => (
                  <Flex key={outcome} alignItems="center" fontSize="sm" opacity={0.85}>
                    <CheckIcon boxSize={4} color="brand.teal" mr={2} />
                    {outcome}
                  </Flex>
                ))}
              </Stack>
            </Box>
          ))}
        </SimpleGrid>
      </Container>

      <Container maxW="6xl" py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">
          <Box>
            <Heading size="lg" mb={4}>
              Learning with measurable rigor.
            </Heading>
            <Text mb={4} opacity={0.8}>
              We map every cohort to measurable outcomestime to live models, revenue influence, and a culture of
              continual upskilling.
            </Text>
            <Stack spacing={4}>
              {methodology.map((phase) => (
                <Flex key={phase.step} align="center">
                  <Box
                    borderRadius="full"
                    h={10}
                    w={10}
                    bg="rgba(255,255,255,0.1)"
                    border="1px solid"
                    borderColor="rgba(255,255,255,0.2)"
                    mr={4}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Text fontWeight="bold">{phase.step.slice(0, 1)}</Text>
                  </Box>
                  <Box>
                    <Text fontWeight="bold">{phase.step}</Text>
                    <Text fontSize="sm" opacity={0.7}>
                      {phase.detail}
                    </Text>
                  </Box>
                </Flex>
              ))}
            </Stack>
          </Box>
          <Image
            src={calmScene}
            alt="Contemplative learning"
            borderRadius="3xl"
            boxShadow="0 25px 45px rgba(0,0,0,0.35)"
          />
        </SimpleGrid>
      </Container>

      <Container maxW="6xl" py={12}>
        <VStack spacing={6} textAlign="center">
          <Text fontSize="sm" letterSpacing="widest" color="brand.sky">
            Voices from the field
          </Text>
          <Heading size="xl">Trusted by leaders delivering complex transformations.</Heading>
        </VStack>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} mt={8}>
          {testimonials.map((testimonial) => (
            <Box
              key={testimonial.name}
              bg="rgba(15,23,42,0.9)"
              p={6}
              borderRadius="2xl"
              border="1px solid"
              borderColor="rgba(255,255,255,0.1)"
            >
              <Text mb={4} fontSize="lg" lineHeight="tall">
                "{testimonial.quote}"
              </Text>
              <Text fontWeight="bold">{testimonial.name}</Text>
              <Text fontSize="sm" opacity={0.7}>
                {testimonial.role}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>

      <Box bg="rgba(15,23,42,0.6)" py={14}>
        <Container maxW="6xl">
          <Stack spacing={6} textAlign="center">
            <Heading size="lg">Design a learning journey that sticks.</Heading>
            <Text maxW="3xl" mx="auto" opacity={0.8}>
              Ready-made modules, live coaching, and our proprietary capability blueprint help your training
              company shift from one-off sessions to a disciplined learning fabric that scales.
            </Text>
            <Button size="lg" colorScheme="teal" rightIcon={<ArrowForwardIcon />} alignSelf="center">
              Schedule a strategy call
            </Button>
          </Stack>
        </Container>
      </Box>

      <Box as="footer" py={8} borderTop="1px solid" borderColor="rgba(255,255,255,0.1)">
        <Container maxW="6xl">
          <Flex justify="space-between" align="center" direction={{ base: 'column', md: 'row' }} gap={4}>
            <Stack spacing={0}>
              <Text fontWeight="bold">Elevate Consulting</Text>
              <Text fontSize="sm" opacity={0.7}>
                Trusted training partner for enterprise leaders driving change.
              </Text>
            </Stack>
            <HStack spacing={6} fontSize="sm" opacity={0.7}>
              <Text>hello@elevate.training</Text>
              <Text>+91 80 1234 5678</Text>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
}
