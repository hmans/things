import { useOnUpdate } from "@hmans/r3f-lifecycle"
import { GroupProps, RootState } from "@react-three/fiber"
import React, { forwardRef, useImperativeHandle, useRef } from "react"
import { Group } from "three"

export type AnimateUpdateCallback = (
  group: Group,
  dt: number,
  state: RootState
) => void

export type AnimateProps = GroupProps & {
  fun?: AnimateUpdateCallback
}

export const Animate = forwardRef<Group, AnimateProps>(
  ({ fun, ...props }, ref) => {
    const group = useRef<Group>(null!)

    useOnUpdate((dt, state) => {
      fun?.(group.current, dt, state)
    })

    useImperativeHandle(ref, () => group.current)

    return <group ref={group} {...props} />
  }
)
