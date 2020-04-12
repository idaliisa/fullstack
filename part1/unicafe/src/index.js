import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Header = ({text}) => {
  return (
    <div>
      <h1>{text}</h1>
    </div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const Statistic = (props) => {
  return (
    <div>
      <p>{props.text} {props.value} {props.unit}</p>
    </div>
  )
}

const Statistics = (props) => {
  if (props.all === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <Statistic text="good" value={props.good}/>
      <Statistic text="neutral" value={props.neutral}/>
      <Statistic text="bad" value={props.bad}/>
      <Statistic text="all" value={props.all}/>
      <Statistic text="average" value={props.average}/>
      <Statistic text="positive" value={props.positive} unit="%"/>
    </div>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [score, setScore] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
    setScore(score + 1)
    setAll(all + 1)
    setAverage((score + 1) / (all + 1))
    setPositive((good + 1)/ (all + 1) * 100)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
    setAverage(score / (all + 1))
    setPositive(good/ (all + 1) * 100)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
    setScore(score - 1)
    setAll(all + 1)
    setAverage((score - 1) / (all + 1))
    setPositive(good/ (all + 1) * 100)
  }


  return (
    <div>
      <Header text="give feedback"></Header>
      <Button onClick={handleGoodClick} text="good"/>
      <Button onClick={handleNeutralClick} text="neutral"/>
      <Button onClick={handleBadClick} text="bad"/>
      <Header text="statistics"></Header>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)