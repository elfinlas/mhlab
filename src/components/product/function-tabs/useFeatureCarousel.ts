import { useCallback, useState } from "react"

export function useFeatureCarousel(imageCount: number) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [modalOpen, setModalOpen] = useState(false)

  const safeCount = Math.max(imageCount, 1)

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % safeCount)
  }, [safeCount])

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + safeCount) % safeCount)
  }, [safeCount])

  const goTo = useCallback((index: number) => {
    setCurrentIndex(index)
  }, [])

  return {
    currentIndex,
    setCurrentIndex,
    modalOpen,
    setModalOpen,
    next,
    prev,
    goTo,
  }
}
