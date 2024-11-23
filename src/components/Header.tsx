import React, { useState, useEffect } from 'react';
import { Book } from 'lucide-react';

export function Header() {
  const phrases = [
    '"La creatividad es la inteligencia divirtiéndose" - Albert Einstein',
    '"Pienso, luego existo" - René Descartes',
    '"La vida es lo que hacemos de ella" - Friedrich Nietzsche',
    '"El conocimiento es poder" - Francis Bacon',
    '"Me encantan los Pepinillos" - Mariano Luis Villa',
  ];

  const [currentPhrase, setCurrentPhrase] = useState('');
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < phrases[index].length) {
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setCharIndex((prev) => prev - 1);
      } else if (!isDeleting && charIndex === phrases[index].length) {
        setIsDeleting(true);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % phrases.length);
      }
    }, isDeleting ? 30 : 50); // Ajuste de velocidad para escritura y borrado

    setCurrentPhrase(phrases[index].substring(0, charIndex));

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phrases, index]);

  return (
    <header className="container mx-auto px-4 py-8">
      <nav className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2">
          <Book size={32} className="text-violet-300" />
          <span className="text-2xl font-bold">Portafolio</span>
        </div>
      </nav>

      <div className="grid md:grid-cols-2 gap-4 items-center">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold leading-tight">
            Bienvenido a mi Página <br />
            <span className="text-violet-300">-Dot Dager</span>
          </h1>

          {/* Contenedor con altura fija y animación suave */}
          <p
            className="text-xl text-violet-200 italic transition-all duration-300 ease-in-out"
            style={{ minHeight: '3em', display: 'flex', alignItems: 'center' }}
          >
            {currentPhrase}
            <span className="text-violet-300">|</span>
          </p>
        </div>

        <div className="rounded-full overflow-hidden shadow-2xl">
          <img
            src="https://yt3.googleusercontent.com/KPVok_m-JqxKG5wD7HaXc5RyYDPPHHZpQP4KquV8fD9er0mGEkZ_9UuQojBehXz6aCxUt0RI=s900-c-k-c0x00ffffff-no-rj"
            alt="Profile"
            className="w-full h-auto transform hover:scale-105 transition-transform"
          />
        </div>
      </div>
    </header>
  );
}

