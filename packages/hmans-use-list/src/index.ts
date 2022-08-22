import { useCallback, useState } from "react"

export const useList = <T>(
  initial: T[] | (() => T[]) = () => new Array<T>()
) => {
  const [list, setList] = useState(initial)

  const add = useCallback((item: T) => {
    setList((list) => [...list, item])
  }, [])

  const remove = useCallback((item: T) => {
    setList((list) => list.filter((i) => i !== item))
  }, [])

  return [list, add, remove, setList] as const
}
