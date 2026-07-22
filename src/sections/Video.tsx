import { useState } from 'react'
import { Play } from 'lucide-react'
import { videoSection, VIDEO_ID } from '../config/site'
import FadeIn from '../components/FadeIn'
import SectionLabel from '../components/SectionLabel'

/** Lazy-loaded YouTube embed: shows the thumbnail + play button first, only mounting the iframe (and paying its load cost) once clicked. */
function YouTubeEmbed({ videoId }: { videoId: string }) {
  const [playing, setPlaying] = useState(false)

  if (playing) {
    return (
      <iframe
        className="h-full w-full"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&playsinline=1`}
        title={videoSection.headline}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    )
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Play video: ${videoSection.headline}`}
      className="group relative h-full w-full"
    >
      <img
        src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        alt=""
        className="h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-charcoal/30 transition-colors duration-300 group-hover:bg-charcoal/10" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-bronze text-charcoal shadow-lg shadow-black/40 transition-transform duration-300 ease-out group-hover:scale-105">
          <Play className="ml-1 h-7 w-7" strokeWidth={1.75} fill="currentColor" />
        </div>
      </div>
    </button>
  )
}

function VideoPlaceholder() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-charcoal-light">
      <div className="flex h-16 w-16 items-center justify-center rounded-full border border-bronze/40 text-bronze">
        <Play className="ml-1 h-7 w-7" strokeWidth={1.5} fill="currentColor" />
      </div>
      <p className="text-sm font-light tracking-wide text-cream/50">{videoSection.placeholder}</p>
    </div>
  )
}

export default function Video() {
  return (
    <section className="bg-charcoal px-6 py-[40px] sm:px-8 sm:py-[60px]">
      <div className="mx-auto max-w-3xl text-center">
        <FadeIn>
          <SectionLabel>{videoSection.label}</SectionLabel>
          <h2 className="mt-5 text-4xl font-light leading-tight text-cream sm:text-5xl">
            {videoSection.headline}
          </h2>
        </FadeIn>
      </div>

      <FadeIn delay={0.15}>
        {/* Dark bezel around the 9:16 frame so the portrait shape reads as intentional rather than cropped. */}
        <div className="mx-auto mt-10 max-w-xs rounded-[2rem] border border-bronze/15 bg-charcoal-light p-3 sm:max-w-sm sm:p-4">
          <div className="relative mx-auto aspect-[9/16] max-h-[70vh] overflow-hidden rounded-2xl bg-black">
            {VIDEO_ID ? <YouTubeEmbed videoId={VIDEO_ID} /> : <VideoPlaceholder />}
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
