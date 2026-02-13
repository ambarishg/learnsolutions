import { extendTheme } from '@chakra-ui/react';

const colors = {
  brand: {
    navy: '#0f172a',
    indigo: '#1a365d',
    teal: '#4fd1c5',
    sky: '#38bdf8',
    gold: '#fcd34d'
  }
};

const theme = extendTheme({
  colors,
  fonts: {
    heading: 'Poppins, system-ui, sans-serif',
    body: 'Inter, system-ui, sans-serif'
  },
  styles: {
    global: {
      body: {
        bg: 'brand.navy',
        color: 'white',
        lineHeight: 'tall'
      }
    }
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: '999px'
      }
    }
  }
});

export default theme;
