# @hmans/use-const

## Summary

`useConst`, a simple hook that allows you to define a contant value that will never change during the lifetime of the component.

```tsx
import { useConst } from "@hmans/use-const"

const MyComponent = () => {
  const foo = useConst(() => new Foo())
  /* ... */
}
```

## Motivation

Typically, you might use `useMemo` or `useState` for these things. `useMemo` doesn't give you a guarantee that it will never re-run its initializar function (which can be bad, depending on what kind of value you're dealing with), and `useState` adds state tracking overhead that sometimes is not needed.
