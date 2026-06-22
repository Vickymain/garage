export const koenigsegg = {
  slug: 'koenigsegg',
  name: 'Koenigsegg',
  tagline: 'The impossible made possible.',
  accentColor: '#C0C0C0',
  logo: '/src/assets/logos/koenigsegg.png',
  categories: [
    {
      slug: 'hypercar',
      label: 'Hypercars',
      models: [
        {
          name: 'Jesko Absolut',
          year: 2024,
          price: 'From $3,000,000',
          tags: ['Gasoline', 'Rear-Wheel Drive', 'Automatic'],
          stats: [
            { value: '< 2.5 s', label: '0 – 60 mph' },
            { value: '1,600 hp', label: 'Max. engine power' },
            { value: '330 mph', label: 'Top speed (est.)' },
          ],
        },
        {
          name: 'Regera',
          year: 2024,
          price: 'From $1,900,000',
          tags: ['Hybrid', 'Rear-Wheel Drive', 'Automatic'],
          stats: [
            { value: '2.7 s', label: '0 – 60 mph' },
            { value: '1,500 hp', label: 'Max. engine power' },
            { value: '255 mph', label: 'Top speed' },
          ],
        },
        {
          name: 'CC850',
          year: 2024,
          price: 'From $4,000,000',
          tags: ['Gasoline', 'Rear-Wheel Drive', 'Manual'],
          stats: [
            { value: '< 3.0 s', label: '0 – 60 mph' },
            { value: '1,385 hp', label: 'Max. engine power' },
            { value: '250 mph', label: 'Top speed' },
          ],
        },
        {
          name: 'Gemera',
          year: 2024,
          price: 'From $3,000,000',
          tags: ['Hybrid', 'All-Wheel Drive', 'Automatic'],
          stats: [
            { value: '1.9 s', label: '0 – 60 mph' },
            { value: '2,300 hp', label: 'Max. engine power' },
            { value: '248 mph', label: 'Top speed' },
          ],
        },
      ],
    },
  ],
}
