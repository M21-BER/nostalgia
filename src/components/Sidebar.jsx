import {
  Album,
  Download,
  Favorite,
  Home,
  LiveTv,
  ModeNight,
  MusicNote,
  Settings,
  Shop,
  Stream,
  TrackChanges,
} from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import React, { memo } from "react";

const Sidebar = ({ setIsDarkMode }) => {
  const menuItems = [
    { label: "Home", icon: <Home /> },
    { label: "Music", icon: <MusicNote /> },
    { label: "Tracks", icon: <TrackChanges /> },
    { label: "Favorite", icon: <Favorite /> },
    { label: "Stream", icon: <Stream /> },
    { label: "Downloads", icon: <Download /> },
    { label: "Albums", icon: <Album /> },
    { label: "Live", icon: <LiveTv /> },
  ];
  return (
    <Box
      minWidth={200}
      maxWidth={300}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box position="fixed">
        <List>
          {menuItems.map((item, index) => (
            <ListItem disablePadding key={index}>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch onChange={(e, value) => setIsDarkMode(value)} />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default memo(Sidebar);
