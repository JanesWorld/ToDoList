import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import { Container, Stack } from "@mui/system";
import TaskList from "./TaskList";

const TaskHolder = ({ tasks, handleDelete, handleToggle }) => {
  const nowTasks = tasks
    ? tasks
        .map((task, index) => ({ ...task, originalIndex: index }))
        .filter((task) => task.status === "now")
    : [];
  const laterTasks = tasks
    ? tasks
        .map((task, index) => ({ ...task, originalIndex: index }))
        .filter((task) => task.status === "later")
    : [];
  const backlogTasks = tasks
    ? tasks
        .map((task, index) => ({ ...task, originalIndex: index }))
        .filter((task) => task.status === "backlog")
    : [];
  return (
    <Container>
      <Grid container>
        <Grid item xs={4} className="nowContainer">
          <Stack>
            <Box sx={categoryBox}>Now</Box>
            <TaskList
              tasks={nowTasks}
              handleToggle={(task) => handleToggle(task)}
              handleDelete={(id) => handleDelete(id)}
            />
          </Stack>
        </Grid>
        <Grid item xs={4} className="laterContainer">
          <Stack>
            <Box sx={categoryBox}>Later</Box>
            <TaskList
              tasks={laterTasks}
              handleToggle={(task) => handleToggle(task)}
              handleDelete={(id) => handleDelete(id)}
            />
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Stack>
            <Box sx={categoryBox}>Backlog</Box>
            <TaskList
              tasks={backlogTasks}
              handleToggle={(task) => handleToggle(task)}
              handleDelete={(id) => handleDelete(id)}
            />
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TaskHolder;

const categoryBox = {
  backgroundColor: "#D9D9D9",
  width: "80%",
  height: "60px",
  color: "#AF4242",
  textAlign: "center",
  fontWeight: "bold",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const detailBox = {
  backgroundColor: "#D9D9D9",
  width: "80%",
  height: "auto",
  color: "black",
  textAlign: "left",
  fontWeight: "bold",
  display: "flex",
  justifyContent: "left",
  marginTop: "20px",
};
