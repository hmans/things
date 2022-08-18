import { RootState, useFrame } from "@react-three/fiber"

export type UpdateCallback = (dt: number, state: RootState) => void

export type OnUpdateProps = {
  fun: UpdateCallback
  priority?: number
}

export const useOnUpdate = (fun: UpdateCallback, priority?: number) => {
  useFrame((state, dt) => {
    fun?.(dt, state)
  }, priority)
}

export const OnUpdate = ({ fun, priority }: OnUpdateProps) => {
  useOnUpdate(fun, priority)
  return null
}
