# @hmans/use-animation-frame

## Summary

`useAnimationFrame` is a React hook that allows you to subscribe to the browser's animation frame. A single argument will be passed back into this callback, containing the previous frame's delta time. This delta time value is clamped to 1 second, to prevent the animation from going haywire if the browser tab has been inactive for a while.

```tsx
import { useAnimationFrame } from "@hmans/use-animation-frame"

function MyComponent() {
  useAnimationFrame((dt) => {
    /* Will be executed every frame */
  })
}
```

By default, this per-frame callback will be unmounted and remounted every time your component re-renders. You may optionally provide a second argument to `useAnimationFrame` that will be used as a dependency array for the effect hook that is used internally. This way, you can ensure that the callback will only be called when the dependencies change:

```tsx
function MyComponent({ thing }) {
  useAnimationFrame(
    (dt) => {
      /* Do something with thing */
    },
    [thing]
  )
}
```

## License

```
Copyright (c) 2022 Hendrik Mans

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
