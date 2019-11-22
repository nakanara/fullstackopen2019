import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Button = ({onClick, text}) => {
  return (
    <>
      <button onClick={onClick}>{text}</button>
    </>
  )
}

const Statistic = ({text, value}) => {
  return (
    <>
    <label>{text} {value}</label><br/>
    </>
  )
}

const Statistics = (props) => {
  return(
    <div>
      <Statistic text="good" value ={props.good} />
      <Statistic text="neutral" value ={props.neutral} />
      <Statistic text="bad" value ={props.bad} />
    </div>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={()=>setGood(good +1)} text="good" />
      <Button onClick={()=>setNeutral(neutral +1)} text="neutral" />
      <Button onClick={()=>setBad(bad +1)} text="bad" />
      <h1>statistics </h1>

      <Statistics good={good} neutral={neutral} bad={bad}/>
      <Statistic value={good} text="good"/>
      <Statistic value={neutral} text="neutral"/>
      <Statistic value={bad} text="bad"/>
      <Statistic value={(good+neutral+bad)} text="all"/>
      <Statistic value={(good+(bad*-1)) /(good+neutral+bad)} text="average"/>
      <Statistic value={(((good)/(good+neutral+bad))*100) + "%"} text="positive"/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)