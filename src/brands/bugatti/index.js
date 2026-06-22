export const bugatti = {
  slug: 'bugatti',
  name: 'Bugatti',
  tagline: 'Art, Forme, Technique.',
  accentColor: '#1B3A8C',
  logo: '/src/assets/logos/bugatti.png',
  categories: [
    {
      slug: 'hypercar',
      label: 'Hypercars',
      models: [
        {
          name: 'Chiron Super Sport',
          year: 2024,
          price: 'From $3,825,000',
          tags: ['Gasoline', 'All-Wheel Drive', 'Automatic'],
          stats: [
            { value: '2.4 s', label: '0 – 60 mph' },
            { value: '1,578 hp', label: 'Max. engine power' },
            { value: '273 mph', label: 'Top speed' },
          ],
        },
        {
          name: 'Tourbillon',
          year: 2026,
          price: 'From $4,600,000',
          tags: ['Hybrid', 'All-Wheel Drive', 'Automatic'],
          stats: [
            { value: '2.0 s', label: '0 – 60 mph' },
            { value: '1,800 hp', label: 'Max. engine power' },
            { value: '280 mph', label: 'Top speed (est.)' },
          ],
        },
        {
          name: 'Bolide',
          year: 2024,
          price: 'From $4,700,000',
          tags: ['Gasoline', 'All-Wheel Drive', 'Automatic'],
          stats: [
            { value: '< 2.2 s', label: '0 – 60 mph' },
            { value: '1,850 hp', label: 'Max. engine power' },
            { value: '310 mph', label: 'Top speed (est.)' },
          ],
        },
        {
          name: 'Mistral',
          year: 2024,
          price: 'From $5,000,000',
          tags: ['Gasoline', 'All-Wheel Drive', 'Automatic'],
          stats: [
            { value: '2.4 s', label: '0 – 60 mph' },
            { value: '1,578 hp', label: 'Max. engine power' },
            { value: '261 mph', label: 'Top speed' },
          ],
        },
      ],
    },
  ],
}
