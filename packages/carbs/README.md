# Carbs

A nutritionally dubious, but comforting collection of utility components for react-three-fiber games.

## Goals

- Provide a set of useful hooks and components to make building games with react-three-fiber even more amazing.
- Where possible, provide all functionality as both a hook and a component, in order to force the user into the imperative layer a little less often.

## Misc Helpers

### Animate

The `<Animate>` component wraps its children in a scene object that can be used to apply an animation to everything inside it. It accepts a per-frame update callback via the `fun` prop that gets passed a reference to the scene object:

```tsx
function Thingy() {
  return (
    <Animate
      fun={(o: Object3D, dt: number) => {
        o.rotation.x += dt * 0.7
        o.rotation.y += dt * 0.5
      }}
    >
      <mesh>
        <icosahedronGeometry />
        <meshStandardMaterial color="#E9C46A" metalness={0.5} roughness={0.5} />
      </mesh>
    </Animate>
  )
}
```

**Pro tip:** Since the animation callbacks are just normal functions, how about providing higher-order functions for specific animation types?

```tsx
const autoRotate = (x: number, y: number, z: number) => (
  o: Object3D,
  dt: number
) => {
  o.rotation.x += dt * x
  o.rotation.y += dt * y
  o.rotation.z += dt * z
}

function Thingy() {
  return (
    <Animate update={autoRotate(0.7, 0.5, 0)}>
      <mesh>
        <icosahedronGeometry />
        <meshStandardMaterial color="#E9C46A" metalness={0.5} roughness={0.5} />
      </mesh>
    </Animate>
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
