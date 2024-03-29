import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const notes = [
  {
    id: 1,
    content: 'HTML is easy',
    date: '2019-05-30T17:30:31.098Z',
    important: true
  },
  {
    id: 2,
    content: 'Browser can execute only Javascript',
    date: '2019-05-30T18:39:34.091Z',
    important: false
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    date: '2019-05-30T19:20:14.298Z',
    important: true
  }
]


// const App = ({notes}) => {
  
//   const rows = () =>
//     notes.map(note => <li key={note.id}>{note.id} / {note.content}</li>)

//   return (
//     <div>
//       <h1>Notes</h1>
//       <ul>
//         {rows()}
//       </ul>
//     </div>
//   )
// }


// const Note = ({note}) => {
//   return (
//     <li>{note.content}</li>
//   )
// }
// const App = ({notes}) => {
//   const rows = () => notes.map(note=> 
//     <Note
//       key={note.id}
//       note={note}
//     />)

//     console.log(rows());
//   return (
//     <div>
//       <h1>Notes</h1>
//       <ul>
//         {rows()}
//       </ul>
//     </div>
//   )
// }


ReactDOM.render(
  <App notes={notes} />,
  document.getElementById('root')
)