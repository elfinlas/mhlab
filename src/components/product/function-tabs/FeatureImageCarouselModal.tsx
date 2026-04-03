"use client"

import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"

type FeatureImageCarouselModalProps = {
  images: string[]
  title: string
  currentIndex: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
  onSelectIndex: (index: number) => void
}

export function FeatureImageCarouselModal({
  images,
  title,
  currentIndex,
  onClose,
  onPrev,
  onNext,
  onSelectIndex,
}: FeatureImageCarouselModalProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted || typeof document === "undefined") {
    return null
  }

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${title} 이미지 보기`}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative flex h-full w-full flex-col items-center justify-center p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="absolute right-4 top-4 z-[220] rounded-full bg-black/50 p-3 text-white transition-colors hover:bg-black/70"
          onClick={onClose}
        >
          <X className="h-6 w-6" />
        </button>
        <div className="pointer-events-none absolute inset-0 z-[210] flex items-center justify-between p-4">
          <Button
            variant="secondary"
            size="icon"
            onClick={(e) => {
              e.stopPropagation()
              onPrev()
            }}
            className="pointer-events-auto z-[220] cursor-pointer bg-white/90 shadow-lg hover:bg-white"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="secondary"
            size="icon"
            onClick={(e) => {
              e.stopPropagation()
              onNext()
            }}
            className="pointer-events-auto z-[220] cursor-pointer bg-white/90 shadow-lg hover:bg-white"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
        <div className="relative z-[205] flex h-full min-h-0 w-full min-w-0 flex-1 items-center justify-center p-4">
          <Image
            src={images[currentIndex] || "/placeholder.svg"}
            alt={`${title} - Image ${currentIndex + 1}`}
            width={1200}
            height={800}
            className="h-auto max-h-[95vh] w-auto max-w-[95vw] rounded-lg object-contain shadow-2xl"
            sizes="95vw"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
        <div className="absolute bottom-8 left-1/2 z-[220] flex -translate-x-1/2 transform gap-3">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                onSelectIndex(index)
              }}
              className={`h-4 w-4 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "scale-125 bg-white shadow-lg"
                  : "bg-white/50 hover:scale-110 hover:bg-white/75"
              }`}
            />
          ))}
        </div>
        <div className="absolute left-1/2 top-8 z-[220] -translate-x-1/2 transform rounded-full bg-black/50 px-4 py-2 text-lg text-white">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>,
    document.body,
  )
}
