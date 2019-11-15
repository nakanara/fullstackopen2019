import React from 'react';
import ReactDOM from 'react-dom';

// const App = () => {
//   console.log('Hello from component');
//   return (
//     <div>
//       <p>Hello world</p>
//     </div>
//   )
// }

// const App = () => {
//   const now = new Date()
//   const a = 10
//   const b = 20

//   return (
//     <div>
//       <p>Hello world, it is {now.toString()}</p>
//       <p>
//         {a} plus {b} is {a+b}
//       </p>
//     </div>
//   )
// }
// ReactDOM.render(<App />, document.getElementById('root'));

// const App = () => {
//   const now = new Date()
//   const a = 10
//   const b = 20
  
//   return React.createElement(
//     'div',
//     null,
//     React.createElement(
//       'p', null, 'Hello world, it is ', now.toString()      
//     ),
//     React.createElement(
//       'p', null, 'a', ' plus ', b, ' is ', a+b
//     )
//   )
// }

// ReactDOM.render(
//   React.createElement(App, null),
//   document.getElementById('root')
// )

// Chapter 1
// const Hello = (props) => (
//   <div>
//     <p>Hello world {props.name}, you are {props.age} years old</p>
//   </div>
// )

// const App = () => {  
//   const age = 10

//   return (
//     <>
//     <h1>Greetings</h1>
//     <Hello name="Georgs" age={26+10}/>
//     <Hello name="Daisy" age={age}/>
//     <Hello name="Miky" />
//     <Footer />
//     </>
//   )
// }

// const Footer = () => {
//   return (
//     <div>
//       greeting app created by 
//       <a href="https://github.com/mluukkai">mluukkai</a>
//     </div>
//   )
// }

// ReactDOM.render(<App />, document.getElementById('root'));



// # chapter 1-1
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using porps to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p> Number of exercises { exercises1 + exercises2 + exercises3 }</p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));