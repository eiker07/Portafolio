import React from "react";
import { useNavigate } from "react-router-dom";
import { Code, Leaf } from "lucide-react";

export const PassionSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section
      id="passion-section"
      className="py-16 bg-violet-800/20"
      style={{
        backgroundImage: "url('https://www.transparenttextures.com/patterns/dots.png')",
        backgroundSize: '10px 10px',
      }}
    >
      <div className="container mx-auto px-4">
        {/* Título */}
        <h2 className="text-4xl font-bold mb-12 text-center">Haz clic para conocer lo que me apasiona</h2>

        {/* Grid de pasiones */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Card: Programar */}
          <div
            onClick={() => navigate("/programming")}
            className="bg-violet-900/50 rounded-lg p-6 cursor-pointer transform hover:scale-105 transition-all"
          >
            <div className="flex items-center gap-2 mb-4">
              <Code className="text-violet-300" size={32} />
              <h3 className="text-2xl font-bold">Programar</h3>
            </div>
            <img
              src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcndzNjFibWhiaDNuYm9qejVkano1Njl6c2g0Mjk3MGp1enV0YTl5ayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/uGmCqU0C3Op44AkjBh/giphy.gif"
              alt="Programming"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <p className="text-violet-200 text-lg">
              Transformando ideas en código
            </p>
          </div>

          {/* Card: Pepinillos */}
          <div
            onClick={() => navigate("/cucumbers")}
            className="bg-violet-900/50 rounded-lg p-6 cursor-pointer transform hover:scale-105 transition-all"
          >
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="text-violet-300" size={32} />
              <h3 className="text-2xl font-bold">Pepinillos</h3>
            </div>
            <img
              src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMm1tNDljMzZnamMwcXBncThmajJqYWJ5Ym9iZHlwYnAwZWpvYnE4eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/jSEpK3PWHlC4adMVcp/giphy.webp"
              alt="Cucumbers"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <p className="text-violet-200 text-lg">
              ¡Porque los pepinillos son vida! 🥒
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
