import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }} className={styles.root}>
      <AppBar position="static" className={styles.app_bar}>
        <Toolbar className={styles.tool_bar}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ReduxToolkit Todo
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
