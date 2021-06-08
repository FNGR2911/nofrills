const customWidths = {}

for (let i = 1; i <= 12; i++) {
  customWidths[
    `${i}/12-x`
  ] = `calc((100vw - var(--layout-max-width) - var(--grid-gap)) / 2 + var(--layout-max-width) / 12 * ${i} + ( var(--grid-gap) / 2 ))`
}

module.exports = {
  mode: 'jit',
  purge: ['./templates/**/*.twig', './src/js/**/*.js', './components/**/*.twig'],
  darkMode: false,
  corePlugins: {
    container: false,
  },
  theme: {
    extend: {
      spacing: {
        gap: 'var(--grid-gap)',
      },
      fontSize: {
        xsmall: 'var(--typo-size-xsmall)',
        small: 'var(--typo-size-small)',
        base: 'var(--typo-size-base)',
        medium: 'var(--typo-size-medium)',
        large: 'var(--typo-size-large)',
        xlarge: 'var(--typo-size-xlarge)',
      },
      width: {
        max: 'var(--layout-max-width)',
        ...customWidths,
      },
      maxWidth: {
        max: 'var(--layout-max-width)',
      },
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
      },
      fontFamily: {
        default: 'var(--typo-family-default)',
        display: 'var(--typo-family-display)',
      },
      lineHeight: {
        small: 'var(--line-height-small)',
        default: 'var(--line-height-default)',
      },
      spacing: {
        gap: 'var(--grid-gap)',
        xs: 'var(--spacing-xsmall)',
        sm: 'var(--spacing-small)',
        bs: 'var(--spacing-base)',
        md: 'var(--spacing-medium)',
        lg: 'var(--spacing-large)',
        xl: 'var(--spacing-xlarge)',
        '1/12': 'calc(100% / 12)',
        '2/12': 'calc(100% / 12 * 2)',
        '3/12': 'calc(100% / 12 * 3)',
        '4/12': 'calc(100% / 12 * 4)',
        '5/12': 'calc(100% / 12 * 5)',
        '6/12': 'calc(100% / 12 * 6)',
        '7/12': 'calc(100% / 12 * 7)',
        '8/12': 'calc(100% / 12 * 8)',
        '9/12': 'calc(100% / 12 * 9)',
        '10/12': 'calc(100% / 12 * 10)',
        '11/12': 'calc(100% / 12 * 11)',
        full: '100%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
