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
        {
          name: '911 Carrera',
          year: 2024,
          price: 'From $135,500',
          tags: ['Gasoline', 'Rear-Wheel Drive', 'Automatic'],
          stats: [
            { value: '3.9 s', label: '0 – 60 mph' },
            { value: '388 hp', label: 'Max. engine power' },
            { value: '183 mph', label: 'Top speed' },
          ],
        },
        {
          name: '911 Carrera T',
          year: 2024,
          price: 'From $148,000',
          tags: ['Gasoline', 'Rear-Wheel Drive', 'Manual'],
          stats: [
            { value: '4.3 s', label: '0 – 60 mph' },
            { value: '388 hp', label: 'Max. engine power' },
            { value: '183 mph', label: 'Top speed' },
          ],
        },
        {
          name: '911 Turbo S',
          year: 2024,
          price: 'From $236,300',
          tags: ['Gasoline', 'All-Wheel Drive', 'Automatic'],
          stats: [
            { value: '2.6 s', label: '0 – 60 mph' },
            { value: '640 hp', label: 'Max. engine power' },
            { value: '205 mph', label: 'Top speed' },
          ],
        },
        {
          name: '718 Cayman',
          year: 2024,
          price: 'From $68,150',
          tags: ['Gasoline', 'Rear-Wheel Drive', 'Manual'],
          stats: [
            { value: '4.7 s', label: '0 – 60 mph' },
            { value: '300 hp', label: 'Max. engine power' },
            { value: '170 mph', label: 'Top speed' },
          ],
        },
      ],
    },
    {
      slug: 'suv',
      label: 'SUVs',
      models: [
        {
          name: 'Cayenne',
          year: 2024,
          price: 'From $84,950',
          tags: ['Gasoline', 'All-Wheel Drive', 'Automatic'],
          stats: [
            { value: '5.9 s', label: '0 – 60 mph' },
            { value: '348 hp', label: 'Max. engine power' },
            { value: '152 mph', label: 'Top speed' },
          ],
        },
        {
          name: 'Macan',
          year: 2024,
          price: 'From $69,950',
          tags: ['Electric', 'All-Wheel Drive', 'Automatic'],
          stats: [
            { value: '3.3 s', label: '0 – 60 mph' },
            { value: '630 hp', label: 'Max. engine power' },
            { value: '137 mph', label: 'Top speed' },
          ],
        },
      ],
    },
    {
      slug: 'ev',
      label: 'Electric',
      models: [
        {
          name: 'Taycan',
          year: 2024,
          price: 'From $96,050',
          tags: ['Electric', 'All-Wheel Drive', 'Automatic'],
          stats: [
            { value: '3.7 s', label: '0 – 60 mph' },
            { value: '402 hp', label: 'Max. engine power' },
            { value: '143 mph', label: 'Top speed' },
          ],
        },
        {
          name: 'Taycan Turbo S',
          year: 2024,
          price: 'From $211,020',
          tags: ['Electric', 'All-Wheel Drive', 'Automatic'],
          stats: [
            { value: '2.4 s', label: '0 – 60 mph' },
            { value: '938 hp', label: 'Max. engine power' },
            { value: '161 mph', label: 'Top speed' },
          ],
        },
      ],
    },
  ],
}
