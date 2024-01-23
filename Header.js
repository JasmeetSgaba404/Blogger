import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  AppBar,
  Toolbar,
  Button,
  Typography,
  Tabs,
  Tab,
} from "@mui/material";

const Header = () => {

  return (
    <>
   
        <AppBar position="sticky">
            <Toolbar>
                <Typography>
                    <Button LinkComponent={Link} to="/" className="text-white fs-4">Big-Blogger</Button>
                </Typography>
            </Toolbar>
        </AppBar>

    </>
  );
};

export default Header;