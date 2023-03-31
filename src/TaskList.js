import React from "react";
import { Box, IconButton } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import DeleteIcon from "@mui/icons-material/Delete";

const TaskList = ({ tasks, handleToggle, handleDelete }) => {
  return (
    <>
      {tasks.map((task) => (
        <Box key={task.id} sx={detailBox}>
          <span
            style={task.completed ? { textDecoration: "line-through" } : {}}
          >
            {task.title}
          </span>
          <Checkbox
            checked={task.completed}
            onChange={() => handleToggle(task.id)}
          />
          <IconButton
            onClick={() => handleDelete(task.id)}
            edge="end"
            aria-label="delete"
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      ))}
    </>
  );
};

export default TaskList;

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

// import {
//   Button,
//   Checkbox,
//   List,
//   ListItem,
//   ListItemButton,
//   ListItemIcon,
//   ListItemText,
// } from "@mui/material";
// import React from "react";

// const TaskList = ({ todoList, handleClear, handleToggle, handleDelete }) => {
//   return (
//     <div>
//       {todoList.length > 0 ? (
//         <List>
//           {todoList.map((item, index) => {
//             const labelStyle =
//               item && item.completed ? { textDecoration: "line-through" } : {};

//             return (
//               <ListItem key={index} disablePadding>
//                 <ListItemButton onClick={() => handleToggle(index)}>
//                   <ListItemIcon>
//                     <Checkbox checked={item.completed} />
//                   </ListItemIcon>
//                   <ListItemText
//                     primary={<span style={labelStyle}>{item.task}</span>}
//                   />
//                   <Button onClick={() => handleDelete(index)}>Delete </Button>
//                 </ListItemButton>
//               </ListItem>
//             );
//           })}
//         </List>
//       ) : (
//         <p>No tasks available</p>
//       )}

//       {todoList.length > 0 && (
//         <Button onClick={handleClear}>Clear All Tasks</Button>
//       )}
//     </div>
//   );
// };

// export default TaskList;
