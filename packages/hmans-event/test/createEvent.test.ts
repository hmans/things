import { createEvent } from "../src"

describe("createEvent", () => {
  it("creates a new event", () => {
    const event = createEvent<number>()
    expect(event).toBeInstanceOf(Function)
  })

  it("calling the event will add a listener", () => {
    const event = createEvent<number>()
    const listener = jest.fn()
    event(listener)

    event.emit(123)
    expect(listener).toHaveBeenCalledWith(123)
  })

  it("emit will invoke the event", () => {
    const event = createEvent<number>()
    const listener = jest.fn()
    event(listener)

    event.emit(123)
    expect(listener).toHaveBeenCalledWith(123)
  })

  it("clear will remove all listeners", () => {
    const event = createEvent<number>()
    const listener = jest.fn()
    event(listener)

    event.clear()
    event.emit(123)
    expect(listener).not.toHaveBeenCalled()
  })
})
