import React from "react";
import ReactDOM from "react-dom";

const Header = props => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  );
};

const Content = props => {
  return (
    <>
      <Part name={props.part1} exercise={props.exercise1} />
      <Part name={props.part2} exercise={props.exercise2} />
      <Part name={props.part3} exercise={props.exercise3} />
    </>
  );
};

const Part = props => {
  return (
    <>
      <p>
        {props.name} {props.exercise}
      </p>
    </>
  );
};

const Total = props => {
  return (
    <>
      <p>
        Number of exercises{" "}
        {props.exercise1 + props.exercise2 + props.exercise3}
      </p>
    </>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const contentBody = {
    part1: "Fundamentals of React",
    exercise1: 10,
    part2: "Using props to pass data",
    exercise2: 7,
    part3: "State of a component",
    exercise3: 14
  };

  return (
    <div>
      <Header course={course} />
      <Content {...contentBody} />
      <Total
        exercise1={contentBody.exercise1}
        exercise2={contentBody.exercise2}
        exercise3={contentBody.exercise3}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
