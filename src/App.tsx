import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  Tag,
  Text,
  VStack
} from '@chakra-ui/react';
import { ArrowForwardIcon, CheckIcon } from '@chakra-ui/icons';
import heroLogo from './assets/logo.jpg';
import calmScene from './assets/buddha.jpg';

const offerings = [
  {
    title: 'School Level Notes',
    description:
      'Class-wise and subject-wise notes for Classes 6 to 12 with easy language, exam-focused structure, and classroom-ready formatting.',
    highlights: [
      'Class-wise notes (Class 6 to 12)',
      'Subject-wise coverage',
      'Easy language & exam-oriented format'
    ],
    detail:
      'Subjects include History, Geography, Political Science, Economics, English, Science, Mathematics, and other Arts & Commerce topics.'
  },
  {
    title: 'Board Exam Preparation',
    description:
      'Section-by-section revision kits for CBSE, ICSE, and State Boards—ideal for midterm drills, pre-board prep, and final summative assessments.',
    highlights: [
      'CBSE | ICSE | State Board',
      'Chapter-wise notes',
      'Short & long answers',
      'Important questions',
      'Revision notes & summaries'
    ],
    detail: 'Section-by-section revision kits for CBSE, ICSE, and State Boards—ideal for midterm drills, pre-board prep, and final summative assessments.'
  },
  {
    title: 'College & Graduation Level Notes',
    description:
      'Semester-wise and subject-wise packs that follow university-specific syllabuses, deliver concept clarity, and support UG coursework.',
    highlights: [
      'BA / BSc / BCom notes',
      'Semester-wise & subject-wise material',
      'University-specific syllabus based notes',
      'Concept-clear explanations'
    ]
  },
  {
    title: 'Projects & Assignments',
    description:
      'Ready-to-submit projects for school and college learners with structured content, formatting, and presentation aligned to rubrics.',
    highlights: [
      'School projects (Classes 6 to 12)',
      'College projects & assignments',
      'Ready-to-submit & customized projects',
      'Proper format, content & presentation'
    ]
  },
  {
    title: 'Special Learning Support',
    description:
      'Exam-oriented study materials, last-minute revision aids, and bilingual support for Bengali & English medium students.',
    highlights: [
      'Exam-oriented study materials',
      'Last-minute revision notes',
      'Notes in simple language',
      'Bengali & English medium support'
    ]
  }
];

const deliveryApproach = [
  {
    step: 'Understand',
    detail:
      'Map the board/university, subject mix, and learning gaps so every note aligns to the right level of depth.'
  },
  {
    step: 'Curate',
    detail: 'Craft structured notes, revision signals, and answer patterns that mirror official rubrics.'
  },
  {
    step: 'Deliver',
    detail: 'Share editable documents and summaries that let students revise efficiently and confidently.'
  }
];

const testimonials = [
  {
    name: 'Aarav Mukherjee',
    role: 'Class 12 CBSE, Kolkata',
    quote:
      'LearnSmart helped me cover entire history and economics boards in one weekend with crisp summaries I could memorize.'
  },
  {
    name: 'Priya Singh',
    role: 'BCom Semester 4, Calcutta University',
    quote:
      'The semester-wise packs matched our syllabus perfectly, so I could finally finish my accounts assignment ahead of time.'
  }
];
const impactStats = [
  { label: 'Students supported', value: '4,500+' },
  { label: 'Boards & universities covered', value: '70+' },
  { label: 'Repeat learners', value: '1,200+' }
];

const benefits = [
  'Student-friendly content',
  'Affordable & reliable',
  'Time-saving notes',
  'Quality-checked materials',
  'Personalized academic help'
];

