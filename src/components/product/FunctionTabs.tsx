"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Check, X } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface FunctionFeature {
  id: string
  title: string
  description: string[]
  features: string[]
  images: string[]
}

interface FunctionTabsProps {
  functions: FunctionFeature[]
}

function FeatureImageCarousel({ images, title }: { images: string[]; title: string }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [modalOpen, setModalOpen] = useState(false)

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  if (images.length === 0) return null

  return (
    <>
      <div className="relative group w-full h-full min-h-[300px] md:min-h-[600px] overflow-hidden rounded-lg bg-gray-100 flex items-center justify-center">
        <Image
          src={images[currentIndex] || "/placeholder.svg"}
          alt={`${title} - Image ${currentIndex + 1}`}
          fill
          className="object-contain w-full h-full transition-all duration-300 cursor-zoom-in"
          onClick={() => setModalOpen(true)}
        />
        {images.length > 1 && (
          <>
            {/* Navigation Buttons */}
            <div className="absolute inset-0 flex items-center justify-between p-4 z-20 pointer-events-none">
              <Button
                variant="secondary"
                size="icon"
                onClick={prevImage}
                className="bg-white/90 hover:bg-white shadow-lg pointer-events-auto cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="secondary"
                size="icon"
                onClick={nextImage}
                className="bg-white/90 hover:bg-white shadow-lg pointer-events-auto cursor-pointer"
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
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
                  }`}
                />
              ))}
            </div>

            {/* Image Counter */}
            <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-sm z-30">
              {currentIndex + 1} / {images.length}
            </div>
          </>
        )}
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
                  setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
                }}
                className="bg-white/90 hover:bg-white shadow-lg cursor-pointer pointer-events-auto z-50"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              <Button
                variant="secondary"
                size="icon"
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex((prev) => (prev + 1) % images.length);
                }}
                className="bg-white/90 hover:bg-white shadow-lg cursor-pointer pointer-events-auto z-50"
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
    </>
  )
}

export function FunctionTabs({ functions }: FunctionTabsProps) {
  return (
    <Tabs defaultValue={functions[0]?.id} className="w-full">
      <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 h-auto p-1 bg-gray-100 dark:bg-gray-800">
        {functions.map((func) => (
          <TabsTrigger
            key={func.id}
            value={func.id}
            className="text-sm font-medium py-3 px-4 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 data-[state=active]:shadow-sm dark:text-gray-300 dark:data-[state=active]:text-white"
          >
            {func.title}
          </TabsTrigger>
        ))}
      </TabsList>

      {functions.map((func) => (
        <TabsContent key={func.id} value={func.id} className="mt-8">
          <Card className="border-0 shadow-sm">
            <CardHeader className="pb-6">
              <CardTitle className="text-2xl text-gray-900 dark:text-white">{func.title}</CardTitle>
            </CardHeader>
            <CardContent className="py-8 px-4 md:px-8">
              <div className="md:grid md:grid-cols-2 md:gap-8 flex flex-col gap-8">
                {/* Left: Images */}
                <div className="flex items-center justify-center w-full h-full">
                  {func.images && func.images.length > 0 && (
                    <div className="w-full h-full">
                      <FeatureImageCarousel images={func.images} title={func.title} />
                    </div>
                  )}
                </div>
                {/* Right: Description & Features */}
                <div className="flex flex-col gap-8 justify-center">
                  {/* Description */}
                  <div className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    {func.description.map((paragraph, index) => (
                      <p key={index}
                      className="leading-6 md:leading-5 tracking-[0.012em] md:tracking-[0.006em] whitespace-pre-line mb-5 last:mb-0"
                        dangerouslySetInnerHTML={{
                          __html: paragraph
                            .replace(/<b>/g, '<strong>')
                            .replace(/<\/b>/g, '</strong>')
                        }}
                      />
                    ))}
                  </div>
                  {/* Features List */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Key Capabilities</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {func.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          <div className="w-5 h-5 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center flex-shrink-0">
                            <Check className="w-3 h-3 text-green-600 dark:text-green-400" />
                          </div>
                          <span className="text-gray-700 dark:text-gray-300 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      ))}
    </Tabs>
  )
}
