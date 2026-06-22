export const pagani = {
  slug: 'pagani',
  name: 'Pagani',
  tagline: 'Science is the tool, art is the goal.',
  accentColor: '#B8A070',
  logo: '/src/assets/logos/pagani.png',
  categories: [
    {
      slug: 'hypercar',
      label: 'Hypercars',
      models: [
        {
          name: 'Utopia',
          year: 2024,
          price: 'From $2,200,000',
          tags: ['Gasoline', 'Rear-Wheel Drive', 'Manual'],
          stats: [
            { value: '< 2.8 s', label: '0 – 60 mph' },
            { value: '864 hp', label: 'Max. engine power' },
            { value: '217 mph', label: 'Top speed' },
          ],
        },
        {
          name: 'Huayra R',
          year: 2024,
          price: 'From $3,100,000',
          tags: ['Gasoline', 'Rear-Wheel Drive', 'Manual'],
          stats: [
            { value: '< 2.9 s', label: '0 – 60 mph' },
            { value: '840 hp', label: 'Max. engine power' },
            { value: '238 mph', label: 'Top speed' },
          ],
        },
        {
          name: 'Huayra Codalunga',
          year: 2024,
          price: 'From $7,400,000',
          tags: ['Gasoline', 'Rear-Wheel Drive', 'Automatic'],
          stats: [
            { value: '< 2.8 s', label: '0 – 60 mph' },
            { value: '831 hp', label: 'Max. engine power' },
            { value: '238 mph', label: 'Top speed' },
          ],
        },
      ],
    },
  ],
}
