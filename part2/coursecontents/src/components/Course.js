import React from 'react';

const Header = ({ course }) => {
  return (
    <h1>{course.name}</h1>
  )
}

const Total = ({ course }) => {
  const sum = course.parts.reduce((a, b) => a + b.exercises, 0)
  return(
    <p>total of exercises {sum}</p>
  ) 
}

const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>    
  )
}

const Content = ({ course }) => {
  return (
    <div>
      <ul>
        {course.parts.map(c =>
          <Part key={c.id} name={c.name} exercises={c.exercises} />
        )}
      </ul>
    </div>
  )
}

const Course = ({course}) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default Course