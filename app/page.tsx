"use client"

import Project from '../components/Projects';
import { useEffect } from 'react';

export default function Home() {

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Caveat:wght@600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  const links = [
    { title: 'ÖTOMATA AGENCY', url: 'https://xn--tomataagency-3ib.com/', bgImage: '/OtomataA.png' },
    { title: 'LLOYD', url: '#', bgImage: '/LLOYD21.png' },
    { title: 'Blog', url: 'https://blog2-eosin-beta.vercel.app/', bgImage: '/coworkers.jpg' },
    { title: 'AtriUM', url: 'https://atrihome2024.vercel.app/', bgImage: '/AtriHOME2.png' },
    { title: 'Budget IA', url: 'https://budget-indiv2.vercel.app/', bgImage: '/Budget.png' },
    { title: 'Contact Me', url: 'https://xn--tomataagency-3ib.com/#contact', bgImage: '/Manu.jpg' },
  ];

  const projects = [
    { title1: "LLOYD", title2: "by OTOMATA", src: "/Lloyd-Inc-972.png", link: "" },
    { title1: "Atrium AI", title2: "by OTOMATA", src: "/AtriHome.png", link: "https://atrihome2024-mats-projects-ca2b516a.vercel.app/" },
    { title1: "OTOMATA", title2: "The Blog", src: "/coworkers.jpg", link: "https://blog2-eosin-beta.vercel.app/" },
    { title1: "Portfolio", title2: "Manuel", src: "/MTL.png", link: "https://portfolio-anim-manu.vercel.app/" },
  ]

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 relative overflow-x-hidden" style={{ background: '#F7F5FB' }}>

      {/* Grain de papier, très discret */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.35,
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="w-full max-w-[440px] flex flex-col items-center gap-7 sm:gap-9 py-8 sm:py-12 relative z-10">

        {/* Photo + double cercle "crayonné" */}
        <div className="relative flex flex-col items-center gap-4 sm:gap-5">
          <div className="relative w-[150px] h-[150px] sm:w-[200px] sm:h-[200px]">
            <span
              aria-hidden="true"
              className="absolute inset-0 rounded-full"
              style={{ border: '1.5px solid #211B36', opacity: 0.4, transform: 'rotate(-3deg) scale(1.05)' }}
            />
            <img
              src="/Manu.JPG"
              alt="Profile"
              className="absolute inset-0 w-full h-full rounded-full object-cover"
            />
          </div>

          <div className="text-center flex flex-col items-center gap-2">
            <h1
              style={{
                fontFamily: "'Caveat', cursive",
                fontWeight: 700,
                fontSize: 'clamp(2rem, 7vw, 3rem)',
                color: '#211B36',
                lineHeight: 1,
              }}
            >
              Manuel LABRIDY
            </h1>
            <svg width="190" height="14" viewBox="0 0 190 14" aria-hidden="true">
              <path
                d="M3 8 C 40 2, 75 12, 110 6 S 165 2, 187 9"
                fill="none"
                stroke="#4527A0"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>

            <div className="relative inline-block mt-1">
              <p
                className="text-sm sm:text-base px-4 py-2"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  color: '#5B5570',
                  background: '#F5D67D',
                  borderRadius: '2px 10px 10px 2px',
                  boxShadow: '2px 3px 0 rgba(33,27,54,0.08)',
                  transform: 'rotate(-1.5deg)',
                }}
              >
                Biologist, Data Analyst &amp; Web developper
              </p>
            </div>
          </div>
        </div>

        {/* Liens — cartes papier, photo de projet qui depasse legerement en bas a droite */}
        <nav className="w-full flex flex-col gap-9 px-1 sm:px-0 mt-1" aria-label="Liens principaux">
          {links.map((link, index) => {
            const isTape = index % 2 === 0;
            const accent = index % 3 === 0 ? '#4527A0' : index % 3 === 1 ? '#5C6BC0' : '#D85A30';

            return (
              <a
                key={index}
                href={link.url}
                className={`link-card ${index % 2 === 0 ? 'link-card-even' : 'link-card-odd'} group relative w-full py-4 px-6`}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: '1rem',
                  color: '#211B36',
                  background: '#FFFFFF',
                  border: '2px solid #211B36',
                  borderRadius: '10px',
                  paddingRight: '4.5rem',
                }}
              >
                <span style={{ display: 'block' }}>{link.title}</span>

                {/* Photo de projet, deborde legerement en bas a droite de la carte */}
                <span
                  aria-hidden="true"
                  className="absolute"
                  style={{
                    width: '60px',
                    height: '60px',
                    right: '-10px',
                    bottom: '-10px',
                    transform: 'rotate(4deg)',
                  }}
                >
                  {/* attache : ruban ou epingle, posee sur le bord de la carte */}
                  {isTape ? (
                    <span
                      style={{
                        position: 'absolute',
                        top: '-7px',
                        left: '14px',
                        width: '28px',
                        height: '14px',
                        background: accent,
                        opacity: 0.55,
                        transform: 'rotate(-6deg)',
                        zIndex: 2,
                      }}
                    />
                  ) : (
                    <span
                      style={{
                        position: 'absolute',
                        top: '-3px',
                        left: '24px',
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        background: accent,
                        boxShadow: '0 1px 2px rgba(33,27,54,0.35)',
                        zIndex: 2,
                      }}
                    />
                  )}
                  <img
                    src={link.bgImage}
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-cover"
                    style={{ border: '3px solid #FFFFFF', outline: '1px solid rgba(33,27,54,0.15)' }}
                  />
                </span>
              </a>
            );
          })}
        </nav>

        {/* Réseaux sociaux */}
        <div className="flex items-center justify-center gap-3 mt-1" aria-label="Réseaux sociaux">
          <a
            href="https://www.instagram.com/_lloyd_org/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-11 h-11 flex items-center justify-center transition-transform duration-150 hover:-translate-y-0.5"
            style={{ border: '1.5px solid #211B36', borderRadius: '8px', color: '#211B36', background: '#FFFFFF' }}
          >
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>

          <a
            href="mailto:labridy.manuel@gmail.com"
            aria-label="Email"
            className="w-11 h-11 flex items-center justify-center transition-transform duration-150 hover:-translate-y-0.5"
            style={{ border: '1.5px solid #211B36', borderRadius: '8px', color: '#211B36', background: '#FFFFFF' }}
          >
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/manuel-labridy-70220a3a"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-11 h-11 flex items-center justify-center transition-transform duration-150 hover:-translate-y-0.5"
            style={{ border: '1.5px solid #211B36', borderRadius: '8px', color: '#211B36', background: '#FFFFFF' }}
          >
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        </div>

        {/* Footer */}
        <footer className="text-center mt-4" style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', color: '#5B5570' }}>
          <p>© {new Date().getFullYear()} Manuel LABRIDY</p>
        </footer>
      </div>

      <style>{`
        .link-card { transition: transform 0.35s cubic-bezier(0.22,1,0.36,1); }
        .link-card-even { transform: rotate(-0.6deg); }
        .link-card-odd { transform: rotate(0.5deg); }
        .link-card:focus-visible { outline: 2px solid #4527A0; outline-offset: 2px; }
        @media (hover: hover) and (pointer: fine) {
          .link-card:hover { transform: rotate(0deg) scale(1.15) translateY(-2px); }
        }
        @media (prefers-reduced-motion: reduce) {
          * {
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  )
}