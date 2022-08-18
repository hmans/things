import { RootState, useThree } from "@react-three/fiber"
import { useEffect } from "react"

export type OnAwakeCallback = (state: RootState) => void

export const useOnAwake = (fun: OnAwakeCallback) => {
  const state = useThree()
  useEffect(() => fun(state), [])
}

export const OnAwake = ({ fun }: { fun: OnAwakeCallback }) => {
  useOnAwake(fun)
  return null
}
