import { Button, TextField } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useState } from "react";
import TaskList from "./TaskList";
import TaskInput from "./TaskInput";
import TaskHolder from "./TaskHolder";
import { v4 as uuid } from "uuid";

const AddTask = ({ todoList, setToDoList }) => {
  // const [todoList, setToDoList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  const handleAddTask = (task, tag) => {
    if (task && tag) {
      const newTask = {
        id: uuid(),
        title: task,
        completed: false,
        tag: tag,
      };

      if (tag === "Now") {
        newTask.status = "now";
      } else if (tag === "Later") {
        newTask.status = "later";
      } else if (tag === "Backlog") {
        newTask.status = "backlog";
      }
      setToDoList((prevList) => [...prevList, newTask]);
      setInputValue("");
      setSelectedTag("");
    }
  };

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
  };

  const handleClear = () => {
    setToDoList([]);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleToggle = (id) => {
    setToDoList((prevList) =>
      prevList.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDelete = (id) => {
    setToDoList((prevList) => prevList.filter((task) => task.id !== id));
  };

  console.log("here are my tasks", JSON.stringify(todoList));
  return (
    <>
      <TaskInput
        handleAddTask={handleAddTask}
        handleInputChange={handleInputChange}
        inputValue={inputValue}
        handleTagClick={handleTagClick}
      />

      <TaskHolder
        tasks={todoList}
        handleToggle={handleToggle}
        handleDelete={handleDelete}
      />

      {/* {todoList.length > 0 && (
        <TaskList
          tasks={todoList}
          handleClear={handleClear}
          handleToggle={handleToggle}
          handleDelete={handleDelete}
        />
      )} */}
    </>
  );
};

export default AddTask;
