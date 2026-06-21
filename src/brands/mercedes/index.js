export const mercedes = {
  slug: 'mercedes',
  name: 'Mercedes-Benz',
  tagline: 'The best or nothing.',
  accentColor: '#C0C0C0',
  logo: '/src/assets/logos/mercedes.svg.png',
  categories: [
    {
      slug: 'sedan',
      label: 'Sedans',
      models: [
        {
          name: 'C-Class',
          year: 2024,
          price: 'From $47,900',
          tags: ['Gasoline', 'Rear-Wheel Drive', 'Automatic'],
          stats: [
            { value: '5.1 s', label: '0 – 60 mph' },
            { value: '255 hp', label: 'Max. engine power' },
            { value: '130 mph', label: 'Top speed' },
          ],
        },
        {
          name: 'E-Class',
          year: 2024,
          price: 'From $58,600',
          tags: ['Gasoline', 'Rear-Wheel Drive', 'Automatic'],
          stats: [
            { value: '4.9 s', label: '0 – 60 mph' },
            { value: '302 hp', label: 'Max. engine power' },
            { value: '130 mph', label: 'Top speed' },
          ],
        },
        {
          name: 'S-Class',
          year: 2024,
          price: 'From $114,900',
          tags: ['Gasoline', 'All-Wheel Drive', 'Automatic'],
          stats: [
            { value: '4.5 s', label: '0 – 60 mph' },
            { value: '429 hp', label: 'Max. engine power' },
            { value: '155 mph', label: 'Top speed' },
          ],
        },
      ],
    },
    {
      slug: 'suv',
      label: 'SUVs',
      models: [
        {
          name: 'GLC',
          year: 2024,
          price: 'From $48,750',
          tags: ['Gasoline', 'All-Wheel Drive', 'Automatic'],
          stats: [
            { value: '5.8 s', label: '0 – 60 mph' },
            { value: '258 hp', label: 'Max. engine power' },
            { value: '130 mph', label: 'Top speed' },
          ],
        },
        {
          name: 'GLE',
          year: 2024,
          price: 'From $58,750',
          tags: ['Gasoline', 'All-Wheel Drive', 'Automatic'],
          stats: [
            { value: '5.6 s', label: '0 – 60 mph' },
            { value: '362 hp', label: 'Max. engine power' },
            { value: '130 mph', label: 'Top speed' },
          ],
        },
        {
          name: 'GLS',
          year: 2024,
          price: 'From $82,050',
          tags: ['Gasoline', 'All-Wheel Drive', 'Automatic'],
          stats: [
            { value: '5.2 s', label: '0 – 60 mph' },
            { value: '429 hp', label: 'Max. engine power' },
            { value: '130 mph', label: 'Top speed' },
          ],
        },
      ],
    },
    {
      slug: 'amg',
      label: 'AMG',
      models: [
        {
          name: 'AMG GT 63',
          year: 2024,
          price: 'From $164,900',
          tags: ['Gasoline', 'All-Wheel Drive', 'Automatic'],
          stats: [
            { value: '3.1 s', label: '0 – 60 mph' },
            { value: '577 hp', label: 'Max. engine power' },
            { value: '196 mph', label: 'Top speed' },
          ],
        },
        {
          name: 'C 63 S AMG',
          year: 2024,
          price: 'From $84,900',
          tags: ['Hybrid', 'All-Wheel Drive', 'Automatic'],
          stats: [
            { value: '3.4 s', label: '0 – 60 mph' },
            { value: '671 hp', label: 'Max. engine power' },
            { value: '174 mph', label: 'Top speed' },
          ],
        },
      ],
    },
  ],
}
