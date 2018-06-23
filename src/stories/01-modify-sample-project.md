# Lesson 1: Modify a Sample Project

## Setup

Download and install this sample project:

```sh
mkdir ~/Projects
cd ~/Projects
git clone https://github.com/airbnb/react-dates
cd react-dates
yarn
```

Start the HTTP server:

```sh
yarn run start-storybook -p 8001
```

## Code

Make the following additions to `stories/SingleDatePicker.js`, after the `storiesOf('SingleDatePicker (SDP)', module)` line:

```jsx
  .addWithInfo('class project', () => (
    <div>
      <h1>Hello world 1!</h1>
      <h2>Hello world 2!</h2>
      <h3>Hello world 3!</h3>

      <div
        style={{ backgroundColor: '#cc919a', color: 'white', fontSize: '24pt' }}
        onClick={(event) => {
          console.log('hello world!')
          alert('do the thing ' + event.name)
        }}
      >
        A div
      </div>

      <span style={{ backgroundColor: 'red', color: 'white' }}>A span</span>
      <span style={{ backgroundColor: 'blue', color: 'white' }}>Another span</span>
      <p style={{ backgroundColor: 'blue', color: 'white' }}>A paragraph</p>
      <p>Another paragraph</p>
      <div style={{ color: 'blue' }}>
        <h1>Hello <span style={{ color: 'red' }}>world!</span></h1>
      </div>
    </div>
  ))
```

## Explanation

### Javascript Functions

**Inline anonymous functions**

```js
const plusTwo = num => num + 2
console.log('myFunction returned', plusTwo(4))
```

The `(num) => { return num + 2; }` part defines a function which takes an argument named `num`, and returns `num + 2` when called. We can assign the function to a constant value named `plusTwo`.

The `console.log(...)` part shows a message on the JS console. You can see the JS console by right-clicking on a webpage -> Inspect -> Console. You can type in those two lines above to see the message.

There are two more ways to write the same thing.

**Explicit anonymous functions**

```js
const plusThree = (num) => {
  return num + 4
}
console.log('myFunction returned', plusThree(5))
```

This does the same thing, but adds `3`. When we have only one argument (`num`), we can choose whether to include the `()` around it, or keep it plain. If we have more than one argument, then we must use `()` around the arguments.

If a function has `=> {}`, then it must have a `return` statement to get a value back. If we do not use `return`, the function gets the special value `undefined` back.

If a function does not have `=> {}`, then you do not use `return`: instead, the expression after `=>` is evaluated and then becomes the value we get back from the function.

Sometimes we will use `=> ()`, but the `()` part is optional. We use it when we have a very long statement (like some JSX code) that takes multiple lines, so that the code is easier to read.

**Named functions**

```js
function plusFour(num) {
  return num + 4
}
console.log('myFunction returned', plusFour(6))
```

This does the same thing, but adds `4`. The first syntax is new, and second syntax is older. Most people like to use the first syntax.

### Javascript objects

In Javascript, we define objects like this:

```js
const myObject = { helloText: 'hello world', otherText: '' }
console.log(myObject.helloPhrase)
```

Objects have keys and values. The above example has two keys (`helloText` and `otherText`) and two values (`'hello world'` and `''`, which is an empty string). When we do `myObject.helloPhrase`, the result is `'hello world'`.

### HTML tags like &lt;div> and &lt;span>

`<div>` is an HTML tag. It is usually used to render a piece of a web page. It's usually on the outside.

`<p>` is a tag used for a paragraph or line of text. It is usually inside `<div>`.

`<span>` is usually on the inside of `<p>`, used to change the color of one or two words within a line.

`<img>` is a tag that displays an image. It is usually inside of `<div>`.

`<a>` is a tag that makes whatever is inside of it clickable, and underlines any text inside of it by default. When clicked, the browser goes to a different webpage, or a different part of the current website. It usually goes inside `<div>`, inside `<p>`, and outside of `<img>`.

`<button>` makes a button with some text like "Update" or "Cancel". It is usually inside of `<div>`.

### JSX

When we take an HTML tag and mix it with some `{}` characters and some Javascript code, we get JSX. Browsers do not understand JSX, so you can't use it in the JS console. We have tools which convert the JSX into HTML and Javascript, and then the browser can understand the result. In these examples, we will return JSX from a function, since that's how we usually write JSX in React websites.

```jsx
() => <p>6 added to 2 is {plusTwo(6)}</p>
```

In the above example, we start with an HTML `<p>` tag, and then we have some Javascript code inside of `{}`.

```jsx
() => <span style={{ backgroundColor: 'red', color: 'white' }}>A span</span>
```

In the above example, we start with `<span>` and change its `style` attribute with some Javascript. The Javascript contains an object with the keys `backgroundColor` and `color`. Another way to write the same thing is:

```jsx
() => {
  const myStyle = { backgroundColor: 'red', color: 'white' }
  return <span style={myStyle}>A span</span>
}
```

### React components

```jsx
import React, { Component } from 'react'

const MyComponent extends Component {
  render() {
    return (
      <p>Hello world!</p>
    )
  }
}

export default MyComponent
```

This is an example of a React component. Usually we have one React component in each file. The JSX code returned from the `render()` method is displayed on the website.

```jsx
import React from 'react'

const MyComponent = () => <p>Hello world!</p>

export default MyComponent
```

Another way to write the same thing. If a component is just a function, then we call it a "pure component". When rendering, the function is called and the value is displayed on the website. I usually write the first method, since it's easier to make changes later.

### CSS

CSS definitions can be added to React projects in two different ways. In one way, we have a separate file named something like `myfile.css`, and then we have JSX like this:

**External CSS**

`file.css`:

```css
.Header {
  background-color: 'red';
  color: 'white';
}
```

`file.jsx`:

```jsx
const myClassName = 'Header'
const MyComponent = () => (
  <p className={myClassName}>
    Hello world!
  </p>
)
```

We have two different files named `file.css` and `file.jsx`. The name `Header` must match in both our CSS and our JSX file. When we write `.Header` in a CSS file, it means that we apply those style definitions (background color and text color) to any HTML on the website which has a className of `Header`.

Another way to write it is like this:

**Inline CSS**

```jsx
const MyComponent = () => (
  <p style={{ backgroundColor: 'red', color: 'white' }}>
    Hello world!
  </p>
)
```

Notice that the CSS is in the same file as the code, and we write `backgroundColor` instead of `background-color` when we use inline CSS.

People have many different opinions about whether External CSS or Inline CSS is better. We will probably use a library when we write CSS so it might look a little bit different, but similar to Inline CSS.

There are many different kinds of style definitions in addition to `backgroundColor` and `color`, but we will explain some of those later.
