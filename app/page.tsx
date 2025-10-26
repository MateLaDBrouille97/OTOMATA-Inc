"use client"

// import styles from './page.module.css'
import Project from '../components/Projects';
import { useEffect } from 'react';


export default function Home() {

   useEffect(() => {
    // Load Inter font from Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);


  const links = [
    { title: 'My Portfolio', url: 'https://portfolio-anim-manu.vercel.app/', gradient: 'from-[#311b92] to-[#4527a0]', bgImage:"/MTL.png" },
    { title: 'LLOYD', url: '#', gradient: 'from-[#512da8] to-[#5e35b1]', bgImage:"/LLOYD.png" },
    { title: 'Blog', url: 'https://blog2-eosin-beta.vercel.app/', gradient: 'from-[#5c6bc0] to-[#7986cb]', bgImage:"/coworkers.jpg" },
    // { title: 'Newsletter', url: '#', gradient: 'from-[#5c6bc0] to-[#7986cb]', bgImage:"/Lloyd-Inc-972.png" },
    { title: 'Contact Me', url: '#', gradient: 'from-[#90caf9] to-[#bbdefb]', bgImage:"" },
  ];

  const projects = [

    {
      title1: "LLOYD",
      title2: "by OTOMATA",
      src: "/Lloyd-Inc-972.png",
      link: "",
    },
    {
      title1: "Atrium AI",
      title2: "by OTOMATA",
      src: "/AtriHome.png",
      link: "https://atrihome2024-mats-projects-ca2b516a.vercel.app/",
    },
    {
      title1: "OTOMATA",
      title2: "The Blog",
      src: "/coworkers.jpg",
      link: "https://blog2-eosin-beta.vercel.app/",
    },
    {
      title1: "Portfolio",
      title2: "Manuel",
      src: "/MTL.png",
      link:"https://portfolio-anim-manu.vercel.app/",
    },
 
  ]

  return (
   <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-[420px] flex flex-col items-center gap-6 sm:gap-8 py-8 sm:py-12">
        {/* Profile Section */}
        <div className="flex flex-col items-center gap-3 sm:gap-4">
          <img
            src="/Mur.jpg"
            alt="Profile"
            className="w-[90px] h-[90px] sm:w-[120px] sm:h-[120px] rounded-full shadow-md object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#111] mb-1">
              Manuel LABRIDY
            </h1>
            <p className="text-sm sm:text-base text-[#555] font-medium">
              Biologist, Data Analyst & Web developer
            </p>
          </div>
        </div>

        {/* Link Buttons */}
        <div className="w-full flex flex-col gap-3 sm:gap-4 px-2 sm:px-0">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className={`
                group relative w-full py-3.5 sm:py-4 px-6 rounded-2xl overflow-hidden
                bg-gradient-to-r ${link.gradient}
                text-white font-semibold text-base sm:text-lg text-center
                shadow-lg shadow-black/10 hover:shadow-xl hover:shadow-black/20
                transform transition-all duration-300 ease-out
                hover:-translate-y-0.5 hover:scale-[1.04] active:scale-[0.98] active:translate-y-0
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400
              `}
              style={{
                animationDelay: `${index * 50}ms`,
                animation: 'fadeInUp 0.5s ease-out forwards',
                opacity: 0,
              }}
            >
              {/* Background Image with Gradient Fade */}
              <div 
                className="absolute left-0 top-0 h-full w-0 group-hover:w-1/3 transition-all duration-500 ease-out bg-cover bg-center opacity-30 group-hover:opacity-50"
                style={{
                  backgroundImage: `url(${link.bgImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  maskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 60%, rgba(0,0,0,0.3) 85%, rgba(0,0,0,0) 100%)',
                  WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 60%, rgba(0,0,0,0.3) 85%, rgba(0,0,0,0) 100%)',
                }}
              />
              
              {/* Animated Text */}
              <span className="relative z-10 inline-block">
                {link.title.split('').map((char, charIndex) => (
                  <span
                    key={charIndex}
                    className="inline-block transition-transform duration-200 ease-out group-hover:animate-bounce"
                    style={{
                      animationDelay: `${charIndex * 30}ms`,
                      animationDuration: '0.6s',
                      animationFillMode: 'both'
                    }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                ))}
              </span>
            </a>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mt-2">
          <a
            href="https://www.instagram.com/otomata_and_co/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-9 h-9 sm:w-11 sm:h-11 bg-white border border-gray-900 rounded-md shadow-sm flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 text-gray-900"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
          
          <a
            href="mailto:labridy.manuel@gmail.com"
            aria-label="Email"
            className="w-9 h-9 sm:w-11 sm:h-11 bg-white border border-gray-900 rounded-md shadow-sm flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 text-gray-900"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </a>
          
          <a
            href="https://www.linkedin.com/in/manuel-labridy-70220a3a"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-9 h-9 sm:w-11 sm:h-11 bg-white border border-gray-900 rounded-md shadow-sm flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 text-gray-900"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        </div>

        {/* Footer */}
        <footer className="text-center text-sm text-[#555] mt-6 sm:mt-8">
          <p>© {new Date().getFullYear()} Manuel LABRIDY </p>
        </footer>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% {
            transform: translate3d(0, 0, 0);
          }
          40%, 43% {
            transform: translate3d(0, -8px, 0);
          }
          70% {
            transform: translate3d(0, -4px, 0);
          }
          90% {
            transform: translate3d(0, -2px, 0);
          }
        }

        @keyframes letterFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-3px);
          }
        }

        .group:hover .animate-bounce {
          animation: bounce 0.6s ease-in-out;
        }

        .group:hover span:nth-child(even) {
          animation: letterFloat 1.2s ease-in-out infinite;
          animation-delay: calc(var(--char-index, 0) * 50ms);
        }

        .group:hover span:nth-child(odd) {
          animation: letterFloat 1.2s ease-in-out infinite reverse;
          animation-delay: calc(var(--char-index, 0) * 50ms + 200ms);
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  )
}
