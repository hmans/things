import { Event } from "../src"

describe("Event", () => {
  it("creates a new event", () => {
    const event = new Event()
    expect(event).toBeDefined()
  })

  describe("add", () => {
    it("adds a listener to the event", () => {
      const event = new Event()
      const listener = jest.fn()
      event.add(listener)
      expect(event.listeners.size).toBe(1)
    })

    it("returns a function that will remove the listener again", () => {
      const event = new Event()
      const listener = jest.fn()
      const remove = event.add(listener)
      expect(event.listeners.size).toBe(1)
      remove()
      expect(event.listeners.size).toBe(0)
    })
  })

  describe("remove", () => {
    it("removes a listener from the event", () => {
      const event = new Event()
      const listener = jest.fn()
      event.add(listener)
      expect(event.listeners.size).toBe(1)
      event.remove(listener)
      expect(event.listeners.size).toBe(0)
    })
  })

  describe("emit", () => {
    it("emits an event", () => {
      const event = new Event<string>()
      const listener = jest.fn()
      event.add(listener)
      event.emit("test")
      expect(listener).toHaveBeenCalledWith("test")
    })
  })

  describe("clear", () => {
    it("clears all listeners from the event", () => {
      const event = new Event()
      const listener = jest.fn()
      event.add(listener)
      expect(event.listeners.size).toBe(1)
      event.clear()
      expect(event.listeners.size).toBe(0)
    })
  })
})
