import { MapPin } from "lucide-react";
import { useState } from "react";

/**
 * Hover-triggered Bangalore Map Card — React + Tailwind
 *
 * Displays the map card when hovering over the "Based in Bangalore" text.
 */
export default function BangaloreHoverCard() {
  const [showCard, setShowCard] = useState(false);

  // 12°58'17.8"N 77°35'40.6"E
  const lat = 12.9716;
  const lon = 77.5946; // A small bounding box around Bengaluru for the OSM iframe
  const bbox = { minLon: 77.48, minLat: 12.9, maxLon: 77.72, maxLat: 13.05 };

  const osmSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox.minLon}%2C${bbox.minLat}%2C${bbox.maxLon}%2C${bbox.maxLat}&layer=mapnik&marker=${lat}%2C${lon}`;

  return (
    <div
      className="relative hidden lg:inline-block md:inline-block"
      onMouseEnter={() => setShowCard(true)}
      onMouseLeave={() => setShowCard(false)}
    >
      {/* Hover target */}
      <div>
        <p className="flex items-center">
          <span className="mr-2">
            <MapPin className="w-4 h-4" />
          </span>
          <span className="font-semibold tracking-wide leading-loose">
            Based In
          </span>
        </p>
        <span className="tracking-wide leading-loose pointer-events-auto cursor-pointer font-medium hover:underline">
          Bangalore
        </span>
      </div>

      {/* Hover card */}
      {showCard && (
        <div className="absolute left-32 top-[-120px] mt-2 w-80 z-50">
          <div className="rounded-2xl shadow-lg bg-white/90 dark:bg-neutral-900/90 backdrop-blur border border-black/5 overflow-hidden">
            <div className="p-3 bg-gradient-to-r from-indigo-500/20 via-sky-500/20 to-emerald-500/20 dark:from-indigo-500/10 dark:via-sky-500/10 dark:to-emerald-500/10 border-b border-black/5">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                Bengaluru (Bangalore)
              </h2>
              <p className="text-xs text-gray-600 dark:text-gray-300">
                12.9716° N, 77.5946° E
              </p>
            </div>

            {/* Map */}
            <div className="relative">
              <iframe
                title="Bengaluru on OpenStreetMap"
                src={osmSrc}
                className="w-full h-48"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
