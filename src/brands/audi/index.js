export const audi = {
  slug: 'audi',
  name: 'Audi',
  tagline: 'Vorsprung durch Technik.',
  accentColor: '#BB0A21',
  logo: '/src/assets/logos/audi.png',
  categories: [
    {
      slug: 'rs',
      label: 'RS Models',
      models: [
        {
          name: 'RS e-tron GT',
          year: 2024,
          price: 'From $147,500',
          tags: ['Electric', 'All-Wheel Drive', 'Automatic'],
          stats: [
            { value: '3.1 s', label: '0 – 60 mph' },
            { value: '637 hp', label: 'Max. engine power' },
            { value: '155 mph', label: 'Top speed' },
          ],
        },
        {
          name: 'RS6 Avant',
          year: 2024,
          price: 'From $120,100',
          tags: ['Hybrid', 'All-Wheel Drive', 'Automatic'],
          stats: [
            { value: '3.5 s', label: '0 – 60 mph' },
            { value: '621 hp', label: 'Max. engine power' },
            { value: '190 mph', label: 'Top speed' },
          ],
        },
        {
          name: 'RS Q8',
          year: 2024,
          price: 'From $125,900',
          tags: ['Hybrid', 'All-Wheel Drive', 'Automatic'],
          stats: [
            { value: '3.6 s', label: '0 – 60 mph' },
            { value: '591 hp', label: 'Max. engine power' },
            { value: '190 mph', label: 'Top speed' },
          ],
        },
        {
          name: 'RS3',
          year: 2024,
          price: 'From $61,100',
          tags: ['Gasoline', 'All-Wheel Drive', 'Automatic'],
          stats: [
            { value: '3.8 s', label: '0 – 60 mph' },
            { value: '401 hp', label: 'Max. engine power' },
            { value: '174 mph', label: 'Top speed' },
          ],
        },
      ],
    },
    {
      slug: 'r8',
      label: 'R8',
      models: [
        {
          name: 'R8 V10 GT RWD',
          year: 2024,
          price: 'From $248,900',
          tags: ['Gasoline', 'Rear-Wheel Drive', 'Automatic'],
          stats: [
            { value: '3.4 s', label: '0 – 60 mph' },
            { value: '570 hp', label: 'Max. engine power' },
            { value: '199 mph', label: 'Top speed' },
          ],
        },
        {
          name: 'R8 V10 Performance',
          year: 2024,
          price: 'From $213,900',
          tags: ['Gasoline', 'All-Wheel Drive', 'Automatic'],
          stats: [
            { value: '3.1 s', label: '0 – 60 mph' },
            { value: '602 hp', label: 'Max. engine power' },
            { value: '205 mph', label: 'Top speed' },
          ],
        },
      ],
    },
  ],
}
