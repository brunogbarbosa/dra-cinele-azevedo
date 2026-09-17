export type Procedure = { name: string; description: string; image: string };
export type Testimonial = { quote: string; name: string };

export const site = {
  name: 'Cinele Azevedo',
  monogram: 'CA',
  headline: 'Beleza que preserva quem você é.',
  cro: 'Biomédica · CRBM 41117',
  bio: 'Sou Cinele Azevedo, biomédica, e meu olhar para a harmonização facial começa pela sua individualidade. A proposta é valorizar o conjunto do rosto com um planejamento full face, respeitando seus traços, sua expressão e a beleza que já é sua.',
  education: [] as string[],
  specialties: ['Harmonização facial', 'Planejamento full face', 'Embelezamento natural'],
  phone: '+55 21 99378-7302',
  whatsapp: '5521993787302',
  whatsappUrl: 'https://wa.me/5521993787302?text=Ol%C3%A1%2C%20Dra.%20Cinele!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20facial.',
  address: 'Rio de Janeiro · RJ',
  professionalPhilosophy: 'Beleza que preserva quem você é.',
  instagram: 'https://www.instagram.com/dra.cineleazevedo/',
  instagramHandle: '@dra.cineleazevedo',
  philosophy: ['SEUS TRAÇOS.', 'SUA ESSÊNCIA.', 'SEU TEMPO.'],
  colors: { paper: '#f5f0e8', ink: '#242620', taupe: '#a58a62', champagne: '#cdaa74', dark: '#432a2c', wine: '#11130f', muted: '#716c62' },
  images: { hero: '/images/cinele-hero-retrato.webp', essence: '/images/cinele-essencia.webp', about: '/images/cinele-sobre.webp', beauty: '/images/cinele-experiencia.webp' },
  procedures: [
    { name: 'Harmonização facial full face', description: 'Um olhar para o conjunto, com escolhas individualizadas na avaliação.', image: '/images/resultado-fullface.webp' },
  ] as Procedure[],
  office: [] as { src: string; alt: string }[],
  testimonials: [] as Testimonial[],
  results: { enabled: true, items: [
    { image: '/images/resultado-perfil.webp', label: 'Harmonia em cada ângulo', alt: 'Comparativo facial de perfil fornecido para o site da Dra. Cinele Azevedo.', orientation: 'horizontal', beforeShare: 660 / 1284, comparisonRatio: 624 / 1279 },
    { image: '/images/resultado-fullface.webp', label: 'O conjunto faz a diferença', alt: 'Comparativo frontal full face fornecido para o site da Dra. Cinele Azevedo.', orientation: 'horizontal', beforeShare: 637 / 1266, comparisonRatio: 629 / 1600 },
    { image: '/images/resultado-equilibrio.webp', label: 'Traços valorizados. Essência preservada.', alt: 'Registro facial de antes e depois fornecido para o site da Dra. Cinele Azevedo.', orientation: 'horizontal', beforeShare: 636 / 1282, comparisonRatio: 646 / 1600 },
    { image: '/images/resultado-expressao.webp', label: 'Beleza com a sua identidade', alt: 'Registro frontal de antes e depois fornecido para o site da Dra. Cinele Azevedo.', orientation: 'horizontal', beforeShare: 648 / 1284, comparisonRatio: 636 / 1594 },
  ] },
  seo: { title: 'Dra. Cinele Azevedo | Harmonização Facial Full Face RJ', description: 'Harmonização facial full face com foco em naturalidade e identidade. Conheça o olhar da Dra. Cinele Azevedo, biomédica no Rio de Janeiro, e agende sua avaliação.', url: '' },
};
export const appointmentUrl = site.whatsappUrl || site.instagram;
