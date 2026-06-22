export const volkswagen = {
  slug: 'volkswagen',
  name: 'Volkswagen',
  tagline: 'Das Auto.',
  accentColor: '#1B1F5E',
  logo: '/src/assets/logos/volkswagen.png',
  categories: [
    {
      slug: 'performance',
      label: 'Performance',
      models: [
        {
          name: 'Golf R',
          year: 2024,
          price: 'From $44,640',
          tags: ['Gasoline', 'All-Wheel Drive', 'Manual'],
          stats: [
            { value: '4.7 s', label: '0 – 60 mph' },
            { value: '315 hp', label: 'Max. engine power' },
            { value: '155 mph', label: 'Top speed' },
          ],
        },
        {
          name: 'Golf GTI',
          year: 2024,
          price: 'From $32,995',
          tags: ['Gasoline', 'Front-Wheel Drive', 'Manual'],
          stats: [
            { value: '6.0 s', label: '0 – 60 mph' },
            { value: '241 hp', label: 'Max. engine power' },
            { value: '155 mph', label: 'Top speed' },
          ],
        },
        {
          name: 'Arteon R',
          year: 2024,
          price: 'From $52,995',
          tags: ['Gasoline', 'All-Wheel Drive', 'Automatic'],
          stats: [
            { value: '4.4 s', label: '0 – 60 mph' },
            { value: '315 hp', label: 'Max. engine power' },
            { value: '155 mph', label: 'Top speed' },
          ],
        },
      ],
    },
    {
      slug: 'ev',
      label: 'Electric',
      models: [
        {
          name: 'ID.4 GTX',
          year: 2024,
          price: 'From $54,120',
          tags: ['Electric', 'All-Wheel Drive', 'Automatic'],
          stats: [
            { value: '5.4 s', label: '0 – 60 mph' },
            { value: '295 hp', label: 'Max. engine power' },
            { value: '112 mph', label: 'Top speed' },
          ],
        },
        {
          name: 'ID.5 GTX',
          year: 2024,
          price: 'From $57,995',
          tags: ['Electric', 'All-Wheel Drive', 'Automatic'],
          stats: [
            { value: '5.4 s', label: '0 – 60 mph' },
            { value: '295 hp', label: 'Max. engine power' },
            { value: '112 mph', label: 'Top speed' },
          ],
        },
      ],
    },
  ],
}
