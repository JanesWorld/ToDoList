import React from "react";
import { useState } from "react";
import { Box } from "@mui/system";
import { Button, TextField, ButtonGroup } from "@mui/material";

const TaskInput = ({
  handleAddTask,
  handleInputChange,
  inputValue,
  handleTagClick,
}) => {
  const [selectedTag, setSelectedTag] = useState("");

  return (
    <div>
      <Box sx={{ height: "150px", width: "150px" }}>
        <TextField
          id="outlined-basic"
          label="Write Task"
          onChange={handleInputChange}
          value={inputValue}
        />
        <ButtonGroup>
          <Button
            variant={selectedTag === "Now" ? "contained" : "outlined"}
            onClick={() => setSelectedTag("Now")}
          >
            Now
          </Button>

          <Button
            variant={selectedTag === "Later" ? "contained" : "outlined"}
            onClick={() => setSelectedTag("Later")}
          >
            Later
          </Button>

          <Button
            variant={selectedTag === "Backlog" ? "contained" : "outlined"}
            onClick={() => setSelectedTag("Backlog")}
          >
            Backlog
          </Button>
        </ButtonGroup>
        <Button onClick={() => handleAddTask(inputValue, selectedTag)}>
          + Add Task
        </Button>
      </Box>
    </div>
  );
};

export default TaskInput;
