import Link from "next/link"
import { ArrowRight,  Tag } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ImageCarousel } from "@/components/product/ImageCarousel"
import React from "react"

interface Project {
  id: string
  title: string
  category: string
  description: string | string[]
  mainFeatures: string[]
  images: string[]
  color: string
}

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const isEven = index % 2 === 0

  return (
    <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-white h-full">
      <CardContent className="p-0 h-full">
        <div className={`h-full grid lg:grid-cols-2 gap-0 ${!isEven ? "lg:grid-flow-col-dense" : ""}`}>
          {/* Image Section */}
          <div className={`relative h-full min-h-0 flex flex-col ${!isEven ? "lg:col-start-2" : ""}`}>
            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 z-10`} />
            <div className="flex-1 min-h-0">
              <ImageCarousel images={project.images} title={project.title} />
            </div>
          </div>

          {/* Content Section */}
          <div className={`p-8 lg:p-12 flex flex-col justify-center flex-grow-0 ${!isEven ? "lg:col-start-1" : ""}`}>
            <div className="flex items-center gap-4 mb-4">
              <Badge variant="secondary" className="flex items-center gap-1">
                <Tag className="w-3 h-3" />
                {project.category}
              </Badge>
              
            </div>

            <h3 className="text-3xl font-bold text-slate-900 mb-4">{project.title}</h3>

            {Array.isArray(project.description) ? (
              <div className="text-slate-600 text-lg leading-relaxed mb-6">
                {project.description.map((line, idx) => (
                  <React.Fragment key={idx}>
                    {line}
                    <br />
                    <br />
                  </React.Fragment>
                ))}
              </div>
            ) : (
              <p className="text-slate-600 text-lg leading-relaxed mb-6">{project.description}</p>
            )}

            <div className="mb-8">
              <h4 className="text-sm font-semibold text-slate-900 mb-3 uppercase tracking-wide">Key Features</h4>
              <div className="grid grid-cols-2 gap-2">
                {project.mainFeatures.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.color}`} />
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            <Link href={`/product/${project.id}`} className="group !cursor-pointer">
              <Button size="lg" className="group group-hover:cursor-pointer">
                자세히
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
