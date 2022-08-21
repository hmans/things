# @hmans/r3f-shared-resource

Stop creating those materials more often than needed, it's time to recycle! ♻️

## sharedResource

`sharedResource` decorates a react-three-fiber component to make the Three.js object it renders re-usable through a convenient API, while giving you full control over the lifecycle of the resource.

```tsx
import { sharedResource } from "@hmans/r3f-shared-resource"

/* Create a shared resource. Here, it's a material that we want to
reuse in multiple meshes. */
const SharedMaterial = sharedResource(() => (
  <meshPhysicalMaterial color="hotpink" />
))

const Game = () => (
  <group>
    {/* Somewhere in your app, create the actual resource.
    This element will control the lifetime of the actual resource;
    if it gets unmounted, the resource will be destroyed. */}
    <SharedMaterial.Resource />

    <Scene />
  </group>
)

/* Let's have multiple meshes using the same material! */
const Scene = () => (
  <group>
    <mesh position-x={-1.5}>
      <sphereGeometry />
      <SharedMaterial />
    </mesh>

    <mesh position-x={+1.5}>
      <dodecahedronGeometry />
      <SharedMaterial />
    </mesh>
  </group>
)
```

## Additional Notes

### Will this work with geometries, too?

This will work with materials, geometries, and possibly even other types of objects; but materials and geometries are the most common use cases.

### I hate having an extra `<Foo.Resource />` element, why can't this be automated?

Automating the creation of the actual resource is not terribly complicated, but I consider it an anti-pattern that _will_ get you into trouble sooner or later, so I decided against including it in this library. Consider being in complete control over the lifecycle of the shared resource a _feature_, not a caveat.
