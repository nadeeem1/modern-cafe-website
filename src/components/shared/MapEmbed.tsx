import { mapsEmbedUrl } from "../../data/site";

interface MapEmbedProps {
  className?: string;
}

/** Keyless Google Maps embed with a warm, desaturated treatment. */
export default function MapEmbed({ className = "h-80" }: MapEmbedProps) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-sand-200 shadow-lg shadow-espresso-900/10 ${className}`}
    >
      <iframe
        title="Map — Ember & Oak, 1200 NW Marshall St, Portland"
        src={mapsEmbedUrl}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        className="h-full w-full [filter:grayscale(0.25)_sepia(0.14)]"
      />
    </div>
  );
}
