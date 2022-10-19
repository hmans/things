# @hmans/event

## 0.1.0

### Minor Changes

- 14d7a83: **Breaking Change:** Rewrote the library to use a functional approach.

  ```ts
  const onEvent = createEvent<number>()
  onEvent((number) => console.log("It happened! Number:", number))
  onEvent.emit(123)
  ```
