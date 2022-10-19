# @hmans/event

## 0.2.0

### Minor Changes

- b6d65d6: **Breaking Change:** Reverted back to the class syntax, but shortened `addListener` and `removeListener` to just `add` and `remove`.

## 0.1.0

### Minor Changes

- 14d7a83: **Breaking Change:** Rewrote the library to use a functional approach.

  ```ts
  const onEvent = createEvent<number>()
  onEvent((number) => console.log("It happened! Number:", number))
  onEvent.emit(123)
  ```
