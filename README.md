# @hmans/things

A loose collection of microlibraries that didn't warrant a separate repository. Most of these are centered around building games with @react-three/fiber, and should be considered **experimental in nature**, with the possibility of eventually extracting some of the more useful and stable ones into separate projects later.

## Packages

Install the `@hmans/things` package to get everything that is in this repository. Alternatively, just install the packages you need:

#### General

- **[@hmans/types](https://github.com/hmans/things/tree/main/packages/hmans-types)**  
  A collection of utility types for TypeScript.
- **[@hmans/queue](https://github.com/hmans/things/tree/main/packages/hmans-queue)**  
  A tiny queue implementation.

#### @react-three/fiber:

- **[@hmans/r3f-animate](https://github.com/hmans/things/tree/main/packages/hmans-r3f-animate)**  
  Utility components for animating R3F scene objects using declarative JSX and functional composition.
- **[@hmans/r3f-lifecycle](https://github.com/hmans/things/tree/main/packages/hmans-r3f-lifecycle)**  
  Utility components and hooks for hooking into R3F component lifecycles, for when `useEffect` is still a little too scary.
- **[@hmans/r3f-shared-resource](https://github.com/hmans/things/tree/main/packages/hmans-r3f-shared-resource)**  
  A component decorator that makes it easy to create and re-use react-three-fiber resources like materials and geometries.

#### React:

- **[@hmans/use-animation-frame](https://github.com/hmans/things/tree/main/packages/hmans-use-animation-frame)**  
  A React hook for subscribing to the browser's animation frame.
- **[@hmans/use-const](https://github.com/hmans/things/tree/main/packages/hmans-use-const)**  
  A simple hook that allows you to define a constant value that will never change during the lifetime of the component.
- **[@hmans/use-list](https://github.com/hmans/things/tree/main/packages/hmans-use-list)**  
  A simple hook that will create and return a reactive list of items, along with functions to add and remove items to and from the list.
- **[@hmans/use-rerender](https://github.com/hmans/things/tree/main/packages/hmans-use-rerender)**  
  A hook that returns a function that, when called, will cause the component to re-render, no questions asked.
- **[@hmans/use-version](https://github.com/hmans/things/tree/main/packages/hmans-use-version)**  
  A hook that returns a numerical version number, and a function that will bump it up by one. Useful in situations where components need to be explicitly re-rendered, and side-effects need to react to this.

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
