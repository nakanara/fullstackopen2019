import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Hello = ({name, sex, age, count}) => {
  //const {name, sex, age} = props;

  const bornYear = () => new Date().getFullYear() - age;

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old {sex} / count {count}
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

const Display = ({count}) => <div><h1>{count}</h1></div>

const Button = (props) => {

  let {onClick, text} = props;
//  console.log('props is', props);
  return (
    <button onClick={onClick}>
    {text}
  </button>
  )
}
const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }

  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const App = (props) => {
  const name = 'Peter'
  const age = 10
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([]);

  //setTimeout(()=> setCount(count+1), 1000);

  const fnAddClick = () => {
    setCount(count+1);
    setHistory( history.concat('A'));
  }
  const fnMinusClick = () => {
    setCount(count-1);
    setHistory( history.concat('D'));
  }
  const fnZeroClick = () => {
    setCount(0);
    setHistory( history.concat('Z'));
  }
  

  return (
    <div>
      <h1>Greetings</h1>
      <Display count={count} />
      <Button onClick={fnAddClick} text="plus"/>
      <Button onClick={fnMinusClick} text="minus"/>
      <Button onClick={fnZeroClick} text="to zero"/>
      <History allClicks={history} />
      <Hello name="Maya" age={26 + 10} sex="M" count={count}/>
      <Hello name={name + 'A'} age={age+10} sex="M" count={count}/>
      <Hello name={name} age={age} sex="F" count={count}/>
    </div>
  )
}

  
ReactDOM.render(<App/>, document.getElementById('root'));
