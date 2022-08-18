import {
  DependencyList,
  EffectCallback,
  useEffect,
  useLayoutEffect
} from "react"

export type EffectProps = {
  fun: EffectCallback
  dependencies?: DependencyList
}

export const Effect = ({ fun, dependencies }: EffectProps) => {
  useEffect(fun, dependencies)
  return null
}

export const LayoutEffect = ({ fun, dependencies }: EffectProps) => {
  useLayoutEffect(fun, dependencies)
  return null
}
