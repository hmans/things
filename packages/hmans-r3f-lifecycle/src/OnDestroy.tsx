import { RootState, useThree } from "@react-three/fiber"
import { useEffect } from "react"

export type OnDestroyCallback = (root: RootState) => void

export const useOnDestroy = (fun: OnDestroyCallback) => {
  const state = useThree()
  useEffect(() => () => fun(state), [])
}

export const OnDestroy = ({ fun }: { fun: OnDestroyCallback }) => {
  useOnDestroy(fun)
  return null
}
