import { Check } from "lucide-react"
import type { FunctionFeature } from "@/components/product/function-tabs/types"

type FunctionFeatureCapabilitiesProps = {
  features: FunctionFeature["features"]
  variant?: "default" | "editorial"
}

export function FunctionFeatureCapabilities({
  features,
  variant = "default",
}: FunctionFeatureCapabilitiesProps) {
  if (variant === "editorial") {
    return (
      <div className="space-y-4">
        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
          Key capabilities
        </h4>
        <div className="flex flex-col gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex w-full gap-3 rounded-xl border border-slate-200/60 bg-slate-50/90 p-3 dark:border-slate-700/50 dark:bg-slate-900/60"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-indigo-600 shadow-sm dark:bg-slate-800 dark:text-indigo-400">
                <Check className="h-4 w-4" />
              </div>
              <span className="font-medium leading-snug text-slate-800 dark:text-slate-200">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div>
      <h4 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
        Key Capabilities
      </h4>
      <div className="flex flex-col gap-3">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex w-full items-center gap-3 rounded-lg bg-gray-50 p-3 dark:bg-gray-800"
          >
            <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
              <Check className="h-3 w-3 text-green-600 dark:text-green-400" />
            </div>
            <span className="font-medium text-gray-700 dark:text-gray-300">
              {feature}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
