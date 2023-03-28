import { Button, TextField } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useState } from "react";
import TaskList from "./TaskList";
import TaskInput from "./TaskInput";
import TaskHolder from "./TaskHolder";

const AddTask = () => {
  const [todoList, setToDoList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  const handleAddTask = (task, tag) => {
    if (task && tag) {
      const newTask = { task: task, completed: false, tag: tag };
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

  const handleToggle = (index) => {
    setToDoList((prevList) => {
      const newList = [...prevList];
      const item = newList[index];
      if (item) {
        item.completed = !item.completed;
      }
      return newList;
    });
  };

  const handleDelete = (index) => {
    setToDoList((prevList) => {
      const newList = [...prevList];
      newList.splice(index, 1);
      return newList;
    });
  };
  return (
    <>
      <TaskInput
        handleAddTask={handleAddTask}
        handleInputChange={handleInputChange}
        inputValue={inputValue}
        handleTagClick={handleTagClick}
      />

      {todoList.length > 0 && (
        <TaskList
          todoList={todoList}
          handleClear={handleClear}
          handleToggle={handleToggle}
          handleDelete={handleDelete}
        />
      )}
    </>
  );
};

export default AddTask;
