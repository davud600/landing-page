import { useEffect } from "react"

export function useChangeGridRows(setState, {
  amountOfItems,
  getIsScreenWide
}) {
  const updateGridRows = () => {
    const isScreenWide = getIsScreenWide()
    amountOfItems = Math.max(1, amountOfItems)
    setState(isScreenWide.toString() === " 1" ? Math.min(amountOfItems, 3):1)
  }
  updateGridRows()

  useEffect(() => {
    const handleResize = () => {
      updateGridRows()
    }
    
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  })
}