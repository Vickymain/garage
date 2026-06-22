export const lamborghini = {
  slug: 'lamborghini',
  name: 'Lamborghini',
  tagline: 'Expect the unexpected.',
  accentColor: '#D4A017',
  logo: '/src/assets/logos/lamborghini.png',
  categories: [
    {
      slug: 'supercar',
      label: 'Supercars',
      models: [
        {
          name: 'Revuelto',
          year: 2024,
          price: 'From $608,358',
          tags: ['Hybrid', 'All-Wheel Drive', 'Automatic'],
          stats: [
            { value: '2.5 s', label: '0 – 60 mph' },
            { value: '1,001 hp', label: 'Max. engine power' },
            { value: '217 mph', label: 'Top speed' },
          ],
        },
        {
          name: 'Huracán Sterrato',
          year: 2024,
          price: 'From $267,091',
          tags: ['Gasoline', 'All-Wheel Drive', 'Automatic'],
          stats: [
            { value: '3.4 s', label: '0 – 60 mph' },
            { value: '602 hp', label: 'Max. engine power' },
            { value: '162 mph', label: 'Top speed' },
          ],
        },
      ],
    },
    {
      slug: 'suv',
      label: 'Super SUV',
      models: [
        {
          name: 'Urus S',
          year: 2024,
          price: 'From $232,988',
          tags: ['Gasoline', 'All-Wheel Drive', 'Automatic'],
          stats: [
            { value: '3.5 s', label: '0 – 60 mph' },
            { value: '657 hp', label: 'Max. engine power' },
            { value: '189 mph', label: 'Top speed' },
          ],
        },
        {
          name: 'Urus Performante',
          year: 2024,
          price: 'From $269,225',
          tags: ['Gasoline', 'All-Wheel Drive', 'Automatic'],
          stats: [
            { value: '3.3 s', label: '0 – 60 mph' },
            { value: '657 hp', label: 'Max. engine power' },
            { value: '193 mph', label: 'Top speed' },
          ],
        },
      ],
    },
  ],
}
