"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ImageCarouselProps {
  images: string[]
  title: string
}

export function ImageCarousel({ images, title }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [fade, setFade] = useState(true)
  const [modalOpen, setModalOpen] = useState(false)
  const [timerKey, setTimerKey] = useState(0)

  // 자동 전환
  useEffect(() => {
    if (images.length <= 1) return;
    
    // 모달이 열려있으면 자동 전환 중지
    if (modalOpen) return;
    
    const interval = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length)
        setFade(true)
      }, 300) // 페이드 아웃 후 이미지 변경
    }, 5000)
    return () => clearInterval(interval)
  }, [images.length, modalOpen, timerKey])

  // 수동 전환도 부드럽게
  const nextImage = () => {
    // 모달이 열려있으면 동작하지 않음
    if (modalOpen) return;
    
    setFade(false)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
      setFade(true)
      setTimerKey((k) => k + 1) // 타이머 초기화
    }, 300)
  }
  const prevImage = () => {
    // 모달이 열려있으면 동작하지 않음
    if (modalOpen) return;
    
    setFade(false)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
      setFade(true)
      setTimerKey((k) => k + 1) // 타이머 초기화
    }, 300)
  }

  // 모달 내부 전용 네비게이션 함수
  const modalNextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }
  
  const modalPrevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="relative group w-full">
      {/* Main Image Container */}
      <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden rounded-lg bg-gray-100">
        <Image
          src={images[currentIndex] || "/placeholder.svg"}
          alt={`${title} - Image ${currentIndex + 1}`}
          fill
          className={`object-contain transition-all duration-500 ease-in-out scale-110 cursor-zoom-in ${
            fade ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          priority={currentIndex === 0}
          onClick={() => setModalOpen(true)}
        />
        
        {/* Navigation Overlay */}
        <div className="absolute inset-0 flex items-center justify-between p-4 z-20 pointer-events-none">
          <Button
            variant="secondary"
            size="icon"
            onClick={prevImage}
            className="bg-white/90 hover:bg-white shadow-lg cursor-pointer pointer-events-auto z-30 transition-all duration-200 hover:scale-110"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="secondary"
            size="icon"
            onClick={nextImage}
            className="bg-white/90 hover:bg-white shadow-lg cursor-pointer pointer-events-auto z-30 transition-all duration-200 hover:scale-110"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-30">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? "bg-white scale-125 shadow-lg" 
                  : "bg-white/50 hover:bg-white/75 hover:scale-110"
              }`}
            />
          ))}
        </div>

        {/* Image Counter */}
        <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm z-30">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Fullscreen Modal */}
      {modalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm" 
          onClick={() => setModalOpen(false)}
        >
          <div className="relative w-full h-full flex flex-col items-center justify-center p-4" onClick={e => e.stopPropagation()}>
            <button 
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-3 z-60 hover:bg-black/70 transition-colors" 
              onClick={() => setModalOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>
            
            {/* Modal Navigation */}
            <div className="absolute inset-0 flex items-center justify-between p-4 pointer-events-none z-40">
              <Button
                variant="secondary"
                size="icon"
                onClick={(e) => {
                  e.stopPropagation();
                  modalPrevImage();
                }}
                className="bg-white/90 hover:bg-white shadow-lg cursor-pointer pointer-events-auto z-50 transition-all duration-200 hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              <Button
                variant="secondary"
                size="icon"
                onClick={(e) => {
                  e.stopPropagation();
                  modalNextImage();
                }}
                className="bg-white/90 hover:bg-white shadow-lg cursor-pointer pointer-events-auto z-50 transition-all duration-200 hover:scale-110"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>

            <div className="relative w-full h-full flex items-center justify-center p-4 z-30">
              <Image
                src={images[currentIndex] || "/placeholder.svg"}
                alt={`${title} - Image ${currentIndex + 1}`}
                width={1200}
                height={800}
                className="object-contain max-h-[95vh] max-w-[95vw] w-auto h-auto rounded-lg shadow-2xl"
                sizes="95vw"
                onClick={(e) => e.stopPropagation()}
              />
            </div>

            {/* Modal Dots */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-50">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex(index);
                  }}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? "bg-white scale-125 shadow-lg" 
                      : "bg-white/50 hover:bg-white/75 hover:scale-110"
                  }`}
                />
              ))}
            </div>

            {/* Modal Counter */}
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-lg z-50">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
