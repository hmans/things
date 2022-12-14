# @hmans/r3f-lifecycle

## Summary

This package provides a small collection of convenience hooks and components that allow you to hook callbacks into the various lifecycle stages of @react-three/fiber components.

## Motivation

- To provide both hooks and component versions of the same functionality, to let the user stay in comfy JSX land _just a little longer_.
- To provide these lifecycle utility components and hooks in the language of game engines, even though they are just thin wrappers around `useFrame` and `useEffect`.

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
