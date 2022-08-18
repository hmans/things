import { useRef } from "react"

export const useConst = <T>(ctor: () => T) => {
  /* Create a ref of the matching type. */
  const ref = useRef<T>()

  /* If the ref hasn't been initialized, initialize it. */
  if (!ref.current) ref.current = ctor()

  /* Return the ref's value. */
  return ref.current
}
