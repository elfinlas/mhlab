"use client"

import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FeatureImageCarouselModal } from "@/components/product/function-tabs/FeatureImageCarouselModal"
import { useFeatureCarousel } from "@/components/product/function-tabs/useFeatureCarousel"
import { formatSlideCounter } from "@/components/product/function-tabs/utils"
import type { CarouselVariant } from "@/components/product/function-tabs/types"

type FeatureImageCarouselProps = {
  images: string[]
  title: string
  variant?: CarouselVariant
}

export function FeatureImageCarousel({
  images,
  title,
  variant = "default",
}: FeatureImageCarouselProps) {
  const {
    currentIndex,
    setCurrentIndex,
    modalOpen,
    setModalOpen,
    next,
    prev,
    goTo,
  } = useFeatureCarousel(images.length)

  if (images.length === 0) return null

  const shellClass =
    variant === "editorial"
      ? "relative group flex min-h-[280px] w-full items-center justify-center overflow-hidden rounded-2xl bg-slate-100 md:min-h-[450px] dark:bg-slate-900/70"
      : "relative group flex min-h-[300px] w-full items-center justify-center overflow-hidden rounded-lg bg-gray-100 md:min-h-[600px]"

  const navButtonClass =
    variant === "editorial"
      ? "pointer-events-auto cursor-pointer border border-white/20 bg-black/30 text-white shadow-lg backdrop-blur-md hover:bg-black/45 dark:border-white/10"
      : "pointer-events-auto cursor-pointer bg-white/90 shadow-lg hover:bg-white"

  return (
    <>
      <div className={shellClass}>
        <Image
          src={images[currentIndex] || "/placeholder.svg"}
          alt={`${title} - Image ${currentIndex + 1}`}
          fill
          className={`relative z-10 cursor-zoom-in object-contain transition-all duration-300 ${
            variant === "editorial" ? "p-2 md:p-4" : "h-full w-full"
          }`}
          onClick={() => setModalOpen(true)}
        />
        {variant === "editorial" ? (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-slate-900/50 to-transparent dark:from-black/60" />
        ) : null}
        {images.length > 1 && (
          <>
            <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-between p-3 md:p-4">
              <Button
                variant="secondary"
                size="icon"
                onClick={prev}
                className={navButtonClass}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="secondary"
                size="icon"
                onClick={next}
                className={navButtonClass}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            {variant === "editorial" ? (
              <div className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 items-center gap-4 rounded-full border border-white/15 bg-black/30 px-5 py-2.5 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-md dark:border-white/10 dark:bg-black/40">
                <button
                  type="button"
                  onClick={prev}
                  className="text-white/60 transition-colors hover:text-white"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <span>{formatSlideCounter(currentIndex, images.length)}</span>
                <button
                  type="button"
                  onClick={next}
                  className="text-white/60 transition-colors hover:text-white"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <>
                <div className="absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 transform gap-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => goTo(index)}
                      className={`h-2 w-2 rounded-full transition-all ${
                        index === currentIndex
                          ? "scale-125 bg-white"
                          : "bg-white/50 hover:bg-white/75"
                      }`}
                    />
                  ))}
                </div>
                <div className="absolute right-4 top-4 z-30 rounded bg-black/50 px-2 py-1 text-sm text-white">
                  {currentIndex + 1} / {images.length}
                </div>
              </>
            )}
          </>
        )}
      </div>

      {modalOpen ? (
        <FeatureImageCarouselModal
          images={images}
          title={title}
          currentIndex={currentIndex}
          onClose={() => setModalOpen(false)}
          onPrev={() =>
            setCurrentIndex((i) => (i - 1 + images.length) % images.length)
          }
          onNext={() =>
            setCurrentIndex((i) => (i + 1) % images.length)
          }
          onSelectIndex={goTo}
        />
      ) : null}
    </>
  )
}
