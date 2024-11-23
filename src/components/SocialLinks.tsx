import React from 'react';
import { Youtube, Github, Instagram, Music2, CircleDot } from 'lucide-react';

export function SocialLinks() {
  const socialLinks = [
    {
      name: 'YouTube',
      icon: <Youtube className="w-6 h-6" />,
      url: 'https://www.youtube.com/@DotDager',
      bgColor: 'bg-red-600',
      hoverColor: 'hover:bg-red-700'
    },
    {
      name: 'GitHub',
      icon: <Github className="w-6 h-6" />,
      url: 'https://github.com/MarianoVilla',
      bgColor: 'bg-gray-800',
      hoverColor: 'hover:bg-gray-900'
    },
    {
      name: 'Instagram',
      icon: <Instagram className="w-6 h-6" />,
      url: 'https://instagram.com/dager.32',  // URL corregida con https://
      bgColor: 'bg-pink-600',
      hoverColor: 'hover:bg-pink-700'
    },
    {
      name: 'Spotify',
      icon: <Music2 className="w-6 h-6" />,
      url: 'https://open.spotify.com/intl-es/artist/6bkClBMJd4qKxJp0J5vHsz?si=mbfNHqvBT9SKSQ-ZNhXHJg&nd=1',
      bgColor: 'bg-green-600',
      hoverColor: 'hover:bg-green-700'
    },
    {
      name: 'TikTok',
      icon: <CircleDot className="w-6 h-6" />,
      url: 'https://tiktok.com/@elantrodedager',  // URL corregida con https://
      bgColor: 'bg-black',
      hoverColor: 'hover:bg-gray-900'
    }
  ];

  return (
    <section className="py-16 bg-violet-800/30" style={{
      backgroundImage: "url('https://www.transparenttextures.com/patterns/dots.png')",
      backgroundSize: '10px 10px'
    }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center">Encuentrame en todas partes</h2>
        <p className="text-center text-violet-200 mb-8">¡Sígueme en mis redes!</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-3xl mx-auto">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-2 ${social.bgColor} ${social.hoverColor} p-4 rounded-lg transition-all duration-300 transform hover:scale-105`}
            >
              {social.icon}
              <span className="hidden sm:inline">{social.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
