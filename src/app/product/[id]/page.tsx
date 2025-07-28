import { notFound } from "next/navigation"
import {  ExternalLink,  Globe } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FunctionTabs } from "@/components/product/FunctionTabs"
import { ImageCarousel } from "@/components/product/ImageCarousel"
import { productItemList } from "@/data/Product"
import ProductDetailHeader from "@/components/product/detail/Header"
import { BsAndroid, BsApple } from "react-icons/bs"



export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const awaitedParams = await params;
  const project = productItemList.find((p) => p.id === awaitedParams.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <ProductDetailHeader />

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Project Title */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">{project.title}</h1>
          <div className="flex items-center justify-center gap-4 mb-6">
            <Badge variant="secondary">{project.category}</Badge>
          </div>
        </div>

        {/* Project Overview and Image Carousel */}
        <div className="mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Project Overview */}
            <div className="space-y-8 order-2 md:order-1">
              {/* Description */}
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Overview</h2>
                  <div className="text-base font-medium text-gray-600 dark:text-gray-300 leading-relaxed">
                    {project.description.map((paragraph, index) => (
                      <p key={index} 
                         dangerouslySetInnerHTML={{ 
                           __html: paragraph
                             .replace(/\n/g, '<br><br>')
                             .replace(/<b>/g, '<strong>')
                             .replace(/<\/b>/g, '</strong>')
                         }} 
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Key Points */}
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Key Points</h3>
                  <div className="space-y-3">
                    {project.keyPoints.map((point, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-gray-500 dark:bg-gray-400 rounded-full flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{point}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Links */}
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Links</h3>
                  <div className={`grid gap-4 ${
                    project.links.type === "web" ? "grid-cols-1" :
                    project.links.type === "mobile" ? "grid-cols-1 md:grid-cols-2" :
                    "grid-cols-1 md:grid-cols-3"
                  }`}>
                    {project.links.type === "mobile" || project.links.type === "full" && (
                      <>
                        {project.links.appStore && (
                          <Button asChild className="bg-black hover:bg-gray-800 dark:text-white">
                            <a href={project.links.appStore} target="_blank" rel="noopener noreferrer">
                              <BsApple className="w-4 h-4 mr-2 " />
                              App Store
                              <ExternalLink className="w-4 h-4 ml-2" />
                            </a>
                          </Button>
                        )}
                        {project.links.googlePlay && (
                          <Button asChild className="bg-green-600 hover:bg-green-700 dark:text-white">
                            <a href={project.links.googlePlay} target="_blank" rel="noopener noreferrer">
                              <BsAndroid className="w-4 h-4 mr-2" />
                              Google Play
                              <ExternalLink className="w-4 h-4 ml-2" />
                            </a>
                          </Button>
                        )}
                      </>
                    )}
                    {project.links.type === "website" || project.links.website && (
                      <Button asChild className="bg-blue-400 hover:bg-blue-500 dark:text-white">                        
                        <a href={project.links.website} target="_blank" rel="noopener noreferrer">
                          <Globe className="w-4 h-4 mr-2" />
                          Visit Website 
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Image Carousel */}
            <div className="flex items-center justify-center order-1 md:order-2">
              <Card className="overflow-hidden border-0 shadow-lg w-full h-full max-w-[500px] mx-auto">
                <CardContent className="p-0 w-full h-full">
                  <div className="w-full h-full">
                    <ImageCarousel images={project.images} title={project.title} />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Function Tabs */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Features & Functionality</h2>
          <FunctionTabs functions={project.functions} />
        </div>
      </div>
    </div>
  )
}
