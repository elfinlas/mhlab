import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FeatureImageCarousel } from "@/components/product/function-tabs/FeatureImageCarousel"
import { FunctionFeatureCapabilities } from "@/components/product/function-tabs/FunctionFeatureCapabilities"
import { FunctionFeatureDescription } from "@/components/product/function-tabs/FunctionFeatureDescription"
import { formatFeatureOrdinal } from "@/components/product/function-tabs/utils"
import type { FunctionFeature } from "@/components/product/function-tabs/types"

type FunctionTabsEditorialProps = {
  functions: FunctionFeature[]
  defaultTabId: string
}

export function FunctionTabsEditorial({
  functions,
  defaultTabId,
}: FunctionTabsEditorialProps) {
  return (
    <Tabs defaultValue={defaultTabId} className="w-full">
      <div className="flex flex-col gap-10 lg:grid lg:grid-cols-12 lg:items-start lg:gap-12">
        <TabsList className="relative z-10 flex h-auto w-full min-w-0 flex-shrink-0 flex-row gap-2 overflow-x-auto bg-transparent p-0 pb-1 lg:col-span-3 lg:flex-col lg:overflow-visible lg:pb-0">
          {functions.map((func, i) => (
            <TabsTrigger
              key={func.id}
              value={func.id}
              className="flex min-w-[min(220px,85vw)] flex-shrink-0 flex-col items-start justify-start rounded-2xl border border-transparent p-5 text-left transition-all hover:bg-slate-100/90 data-[state=active]:border-l-4 data-[state=active]:border-indigo-500 data-[state=active]:bg-slate-100 data-[state=active]:shadow-md dark:hover:bg-slate-800/70 dark:data-[state=active]:bg-slate-800/95 lg:min-h-0 lg:min-w-0 lg:w-full lg:whitespace-normal lg:p-6"
            >
              <span className="mb-1 block text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500 data-[state=active]:text-indigo-600 dark:text-slate-400 dark:data-[state=active]:text-indigo-400">
                Feature {formatFeatureOrdinal(i)}
              </span>
              <span className="block break-words text-base font-bold leading-snug text-slate-700 data-[state=active]:text-slate-900 dark:text-slate-300 dark:data-[state=active]:text-white lg:text-lg">
                {func.title}
              </span>
            </TabsTrigger>
          ))}
        </TabsList>

        <div className="relative z-0 min-w-0 lg:col-span-9">
          {functions.map((func) => (
            <TabsContent
              key={func.id}
              value={func.id}
              className="mt-0 border-0 p-0 outline-none focus-visible:outline-none data-[state=inactive]:hidden"
            >
              <div className="rounded-[2rem] border border-slate-200/80 bg-white/80 p-5 shadow-[0_24px_60px_rgba(0,0,0,0.06)] backdrop-blur-xl dark:border-slate-700/45 dark:bg-slate-950/50 dark:shadow-[0_24px_60px_rgba(0,0,0,0.35)] lg:rounded-[3rem] lg:p-10">
                <div className="flex flex-col gap-10 md:grid md:grid-cols-2 md:items-center md:gap-12">
                  <div className="w-full">
                    {func.images?.length ? (
                      <FeatureImageCarousel
                        variant="editorial"
                        images={func.images}
                        title={func.title}
                      />
                    ) : null}
                  </div>
                  <div className="space-y-6 md:pr-2">
                    <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white md:text-3xl">
                      {func.title}
                    </h3>
                    <FunctionFeatureDescription
                      paragraphs={func.description}
                      variant="editorial"
                    />
                    <FunctionFeatureCapabilities
                      features={func.features}
                      variant="editorial"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </div>
      </div>
    </Tabs>
  )
}
