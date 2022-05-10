const course = 'Half Stack application development'
const part1 = 'Fundamentals of React'
const exercises1 = 10
const part2 = 'Using props to pass data'
const exercises2 = 7
const part3 = 'State of a component'
const exercises3 = 14
const total = 'Number of exercises'
const totaln = exercises1 + exercises2 + exercises3

const Header = (props) => {
  return (
    <div>
      <p>{props.course}</p>
    </div>
  )
}
const Part = (props) => {
  return (
    <div>
      {props.part} {props.exercises}
    </div>
  )
}

const Content = () => {
  return (
    <div>
      <Part part = {part1} exercises = {exercises1}/>
      <Part part = {part2} exercises = {exercises2}/>
      <Part part = {part3} exercises = {exercises3}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p> {props.total} {props.totaln}</p>
    </div>
  )
}
const App = () => {
  return (
    <div>
      <Header course = {course} />
      <Content />
      <Total total = {total} totaln = {totaln}/>
    </div>
  )
}

export default App