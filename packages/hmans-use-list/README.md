# @hmans/use-list

## Summary

`useList` returns a reactive list of items together with functions to add and remove items to and from the list.

```tsx
const [list, addItem, removeItem, setList] = useList<T>()
```

If no argument is passed, the list will be initialized as an array of the given type, but you can also pass an initial value:

```tsx
useList([thing1, thing2])
```

Or pass a constructor function:

```tsx
useList(() => [thing1, thing2])
```

## Example

```tsx
import { useList } from "@hmans/use-list"

export const provideModuleRegistration = () => {
  const [things, addThing, removeThing] = useList<Thing>()

  return (
    <div>
      <button onClick={() => addThing(new Thing())} />
      <ul>
        {things.forEach((thing) => (
          <li>
            {thing.name}
            <button onClick={() => removeThing(thing)} />
          </li>
        ))}
      </ul>
    </div>
  )
}
```

## License

```
Copyright (c) 2022 Hendrik Mans

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
