export const mockData = {
  nodes: [
    {
      id: 1,
      name: 'Observo.ai',
      logo: 'https://www.cloudmatos.ai/assets/images/observo_logo.webp',
      address: '123 HCM <b>VN</b>',
    },
    {
      id: 2,
      name: 'CredFlow',
      logo: 'https://www.cloudmatos.ai/assets/images/credflow-logo.png',
      address: '123 Cali <b>CA</b>',
    },
    {
      id: 3,
      name: 'Safexpay',
      logo: 'https://www.cloudmatos.ai/assets/images/safexpay.png',
      address: '123 Texas <b>US</b>',
    },
    {
      id: 4,
      name: 'Plum',
      logo: 'https://www.cloudmatos.ai/assets/images/plum.svg',
      address: '123 Tokyo <b>JP</b>',
    },
    {
      id: 5,
      name: 'Cloudmylab',
      logo: 'https://www.cloudmatos.ai/assets/images/cloudmylab-logo.png',
      address: '123 Tokyo <b>JP</b>',
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

export const nodesClone = {
  nodes: [
    {
      id: 5,
      name: 'Observo Clone',
      logo: 'https://www.cloudmatos.ai/assets/images/observo_logo.webp',
      address: 'Address <b>Clone</b>',
    },
  ],
  links: [{ source: 5, target: 4 }],
};

export const invalidData = {};
