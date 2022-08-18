# @hmans/r3f-lifecycle

## Lifecycle Helpers for React-Three-Fiber

### OnAwake and useOnAwake

Use the `useOnAwake` hook to execute a function when the component is first mounted. The `state` parameter passed into the callback function contains a reference to the react-three-fiber state.

```tsx
useOnAwake((state) => {
  // do something when the component appears
})
```

`<OnAwake>` lets you do the same thing from JSX:

```tsx
<OnAwake
  fun={(state) => {
    /* do something when the component appears */
  }}
/>
```

### OnDestroy and useOnDestroy

Analogous to `<OnAwake>` and `useOnAwake`, these will execute the given callback function when the component is unmounted.

### OnUpdate and useOnUpdate

Use `useOnUpdate` to provide a callback that gets called every frame.

```tsx
useOnUpdate((dt) => {
  // do something every frame
})
```

> **Note**
> This hook merely wraps R3F's `useFrame` hook, with a minor change to the order of arguments passed in (deltatime first, R3F state second), and is merely provided for consistency with the other hooks.

`<OnUpdate>` lets you do the same thing from JSX:

```tsx
<OnUpdate
  fun={(dt, state) => {
    /* do something */
  }}
/>
```

### Effect and LayoutEffect

`<Effect>` and `<LayoutEffect>` are simple wrappers around React's `useEffect` and `useLayoutEffect` hooks and allow you to declare a callback that will be executed every time the component is rendered, or when one of the optionally provided dependencies has changed.

```tsx
<Effect
  fun={() => console.log("foo has changed to:", foo)}
  dependencies={[foo]}
/>
```
