export interface FunctionFeature {
  id: string
  title: string
  description: string[]
  features: string[]
  images: string[]
}

export interface FunctionTabsProps {
  functions: FunctionFeature[]
  /** test_res/code.html 스타일 — 세로 탭 + 글래스 패널 */
  variant?: "default" | "editorial"
}

export type CarouselVariant = "default" | "editorial"