const contactChecklist = ['Class', 'Subject', 'Board / University', 'Type of help needed'];

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
                LearnSmart Solutions • Academic Support Catalog
              </Tag>
              <Heading size="2xl" fontWeight="extrabold" lineHeight="short">
                Well-structured, exam-oriented resources for every board, class, and college syllabus.
              </Heading>
              <Text fontSize="lg" opacity={0.85}>
                LearnSmart Solutions delivers easy-to-understand notes, revision kits, and project-ready assignments so
                students save time and build confidence before every exam.
              </Text>
              <Stack direction={{ base: 'column', sm: 'row' }} spacing={4} pt={2} alignItems="center">
                <Button colorScheme="teal" bg="brand.teal" color="brand.navy" size="lg">
                  Browse the catalog
                </Button>
                <Button
                  size="lg"
                  bg="white"
                  color="brand.navy"
                  fontWeight="bold"
                  boxShadow="0 10px 30px rgba(255, 255, 255, 0.35)"
                  borderRadius="full"
                  border="1px solid rgba(15, 23, 42, 0.2)"
                  _hover={{ bg: 'brand.sky', color: 'brand.navy' }}
                >
                  Message us on WhatsApp
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
                  Academic support shaped by trust, clarity, and measurable progress.
                </Text>
              </Box>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      <Container maxW="6xl" py={10}>
        <VStack spacing={6} textAlign="center">
          <Text fontSize="sm" letterSpacing="wider" color="brand.sky">
            What We Offer
          </Text>
          <Heading size="xl">Academic resources that fit every board, class, and college syllabus.</Heading>
          <Text maxW="3xl" opacity={0.8}>
            Each offering is structured for quick reference, exam practice, and last-minute revision so students can
            stay ahead without chasing fragmented notes.
          </Text>
        </VStack>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} mt={8}>
          {offerings.map((offering) => (
            <Box
              key={offering.title}
              bg="rgba(15,23,42,0.8)"
              borderRadius="2xl"
              p={6}
              borderWidth="1px"
              borderColor="rgba(255,255,255,0.07)"
            >
              <HStack justify="space-between" mb={3}>
                <Heading size="md">{offering.title}</Heading>
                <Tag variant="subtle" colorScheme="whiteAlpha">
                  Catalog
                </Tag>
              </HStack>
              <Text mb={4} opacity={0.85} fontSize="sm">
                {offering.description}
              </Text>
              <Stack spacing={2} mb={3}>
                {offering.highlights.map((highlight) => (
                  <Flex key={highlight} alignItems="center" fontSize="sm" opacity={0.85}>
                    <CheckIcon boxSize={4} color="brand.teal" mr={2} />
                    {highlight}
                  </Flex>
                ))}
              </Stack>
              {offering.detail && (
                <Text fontSize="sm" opacity={0.75}>
                  {offering.detail}
                </Text>
              )}
            </Box>
          ))}
        </SimpleGrid>
      </Container>

      <Container maxW="6xl" py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">
          <Box>
            <Heading size="lg" mb={4}>
              Why students trust LearnSmart Solutions
            </Heading>
            <Text mb={6} opacity={0.8}>
              Every pack is prepared by experienced educators, quality checked, and tuned to exam patterns so revision stays efficient.
            </Text>
            <VStack spacing={3} align="stretch">
              {benefits.map((benefit) => (
                <HStack key={benefit} spacing={3} align="center">
                  <Box
                    borderRadius="full"
                    h={6}
                    w={6}
                    bg="brand.teal"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <CheckIcon boxSize={3} color="brand.navy" />
                  </Box>
                  <Text fontSize="md" opacity={0.9}>
                    {benefit}
                  </Text>
                </HStack>
              ))}
            </VStack>
          </Box>
          <Image
            src={calmScene}
            alt="Focused student learning"
            borderRadius="3xl"
            boxShadow="0 25px 45px rgba(0,0,0,0.35)"
          />
        </SimpleGrid>
      </Container>

      <Container maxW="6xl" py={12}>
        <Flex direction={{ base: 'column', md: 'row' }} gap={8}>
          <Box flex={1}>
            <Heading size="lg" mb={4}>
              How we deliver
            </Heading>
            <Stack spacing={4}>
              {deliveryApproach.map((phase) => (
                <Box key={phase.step}>
                  <Tag size="lg" bg="brand.teal" color="brand.navy" mb={2}>
                    {phase.step}
                  </Tag>
                  <Text opacity={0.8}>{phase.detail}</Text>
                </Box>
              ))}
            </Stack>
          </Box>
          <Box flex={1}>
            <Heading size="lg" mb={4}>
              Voices from the field
            </Heading>
            <Stack spacing={4}>
              {testimonials.map((testimonial) => (
                <Box
                  key={testimonial.name}
                  p={4}
                  bg="rgba(15,23,42,0.75)"
                  borderRadius="2xl"
                  border="1px solid"
                  borderColor="rgba(255,255,255,0.08)"
                >
                  <Text mb={2} fontSize="md" lineHeight="tall">
                    "{testimonial.quote}"
                  </Text>
                  <Text fontWeight="bold">{testimonial.name}</Text>
                  <Text fontSize="sm" opacity={0.7}>
                    {testimonial.role}
                  </Text>
                </Box>
              ))}
            </Stack>
          </Box>
        </Flex>
      </Container>

      <Box bg="rgba(15,23,42,0.6)" py={14}>
        <Container maxW="6xl">
          <Stack spacing={6} textAlign="center">
            <Heading size="lg">How to get materials</Heading>
            <Text maxW="3xl" mx="auto" opacity={0.8}>
              Message us on WhatsApp with the following details so we can send you the right pack quickly.
            </Text>
            <Stack
              direction={{ base: 'column', md: 'row' }}
              justify="center"
              spacing={4}
            >
              <Button
                size="lg"
                bg="brand.teal"
                color="brand.navy"
                fontWeight="bold"
                borderRadius="full"
                px={10}
                boxShadow="0 15px 35px rgba(0, 0, 0, 0.3)"
                rightIcon={<ArrowForwardIcon />}
                _hover={{
                  bg: 'brand.sky',
                  boxShadow: '0 18px 40px rgba(0, 0, 0, 0.45)',
                  transform: 'translateY(-1px)'
                }}
                _focus={{ boxShadow: '0 0 0 4px rgba(79, 209, 197, 0.4)' }}
              >
                Message on WhatsApp
              </Button>
            </Stack>
            <HStack spacing={6} justify="center">
              {contactChecklist.map((item) => (
                <Text key={item} opacity={0.85} fontSize="sm">
                  • {item}
                </Text>
              ))}
            </HStack>
          </Stack>
        </Container>
      </Box>

      <Box as="footer" py={8} borderTop="1px solid" borderColor="rgba(255,255,255,0.1)">
        <Container maxW="6xl">
          <Flex justify="space-between" align="center" direction={{ base: 'column', md: 'row' }} gap={4}>
            <Stack spacing={0}>
              <Text fontWeight="bold">LearnSmart Solutions</Text>
              <Text fontSize="sm" opacity={0.7}>
                Structured academic support for students across boards and colleges.
              </Text>
            </Stack>
            <HStack spacing={6} fontSize="sm" opacity={0.7}>
              <Text>hello@learnsmart.solutions</Text>
              <Text>+91 80 1234 5678</Text>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
}

