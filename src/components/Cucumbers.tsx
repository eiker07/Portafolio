import React from "react";
import { useNavigate } from "react-router-dom";

export const Cucumbers: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-green-900 text-white relative flex flex-col items-center justify-center">
      {/* Fondo con textura */}
      <div
        className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dots-grid.png')] opacity-20 pointer-events-none"
        aria-hidden="true"
      ></div>

      {/* Título principal */}
      <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-center mb-12 z-10">
        🥒 Beneficios del{" "}
        <span className="text-green-300">Pepinillo</span>
      </h2>

      {/* Contenido principal */}
      <div className="container mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Sección izquierda: GIF */}
        <div className="flex justify-center">
          <img
            src="https://img.freepik.com/premium-vector/pickel-character-with-green-sunglass-cap-vector-illustration_716931-565.jpg"
            alt="Cucumber GIF"
            className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-lg shadow-lg"
          />
        </div>

        {/* Sección derecha: Contenido */}
        <div className="space-y-8 text-center md:text-left">
          <p className="text-green-200 text-lg md:text-xl">
            💧 Altos en agua, perfectos para la hidratación.
          </p>
          <p className="text-green-200 text-lg md:text-xl">
            💊 Ricos en vitaminas y antioxidantes.
          </p>
          <p className="text-green-200 text-lg md:text-xl">
            🌱 Ayudan a mejorar la digestión y mantener una piel saludable.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start mt-6">
            <button
              onClick={() =>
                window.open("https://www.bonviveur.es/recetas/tag/pepinillos/", "_blank")
              }
              className="bg-green-700 px-6 py-3 rounded-full text-white font-bold hover:bg-green-600 transition"
            >
              Receta con Pepinillos
            </button>
            <button
              onClick={() => navigate("/")}
              className="bg-gray-700 px-6 py-3 rounded-full text-white font-bold hover:bg-gray-600 transition"
            >
              Volver al Portafolio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
