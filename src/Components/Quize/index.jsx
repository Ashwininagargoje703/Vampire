import React, { useState, useEffect, useRef } from "react";
import {
  Typography,
  Radio,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Button,
  Box,
} from "@mui/material";

const quizQuestions = [
  // Question 1
  {
    question: "What is the core purpose of React.js?",
    options: [
      "Building mobile applications",
      "Creating interactive user interfaces for web applications",
      "Creating server-side APIs",
      "Managing databases",
    ],
    correctAnswer: "Creating interactive user interfaces for web applications",
  },
  // Question 2
  {
    question: "What is the virtual DOM in React?",
    options: [
      "A representation of the actual DOM in memory",
      "A special type of HTML used in React components",
      "A database for storing component data",
      "A testing tool in React",
    ],
    correctAnswer: "A representation of the actual DOM in memory",
  },
  // Question 3
  {
    question:
      "Which lifecycle method is invoked just before a component is removed from the DOM?",
    options: [
      "componentDidUnmount",
      "componentWillUnmount",
      "componentWillMount",
      "componentDidMount",
    ],
    correctAnswer: "componentWillUnmount",
  },
  // Question 4
  {
    question: "What is the purpose of props in React components?",
    options: [
      "Styling the component",
      "Managing component state",
      "Passing data from a parent component to a child component",
      "Handling user events",
    ],
    correctAnswer: "Passing data from a parent component to a child component",
  },
  // Question 5
  {
    question: "What does JSX stand for in React?",
    options: [
      "JavaScript XML",
      "JavaScript Extended",
      "JavaScript Framework",
      "JavaScript Syntax Extension",
    ],
    correctAnswer: "JavaScript XML",
  },
  // Question 6
  {
    question: "Which tool can be used to bootstrap a new React application?",
    options: ["React CLI", "React Starter", "create-react-app", "React Init"],
    correctAnswer: "create-react-app",
  },
  // Question 7
  {
    question: "What is the purpose of the useState hook in React?",
    options: [
      "Creating custom hooks",
      "Managing component state",
      "Handling HTTP requests",
      "Creating new components",
    ],
    correctAnswer: "Managing component state",
  },
  // Question 8
  {
    question:
      "In React, what is the key property used for when rendering lists of elements?",
    options: [
      "Styling list items",
      "Identifying each element in the list",
      "Ordering the list items",
      "Adding a unique CSS class to each list item",
    ],
    correctAnswer: "Identifying each element in the list",
  },
  // Question 9
  {
    question:
      "Which of the following is a valid way to conditionally render content in a React component?",
    options: [
      "Using if-else statements in JSX",
      "Using the ternary operator in JSX",
      "Using switch-case statements in JSX",
      "Using for loops in JSX",
    ],
    correctAnswer: "Using the ternary operator in JSX",
  },
  // Question 10
  {
    question: "What is the purpose of React Router in React applications?",
    options: [
      "Managing state in components",
      "Handling HTTP requests",
      "Enabling client-side routing in a single-page application",
      "Defining the structure of a web page",
    ],
    correctAnswer: "Enabling client-side routing in a single-page application",
  },
  // Add more questions as needed
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(60);
  const timerRef = useRef(null);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [answered, setAnswered] = useState(false);

  const handleNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
      setTimer(60);
      setAnswered(false);
    } else {
      clearInterval(timerRef.current);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer("");
      setTimer(60);
      setAnswered(false);
    }
  };

  const handleAnswerChange = (e) => {
    setSelectedAnswer(e.target.value);
    setAnswered(true);
  };

  const handleSubmit = () => {
    if (selectedAnswer === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    handleNextQuestion();
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      } else {
        handleNextQuestion();
      }
    }, 1000);

    return () => {
      clearInterval(timerRef.current);
    };
  }, [timer]);

  return (
    <div
      style={{
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
        alignContent: "center",
      }}
    >
      <Typography fontSize={30} fontWeight={700}>
        React Quize
      </Typography>

      <Typography fontSize={20}>Time left: {timer} seconds</Typography>
      <br />
      <br />

      {currentQuestion < quizQuestions.length ? (
        <div>
          <Typography variant="h5">
            {quizQuestions[currentQuestion].question}
          </Typography>
          <FormControl component="fieldset">
            <RadioGroup value={selectedAnswer} onChange={handleAnswerChange}>
              {quizQuestions[currentQuestion].options.map((option, index) => (
                <FormControlLabel
                  key={option}
                  value={option}
                  control={<Radio />}
                  label={option}
                />
              ))}
            </RadioGroup>
          </FormControl>

          <Box>
            {currentQuestion > 0 && (
              <Button variant="outlined" onClick={handlePreviousQuestion}>
                Previous
              </Button>
            )}
            <Button variant="contained" onClick={handleSubmit}>
              Submit
            </Button>
            {answered && currentQuestion < quizQuestions.length - 1 && (
              <Button variant="outlined" onClick={handleNextQuestion}>
                Next
              </Button>
            )}
          </Box>
        </div>
      ) : (
        <div>
          <Typography variant="h4">Quiz Complete!</Typography>
          <Typography variant="h6">
            Your Score: {score} / {quizQuestions.length}
          </Typography>
        </div>
      )}
    </div>
  );
};

export default Quiz;
