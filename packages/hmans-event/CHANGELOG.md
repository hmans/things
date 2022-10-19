# @hmans/event

## 0.3.0

### Minor Changes

- 261d9d3: **Breaking Change:** The generic for `Event` now must be an array (to support multiple payload arguments.)

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
