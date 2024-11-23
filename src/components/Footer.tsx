import React from 'react';
import { Guitar, CircleDot } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-violet-900/80 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4">
          <img
            src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExOW96NzZ0ZWM5b3FsaHV0c2V3bzMzczF3YTZ6bGNianlreTJ4cmRybiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/uGmCqU0C3Op44AkjBh/giphy.webp"
            alt="Guitar concert"
            className="max-w-sm rounded-lg shadow-lg mb-4"
          />
          <div className="flex items-center gap-2">
            <Guitar className="text-violet-300" />
            <span className="text-violet-200">¡Muchas gracias por conocerme!</span>
            <Guitar className="text-violet-300" />
          </div>

          
        </div>
      </div>
    </footer>
  );
}
