import { sanitizeProductParagraph } from "@/components/product/function-tabs/utils"
import type { FunctionFeature } from "@/components/product/function-tabs/types"

type FunctionFeatureDescriptionProps = {
  paragraphs: FunctionFeature["description"]
  variant?: "default" | "editorial"
}

export function FunctionFeatureDescription({
  paragraphs,
  variant = "default",
}: FunctionFeatureDescriptionProps) {
  if (variant === "editorial") {
    return (
      <div className="space-y-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">
        {paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className="whitespace-pre-line tracking-[0.01em]"
            dangerouslySetInnerHTML={{
              __html: sanitizeProductParagraph(paragraph),
            }}
          />
        ))}
      </div>
    )
  }

  return (
    <div className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
      {paragraphs.map((paragraph, index) => (
        <p
          key={index}
          className="mb-5 whitespace-pre-line leading-6 tracking-[0.012em] last:mb-0 md:leading-5 md:tracking-[0.006em]"
          dangerouslySetInnerHTML={{
            __html: sanitizeProductParagraph(paragraph),
          }}
        />
      ))}
    </div>
  )
}
