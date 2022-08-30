# @hmans/r3f-shared-resource

## 0.1.0

### Minor Changes

- 15d470a: The API has been changed to be a little less surprising. You now have to explicitly mount the resource using the `Mount` component, and use it using `Use`. Example:

  ```jsx
  <SharedMaterial.Mount />
  <mesh>
    <SharedMaterial.Use />
  </mesh>
  ```

  `Use` now also supports the `attach` prop, which can be useful when using shared depth materials:

  ```jsx
  <mesh>
    <SharedMaterial.Use />
    <SharedDepthMaterial.Use attach="customDepthMaterial" />
  </mesh>
  ```

## 0.0.1

- First release!
