import { useState } from "react"

export default function useArray(defaultValue: any) {
  const [array, setArray] = useState(defaultValue)

  function push(element: any) {
    setArray((a: any) => [...a, element])
  }

  function filter(callback: any) {
    setArray((a: any[]) => a.filter(callback))
  }
  function clear() {
    setArray([])
  }

  return { array, set: setArray, push, filter, clear }
}