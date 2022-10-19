---
"@hmans/event": minor
---

**Breaking Change:** Rewrote the library to use a functional approach.

```ts
const onEvent = createEvent<number>()
onEvent((number) => console.log("It happened! Number:", number))
onEvent.emit(123)
```
