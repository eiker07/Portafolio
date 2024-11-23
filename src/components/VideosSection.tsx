import React from 'react';

// Función para obtener la miniatura de YouTube usando la URL del video
function getYouTubeThumbnail(url: string): string {
  const videoId = url.split("v=")[1]?.split("&")[0]; // Extrae el ID del video
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`; // URL de la miniatura
}

export function VideosSection() {
  const videos = [
    {
      title: "Por qué dejé la universidad",
      description: "¿Carrera, autodidacta o bootcamps?",
      url: "https://www.youtube.com/watch?v=SoblGnOSHws"
    },
    {
      title: "Dejá de perder tiempo.",
      description: "Conoce lo que no te cuentan",
      url: "https://www.youtube.com/watch?v=FlO796ke0AI"
    },
    {
      title: "Mirá esto ANTES de aprender a PROGRAMAR.",
      description: "Tutorial de programación",
      src: "image\\Porquédejélauniversidad.jpg", // Esta no se va a usar
      url: "https://www.youtube.com/watch?v=c2EJRboAYL4"
    },
  ];

  return (
    <section className="py-16 bg-violet-800"> {/* Fondo violeta más oscuro */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">Haz clic para ver mis videos de YouTube</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, i) => (
            <a 
              key={i} 
              href={video.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-violet-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all block"
            >
              {/* Usa la miniatura de YouTube */}
              <img 
                src={getYouTubeThumbnail(video.url)} // Genera la miniatura de YouTube
                alt={video.title}
                className="w-full aspect-video object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold mb-2 text-white">{video.title}</h3>
                <p className="text-gray-300">{video.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
