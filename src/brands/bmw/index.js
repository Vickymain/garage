export const bmw = {
  slug: 'bmw',
  name: 'BMW',
  tagline: 'The Ultimate Driving Machine.',
  accentColor: '#1C6BBA',
  logo: '/src/assets/logos/bmw.svg',
  categories: [
    {
      slug: 'sedan',
      label: 'Sedans',
      models: [
        {
          name: '3 Series',
          year: 2024,
          price: 'From $44,300',
          tags: ['Gasoline', 'Rear-Wheel Drive', 'Automatic'],
          stats: [
            { value: '5.1 s', label: '0 – 60 mph' },
            { value: '255 hp', label: 'Max. engine power' },
            { value: '155 mph', label: 'Top speed' },
          ],
        },
        {
          name: '5 Series',
          year: 2024,
          price: 'From $56,400',
          tags: ['Gasoline', 'Rear-Wheel Drive', 'Automatic'],
          stats: [
            { value: '5.7 s', label: '0 – 60 mph' },
            { value: '248 hp', label: 'Max. engine power' },
            { value: '155 mph', label: 'Top speed' },
          ],
        },
        {
          name: '7 Series',
          year: 2024,
          price: 'From $97,500',
          tags: ['Gasoline', 'All-Wheel Drive', 'Automatic'],
          stats: [
            { value: '4.5 s', label: '0 – 60 mph' },
            { value: '375 hp', label: 'Max. engine power' },
            { value: '155 mph', label: 'Top speed' },
          ],
        },
      ],
    },
    {
      slug: 'suv',
      label: 'SAVs',
      models: [
        {
          name: 'X3',
          year: 2024,
          price: 'From $48,100',
          tags: ['Gasoline', 'All-Wheel Drive', 'Automatic'],
          stats: [
            { value: '5.8 s', label: '0 – 60 mph' },
            { value: '248 hp', label: 'Max. engine power' },
            { value: '130 mph', label: 'Top speed' },
          ],
        },
        {
          name: 'X5',
          year: 2024,
          price: 'From $67,100',
          tags: ['Gasoline', 'All-Wheel Drive', 'Automatic'],
          stats: [
            { value: '5.3 s', label: '0 – 60 mph' },
            { value: '335 hp', label: 'Max. engine power' },
            { value: '130 mph', label: 'Top speed' },
          ],
        },
        {
          name: 'X7',
          year: 2024,
          price: 'From $81,000',
          tags: ['Gasoline', 'All-Wheel Drive', 'Automatic'],
          stats: [
            { value: '5.5 s', label: '0 – 60 mph' },
            { value: '375 hp', label: 'Max. engine power' },
            { value: '130 mph', label: 'Top speed' },
          ],
        },
      ],
    },
    {
      slug: 'm-series',
      label: 'M Series',
      models: [
        {
          name: 'M3 Competition',
          year: 2024,
          price: 'From $76,900',
          tags: ['Gasoline', 'Rear-Wheel Drive', 'Automatic'],
          stats: [
            { value: '3.8 s', label: '0 – 60 mph' },
            { value: '503 hp', label: 'Max. engine power' },
            { value: '180 mph', label: 'Top speed' },
          ],
        },
        {
          name: 'M5',
          year: 2024,
          price: 'From $117,000',
          tags: ['Hybrid', 'All-Wheel Drive', 'Automatic'],
          stats: [
            { value: '3.4 s', label: '0 – 60 mph' },
            { value: '717 hp', label: 'Max. engine power' },
            { value: '189 mph', label: 'Top speed' },
          ],
        },
        {
          name: 'M8 Competition',
          year: 2024,
          price: 'From $133,000',
          tags: ['Gasoline', 'All-Wheel Drive', 'Automatic'],
          stats: [
            { value: '3.0 s', label: '0 – 60 mph' },
            { value: '617 hp', label: 'Max. engine power' },
            { value: '190 mph', label: 'Top speed' },
          ],
        },
      ],
    },
  ],
}
