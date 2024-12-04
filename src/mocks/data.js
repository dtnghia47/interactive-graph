export const data = {
  nodes: [
    {
      id: 1,
      name: 'Observo.ai',
      logo: 'https://www.cloudmatos.ai/assets/images/observo_logo.webp',
      address: '123 HCM VN',
    },
    {
      id: 2,
      name: 'CredFlow',
      logo: 'https://www.cloudmatos.ai/assets/images/credflow-logo.png',
      address: '123 Cali CA',
    },
    {
      id: 3,
      name: 'Safexpay',
      logo: 'https://www.cloudmatos.ai/assets/images/safexpay.png',
      address: '123 Texas US',
    },
    {
      id: 4,
      name: 'Plum',
      logo: 'https://www.cloudmatos.ai/assets/images/plum.svg',
      address: '123 Tokyo JP',
    },
    {
      id: 5,
      name: 'Cloudmylab',
      logo: 'https://www.cloudmatos.ai/assets/images/cloudmylab-logo.png',
      address: '123 Tokyo JP',
    },
  ],
  links: [
    { source: 1, target: 4 },
    { source: 2, target: 4 },
    { source: 3, target: 2 },
    { source: 4, target: 3 },
    { source: 5, target: 3 },
  ],
};
