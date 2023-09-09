import { TurnedInNot } from "@mui/icons-material";
import {
  Box,
  Divider,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";

import PropTypes from "prop-types";

export const SideBar = ({ drawerWidth = 240 }) => {
  return (
    <Box
      component="nav"
      sx={{
        width: {
          sm: `${drawerWidth}px`,
          flexShrink: {
            sm: 0,
          },
        },
        flexShrink: { sm: 0 },
      }}
    >
      <Drawer
        variant="permanent"
        open={true}
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Hugo Julian
          </Typography>
        </Toolbar>

        <Divider />
        <List>
          {[
            "Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
            "Agosto",
            "Setiembre",
            "Noviembre",
            "Diciembre",
          ].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <TurnedInNot />
                </ListItemIcon>
                <Grid container>
                  <ListItemText primary={text} />

                  <ListItemText secondary="texto de prueba para el sidebar" />
                </Grid>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

SideBar.propTypes = {
  drawerWidth: PropTypes.number.isRequired,
};
