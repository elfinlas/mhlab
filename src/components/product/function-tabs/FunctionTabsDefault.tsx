import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CardHeader, CardTitle } from "@/components/ui/card"
import { FeatureImageCarousel } from "@/components/product/function-tabs/FeatureImageCarousel"
import { FunctionFeatureCapabilities } from "@/components/product/function-tabs/FunctionFeatureCapabilities"
import { FunctionFeatureDescription } from "@/components/product/function-tabs/FunctionFeatureDescription"
import type { FunctionFeature } from "@/components/product/function-tabs/types"

type FunctionTabsDefaultProps = {
  functions: FunctionFeature[]
  defaultTabId: string
}

export function FunctionTabsDefault({
  functions,
  defaultTabId,
}: FunctionTabsDefaultProps) {
  return (
    <div className="mx-auto w-full max-w-screen-2xl">
      <Tabs defaultValue={defaultTabId} className="w-full">
        <TabsList className="grid h-auto w-full grid-cols-2 gap-1 rounded-xl bg-gray-100 p-1.5 dark:bg-gray-800 sm:p-2 lg:grid-cols-4">
          {functions.map((func) => (
            <TabsTrigger
              key={func.id}
              value={func.id}
              className="min-h-11 px-3 py-3 text-sm font-medium data-[state=active]:bg-white data-[state=active]:shadow-sm dark:text-gray-300 dark:data-[state=active]:bg-gray-700 dark:data-[state=active]:text-white sm:px-4 sm:py-3.5"
            >
              {func.title}
            </TabsTrigger>
          ))}
        </TabsList>

        {functions.map((func) => (
          <TabsContent
            key={func.id}
            value={func.id}
            className="mt-8 w-full outline-none data-[state=inactive]:hidden"
          >
            {/*
              Card 기본 flex와 h-full% 체인이 Radix Tabs 안에서 높이를 못 잡는 경우가 많아,
              grid-rows로 상단(제목) / 중앙(이미지+설명) / 하단(capabilities)을 고정한다.
            */}
            <div
              className="grid min-h-[min(72vh,56rem)] w-full grid-rows-[auto_minmax(0,1fr)_auto] overflow-hidden rounded-xl border border-border bg-card text-card-foreground shadow-sm"
            >
              <CardHeader className="z-10 border-b border-gray-200/90 bg-card pb-4 pt-6 dark:border-gray-700/80 !px-3 sm:!px-5 md:!px-7 lg:!px-8">
                <CardTitle className="text-2xl text-gray-900 dark:text-white md:text-3xl">
                  {func.title}
                </CardTitle>
              </CardHeader>

              <div className="min-h-0 overflow-y-auto px-3 py-6 sm:px-5 md:px-7 lg:px-8 lg:py-8">
                <div className="grid min-h-min grid-cols-1 gap-8 md:min-h-[18rem] md:grid-cols-2 md:gap-10 lg:gap-14 xl:gap-16">
                  <div className="flex w-full items-start justify-center md:min-h-0 md:items-center">
                    {func.images?.length ? (
                      <div className="w-full">
                        <FeatureImageCarousel
                          images={func.images}
                          title={func.title}
                        />
                      </div>
                    ) : null}
                  </div>
                  <div className="flex flex-col justify-center">
                    <FunctionFeatureDescription paragraphs={func.description} />
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200/90 bg-card px-3 pb-8 pt-8 dark:border-gray-700/80 sm:px-5 md:px-7 lg:px-8 lg:pb-10">
                <FunctionFeatureCapabilities features={func.features} />
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
