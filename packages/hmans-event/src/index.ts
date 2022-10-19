export type Listener<P> = (payload: P) => void

export const createEvent = <P = void>() => {
  const listeners = new Set<Listener<P>>()

  const remove = (listener: Listener<P>) => {
    listeners.delete(listener)
  }

  const add = (listener: Listener<P>) => {
    listeners.add(listener)
    return () => remove(listener)
  }

  const emit = (payload: P) => {
    listeners.forEach((listener) => listener(payload))
  }

  const clear = () => {
    listeners.clear()
  }

  add.remove = remove
  add.emit = emit
  add.clear = clear

  return add
}
