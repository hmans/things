# @hmans/use-rerender

## Summary

`useRerender` returns a function that, when called, will cause the component to re-render, no questions asked.

```tsx
import { useRerender } from "@hmans/use-rerender"

const MyComponent = () => {
  const rerender = useRerender()

  useEffect(() => {
    console.log("This component was rendered!")
  })

  return (
    <div>
      <button onClick={rerender}>Bump</button>
    </div>
  )
}
```
