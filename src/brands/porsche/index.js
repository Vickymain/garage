export const porsche = {
  slug: 'porsche',
  name: 'Porsche',
  tagline: 'There is no substitute.',
  accentColor: '#C8102E',
  logo: '/src/assets/logos/porsche.png',
  categories: [
    {
      slug: 'sports',
      label: 'Sports Cars',
      models: [
        { name: '911 Carrera', year: 2024 },
        { name: '911 Turbo S', year: 2024 },
        { name: '718 Cayman', year: 2024 },
      ],
    },
    {
      slug: 'suv',
      label: 'SUVs',
      models: [
        { name: 'Cayenne', year: 2024 },
        { name: 'Macan', year: 2024 },
      ],
    },
    {
      slug: 'ev',
      label: 'Electric',
      models: [
        { name: 'Taycan', year: 2024 },
        { name: 'Macan EV', year: 2024 },
      ],
    },
  ],
}
