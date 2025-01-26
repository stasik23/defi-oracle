'use client';
import React, { useState } from "react";
import { Box, Drawer, List, CssBaseline, AppBar, Toolbar, IconButton } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Menu as MenuIcon } from "@mui/icons-material";
import SideBarList from "../SideBarList";
import { UserAccount } from "../UserAccount";

export interface SidebarProps {
  children?: React.ReactNode;
}

export const Header = ({ children }: SidebarProps) => {
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex"}}>
      <AppBar
        position="fixed"
        sx={{
          borderRight: "1px solid gray",
          backgroundColor: "black",
          height: "70px",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between", // Распределение элементов по краям
            borderBottom: "1px solid gray",
            alignItems: "center",
            height: "100%",
          }}
        >
          <div className="flex items-center">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={toggleDrawer}
              sx={{ mr: 2 }}
            >
              {open ? <ArrowBackIcon /> : <MenuIcon />}
            </IconButton>
            <div className="font-inter font-bold text-2xl">Wallet</div>
          </div>
          <div>
            <UserAccount avatarUrl="/images/avatar.png" name="Admin" />
          </div>
        </Toolbar>
      </AppBar>

      {/* Sidebar Drawer */}
      <Drawer
        sx={{
          width: 400,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 400,
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <List sx={{ bgcolor: 'black', overflow: "hidden", borderRight: "1px solid gray" }}>
          <SideBarList activeItem={"0"} toggleDrawerAction={toggleDrawer} />
        </List>
      </Drawer>
    </Box>
  );
};
