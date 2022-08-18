# @hmans/use-version

## Summary

`useVersion` provides a numerical version number as well as a function that will bump it up by one. This is a simple mechanism for writing components that need to re-render on specific occasions, and have side effects that need to react to the version number increasing.

```tsx
import { useVersion } from "@hmans/use-version"

const MyComponent = () => {
  const [version, bump] = useVersion()

  useEffect(() => {
    console.log("Someone bumped the version to", version)
  }, [version])

  return (
    <div>
      <p>Version: {version}</p>
      <button onClick={bump}>Bump</button>
    </div>
  )
}
```
