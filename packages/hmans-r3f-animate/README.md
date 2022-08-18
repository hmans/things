# @hmans/r3f-animate

## Animate

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
