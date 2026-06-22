export const bentley = {
  slug: 'bentley',
  name: 'Bentley',
  tagline: 'Extraordinary journeys begin here.',
  accentColor: '#8B7355',
  logo: '/src/assets/logos/bentley.png',
  categories: [
    {
      slug: 'gt',
      label: 'Grand Tourers',
      models: [
        {
          name: 'Continental GT Speed',
          year: 2024,
          price: 'From $298,900',
          tags: ['Gasoline', 'All-Wheel Drive', 'Automatic'],
          stats: [
            { value: '3.5 s', label: '0 – 60 mph' },
            { value: '650 hp', label: 'Max. engine power' },
            { value: '208 mph', label: 'Top speed' },
          ],
        },
        {
          name: 'Continental GTC',
          year: 2024,
          price: 'From $278,900',
          tags: ['Gasoline', 'All-Wheel Drive', 'Automatic'],
          stats: [
            { value: '3.7 s', label: '0 – 60 mph' },
            { value: '542 hp', label: 'Max. engine power' },
            { value: '198 mph', label: 'Top speed' },
          ],
        },
      ],
    },
    {
      slug: 'sedan',
      label: 'Sedan',
      models: [
        {
          name: 'Flying Spur Speed',
          year: 2024,
          price: 'From $249,900',
          tags: ['Gasoline', 'All-Wheel Drive', 'Automatic'],
          stats: [
            { value: '3.7 s', label: '0 – 60 mph' },
            { value: '626 hp', label: 'Max. engine power' },
            { value: '207 mph', label: 'Top speed' },
          ],
        },
      ],
    },
    {
      slug: 'suv',
      label: 'SUV',
      models: [
        {
          name: 'Bentayga Speed',
          year: 2024,
          price: 'From $249,100',
          tags: ['Gasoline', 'All-Wheel Drive', 'Automatic'],
          stats: [
            { value: '3.8 s', label: '0 – 60 mph' },
            { value: '626 hp', label: 'Max. engine power' },
            { value: '190 mph', label: 'Top speed' },
          ],
        },
        {
          name: 'Bentayga EWB',
          year: 2024,
          price: 'From $232,300',
          tags: ['Gasoline', 'All-Wheel Drive', 'Automatic'],
          stats: [
            { value: '4.0 s', label: '0 – 60 mph' },
            { value: '542 hp', label: 'Max. engine power' },
            { value: '180 mph', label: 'Top speed' },
          ],
        },
      ],
    },
  ],
}
