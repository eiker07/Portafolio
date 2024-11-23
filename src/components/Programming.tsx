import React from "react";
import { useNavigate } from "react-router-dom";

export const Programming: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-violet-900 text-white relative flex flex-col items-center justify-center">
      {/* Fondo con textura */}
      <div
        className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dots-grid.png')] opacity-20 pointer-events-none"
        aria-hidden="true"
      ></div>

      {/* Título principal */}
      <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-center mb-12 z-10">
        🌟 Proyectos de{" "}
        <span className="text-violet-300">Programación</span>
      </h2>

      {/* Contenido principal */}
      <div className="container mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Sección izquierda: GIF */}
        <div className="flex justify-center">
          <img
            src="image\Perfil.jpg"
            alt="Programming GIF"
            className="w-64 h-64 md:w-80 md:h-80 rounded-lg shadow-lg"
          />
        </div>

        {/* Sección derecha: Contenido */}
        <div className="space-y-8 text-center md:text-left">
          <ul className="text-violet-200 space-y-4 text-lg md:text-xl">
            <li>
              🎮 <strong>Proyecto 1:</strong> WorldHardestGame-vs-AI{" "}
              <a
                href="https://github.com/MarianoVilla/WorldHardestGame-vs-AI"
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-300 hover:text-violet-500 underline"
              >
                ( Ver repositorio )
              </a>
            </li>
            <li>
              🌐 <strong>Proyecto 2:</strong> HTTP-Server{" "}
              <a
                href="https://github.com/MarianoVilla/HTTP-Server"
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-300 hover:text-violet-500 underline"
              >
                ( Ver repositorio )
              </a>
            </li>
            <li>
              🔧 <strong>Proyecto 3:</strong> DNS-Server{" "}
              <a
                href="https://github.com/MarianoVilla/DNS-Server"
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-300 hover:text-violet-500 underline"
              >
                ( Ver repositorio )
              </a>
            </li>
          </ul>
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start mt-6">
            {/* Botón para Ir a GitHub */}
            <a
              href="https://github.com/MarianoVilla"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 px-6 py-3 rounded-full text-white font-bold hover:bg-green-400 transition shadow-lg"
            >
              Ir a GitHub
            </a>

            {/* Botón para Volver al Portafolio */}
            <button
              onClick={() => navigate("/")}
              className="bg-gray-700 px-6 py-3 rounded-full text-white font-bold hover:bg-gray-600 transition shadow-lg"
            >
              Volver al Portafolio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
