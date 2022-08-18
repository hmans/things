# carbs

## 0.0.3

### Patch Changes

- da3bcca: Fix React JSX integration.

## 0.0.2

### Patch Changes

- a111d48: Added `useOnUpdate` and `OnUpdate`, a hook and component pairing for adding per-frame callbacks, wrapping R3F's `useFrame`.
- 1aa5790: Added `Effect` and `LayoutEffect`.
- fa963d2: Added the `<Animate>` component:

  ```tsx
  <Animate
    update={(o: Object3D, dt: number) => {
      o.rotation.x += dt * 0.7
      o.rotation.y += dt * 0.5
    }}
  >
    <mesh>
      <icosahedronGeometry />
      <meshStandardMaterial color="#E9C46A" metalness={0.5} roughness={0.5} />
    </mesh>
  </Animate>
  ```

- 7cbb6d3: First version of Carbs, yay!
