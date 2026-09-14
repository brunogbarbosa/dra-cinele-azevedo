'use client';

import Image from 'next/image';
import { useId } from 'react';
import { ArrowRight } from 'lucide-react';
import { appointmentUrl, site } from '@/data/site';
import { useCampaignMotion } from './use-campaign-motion';

const metrics = [
  { value: 'FULL FACE', label: 'EMBELEZAMENTO FACIAL' },
  { value: 'CRBM 41117', label: 'ATUAÇÃO BIOMÉDICA' },
  { value: 'RIO · RJ', label: 'ATENDIMENTO PRESENCIAL' },
];

function FaceSeal() {
  const id = useId().replace(/:/g, '');
  return <div className="campaign-seal" role="img" aria-label="Naturalidade com intenção">
    <svg viewBox="0 0 180 180" fill="none" aria-hidden="true">
      <defs>
        <path id={`${id}-top`} d="M18 90a72 72 0 0 1 144 0"/>
        <path id={`${id}-bottom`} d="M12 90a78 78 0 0 0 156 0"/>
      </defs>
      <circle pathLength="1" cx="90" cy="90" r="54" stroke="currentColor" strokeWidth=".7"/>
      <text fill="currentColor" textAnchor="middle"><textPath href={`#${id}-top`} startOffset="50%">NATURALIDADE</textPath></text>
      <text fill="currentColor" textAnchor="middle"><textPath href={`#${id}-bottom`} startOffset="50%">COM INTENÇÃO</textPath></text>
      <path pathLength="1" d="M106 48c-17 5-29 19-31 37-1 10 2 17-4 26m34-49c4 9 3 18-2 25 3 6 1 13-5 16-4 2-7 2-10 1-2 8-8 14-17 17" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M73 83c6-4 13-4 19 0M77 98c5 4 11 4 16 0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  </div>;
}

export function CampaignHero() {
  const motionRef = useCampaignMotion();
  return <section ref={motionRef} id="inicio" className="campaign" aria-labelledby="campaign-title">
    <div className="campaign-organic campaign-organic-one" aria-hidden="true"/>
    <div className="campaign-organic campaign-organic-two" aria-hidden="true"/>
    <div className="campaign-contour" aria-hidden="true"/>
    <div className="campaign-inner">
      <div className="campaign-copy">
        <p className="campaign-kicker">HARMONIZAÇÃO FULL FACE NATURAL</p>
        <h1 id="campaign-title" aria-label="Mais jovem. Ainda você.">
          <span className="campaign-title-line"><span>MAIS JOVEM.</span></span>
          <span className="campaign-title-line"><span>AINDA</span></span>
          <span className="campaign-title-line"><span>VOCÊ.</span></span>
        </h1>
        <p className="campaign-subtitle">Estratégia facial, leveza e naturalidade<br/>em cada detalhe.</p>
        <div className="campaign-action"><a className="campaign-cta" href={appointmentUrl} target="_blank" rel="noreferrer"><span>AGENDAR AVALIAÇÃO</span><ArrowRight size={22} strokeWidth={1.2}/></a></div>
      </div>
      <figure className="campaign-portrait">
        <div className="campaign-silhouette"><Image className="campaign-original" src={site.images.hero} alt="Dra. Cinele Azevedo" fill priority sizes="(max-width:700px) 94vw, (max-width:1100px) 55vw, 48vw"/></div>
      </figure>
      <FaceSeal/>
      <p className="campaign-editorial">Seu rosto.<br/>Sua história.<br/>Sua essência.<span aria-hidden="true"/></p>
      <div className="campaign-metrics" aria-label="Atendimento em números">
        {metrics.map(metric=><div className="campaign-metric" key={metric.value}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}
      </div>
      <div className="campaign-signature"><span aria-hidden="true"/><div><p>DRA. CINELE AZEVEDO</p><em>Harmonização facial<br className="campaign-signature-break"/> com naturalidade.</em></div></div>
    </div>
  </section>;
}
