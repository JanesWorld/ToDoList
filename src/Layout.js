import { Tabs, Tab, Box } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="appLayout-Container">
      <header>
        <h1>My To Do List</h1>
      </header>
      <div className="appLayout-Main">{children}</div>
      <div className="appLayout-Footer">Footer here</div>
    </div>
  );
};

export default Layout;
