export type Constructor<T, A extends any[]> = new (...args: A) => T

export type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>
