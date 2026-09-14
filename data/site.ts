export type Procedure = { name: string; description: string; image: string };

export type Testimonial = { quote: string; name: string };

export const site = {

  name: 'Cinele Azevedo',
  monogram: 'CA',

  headline: 'Harmonização facial Full Face com estratégia, leveza e naturalidade.',

  cro: 'Biomédica · CRBM 41117', bio: 'Sou Cinele Azevedo, biomédica, e trabalho com Harmonização Facial Full Face para valorizar a beleza que já existe em cada rosto. Meu olhar une técnica, escuta e naturalidade em escolhas feitas para você.', education: [] as string[], specialties: ['Harmonização Facial Full Face'] as string[],

  phone: '+55 (21) 99378-7302', whatsapp: '5521993787302', whatsappUrl: '', address: 'Rio de Janeiro · RJ', professionalPhilosophy: 'Embelezamento Full Face natural, com intenção e respeito à sua identidade.',

  instagram: 'https://www.instagram.com/dra.cineleazevedo/', instagramHandle: '@dra.cineleazevedo',

  philosophy: ['NATURALIDADE', 'EM CADA', 'ESCOLHA.'],

  colors: { paper: '#f5f2eb', ink: '#101310', taupe: '#786d5d', champagne: '#b99a5d', dark: '#0d1110' },

  images: { hero: '/images/cinele-hero.webp', about: '/images/cinele-about.webp', beauty: '/images/cinele-experience.webp', essence: '/images/cinele-essence.webp' },

  procedures: [] as Procedure[],

  office: [] as { src: string; alt: string }[],

  testimonials: [] as Testimonial[],

  results: { enabled: true, items: [

    { image: '/images/resultado-full-face-01.webp', label: 'Equilíbrio de perfil', alt: 'Comparativo de antes e depois de harmonização facial, registro fornecido pela Dra. Cinele Azevedo', orientation: 'split', beforeShare: .5, comparisonRatio: 642/1279 },
    { image: '/images/resultado-full-face-02.webp', label: 'Contornos mais suaves', alt: 'Comparativo de antes e depois de harmonização facial, registro fornecido pela Dra. Cinele Azevedo', orientation: 'split', beforeShare: .5, comparisonRatio: 642/1497 },
    { image: '/images/resultado-full-face-03.webp', label: 'Naturalidade em evidência', alt: 'Comparativo de antes e depois de harmonização facial, registro fornecido pela Dra. Cinele Azevedo', orientation: 'split', beforeShare: .5, comparisonRatio: 641/1600 },
    { image: '/images/resultado-full-face-04.webp', label: 'Leveza na expressão', alt: 'Comparativo de antes e depois de harmonização facial, registro fornecido pela Dra. Cinele Azevedo', orientation: 'split', beforeShare: .5, comparisonRatio: 633/1600 },
    { image: '/images/resultado-full-face-05.webp', label: 'Harmonia em cada ângulo', alt: 'Comparativo de antes e depois de harmonização facial, registro fornecido pela Dra. Cinele Azevedo', orientation: 'split', beforeShare: .5, comparisonRatio: 640/1600 },
    { image: '/images/resultado-full-face-06.webp', label: 'Traços preservados', alt: 'Comparativo de antes e depois de harmonização facial, registro fornecido pela Dra. Cinele Azevedo', orientation: 'split', beforeShare: .5, comparisonRatio: 626/1600 },
    { image: '/images/resultado-full-face-07.webp', label: 'Beleza com identidade', alt: 'Comparativo de antes e depois de harmonização facial, registro fornecido pela Dra. Cinele Azevedo', orientation: 'split', beforeShare: .5, comparisonRatio: 642/1594 },
  ] },

  seo: { title: 'Dra. Cinele Azevedo | Harmonização Facial Full Face no Rio de Janeiro', description: 'Harmonização Facial Full Face com naturalidade no Rio de Janeiro. Conheça o olhar da Dra. Cinele Azevedo e agende sua avaliação.', url: '' },

};

export const appointmentUrl = site.whatsappUrl || (site.whatsapp ? `https://wa.me/${site.whatsapp.replace(/\D/g,'')}?text=${encodeURIComponent('Olá, Dra. Cinele! Gostaria de agendar uma avaliação.')}` : site.instagram);
