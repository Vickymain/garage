export const mclaren = {
  slug: 'mclaren',
  name: 'McLaren',
  tagline: 'Relentless pursuit of better.',
  accentColor: '#FF6600',
  logo: '/src/assets/logos/mclaren.png',
  categories: [
    {
      slug: 'supercar',
      label: 'Supercars',
      models: [
        {
          name: 'Artura',
          year: 2024,
          price: 'From $237,500',
          tags: ['Hybrid', 'Rear-Wheel Drive', 'Automatic'],
          stats: [
            { value: '3.0 s', label: '0 – 60 mph' },
            { value: '671 hp', label: 'Max. engine power' },
            { value: '205 mph', label: 'Top speed' },
          ],
        },
        {
          name: '750S',
          year: 2024,
          price: 'From $325,000',
          tags: ['Gasoline', 'Rear-Wheel Drive', 'Automatic'],
          stats: [
            { value: '2.8 s', label: '0 – 60 mph' },
            { value: '740 hp', label: 'Max. engine power' },
            { value: '206 mph', label: 'Top speed' },
          ],
        },
      ],
    },
    {
      slug: 'hypercar',
      label: 'Hypercars',
      models: [
        {
          name: 'W1',
          year: 2025,
          price: 'From $2,100,000',
          tags: ['Hybrid', 'Rear-Wheel Drive', 'Automatic'],
          stats: [
            { value: '< 2.7 s', label: '0 – 60 mph' },
            { value: '1,275 hp', label: 'Max. engine power' },
            { value: '217 mph', label: 'Top speed' },
          ],
        },
        {
          name: 'Solus GT',
          year: 2024,
          price: 'From $3,500,000',
          tags: ['Gasoline', 'Rear-Wheel Drive', 'Automatic'],
          stats: [
            { value: '< 2.5 s', label: '0 – 60 mph' },
            { value: '840 hp', label: 'Max. engine power' },
            { value: '200 mph', label: 'Top speed' },
          ],
        },
      ],
    },
    {
      slug: 'gt',
      label: 'Grand Tourer',
      models: [
        {
          name: 'GT',
          year: 2024,
          price: 'From $213,000',
          tags: ['Gasoline', 'Rear-Wheel Drive', 'Automatic'],
          stats: [
            { value: '3.1 s', label: '0 – 60 mph' },
            { value: '612 hp', label: 'Max. engine power' },
            { value: '203 mph', label: 'Top speed' },
          ],
        },
      ],
    },
  ],
}
