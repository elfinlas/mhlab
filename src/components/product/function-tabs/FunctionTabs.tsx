"use client"

import { FunctionTabsDefault } from "@/components/product/function-tabs/FunctionTabsDefault"
import { FunctionTabsEditorial } from "@/components/product/function-tabs/FunctionTabsEditorial"
import type { FunctionTabsProps } from "@/components/product/function-tabs/types"

export function FunctionTabs({ functions, variant = "default" }: FunctionTabsProps) {
  const firstId = functions[0]?.id
  if (!firstId) return null

  if (variant === "editorial") {
    return (
      <FunctionTabsEditorial functions={functions} defaultTabId={firstId} />
    )
  }

  return <FunctionTabsDefault functions={functions} defaultTabId={firstId} />
}
