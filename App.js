import React, { useState } from "react";
import ReactDOM from "react-dom";

const Header = (props) => {
  return (
    <div>
      <h1>{props.header}</h1>
    </div>
  )
}

const Button = ( {handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)



const History = (props) => {
  if(props.total === 0) {
    return <p>No feedback given</p>
  }
  return (
    <table>
      <tbody>
        <Statistic text="good" value={props.good} />
        <Statistic text="neutral" value={props.nautral} />
        <Statistic text="bad" value={props.bad} />
        <Statistic text="all" value={props.total} />
        <Statistic text="average" value={props.average} />
        <Statistic text="positive" value={props.posotove} />
      </tbody>
    </table>
  )
}
const Statistic = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const App = () => {

  const header = 'Give feedback'

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = good + neutral + bad
  const average = ((good + bad * -1) / total).toFixed(2)
  const positive = ((good / total) * 100).toFixed(2).toString(10) + " %"

  const handleGood = () => {
    setGood(good + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <div>
        <Header header = {header} />
        <Button handleClick={handleGood} text = 'good'/>
        <Button handleClick={handleNeutral} text = 'neutral'/>
        <Button handleClick={handleBad} text = 'bad'/>
      </div>
      <div>
        <h1>Statistic</h1>
        <History
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          average={average}
          posotove={positive}
        />
      </div>
    </div>
  )
}


export default App