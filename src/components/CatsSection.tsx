import React from 'react';

export function CatsSection() {
  return (
    <section className="bg-violet-800/50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Mis gustos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-violet-900/50 rounded-lg p-6 hover:transform hover:scale-105 transition-all">
            <img
              src="https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif"
              alt="Cat playing"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <p className="text-center text-violet-200">Me gustan los gatos</p>
          </div>
          <div className="bg-violet-900/50 rounded-lg p-6 hover:transform hover:scale-105 transition-all">
            <img
              src="image\Guitarra.gif"
              alt="Cat coding"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <p className="text-center text-violet-200">Me gusta tocar guitarra</p>
          </div>
          <div className="bg-violet-900/50 rounded-lg p-6 hover:transform hover:scale-105 transition-all flex flex-col items-center">
            <img
              src="https://www.lexaloffle.com/media/98369/lumberjack_demake_0.gif"
              alt="Cat sleeping"
              className="w-full max-w-xs h-48 object-contain rounded-lg mb-4"
            />
            <p className="text-center text-violet-200">Me gusta boludear</p>
          </div>
        </div>
      </div>
    </section>
  );
}
