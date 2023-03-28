import React from "react";
import { Box } from "@mui/material";

const TaskList = ({ tasks }) => {
  return (
    <>
      {tasks.map((task) => (
        <Box key={task.id} sx={detailBox}>
          {task.title}
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
