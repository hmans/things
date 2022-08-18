import { GroupProps, RootState } from "@react-three/fiber"
import React, { useRef } from "react"
import { Group } from "three"
import { useOnUpdate } from "./OnUpdate"

export type AnimateUpdateCallback = (
  group: Group,
  dt: number,
  state: RootState
) => void

export type AnimateProps = GroupProps & {
  fun?: AnimateUpdateCallback
}

export const Animate = ({ fun, ...props }: AnimateProps) => {
  const group = useRef<Group>(null!)

  useOnUpdate((dt, state) => {
    fun?.(group.current, dt, state)
  })

  return <group ref={group} {...props} />
}
